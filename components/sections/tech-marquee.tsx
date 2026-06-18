import { marqueeTech } from "@/data/site";

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
    return (
        <div className="marquee-track" aria-hidden={ariaHidden || undefined}>
            {marqueeTech.map((tech) => (
                <span className="marquee-item" key={tech.label}>
                    <i className={tech.icon} /> {tech.label}
                </span>
            ))}
        </div>
    );
}

export function TechMarquee() {
    return (
        <div className="marquee-band">
            <p className="marquee-label">Trusted by teams &amp; products I&apos;ve shipped with</p>
            {/* Two identical tracks create the seamless loop the CSS animates. */}
            <div className="marquee">
                <Track />
                <Track ariaHidden />
            </div>
        </div>
    );
}
