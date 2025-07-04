/* VERIFICACIÓN DE INTEGRACIÓN DEL MENÚ ELEGANTE
   ============================================

   Esta guía te ayudará a verificar que el menú está funcionando correctamente.

   PASOS PARA VERIFICAR:

   1. CARGA DE ESTILOS:
      - Verifica que se está cargando Tailwind CSS desde el CDN
      - Comprueba que el archivo style.css se está cargando
      - Asegúrate que no hay errores de CSS en la consola

   2. CARGA DE JAVASCRIPT:
      - Abre la consola del navegador (F12)
      - Verifica que aparezca el mensaje "Menu.js loaded"
      - Comprueba que no hay errores de JavaScript

   3. ESTRUCTURA HTML:
      - Inspecciona el elemento (clic derecho > Inspeccionar)
      - Busca el elemento #menu-btn (debería estar oculto inicialmente)
      - Busca el elemento #fullscreen-menu
      - Busca el elemento #menu-backdrop

   4. FUNCIONALIDAD DEL SCROLL:
      - Carga la página y NO deberías ver el botón del menú
      - Haz scroll hacia abajo pasando el slider
      - El botón del menú debería aparecer con una animación suave

   5. FUNCIONALIDAD DEL MENÚ:
      - Haz clic en el botón del menú
      - Debería aparecer el menú fullscreen con los enlaces
      - Haz clic en cualquier enlace o en el fondo para cerrar
      - Presiona ESC para cerrar el menú

   6. WORDPRESS ADMIN:
      - Ve a Apariencia > Menús en el admin de WordPress
      - Crea un nuevo menú llamado "Menú Principal"
      - Agrega las páginas que quieras al menú
      - Asigna el menú a la ubicación "Menú Principal Elegante"

   SOLUCIÓN DE PROBLEMAS:

   Si el menú no aparece:
   - Verifica que Tailwind CSS se está cargando
   - Comprueba la consola del navegador para errores
   - Asegúrate que los elementos HTML tienen los IDs correctos

   Si el scroll detection no funciona:
   - Verifica que el selector '.slider-container' existe
   - Comprueba que la función handleScroll se está ejecutando
   - Ajusta el threshold de scroll si es necesario

   Si los estilos no se ven bien:
   - Verifica que Tailwind CSS se carga antes que tu CSS personalizado
   - Comprueba que no hay conflictos con otros CSS
   - Asegúrate que el z-index del menú es suficientemente alto

   ARCHIVOS MODIFICADOS:
   - functions.php: Registro del menú y carga de recursos
   - front-page.php: Estructura HTML del menú
   - header.php: Limpiado de código duplicado
   - js/menu.js: Lógica de JavaScript del menú
   - style.css: Estilos CSS del menú

   DEBUGGING AVANZADO:
   
   Para debuggear el JavaScript, agrega estos comandos en la consola:
   
   // Verificar elementos del menú
   console.log('Menu button:', document.getElementById('menu-btn'));
   console.log('Fullscreen menu:', document.getElementById('fullscreen-menu'));
   console.log('Menu backdrop:', document.getElementById('menu-backdrop'));
   
   // Verificar altura del slider
   const slider = document.querySelector('.slider-container');
   console.log('Slider height:', slider ? slider.offsetHeight : 'No slider found');
   
   // Simular scroll para mostrar menú
   window.scrollTo(0, 1000);
   
   // Mostrar menú manualmente
   const menuBtn = document.getElementById('menu-btn');
   if (menuBtn) {
     menuBtn.style.display = 'block';
     menuBtn.style.opacity = '1';
     menuBtn.style.transform = 'translateY(0)';
   }

*/
