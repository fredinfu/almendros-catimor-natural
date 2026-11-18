# Catimor Natural — Almendros Coffee Co.

Landing oficial de producto para **Catimor Natural**, café de especialidad hondureño de **Finca Los Almendros** (San Luis, Comayagua, Honduras), con fermentación anaeróbica de 120 horas y tueste medio.

- **URL pública esperada (GitHub Pages):** https://fredinfu.github.io/almendros-catimor-natural/
- **Marca:** [Almendros Coffee Co.](https://almendroscoffee.com/) · [@almendroscoffeeco](https://www.instagram.com/almendroscoffeeco/)

---

## Cómo editar precios, textos e imágenes (sin tocar el código del sitio)

Toda la configuración editable del producto, presentaciones, precios, textos, enlaces e imágenes está centralizada en:

👉 **[`config.js`](./config.js)**

Podés editarlo directamente desde GitHub (**Edit this file** → **Commit changes**) o desde tu computadora. Al guardar en la rama `main`, GitHub Pages actualiza el sitio automáticamente.

### 1. Cambiar precios o presentaciones (250 g y 500 g)
En la sección `presentaciones.opciones` de `config.js`:

```js
opciones: [
  {
    id: "250g",
    tamano: "250 g",
    moneda: "L",
    precio: "215",
    etiquetaPrecio: "Precio de venta",
    botonTexto: "Consultar por 250 g",
    whatsappMensaje:
      "Hola, me interesa una bolsa de Catimor Natural de 250 g. ¿Tienen disponibilidad y hacen envíos a mi ciudad?"
  },
  {
    id: "500g",
    tamano: "500 g",
    moneda: "L",
    precio: "395",
    etiquetaPrecio: "Precio de venta",
    botonTexto: "Consultar por 500 g",
    whatsappMensaje:
      "Hola, me interesa una bolsa de Catimor Natural de 500 g. ¿Tienen disponibilidad y hacen envíos a mi ciudad?"
  }
]
```

### 2. Reemplazar la etiqueta, el sticker o el logo
Tenés dos opciones sin tocar `index.html` ni `styles.css`:
- **Opción A (reemplazar archivo):** Sobrescribí el archivo correspondiente dentro de `assets/` manteniendo el mismo nombre (`catimor-label.jpg`, `catimor-sticker.jpg` o `almendros-logo.png`).
- **Opción B (cambiar ruta en `config.js`):** Subí el nuevo archivo a `assets/` y actualizá su ruta y texto alternativo en el bloque `imagenes` de `config.js`:

```js
imagenes: {
  logo: "./assets/almendros-logo.png",
  etiqueta: "./assets/catimor-label.jpg",
  sticker: "./assets/catimor-sticker.jpg",
  ramaBotanica: "./assets/coffee-branch.png"
}
```

### 3. Cambiar disponibilidad o mensajes de WhatsApp
- **Disponibilidad:** En `disponibilidad.disponible`, cambiá `true` por `false` para mostrar el aviso de lote agotado.
- **WhatsApp:** Actualizá `contacto.whatsappNumero` o `contacto.whatsappMensajeGeneral` en `config.js`.

---

## Estructura del proyecto

```text
├── index.html                    # HTML5 semántico (es-HN) y metadatos SEO / Open Graph
├── styles.css                    # Diseño editorial responsivo (mobile-first)
├── config.js                     # Configuración centralizada de precios, textos, enlaces e imágenes
├── app.js                        # Vinculación con config.js, menú móvil y acordeón sincronizado
├── .nojekyll                     # Publicación directa en GitHub Pages
├── assets/
│   ├── catimor-label.jpg         # Etiqueta ilustrada principal de Catimor Natural
│   ├── catimor-sticker.jpg       # Sticker del gato junto a la ventana (@almendroscoffeeco)
│   ├── almendros-logo.png        # Logotipo oficial de Almendros Coffee Co.
│   ├── coffee-branch.png         # Grabado botánico de rama de cafeto
│   ├── og-catimor-natural.jpg    # Vista previa Open Graph (1200×630)
│   └── favicon.svg               # Ícono de pestaña
└── qr/                           # Código QR para Canva e impresión térmica
```
