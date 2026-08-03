"use client";
import React, { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const COPY_FEEDBACK_MS = 1600;

/**
 * Small pixel-styled button that copies `text` to the clipboard and shows a
 * brief "copied!" confirmation, so visitors can grab the email address
 * without opening their mail client.
 */
export const CopyButton = ({
  text,
  label = "Copy",
  className,
}: {
  text: string;
  label?: string;
  className?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard API unavailable (older browser/no permission) — fail silently.
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), COPY_FEEDBACK_MS);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copied to clipboard" : label}
      className={cn(
        "inline-flex items-center gap-1.5 font-mono-pixel text-xs md:text-sm px-3 py-1.5 bg-black-200 pixel-corners-sm pixel-shadow-sm pixel-shadow-hover border-2 border-espresso text-white-200 hover:text-amber transition-colors",
        className,
      )}
    >
      {copied ? (
        <>
          <FaCheck className="text-amber" /> Copied!
        </>
      ) : (
        <>
          <FaRegCopy /> {label}
        </>
      )}
    </button>
  );
};

export default CopyButton;
