import { footer, socials } from "@/data/site";
import { BrandLogo } from "@/components/ui/brand-logo";
import { SocialLinks } from "@/components/ui/social-links";
import { ArrowUp } from "@/components/ui/icons";

/* Source footer shows GitHub / LinkedIn / X only — no Email envelope. */
const footerSocials = socials.filter((s) => s.name !== "email");

export function Footer() {
    return (
        <footer className="footer">
            <div className="wrap">
                <div className="glass footer-card">
                    <div className="footer-top">
                        <div className="foot-brand">
                            <BrandLogo />
                            <p className="foot-tag">{footer.tagline}</p>
                            <SocialLinks links={footerSocials} />
                        </div>

                        <div className="foot-col">
                            <h4>Navigate</h4>
                            {footer.navigate.map((link) => (
                                <a key={link.href + link.label} href={link.href}>
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        <div className="foot-col">
                            <h4>Services</h4>
                            {footer.servicesLinks.map((link) => (
                                <a key={link.label} href={link.href}>
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        <div className="foot-col">
                            <h4>Newsletter</h4>
                            <p className="foot-tag" style={{ marginTop: 0 }}>
                                {footer.newsletterNote}
                            </p>
                            <form className="news-input" id="newsForm">
                                <input type="email" placeholder="you@email.com" aria-label="Email address" />
                                <button className="news-btn" type="submit">
                                    Join
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="foot-watermark" aria-hidden="true">
                        {footer.watermark}
                    </div>

                    <div className="footer-bottom">
                        <span>{footer.copyright}</span>
                        <span className="foot-egg">{footer.egg}</span>
                        <a href="#home" className="back-top">
                            Back to top <ArrowUp width={15} height={15} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
