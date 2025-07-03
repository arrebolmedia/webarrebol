// Masonry Gallery Layout
class MasonryGallery {
    constructor(container) {
        this.container = container;
        this.items = container.querySelectorAll('.gallery-item');
        this.columnCount = this.getColumnCount();
        this.columnHeights = [];
        this.gap = this.getGap();
        
        this.init();
        this.bindEvents();
    }
    
    getColumnCount() {
        const containerWidth = window.innerWidth;
        if (containerWidth <= 480) return 1;
        if (containerWidth <= 768) return 2;
        return 3;
    }
    
    getGap() {
        const containerWidth = window.innerWidth;
        if (containerWidth <= 480) return 12;
        if (containerWidth <= 768) return 15;
        return 20;
    }
    
    init() {
        // Set container positioning
        this.container.style.position = 'relative';
        this.calculateLayout();
    }
    
    calculateLayout() {
        // Reset column heights
        this.columnHeights = new Array(this.columnCount).fill(0);
        
        // Calculate item width
        const containerWidth = this.container.offsetWidth;
        const totalGaps = (this.columnCount - 1) * this.gap;
        const itemWidth = (containerWidth - totalGaps) / this.columnCount;
        
        // Position each item
        this.items.forEach((item, index) => {
            const img = item.querySelector('img');
            
            if (img) {
                // Set item width
                item.style.width = `${itemWidth}px`;
                
                // Handle image loading
                if (img.complete && img.naturalHeight !== 0) {
                    this.positionItem(item, itemWidth);
                } else {
                    img.addEventListener('load', () => {
                        this.positionItem(item, itemWidth);
                    });
                    
                    // Fallback for broken images
                    img.addEventListener('error', () => {
                        this.positionItem(item, itemWidth);
                    });
                }
            }
        });
    }
    
    positionItem(item, itemWidth) {
        // For mobile single column, use normal flow
        if (this.columnCount === 1) {
            item.style.position = 'relative';
            item.style.left = 'auto';
            item.style.top = 'auto';
            item.style.width = '100%';
            return;
        }
        
        // Find shortest column
        const shortestColumnIndex = this.columnHeights.indexOf(Math.min(...this.columnHeights));
        
        // Calculate position
        const x = shortestColumnIndex * (itemWidth + this.gap);
        const y = this.columnHeights[shortestColumnIndex];
        
        // Position item
        item.style.position = 'absolute';
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        
        // Update column height
        const itemHeight = item.offsetHeight;
        this.columnHeights[shortestColumnIndex] += itemHeight + this.gap;
        
        // Update container height
        const maxHeight = Math.max(...this.columnHeights);
        this.container.style.height = `${maxHeight}px`;
    }
    
    bindEvents() {
        // Recalculate layout on window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const newColumnCount = this.getColumnCount();
                const newGap = this.getGap();
                
                if (newColumnCount !== this.columnCount || newGap !== this.gap) {
                    this.columnCount = newColumnCount;
                    this.gap = newGap;
                    this.calculateLayout();
                }
            }, 250);
        });
    }
    
    refresh() {
        this.calculateLayout();
    }
}

// Initialize masonry when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('gallery-masonry');
    if (galleryContainer) {
        // Small delay to ensure CSS is loaded
        setTimeout(() => {
            const masonry = new MasonryGallery(galleryContainer);
            
            // Refresh layout after all images are loaded
            const images = galleryContainer.querySelectorAll('img');
            let loadedImages = 0;
            const totalImages = images.length;
            
            function checkAllLoaded() {
                loadedImages++;
                if (loadedImages === totalImages) {
                    setTimeout(() => masonry.refresh(), 50);
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
            
            // Fallback refresh after 2 seconds
            setTimeout(() => masonry.refresh(), 2000);
        }, 100);
    }
});
