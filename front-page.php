<?php
/* Template Name: Página Principal */

// Prevent direct access to the file
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

get_header(); ?>

<!-- Eliminar espacio beige arriba del slider - Solución específica -->
<style>
/* Eliminar completamente cualquier espacio arriba del slider */
html {
    margin-top: 0 !important;
    padding-top: 0 !important;
}

body {
    margin-top: 0 !important;
    padding-top: 0 !important;
}

/* Ocultar admin bar de WordPress */
#wpadminbar {
    display: none !important;
}

/* Eliminar margin que WordPress puede añadir */
body.admin-bar {
    margin-top: 0 !important;
}

/* Asegurar que el contenedor principal no tenga espacios */
.site-main {
    margin-top: 0 !important;
    padding-top: 0 !important;
}

/* Forzar que el slider comience exactamente desde arriba */
.slider-container {
    margin-top: 0 !important;
    padding-top: 0 !important;
    position: relative;
    top: 0;
}

/* Eliminar cualquier espacio del header si lo hay */
header {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
}

/* Eliminar espacios de cualquier elemento antes del slider */
.slider-container::before {
    display: none !important;
}
</style>

<!-- Forzar posición con JavaScript para asegurar que no hay espacio -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Eliminar cualquier espacio arriba del slider
    const slider = document.querySelector('.slider-container');
    if (slider) {
        slider.style.marginTop = '0';
        slider.style.paddingTop = '0';
        slider.style.position = 'relative';
        slider.style.top = '0';
        
        // Asegurar que el body no tenga márgenes
        document.body.style.marginTop = '0';
        document.body.style.paddingTop = '0';
        document.documentElement.style.marginTop = '0';
        document.documentElement.style.paddingTop = '0';
        
        console.log('✅ Espacios eliminados del slider');
    }
});
</script>

<!-- MENÚ MINIMALISTA CON SCROLL DETECTION -->
<!-- El botón del menú - Solo aparece después del scroll -->
<button id="menu-btn" style="
    position: fixed;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    z-index: 10000;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(8px);
">
    <div class="hamburger-line" style="
        width: 24px;
        height: 2px;
        background: #333;
        margin: 3px 0;
        transition: all 0.3s ease;
        border-radius: 1px;
    "></div>
    <div class="hamburger-line" style="
        width: 24px;
        height: 2px;
        background: #333;
        margin: 3px 0;
        transition: all 0.3s ease;
        border-radius: 1px;
    "></div>
    <div class="hamburger-line" style="
        width: 24px;
        height: 2px;
        background: #333;
        margin: 3px 0;
        transition: all 0.3s ease;
        border-radius: 1px;
    "></div>
</button>

<!-- Backdrop del menú -->
<div id="menu-backdrop" style="
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f8f8f8;
    z-index: 9998;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease;
"></div>

<!-- Menú fullscreen -->
<div id="fullscreen-menu" style="
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease;
    background: #f8f8f8;
">
    <div style="text-align: center;">
        <nav>
            <a href="<?php echo home_url('/'); ?>" class="menu-item" style="
                display: block;
                font-size: 1.1rem;
                margin: 40px 0;
                color: #666;
                text-decoration: none;
                font-weight: 400;
                text-align: center;
                letter-spacing: 8px;
                text-transform: uppercase;
                transition: all 0.3s ease;
                opacity: 0;
                transform: translateY(30px);
                font-family: 'Inter', sans-serif;
            ">INICIO</a>
            <a href="<?php echo home_url('/galeria'); ?>" class="menu-item" style="
                display: block;
                font-size: 1.1rem;
                margin: 40px 0;
                color: #666;
                text-decoration: none;
                font-weight: 400;
                text-align: center;
                letter-spacing: 8px;
                text-transform: uppercase;
                transition: all 0.3s ease;
                opacity: 0;
                transform: translateY(30px);
                font-family: 'Inter', sans-serif;
            ">GALERÍA</a>
            <a href="<?php echo home_url('/el-proceso'); ?>" class="menu-item" style="
                display: block;
                font-size: 1.1rem;
                margin: 40px 0;
                color: #666;
                text-decoration: none;
                font-weight: 400;
                text-align: center;
                letter-spacing: 8px;
                text-transform: uppercase;
                transition: all 0.3s ease;
                opacity: 0;
                transform: translateY(30px);
                font-family: 'Inter', sans-serif;
            ">EL PROCESO</a>
            <a href="<?php echo home_url('/contacto'); ?>" class="menu-item" style="
                display: block;
                font-size: 1.1rem;
                margin: 40px 0;
                color: #666;
                text-decoration: none;
                font-weight: 400;
                text-align: center;
                letter-spacing: 8px;
                text-transform: uppercase;
                transition: all 0.3s ease;
                opacity: 0;
                transform: translateY(30px);
                font-family: 'Inter', sans-serif;
            ">CONTACTO</a>
        </nav>
    </div>
</div>

