// Floating Images Anti-Collision System
class FloatingImagesManager {
    constructor(container) {
        this.container = container;
        this.images = container.querySelectorAll('.floating-image');
        this.positions = [];
        this.minDistance = 20; // Minimum distance between images
        this.textElement = container.parentNode.querySelector('.inspiration-text');
        
        this.init();
        this.bindEvents();
    }
    
    init() {
        // Wait for images to load and text to be positioned
        setTimeout(() => {
            this.calculateSafePositions();
        }, 500);
    }
    
    calculateSafePositions() {
        const containerRect = this.container.getBoundingClientRect();
        const textRect = this.textElement ? this.textElement.getBoundingClientRect() : null;
        
        // Reset positions array
        this.positions = [];
        
        // Define image sizes for different screen sizes
        const imageSizes = this.getImageSizes();
        
        this.images.forEach((image, index) => {
            const size = imageSizes[index];
            let position = this.findSafePosition(size, containerRect, textRect);
            
            // Apply position
            this.applyPosition(image, position, size);
            
            // Store position for collision detection
            this.positions.push({
                x: position.x,
                y: position.y,
                width: size.width,
                height: size.height
            });
        });
    }
    
    getImageSizes() {
        const isMobile = window.innerWidth <= 768;
        const isTablet = window.innerWidth <= 1024;
        
        if (isMobile) {
            return [
                { width: 120, height: 150 },
                { width: 100, height: 80 },
                { width: 130, height: 100 },
                { width: 90, height: 120 },
                { width: 80, height: 80 }
            ];
        } else if (isTablet) {
            return [
                { width: 160, height: 200 },
                { width: 140, height: 110 },
                { width: 180, height: 130 },
                { width: 120, height: 160 },
                { width: 110, height: 110 }
            ];
        } else {
            return [
                { width: 200, height: 250 },
                { width: 180, height: 140 },
                { width: 220, height: 160 },
                { width: 160, height: 200 },
                { width: 140, height: 140 }
            ];
        }
    }
    
    findSafePosition(size, containerRect, textRect) {
        const maxAttempts = 50;
        let attempts = 0;
        
        while (attempts < maxAttempts) {
            const position = this.generateRandomPosition(size, containerRect);
            
            // Check collision with text
            if (textRect && this.isColliding(position, size, {
                x: textRect.left - containerRect.left,
                y: textRect.top - containerRect.top,
                width: textRect.width,
                height: textRect.height
            })) {
                attempts++;
                continue;
            }
            
            // Check collision with other images
            let hasCollision = false;
            for (let existingPos of this.positions) {
                if (this.isColliding(position, size, existingPos)) {
                    hasCollision = true;
                    break;
                }
            }
            
            if (!hasCollision) {
                return position;
            }
            
            attempts++;
        }
        
        // Fallback: return a position even if not ideal
        return this.generateFallbackPosition(size, containerRect);
    }
    
    generateRandomPosition(size, containerRect) {
        const margin = 40;
        const maxX = containerRect.width - size.width - margin;
        const maxY = containerRect.height - size.height - margin;
        
        return {
            x: Math.random() * Math.max(maxX, 0) + margin,
            y: Math.random() * Math.max(maxY, 0) + margin
        };
    }
    
    generateFallbackPosition(size, containerRect) {
        // Generate positions in a grid-like pattern as fallback
        const cols = 3;
        const rows = 2;
        const cellWidth = containerRect.width / cols;
        const cellHeight = containerRect.height / rows;
        
        const index = this.positions.length;
        const col = index % cols;
        const row = Math.floor(index / cols);
        
        return {
            x: col * cellWidth + (cellWidth - size.width) / 2,
            y: row * cellHeight + (cellHeight - size.height) / 2
        };
    }
    
    isColliding(pos1, size1, pos2) {
        const buffer = this.minDistance;
        
        return !(pos1.x + size1.width + buffer < pos2.x ||
                pos2.x + pos2.width + buffer < pos1.x ||
                pos1.y + size1.height + buffer < pos2.y ||
                pos2.y + pos2.height + buffer < pos1.y);
    }
    
    applyPosition(image, position, size) {
        // Apply position and size
        image.style.left = `${position.x}px`;
        image.style.top = `${position.y}px`;
        image.style.width = `${size.width}px`;
        image.style.height = `${size.height}px`;
        
        // Remove any existing rotation for cleaner look
        image.style.transform = 'rotate(0deg)';
        
        // Ensure the image is visible
        image.style.opacity = '1';
    }
    
    bindEvents() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.calculateSafePositions();
            }, 300);
        });
    }
    
    refresh() {
        this.calculateSafePositions();
    }
}

// Initialize floating images manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const floatingContainer = document.getElementById('floating-images-container');
    if (floatingContainer) {
        // Wait for images to load
        setTimeout(() => {
            const manager = new FloatingImagesManager(floatingContainer);
            
            // Additional refresh after all images are loaded
            const images = floatingContainer.querySelectorAll('img');
            let loadedImages = 0;
            
            function checkAllLoaded() {
                loadedImages++;
                if (loadedImages === images.length) {
                    setTimeout(() => manager.refresh(), 100);
                }
            }
            
            images.forEach(img => {
                if (img.complete && img.naturalHeight !== 0) {
                    checkAllLoaded();
                } else {
                    img.addEventListener('load', checkAllLoaded);
                    img.addEventListener('error', checkAllLoaded);
                }
            });
        }, 800); // Longer delay to ensure text is positioned
    }
});
