/* MENÚ DE PRUEBA - SIEMPRE VISIBLE
   Reemplaza temporalmente el contenido de menu.js con este código para testing
*/

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔍 MENU DEBUG: Iniciando diagnóstico...');

    // Verificar si estamos en la página correcta
    console.log('📍 URL actual:', window.location.href);
    console.log('📄 Página:', document.title);

    // Buscar todos los elementos del menú
    const menuBtn = document.getElementById('menu-btn');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const menuBackdrop = document.getElementById('menu-backdrop');
    const slider = document.querySelector('.slider-container');

    console.log('🔍 ELEMENTOS ENCONTRADOS:');
    console.log('  ✓ Botón del menú (#menu-btn):', !!menuBtn);
    console.log('  ✓ Menú fullscreen (#fullscreen-menu):', !!fullscreenMenu);
    console.log('  ✓ Backdrop (#menu-backdrop):', !!menuBackdrop);
    console.log('  ✓ Slider (.slider-container):', !!slider);

    // Si no encontramos los elementos, buscar en todo el DOM
    if (!menuBtn) {
        console.log('❌ No se encontró #menu-btn, buscando elementos similares...');
        const allButtons = document.querySelectorAll('button');
        console.log('🔍 Botones encontrados:', allButtons.length);
        allButtons.forEach((btn, i) => {
            console.log(`  Botón ${i + 1}:`, btn.id || 'sin ID', btn.className);
        });
    }

    // Mostrar el botón del menú SIEMPRE (para testing)
    if (menuBtn) {
        console.log('✅ Forzando visibilidad del botón del menú...');
        menuBtn.style.display = 'block !important';
        menuBtn.style.opacity = '1 !important';
        menuBtn.style.transform = 'translateY(0) !important';
        menuBtn.style.position = 'fixed !important';
        menuBtn.style.top = '20px !important';
        menuBtn.style.right = '20px !important';
        menuBtn.style.zIndex = '9999 !important';
        menuBtn.style.backgroundColor = 'red !important'; // Color llamativo para testing
        menuBtn.style.border = '2px solid yellow !important';
        
        console.log('🎨 Estilos aplicados al botón');
        
        // Agregar evento de click
        menuBtn.addEventListener('click', function() {
            console.log('🖱️ CLICK en el botón del menú!');
            alert('¡El botón del menú funciona!');
        });
    } else {
        console.log('❌ No se puede mostrar el botón - elemento no encontrado');
        
        // Crear botón de prueba manualmente
        console.log('🔧 Creando botón de prueba manual...');
        const testBtn = document.createElement('button');
        testBtn.id = 'test-menu-btn';
        testBtn.innerHTML = '🍔 MENÚ TEST';
        testBtn.style.cssText = `
            position: fixed !important;
            top: 20px !important;
            right: 20px !important;
            z-index: 9999 !important;
            background: red !important;
            color: white !important;
            border: 2px solid yellow !important;
            padding: 10px !important;
            cursor: pointer !important;
            font-size: 16px !important;
        `;
        
        testBtn.addEventListener('click', function() {
            alert('¡Botón de prueba funciona! El problema es que no se está generando el HTML del menú.');
        });
        
        document.body.appendChild(testBtn);
        console.log('✅ Botón de prueba creado y agregado');
    }

    // Verificar carga de recursos
    console.log('📦 RECURSOS:');
    console.log('  Scripts cargados:', document.scripts.length);
    console.log('  Hojas de estilo:', document.styleSheets.length);
    
    // Verificar Tailwind
    const testElement = document.createElement('div');
    testElement.className = 'fixed top-0 right-0 z-50';
    document.body.appendChild(testElement);
    const testStyles = window.getComputedStyle(testElement);
    console.log('  Tailwind CSS funcional:', testStyles.position === 'fixed');
    document.body.removeChild(testElement);

    console.log('🔍 DIAGNÓSTICO COMPLETO - Revisa la consola del navegador');
});
