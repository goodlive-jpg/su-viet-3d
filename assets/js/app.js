(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const pad = (n) => String(n).padStart(2, "0");

  const slides = $$(".slide");
  const deck = $("#deck");
  const dotsWrap = $("#dots");
  const counter = $("#cur-num");
  const progress = $("#progress-fill");
  const modal = $("#modal");
  const modalImg = $("#m-img");
  const modalBadge = $("#m-badge");
  const modalKicker = $("#m-kicker");
  const modalTitle = $("#m-title");
  const modalPeriod = $("#m-period");
  const modalLead = $("#m-lead");
  const modalBody = $("#m-bodytext");
  const modalFacts = $("#m-facts");
  const modalQuote = $("#m-quote");
  const modalPrev = $("#m-prev");
  const modalNext = $("#m-next");
  const modalGoto = $("#m-goto");
  const modalClose = $("#m-close");
  const modalPanel = $(".modal-card");
  const overview = $("#overview");
  const ovGrid = $("#ov-grid");
  const ovClose = $(".ov-close");

  const labels = ["Mở đầu"].concat(ERAS.map((e) => e.label));
  const SLIDES = [{ title: "Mở đầu", years: "2879 TCN – 2026", img: "assets/img/drum.svg", label: "Hành trình" }].concat(
    ERAS.map((e) => ({ title: e.title, years: e.years, img: e.img, label: e.label }))
  );

  let idx = 0;
  let modalEra = 1;
  let lastFocus = null;
  let wheelLock = false;
  let lastOverviewFocus = null;

  const dotEls = slides.map((slide, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.dataset.label = labels[i] || slide.dataset.title || "Trang " + (i + 1);
    b.setAttribute("aria-label", labels[i] || "Trang " + (i + 1));
    b.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(b);
    return b;
  });

  function goTo(n, options) {
    const opts = options || {};
    n = Math.max(0, Math.min(slides.length - 1, Number(n) || 0));
    const prev = idx;

    if (prev !== n) {
      slides[prev].classList.add("is-leaving");
      window.setTimeout(() => slides[prev].classList.remove("is-leaving"), 900);
    }

    slides.forEach((slide, i) => {
      const on = i === n;
      slide.classList.toggle("is-active", on);
      slide.setAttribute("aria-hidden", on ? "false" : "true");
      if (on) slide.scrollTop = 0;
    });

    idx = n;
    dotEls.forEach((d, i) => {
      d.classList.toggle("on", i === n);
      d.setAttribute("aria-current", i === n ? "true" : "false");
    });
    counter.textContent = pad(n + 1);
    document.title = n === 0 ? "Sử Việt 3D — 4.000 năm trong 15 trang" : labels[n] + " · Sử Việt 3D";
    progress.style.width = ((n + 1) / slides.length) * 100 + "%";

    const accent = n === 0 ? "#e2b45f" : (ERAS[n - 1] && ERAS[n - 1].accent) || "#e2b45f";
    document.documentElement.style.setProperty("--accent", accent);

    if (opts.push !== false) {
      try {
        history.replaceState(null, "", "#/" + (n + 1));
      } catch (err) {
        location.hash = "#/" + (n + 1);
      }
    }
  }

  function closeModal() {
    if (!modal.classList.contains("open")) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    const active = slides[idx];
    let target = lastFocus;
    if (!target || !active.contains(target)) {
      target = active.querySelector(".artifact") || active.querySelector(".era-cta .btn") || active.querySelector(".cover-cta .btn");
    }
    if (target && typeof target.focus === "function") {
      try { target.focus({ preventScroll: true }); } catch (err) { target.focus(); }
    }
  }

  function trapTab(e, container) {
    const items = Array.from(container.querySelectorAll("a[href],button:not([disabled]),[tabindex]:not([tabindex='-1'])"))
      .filter((el) => el.offsetParent !== null && !el.hasAttribute("hidden"));
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function renderEra(era) {
    modalImg.src = era.img;
    modalImg.alt = "Minh họa " + era.artifact;
    if (modalImg.animate) {
      modalImg.animate([{ opacity: 0.3 }, { opacity: 1 }], { duration: 360, easing: "ease" });
    }
    modalBadge.textContent = era.tag;
    modalKicker.textContent = "Hồ sơ " + pad(era.id) + " · " + era.label;
    modalTitle.textContent = era.title;
    modalPeriod.textContent = era.years;
    modalLead.textContent = era.lead;
    modalBody.innerHTML = era.body.map((p) => "<p>" + p + "</p>").join("");
    modalFacts.innerHTML = era.facts
      .map((f) => '<div class="m-fact"><b>' + f[0] + "</b><span>" + f[1] + "</span></div>")
      .join("");
    modalQuote.textContent = era.quote;
    modalPrev.disabled = era.id === 1;
    modalNext.disabled = era.id === ERAS.length;
    modalGoto.textContent = "Tới trang " + pad(era.slide + 1);
    const body = $(".m-body", modal);
    if (body) body.scrollTop = 0;
    modalEra = era.id;
  }

  function openEra(id) {
    const era = ERAS.find((e) => e.id === Number(id));
    if (!era) return;
    if (overview.classList.contains("open")) closeOverview();
    lastFocus = document.activeElement;
    renderEra(era);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    window.setTimeout(() => {
      try { modalClose.focus({ preventScroll: true }); } catch (err) { modalClose.focus(); }
    }, 60);
  }

  function stepModal(dir) {
    const target = ERAS.find((e) => e.id === modalEra + dir);
    if (!target) return;
    renderEra(target);
    goTo(target.slide);
  }

  function buildOverview() {
    ovGrid.innerHTML = "";
    SLIDES.forEach((s, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "ov-card";
      b.dataset.goto = String(i);
      b.setAttribute("aria-label", "Đi tới " + s.title);
      b.innerHTML =
        '<span class="ov-num">' + pad(i + 1) + "</span>" +
        '<img src="' + s.img + '" alt="" loading="lazy">' +
        '<span class="ov-meta"><em>' + s.years + "</em><b>" + s.title + "</b></span>";
      ovGrid.appendChild(b);
    });
  }

  function openOverview() {
    if (modal.classList.contains("open")) closeModal();
    lastOverviewFocus = document.activeElement;
    overview.classList.add("open");
    overview.setAttribute("aria-hidden", "false");
    window.setTimeout(() => {
      try { ovClose.focus({ preventScroll: true }); } catch (err) { ovClose.focus(); }
    }, 50);
  }

  function closeOverview() {
    if (!overview.classList.contains("open")) return;
    overview.classList.remove("open");
    overview.setAttribute("aria-hidden", "true");
    if (lastOverviewFocus && typeof lastOverviewFocus.focus === "function") {
      try { lastOverviewFocus.focus({ preventScroll: true }); } catch (err) { lastOverviewFocus.focus(); }
    }
  }

  document.addEventListener("click", (e) => {
    const goto = e.target.closest("[data-goto]");
    if (goto) {
      const n = Number(goto.dataset.goto);
      closeOverview();
      closeModal();
      goTo(n);
      return;
    }

    const eraTarget = e.target.closest("[data-era]");
    if (eraTarget) {
      openEra(eraTarget.dataset.era);
      return;
    }

    if (e.target.closest("[data-overview]")) {
      openOverview();
      return;
    }

    if (e.target.closest("[data-close]")) {
      closeModal();
      return;
    }

    if (e.target.closest("[data-close-overview]")) {
      closeOverview();
    }
  });

  modalPrev.addEventListener("click", () => stepModal(-1));
  modalNext.addEventListener("click", () => stepModal(1));
  modalGoto.addEventListener("click", () => {
    goTo(modalEra);
    closeModal();
  });
  modalClose.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    const eraEl = e.target.closest ? e.target.closest("[data-era]") : null;
    if (eraEl && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      openEra(eraEl.dataset.era);
      return;
    }

    if (e.target.closest && e.target.closest("button") && (e.key === "Enter" || e.key === " ")) return;

    if (e.key === "Escape") {
      if (modal.classList.contains("open")) closeModal();
      else if (overview.classList.contains("open")) closeOverview();
      return;
    }

    if (e.key === "Tab" && modal.classList.contains("open")) { trapTab(e, modalPanel); return; }
    if (e.key === "Tab" && overview.classList.contains("open")) { trapTab(e, overview); return; }

    if (modal.classList.contains("open")) {
      if (e.key === "ArrowRight") { e.preventDefault(); stepModal(1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); stepModal(-1); }
      return;
    }

    if (overview.classList.contains("open")) {
      if (e.key.toLowerCase() === "o") { e.preventDefault(); closeOverview(); }
      return;
    }

    if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
      e.preventDefault();
      goTo(idx + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") {
      e.preventDefault();
      goTo(idx - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      goTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      goTo(slides.length - 1);
    } else if (e.key.toLowerCase() === "o") {
      e.preventDefault();
      openOverview();
    }
  });

  let touchX = 0;
  let touchY = 0;
  deck.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) return;
    touchX = e.touches[0].clientX;
    touchY = e.touches[0].clientY;
  }, { passive: true });

  deck.addEventListener("touchend", (e) => {
    if (modal.classList.contains("open") || overview.classList.contains("open")) return;
    const t = e.changedTouches[0];
    if (!t) return;
    const dx = t.clientX - touchX;
    const dy = t.clientY - touchY;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      goTo(idx + (dx < 0 ? 1 : -1));
    }
  }, { passive: true });

  deck.addEventListener("wheel", (e) => {
    if (modal.classList.contains("open") || overview.classList.contains("open")) return;
    if (Math.abs(e.deltaY) < 16) return;
    const slide = slides[idx];
    if (slide.scrollHeight > slide.clientHeight + 8) return;
    if (wheelLock) return;
    wheelLock = true;
    window.setTimeout(() => { wheelLock = false; }, 850);
    goTo(idx + (e.deltaY > 0 ? 1 : -1));
  }, { passive: true });

  $$("[data-parallax]").forEach((stage) => {
    stage.addEventListener("pointermove", (e) => {
      if (e.pointerType === "touch") return;
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      stage.style.setProperty("--ry", (x * 9).toFixed(2) + "deg");
      stage.style.setProperty("--rx", (-y * 7).toFixed(2) + "deg");
    });
    stage.addEventListener("pointerleave", () => {
      stage.style.setProperty("--ry", "0deg");
      stage.style.setProperty("--rx", "0deg");
    });
  });

  window.addEventListener("hashchange", () => {
    const m = location.hash.match(/#\/(\d+)/);
    if (m) goTo(Number(m[1]) - 1, { push: false });
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canvas = $("#dust");
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");
    let W = 0;
    let H = 0;
    let particles = [];
    const pointer = { x: 0, y: 0 };

    const colors = [
      "226,180,95",
      "247,217,158",
      "200,69,47",
      "105,165,139",
      "243,231,211"
    ];

    function resize() {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }

    function build() {
      const count = Math.max(34, Math.min(92, Math.floor((W * H) / 22000)));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          z: 0.2 + Math.random() * 0.8,
          r: 0.4 + Math.random() * 1.7,
          vx: (Math.random() - 0.5) * 0.16,
          vy: -0.05 - Math.random() * 0.22,
          c: colors[Math.floor(Math.random() * colors.length)],
          a: 0.16 + Math.random() * 0.45,
          tw: Math.random() * Math.PI * 2
        });
      }
    }

    let t = 0;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      t += 0.008;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx * p.z;
        p.y += p.vy * p.z;
        if (p.y < -20) { p.y = H + 20; p.x = Math.random() * W; }
        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;
        const px = p.x + pointer.x * 26 * p.z;
        const py = p.y + pointer.y * 18 * p.z;
        const alpha = p.a * (0.7 + 0.3 * Math.sin(t * 2 + p.tw));
        ctx.beginPath();
        ctx.arc(px, py, p.r * (0.7 + p.z * 0.6), 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + p.c + "," + alpha.toFixed(3) + ")";
        ctx.fill();
        if (p.r > 1.5) {
          ctx.beginPath();
          ctx.arc(px, py, p.r * 3.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(" + p.c + "," + (alpha * 0.08).toFixed(3) + ")";
          ctx.fill();
        }
      }
      if (!reduceMotion) window.requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", (e) => {
      pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    resize();
    if (!reduceMotion) window.requestAnimationFrame(draw);
    else draw();
  }

  buildOverview();

  const hash = location.hash.match(/#\/(\d+)/);
  goTo(hash ? Number(hash[1]) - 1 : 0, { push: false });
})();
