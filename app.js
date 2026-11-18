/**
 * ALMENDROS COFFEE CO. — CATIMOR NATURAL
 * Interactividad ligera, accesible y vinculación dinámica con config.js
 */

(function () {
  "use strict";

  const cfg = window.CATIMOR_NATURAL_CONFIG;

  function buildWhatsAppUrl(phone, message) {
    const cleanDigits = String(phone || "").replace(/[^\d]/g, "");
    if (!cleanDigits) return "https://almendroscoffee.com/";
    const query = message ? "?text=" + encodeURIComponent(message) : "";
    return "https://wa.me/" + cleanDigits + query;
  }

  function applyConfiguration(config) {
    if (!config) return;

    const disp = config.disponibilidad || {};
    const imgs = config.imagenes || {};
    const contacto = config.contacto || {};
    const p = config.producto || {};
    const tabs = config.pestanas || {};
    const car = tabs.caracteristicas || {};
    const histTab = tabs.historia || {};
    const sost = tabs.sostenibilidad || {};
    const orig = config.origen || {};
    const prep = config.preparacion || {};
    const hist = config.historiaIlustrada || {};
    const pres = config.presentaciones || {};

    // Imágenes centralizadas
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

    // Textos simples
    const textBindings = {
      marcaUpper: p.marca ? String(p.marca).toUpperCase() : null,
      estadoDisponibilidad: disp.disponible ? disp.etiquetaDisponible : disp.etiquetaAgotado,
      nombreProducto: p.nombre,
      subtituloProducto: p.subtitulo,
      tuesteProducto: p.tueste,
      categoriaProducto: p.categoria,
      fraseEntrada: p.fraseEntrada,
      botonHero: p.botonHero,
      botonWhatsapp: p.botonWhatsapp,

      procesoTitulo: car.procesoTitulo,
      procesoTexto: car.procesoTexto,
      almacenamientoTitulo: car.almacenamientoTitulo,

      historiaOrigenSub: histTab.subtituloOrigen,
      historiaTuesteSub: histTab.subtituloTueste,
      historiaOrigenTexto: histTab.texto,

      sostTitulo: sost.titulo,
      sostParrafo1: sost.parrafo1,
      sostParrafo2: sost.parrafo2,

      origenFinca: orig.finca,
      origenRegion: orig.region,
      origenProductor: orig.productor,
      origenCosecha: orig.cosecha,

      prepTitulo: prep.titulo,
      prepSubtitulo: prep.subtitulo,

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

    const availabilityPill = document.getElementById("heroAvailability");
    if (availabilityPill && disp.disponible === false) {
      availabilityPill.classList.add("is-soldout");
    }

    // Notas de sabor (pills)
    const flavorPills = document.getElementById("flavorPills");
    if (flavorPills && Array.isArray(car.notasSabor)) {
      flavorPills.innerHTML = "";
      car.notasSabor.forEach(function (nota) {
        const li = document.createElement("li");
        li.className = "flavor-pill";
        li.textContent = nota;
        flavorPills.appendChild(li);
      });
    }

    // Almacenamiento
    const storageList = document.getElementById("storageList");
    if (storageList && Array.isArray(car.almacenamientoItems)) {
      storageList.innerHTML = "";
      car.almacenamientoItems.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item;
        storageList.appendChild(li);
      });
    }

    // Ficha de 6 especificaciones
    const specsGrid = document.getElementById("specsGrid");
    if (specsGrid && Array.isArray(config.especificaciones)) {
      specsGrid.innerHTML = "";
      config.especificaciones.forEach(function (spec) {
        const card = document.createElement("div");
        card.className = "spec-card";

        const label = document.createElement("span");
        label.className = "spec-label";
        label.textContent = spec.etiqueta || "";

        const val = document.createElement("strong");
        val.className = "spec-value";
        val.textContent = spec.valor || "";

        card.appendChild(label);
        card.appendChild(val);
        specsGrid.appendChild(card);
      });
    }

    // Métodos de preparación
    const brewGrid = document.getElementById("brewMethodsGrid");
    if (brewGrid && Array.isArray(prep.metodos)) {
      brewGrid.innerHTML = "";
      prep.metodos.forEach(function (m) {
        const art = document.createElement("article");
        art.className = "brew-card";

        const h3 = document.createElement("h3");
        h3.className = "brew-title";
        h3.textContent = m.nombre || "";

        const recipe = document.createElement("p");
        recipe.className = "brew-recipe";
        recipe.textContent = m.receta || "";

        const note = document.createElement("p");
        note.className = "brew-note";
        note.textContent = m.nota || "";

        art.appendChild(h3);
        art.appendChild(recipe);
        art.appendChild(note);
        brewGrid.appendChild(art);
      });
    }

    // Momentos del acordeón
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

    // Presentaciones 250 g y 500 g
    if (Array.isArray(pres.opciones)) {
      pres.opciones.forEach(function (opt) {
        const card = document.querySelector('.presentation-card[data-presentation-id="' + opt.id + '"]');
        if (!card) return;
        const weightEl = card.querySelector(".presentation-weight");
        const tagEl = card.querySelector(".presentation-price-tag");
        const priceEl = card.querySelector(".presentation-price");
        const btnEl = card.querySelector("a.btn");
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

  function initTabs() {
    const tabBtns = Array.from(document.querySelectorAll(".tab-btn"));
    const tabPanels = Array.from(document.querySelectorAll(".tab-panel"));
    if (!tabBtns.length || !tabPanels.length) return;

    function selectTab(tabName) {
      tabBtns.forEach(function (btn) {
        const active = btn.getAttribute("data-tab") === tabName;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-selected", active ? "true" : "false");
      });

      tabPanels.forEach(function (panel) {
        const active = panel.id === "tab-panel-" + tabName;
        panel.hidden = !active;
      });
    }

    tabBtns.forEach(function (btn, idx) {
      btn.addEventListener("click", function () {
        selectTab(btn.getAttribute("data-tab"));
      });

      btn.addEventListener("keydown", function (e) {
        let nextIdx = null;
        if (e.key === "ArrowRight") nextIdx = (idx + 1) % tabBtns.length;
        if (e.key === "ArrowLeft") nextIdx = (idx - 1 + tabBtns.length) % tabBtns.length;
        if (nextIdx !== null) {
          e.preventDefault();
          tabBtns[nextIdx].focus();
          selectTab(tabBtns[nextIdx].getAttribute("data-tab"));
        }
      });
    });
  }

  function initStoryExplorer() {
    const items = Array.from(document.querySelectorAll(".accordion-item"));
    const triggers = Array.from(document.querySelectorAll(".accordion-trigger"));
    if (!items.length || !triggers.length) return;

    function activateMoment(indexStr) {
      const targetIdx = String(indexStr);
      items.forEach(function (item) {
        const match = item.getAttribute("data-landmark") === targetIdx;
        const trigger = item.querySelector(".accordion-trigger");
        const panel = item.querySelector(".accordion-panel");
        const shouldOpen = match
          ? trigger.getAttribute("aria-expanded") !== "true"
          : false;

        item.classList.toggle("is-active", shouldOpen);
        if (trigger) trigger.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
        if (panel) panel.hidden = !shouldOpen;
      });
    }

    triggers.forEach(function (trigger, pos) {
      trigger.addEventListener("click", function () {
        activateMoment(trigger.getAttribute("data-landmark"));
      });

      trigger.addEventListener("keydown", function (e) {
        let nextPos = null;
        if (e.key === "ArrowDown") nextPos = (pos + 1) % triggers.length;
        else if (e.key === "ArrowUp") nextPos = (pos - 1 + triggers.length) % triggers.length;
        else if (e.key === "Home") nextPos = 0;
        else if (e.key === "End") nextPos = triggers.length - 1;

        if (nextPos !== null) {
          e.preventDefault();
          triggers[nextPos].focus();
        }
      });
    });
  }

  function initBrewCalculator() {
    const modal = document.getElementById("brewCalcModal");
    const openBtn = document.getElementById("openBrewCalcBtn");
    const closeBtn = document.getElementById("closeBrewCalcBtn");
    const methodEl = document.getElementById("calcMethod");
    const gramsEl = document.getElementById("calcCoffeeGrams");
    const ratioEl = document.getElementById("calcRatio");
    const ratioLabel = document.getElementById("calcRatioLabel");
    const waterOut = document.getElementById("calcWaterOutput");
    const grindOut = document.getElementById("calcGrindOutput");

    if (!modal || !openBtn || !closeBtn) return;

    const grindMap = {
      "pour-over": "Molienda media-fina (como sal de mesa)",
      "french-press": "Molienda gruesa (como sal marina)",
      "espresso": "Molienda fina (como azúcar pulverizada)",
      "cold-brew": "Molienda gruesa (extracción en frío 12–16 h)"
    };

    function updateCalc() {
      const grams = Math.max(5, Math.min(150, Number(gramsEl.value) || 15));
      const ratio = Number(ratioEl.value) || 16;
      const water = Math.round(grams * ratio);
      ratioLabel.textContent = "1:" + ratio;
      waterOut.textContent = water + " ml";
      grindOut.textContent = grindMap[methodEl.value] || grindMap["pour-over"];
    }

    function openModal() {
      modal.hidden = false;
      updateCalc();
      closeBtn.focus();
    }

    function closeModal() {
      modal.hidden = true;
      openBtn.focus();
    }

    openBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hidden) closeModal();
    });

    methodEl.addEventListener("change", updateCalc);
    gramsEl.addEventListener("input", updateCalc);
    ratioEl.addEventListener("input", updateCalc);
  }

  function initShareButtons() {
    const copyBtn = document.getElementById("copyLinkBtn");
    if (!copyBtn) return;

    copyBtn.addEventListener("click", function () {
      const url = window.location.href.split("#")[0];
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function () {
          copyBtn.textContent = "¡Enlace copiado!";
          setTimeout(function () {
            copyBtn.textContent = "Copiar enlace";
          }, 2200);
        });
      } else {
        copyBtn.textContent = "¡Enlace listo!";
      }
    });
  }

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

  applyConfiguration(cfg);
  initNavigation();
  initTabs();
  initStoryExplorer();
  initBrewCalculator();
  initShareButtons();
  initScrollReveal();
})();
