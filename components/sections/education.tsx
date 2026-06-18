import { education, certifications } from "@/data/site";
import type { Credential } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/section";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";

function CredentialItem({ item, badge }: { item: Credential; badge: IconName }) {
    return (
        <div className="glass glass-hover edu-item">
            <div className="edu-badge">
                <Icon name={badge} />
            </div>
            <div className="edu-info">
                <div className="ei-title">{item.title}</div>
                <div className="ei-sub">{item.sub}</div>
                <div className="ei-date">{item.date}</div>
            </div>
        </div>
    );
}

export function Education() {
    return (
        <Section id="education">
            <SectionHeading
                tag="// Credentials"
                heading={
                    <>
                        Education &amp; <span className="grad-text">certifications</span>
                    </>
                }
            />
            <div className="edu-grid">
                <div className="edu-col reveal">
                    <h3>
                        <Icon name="cap" /> Education
                    </h3>
                    {education.map((item) => (
                        <CredentialItem key={item.title} item={item} badge="capBadge" />
                    ))}
                </div>
                <div className="edu-col reveal">
                    <h3>
                        <Icon name="award" /> Certifications
                    </h3>
                    {certifications.map((item) => (
                        <CredentialItem key={item.title} item={item} badge="award" />
                    ))}
                </div>
            </div>
        </Section>
    );
}
