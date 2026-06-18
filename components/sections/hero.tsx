import Image from "next/image";

import { hero, heroCode, siteConfig } from "@/data/site";
import { SocialLinks } from "@/components/ui/social-links";
import { ArrowRight, Download } from "@/components/ui/icons";

const WORD_DELAYS = ["0.05s", "0.18s", "0.31s"];

/* The floating "developer.ts" code window — syntax-token markup kept verbatim
   so the per-line cascade reveal (editorial.css :nth-child rules) lines up. */
function CodeWindow() {
    return (
        <div className="code-window glass">
            <div className="glow-blob" />
            <div className="cw-bar">
                <span className="cw-dot r" />
                <span className="cw-dot y" />
                <span className="cw-dot g" />
                <span className="cw-title">{heroCode.file}</span>
            </div>
            <div className="cw-body">
                <div className="ln">
                    <span className="tok-key">const</span> <span className="tok-var">developer</span>{" "}
                    <span className="tok-punc">=</span> <span className="tok-punc">{"{"}</span>
                </div>
                <div className="ln">
                    {"  "}
                    <span className="tok-prop">name</span>
                    <span className="tok-punc">:</span> <span className="tok-str">&apos;{heroCode.name}&apos;</span>
                    <span className="tok-punc">,</span>
                </div>
                <div className="ln">
                    {"  "}
                    <span className="tok-prop">role</span>
                    <span className="tok-punc">:</span>{" "}
                    <span className="tok-str">&apos;{heroCode.roleValue}&apos;</span>
                    <span className="tok-punc">,</span>
                </div>
                <div className="ln">
                    {"  "}
                    <span className="tok-prop">stack</span>
                    <span className="tok-punc">:</span> <span className="tok-punc">[</span>
                    {heroCode.stack.map((tech, i) => (
                        <span key={tech}>
                            <span className="tok-str">&apos;{tech}&apos;</span>
                            {i < heroCode.stack.length - 1 && <span className="tok-punc">, </span>}
                        </span>
                    ))}
                    <span className="tok-punc">]</span>
                    <span className="tok-punc">,</span>
                </div>
                <div className="ln">
                    {"  "}
                    <span className="tok-prop">based</span>
                    <span className="tok-punc">:</span> <span className="tok-str">&apos;{heroCode.based}&apos;</span>
                    <span className="tok-punc">,</span>
                </div>
                <div className="ln">
                    {"  "}
                    <span className="tok-fn">ship</span>
                    <span className="tok-punc">()</span> <span className="tok-punc">{"{"}</span>
                </div>
                <div className="ln">
                    {"    "}
                    <span className="tok-key">return</span> <span className="tok-str">&apos;fast &amp; scalable&apos;</span>
                    <span className="tok-punc">;</span>
                </div>
                <div className="ln">
                    {"  "}
                    <span className="tok-punc">{"}"}</span>
                    <span className="tok-punc">,</span>
                </div>
                <div className="ln">
                    {"  "}
                    <span className="tok-prop">openToWork</span>
                    <span className="tok-punc">:</span> <span className="tok-num">true</span>
                    <span className="cw-caret" />
                </div>
                <div className="ln">
                    <span className="tok-punc">{"}"}</span>
                </div>
            </div>
        </div>
    );
}

export function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-glow" />
            <div className="hero-glow r" />
            <div className="wrap">
                <div className="hero-grid">
                    <div className="hero-left">
                        <span className="pill">
                            <span className="dot-live" /> {hero.pill}
                        </span>
                        <p className="boot-line" aria-hidden="true">
                            <span className="bl-prompt">$</span>&nbsp;<span id="bootCmd" />
                            <span className="bl-caret" />
                        </p>
                        <p className="hero-greet">{hero.greeting}</p>
                        <h1 className="hero-h1">
                            {hero.headline.map((word, i) => (
                                <span className="line" key={word}>
                                    <span
                                        className={i === hero.headlineAccentIndex ? "word grad-text" : "word"}
                                        style={{ animationDelay: WORD_DELAYS[i] }}
                                    >
                                        {word}
                                    </span>
                                </span>
                            ))}
                        </h1>
                        <p className="hero-sub">{hero.subtitle}</p>
                        <div className="hero-actions">
                            <a href="#projects" className="btn btn-grad" data-magnetic>
                                View Projects <ArrowRight width={16} height={16} />
                            </a>
                            <a href={hero.cvUrl} className="btn btn-ghost" data-magnetic>
                                Download CV <Download width={16} height={16} />
                            </a>
                        </div>
                        <SocialLinks />
                    </div>

                    <div className="hero-right">
                        <div className="hero-showcase">
                            <div className="orb-glow" />
                            <div className="portrait-orb">
                                <div className="orb-ring" />
                                <div className="orb-img">
                                    <Image
                                        src="/portrait.png"
                                        alt={siteConfig.name}
                                        fill
                                        sizes="(max-width: 460px) 240px, 272px"
                                        priority
                                    />
                                </div>
                            </div>
                            <CodeWindow />
                        </div>
                    </div>
                </div>
            </div>
            <a href="#about" className="scroll-ind">
                <div className="mouse">
                    <span />
                </div>
                SCROLL
            </a>
        </section>
    );
}
