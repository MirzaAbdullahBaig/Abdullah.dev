import { siteConfig, socials } from "@/data/site";
import { Icon, SocialIcon, Send } from "@/components/ui/icons";

/* Social row here intentionally omits Email (the form covers that). */
const contactSocials = socials.filter((s) => s.name !== "email");

export function Contact() {
    return (
        <section id="contact" className="contact" data-num="09">
            <span className="sec-numeral" aria-hidden="true">
                09
            </span>
            <div className="glow-blob" />
            <div className="wrap">
                <div className="contact-grid">
                    <div className="contact-left reveal">
                        <span className="sec-tag">{"// 09 — Contact"}</span>
                        <h2 className="sec-head">
                            Let&apos;s build something <span className="grad-text">great together</span>
                        </h2>
                        <p className="contact-invite">
                            Have a project in mind or just want to say hi? My inbox is always open — I&apos;ll get
                            back to you within a day.
                        </p>

                        <div className="contact-detail" data-copy={siteConfig.email}>
                            <div className="cd-ico">
                                <Icon name="mail" />
                            </div>
                            <div>
                                <div className="cd-label">EMAIL</div>
                                <div className="cd-val">{siteConfig.email}</div>
                            </div>
                            <span className="cd-copy">copied ✓</span>
                        </div>

                        <div className="contact-detail" data-copy={siteConfig.phone}>
                            <div className="cd-ico">
                                <Icon name="phone" />
                            </div>
                            <div>
                                <div className="cd-label">PHONE</div>
                                <div className="cd-val">{siteConfig.phone}</div>
                            </div>
                            <span className="cd-copy">copied ✓</span>
                        </div>

                        <div className="contact-detail">
                            <div className="cd-ico">
                                <Icon name="pin" />
                            </div>
                            <div>
                                <div className="cd-label">LOCATION</div>
                                <div className="cd-val">{siteConfig.location}</div>
                            </div>
                        </div>

                        <div className="contact-socials">
                            {contactSocials.map((social) => (
                                <a
                                    key={social.name}
                                    className="social-circle"
                                    href={social.href}
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <SocialIcon name={social.name} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="glass form-card reveal">
                        <form id="contactForm">
                            <div className="form-row">
                                <div className="field">
                                    <label htmlFor="cf-name">Name</label>
                                    <input id="cf-name" type="text" placeholder="Your name" required />
                                </div>
                                <div className="field">
                                    <label htmlFor="cf-email">Email</label>
                                    <input id="cf-email" type="email" placeholder="you@email.com" required />
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="cf-subject">Subject</label>
                                <input id="cf-subject" type="text" placeholder="What's this about?" />
                            </div>
                            <div className="field">
                                <label htmlFor="cf-message">Message</label>
                                <textarea
                                    id="cf-message"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-grad" data-magnetic>
                                Send Message <Send width={16} height={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
