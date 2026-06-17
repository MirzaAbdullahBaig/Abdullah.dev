import type { ReactNode } from "react";

/* ============================================================
   Section primitives shared by every page section.
   - <Section> renders the <section> shell, the centered .wrap,
     and (for numbered sections) the oversized parallax numeral.
   - <SectionHeading> renders the // tag + heading + optional sub,
     wrapped in the .sec-head-wrap that the reveal observer wipes in.
   ============================================================ */

interface SectionProps {
    id?: string;
    /** Two-digit string (e.g. "01") — adds data-num + the giant numeral. */
    num?: string;
    className?: string;
    children: ReactNode;
}

export function Section({ id, num, className, children }: SectionProps) {
    return (
        <section id={id} data-num={num} className={className}>
            {num && (
                <span className="sec-numeral" aria-hidden="true">
                    {num}
                </span>
            )}
            <div className="wrap">{children}</div>
        </section>
    );
}

interface SectionHeadingProps {
    tag: string;
    heading: ReactNode;
    sub?: string;
}

export function SectionHeading({ tag, heading, sub }: SectionHeadingProps) {
    return (
        <div className="sec-head-wrap reveal">
            <span className="sec-tag">{tag}</span>
            <h2 className="sec-head">{heading}</h2>
            {sub && <p className="sec-sub">{sub}</p>}
        </div>
    );
}
