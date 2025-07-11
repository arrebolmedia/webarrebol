// MENÚ ELEGANTE ARREBOL WEDDINGS
console.log('🚨 MENU.JS CARGADO CORRECTAMENTE');

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 DOM CARGADO - Iniciando menú');
    
    // Crear botón hamburger elegante
    const menuBtn = document.createElement('button');
    menuBtn.id = 'menu-btn';
    menuBtn.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    // Estilos del botón hamburger
    menuBtn.style.cssText = `
        position: fixed;
        top: 25px;
        right: 25px;
        width: 50px;
        height: 50px;
        background: rgba(255, 255, 255, 0.9);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        z-index: 99999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
        pointer-events: auto;
        user-select: none;
        opacity: 0;
        transform: scale(0.8);
    `;

    // Estilizar las líneas del hamburger
    const spans = menuBtn.querySelectorAll('span');
    spans.forEach(span => {
        span.style.cssText = `
            display: block;
            width: 18px;
            height: 2px;
            background: #333;
            margin: 2px 0;
            transition: all 0.3s ease;
            border-radius: 1px;
        `;
    });

    // Efectos hover del botón
    menuBtn.addEventListener('mouseenter', function() {
        this.style.transform = this.style.transform.includes('scale(1)') ? 'scale(1.1)' : 'scale(0.9)';
        this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
    });
    
    menuBtn.addEventListener('mouseleave', function() {
        const currentOpacity = this.style.opacity;
        if (currentOpacity === '1') {
            this.style.transform = 'scale(1)';
        } else {
            this.style.transform = 'scale(0.8)';
        }
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    });

    // Añadir botón al DOM
    document.body.appendChild(menuBtn);
    console.log('✅ Botón de menú creado y añadido al DOM');

    // Funcionalidad del menú - crear overlay elegante
    menuBtn.addEventListener('click', function(e) {
        console.log('🖱️ CLIC DETECTADO en botón de menú');
        e.preventDefault();
        e.stopPropagation();
        
        // Verificar si ya existe un menú abierto
        const existingMenu = document.querySelector('#elegant-menu-overlay');
        if (existingMenu) {
            console.log('⚠️ Menú ya existe, cerrando...');
            existingMenu.remove();
            return;
        }
        
        // Crear menú elegante
        const elegantMenu = document.createElement('div');
        elegantMenu.id = 'elegant-menu-overlay';
        elegantMenu.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(245, 243, 240, 0.98), rgba(255, 255, 255, 0.95));
            z-index: 999999;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(15px);
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        elegantMenu.innerHTML = `
            <div style="text-align: center; color: #2c2c2c; max-width: 500px; padding: 40px; height: 100vh; display: flex; flex-direction: column; justify-content: space-between;">
                <!-- Botón de cerrar -->
                <button id="close-menu" style="
                    position: absolute;
                    top: 30px;
                    right: 40px;
                    color: #2c2c2c;
                    background: none;
                    border: 1px solid rgba(44, 44, 44, 0.2);
                    cursor: pointer;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    font-size: 14px;
                    font-weight: 300;
                ">✕</button>
                
                <!-- Título principal más arriba -->
                <div style="margin-top: 100px;">
                    <h1 style="
                        font-family: 'Playfair Display', Georgia, serif;
                        font-size: 32px;
                        font-weight: 400;
                        color: #2c2c2c;
                        margin: 0;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                    ">Arrebol Weddings</h1>
                </div>
                
                <!-- Enlaces del menú en el centro -->
                <nav style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 25px;">
                    <a href="/#nosotros" class="menu-link" style="
                        display: block;
                        color: #2c2c2c;
                        text-decoration: none;
                        font-size: 22px;
                        font-weight: 400;
                        padding: 12px 0;
                        border-bottom: 1px solid rgba(44, 44, 44, 0.1);
                        transition: all 0.3s ease;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        font-family: 'Playfair Display', Georgia, serif;
                    ">Nosotros</a>
                    
                    <a href="/#servicios" class="menu-link" style="
                        display: block;
                        color: #2c2c2c;
                        text-decoration: none;
                        font-size: 22px;
                        font-weight: 400;
                        padding: 12px 0;
                        border-bottom: 1px solid rgba(44, 44, 44, 0.1);
                        transition: all 0.3s ease;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        font-family: 'Playfair Display', Georgia, serif;
                    ">Servicios</a>
                    
                    <a href="/#galeria" class="menu-link" style="
                        display: block;
                        color: #2c2c2c;
                        text-decoration: none;
                        font-size: 22px;
                        font-weight: 400;
                        padding: 12px 0;
                        border-bottom: 1px solid rgba(44, 44, 44, 0.1);
                        transition: all 0.3s ease;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        font-family: 'Playfair Display', Georgia, serif;
                    ">Galería</a>
                    
                    <a href="/#contacto" class="menu-link" style="
                        display: block;
                        color: #2c2c2c;
                        text-decoration: none;
                        font-size: 22px;
                        font-weight: 400;
                        padding: 12px 0;
                        border-bottom: 1px solid rgba(44, 44, 44, 0.1);
                        transition: all 0.3s ease;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        font-family: 'Playfair Display', Georgia, serif;
                    ">Contacto</a>
                </nav>
                
                <!-- Redes sociales con separación de 100px -->
                <div style="
                    margin-top: 100px;
                    margin-bottom: 60px;
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    align-items: center;
                ">
                    <a href="https://wa.me/527775001071" target="_blank" class="social-link" style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-decoration: none;
                        transition: all 0.3s ease;
                    ">
                        <i class="fab fa-whatsapp" style="
                            font-size: 28px;
                            color: #6a6a6a;
                        "></i>
                    </a>
                    
                    <a href="https://instagram.com/arrebolmedia_" target="_blank" class="social-link" style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-decoration: none;
                        transition: all 0.3s ease;
                    ">
                        <i class="fab fa-instagram" style="
                            font-size: 28px;
                            color: #6a6a6a;
                        "></i>
                    </a>
                </div>
            </div>
        `;
        
        document.body.appendChild(elegantMenu);
        
        // Animación de entrada
        requestAnimationFrame(() => {
            elegantMenu.style.opacity = '1';
        });
        
        // Configurar todos los event listeners del menú
        setupMenuEventListeners(elegantMenu);
        
        console.log('🍔 Menú elegante abierto correctamente');
    });

    // Función para configurar event listeners del menú
    function setupMenuEventListeners(menuElement) {
        // Efectos hover para los enlaces
        const menuLinks = menuElement.querySelectorAll('.menu-link');
        menuLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.color = '#d4af37';
                this.style.transform = 'translateX(5px)';
                this.style.paddingLeft = '10px';
                this.style.borderBottomColor = 'rgba(212, 175, 55, 0.2)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.color = '#2c2c2c';
                this.style.transform = 'translateX(0)';
                this.style.paddingLeft = '0';
                this.style.borderBottomColor = 'rgba(44, 44, 44, 0.1)';
            });
            
            // Cerrar menú al hacer clic en enlace
            link.addEventListener('click', function() {
                closeMenu(menuElement);
            });
        });
        
        // Efectos hover para redes sociales
        const socialLinks = menuElement.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            const icon = link.querySelector('i');
            
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                icon.style.color = '#d4af37';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                icon.style.color = '#6a6a6a';
            });
        });
        
        // Botón de cerrar
        const closeBtn = menuElement.querySelector('#close-menu');
        closeBtn.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(212, 175, 55, 0.1)';
            this.style.borderColor = '#d4af37';
            this.style.color = '#d4af37';
            this.style.transform = 'scale(1.1)';
        });
        
        closeBtn.addEventListener('mouseleave', function() {
            this.style.background = 'none';
            this.style.borderColor = 'rgba(44, 44, 44, 0.2)';
            this.style.color = '#2c2c2c';
            this.style.transform = 'scale(1)';
        });
        
        closeBtn.addEventListener('click', function() {
            closeMenu(menuElement);
        });
        
        // Cerrar con Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMenu(menuElement);
            }
        });
    }

    // Función para cerrar el menú
    function closeMenu(menuElement) {
        menuElement.style.opacity = '0';
        setTimeout(() => {
            if (menuElement && menuElement.parentNode) {
                menuElement.remove();
            }
        }, 300);
    }

    // Control de scroll para mostrar/ocultar botón
    function handleScroll() {
        const scrollPosition = window.scrollY;
        const showThreshold = 50;
        
        if (scrollPosition > showThreshold) {
            menuBtn.style.opacity = '1';
            menuBtn.style.transform = 'scale(1)';
            menuBtn.style.pointerEvents = 'auto';
        } else {
            menuBtn.style.opacity = '0';
            menuBtn.style.transform = 'scale(0.8)';
            menuBtn.style.pointerEvents = 'none';
        }
    }

    // Listener de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Llamar una vez para configurar estado inicial
    handleScroll();
    
    console.log('🎯 Sistema de menú completamente funcional y cargado');
});

// Backup: Si DOMContentLoaded ya pasó
if (document.readyState === 'loading') {
    console.log('📄 Esperando DOMContentLoaded...');
} else {
    console.log('📄 DOM ya cargado, ejecutando menú inmediatamente');
}