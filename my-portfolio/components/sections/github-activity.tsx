import { github } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/section";
import { SocialIcon, StarLine, BoltLine } from "@/components/ui/icons";

export function GitHubActivity() {
    return (
        <Section id="github">
            <SectionHeading
                tag="// GitHub"
                heading={
                    <>
                        Always <span className="grad-text">building</span>
                    </>
                }
            />
            <div className="gh-wrap" data-reveal-group>
                <div className="glass gh-card">
                    <div className="gh-head">
                        <div className="gh-user">
                            <SocialIcon name="github" /> {github.user}
                        </div>
                        <span className="gh-contrib-note">
                            <b style={{ color: "var(--text)" }}>{github.contributions}</b> contributions this year
                        </span>
                    </div>
                    {/* Cells are generated client-side (random levels) to avoid hydration drift. */}
                    <div className="heatmap" id="heatmap" />
                    <div className="gh-legend">
                        Less
                        <i style={{ background: "rgba(255,255,255,0.05)" }} />
                        <i className="hm-1" />
                        <i className="hm-2" />
                        <i className="hm-3" />
                        <i className="hm-4" /> More
                    </div>
                </div>

                <div className="glass gh-card gh-stats">
                    <div className="gh-stat">
                        <div className="gh-stat-ico">
                            <StarLine />
                        </div>
                        <div>
                            <b>{github.stars}</b>
                            <span>Total stars earned</span>
                        </div>
                    </div>
                    <div className="gh-stat">
                        <div className="gh-stat-ico">
                            <BoltLine />
                        </div>
                        <div>
                            <b>{github.streak}</b>
                            <span>Current streak 🔥</span>
                        </div>
                    </div>
                    <div className="lang-bars">
                        {github.languages.map((lang) => (
                            <div className="lang-row" key={lang.name}>
                                <span className="ln-name">{lang.name}</span>
                                <span className="lang-track">
                                    <span className="lang-fill" style={{ width: `${lang.pct}%` }} />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
