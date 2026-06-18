import { featuredProjects, gridProjects } from "@/data/site";
import type { FeaturedProject } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/section";
import { ArrowRight, ExternalArrow, SocialIcon } from "@/components/ui/icons";

/* Abstract browser mock-ups behind each featured project. */
function FeaturedMock({ variant }: { variant: FeaturedProject["mock"] }) {
    if (variant === "a") {
        return (
            <div className="mock mock-a">
                <div className="mock-row">
                    <div className="mock-box mock-grad" style={{ height: 46, maxWidth: 120 }} />
                    <div style={{ flex: 1 }} />
                    <div className="mock-pill" style={{ width: 60 }} />
                </div>
                <div className="mock-row" style={{ flex: 1 }}>
                    <div className="mock-box" style={{ maxWidth: 120 }} />
                    <div className="mock-box mock-chart">
                        <i style={{ height: "40%" }} />
                        <i style={{ height: "70%" }} />
                        <i style={{ height: "50%" }} />
                        <i style={{ height: "90%" }} />
                        <i style={{ height: "65%" }} />
                        <i style={{ height: "80%" }} />
                    </div>
                </div>
                <div className="mock-row">
                    <div className="mock-box" style={{ height: 40 }} />
                    <div className="mock-box mock-cyan" style={{ height: 40, maxWidth: 90 }} />
                </div>
            </div>
        );
    }
    return (
        <div className="mock mock-b">
            <div className="mock-row">
                <div className="mock-pill" style={{ width: 90, height: 14 }} />
                <div style={{ flex: 1 }} />
                <div className="mock-box mock-cyan" style={{ height: 30, maxWidth: 70 }} />
            </div>
            <div className="mock-row" style={{ flex: 1 }}>
                <div className="mock-box mock-grad" style={{ opacity: 0.45 }} />
                <div className="mock-box" />
            </div>
            <div className="mock-row">
                <div className="mock-box" style={{ height: 50 }} />
            </div>
        </div>
    );
}

export function Projects() {
    return (
        <Section id="projects" num="05">
            <SectionHeading
                tag="// 05 — Projects"
                heading={
                    <>
                        Featured <span className="grad-text">projects</span>
                    </>
                }
                sub="A few products I'm proud to have designed and engineered end-to-end."
            />

            {featuredProjects.map((project) => (
                <div className="feat-row reveal" key={project.title}>
                    <div className="feat-media">
                        <div className="glow-blob" />
                        <div className="glass browser-frame">
                            <div className="bf-bar">
                                <span className="cw-dot r" />
                                <span className="cw-dot y" />
                                <span className="cw-dot g" />
                                <span className="bf-url">{project.browserUrl}</span>
                            </div>
                            <div className="bf-screen">
                                <FeaturedMock variant={project.mock} />
                            </div>
                        </div>
                    </div>
                    <div className="feat-info">
                        <div className="proj-no">{project.no}</div>
                        <h3>{project.title}</h3>
                        <p className="feat-tagline">{project.tagline}</p>
                        <p className="feat-desc">{project.desc}</p>
                        <div className="feat-tags">
                            {project.tags.map((tag) => (
                                <span className="tag" key={tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="feat-links">
                            <a href={project.liveUrl} className="link-btn">
                                Live Demo <ExternalArrow width={15} height={15} />
                            </a>
                            <a href={project.repoUrl} className="link-btn ghost">
                                GitHub <SocialIcon name="github" width={15} height={15} />
                            </a>
                        </div>
                    </div>
                </div>
            ))}

            <div className="proj-grid" data-reveal-group>
                {gridProjects.map((project) => (
                    <div className="glass glass-hover proj-card" key={project.title}>
                        <div className="proj-thumb">
                            <div className={`mock mock-${project.mock}`}>
                                <div
                                    className={`mock-box mock-${project.accent}`}
                                    style={{ opacity: project.thumbOpacity }}
                                />
                            </div>
                        </div>
                        <div className="pc-body">
                            <div className="pc-title">
                                {project.title}
                                <span className="pc-links">
                                    <a href={project.repoUrl} aria-label={`${project.title} on GitHub`}>
                                        <SocialIcon name="github" />
                                    </a>
                                    <a href={project.liveUrl} aria-label={`${project.title} live demo`}>
                                        <ExternalArrow />
                                    </a>
                                </span>
                            </div>
                            <p className="pc-desc">{project.desc}</p>
                            <div className="pc-tags">
                                {project.tags.map((tag) => (
                                    <span className="tag" key={tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="view-all">
                <a href="#" className="btn btn-ghost" data-magnetic>
                    View all projects <ArrowRight width={16} height={16} />
                </a>
            </div>
        </Section>
    );
}
