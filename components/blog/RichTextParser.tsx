"use client";

import React from "react";

// --- TYPES ---
interface LexicalNode {
  type: string;
  text?: string;
  format?: number;
  tag?: string;
  children?: LexicalNode[];
  listType?: "number" | "bullet";
}

interface RichTextParserProps {
  content: {
    root: {
      children: LexicalNode[];
    };
  };
}

// --- CONSTANTS & STYLES ---
const HEADING_STYLES: Record<string, string> = {
  h1: "text-4xl md:text-6xl mt-12 md:mt-16",
  h2: "text-3xl md:text-5xl mt-10 md:mt-14",
  h3: "text-2xl md:text-4xl mt-8 md:mt-12",
  default: "text-xl mt-6",
};

export const RichTextParser = ({ content }: RichTextParserProps) => {
  if (!content?.root?.children) return null;

  const renderNodes = (nodes?: LexicalNode[]): React.ReactNode => {
    return nodes?.map((node, index) => {
      const key = `${node.type}-${index}`;

      switch (node.type) {
        // 1. TEXT NODES
        case "text": {
          let element: React.ReactNode = node.text;
          if (node.format && node.format & 1) {
            // Bold
            element = (
              <strong className="font-black text-[var(--text-primary)]">
                {element}
              </strong>
            );
          }
          if (node.format && node.format & 2) {
            // Italic
            element = <em className="italic">{element}</em>;
          }
          return <React.Fragment key={key}>{element}</React.Fragment>;
        }

        // 2. HEADINGS
        case "heading": {
          const Tag = (node.tag || "h2") as React.ElementType;
          const sizeClass =
            HEADING_STYLES[node.tag as string] || HEADING_STYLES.default;

          return (
            <Tag
              key={key}
              className={`${sizeClass} text-[var(--text-primary)] font-black italic tracking-tighter mb-6 leading-tight`}
            >
              {renderNodes(node.children)}
            </Tag>
          );
        }

        // 3. PARAGRAPHS
        case "paragraph":
          return (
            <p
              key={key}
              className="mb-6 md:mb-8 text-[var(--text-primary)] opacity-90 leading-[1.7] md:leading-[1.8] text-base md:text-xl"
            >
              {renderNodes(node.children)}
            </p>
          );

        // 4. LISTS
        case "list": {
          const ListTag = node.tag === "ol" ? "ol" : "ul";
          return (
            <ListTag
              key={key}
              className={`mb-8 ml-6 space-y-4 ${node.tag === "ol" ? "list-decimal" : "list-none"}`}
            >
              {renderNodes(node.children)}
            </ListTag>
          );
        }

        // 5. LIST ITEMS
        case "listitem":
          return (
            <li
              key={key}
              className="pl-2 md:pl-4 relative text-[var(--text-primary)] opacity-90 text-sm md:text-lg leading-relaxed font-medium"
            >
              {node.listType !== "number" && (
                <span className="absolute left-[-1.5rem] top-[0.7rem] w-2 h-2 bg-[var(--jiwa-red)] rounded-full" />
              )}
              {renderNodes(node.children)}
            </li>
          );

        // 6. QUOTES
        case "quote":
          return (
            <blockquote
              key={key}
              className="border-l-4 border-[var(--jiwa-red)] bg-[var(--text-primary)]/[0.03] p-8 my-12 rounded-r-3xl italic text-xl md:text-2xl text-[var(--text-primary)]/80 shadow-sm"
            >
              {renderNodes(node.children)}
            </blockquote>
          );

        default:
          return null;
      }
    });
  };

  return (
    <div className="rich-text-content">
      {renderNodes(content.root.children)}
    </div>
  );
};
