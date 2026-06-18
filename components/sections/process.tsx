import { processSteps } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/section";
import { Icon } from "@/components/ui/icons";

export function Process() {
    return (
        <Section id="process" num="06">
            <SectionHeading
                tag="// 06 — Process"
                heading={
                    <>
                        How I <span className="grad-text">work</span>
                    </>
                }
            />
            <div className="process-grid" data-reveal-group>
                {processSteps.map((step) => (
                    <div className="glass glass-hover proc-card" key={step.no}>
                        <div className="proc-no">{step.no}</div>
                        <div className="proc-ico">
                            <Icon name={step.icon} />
                        </div>
                        <h3 className="proc-title">{step.title}</h3>
                        <p className="proc-desc">{step.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
