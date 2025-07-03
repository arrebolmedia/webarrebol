<?php
// Funciones principales del tema
function arrebol_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'arrebol_theme_setup');

function arrebol_theme_enqueue_scripts() {
    wp_enqueue_style('arrebol-style', get_stylesheet_uri());
    
    // Enqueue slider JavaScript
    wp_enqueue_script('arrebol-slider', get_template_directory_uri() . '/js/slider.js', array(), '1.0', true);
    
    // Enqueue masonry JavaScript
    wp_enqueue_script('arrebol-masonry', get_template_directory_uri() . '/js/masonry.js', array(), '1.0', true);
    
    // Enqueue floating images JavaScript
    wp_enqueue_script('arrebol-floating-images', get_template_directory_uri() . '/js/floating-images.js', array(), '1.0', true);
    
    // Encolar menú JS personalizado
    wp_enqueue_script('arrebol-menu', get_template_directory_uri() . '/js/menu.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'arrebol_theme_enqueue_scripts');
?>
