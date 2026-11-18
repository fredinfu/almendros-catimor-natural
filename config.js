/**
 * ALMENDROS COFFEE CO. — CATIMOR NATURAL
 * Archivo central de configuración del producto, precios, textos, enlaces e imágenes.
 *
 * INSTRUCCIONES RÁPIDAS PARA EDITAR:
 * 1. Cambiá únicamente los valores entre comillas ("...") o true / false.
 * 2. Para actualizar precios o presentaciones, editá la lista `presentaciones.opciones`.
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
      "Etiqueta ilustrada de Catimor Natural de Almendros Coffee Co.: gato con gafas y chaqueta azul petróleo sosteniendo una taza con la bandera de Honduras bajo un cielo naranja urbano",
    sticker: "./assets/catimor-sticker.jpg",
    stickerAlt:
      "Sticker ilustrado de Catimor de @almendroscoffeeco: gato con gafas y chaqueta azul petróleo junto a la ventana mirando la ciudad bajo el cielo naranja",
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

  // 4. PORTADA / IDENTIDAD DEL PRODUCTO
  producto: {
    marca: "Almendros Coffee Co.",
    nombre: "Catimor Natural",
    subtitulo: "Anaeróbico · 120 horas",
    categoria: "Café de especialidad hondureño",
    tueste: "Tueste medio",
    tuesteCorto: "Medio",
    fraseEntrada: "Exquisitas bayas con un acabado suave de chocolate oscuro.",
    botonHero: "Explorar café",
    botonWhatsapp: "Consultar por WhatsApp"
  },

  // 5. PESTAÑAS DE CONTENIDO (CARACTERÍSTICAS / HISTORIA / SOSTENIBILIDAD)
  pestanas: {
    caracteristicas: {
      notasSabor: [
        "Exquisitas bayas azules",
        "Acabado suave de chocolate oscuro",
        "Cuerpo sedoso, dulzura limpia"
      ],
      procesoTitulo: "Proceso",
      procesoTexto:
        "Las cerezas enteras reposan en tanques sellados durante 120 horas de fermentación anaeróbica y luego se secan al sol en camas elevadas. El secado lento y uniforme preserva la intensidad de la fruta y un acabado similar al cacao.",
      almacenamientoTitulo: "Almacenamiento",
      almacenamientoItems: [
        "Sin aditivos.",
        "Almacenar en un lugar fresco y hermético.",
        "Para mejor sabor, mantener en grano entero y moler justo antes de preparar."
      ]
    },
    historia: {
      subtituloOrigen: "Finca Los Almendros — San Luis, Comayagua, Honduras",
      subtituloTueste: "Tostado por Almendros Coffee Co.",
      texto:
        "Nuestro café proviene de Finca Los Almendros, en las montañas de San Luis, Comayagua, bajo el cuidado del productor Fernando Padilla. La fermentación anaeróbica de 120 horas aporta una complejidad y profundidad excepcionales, resaltando notas intensas a bayas azules y un final suave a chocolate oscuro."
    },
    sostenibilidad: {
      titulo: "Nuestro compromiso",
      parrafo1:
        "Trabajamos directamente con el origen para asegurar prácticas agrícolas responsables y un trato justo en cada cosecha. Este café se cultiva en altura siguiendo métodos tradicionales que respetan el entorno y cuidan la biodiversidad.",
      parrafo2:
        "Al elegir este Catimor Natural, apoyás la caficultura de especialidad hondureña y el trabajo dedicado de cada cosecha en Finca Los Almendros."
    }
  },

  // 6. FICHA DE ESPECIFICACIONES Y TRAZABILIDAD
  especificaciones: [
    { etiqueta: "Variedad", valor: "Catimor" },
    { etiqueta: "Proceso", valor: "Natural" },
    { etiqueta: "Fermentación", valor: "Anaeróbica 120 hrs" },
    { etiqueta: "Tueste", valor: "Medio" },
    { etiqueta: "Origen", valor: "San Luis, Comayagua" },
    { etiqueta: "Altitud", valor: "1,250–1,300 msnm" }
  ],

  origen: {
    finca: "Finca Los Almendros",
    region: "San Luis, Comayagua, Honduras",
    productor: "Fernando Padilla",
    altitud: "1,250–1,300 msnm",
    cosecha: "2026"
  },

  // 7. MÉTODOS DE PREPARACIÓN
  preparacion: {
    titulo: "Métodos de preparación",
    subtitulo: "Sacale todo el potencial a tu Catimor Natural con estas recetas base.",
    metodos: [
      {
        nombre: "Pour Over",
        receta: "15 g café • 250 g agua • 92–94 °C • 2:30–3:00.",
        nota: "Molienda media-fina."
      },
      {
        nombre: "AeroPress",
        receta: "16 g café • 210 g agua • ~1:45 total.",
        nota: "Molienda media · presión suave."
      },
      {
        nombre: "Espresso",
        receta: "18 g entrada • 36–40 g salida • 27–32 s.",
        nota: "Bajá un poco la temperatura si el shot se siente ácido."
      }
    ]
  },

  // 8. HISTORIA ILUSTRADA (DE LA VENTANA A LA CALLE, SIN MARCADORES)
  historiaIlustrada: {
    eyebrow: "De la ventana a la calle",
    titulo: "Una historia ilustrada",
    relatoIntro:
      "Desde la ventana, el gato mira la ciudad de siempre mientras el cielo se tiñe de naranja y el sol empieza a caer. Se pone los lentes y sale al mismo camino de edificios y cables de todos los días. No pasa nada: afuera tampoco perdona su taza de Catimor.",
    captionSticker: "Desde la ventana · @almendroscoffeeco",
    momentos: [
      {
        numero: "01",
        titulo: "Desde la ventana",
        subtitulo: "La ciudad al caer la tarde",
        descripcion:
          "Tras el vidrio, el cielo naranja anuncia que el sol empieza a caer. El gato observa los edificios y los cables de siempre antes de salir."
      },
      {
        numero: "02",
        titulo: "El camino de siempre",
        subtitulo: "Afuera, en la misma ciudad",
        descripcion:
          "Con los lentes puestos, sale a recorrer las calles de todos los días. La rutina sigue igual, pero el ánimo cambia cuando lleva su café en mano."
      },
      {
        numero: "03",
        titulo: "Su taza de Catimor",
        subtitulo: "El sorbo que no perdona",
        descripcion:
          "Ya afuera, no se pierde su taza. Bayas azules, chocolate oscuro y un sorbo que convierte la tarde en su mejor momento del día."
      }
    ]
  },

  // 9. PRESENTACIONES Y PRECIOS DE VENTA
  presentaciones: {
    eyebrow: "Llevate tu Catimor",
    titulo: "¿Listo para probarlo en casa?",
    descripcion:
      "Elegí tu presentación de esta cosecha 2026 o abrí el asistente para calcular tu receta ideal.",
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