<style>
/* Hover effects y animaciones */
#menu-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

/* Animación del botón cuando el menú está abierto */
#menu-btn.is-open .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

#menu-btn.is-open .hamburger-line:nth-child(2) {
    opacity: 0;
}

#menu-btn.is-open .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}

/* Animaciones del menú abierto */
#fullscreen-menu.is-open .menu-item {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

#fullscreen-menu.is-open .menu-item:nth-child(1) { transition-delay: 0.1s; }
#fullscreen-menu.is-open .menu-item:nth-child(2) { transition-delay: 0.2s; }
#fullscreen-menu.is-open .menu-item:nth-child(3) { transition-delay: 0.3s; }
#fullscreen-menu.is-open .menu-item:nth-child(4) { transition-delay: 0.4s; }

.menu-item:hover {
    color: #333 !important;
    transform: translateY(-2px) !important;
}

/* === ELEGANCIA AÑADIDA === */

/* Línea decorativa superior */
#fullscreen-menu::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #ccc, transparent);
    opacity: 0.6;
}

/* Línea decorativa inferior */
#fullscreen-menu::after {
    content: '';
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #ccc, transparent);
    opacity: 0.6;
}

/* Efecto de entrada más suave para las líneas decorativas */
#fullscreen-menu.is-open::before,
#fullscreen-menu.is-open::after {
    animation: fadeInLine 0.8s ease-out 0.5s both;
}

@keyframes fadeInLine {
    from {
        opacity: 0;
        width: 20px;
    }
    to {
        opacity: 0.6;
        width: 60px;
    }
}

/* Mejorar el hover de los enlaces */
.menu-item {
    position: relative;
    overflow: hidden;
}

.menu-item::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 100%;
    height: 1px;
    background: #333;
    transition: transform 0.3s ease;
}

.menu-item:hover::before {
    transform: translateX(-50%) scaleX(0.3);
}

/* Efecto de cristal para el botón del menú */
#menu-btn {
    backdrop-filter: blur(10px) saturate(200%);
    background: rgba(255, 255, 255, 0.85) !important;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Sombra más elegante para el fondo del menú */
#menu-backdrop {
    background: #f8f8f8;
    background-image: 
        radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(240, 240, 240, 0.2) 0%, transparent 50%);
}

/* Animación de entrada para el backdrop */
#menu-backdrop.is-open {
    animation: backdropFade 0.4s ease-out;
}

