/**
 * ALMENDROS COFFEE CO. — CATIMOR NATURAL
 * Archivo central de configuración del producto, precios, textos, enlaces e imágenes.
 *
 * INSTRUCCIONES RÁPIDAS PARA EDITAR:
 * 1. Cambiá únicamente los valores entre comillas ("...") o true / false.
 * 2. Para actualizar precios o presentaciones, editá la lista `presentaciones`.
 * 3. Para marcar el café como agotado temporalmente, cambiá `disponible: true` a `disponible: false`.
 * 4. Para reemplazar la etiqueta, el sticker o el logo, cambiá las rutas en `imagenes` (o reemplazá el archivo en ./assets/).
 * 5. Guardá el archivo y subí el cambio a GitHub; el sitio se actualizará automáticamente.
 */

window.CATIMOR_NATURAL_CONFIG = {
  // 1. DISPONIBILIDAD DEL PRODUCTO
  disponibilidad: {
    disponible: true,
    etiquetaDisponible: "Disponible · Cosecha 2026",
    etiquetaAgotado: "Agotado temporalmente · Consultá próximo tueste"
  },

  // 2. RUTAS DE IMÁGENES (COMPATIBLES CON SUBDIRECTORIO DE GITHUB PAGES)
  imagenes: {
    logo: "./assets/almendros-logo.png",
    logoAlt: "Logo oficial de Almendros Coffee Co.",
    etiqueta: "./assets/catimor-label.jpg",
    etiquetaAlt:
      "Etiqueta ilustrada de Catimor Natural de Almendros Coffee Co.: cielo naranja de amanecer, silueta urbana, gato con gafas y chaqueta azul petróleo sosteniendo una taza con la bandera de Honduras y vapor, junto al texto CATIMOR, FINCA LOS ALMENDROS, HN, COMAYAGUA",
    sticker: "./assets/catimor-sticker.jpg",
    stickerAlt:
      "Sticker ilustrado de Catimor de @almendroscoffeeco: gato con gafas y chaqueta azul petróleo junto a la ventana al amanecer sosteniendo una taza con la bandera de Honduras",
    ramaBotanica: "./assets/coffee-branch.png",
    ramaBotanicaAlt:
      "Grabado botánico oficial de rama de cafeto de Almendros Coffee Co."
  },

  // 3. INFORMACIÓN OFICIAL DE CONTACTO Y MENSAJES DE WHATSAPP
  contacto: {
    whatsappNumero: "+504 8879-3266",
    whatsappMensajeGeneral:
      "Hola, me interesa el Catimor Natural de Almendros. ¿Tienen disponibilidad y hacen envíos a mi ciudad?",
    instagramUrl: "https://www.instagram.com/almendroscoffeeco/",
    instagramUsuario: "@almendroscoffeeco",
    sitioWebUrl: "https://almendroscoffee.com/",
    sitioWebEtiqueta: "almendroscoffee.com",
    ubicacion: "Honduras"
  },

  // 4. IDENTIDAD Y ESPECIFICACIONES DEL PRODUCTO
  producto: {
    marca: "Almendros Coffee Co.",
    nombre: "Catimor Natural",
    subtitulo: "Fermentación anaeróbica · 120 horas",
    categoria: "Café de especialidad hondureño",
    tueste: "Tueste medio",
    tuesteCorto: "Medio",
    fraseEntrada: "La misma ciudad. Una selva de fruta en la taza.",
    botonHero: "Descubrí el Catimor",
    botonWhatsapp: "Consultar por WhatsApp"
  },

  // 5. SECCIÓN 2: UNA SOLA VARIEDAD
  variedadUnica: {
    eyebrow: "Origen único · Finca Los Almendros",
    titulo: "Una sola variedad",
    descripcion:
      "Una sola variedad de Finca Los Almendros, con el carácter frutal de un café natural.",
    datos: [
      {
        etiqueta: "Variedad",
        valor: "Catimor",
        detalle: "Variedad única cultivada en Finca Los Almendros."
      },
      {
        etiqueta: "Proceso",
        valor: "Natural",
        detalle: "Secado en cereza entera para conservar su carácter frutal."
      },
      {
        etiqueta: "Fermentación",
        valor: "120 horas",
        detalle: "Fermentación anaeróbica controlada de 120 horas."
      }
    ]
  },

  // 6. SECCIÓN 3: PERFIL DE TAZA
  perfilDeTaza: {
    eyebrow: "Experiencia en taza",
    titulo: "Perfil de taza",
    descripcionPrincipal:
      "Tiene la intensidad frutal de un café natural y el equilibrio de una fruta en su punto: el dulzor y la acidez se sienten juntos, y dan ganas de otro sorbo.",
    notaTueste:
      "Tostado en punto medio para acompañar cada mañana con cuerpo amable, dulzor claro y carácter frutal.",
    destacados: [
      {
        titulo: "Carácter frutal",
        detalle: "Intensidad frutal propia de un proceso natural trabajado con paciencia."
      },
      {
        titulo: "Dulzor",
        detalle: "Dulzor redondo que se siente desde el primer sorbo."
      },
      {
        titulo: "Acidez en su punto",
        detalle: "Equilibrio vivo que acompaña el dulzor y dan ganas de otro sorbo."
      }
    ]
  },

  // 7. SECCIÓN 4: NUESTRA FINCA
  origen: {
    eyebrow: "Origen real",
    titulo: "Nuestra finca",
    historiaFinca:
      "La ciudad es el escenario de la historia ilustrada, pero el café nace en las montañas de San Luis, Comayagua. En Finca Los Almendros, bajo el cuidado de Fernando Padilla, este Catimor de cosecha 2026 crece entre 1,250 y 1,300 metros sobre el nivel del mar.",
    declaracionOrigen: "Variedad única cultivada en Finca Los Almendros.",
    finca: "Finca Los Almendros",
    region: "San Luis, Comayagua, Honduras",
    productor: "Fernando Padilla",
    altitud: "1,250–1,300 msnm",
    cosecha: "2026",
    selloTrazabilidad: "San Luis, Comayagua · Cosecha 2026"
  },

  // 8. SECCIÓN 5: UNA HISTORIA ILUSTRADA
  historiaIlustrada: {
    eyebrow: "El ritual de la mañana",
    titulo: "Una historia ilustrada",
    relatoIntro:
      "El gato se levanta temprano, se sirve un café junto a la ventana y se pone los lentes antes de salir. Afuera lo esperan los mismos cables, los mismos edificios y el mismo camino de todos los días. No pasa nada. Lleva su Catimor, y un sorbo le basta para sentirse en medio de una selva de frutas.",
    captionSticker: "La primera taza junto a la ventana · @almendroscoffeeco",
    momentos: [
      {
        numero: "01",
        titulo: "El amanecer",
        subtitulo: "En el cielo naranja",
        descripcion:
          "El cielo naranja anuncia que el día apenas empieza. El gato se levanta temprano, se sirve su primera taza junto a la ventana y se pone los lentes antes de salir."
      },
      {
        numero: "02",
        titulo: "El camino de siempre",
        subtitulo: "En la silueta urbana",
        descripcion:
          "Afuera lo esperan los mismos cables, los mismos edificios y el mismo camino de todos los días. La ciudad sigue su ritmo habitual."
      },
      {
        numero: "03",
        titulo: "El primer sorbo",
        subtitulo: "Junto a la taza y el vapor",
        descripcion:
          "No pasa nada. Lleva su Catimor en la taza, y un sorbo le basta para sentirse en medio de una selva de frutas."
      }
    ]
  },

  // 9. SECCIÓN 6: LLEVATE TU CATIMOR (PRESENTACIONES Y PRECIOS DE VENTA)
  presentaciones: {
    eyebrow: "Café de especialidad hondureño",
    titulo: "Llevate tu Catimor",
    descripcion:
      "Elegí la presentación que mejor va con tu rutina. Ambas conservan el tueste medio y la fermentación anaeróbica de 120 horas de esta cosecha 2026.",
    enviosTitulo: "Envíos a nivel nacional en Honduras",
    enviosDetalle: "Las condiciones y el costo del envío se consultan directamente por WhatsApp.",
    botonSecundario: "Conocé Almendros Coffee Co.",
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
  }
};
