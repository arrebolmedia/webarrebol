<?php
/* Template Name: Página Principal */

// Prevent direct access to the file
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

get_header(); ?>

<header class="site-header">
    <nav class="main-navigation">
        <div class="nav-container">
            <div class="logo">
                <a href="/">Arrebol</a>
            </div>
            <ul class="nav-menu">
                <li><a href="/">Inicio</a></li>
                <li><a href="/galeria">Galería</a></li>
                <li><a href="/el-proceso">El Proceso</a></li>
                <li><a href="/contacto">Contacto</a></li>
            </ul>
            <div class="hamburger-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
    <div class="mobile-sidebar">
        <ul class="mobile-menu">
            <li><a href="/">Inicio</a></li>
            <li><a href="/galeria">Galería</a></li>
            <li><a href="/el-proceso">El Proceso</a></li>
            <li><a href="/contacto">Contacto</a></li>
        </ul>
    </div>
</header>

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
