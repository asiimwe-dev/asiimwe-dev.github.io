'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/portfolio';
import { ChevronRight, Cpu, Shield, Zap, Code } from 'lucide-react';
import Image from 'next/image';

const allLogs = [
  "Initializing Gilbert-OS v4.2.0...",
  "Loading neural modules...",
  "Establishing secure link...",
  "System Status: OPTIMAL",
  "Welcome, visitor.",
];

const TerminalConsole = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString([], { hour12: false }));
    setTimeout(updateTime, 0);
    
    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < allLogs.length) {
        setLogs(prev => [...prev, allLogs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto bg-black/80 rounded-lg border border-primary/20 p-4 font-mono text-[10px] md:text-xs text-primary/80 shadow-[0_0_20px_rgba(56,189,248,0.1)] relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="flex gap-1.5 mb-3 border-b border-primary/10 pb-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
        <span className="ml-2 text-[8px] uppercase tracking-widest text-primary/40">system_console</span>
      </div>
      <div className="space-y-1 h-32 overflow-hidden">
        {logs.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-start gap-2"
          >
            <span className="text-primary/30 shrink-0">[{time}]</span>
            <span className={log.includes('OPTIMAL') ? 'text-green-400' : ''}>$ {log}</span>
          </motion.div>
        ))}
        {logs.length < allLogs.length && (
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-2 h-4 bg-primary/40"
          />
        )}
      </div>
      <div className="scanline" />
    </div>
  );
};

interface BadgeProps {
  icon: React.ElementType;
  delay: number;
  x: string;
  y: string;
  label: string;
}

const FloatingBadge = ({ icon: Icon, delay, x, y, label }: BadgeProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0, 1, 0.8],
      y: ["-10%", "10%", "-10%"],
    }}
    transition={{ 
      delay, 
      duration: 5, 
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute hidden lg:flex flex-col items-center gap-1 group z-20"
    style={{ left: x, top: y }}
  >
    <div className="p-3 bg-midnight/80 border border-primary/20 rounded-xl backdrop-blur-md group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-300">
      <Icon size={20} className="text-primary" />
    </div>
    <span className="text-[10px] uppercase tracking-tighter text-primary/40 font-bold group-hover:text-primary transition-colors">{label}</span>
  </motion.div>
);

interface RainColumn {
  delay: string;
  duration: string;
  chars: string;
}

const BinaryRain = () => {
  const [rainData, setRainData] = useState<RainColumn[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const generateRain = () => {
      // Significantly reduce density: increase spacing from 60px to 120px
      const columns = Math.floor(window.innerWidth / 120);
      const data = Array.from({ length: columns }).map(() => ({
        delay: `${(Math.random() * 5).toFixed(2)}s`,
        duration: `${(8 + Math.random() * 10).toFixed(2)}s`,
        // Reduce number of characters per column from 15 to 8
        chars: Array.from({ length: 8 }).map(() => Math.round(Math.random())).join('')
      }));
      setRainData(data);
      setMounted(true);
    };

    const timeout = setTimeout(generateRain, 100);
    window.addEventListener('resize', generateRain);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', generateRain);
    };
  }, []);


  if (!mounted || rainData.length === 0) return <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none select-none" />;

  return (
    <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none select-none flex justify-around">
      {rainData.map((col, i) => (
        <div 
          key={i} 
          className="binary-rain-column flex flex-col text-[10px] leading-none text-primary whitespace-nowrap"
          style={{ 
            animationDelay: col.delay, 
            animationDuration: col.duration,
            willChange: 'transform, opacity'
          }}
        >
          {col.chars.split('').map((char, j) => (
            <span key={j} className="py-1">{char}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-20 overflow-hidden">
      <BinaryRain />
      
      <div className="relative w-full max-w-6xl mx-auto z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System Status: Operational
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-tight"
          >
            {PERSONAL_INFO.name.split(' ')[0]} <br/>
            <span className="text-gradient">{PERSONAL_INFO.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-secondary max-w-xl mb-10 font-medium leading-relaxed"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-3 bg-primary text-midnight px-8 py-4 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
            >
              Access Grid
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Export CV
            </a>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-primary/30 p-2 bg-midnight/50 backdrop-blur-xl relative group">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                <Image
                  src="/assets/me.jpg"
                  alt={PERSONAL_INFO.name}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              
              {/* Profile Glow */}
              <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full" />
            </motion.div>

            {/* Floating Badges */}
            <FloatingBadge icon={Cpu} delay={0.5} x="-15%" y="10%" label="Systems" />
            <FloatingBadge icon={Code} delay={1.2} x="90%" y="-5%" label="Fullstack" />
            <FloatingBadge icon={Zap} delay={0.8} x="85%" y="70%" label="AI" />
            <FloatingBadge icon={Shield} delay={1.5} x="-10%" y="60%" label="Security" />

            {/* Terminal Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -bottom-12 -left-12 hidden md:block z-30"
            >
              <TerminalConsole />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/40"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll to Initialize</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-0.5 h-8 bg-gradient-to-b from-primary/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
