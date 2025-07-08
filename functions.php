<?php
// Funciones principales del tema
function arrebol_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    
    // Registrar ubicación del menú
    register_nav_menu('menu-principal-elegante', 'Menú Principal Elegante');
}
add_action('after_setup_theme', 'arrebol_theme_setup');

function arrebol_theme_enqueue_scripts() {
    wp_enqueue_style('arrebol-style', get_stylesheet_uri());
    
    // Cargar Tailwind CSS local en lugar del CDN
    wp_enqueue_style('tailwind-local', get_template_directory_uri() . '/assets/css/tailwind.css', array(), '1.0');
    
    // Cargar Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;500;600&display=swap', array(), null);
    
    // Enqueue slider JavaScript (necesario para el slider)
    wp_enqueue_script('arrebol-slider', get_template_directory_uri() . '/js/slider.js', array(), '1.0', true);
    
    // Enqueue masonry JavaScript (necesario para las galerías)
    wp_enqueue_script('arrebol-masonry', get_template_directory_uri() . '/js/masonry.js', array(), '1.0', true);
    
    // Enqueue floating images JavaScript (para las animaciones)
    wp_enqueue_script('arrebol-floating-images', get_template_directory_uri() . '/js/floating-images.js', array(), '1.0', true);
    
    // Enqueue menu JavaScript (para el menú móvil)
    wp_enqueue_script('arrebol-menu', get_template_directory_uri() . '/js/menu.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'arrebol_theme_enqueue_scripts');

// Forzar el uso de front-page.php para la página principal
function force_front_page_template($template) {
    if (is_home() || is_front_page()) {
        $front_page_template = get_template_directory() . '/front-page.php';
        if (file_exists($front_page_template)) {
            return $front_page_template;
        }
    }
    return $template;
}
add_filter('template_include', 'force_front_page_template');

// Asegurar que WordPress reconozca que tenemos una página principal estática
function setup_front_page() {
    // Solo ejecutar una vez
    if (get_option('arrebol_front_page_setup') !== 'done') {
        update_option('show_on_front', 'page');
        update_option('arrebol_front_page_setup', 'done');
    }
}
add_action('after_switch_theme', 'setup_front_page');

// Ocultar admin bar en el frontend para evitar espacios arriba
add_filter('show_admin_bar', '__return_false');

// Remover margin-top que WordPress añade por la admin bar
function remove_admin_bar_margin() {
    remove_action('wp_head', '_admin_bar_bump_cb');
}
add_action('get_header', 'remove_admin_bar_margin');
?>