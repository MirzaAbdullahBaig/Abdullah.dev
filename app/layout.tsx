import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import { Background } from "@/components/effects/background";
import { CustomCursor } from "@/components/effects/custom-cursor";
import { Interactions } from "@/components/effects/interactions";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/data/site";

/* Self-hosted, layout-shift-free fonts mapped to the design's CSS variables. */
const display = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-space-grotesk",
    display: "swap",
});
const body = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-inter",
    display: "swap",
});
const mono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-jetbrains-mono",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: `${siteConfig.name} — ${siteConfig.role}`,
        template: `%s — ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "Full-Stack Developer",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Go",
        "Karachi",
        siteConfig.name,
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: `${siteConfig.name} — ${siteConfig.role}`,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: `${siteConfig.name} — ${siteConfig.role}`,
        description: siteConfig.description,
    },
    icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
    themeColor: "#0A0A0C",
    colorScheme: "dark light",
};

const DEVICON_HREF =
    "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css";

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
            <head>
                <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
                {/* Devicon brand icon font — used by the tech marquee & skills tiles. */}
                <link rel="stylesheet" href={DEVICON_HREF} />
            </head>
            <body>
                {/* Apply the persisted theme before paint to avoid a light-mode flash. */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `try{if(localStorage.getItem('pf-theme')==='light')document.body.classList.add('light')}catch(e){}`,
                    }}
                />
                <Background />
                <CustomCursor />
                <Navbar />
                <main>{children}</main>
                <Footer />
                <Interactions />
            </body>
        </html>
    );
}
