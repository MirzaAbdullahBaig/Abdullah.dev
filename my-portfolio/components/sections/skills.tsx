import { skills } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/section";

export function Skills() {
    return (
        <Section id="skills" num="03">
            <SectionHeading
                tag="// 03 — Skills"
                heading={
                    <>
                        My <span className="grad-text">tech stack</span>
                    </>
                }
                sub="The tools I reach for to design, build, and ship resilient software."
            />
            <div className="skills-cats" data-reveal-group>
                {skills.map((cat) => (
                    <div
                        className={cat.wide ? "glass glass-hover skill-cat wide" : "glass glass-hover skill-cat"}
                        key={cat.name}
                    >
                        <div className="cat-name">
                            {cat.name} <span>{cat.note}</span>
                        </div>
                        <div className="skill-tiles">
                            {cat.tiles.map((tile) => (
                                <span className="skill-tile" key={tile.label}>
                                    <i className={tile.icon} /> {tile.label}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
