import Image from "next/image";

import { about } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/section";
import { RichText } from "@/components/ui/rich-text";
import { Icon, Spotify } from "@/components/ui/icons";

export function About() {
    return (
        <Section id="about" num="01">
            <SectionHeading
                tag="// 01 — About"
                heading={
                    <>
                        A bit <span className="grad-text">about me</span>
                    </>
                }
            />
            <div className="bento" data-reveal-group>
                {/* Bio */}
                <div className="glass glass-hover bento-card b-bio">
                    <div className="bio-top">
                        <div className="bio-photo">
                            <Image src="/portrait.png" alt={about.bioName} fill sizes="92px" />
                        </div>
                        <div>
                            <div className="bio-name">{about.bioName}</div>
                            <div className="bio-role">{about.bioRole}</div>
                        </div>
                    </div>
                    <p className="bio-text">
                        <RichText text={about.bioText} />
                    </p>
                </div>

                {/* Currently building */}
                <div className="glass glass-hover bento-card b-building">
                    <div className="card-label">
                        <span className="dot-live" /> Currently building
                    </div>
                    <div className="build-row">
                        <div className="build-ico">
                            <Icon name="cube" />
                        </div>
                        <div>
                            <div className="build-name">{about.building.name}</div>
                            <div className="build-desc">{about.building.desc}</div>
                        </div>
                    </div>
                </div>

                {/* Location */}
                <div className="glass glass-hover bento-card b-loc">
                    <div className="card-label">📍 Based in</div>
                    <div className="globe">
                        <div className="globe-ring">
                            <div className="globe-pin" />
                        </div>
                    </div>
                    <div className="loc-name">Karachi, Pakistan</div>
                    <div className="loc-time" id="kclock">
                        — PKT
                    </div>
                </div>

                {/* Now playing */}
                <div className="glass glass-hover bento-card b-spotify">
                    <div className="card-label">Now playing</div>
                    <div className="sp-cover">
                        <Spotify />
                        <div className="sp-bars">
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                        </div>
                    </div>
                    <div className="sp-track">{about.nowPlaying.track}</div>
                    <div className="sp-artist">{about.nowPlaying.artist}</div>
                    <div className="sp-prog" />
                </div>

                {/* Years */}
                <div className="glass glass-hover bento-card b-years">
                    <div className="card-label">Experience</div>
                    <div className="years-num grad-text" style={{ marginTop: "auto" }}>
                        {about.yearsExperience}
                    </div>
                    <div className="build-desc">years shipping production code</div>
                </div>

                {/* Interests */}
                <div className="glass glass-hover bento-card b-interests">
                    <div className="card-label">Off the clock</div>
                    <div className="interests-list">
                        {about.interests.map((chip) => (
                            <span className="chip" key={chip}>
                                {chip}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
