import { Fragment } from "react";

/* Renders a string with **double-asterisk** spans as <b>. Keeps copy
   in the data layer free of JSX while preserving the design's emphasis. */
export function RichText({ text }: { text: string }) {
    const parts = text.split(/\*\*(.+?)\*\*/g);
    return (
        <>
            {parts.map((part, i) =>
                i % 2 === 1 ? <b key={i}>{part}</b> : <Fragment key={i}>{part}</Fragment>,
            )}
        </>
    );
}
