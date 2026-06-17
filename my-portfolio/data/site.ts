/* ============================================================
   Single source of truth for all portfolio content.
   Sections render by mapping over these typed structures, so
   updating copy never means touching component markup.
   ============================================================ */

import type { IconName } from "@/components/ui/icons";

export type SocialName = "github" | "linkedin" | "x" | "email";

export interface SocialLink {
    name: SocialName;
    label: string;
    href: string;
}

export interface NavLink {
    label: string;
    href: string;
}

export interface DeviconTile {
    /** Full devicon class string, e.g. "devicon-react-original colored". */
    icon: string;
    label: string;
}

export interface SkillCategory {
    name: string;
    note: string;
    tiles: DeviconTile[];
    wide?: boolean;
}

export interface Service {
    icon: IconName;
    title: string;
    desc: string;
}

export interface ExperienceItem {
    role: string;
    company: string;
    date: string;
    /** Supports **bold** markers for emphasis. */
    desc: string;
    tags: string[];
}

export type MockVariant = "a" | "b" | "c";
export type MockAccent = "grad" | "cyan";

export interface FeaturedProject {
    no: string;
    title: string;
    tagline: string;
    desc: string;
    tags: string[];
    liveUrl: string;
    repoUrl: string;
    browserUrl: string;
    mock: MockVariant;
}

export interface GridProject {
    title: string;
    desc: string;
    tags: string[];
    liveUrl: string;
    repoUrl: string;
    mock: MockVariant;
    accent: MockAccent;
    /** Opacity of the decorative thumbnail box (0–1). */
    thumbOpacity: number;
}

export interface ProcessStep {
    no: string;
    icon: IconName;
    title: string;
    desc: string;
}

export interface Testimonial {
    initials: string;
    name: string;
    role: string;
    quote: string;
}

export interface BlogPost {
    date: string;
    readTime: string;
    title: string;
    excerpt: string;
    mock: MockVariant;
    accent: MockAccent;
}

export interface Credential {
    title: string;
    sub: string;
    date: string;
}

export interface StatItem {
    count: number;
    suffix?: string;
    label: string;
}

/* ---------- Identity ---------- */
export const siteConfig = {
    name: "Mirza Abdullah Baig",
    shortName: "Abdullah",
    role: "Senior Full-Stack Developer",
    url: "https://abdullahbaig.dev",
    description:
        "I build fast, scalable web apps end-to-end — from pixel-perfect interfaces to resilient backends. 8+ years turning ideas into products people love.",
    email: "hello@abdullahbaig.dev",
    phone: "+92 300 1234567",
    location: "Karachi, Pakistan",
    logo: { mark: "MB", text: "Abdullah", suffix: ".dev" },
} as const;

