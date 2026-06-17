"use client";

import { useEffect } from "react";

/* ============================================================
   Single imperative "interactions" island — a faithful port of
   the original js/app.js IIFE. Keeping all cross-cutting DOM
   behaviour here lets every section stay a clean, declarative
   (mostly server) component. Each block registers its own
   listeners and is torn down on unmount.

   Note: nav scroll/active/hide and the mobile menu live in the
   Navbar client component; marquee duplication is rendered in
   JSX, so neither is handled here.
   ============================================================ */
const BOOT_TEXT = "whoami";

export function Interactions() {
    useEffect(() => {
        const cleanups: Array<() => void> = [];
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isDesktop =
            window.matchMedia("(hover: hover) and (pointer: fine)").matches && window.innerWidth > 900;

        const $ = <T extends Element>(sel: string) => document.querySelector<T>(sel);
        const $$ = <T extends Element>(sel: string) => Array.from(document.querySelectorAll<T>(sel));

        /* ---------- Hero boot sequence ---------- */
        const bootCmd = $<HTMLElement>("#bootCmd");
        if (reduce || !bootCmd) {
            if (bootCmd) bootCmd.textContent = BOOT_TEXT;
            document.body.classList.add("booted");
        } else {
            let bi = 0;
            const type = () => {
                bootCmd.textContent = BOOT_TEXT.slice(0, ++bi);
                if (bi < BOOT_TEXT.length) window.setTimeout(type, 55 + Math.random() * 55);
                else window.setTimeout(() => document.body.classList.add("booted"), 180);
            };
            window.setTimeout(type, 320);
        }
        /* Safety net: force-visible even if the sequence stalls. */
        const heroH1 = $<HTMLElement>(".hero-h1");
        const safety = window.setTimeout(() => {
            document.body.classList.add("booted");
            heroH1?.classList.add("revealed");
        }, 2600);
        cleanups.push(() => window.clearTimeout(safety));

        /* ---------- Smooth scroll for in-page anchors ---------- */
        const onAnchorClick = (e: MouseEvent) => {
            const anchor = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
            if (!anchor) return;
            const id = anchor.getAttribute("href") || "";
            if (id.length < 2) return;
            const target = $<HTMLElement>(id);
            if (!target) return;
            e.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
        };
        document.addEventListener("click", onAnchorClick);
        cleanups.push(() => document.removeEventListener("click", onAnchorClick));

        /* ---------- Magnetic buttons ---------- */
        if (isDesktop && !reduce) {
            $$<HTMLElement>("[data-magnetic]").forEach((el) => {
                const move = (e: MouseEvent) => {
                    const r = el.getBoundingClientRect();
                    const x = e.clientX - r.left - r.width / 2;
                    const y = e.clientY - r.top - r.height / 2;
                    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
                };
                const leave = () => (el.style.transform = "");
                el.addEventListener("mousemove", move);
                el.addEventListener("mouseleave", leave);
                cleanups.push(() => {
                    el.removeEventListener("mousemove", move);
                    el.removeEventListener("mouseleave", leave);
                });
            });
        }

        /* ---------- Scroll reveals (staggered) ---------- */
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((en) => {
                    if (!en.isIntersecting) return;
                    const el = en.target as HTMLElement;
                    const delay = parseInt(el.dataset.delay || "0", 10);
                    window.setTimeout(() => el.classList.add("in"), delay);
                    io.unobserve(el);
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
        );
        $$<HTMLElement>("[data-reveal-group]").forEach((group) => {
            Array.from(group.children).forEach((child, i) => {
                const el = child as HTMLElement;
                el.classList.add("reveal");
                el.dataset.delay = String(i * 80);
                io.observe(el);
            });
        });
        $$<HTMLElement>(".reveal:not([data-delay])").forEach((el) => io.observe(el));
        cleanups.push(() => io.disconnect());

        /* ---------- Count-up ---------- */
        const cio = new IntersectionObserver(
            (entries) => {
                entries.forEach((en) => {
                    if (!en.isIntersecting) return;
                    const el = en.target as HTMLElement;
                    const target = parseFloat(el.dataset.count || "0");
                    const suffix = el.dataset.suffix || "";
                    const dur = 1600;
                    const start = performance.now();
                    const tick = (now: number) => {
                        const p = Math.min((now - start) / dur, 1);
                        const eased = 1 - Math.pow(1 - p, 3);
                        el.textContent = Math.round(target * eased) + suffix;
                        if (p < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                    cio.unobserve(el);
                });
            },
            { threshold: 0.5 },
        );
        $$<HTMLElement>("[data-count]").forEach((c) => cio.observe(c));
        cleanups.push(() => cio.disconnect());

        /* ---------- Karachi clock ---------- */
        const clock = $<HTMLElement>("#kclock");
        if (clock) {
            const upd = () => {
                const t = new Date().toLocaleTimeString("en-US", {
                    timeZone: "Asia/Karachi",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                });
                clock.textContent = `${t} PKT`;
            };
            upd();
            const id = window.setInterval(upd, 30000);
            cleanups.push(() => window.clearInterval(id));
        }

        /* ---------- GitHub heatmap ---------- */
        const heat = $<HTMLElement>("#heatmap");
        if (heat && !heat.childElementCount) {
            const weeks = 52;
            const days = 7;
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
                    if (w > 46 && Math.random() > 0.35) lvl = Math.max(lvl, 2 + Math.floor(Math.random() * 3));
                    if (lvl) cell.classList.add(`hm-${lvl}`);
                    cell.style.transitionDelay = `${w * 6 + d * 2}ms`;
                    heat.appendChild(cell);
                }
            }
        }

        /* ---------- Editorial scroll fx: timeline draw + numeral parallax + watermark ---------- */
        const tl = $<HTMLElement>(".timeline");
        const tlItems = $$<HTMLElement>(".tl-item");
        const numerals = $$<HTMLElement>("section[data-num]")
            .map((sec) => ({ sec, n: sec.querySelector<HTMLElement>(".sec-numeral") }))
            .filter((x): x is { sec: HTMLElement; n: HTMLElement } => !!x.n);
        const watermark = $<HTMLElement>(".foot-watermark");

        if (!reduce) {
            let fxTick = false;
            const fx = () => {
                fxTick = false;
                const vh = window.innerHeight;
                if (tl) {
                    const r = tl.getBoundingClientRect();
                    const p = Math.min(1, Math.max(0, (vh * 0.72 - r.top) / r.height));
                    tl.style.setProperty("--tlp", p.toFixed(4));
                    tlItems.forEach((it) =>
                        it.classList.toggle("lit", it.getBoundingClientRect().top + 30 < vh * 0.72),
                    );
                }
                for (const { sec, n } of numerals) {
                    const r = sec.getBoundingClientRect();
                    if (r.bottom < -100 || r.top > vh + 100) continue;
                    const p = (vh - r.top) / (vh + r.height);
                    n.style.transform = `translateY(${((p - 0.5) * -64).toFixed(1)}px)`;
                }
                if (watermark && watermark.getBoundingClientRect().top < vh * 0.92) watermark.classList.add("in");
            };
            const onScroll = () => {
                if (!fxTick) {
                    fxTick = true;
                    requestAnimationFrame(fx);
                }
            };
            window.addEventListener("scroll", onScroll, { passive: true });
            fx();
            cleanups.push(() => window.removeEventListener("scroll", onScroll));
        } else {
            tl?.style.setProperty("--tlp", "1");
            tlItems.forEach((it) => it.classList.add("lit"));
            watermark?.classList.add("in");
        }

        /* ---------- Copy-to-clipboard (contact details) ---------- */
        $$<HTMLElement>("[data-copy]").forEach((el) => {
            const onClick = () => {
                const val = el.dataset.copy || "";
                navigator.clipboard?.writeText(val);
                const badge = el.querySelector(".cd-copy");
                if (badge) {
                    badge.classList.add("show");
                    window.setTimeout(() => badge.classList.remove("show"), 1600);
                }
            };
            el.addEventListener("click", onClick);
            cleanups.push(() => el.removeEventListener("click", onClick));
        });

        /* ---------- Contact + newsletter form demos ---------- */
        const form = $<HTMLFormElement>("#contactForm");
        if (form) {
            const onSubmit = (e: SubmitEvent) => {
                e.preventDefault();
                const btn = form.querySelector<HTMLButtonElement>("button[type=submit]");
                if (!btn) return;
                const orig = btn.innerHTML;
                btn.innerHTML = "Sent ✓";
                btn.style.opacity = "0.85";
                window.setTimeout(() => {
                    btn.innerHTML = orig;
                    btn.style.opacity = "";
                    form.reset();
                }, 2200);
            };
            form.addEventListener("submit", onSubmit);
            cleanups.push(() => form.removeEventListener("submit", onSubmit));
        }
        const news = $<HTMLFormElement>("#newsForm");
        if (news) {
            const onSubmit = (e: SubmitEvent) => {
                e.preventDefault();
                const input = news.querySelector("input");
                if (!input) return;
                input.value = "";
                input.placeholder = "Subscribed ✓";
                window.setTimeout(() => (input.placeholder = "you@email.com"), 2200);
            };
            news.addEventListener("submit", onSubmit);
            cleanups.push(() => news.removeEventListener("submit", onSubmit));
        }

        return () => cleanups.forEach((fn) => fn());
    }, []);

    return null;
}
