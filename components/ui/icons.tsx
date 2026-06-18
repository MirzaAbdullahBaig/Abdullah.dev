import type { SVGProps } from "react";

import type { SocialName } from "@/data/site";

/* ============================================================
   Icon set — exact SVG paths ported from the original design
   so every glyph stays pixel-identical. Decorative by default
   (aria-hidden); accessible labels live on the parent element.
   ============================================================ */

type Props = SVGProps<SVGSVGElement>;

const base = (props: Props) => ({
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
    ...props,
});

/* Stroke (line) icon wrapper. */
const Line = ({ sw = 1.8, children, ...props }: Props & { sw?: number; children: React.ReactNode }) => (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={sw}>
        {children}
    </svg>
);

/* Filled icon wrapper. */
const Solid = ({ children, ...props }: Props & { children: React.ReactNode }) => (
    <svg {...base(props)} fill="currentColor">
        {children}
    </svg>
);

/* ---------- Keyed icons (services / process / contact / edu) ---------- */
export type IconName =
    | "window"
    | "api"
    | "star"
    | "bolt"
    | "search"
    | "pencil"
    | "code"
    | "check"
    | "cube"
    | "mail"
    | "phone"
    | "pin"
    | "cap"
    | "capBadge"
    | "award";

const PATHS: Record<IconName, { sw?: number; node: React.ReactNode }> = {
    window: { node: (<><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 21h8" /></>) },
    api: { node: (<><path d="M4 7h16M4 12h16M4 17h10" /><circle cx="19" cy="17" r="2" /></>) },
    star: { node: <path d="M12 2l3 6 6 .9-4.5 4.3 1 6.1L12 22l-5.5 2.3 1-6.1L3 8.9 9 8z" /> },
    bolt: { node: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /> },
    search: { node: (<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></>) },
    pencil: { node: (<><path d="M12 19l7-7-4-4-7 7v4z" /><path d="M16 8l3-3" /></>) },
    code: { node: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" /> },
    check: { node: (<><path d="M5 13l4 4L19 7" /><path d="M12 2v4" /></>) },
    cube: { node: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /> },
    mail: { node: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>) },
    phone: { node: <path d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /> },
    pin: { node: (<><path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>) },
    cap: { node: (<><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" /></>) },
    capBadge: { node: <path d="M22 10L12 5 2 10l10 5 10-5z" /> },
    award: { node: (<><circle cx="12" cy="8" r="6" /><path d="M9 13l-2 8 5-3 5 3-2-8" /></>) },
};

export function Icon({ name, ...props }: Props & { name: IconName }) {
    const { sw, node } = PATHS[name];
    return (
        <Line sw={sw} {...props}>
            {node}
        </Line>
    );
}

/* ---------- Social icons (filled brand glyphs) ---------- */
const SOCIAL_PATHS: Record<SocialName, React.ReactNode> = {
    github: (
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
    ),
    linkedin: (
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.97H5.67v8.37h2.67zM7 8.8a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.54v-4.59c0-2.45-1.31-3.59-3.06-3.59-1.41 0-2.04.78-2.39 1.32V9.97h-2.67v8.37h2.67v-4.67c0-.25.02-.49.09-.67.2-.49.65-1 1.4-1 .99 0 1.39.75 1.39 1.85v4.49h2.57z" />
    ),
    x: (
        <path d="M18.9 2H22l-7.6 8.7L23 22h-6.8l-5.3-6.9L4.8 22H1.6l8.1-9.3L1 2h7l4.8 6.3L18.9 2zm-2.4 18h1.9L7.6 4H5.6l10.9 16z" />
    ),
    email: (
        <></>
    ),
};

export function SocialIcon({ name, ...props }: Props & { name: SocialName }) {
    /* Email uses the line-style envelope; the rest are filled brand marks. */
    if (name === "email") return <Icon name="mail" {...props} />;
    return <Solid {...props}>{SOCIAL_PATHS[name]}</Solid>;
}

/* ---------- Inline action / decorative icons ---------- */
export const ArrowRight = (props: Props) => (
    <Line sw={2} {...props}>
        <path d="M5 12h14M13 6l6 6-6 6" />
    </Line>
);

export const Download = (props: Props) => (
    <Line sw={2} {...props}>
        <path d="M12 3v12M7 11l5 5 5-5M5 21h14" />
    </Line>
);

export const ExternalArrow = (props: Props) => (
    <Line sw={2} {...props}>
        <path d="M7 17L17 7M7 7h10v10" />
    </Line>
);

export const Send = (props: Props) => (
    <Line sw={2} {...props}>
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </Line>
);

export const ArrowUp = (props: Props) => (
    <Line sw={2} {...props}>
        <path d="M12 19V5M6 11l6-6 6 6" />
    </Line>
);

export const Sun = (props: Props) => (
    <Line sw={1.8} {...props}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </Line>
);

export const Menu = (props: Props) => (
    <Line sw={1.8} {...props}>
        <path d="M4 7h16M4 12h16M4 17h16" />
    </Line>
);

export const Close = (props: Props) => (
    <Line sw={1.8} {...props}>
        <path d="M6 6l12 12M18 6L6 18" />
    </Line>
);

export const StarSolid = (props: Props) => (
    <Solid {...props}>
        <path d="M12 2l3 6 6 .9-4.5 4.3 1 6.1L12 16.5 6.5 19.3l1-6.1L3 8.9 9 8z" />
    </Solid>
);

export const Spotify = (props: Props) => (
    <Solid {...props}>
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.5 14.4a.62.62 0 01-.86.21c-2.35-1.44-5.3-1.76-8.79-.96a.63.63 0 11-.28-1.22c3.8-.87 7.07-.5 9.71 1.11.3.18.39.57.21.86zm1.2-2.67a.78.78 0 01-1.07.26c-2.69-1.65-6.79-2.13-9.97-1.17a.78.78 0 11-.45-1.49c3.63-1.1 8.15-.56 11.23 1.33.37.22.49.7.26 1.07zm.1-2.78C14.58 9.36 9.4 9.18 6.4 10.09a.94.94 0 11-.54-1.8c3.44-1.04 9.16-.84 12.78 1.31a.94.94 0 01-.96 1.61z" />
    </Solid>
);

/* GitHub-stats icons (line style, distinct from the social mark). */
export const StarLine = (props: Props) => (
    <Line sw={1.8} {...props}>
        <path d="M12 2l3 6 6 .9-4.5 4.3 1 6.1L12 18l-5.5 1.3 1-6.1L3 8.9 9 8z" />
    </Line>
);

export const BoltLine = (props: Props) => (
    <Line sw={1.8} {...props}>
        <path d="M13 2L3 14h7l-1 8 10-12h-7z" />
    </Line>
);
