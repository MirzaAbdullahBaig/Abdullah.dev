import { experience } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/section";
import { RichText } from "@/components/ui/rich-text";

export function Experience() {
    return (
        <Section id="experience" num="04">
            <SectionHeading
                tag="// 04 — Experience"
                heading={
                    <>
                        Where I&apos;ve <span className="grad-text">worked</span>
                    </>
                }
            />
            <div className="timeline" data-reveal-group>
                {experience.map((job) => (
                    <div className="tl-item" key={job.company}>
                        <div className="glass glass-hover tl-card">
                            <div className="tl-top">
                                <div>
                                    <span className="tl-role">{job.role}</span> ·{" "}
                                    <span className="tl-co">{job.company}</span>
                                </div>
                                <span className="tl-date">{job.date}</span>
                            </div>
                            <p className="tl-desc">
                                <RichText text={job.desc} />
                            </p>
                            <div className="tag-row">
                                {job.tags.map((tag) => (
                                    <span className="tag" key={tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
