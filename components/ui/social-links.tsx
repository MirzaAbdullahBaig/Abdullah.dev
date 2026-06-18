import { socials } from "@/data/site";
import type { SocialLink } from "@/data/site";
import { SocialIcon } from "@/components/ui/icons";

/* Row of circular social buttons. Reused in the hero, contact, and footer.
   aria-label strings must stay "GitHub" / "LinkedIn" / "X" / "Email" — the
   editorial CSS targets those exact labels for per-brand hover colors.
   Pass `links` to render a subset (e.g. the footer omits Email). */
export function SocialLinks({
    className = "hero-socials",
    links = socials,
}: {
    className?: string;
    links?: SocialLink[];
}) {
    return (
        <div className={className}>
            {links.map((social) => {
                const external = social.href.startsWith("http");
                return (
                    <a
                        key={social.name}
                        className="social-circle"
                        href={social.href}
                        aria-label={social.label}
                        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                        <SocialIcon name={social.name} />
                    </a>
                );
            })}
        </div>
    );
}
