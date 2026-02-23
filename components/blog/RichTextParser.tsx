"use client";
import React from "react";

export const RichTextParser = ({ content }: { content: any }) => {
  if (!content || !content.root?.children) return null;

  const renderNodes = (nodes: any[]): React.ReactNode => {
    return nodes?.map((node, index) => {
      // --- 1. TEXT NODES (BOLD, ITALIC) ---
      if (node.type === "text") {
        let text: React.ReactNode = node.text;
        if (node.format & 1) {
          text = <strong key={`b-${index}`} className="font-black text-[var(--text-primary)]">{text}</strong>;
        }
        if (node.format & 2) {
          text = <em key={`i-${index}`} className="italic">{text}</em>;
        }
        return <span key={index}>{text}</span>;
      }

      // --- 2. HEADINGS (H1-H6) ---
      if (node.type === "heading") {
        const headingMap = {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
        } as const;

        // Solusi Error: Mapping ke React.ElementType
        const Tag = (headingMap[node.tag as keyof typeof headingMap] || "h2") as React.ElementType;

        const sizeClasses = {
          h1: "text-4xl md:text-6xl",
          h2: "text-3xl md:text-5xl",
          h3: "text-2xl md:text-4xl",
        }[node.tag as string] || "text-xl";

        return (
          <Tag key={index} className={`${sizeClasses} text-[var(--text-primary)] font-black italic tracking-tighter mt-12 md:mt-16 mb-4 md:mb-6 leading-tight`}>
            {renderNodes(node.children)}
          </Tag>
        );
      }

      // --- 3. PARAGRAPHS ---
      if (node.type === "paragraph") {
        return (
          <p key={index} className="mb-6 md:mb-8 text-[var(--text-primary)] opacity-90 leading-[1.7] md:leading-[1.8] text-base md:text-xl">
            {renderNodes(node.children)}
          </p>
        );
      }

      // --- 4. LISTS (UL/OL) ---
      if (node.type === "list") {
        const ListTag = (node.tag === "ol" ? "ol" : "ul") as React.ElementType;
        return (
          <ListTag key={index} className={`mb-8 ml-5 md:ml-6 space-y-3 md:space-y-4 ${node.tag === 'ol' ? 'list-decimal' : ''}`}>
            {renderNodes(node.children)}
          </ListTag>
        );
      }

      // --- 5. LIST ITEMS ---
      if (node.type === "listitem") {
        return (
          <li key={index} className="pl-2 md:pl-4 relative text-[var(--text-primary)] opacity-90 text-sm md:text-lg leading-relaxed font-medium">
            {node.listType !== 'number' && (
              <span className="absolute left-[-1.2rem] md:left-[-1.5rem] top-[0.6rem] md:top-[0.7rem] w-1.5 h-1.5 md:w-2 md:h-2 bg-[var(--jiwa-red)] rounded-full" />
            )}
            {renderNodes(node.children)}
          </li>
        );
      }

      // --- 6. QUOTES ---
      if (node.type === "quote") {
        return (
          <blockquote key={index} className="border-l-4 border-[var(--jiwa-red)] bg-[var(--text-primary)]/[0.03] p-6 md:p-8 my-10 md:my-12 rounded-r-2xl md:rounded-r-3xl italic text-xl md:text-2xl text-[var(--text-primary)]/80">
            {renderNodes(node.children)}
          </blockquote>
        );
      }

      return null;
    });
  };

  return <div className="rich-text-content">{renderNodes(content.root.children)}</div>;
};