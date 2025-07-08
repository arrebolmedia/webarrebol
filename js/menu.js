/* ================================================================
  MENÚ ELEGANTE CON TAILWIND CSS
  Menu moderno que aparece después de hacer scroll pasando el slider
  ================================================================
*/

document.addEventListener('DOMContentLoaded', function() {
    console.log('✨ Menu.js with Tailwind loaded');

    // --- Elementos del menú ---
    const menuBtn = document.getElementById('menu-btn');
    const menuCloseBtn = document.getElementById('menu-close');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const menuBackdrop = document.getElementById('menu-backdrop');
    const menuItems = document.querySelectorAll('.menu-item');
    const menuInfo = document.getElementById('menu-info');
    const slider = document.querySelector('.slider-container');

    console.log('🔍 Menu elements found:', {
        menuBtn: !!menuBtn,
        menuCloseBtn: !!menuCloseBtn,
        fullscreenMenu: !!fullscreenMenu,
        menuBackdrop: !!menuBackdrop,
        slider: !!slider,
        menuItems: menuItems.length,
        menuInfo: !!menuInfo
    });

    // Si los elementos esenciales no existen, no continúes
    if (!menuBtn || !fullscreenMenu || !menuBackdrop) {
        console.error('❌ Elementos esenciales del menú no encontrados');
        return;
    }

    // --- Control de visibilidad del botón del menú basado en scroll ---
    function handleScroll() {
        const scrollPosition = window.scrollY;
        const sliderHeight = slider ? slider.offsetHeight : window.innerHeight;
        const showMenuThreshold = sliderHeight * 0.8; // Mostrar cuando se ha scrolleado 80% del slider

        if (scrollPosition > showMenuThreshold) {
            // Mostrar botón del menú con Tailwind classes
            menuBtn.classList.remove('hidden');
            menuBtn.classList.add('flex');
            
            // Trigger la animación de entrada
            setTimeout(() => {
                menuBtn.classList.remove('opacity-0', 'translate-y-2');
                menuBtn.classList.add('opacity-100', 'translate-y-0');
            }, 10);
            
        } else {
            // Ocultar botón del menú
            menuBtn.classList.remove('opacity-100', 'translate-y-0');
            menuBtn.classList.add('opacity-0', 'translate-y-2');
            
            setTimeout(() => {
                if (menuBtn.classList.contains('opacity-0')) {
                    menuBtn.classList.remove('flex');
                    menuBtn.classList.add('hidden');
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
            
            // Remover clases de visibilidad de Tailwind
            fullscreenMenu.classList.remove('opacity-100');
            fullscreenMenu.classList.add('opacity-0', 'invisible');
            menuBackdrop.classList.remove('opacity-100');
            menuBackdrop.classList.add('opacity-0', 'invisible');
            
            // Restaurar scroll del body
            document.body.style.overflow = 'auto';
            
            menuBtn.setAttribute('aria-expanded', 'false');
            console.log('❌ Menú cerrado con Tailwind');
        } else {
            // Abrir menú
            fullscreenMenu.classList.add('is-open');
            menuBackdrop.classList.add('is-open');
            menuBtn.classList.add('is-open');
            
            // Agregar clases de visibilidad de Tailwind
            fullscreenMenu.classList.remove('opacity-0', 'invisible');
            fullscreenMenu.classList.add('opacity-100', 'visible');
            menuBackdrop.classList.remove('opacity-0', 'invisible');
            menuBackdrop.classList.add('opacity-100', 'visible');
            
            // Bloquear scroll del body
            document.body.style.overflow = 'hidden';
            
            menuBtn.setAttribute('aria-expanded', 'true');
            console.log('✅ Menú abierto con Tailwind');
        }
    }

    // --- Event Listeners ---
    
    // Scroll listener para mostrar/ocultar botón
    window.addEventListener('scroll', handleScroll);
    
    // Click en botón del menú
    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });
    
    // Click en botón de cerrar (si existe)
    if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });
    }
    
    // Click en backdrop para cerrar
    menuBackdrop.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    
    // Click en items del menú para cerrar después de navegar
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            setTimeout(() => {
                if (fullscreenMenu.classList.contains('is-open')) {
                    toggleMenu();
                }
            }, 150); // Pequeño delay para mejor UX
        });
    });

    // Tecla ESC para cerrar menú
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && fullscreenMenu.classList.contains('is-open')) {
            toggleMenu();
        }
    });

    // Prevenir clicks en el menú mismo cerrando el overlay
    fullscreenMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Ejecutar función de scroll al cargar para establecer estado inicial
    handleScroll();
    
    console.log('🚀 Menu.js with Tailwind initialized successfully');
});
