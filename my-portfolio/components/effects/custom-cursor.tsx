"use client";

import { useEffect, useRef } from "react";

/* Dot + trailing ring cursor for fine-pointer desktops. The ring eases toward
   the pointer and swells over interactive targets. Hidden via CSS on touch /
   small screens, and skipped entirely when the user prefers reduced motion. */
const HOVER_TARGETS =
    "a, button, .glass-hover, .skill-tile, input, textarea, .social-circle, .contact-detail";

export function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isDesktop =
            window.matchMedia("(hover: hover) and (pointer: fine)").matches && window.innerWidth > 900;
        if (reduce || !isDesktop) return;

        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mx = window.innerWidth / 2;
        let my = window.innerHeight / 2;
        let rx = mx;
        let ry = my;
        let raf = 0;

        const onMove = (e: MouseEvent) => {
            mx = e.clientX;
            my = e.clientY;
            dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
        };
        const loop = () => {
            rx += (mx - rx) * 0.18;
            ry += (my - ry) * 0.18;
            ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
            raf = requestAnimationFrame(loop);
        };
        const onOver = (e: Event) => {
            if ((e.target as Element).closest(HOVER_TARGETS)) ring.classList.add("hover");
        };
        const onOut = (e: Event) => {
            if ((e.target as Element).closest(HOVER_TARGETS)) ring.classList.remove("hover");
        };

        window.addEventListener("mousemove", onMove);
        document.addEventListener("mouseover", onOver);
        document.addEventListener("mouseout", onOut);
        raf = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseover", onOver);
            document.removeEventListener("mouseout", onOut);
        };
    }, []);

    return (
        <>
            <div className="cursor-dot" ref={dotRef} />
            <div className="cursor-ring" ref={ringRef} />
        </>
    );
}
