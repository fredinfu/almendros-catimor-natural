/**
 * ALMENDROS COFFEE CO. — CATIMOR NATURAL
 * Interactividad ligera, accesible y vinculación dinámica con config.js
 */

(function () {
  "use strict";

  const cfg = window.CATIMOR_NATURAL_CONFIG;

  /**
   * Construye el enlace oficial de WhatsApp (wa.me) a partir del número y mensaje configurados.
   */
  function buildWhatsAppUrl(phone, message) {
    const cleanDigits = String(phone || "").replace(/[^\d]/g, "");
    if (!cleanDigits) return "https://almendroscoffee.com/";
    const query = message ? "?text=" + encodeURIComponent(message) : "";
    return "https://wa.me/" + cleanDigits + query;
  }

  /**
   * Aplica imágenes, textos, tarjetas y enlaces editables desde config.js.
   */
  function applyConfiguration(config) {
    if (!config) return;

    const disp = config.disponibilidad || {};
    const imgs = config.imagenes || {};
    const contacto = config.contacto || {};
    const p = config.producto || {};
    const varUnica = config.variedadUnica || {};
    const taza = config.perfilDeTaza || {};
    const orig = config.origen || {};
    const hist = config.historiaIlustrada || {};
    const pres = config.presentaciones || {};

    // Bindings de imágenes centralizadas
    if (imgs.logo) {
      document.querySelectorAll('[data-config-img="logo"]').forEach(function (el) {
        el.setAttribute("src", imgs.logo);
        if (imgs.logoAlt) el.setAttribute("alt", imgs.logoAlt);
      });
    }
    if (imgs.etiqueta) {
      document.querySelectorAll('[data-config-img="etiqueta"]').forEach(function (el) {
        el.setAttribute("src", imgs.etiqueta);
        if (imgs.etiquetaAlt) el.setAttribute("alt", imgs.etiquetaAlt);
      });
    }
    if (imgs.sticker) {
      document.querySelectorAll('[data-config-img="sticker"]').forEach(function (el) {
        el.setAttribute("src", imgs.sticker);
        if (imgs.stickerAlt) el.setAttribute("alt", imgs.stickerAlt);
      });
    }
    if (imgs.ramaBotanica) {
      document.querySelectorAll('[data-config-img="ramaBotanica"]').forEach(function (el) {
        el.setAttribute("src", imgs.ramaBotanica);
        if (imgs.ramaBotanicaAlt) el.setAttribute("alt", imgs.ramaBotanicaAlt);
      });
    }

    // Bindings de texto
    const textBindings = {
      marcaUpper: p.marca ? String(p.marca).toUpperCase() : null,
      estadoDisponibilidad: disp.disponible ? disp.etiquetaDisponible : disp.etiquetaAgotado,
      nombreProducto: p.nombre,
      subtituloProducto: p.subtitulo,
      tuesteProducto: p.tueste,
      categoriaProducto: p.categoria,
      fraseEntrada: p.fraseEntrada ? "“" + p.fraseEntrada + "”" : null,
      botonHero: p.botonHero,
      botonWhatsapp: p.botonWhatsapp,

      variedadEyebrow: varUnica.eyebrow,
      variedadTitulo: varUnica.titulo,
      variedadDescripcion: varUnica.descripcion,

      tazaEyebrow: taza.eyebrow,
      tazaTitulo: taza.titulo,
      descripcionSensorial: taza.descripcionPrincipal ? "“" + taza.descripcionPrincipal + "”" : null,
      tuesteCorto: p.tuesteCorto,
      notaTueste: taza.notaTueste,

      origenEyebrow: orig.eyebrow,
      origenTitulo: orig.titulo,
      historiaFinca: orig.historiaFinca,
      declaracionOrigen: orig.declaracionOrigen,
      origenFinca: orig.finca,
      origenRegion: orig.region,
      origenProductor: orig.productor,
      origenAltitud: orig.altitud,
      origenCosecha: orig.cosecha,
      selloTrazabilidad: orig.selloTrazabilidad,

      historiaEyebrow: hist.eyebrow,
      historiaTitulo: hist.titulo,
      relatoIntro: hist.relatoIntro,
      captionSticker: hist.captionSticker,

      presentacionesEyebrow: pres.eyebrow,
      presentacionesTitulo: pres.titulo,
      presentacionesDescripcion: pres.descripcion,
      enviosTitulo: pres.enviosTitulo,
      enviosDetalle: pres.enviosDetalle,
      botonSecundario: pres.botonSecundario,

      instagramUsuario: contacto.instagramUsuario,
      whatsappNumero: contacto.whatsappNumero,
      sitioWebEtiqueta: contacto.sitioWebEtiqueta,
      ubicacionPais: contacto.ubicacion
    };

    Object.keys(textBindings).forEach(function (key) {
      const value = textBindings[key];
      if (value === null || value === undefined || value === "") return;
      document.querySelectorAll('[data-config="' + key + '"]').forEach(function (el) {
        el.textContent = value;
      });
    });

    // Estado visual de disponibilidad
    const availabilityPill = document.getElementById("heroAvailability");
    if (availabilityPill && disp.disponible === false) {
      availabilityPill.classList.add("is-soldout");
    }

    // Ficha editorial de 3 datos (Una sola variedad)
    const varietyGrid = document.getElementById("varietyTriptych");
    if (varietyGrid && Array.isArray(varUnica.datos) && varUnica.datos.length > 0) {
      varietyGrid.innerHTML = "";
      varUnica.datos.forEach(function (dato, idx) {
        const card = document.createElement("article");
        card.className = "poster-spec-card" + (idx === 2 ? " poster-spec-card-highlight" : "");

        const tag = document.createElement("span");
        tag.className = "spec-card-tag";
        tag.textContent = "0" + (idx + 1) + " · " + (dato.etiqueta || "");

        const val = document.createElement("h3");
        val.className = "spec-card-value";
        val.textContent = dato.valor || "";

        const desc = document.createElement("p");
        desc.className = "spec-card-desc";
        desc.textContent = dato.detalle || "";

        card.appendChild(tag);
        card.appendChild(val);
        card.appendChild(desc);
        varietyGrid.appendChild(card);
      });
    }

    // Destacados del perfil de taza
    const pillarsContainer = document.getElementById("sensoryPillars");
    const numerals = ["I", "II", "III"];
    if (pillarsContainer && Array.isArray(taza.destacados) && taza.destacados.length > 0) {
      pillarsContainer.innerHTML = "";
      taza.destacados.slice(0, 3).forEach(function (attr, idx) {
        const card = document.createElement("div");
        card.className = "sensory-pillar";

        const num = document.createElement("span");
        num.className = "pillar-num";
        num.setAttribute("aria-hidden", "true");
        num.textContent = numerals[idx] || String(idx + 1);

        const title = document.createElement("h3");
        title.className = "pillar-title";
        title.textContent = attr.titulo || "";

        const detail = document.createElement("p");
        detail.className = "pillar-text";
        detail.textContent = attr.detalle || "";

        card.appendChild(num);
        card.appendChild(title);
        card.appendChild(detail);
        pillarsContainer.appendChild(card);
      });
    }

    // Tres momentos del acordeón en Historia Ilustrada
    if (Array.isArray(hist.momentos)) {
      hist.momentos.forEach(function (mom, idx) {
        const item = document.querySelector('.accordion-item[data-landmark="' + idx + '"]');
        if (!item) return;
        const numEl = item.querySelector(".landmark-index");
        const nameEl = item.querySelector(".landmark-name");
        const subEl = item.querySelector(".landmark-sub");
        const descEl = item.querySelector(".landmark-desc");
        if (numEl && mom.numero) numEl.textContent = mom.numero;
        if (nameEl && mom.titulo) nameEl.textContent = mom.titulo;
        if (subEl && mom.subtitulo) subEl.textContent = mom.subtitulo;
        if (descEl && mom.descripcion) descEl.textContent = mom.descripcion;
      });
    }

    // Presentaciones y precios de venta (250 g y 500 g)
    if (Array.isArray(pres.opciones)) {
      pres.opciones.forEach(function (opt) {
        const card = document.querySelector('.presentation-card[data-presentation-id="' + opt.id + '"]');
        if (!card) return;
        const weightEl = card.querySelector(".presentation-weight");
        const tagEl = card.querySelector(".presentation-price-tag");
        const priceEl = card.querySelector(".presentation-price");
        const btnEl = card.querySelector("a.btn-whatsapp");
        const btnTextEl = btnEl ? btnEl.querySelector("span") : null;

        if (weightEl && opt.tamano) weightEl.textContent = opt.tamano;
        if (tagEl && opt.etiquetaPrecio) tagEl.textContent = opt.etiquetaPrecio;
        if (priceEl && opt.precio) priceEl.textContent = (opt.moneda || "L") + opt.precio;
        if (btnTextEl && opt.botonTexto) btnTextEl.textContent = opt.botonTexto;
        if (btnEl && contacto.whatsappNumero && opt.whatsappMensaje) {
          btnEl.setAttribute("href", buildWhatsAppUrl(contacto.whatsappNumero, opt.whatsappMensaje));
        }
      });
    }

    // Enlaces generales (WhatsApp general, Instagram, Sitio Web)
    if (contacto.whatsappNumero) {
      const waGeneralUrl = buildWhatsAppUrl(contacto.whatsappNumero, contacto.whatsappMensajeGeneral);
      document.querySelectorAll("[data-whatsapp-general]").forEach(function (link) {
        link.setAttribute("href", waGeneralUrl);
      });
    }

    if (contacto.instagramUrl) {
      document.querySelectorAll("[data-instagram-link]").forEach(function (link) {
        link.setAttribute("href", contacto.instagramUrl);
      });
    }

    if (contacto.sitioWebUrl) {
      document.querySelectorAll("[data-website-link]").forEach(function (link) {
        link.setAttribute("href", contacto.sitioWebUrl);
      });
    }
  }

  /**
   * Menú de navegación móvil accesible.
   */
  function initNavigation() {
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("primaryNav");
    if (!toggle || !nav) return;

    function closeMenu() {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú de navegación");
      nav.classList.remove("is-open");
    }

    toggle.addEventListener("click", function () {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      if (expanded) {
        closeMenu();
      } else {
        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", "Cerrar menú de navegación");
        nav.classList.add("is-open");
      }
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        closeMenu();
        toggle.focus();
      }
    });

    document.addEventListener("click", function (e) {
      if (
        nav.classList.contains("is-open") &&
        !nav.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }

  /**
   * Explorador interactivo de la etiqueta (Sección 5: Una historia ilustrada).
   * Sincroniza los 3 puntos en capa separada con el acordeón accesible.
   */
  function initStoryExplorer() {
    const pins = Array.from(document.querySelectorAll(".landmark-pin"));
    const items = Array.from(document.querySelectorAll(".accordion-item"));
    const triggers = Array.from(document.querySelectorAll(".accordion-trigger"));
    const pinsLayer = document.getElementById("landmarkPinsLayer");
    const togglePinsBtn = document.getElementById("togglePinsBtn");

    if (!pins.length || !items.length || !triggers.length) return;

    function activateMoment(indexStr, options) {
      const opts = options || {};
      const targetIdx = String(indexStr);

      pins.forEach(function (pin) {
        const match = pin.getAttribute("data-landmark") === targetIdx;
        pin.classList.toggle("is-active", match);
        pin.setAttribute("aria-pressed", match ? "true" : "false");
      });

      items.forEach(function (item) {
        const match = item.getAttribute("data-landmark") === targetIdx;
        const trigger = item.querySelector(".accordion-trigger");
        const panel = item.querySelector(".accordion-panel");

        const shouldOpen = opts.toggle && match
          ? trigger.getAttribute("aria-expanded") !== "true"
          : match;

        item.classList.toggle("is-active", shouldOpen);
        if (trigger) {
          trigger.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
        }
        if (panel) {
          panel.hidden = !shouldOpen;
        }
      });

      if (opts.revealPins && pinsLayer && pinsLayer.classList.contains("is-hidden")) {
        pinsLayer.classList.remove("is-hidden");
        if (togglePinsBtn) {
          togglePinsBtn.setAttribute("aria-pressed", "false");
          togglePinsBtn.textContent = "Ver arte sin marcadores";
        }
      }
    }

    pins.forEach(function (pin) {
      pin.addEventListener("click", function () {
        const idx = pin.getAttribute("data-landmark");
        activateMoment(idx, { toggle: false, revealPins: true });
      });
    });

    triggers.forEach(function (trigger, pos) {
      trigger.addEventListener("click", function () {
        const idx = trigger.getAttribute("data-landmark");
        activateMoment(idx, { toggle: true, revealPins: false });
      });

      trigger.addEventListener("keydown", function (e) {
        let nextPos = null;
        if (e.key === "ArrowDown") {
          nextPos = (pos + 1) % triggers.length;
        } else if (e.key === "ArrowUp") {
          nextPos = (pos - 1 + triggers.length) % triggers.length;
        } else if (e.key === "Home") {
          nextPos = 0;
        } else if (e.key === "End") {
          nextPos = triggers.length - 1;
        }

        if (nextPos !== null) {
          e.preventDefault();
          triggers[nextPos].focus();
        }
      });
    });

    if (togglePinsBtn && pinsLayer) {
      togglePinsBtn.addEventListener("click", function () {
        const hidden = pinsLayer.classList.toggle("is-hidden");
        togglePinsBtn.setAttribute("aria-pressed", hidden ? "true" : "false");
        togglePinsBtn.textContent = hidden
          ? "Mostrar marcadores"
          : "Ver arte sin marcadores";
      });
    }
  }

  /**
   * Aparición suave de secciones respetando prefers-reduced-motion.
   */
  function initScrollReveal() {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || !("IntersectionObserver" in window)) return;

    const sections = document.querySelectorAll(".reveal-section");
    if (!sections.length) return;

    document.documentElement.classList.add("js-ready");

    sections.forEach(function (sec) {
      const rect = sec.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.92) {
        sec.classList.add("is-pending");
      }
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("is-pending");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    sections.forEach(function (sec) {
      if (sec.classList.contains("is-pending")) {
        observer.observe(sec);
      }
    });
  }

  // Inicialización
  applyConfiguration(cfg);
  initNavigation();
  initStoryExplorer();
  initScrollReveal();
})();
