/* Fixed atmospheric layers behind all content: drifting accent auroras,
   a faint grid, and an SVG film-grain overlay. Pure markup — no client JS. */
export function Background() {
    return (
        <>
            <div className="bg-layer">
                <div className="aurora a1" />
                <div className="aurora a2" />
                <div className="aurora a3" />
                <div className="aurora a4" />
                <div className="aurora a5" />
            </div>
            <div className="grid-overlay" />
            <svg className="grain-overlay" xmlns="http://www.w3.org/2000/svg">
                <filter id="grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#grain)" />
            </svg>
        </>
    );
}
