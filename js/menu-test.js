/**
 * Arrebol Theme - Menu Simple Test Script
 * Versión simplificada para debugging
 */

console.log('🚀 Menu script loading...');

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM loaded - Inicializando menú...');
    
    // Elementos del menú
    const menuBtn = document.getElementById('menu-btn');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const menuBackdrop = document.getElementById('menu-backdrop');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Variables para scroll
    let isMenuVisible = false;
    let sliderHeight = window.innerHeight; // Por defecto usar altura de ventana
    
    // Debug - Mostrar elementos encontrados
    console.log('🔍 Elementos del menú:');
    console.log('- menuBtn:', menuBtn ? '✅' : '❌');
    console.log('- fullscreenMenu:', fullscreenMenu ? '✅' : '❌');
    console.log('- menuBackdrop:', menuBackdrop ? '✅' : '❌');
    console.log('- hamburgerIcon:', hamburgerIcon ? '✅' : '❌');
    console.log('- closeIcon:', closeIcon ? '✅' : '❌');
    console.log('- menuItems count:', menuItems.length);
    
    // Verificar elementos críticos
    if (!menuBtn || !fullscreenMenu) {
        console.error('❌ ERROR: Elementos críticos del menú no encontrados');
        return;
    }
    
    // Calcular altura del slider
    function calculateSliderHeight() {
        const slider = document.querySelector('.slider-container') || 
                      document.querySelector('.hero-slider') || 
                      document.querySelector('.slider') ||
                      document.querySelector('[class*="slider"]');
                      
        if (slider) {
            sliderHeight = slider.offsetHeight;
            console.log('📏 Slider encontrado, altura:', sliderHeight);
        } else {
            sliderHeight = window.innerHeight;
            console.log('📏 No slider encontrado, usando altura ventana:', sliderHeight);
        }
    }
    
    // Manejar scroll
    function handleScroll() {
        const scrollY = window.scrollY;
        const shouldShowMenu = scrollY >= sliderHeight * 0.9; // Mostrar al 90% del scroll
        
        console.log(`📜 Scroll: ${scrollY}px, Limite: ${sliderHeight * 0.9}px, Mostrar: ${shouldShowMenu}`);
        
        if (shouldShowMenu && !isMenuVisible) {
            console.log('🔽 Mostrando botón del menú');
            menuBtn.style.opacity = '1';
            menuBtn.style.visibility = 'visible';
            menuBtn.style.transform = 'scale(1)';
            isMenuVisible = true;
        } else if (!shouldShowMenu && isMenuVisible) {
            console.log('🔼 Ocultando botón del menú');
            menuBtn.style.opacity = '0';
            menuBtn.style.visibility = 'hidden';
            menuBtn.style.transform = 'scale(0.8)';
            isMenuVisible = false;
            
            // Cerrar menú si está abierto
            if (fullscreenMenu.classList.contains('is-open')) {
                toggleMenu();
            }
        }
    }
    
    // Toggle del menú
    function toggleMenu() {
        const isOpening = !fullscreenMenu.classList.contains('is-open');
        console.log(`🔄 Toggle menú: ${isOpening ? 'ABRIR' : 'CERRAR'}`);
        
        // Alternar clases
        fullscreenMenu.classList.toggle('is-open');
        if (menuBackdrop) menuBackdrop.classList.toggle('is-open');
        
        // Alternar iconos
        if (hamburgerIcon && closeIcon) {
            if (isOpening) {
                hamburgerIcon.style.display = 'none';
                closeIcon.style.display = 'block';
            } else {
                hamburgerIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        }
        
        // Prevenir scroll del body
        document.body.style.overflow = isOpening ? 'hidden' : 'auto';
        
        // Actualizar aria
        menuBtn.setAttribute('aria-expanded', isOpening);
    }
    
    // Event listeners
    console.log('🎯 Agregando event listeners...');
    
    // Click en botón del menú
    menuBtn.addEventListener('click', function(e) {
        console.log('🖱️ Click en botón del menú');
        e.preventDefault();
        toggleMenu();
    });
    
    // Click en backdrop
    if (menuBackdrop) {
        menuBackdrop.addEventListener('click', function(e) {
            console.log('🖱️ Click en backdrop');
            e.preventDefault();
            if (fullscreenMenu.classList.contains('is-open')) {
                toggleMenu();
            }
        });
    }
    
    // Click en elementos del menú
    menuItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            console.log(`🖱️ Click en elemento del menú ${index + 1}`);
            if (fullscreenMenu.classList.contains('is-open')) {
                toggleMenu();
            }
        });
    });
    
    // Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && fullscreenMenu.classList.contains('is-open')) {
            console.log('⌨️ Escape presionado');
            toggleMenu();
        }
    });
    
    // Scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Resize listener
    window.addEventListener('resize', function() {
        console.log('📱 Ventana redimensionada');
        calculateSliderHeight();
        handleScroll();
    });
    
    // Inicialización
    console.log('🔧 Inicializando...');
    calculateSliderHeight();
    handleScroll(); // Verificar estado inicial
    
    // Test inmediato para verificar que todo funciona
    setTimeout(() => {
        console.log('🧪 Test de elementos después de 1 segundo:');
        console.log('- menuBtn visible:', getComputedStyle(menuBtn).visibility);
        console.log('- menuBtn opacity:', getComputedStyle(menuBtn).opacity);
        console.log('- Scroll actual:', window.scrollY);
        console.log('- Altura slider:', sliderHeight);
    }, 1000);
    
    console.log('✅ Menu script inicializado correctamente');
});
