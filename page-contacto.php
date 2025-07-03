<?php
/* Template Name: Contacto */
get_header(); ?>

<main class="site-main">
    <h2>Contacto</h2>
    <form action="#" method="post">
        <input type="text" name="name" placeholder="Tu nombre" required>
        <input type="email" name="email" placeholder="Tu correo electrónico" required>
        <textarea name="message" placeholder="Tu mensaje" required></textarea>
        <button type="submit">Enviar</button>
    </form>
</main>

<?php get_footer(); ?>
