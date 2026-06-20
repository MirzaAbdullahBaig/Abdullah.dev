import Link from "next/link";

/* 404 screen in the portfolio's own design language (no Tailwind / shadcn).
   The original dribbble GIF baked a white background into its raster pixels,
   which can't be keyed out on a dark canvas, so the "lost caveman" is
   recreated here as a transparent inline SVG in the site palette. */
function LostCaveman() {
    return (
        <svg className="nf-art-svg" viewBox="0 0 220 200" role="img" aria-label="A lost caveman">
            {/* ground + scenery */}
            <ellipse cx="110" cy="184" rx="74" ry="9" fill="#ffffff" opacity="0.05" />
            <g fill="var(--green)" opacity="0.65">
                <circle cx="34" cy="172" r="13" />
                <circle cx="50" cy="176" r="10" />
                <circle cx="22" cy="178" r="8" />
            </g>
            <path
                d="M176 184c-16 0-27-7-27-17 0-9 11-15 26-15s26 6 26 15c0 10-9 17-25 17z"
                fill="#ffffff"
                opacity="0.07"
            />

            {/* feet + legs */}
            <ellipse cx="100" cy="180" rx="9" ry="5" fill="#2A2622" />
            <ellipse cx="120" cy="180" rx="9" ry="5" fill="#2A2622" />
            <rect x="96" y="146" width="12" height="32" rx="6" fill="#E9B486" />
            <rect x="112" y="146" width="12" height="32" rx="6" fill="#E9B486" />

            {/* tunic */}
            <path
                d="M86 108h48a6 6 0 0 1 6 6l4 38a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4l4-38a6 6 0 0 1 6-6z"
                fill="var(--accent)"
            />
            <g fill="#000" opacity="0.16">
                <circle cx="98" cy="126" r="4" />
                <circle cx="124" cy="134" r="3.4" />
                <circle cx="110" cy="146" r="3" />
            </g>

            {/* arms */}
            <rect x="74" y="112" width="11" height="30" rx="5.5" fill="#E9B486" />
            <rect
                x="135"
                y="104"
                width="11"
                height="28"
                rx="5.5"
                fill="#E9B486"
                transform="rotate(24 140 118)"
            />

            {/* club resting on the shoulder */}
            <g transform="rotate(34 150 96)">
                <rect x="143" y="64" width="14" height="46" rx="7" fill="#8A5A2B" />
                <circle cx="150" cy="62" r="12" fill="#8A5A2B" />
                <circle cx="146" cy="58" r="2.4" fill="#000" opacity="0.15" />
                <circle cx="156" cy="66" r="2" fill="#000" opacity="0.15" />
            </g>

            {/* head, hair, beard, eyes */}
            <circle cx="110" cy="84" r="25" fill="#E9B486" />
            <path
                d="M85 82c0-20 14-30 25-30s25 10 25 30c-5-8-9-9-9-9s-2 5-7 5-6-6-11-6-6 6-11 6-5-2-12 4z"
                fill="#2A2622"
            />
            <path
                d="M88 88c2 22 12 30 22 30s20-8 22-30c-5 6-10 6-13 3-3 5-9 5-12 1-4 4-10 3-19-4z"
                fill="#2A2622"
            />
            <circle cx="103" cy="86" r="2.4" fill="#2A2622" />
            <circle cx="118" cy="86" r="2.4" fill="#2A2622" />
        </svg>
    );
}

export function NotFoundPage() {
    return (
        <section className="nf">
            <div className="nf-glow" aria-hidden="true" />

            <div className="nf-inner">
                <span className="nf-404 grad-text" aria-hidden="true">
                    404
                </span>

                <div className="nf-art">
                    <LostCaveman />
                </div>

                <h1 className="nf-title">
                    Looks like you&apos;re <span className="grad-text">lost</span>
                </h1>
                <p className="nf-text">The page you&apos;re looking for isn&apos;t available.</p>

                <div className="nf-actions">
                    <Link href="/" className="btn btn-grad" data-magnetic>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                            data-icon
                        >
                            <path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10" />
                        </svg>
                        Go to Home
                    </Link>
                </div>
            </div>
        </section>
    );
}
