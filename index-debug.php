<?php
/* 
 * Template de diagnóstico - index.php
 * Este archivo se carga cuando WordPress no encuentra otros templates
 */

// Mostrar información de debugging
echo "<!-- DIAGNÓSTICO WORDPRESS -->";
echo "<!-- Template actual: index.php -->";
echo "<!-- Página: " . (is_front_page() ? "FRONT PAGE" : "OTRA PÁGINA") . " -->";
echo "<!-- Tipo: " . get_post_type() . " -->";

get_header(); ?>

<div style="position: fixed; top: 10px; left: 10px; background: orange; color: white; padding: 10px; z-index: 99999; border: 2px solid red;">
    🔍 TEMPLATE: index.php | FRONT: <?php echo is_front_page() ? 'SÍ' : 'NO'; ?>
</div>

<!-- MENÚ DE PRUEBA DIRECTO EN HTML -->
<button id="menu-btn-test" style="position: fixed; top: 10px; right: 10px; background: red; color: white; padding: 10px; z-index: 99999; border: 2px solid yellow; cursor: pointer;">
    🍔 MENÚ TEST
</button>

<script>
document.getElementById('menu-btn-test').onclick = function() {
    alert('¡Botón funciona! Template: index.php');
};
</script>

<?php if (is_front_page()): ?>
    <!-- Este es contenido de la página principal -->
    <main style="padding-top: 100px;">
        <h1>PÁGINA PRINCIPAL (usando index.php)</h1>
        <p>WordPress está usando index.php en lugar de front-page.php</p>
        
        <!-- Intentar cargar el contenido del front-page -->
        <?php 
        $front_page_path = get_template_directory() . '/front-page.php';
        if (file_exists($front_page_path)) {
            echo "<p>✅ front-page.php existe en: " . $front_page_path . "</p>";
            echo "<p>🔧 Problema: WordPress no lo está usando. Verifica la configuración de WordPress.</p>";
        } else {
            echo "<p>❌ front-page.php no existe</p>";
        }
        ?>
    </main>
<?php else: ?>
    <!-- Contenido para otras páginas -->
    <main style="padding-top: 100px;">
        <h1>OTRA PÁGINA</h1>
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <h2><?php the_title(); ?></h2>
            <div><?php the_content(); ?></div>
        <?php endwhile; endif; ?>
    </main>
<?php endif; ?>

<?php get_footer(); ?>
