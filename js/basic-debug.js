/* DIAGNÓSTICO BÁSICO DE WORDPRESS
   Archivo para verificar si WordPress está funcionando correctamente
*/

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔍 DIAGNÓSTICO WORDPRESS BÁSICO');
    console.log('📍 URL:', window.location.href);
    console.log('📄 Título:', document.title);
    console.log('🌐 User Agent:', navigator.userAgent);
    
    // Verificar si es WordPress
    const isWordPress = document.querySelector('meta[name="generator"]') && 
                       document.querySelector('meta[name="generator"]').content.includes('WordPress');
    console.log('✅ Es WordPress:', isWordPress);
    
    // Verificar el template
    const bodyClasses = document.body.className;
    console.log('🏷️ Body classes:', bodyClasses);
    
    // Verificar si hay elementos básicos de WordPress
    const wpHead = document.querySelector('link[rel="stylesheet"][href*="wp-"]');
    console.log('🔗 WP CSS encontrado:', !!wpHead);
    
    // Verificar nuestros scripts
    const scripts = Array.from(document.scripts);
    const ourScripts = scripts.filter(s => s.src && (
        s.src.includes('menu.js') || 
        s.src.includes('menu-test-debug.js') ||
        s.src.includes('slider.js')
    ));
    console.log('📜 Nuestros scripts encontrados:', ourScripts.length);
    ourScripts.forEach(script => console.log('  - ', script.src));
    
    // Verificar Tailwind
    const stylesheets = Array.from(document.styleSheets);
    const tailwind = stylesheets.find(s => s.href && s.href.includes('tailwindcss'));
    console.log('🎨 Tailwind CSS:', !!tailwind);
    
    // Crear un elemento de prueba simple
    const testDiv = document.createElement('div');
    testDiv.innerHTML = '🔴 TEST ELEMENT';
    testDiv.style.cssText = `
        position: fixed !important;
        top: 10px !important;
        left: 10px !important;
        background: red !important;
        color: white !important;
        padding: 10px !important;
        z-index: 99999 !important;
        border: 2px solid yellow !important;
        font-size: 14px !important;
        font-weight: bold !important;
    `;
    document.body.appendChild(testDiv);
    
    // Verificar si nuestro HTML del menú existe
    setTimeout(() => {
        const menuBtn = document.getElementById('menu-btn');
        const fullscreenMenu = document.getElementById('fullscreen-menu');
        
        console.log('🔍 ELEMENTOS DEL MENÚ:');
        console.log('  Botón (#menu-btn):', !!menuBtn);
        console.log('  Menú fullscreen (#fullscreen-menu):', !!fullscreenMenu);
        
        if (!menuBtn) {
            console.log('❌ HTML del menú no encontrado. Posibles causas:');
            console.log('  1. El template front-page.php no se está usando');
            console.log('  2. WordPress está usando otro template');
            console.log('  3. Hay un error en el PHP que impide la renderización');
            
            // Crear botón de prueba
            const testBtn = document.createElement('button');
            testBtn.innerHTML = '🍔 MENÚ DE PRUEBA';
            testBtn.style.cssText = `
                position: fixed !important;
                top: 60px !important;
                left: 10px !important;
                background: blue !important;
                color: white !important;
                padding: 10px !important;
                z-index: 99999 !important;
                border: 2px solid cyan !important;
                font-size: 14px !important;
                cursor: pointer !important;
            `;
            testBtn.onclick = () => alert('¡Botón de prueba funciona! El problema es que el HTML del menú no se está generando.');
            document.body.appendChild(testBtn);
        }
        
        testDiv.innerHTML = '🔴 DIAGNÓSTICO COMPLETO - Ver consola';
    }, 1000);
});
