// Diagnóstico rápido - Ejecutar en consola del navegador
console.log('🔍 Diagnóstico del espacio arriba del slider:');

// Verificar márgenes del body
const bodyStyles = window.getComputedStyle(document.body);
console.log('📱 Body margin-top:', bodyStyles.marginTop);
console.log('📱 Body padding-top:', bodyStyles.paddingTop);

// Verificar márgenes del html
const htmlStyles = window.getComputedStyle(document.documentElement);
console.log('🌐 HTML margin-top:', htmlStyles.marginTop);

// Verificar el slider container
const slider = document.querySelector('.slider-container');
if (slider) {
    const sliderStyles = window.getComputedStyle(slider);
    console.log('🎞️ Slider margin-top:', sliderStyles.marginTop);
    console.log('🎞️ Slider padding-top:', sliderStyles.paddingTop);
    console.log('🎞️ Slider position:', sliderStyles.position);
    console.log('🎞️ Slider top:', sliderStyles.top);
    
    // Verificar posición exacta
    const rect = slider.getBoundingClientRect();
    console.log('📐 Slider distance from top:', rect.top + 'px');
    
    if (rect.top > 0) {
        console.log('⚠️ HAY ESPACIO ARRIBA DEL SLIDER!');
        
        // Buscar elementos que puedan estar causando el problema
        const elementsAbove = document.querySelectorAll('*');
        elementsAbove.forEach(el => {
            const elRect = el.getBoundingClientRect();
            if (elRect.bottom > 0 && elRect.bottom <= rect.top && el !== slider) {
                console.log('🔴 Elemento problemático:', el.tagName, el.className, 'Height:', elRect.height);
            }
        });
    } else {
        console.log('✅ No hay espacio arriba del slider');
    }
} else {
    console.log('❌ Slider no encontrado');
}

// Verificar admin bar
const adminBar = document.getElementById('wpadminbar');
if (adminBar) {
    console.log('⚠️ Admin bar presente:', adminBar.offsetHeight + 'px');
} else {
    console.log('✅ Admin bar no presente');
}
