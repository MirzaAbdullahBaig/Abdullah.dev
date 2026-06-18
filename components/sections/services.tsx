import { services } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/section";
import { Icon } from "@/components/ui/icons";

export function Services() {
    return (
        <Section id="services" num="02">
            <SectionHeading
                tag="// 02 — Services"
                heading={
                    <>
                        What I can <span className="grad-text">do for you</span>
                    </>
                }
                sub="End-to-end product engineering — from the first wireframe to the final deploy pipeline."
            />
            <div className="services-grid" data-reveal-group>
                {services.map((service, i) => (
                    <div className="glass glass-hover svc-card" key={service.title}>
                        <div className="svc-ico glow">
                            <Icon name={service.icon} />
                        </div>
                        <h3 className="svc-title">{service.title}</h3>
                        <p className="svc-desc">{service.desc}</p>
                        <div className="svc-no">/ 0{i + 1}</div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
