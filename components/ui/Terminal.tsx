"use client";
import React, { useRef, useState } from "react";
import { TERMINAL_COMMANDS, TERMINAL_PROMPT } from "@/data/terminalCommands";
import { useSound } from "@/components/sound-provider";

type HistoryEntry = { id: number; command: string; output: string[] };

let idCounter = 0;
const nextId = () => idCounter++;

/**
 * A tiny interactive shell embedded in the Hero window. Visitors can type
 * commands (see TERMINAL_COMMANDS) to explore CV-derived content — whoami,
 * skills, experience, projects, stats, contact — without leaving the hero
 * section. Falls back to a friendly "command not found" for anything else.
 */
export const Terminal = () => {
  const { playBlip } = useSound();
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      id: nextId(),
      command: "help",
      output: TERMINAL_COMMANDS.help(),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const runCommand = (raw: string) => {
    const command = raw.trim();
    if (!command) return;
    playBlip();

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const handler = TERMINAL_COMMANDS[command.toLowerCase()];
    const output = handler
      ? handler()
      : [`command not found: ${command}`, "type 'help' to see what's available"];

    setHistory((prev) => [...prev, { id: nextId(), command, output }]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(input);
  };

  return (
    <div>
      <p className="font-mono-pixel text-[11px] md:text-xs text-terracotta mb-1.5 flex items-center gap-1.5">
        <span className="animate-blink">▸</span>
        try it — click below and type <code className="text-amber">help</code>
      </p>
      <div
        onClick={() => inputRef.current?.focus()}
        className={`mt-0 font-mono-pixel text-xs md:text-sm bg-black-300 border-2 pixel-corners-sm p-3 max-h-56 overflow-y-auto cursor-text transition-colors ${
          focused
            ? "border-amber pixel-shadow-sm"
            : "border-espresso hover:border-terracotta"
        }`}
      >
        {history.map((entry) => (
          <div key={entry.id} className="mb-2 last:mb-0">
            <p className="text-amber">
              {TERMINAL_PROMPT}$ {entry.command}
            </p>
            {entry.output.map((line, i) => (
              <p key={i} className="text-white-200 whitespace-pre-wrap">
                {line}
              </p>
            ))}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-amber">{TERMINAL_PROMPT}$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            autoComplete="off"
            spellCheck={false}
            placeholder="type a command…"
            aria-label="Terminal command input"
            className="flex-1 bg-transparent outline-none text-white-100 caret-amber placeholder:text-white-200/40"
          />
          <span
            aria-hidden
            className={`w-2 h-4 bg-amber dark:bg-white ${focused ? "animate-blink" : "opacity-40"}`}
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
