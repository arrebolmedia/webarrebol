/* DIAGNÓSTICO DEL MENÚ ELEGANTE
   ==============================
   
   Código para diagnosticar problemas con el menú.
   Pega este código en la consola del navegador para verificar el estado.
*/

// Función de diagnóstico completo
function diagnosticarMenu() {
    console.log('=== DIAGNÓSTICO DEL MENÚ ELEGANTE ===');
    
    // 1. Verificar elementos HTML
    console.log('\n1. ELEMENTOS HTML:');
    const menuBtn = document.getElementById('menu-btn');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const menuBackdrop = document.getElementById('menu-backdrop');
    const slider = document.querySelector('.slider-container');
    
    console.log('✓ Botón del menú:', menuBtn ? 'ENCONTRADO' : '❌ NO ENCONTRADO');
    console.log('✓ Menú fullscreen:', fullscreenMenu ? 'ENCONTRADO' : '❌ NO ENCONTRADO');
    console.log('✓ Backdrop del menú:', menuBackdrop ? 'ENCONTRADO' : '❌ NO ENCONTRADO');
    console.log('✓ Slider container:', slider ? 'ENCONTRADO' : '❌ NO ENCONTRADO');
    
    // 2. Verificar estilos computados
    console.log('\n2. ESTILOS DEL BOTÓN DEL MENÚ:');
    if (menuBtn) {
        const styles = window.getComputedStyle(menuBtn);
        console.log('Display:', styles.display);
        console.log('Opacity:', styles.opacity);
        console.log('Transform:', styles.transform);
        console.log('Position:', styles.position);
        console.log('Z-index:', styles.zIndex);
    }
    
    // 3. Verificar altura del slider y scroll
    console.log('\n3. SCROLL Y SLIDER:');
    if (slider) {
        console.log('Altura del slider:', slider.offsetHeight + 'px');
        console.log('Altura de la ventana:', window.innerHeight + 'px');
        console.log('Scroll actual:', window.scrollY + 'px');
        console.log('Threshold (80%):', Math.floor(slider.offsetHeight * 0.8) + 'px');
    }
    
    // 4. Verificar eventos
    console.log('\n4. EVENTOS:');
    console.log('Listeners de scroll:', window.onscroll ? 'ASIGNADO' : 'NO ASIGNADO');
    
    // 5. Verificar Tailwind CSS
    console.log('\n5. TAILWIND CSS:');
    const testElement = document.createElement('div');
    testElement.className = 'fixed top-0 right-0 z-50 opacity-0';
    document.body.appendChild(testElement);
    const testStyles = window.getComputedStyle(testElement);
    console.log('Tailwind funcional:', testStyles.position === 'fixed' ? 'SÍ' : 'NO');
    document.body.removeChild(testElement);
    
    // 6. Verificar carga de archivos
    console.log('\n6. RECURSOS CARGADOS:');
    const scripts = Array.from(document.scripts);
    const hasMenuJS = scripts.some(script => script.src.includes('menu.js'));
    console.log('menu.js cargado:', hasMenuJS ? 'SÍ' : 'NO');
    
    const stylesheets = Array.from(document.styleSheets);
    const hasTailwind = stylesheets.some(sheet => 
        sheet.href && sheet.href.includes('tailwindcss.com')
    );
    console.log('Tailwind CSS cargado:', hasTailwind ? 'SÍ' : 'NO');
    
    console.log('\n=== FIN DIAGNÓSTICO ===');
}

// Función para mostrar el menú forzadamente (para testing)
function mostrarMenuForzado() {
    const menuBtn = document.getElementById('menu-btn');
    if (menuBtn) {
        menuBtn.style.display = 'block';
        menuBtn.style.opacity = '1';
        menuBtn.style.transform = 'translateY(0)';
        console.log('Menú mostrado forzadamente');
    } else {
        console.log('❌ No se pudo encontrar el botón del menú');
    }
}

// Función para simular scroll
function simularScroll(cantidad = 1000) {
    window.scrollTo(0, cantidad);
    console.log('Scroll simulado a', cantidad + 'px');
    
    // Verificar si el menú debería aparecer
    setTimeout(() => {
        const menuBtn = document.getElementById('menu-btn');
        if (menuBtn) {
            const isVisible = menuBtn.style.opacity === '1' || 
                             window.getComputedStyle(menuBtn).opacity === '1';
            console.log('Menú visible después del scroll:', isVisible ? 'SÍ' : 'NO');
        }
    }, 100);
}

// Función para verificar el menú de WordPress
function verificarMenuWordPress() {
    console.log('\n=== MENÚ DE WORDPRESS ===');
    
    // Buscar elementos del menú de WordPress
    const menuItems = document.querySelectorAll('.menu-item');
    console.log('Elementos de menú encontrados:', menuItems.length);
    
    menuItems.forEach((item, index) => {
        console.log(`Item ${index + 1}:`, item.textContent.trim());
    });
    
    // Verificar si hay menú de respaldo
    const backupMenuItems = document.querySelectorAll('.menu-item-wrapper a');
    if (backupMenuItems.length > 0) {
        console.log('Menú de respaldo activo (no hay menú asignado en WordPress)');
    }
}

// Ejecutar diagnóstico automático
console.log('Funciones de diagnóstico cargadas. Ejecuta:');
console.log('diagnosticarMenu() - para diagnóstico completo');
console.log('mostrarMenuForzado() - para mostrar el menú sin scroll');
console.log('simularScroll(1000) - para simular scroll');
console.log('verificarMenuWordPress() - para verificar el menú de WP');

// Auto-ejecutar diagnóstico básico
setTimeout(diagnosticarMenu, 1000);