@keyframes backdropFade {
    from {
        opacity: 0;
        transform: scale(1.05);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* Texto más elegante con mejor kerning */
.menu-item {
    font-kerning: auto;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Efecto de brillo sutil al hacer hover */
.menu-item:hover {
    text-shadow: 0 0 20px rgba(51, 51, 51, 0.1);
}

/* Pulse sutil para el botón del menú */
@keyframes menuPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
}

#menu-btn:focus {
    animation: menuPulse 2s infinite;
    outline: none;
}
</style>

<main class="site-main">
    <section class="slider-container">
        <div class="slider-loading">Cargando...</div>
        <div class="slider">
            <div class="slide active" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/C&D-69.jpg');"></div>
            <div class="slide" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/C&D-75.jpg');"></div>
            <div class="slide" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/C&D-80.jpg');"></div>
            <div class="slide" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/C&D-82.jpg');"></div>
            <div class="slide" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/C&D-86.jpg');"></div>
            <div class="slide" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/C&D-67.jpg');"></div>
            <div class="slide" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/C&D-49.jpg');"></div>
        </div>
        <div class="slide-content">
            <h2>Imágenes que perduran por generaciones</h2>
        </div>
    </section>

    <section class="about-photographer">
        <div class="container">
            <div class="about-content">
                <div class="about-image">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-82.jpg" alt="Retrato de fotógrafa">
                </div>
                <div class="about-text">
                    <h2>Conoce a tu Fotógrafa de Bodas</h2>
                    <p>Soy Jennifer, ¡pero puedes llamarme Jen! He sido fotógrafa de bodas en Toronto durante los últimos 17 años, y realmente no puedo imaginarme haciendo otra cosa.</p>
                    <p>Estoy obsesionada con contar tu historia de la manera más artística y auténtica posible.</p>
                    <p>Valoro la conexión con otros, el romance, el arte, el cine y la música, y pongo mucho de esto en mi trabajo.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="photographer-profile">
        <div class="container">
            <div class="profile-content">
                <h2 class="profile-main-title">CONOCE A TU <em>FOTÓGRAFA</em></h2>
                <h3 class="profile-subtitle">Hola, soy Frida</h3>
                
                <div class="profile-image-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-86.jpg" alt="Frida - Fotógrafa de Bodas" class="profile-image">
                </div>
                
                <div class="profile-tagline">
                    <span class="tagline-text">Viajando por el mundo por amor</span>
                </div>
                
                <div class="profile-divider"></div>
                
                <p class="profile-location">UBICADA EN EL CORAZÓN DE CHICAGO</p>
            </div>
        </div>
    </section>

    <section class="photos-memories-section">
        <div class="container">
            <div class="memories-content">
                <div class="memories-text">
                    <h2 class="memories-title">FOTOS QUE SE SIENTEN <br><em>como</em> RECUERDOS</h2>
                    <p class="memories-description">Piensa en instantáneas nostálgicas que se encuentran con el cine y el arte. Un enfoque artístico y retrospectivo de la fotografía de bodas. Fotos que no son solo para hoy, sino para los años venideros. Creando intencionalmente imágenes que ya se sienten como un recuerdo para ti y para las futuras generaciones.</p>
                </div>
                <div class="memories-image">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-67.jpg" alt="Retrato elegante de novia">
                </div>
            </div>
            <div class="memories-cta">
                <a href="/galeria" class="view-gallery-btn">VER GALERÍA</a>
            </div>
        </div>
    </section>

    <section class="inspirational-quote-section" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/C&D-67.jpg');">
        <div class="quote-overlay"></div>
        <div class="quote-content">
            <h2 class="quote-text">"Cada momento es una obra de arte esperando ser capturada, cada historia merece ser contada con <em>belleza</em> y <em>autenticidad</em>."</h2>
            <p class="quote-author">— Frida Arrebol</p>
        </div>
    </section>

    <section class="gallery-section">
        <div class="container">
            <div class="gallery-header">
                <h2 class="gallery-main-title">EL PORTAFOLIO</h2>
                <p class="gallery-subtitle">Una colección de nuestras imágenes favoritas de bodas, elopements y sesiones de pareja alrededor del mundo.</p>
            </div>
        </div>
        <div class="gallery-masonry" id="gallery-masonry">
            <div class="gallery-item">
                <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-21.jpg" alt="Momento íntimo de boda">
            </div>
            <div class="gallery-item">
                <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-23.jpg" alt="Retrato de pareja">
            </div>
            <div class="gallery-item">
                <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-24.jpg" alt="Detalles de boda">
            </div>
            <div class="gallery-item">
                <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-28.jpg" alt="Momento romántico">
            </div>
            <div class="gallery-item">
                <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-38.jpg" alt="Ceremonia de boda">
            </div>
            <div class="gallery-item">
                <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-41.jpg" alt="Retrato de novia">
            </div>
            <div class="gallery-item">
                <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-42.jpg" alt="Celebración de boda">
            </div>
            <div class="gallery-item">
                <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-49.jpg" alt="Pareja en la naturaleza">
            </div>
            <div class="gallery-item">
                <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-52.jpg" alt="Anillos de boda">
            </div>
            <div class="gallery-item">
                <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-65.jpg" alt="Momento de recepción">
            </div>
            <div class="gallery-item">
                <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-67.jpg" alt="Pareja bailando">
            </div>
            <div class="gallery-item">
                <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-68.jpg" alt="Momento emotivo">
            </div>
        </div>
        <div class="container">
            <a href="/galeria" class="cta-button">Ver galería completa</a>
        </div>
    </section>

    <section class="sources-inspiration-section">
        <div class="container">
            <div class="inspiration-content">
                <div class="inspiration-text">
                    <h2 class="inspiration-title">FUENTES <em>de</em><br>INSPIRACIÓN</h2>
                    <p class="inspiration-description">Me inspiro infinitamente en la conexión humana, las historias, las emociones y el concepto de nostalgia.</p>
                    <p class="inspiration-description">Tengo un profundo amor por el arte, las películas, la música y las personas como fuente de inspiración para mi trabajo. Me encanta experimentar con proyectos creativos que evocan emociones.</p>
                    <a href="#" class="inspiration-btn">DESCUBRE MÁS</a>
                </div>
                
                <div class="floating-images" id="floating-images-container">
                    <div class="floating-image image-1">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-21.jpg" alt="Retrato vintage con perlas">
                    </div>
                    
                    <div class="floating-image image-2">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-24.jpg" alt="Momento íntimo">
                    </div>
                    
                    <div class="floating-image image-3">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-28.jpg" alt="Inspiración de pintura clásica">
                    </div>
                    
                    <div class="floating-image image-4">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-38.jpg" alt="Detalle de boda">
                    </div>
                    
                    <div class="floating-image image-5">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-41.jpg" alt="Inspiración de naturaleza muerta">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="contact-section">
        <div class="container">
            <div class="contact-content">
                <div class="contact-image">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/C&D-49.jpg" alt="Pareja celebrando">
                </div>
                <div class="contact-text">
                    <h2 class="contact-title">¿EMPEZAMOS?</h2>
                    <p class="contact-subtitle">Reservo un número limitado de bodas por año.<br>Consulta para saber si tu fecha está disponible.</p>
                    <div class="contact-divider"></div>
                    <a href="/contacto" class="contact-btn">PONTE EN CONTACTO</a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
