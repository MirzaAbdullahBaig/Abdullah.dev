import { siteConfig } from "@/data/site";

/* Wordmark used in the navbar and footer: "MB" tile + name + accent ".dev". */
export function BrandLogo() {
    const { mark, text, suffix } = siteConfig.logo;
    return (
        <a href="#home" className="logo">
            <span className="logo-mark">{mark}</span> {text}
            <span className="logo-dev">{suffix}</span>
        </a>
    );
}