export const navLinks: NavLink[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export const socials: SocialLink[] = [
    { name: "github", label: "GitHub", href: "https://github.com/abdullahbaig" },
    { name: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/abdullahbaig" },
    { name: "x", label: "X", href: "https://x.com/abdullahbaig" },
    { name: "email", label: "Email", href: "mailto:hello@abdullahbaig.dev" },
];

/* ---------- Hero ---------- */
export const hero = {
    pill: "Available for work",
    bootCommand: "whoami",
    greeting: "Hi, I'm Abdullah 👋",
    headline: ["Senior", "Full-Stack", "Developer"] as const,
    /** Index of the headline word that gets the accent treatment. */
    headlineAccentIndex: 1,
    subtitle: siteConfig.description,
    cvUrl: "#",
};

export const heroCode = {
    file: "developer.ts",
    name: "Abdullah Baig",
    roleValue: "Full-Stack Engineer",
    stack: ["React", "Node", "Go"],
    based: "Karachi, PK",
};

/* ---------- Tech marquee ---------- */
export const marqueeTech: DeviconTile[] = [
    { icon: "devicon-react-original colored", label: "React" },
    { icon: "devicon-nextjs-plain colored", label: "Next.js" },
    { icon: "devicon-typescript-plain colored", label: "TypeScript" },
    { icon: "devicon-nodejs-plain colored", label: "Node.js" },
    { icon: "devicon-go-original-wordmark colored", label: "Go" },
    { icon: "devicon-postgresql-plain colored", label: "PostgreSQL" },
    { icon: "devicon-docker-plain colored", label: "Docker" },
    { icon: "devicon-amazonwebservices-plain-wordmark colored", label: "AWS" },
    { icon: "devicon-graphql-plain colored", label: "GraphQL" },
    { icon: "devicon-redis-plain colored", label: "Redis" },
];

/* ---------- About ---------- */
export const about = {
    bioName: siteConfig.name,
    bioRole: "// full-stack engineer",
    bioText:
        "I'm a developer who loves the whole stack — crafting interfaces that feel effortless and backends that don't flinch under load. I care about **clean architecture**, **delightful detail**, and shipping things that actually move the needle. When I'm not coding, I'm probably refactoring something that didn't need it. 😄",
    building: {
        name: "Nimbus — AI Dev Platform",
        desc: "Real-time collaborative infra for AI teams.",
    },
    nowPlaying: { track: "Midnight City", artist: "M83" },
    yearsExperience: "8+",
    interests: ["☕ Coffee", "♟ Chess", "📷 Photography", "🏔 Hiking", "🎮 Indie games"],
};

/* ---------- Stats ---------- */
export const stats: StatItem[] = [
    { count: 8, suffix: "+", label: "Years Experience" },
    { count: 50, suffix: "+", label: "Projects Shipped" },
    { count: 30, suffix: "+", label: "Happy Clients" },
    { count: 15, label: "Open-Source Repos" },
];

/* ---------- Services ---------- */
export const services: Service[] = [
    {
        icon: "window",
        title: "Web App Development",
        desc: "Full-stack apps with React & Next.js front-ends and robust APIs — built to scale from day one.",
    },
    {
        icon: "api",
        title: "API & Backend",
        desc: "REST & GraphQL services in Node and Go, with clean data models and rock-solid reliability.",
    },
    {
        icon: "star",
        title: "UI Engineering",
        desc: "Design-system-driven interfaces with buttery animations and pixel-perfect, accessible components.",
    },
    {
        icon: "bolt",
        title: "Performance & DevOps",
        desc: "CI/CD, containers, and observability — plus deep perf audits that make products genuinely fast.",
    },
];

/* ---------- Skills ---------- */
export const skills: SkillCategory[] = [
    {
        name: "Frontend",
        note: "// interfaces",
        tiles: [
            { icon: "devicon-react-original colored", label: "React" },
            { icon: "devicon-nextjs-plain", label: "Next.js" },
            { icon: "devicon-typescript-plain colored", label: "TypeScript" },
            { icon: "devicon-tailwindcss-plain colored", label: "Tailwind" },
            { icon: "devicon-redux-original colored", label: "Redux" },
        ],
    },
    {
        name: "Backend",
        note: "// services",
        tiles: [
            { icon: "devicon-nodejs-plain colored", label: "Node.js" },
            { icon: "devicon-go-original-wordmark colored", label: "Go" },
            { icon: "devicon-python-plain colored", label: "Python" },
            { icon: "devicon-graphql-plain colored", label: "GraphQL" },
            { icon: "devicon-nestjs-plain colored", label: "NestJS" },
        ],
    },
    {
        name: "Database",
        note: "// data",
        tiles: [
            { icon: "devicon-postgresql-plain colored", label: "PostgreSQL" },
            { icon: "devicon-mongodb-plain colored", label: "MongoDB" },
            { icon: "devicon-redis-plain colored", label: "Redis" },
            { icon: "devicon-prisma-original", label: "Prisma" },
        ],
    },
    {
        name: "DevOps & Cloud",
        note: "// ship",
        tiles: [
            { icon: "devicon-docker-plain colored", label: "Docker" },
            { icon: "devicon-kubernetes-plain colored", label: "Kubernetes" },
            { icon: "devicon-amazonwebservices-plain-wordmark colored", label: "AWS" },
            { icon: "devicon-githubactions-plain colored", label: "CI/CD" },
        ],
    },
    {
        name: "Tools & Workflow",
        note: "// daily drivers",
        wide: true,
        tiles: [
            { icon: "devicon-git-plain colored", label: "Git" },
            { icon: "devicon-figma-plain colored", label: "Figma" },
            { icon: "devicon-vscode-plain colored", label: "VS Code" },
            { icon: "devicon-jest-plain colored", label: "Jest" },
            { icon: "devicon-vitejs-plain colored", label: "Vite" },
            { icon: "devicon-linux-plain colored", label: "Linux" },
            { icon: "devicon-postman-plain colored", label: "Postman" },
        ],
    },
];

/* ---------- Experience ---------- */
export const experience: ExperienceItem[] = [
    {
        role: "Lead Full-Stack Engineer",
        company: "Lumen Labs",
        date: "2023 — Present",
        desc: "Lead a team of 6 building a real-time analytics platform. Re-architected the data pipeline and **cut dashboard load time by 45%** while doubling throughput.",
        tags: ["Next.js", "Go", "Kafka", "AWS"],
    },
    {
        role: "Senior Software Engineer",
        company: "Northwind",
        date: "2020 — 2023",
        desc: "Owned the checkout & payments stack for an e-commerce suite serving 2M users. Migrated to a micro-services architecture and **raised conversion by 18%**.",
        tags: ["React", "Node", "PostgreSQL", "Stripe"],
    },
    {
        role: "Full-Stack Developer",
        company: "Pixelware",
        date: "2018 — 2020",
        desc: "Built client web apps from scratch across fintech and health. Introduced a shared component library that **cut delivery time by 30%** across projects.",
        tags: ["TypeScript", "Express", "MongoDB"],
    },
    {
        role: "Junior Developer",
        company: "Codeflux",
        date: "2016 — 2018",
        desc: "Started my journey shipping features for SaaS dashboards, learning to write tested, maintainable code and **resolving 400+ issues** along the way.",
        tags: ["JavaScript", "Vue", "MySQL"],
    },
];

/* ---------- Projects ---------- */
export const featuredProjects: FeaturedProject[] = [
    {
        no: "/ Featured 01",
        title: "Nimbus Analytics",
        tagline: "Real-time product analytics, reimagined.",
        desc: "A streaming analytics dashboard processing millions of events per minute with sub-second queries, custom funnels, and a beautiful, fully-themeable UI.",
        tags: ["Next.js", "Go", "ClickHouse", "WebSockets"],
        liveUrl: "#",
        repoUrl: "#",
        browserUrl: "nimbus.app/dashboard",
        mock: "a",
    },
    {
        no: "/ Featured 02",
        title: "PayFlow",
        tagline: "Payments infrastructure for builders.",
        desc: "A developer-first payments gateway with idempotent APIs, smart retries, and a slick merchant dashboard. Handles complex multi-currency flows with ease.",
        tags: ["Node", "TypeScript", "PostgreSQL", "Stripe"],
        liveUrl: "#",
        repoUrl: "#",
        browserUrl: "payflow.io",
        mock: "b",
    },
];

export const gridProjects: GridProject[] = [
    {
        title: "Orbit CRM",
        desc: "A lightweight CRM with pipeline automation and a keyboard-first UX.",
        tags: ["React", "tRPC"],
        liveUrl: "#",
        repoUrl: "#",
        mock: "c",
        accent: "grad",
        thumbOpacity: 0.5,
    },
    {
        title: "DevBoard",
        desc: "Self-hosted Kanban for engineering teams with Git integration.",
        tags: ["Vue", "Go"],
        liveUrl: "#",
        repoUrl: "#",
        mock: "a",
        accent: "cyan",
        thumbOpacity: 0.6,
    },
    {
        title: "Snippet",
        desc: "Beautiful code-snippet sharing with syntax themes & embeds.",
        tags: ["Next.js", "Prisma"],
        liveUrl: "#",
        repoUrl: "#",
        mock: "b",
        accent: "grad",
        thumbOpacity: 0.5,
    },
    {
        title: "Wavelength",
        desc: "Audio collaboration app with real-time waveform editing.",
        tags: ["React", "WebAudio"],
        liveUrl: "#",
        repoUrl: "#",
        mock: "c",
        accent: "cyan",
        thumbOpacity: 0.55,
    },
    {
        title: "Forecast",
        desc: "A delightful weather PWA with animated, data-rich visualizations.",
        tags: ["Svelte", "D3"],
        liveUrl: "#",
        repoUrl: "#",
        mock: "a",
        accent: "grad",
        thumbOpacity: 0.5,
    },
    {
        title: "Atlas Docs",
        desc: "Collaborative docs with block-based editing and live cursors.",
        tags: ["Next.js", "Yjs"],
        liveUrl: "#",
        repoUrl: "#",
        mock: "b",
        accent: "cyan",
        thumbOpacity: 0.5,
    },
];

/* ---------- GitHub activity ---------- */
export const github = {
    user: "@abdullahbaig",
    contributions: "1,284",
    stars: "2.4k",
    streak: "47 days",
    languages: [
        { name: "TypeScript", pct: 42 },
        { name: "Go", pct: 28 },
        { name: "Python", pct: 18 },
        { name: "CSS", pct: 12 },
    ],
};

/* ---------- Process ---------- */
export const processSteps: ProcessStep[] = [
    { no: "01", icon: "search", title: "Discover", desc: "Understand the goal, users, and constraints before a line of code." },
    { no: "02", icon: "pencil", title: "Design", desc: "Shape the architecture and interface — fast prototypes, real feedback." },
    { no: "03", icon: "code", title: "Build", desc: "Write tested, maintainable code with tight iteration loops." },
    { no: "04", icon: "check", title: "Ship", desc: "Deploy with confidence, monitor, and keep improving post-launch." },
];

/* ---------- Testimonials ---------- */
export const testimonials: Testimonial[] = [
    {
        initials: "SK",
        name: "Sara Khan",
        role: "CTO, Lumen Labs",
        quote: "Abdullah shipped our MVP in half the time we expected — and the code was cleaner than what our senior team writes. A rare full-stack unicorn.",
    },
    {
        initials: "DR",
        name: "Daniel Reyes",
        role: "VP Eng, Northwind",
        quote: "The performance work alone paid for the whole project. Our dashboards went from sluggish to instant. Communication was flawless throughout.",
    },
    {
        initials: "MA",
        name: "Mariam Ali",
        role: "Founder, PayFlow",
        quote: "Beautiful UI, solid engineering, zero drama. Abdullah is the first person I call when something important needs to get built right.",
    },
    {
        initials: "JL",
        name: "Jenny Liu",
        role: "PM, Pixelware",
        quote: "He thinks like a product owner, not just a coder. Every decision was backed by reasoning that made our whole team smarter.",
    },
];

/* ---------- Blog ---------- */
export const blogPosts: BlogPost[] = [
    {
        date: "Mar 2026",
        readTime: "6 min read",
        title: "Scaling WebSockets to a Million Connections",
        excerpt: "The architecture, pitfalls, and load-balancing tricks behind real-time at scale.",
        mock: "a",
        accent: "grad",
    },
    {
        date: "Feb 2026",
        readTime: "9 min read",
        title: "Why I Reach for Go on the Backend",
        excerpt: "A pragmatic look at concurrency, tooling, and when Go beats Node for services.",
        mock: "b",
        accent: "cyan",
    },
    {
        date: "Jan 2026",
        readTime: "5 min read",
        title: "The Anatomy of a 60fps Animation",
        excerpt: "Compositing, will-change, and the mental model that keeps interfaces buttery.",
        mock: "c",
        accent: "grad",
    },
];

/* ---------- Education & certifications ---------- */
export const education: Credential[] = [
    { title: "BS Computer Science", sub: "FAST NUCES, Karachi", date: "2012 — 2016" },
    { title: "Pre-Engineering", sub: "Adamjee Govt. College", date: "2010 — 2012" },
];

export const certifications: Credential[] = [
    { title: "AWS Solutions Architect — Pro", sub: "Amazon Web Services", date: "2024" },
    { title: "Certified Kubernetes Developer", sub: "CNCF", date: "2023" },
];

/* ---------- Footer ---------- */
export const footer = {
    tagline:
        "Full-stack developer crafting fast, scalable, and delightful web products from Karachi to the world.",
    navigate: navLinks.slice(0, 5),
    servicesLinks: [
        { label: "Web Apps", href: "#services" },
        { label: "API & Backend", href: "#services" },
        { label: "UI Engineering", href: "#services" },
        { label: "DevOps", href: "#services" },
    ] as NavLink[],
    newsletterNote: "Occasional notes on building for the web. No spam.",
    copyright: "© 2026 Mirza Abdullah Baig. Designed & built from scratch.",
    egg: "// built by hand, no template — last deploy 2026.06.12",
    watermark: "ABDULLAH.DEV",
};
