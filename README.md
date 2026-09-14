# Yunta Gourmet — Landing page

Landing de una página para Yunta Gourmet: Inicio, La Marca, Productos, Cajas de Regalo, Dónde Encontrarnos y Contacto. HTML/CSS/JS puro (sin frameworks ni build), listo para subir a cualquier hosting.

## Estructura

```
index.html
css/styles.css
js/main.js
assets/logo/        ← logo oficial (SVG + PNG), tal como lo entregó diseño
```

## Cómo publicarlo

Sube estos 4 elementos (index.html, css/, js/, assets/) a la raíz de tu hosting, manteniendo la misma estructura de carpetas. No requiere servidor especial ni build: es HTML estático.

Si usas cPanel / hosting compartido: sube todo dentro de `public_html/`.
Si usas Vercel/Netlify: arrastra la carpeta completa (detectan sitio estático automáticamente).

## Antes de salir en vivo — qué falta confirmar

Los datos de contacto ya son reales (no placeholder):

- **WhatsApp**: se muestran dos números — `+56 9 5847 9730` (principal, usado también en el botón flotante) y `+56 9 9789 2530` (alternativo). Si en algún momento quieren dejar solo uno, se busca `56958479730` / `56997892530` en `index.html`.
- **Email**: `contacto@thieleilabaca.com` (Contacto, footer y en el envío del formulario en `js/main.js`).
- **Instagram**: `@yuntagourmet` / `instagram.com/yuntagourmet` — confirmar que ese sea el handle real antes de publicar.

Solo queda pendiente:

1. **Dominio**: las meta-etiquetas Open Graph asumen `yuntagourmet.cl`; ajusta si el dominio final es otro.
2. **Formulario de contacto**: hoy funciona abriendo el cliente de correo del visitante (`mailto:`) con los datos precargados — es una solución simple sin backend. Si más adelante quieres que llegue directo a un correo o CRM sin depender del cliente de correo del usuario, se puede conectar a un servicio como Formspree, o a un backend propio.

## Fotografías de producto

Esta primera versión es intencionalmente tipográfica (sin fotos de producto), ya que aún no había material fotográfico disponible. Cuando haya fotos de las 4 líneas (salsas, encurtidos, confitados, charcutería) y de las cajas de regalo, se pueden incorporar en las tarjetas de `#productos` y `#cajas-de-regalo` sin rehacer el resto del sitio — la estructura ya está pensada para eso.

## Sobre el logo

Se usó el archivo `Yunta Gourmet logo design.zip` (carpeta `export/`), que ya venía con la paleta y tipografías definidas:

- Tinta: `#16130F` · Crema: `#EFE9DD`
- Tipografía de display: **Bodoni Moda** (Google Fonts)
- Tipografía de texto/labels: **Archivo** (Google Fonts)

Ambas se cargan vía Google Fonts en el `<head>` de `index.html`; si tu hosting bloquea llamadas externas, hay que auto-hospedar las tipografías.

## Próxima etapa sugerida

Cuando quieran sumar el catálogo con formulario de pedido, se agrega como una sección/página nueva reutilizando las tarjetas de producto ya creadas — no requiere rehacer el landing.
