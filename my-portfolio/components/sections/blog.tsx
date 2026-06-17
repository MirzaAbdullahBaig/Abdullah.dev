import { blogPosts } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/section";
import { ArrowRight } from "@/components/ui/icons";

export function Blog() {
    return (
        <Section id="blog" num="08">
            <SectionHeading
                tag="// 08 — Writing"
                heading={
                    <>
                        Latest <span className="grad-text">articles</span>
                    </>
                }
                sub="Notes on engineering, performance, and building for the web."
            />
            <div className="blog-grid" data-reveal-group>
                {blogPosts.map((post) => (
                    <a href="#" className="glass glass-hover blog-card" key={post.title}>
                        <div className="blog-cover">
                            <div className={`mock mock-${post.mock}`}>
                                <div className={`mock-box mock-${post.accent}`} />
                            </div>
                        </div>
                        <div className="blog-body">
                            <div className="blog-meta">
                                {post.date}
                                <span className="dot-sep" />
                                {post.readTime}
                            </div>
                            <h3 className="blog-title">{post.title}</h3>
                            <p className="blog-excerpt">{post.excerpt}</p>
                            <span className="blog-more">
                                Read more <ArrowRight width={15} height={15} />
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </Section>
    );
}
