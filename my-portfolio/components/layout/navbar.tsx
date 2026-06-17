"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

import { navLinks } from "@/data/site";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Menu, Sun } from "@/components/ui/icons";

const THEME_KEY = "pf-theme";
const THEME_EVENT = "pf-theme-change";

/* Theme lives on <body> (applied pre-paint by the inline script in layout).
   useSyncExternalStore reads it without a setState-in-effect, and stays correct
   across SSR via the server snapshot. */
function subscribeTheme(onChange: () => void) {
    window.addEventListener(THEME_EVENT, onChange);
    return () => window.removeEventListener(THEME_EVENT, onChange);
}

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [activeId, setActiveId] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    const lastY = useRef(0);

    const isLight = useSyncExternalStore(
        subscribeTheme,
        () => document.body.classList.contains("light"),
        () => false,
    );

    /* Scroll-driven nav state: condensed background, hide-on-scroll-down,
       and scroll-spy for the active link. Mirrors the original app.js logic. */
    useEffect(() => {
        const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
        lastY.current = window.scrollY;

        const onScroll = () => {
            const y0 = window.scrollY;
            setScrolled(y0 > 30);

            /* Never hide the nav while the mobile menu is open. */
            if (!document.querySelector(".mobile-menu.open")) {
                if (y0 > lastY.current + 6 && y0 > 320) setHidden(true);
                else if (y0 < lastY.current - 4 || y0 < 320) setHidden(false);
            }
            lastY.current = y0;

            const y = y0 + window.innerHeight * 0.35;
            let cur = "";
            sections.forEach((s) => {
                if (s.offsetTop <= y) cur = s.id;
            });
            if (cur) setActiveId(cur);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggleTheme = useCallback(() => {
        const light = document.body.classList.toggle("light");
        try {
            localStorage.setItem(THEME_KEY, light ? "light" : "dark");
        } catch {
            /* ignore */
        }
        window.dispatchEvent(new Event(THEME_EVENT));
    }, []);

    const navClass = ["nav", scrolled && "scrolled", hidden && "nav-hidden"].filter(Boolean).join(" ");

    return (
        <>
            <nav className={navClass}>
                <div className="nav-inner">
                    <BrandLogo />
                    <div className="nav-links">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={activeId === link.href.slice(1) ? "active" : undefined}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="nav-right">
                        <button
                            className="icon-btn"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            aria-pressed={isLight}
                        >
                            <Sun />
                        </button>
                        <a href="#contact" className="btn btn-grad nav-cta" data-magnetic>
                            Connect me
                        </a>
                        <button
                            className="icon-btn hamburger"
                            aria-label="Menu"
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen((o) => !o)}
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
            </nav>

            <div className={menuOpen ? "mobile-menu open" : "mobile-menu"}>
                {navLinks.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                        {link.label}
                    </a>
                ))}
                <a href="#contact" className="btn btn-grad" onClick={() => setMenuOpen(false)}>
                    Connect me
                </a>
            </div>
        </>
    );
}
