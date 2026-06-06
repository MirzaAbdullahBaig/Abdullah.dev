/* ============================================================
   Portfolio interactions
   ============================================================ */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches && window.innerWidth > 900;

  /* ---------- Hero headline safety net (force-visible after load) ---------- */
  const heroH1 = $(".hero-h1");
  if (heroH1) setTimeout(() => heroH1.classList.add("revealed"), 1350);

  /* ---------- NAV: scrolled state + active link ---------- */
  const nav = $(".nav");
  const sections = $$("section[id]");
  const navLinks = $$(".nav-links a");
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 30);
    let cur = "";
    const y = window.scrollY + window.innerHeight * 0.35;
    sections.forEach((s) => { if (s.offsetTop <= y) cur = s.id; });
    navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const burger = $(".hamburger");
  const menu = $(".mobile-menu");
  if (burger) {
    burger.addEventListener("click", () => menu.classList.toggle("open"));
    $$(".mobile-menu a").forEach((a) => a.addEventListener("click", () => menu.classList.remove("open")));
  }

  /* ---------- Theme toggle ---------- */
  const themeBtn = $("#themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      localStorage.setItem("pf-theme", document.body.classList.contains("light") ? "light" : "dark");
    });
    if (localStorage.getItem("pf-theme") === "light") document.body.classList.add("light");
  }

  /* ---------- Smooth scroll for in-page anchors ---------- */
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const t = $(id);
      if (!t) return;
      e.preventDefault();
      const top = t.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    });
  });

  /* ---------- Custom cursor ---------- */
  if (isDesktop && !reduce) {
    const dot = $(".cursor-dot"), ring = $(".cursor-ring");
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
    });
    (function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    const hov = 'a, button, .glass-hover, .skill-tile, input, textarea, .social-circle, .contact-detail';
    document.addEventListener("mouseover", (e) => { if (e.target.closest(hov)) ring.classList.add("hover"); });
    document.addEventListener("mouseout", (e) => { if (e.target.closest(hov)) ring.classList.remove("hover"); });
  }

  /* ---------- Magnetic buttons ---------- */
  if (isDesktop && !reduce) {
    $$("[data-magnetic]").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }

  /* ---------- Scroll reveals (staggered) ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        const el = en.target;
        const delay = parseInt(el.dataset.delay || "0", 10);
        setTimeout(() => el.classList.add("in"), delay);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  $$("[data-reveal-group]").forEach((group) => {
    [...group.children].forEach((child, i) => {
      child.classList.add("reveal");
      child.dataset.delay = i * 80;
      io.observe(child);
    });
  });
  $$(".reveal:not([data-delay])").forEach((el) => io.observe(el));

  /* ---------- Count-up ---------- */
  const counters = $$("[data-count]");
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const dur = 1600;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * e) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      cio.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => cio.observe(c));

  /* ---------- Seamless marquees (duplicate track) ---------- */
  ["#mtrack", "#testiTrack"].forEach((sel) => {
    const track = $(sel);
    if (!track) return;
    const clone = track.cloneNode(true);
    clone.removeAttribute("id");
    clone.setAttribute("aria-hidden", "true");
    track.parentElement.appendChild(clone);
  });

  /* ---------- Karachi clock ---------- */
  const clock = $("#kclock");
  if (clock) {
    function upd() {
      const t = new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Karachi", hour: "2-digit", minute: "2-digit", hour12: true });
      clock.textContent = t + " PKT";
    }
    upd(); setInterval(upd, 30000);
  }

  /* ---------- GitHub heatmap ---------- */
  const heat = $("#heatmap");
  if (heat) {
    const weeks = 52, days = 7;
    for (let w = 0; w < weeks; w++) {
      for (let d = 0; d < days; d++) {
        const cell = document.createElement("div");
        cell.className = "hm-cell";
        const r = Math.random();
        let lvl = 0;
        if (r > 0.55) lvl = 1;
        if (r > 0.72) lvl = 2;
        if (r > 0.86) lvl = 3;
        if (r > 0.94) lvl = 4;
        // recent weeks denser (streak feel)
        if (w > 46 && Math.random() > 0.35) lvl = Math.max(lvl, 2 + Math.floor(Math.random() * 3));
        if (lvl) cell.classList.add("hm-" + lvl);
        cell.style.transitionDelay = (w * 6 + d * 2) + "ms";
        heat.appendChild(cell);
      }
    }
  }

  /* ---------- Email copy ---------- */
  $$("[data-copy]").forEach((el) => {
    el.addEventListener("click", () => {
      const val = el.dataset.copy;
      navigator.clipboard && navigator.clipboard.writeText(val);
      const badge = el.querySelector(".cd-copy");
      if (badge) { badge.classList.add("show"); setTimeout(() => badge.classList.remove("show"), 1600); }
    });
  });

  /* ---------- Contact form (demo) ---------- */
  const form = $("#contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector("button[type=submit]");
      const orig = btn.innerHTML;
      btn.innerHTML = "Sent ✓";
      btn.style.opacity = "0.85";
      setTimeout(() => { btn.innerHTML = orig; btn.style.opacity = ""; form.reset(); }, 2200);
    });
  }
  const news = $("#newsForm");
  if (news) news.addEventListener("submit", (e) => {
    e.preventDefault();
    const i = news.querySelector("input");
    i.value = ""; i.placeholder = "Subscribed ✓";
    setTimeout(() => (i.placeholder = "you@email.com"), 2200);
  });
})();
