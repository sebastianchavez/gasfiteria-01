# AquaPro - Landing Page Template

Plantilla de sitio web corporativo para empresa de gasfitería con academia de formación técnica. Multi-página, totalmente responsive, con animaciones nativas y datos mockeados.

## Stack

- **HTML5**
- **Tailwind CSS** (vía CDN)
- **JavaScript** vanilla (sin frameworks)
- **Google Fonts** (Inter)

## Estructura

```
gasfiteria-01/
├── index.html                   # Pantalla de Inicio
├── sobre-nosotros.html           # Sobre nosotros
├── servicios.html               # Nuestros servicios
├── galeria.html                 # Galería con filtros y lightbox
├── precios.html                 # Planes + lista precios + calculadora + FAQ
├── horarios-clases.html         # Academia: cursos y horarios
├── contacto.html                # Formulario + mapa + horarios
├── politicas-privacidad.html    # Documento legal
├── terminos-condiciones.html    # Documento legal
├── 404.html                     # Página de error
└── assets/
    ├── css/
    │   └── styles.css           # Animaciones + estilos custom
    ├── js/
    │   ├── data.js              # Datos mockeados centralizados
    │   ├── main.js              # Navbar, footer, formulario, render
    │   ├── animations.js        # IntersectionObserver, parallax
    │   └── gallery.js           # Filtros + lightbox
    └── img/
        └── logo.svg             # Logo SVG (gota + llave)
```

## Cómo usar

1. Abrir `index.html` en cualquier navegador moderno.
2. No requiere build step ni dependencias locales.
3. Para producción, reemplazar las URLs de imágenes (Unsplash) por imágenes propias.

## Personalización

### Cambiar datos del negocio
Editar `assets/js/data.js`:

```js
const APP = {
  nombre: 'AquaPro',
  telefono: '+56 9 1234 5678',
  email: 'contacto@aquapro.cl',
  direccion: 'Av. Las Industrias 1234, Santiago, Chile',
  ...
};
```

### Cambiar paleta de colores
Editar el bloque `tailwind.config` en cada HTML o en el script global:

```js
tailwind.config = {
  theme: { extend: { colors: {
    primary: '#1E40AF',
    accent: '#F97316'
  }}}
}
```

### Cambiar contenido de cada sección
Los arrays principales en `data.js`:
- `SERVICIOS` - 10 servicios
- `EQUIPO` - 6 personas del equipo
- `TESTIMONIOS` - 5 testimonios
- `PLANES` - 3 planes mensuales
- `CURSOS` - 3 niveles de cursos
- `GALERIA` - 12 imágenes filtrables
- `PRECIO_SERVICIOS` - Lista de precios
- `FAQ` - Preguntas frecuentes

## Características

- **Multi-página** (9 páginas + 404)
- **Navbar y footer** compartidos, renderizados dinámicamente
- **Menú móvil** con animación hamburguesa
- **Animaciones de scroll** vía IntersectionObserver
- **Carrusel de testimonios** con scroll-snap y dots
- **Galería** con filtros por categoría y lightbox (teclado: ESC, ←, →)
- **Calculadora** de presupuesto en precios.html
- **FAQ acordeón** en precios.html
- **Validación de formulario** nativa en contacto.html
- **Contadores animados** en estadísticas
- **Diseño responsive** mobile-first
- **Botón flotante de WhatsApp**
- **Documentos legales** con tabla de contenidos lateral

## Navegación

- Inicio → `index.html`
- Sobre nosotros → `sobre-nosotros.html`
- Servicios → `servicios.html`
- Galería → `galeria.html`
- Precios → `precios.html`
- Academia → `horarios-clases.html`
- Contacto → `contacto.html`
- Privacidad → `politicas-privacidad.html`
- Términos → `terminos-condiciones.html`

## Licencia

Template de uso libre para personalizar y adaptar a cualquier negocio de gasfitería o rubro similar.