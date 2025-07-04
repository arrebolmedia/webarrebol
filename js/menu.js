/* ================================================================
  MENÚ ELEGANTE CON SCROLL DETECTION
  Menu que aparece solo después de hacer scroll pasando el slider
  ================================================================
*/

document.addEventListener('DOMContentLoaded', function() {
    console.log('Menu.js loaded');

    // --- Elementos del menú ---
    const menuBtn = document.getElementById('menu-btn');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const menuBackdrop = document.getElementById('menu-backdrop');
    const menuItems = document.querySelectorAll('.menu-item');
    const slider = document.querySelector('.slider-container');

    console.log('Menu elements found:', {
        menuBtn: !!menuBtn,
        fullscreenMenu: !!fullscreenMenu,
        menuBackdrop: !!menuBackdrop,
        slider: !!slider,
        menuItems: menuItems.length
    });

    // Si los elementos esenciales no existen, no continúes
    if (!menuBtn || !fullscreenMenu || !menuBackdrop) {
        console.error('Elementos del menú no encontrados');
        return;
    }

    // --- Control de visibilidad del botón del menú basado en scroll ---
    function handleScroll() {
        const scrollPosition = window.scrollY;
        const sliderHeight = slider ? slider.offsetHeight : window.innerHeight;
        const showMenuThreshold = sliderHeight * 0.8; // Mostrar cuando se ha scrolleado 80% del slider

        if (scrollPosition > showMenuThreshold) {
            // Mostrar botón del menú
            menuBtn.style.display = 'block';
            setTimeout(() => {
                menuBtn.style.opacity = '1';
                menuBtn.style.transform = 'translateY(0)';
            }, 10);
        } else {
            // Ocultar botón del menú
            menuBtn.style.opacity = '0';
            menuBtn.style.transform = 'translateY(8px)';
            setTimeout(() => {
                if (menuBtn.style.opacity === '0') {
                    menuBtn.style.display = 'none';
                }
            }, 300);
        }
    }

    // --- Función para abrir/cerrar el menú ---
    function toggleMenu() {
        const isMenuOpen = fullscreenMenu.classList.contains('is-open');
        
        if (isMenuOpen) {
            // Cerrar menú
            fullscreenMenu.classList.remove('is-open');
            menuBackdrop.classList.remove('is-open');
            menuBtn.classList.remove('is-open');
            fullscreenMenu.style.opacity = '0';
            fullscreenMenu.style.visibility = 'hidden';
            menuBackdrop.style.opacity = '0';
            menuBackdrop.style.visibility = 'hidden';
            document.body.style.overflow = 'auto';
            
            menuBtn.setAttribute('aria-expanded', 'false');
            console.log('❌ Menú cerrado');
        } else {
            // Abrir menú
            fullscreenMenu.classList.add('is-open');
            menuBackdrop.classList.add('is-open');
            menuBtn.classList.add('is-open');
            fullscreenMenu.style.opacity = '1';
            fullscreenMenu.style.visibility = 'visible';
            menuBackdrop.style.opacity = '1';
            menuBackdrop.style.visibility = 'visible';
            document.body.style.overflow = 'hidden';
            
            menuBtn.setAttribute('aria-expanded', 'true');
            console.log('🖱️ Menú abierto');
        }
    }

    // --- Event Listeners ---
    
    // Scroll listener para mostrar/ocultar botón
    window.addEventListener('scroll', handleScroll);
    
    // Click en botón del menú
    menuBtn.addEventListener('click', toggleMenu);
    
    // Click en backdrop para cerrar
    menuBackdrop.addEventListener('click', toggleMenu);
    
    // Click en items del menú para cerrar
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (fullscreenMenu.classList.contains('is-open')) {
                toggleMenu();
            }
        });
    });

    // Tecla ESC para cerrar menú
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && fullscreenMenu.classList.contains('is-open')) {
            toggleMenu();
        }
    });

    // Ejecutar función de scroll al cargar para establecer estado inicial
    handleScroll();
    
    console.log('Menu.js initialized successfully');
});
