# Tailwind CSS Setup - Arrebol Theme

## Instalación Completada ✅

Tailwind CSS ha sido instalado y configurado correctamente en el tema Arrebol.

### Configuración Actual

1. **Dependencias instaladas:**
   - `tailwindcss@^4.1.11` (dev dependency)
   - `@tailwindcss/cli` (dev dependency)

2. **Archivos de configuración:**
   - `tailwind.config.js` - Configuración de Tailwind
   - `src/input.css` - CSS de entrada con estilos personalizados
   - `assets/css/tailwind.css` - CSS generado (minificado)

3. **Scripts de build disponibles:**
   ```bash
   npm run build-css-prod    # Build de producción (minificado)
   npm run build-css         # Build en modo watch (desarrollo)
   ```

### Uso en Desarrollo

Para trabajar en desarrollo con auto-regeneración del CSS:

```bash
cd "c:\WWW\Arrebol\wp-content\themes\arrebol-theme"
npm run build-css
```

O usar el archivo batch:
```cmd
build-watch.bat
```

### Estilos Personalizados

El tema incluye variables CSS personalizadas definidas en `src/input.css`:

- `--color-arrebol-beige`: #f5f3f0
- `--color-arrebol-dark`: #2c2c2c  
- `--color-arrebol-accent`: #d4af37
- `--color-arrebol-light`: #ffffff
- `--font-inter`: 'Inter', sans-serif
- `--font-playfair`: 'Playfair Display', serif

### Clases Personalizadas Disponibles

- `.menu-item` - Estilos para elementos del menú
- `.btn-elegant` - Botón con estilo elegante
- `.section-spacing` - Espaciado de secciones
- `.text-shadow` - Sombra de texto sutil
- `.backdrop-blur-subtle` - Efecto blur para fondos

### Integración con WordPress

El CSS compilado se carga automáticamente en `functions.php`:

```php
wp_enqueue_style('tailwind-local', get_template_directory_uri() . '/assets/css/tailwind.css', array(), '1.0');
```

### Para Futuros Desarrolladores

1. **Modificar estilos:** Editar `src/input.css`
2. **Recompilar:** Ejecutar `npm run build-css-prod`
3. **Desarrollo:** Usar `npm run build-css` para watch mode
4. **Producción:** Siempre usar la versión minificada

---

**Nota:** El CDN de Tailwind ha sido reemplazado por la versión local para mejor rendimiento y control de versiones.
