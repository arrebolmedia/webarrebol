// Simple and Reliable Slider
class ArrebolSlider {
    constructor() {
        this.currentIndex = 0;
        this.slides = [];
        this.dots = [];
        this.autoplayTimer = null;
        this.isPlaying = false;
        this.interval = 3500; // 3.5 seconds
        
        this.init();
    }
    
    init() {
        // Ensure DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    setup() {
        // Get slider elements
        this.slides = document.querySelectorAll('.slide');
        this.container = document.querySelector('.slider-container');
        this.loadingIndicator = document.querySelector('.slider-loading');
        
        if (this.slides.length === 0) {
            console.warn('No slides found for slider');
            return;
        }
        
        // Initialize slides
        this.initializeSlides();
        
        // Preload images before showing slider
        this.preloadImages().then(() => {
            // Remove loading indicator
            if (this.loadingIndicator) {
                this.loadingIndicator.style.opacity = '0';
                setTimeout(() => {
                    this.loadingIndicator.remove();
                }, 500);
            }
            
            // Show first slide
            this.showSlide(0);
            
            // Start autoplay
            this.startAutoplay();
            
            // Mark container as loaded
            if (this.container) {
                this.container.classList.add('loaded');
            }
        });
        
        // Bind events
        this.bindEvents();
    }
    
    initializeSlides() {
        // Ensure all slides start hidden except first
        this.slides.forEach((slide, index) => {
            slide.style.opacity = '0';
            slide.style.visibility = 'hidden';
            slide.classList.remove('active');
            
            if (index === 0) {
                slide.classList.add('active');
                slide.style.opacity = '1';
                slide.style.visibility = 'visible';
            }
            
            // Ensure slides are positioned correctly for crossfade
            slide.style.position = 'absolute';
            slide.style.top = '0';
            slide.style.left = '0';
            slide.style.width = '100%';
            slide.style.height = '100%';
        });
    }
    
    showSlide(index) {
        // Validate index
        if (index < 0 || index >= this.slides.length) return;
        
        // Store previous slide
        const prevSlide = this.slides[this.currentIndex];
        
        // Update current index
        this.currentIndex = index;
        
        // Get current slide
        const currentSlide = this.slides[index];
        
        // Ensure current slide is visible but transparent
        currentSlide.style.visibility = 'visible';
        currentSlide.style.opacity = '0';
        currentSlide.classList.add('active');
        
        // Crossfade: fade out previous, fade in current
        if (prevSlide && prevSlide !== currentSlide) {
            // Fade out previous slide
            prevSlide.style.transition = 'opacity 1s ease-in-out';
            prevSlide.style.opacity = '0';
            
            // After fade out completes, hide it completely
            setTimeout(() => {
                prevSlide.classList.remove('active');
                prevSlide.style.visibility = 'hidden';
                prevSlide.style.transition = '';
            }, 1000);
        }
        
        // Fade in current slide
        setTimeout(() => {
            currentSlide.style.transition = 'opacity 1s ease-in-out';
            currentSlide.style.opacity = '1';
            
            // Clean up transition after animation
            setTimeout(() => {
                currentSlide.style.transition = '';
            }, 1000);
        }, 50);
    }
    
    nextSlide() {
        const next = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(next);
    }
    
    prevSlide() {
        const prev = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
        this.showSlide(prev);
    }
    
    goToSlide(slideNumber) {
        // Convert from 1-based to 0-based index
        const index = slideNumber - 1;
        this.showSlide(index);
    }
    
    startAutoplay() {
        if (this.isPlaying) return;
        
        this.isPlaying = true;
        this.autoplayTimer = setInterval(() => {
            this.nextSlide();
        }, this.interval);
    }
    
    stopAutoplay() {
        if (this.autoplayTimer) {
            clearInterval(this.autoplayTimer);
            this.autoplayTimer = null;
        }
        this.isPlaying = false;
    }
    
    restartAutoplay() {
        this.stopAutoplay();
        // Small delay before restarting
        setTimeout(() => {
            this.startAutoplay();
        }, 1000);
    }
    
    bindEvents() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.prevSlide();
                this.restartAutoplay();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.nextSlide();
                this.restartAutoplay();
            }
        });
        
        // Pause when page is hidden
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.stopAutoplay();
            } else if (!document.hidden && this.container) {
                this.startAutoplay();
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            // Refresh current slide on resize
            this.showSlide(this.currentIndex);
        });
    }
    
    preloadImages() {
        return new Promise((resolve) => {
            const imagePromises = [];
            
            this.slides.forEach(slide => {
                const bgImage = window.getComputedStyle(slide).backgroundImage;
                if (bgImage && bgImage !== 'none') {
                    const imageUrl = bgImage.replace(/url\(['"]?([^'"]*)['"]?\)/, '$1');
                    
                    const imagePromise = new Promise((imgResolve) => {
                        const img = new Image();
                        img.onload = () => imgResolve();
                        img.onerror = () => imgResolve(); // Continue even if image fails
                        img.src = imageUrl;
                    });
                    
                    imagePromises.push(imagePromise);
                }
            });
            
            // Wait for all images to load or timeout after 3 seconds
            Promise.allSettled(imagePromises).then(() => {
                resolve();
            });
            
            // Fallback timeout
            setTimeout(() => {
                resolve();
            }, 3000);
        });
    }
}

// Global instance
let slider = null;

// Legacy support functions (for compatibility, but not used without navigation)
function changeSlide(direction) {
    if (slider) {
        if (direction > 0) {
            slider.nextSlide();
        } else {
            slider.prevSlide();
        }
        slider.restartAutoplay();
    }
}

function currentSlide(slideNumber) {
    if (slider) {
        slider.goToSlide(slideNumber);
        slider.restartAutoplay();
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    slider = new ArrebolSlider();
});
