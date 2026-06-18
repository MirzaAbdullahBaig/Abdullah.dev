import { testimonials } from "@/data/site";
import { SectionHeading } from "@/components/ui/section";
import { StarSolid } from "@/components/ui/icons";

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
    return (
        <div className="testi-track" aria-hidden={ariaHidden || undefined}>
            {testimonials.map((t) => (
                <div className="glass testi-card" key={t.name}>
                    <div className="stars">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <StarSolid key={i} />
                        ))}
                    </div>
                    <p className="testi-quote">&ldquo;{t.quote}&rdquo;</p>
                    <div className="testi-who">
                        <div className="testi-av">{t.initials}</div>
                        <div>
                            <div className="testi-name">{t.name}</div>
                            <div className="testi-role">{t.role}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export function Testimonials() {
    /* The marquee is intentionally full-bleed (outside .wrap), so this section
       is hand-composed rather than using the <Section> wrapper. */
    return (
        <section id="testimonials" data-num="07">
            <span className="sec-numeral" aria-hidden="true">
                07
            </span>
            <div className="wrap">
                <SectionHeading
                    tag="// 07 — Testimonials"
                    heading={
                        <>
                            What people <span className="grad-text">say</span>
                        </>
                    }
                />
            </div>
            <div className="testi-marquee reveal">
                <Track />
                <Track ariaHidden />
            </div>
        </section>
    );
}
