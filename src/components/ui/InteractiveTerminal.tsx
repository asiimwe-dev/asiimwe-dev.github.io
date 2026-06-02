'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';

const BOOT_LOGS = [
  "Initializing Gilbert-OS v4.2.0...",
  "Loading neural modules...",
  "Establishing secure link...",
  "System Status: OPTIMAL",
  "Welcome, visitor.",
  "Type 'help' to see available commands."
];

const COMMANDS: Record<string, string> = {
  help: "Available commands: ls, whoami, specs, clear, contact",
  ls: "projects/  academic/  skills/  logs/",
  whoami: "Asiimwe Gilbert | AI Full-Stack & Systems Engineer",
  specs: "OS: Gilbert-OS v4.2.0 | CPU: Neural Core i9 | Uptime: Constant",
  contact: "Email: gilbertasiimwe00@gmail.com | LinkedIn: gilbert-asiimwe",
  projects: "Executing project grid initialization... scroll down to view."
};

const InteractiveTerminal = () => {
  const [history, setLogs] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [isBooting, setIsBooting] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < BOOT_LOGS.length) {
        setLogs(prev => [...prev, BOOT_LOGS[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setIsBooting(false);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (!cmd) return;

    if (cmd === 'clear') {
      setLogs([]);
    } else {
      const response = COMMANDS[cmd] || `Command not found: ${cmd}. Type 'help' for assistance.`;
      setLogs(prev => [...prev, `$ ${input}`, response]);
    }
    setInput("");
  };

  return (
    <div 
      className="w-full max-w-lg mx-auto bg-black/90 rounded-xl border border-primary/20 p-4 font-mono text-[10px] md:text-xs text-primary/80 shadow-[0_0_30px_rgba(56,189,248,0.15)] relative overflow-hidden group min-h-[200px] flex flex-col"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Terminal Header */}
      <div className="flex items-center justify-between mb-3 border-b border-primary/10 pb-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
        </div>
        <div className="flex items-center gap-2">
          <TerminalIcon size={10} className="text-primary/40" />
          <span className="text-[8px] uppercase tracking-widest text-primary/40 font-bold">gilbert_sh — 80x24</span>
        </div>
      </div>

      {/* Output Area */}
      <div 
        ref={scrollRef}
        className="flex-grow space-y-1 overflow-y-auto no-scrollbar mb-2 pr-2"
      >
        <AnimatePresence mode="popLayout">
          {history.map((log, i) => (
            <motion.div
              key={`${log}-${i}`}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start gap-2"
            >
              <span className="text-primary/30 shrink-0">[{new Date().toLocaleTimeString([], { hour12: false, minute: '2-digit', second: '2-digit' })}]</span>
              <span className={log.includes('OPTIMAL') || log.startsWith('$') ? 'text-white' : 'text-primary/70'}>
                {log}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      {!isBooting && (
        <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 border-t border-primary/5">
          <span className="text-green-400 font-bold shrink-0">visitor@gilbert-os:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none text-white w-full p-0 caret-primary"
            autoFocus
            spellCheck={false}
          />
        </form>
      )}

      {/* Scanline & Glow */}
      <div className="scanline opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};

export default InteractiveTerminal;
