'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/portfolio';
import { Terminal, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const BinaryRain = () => {
  const [columns, setColumns] = useState<number>(20);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setColumns(Math.floor(window.innerWidth / 60));
    };
    
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none select-none" />;

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none select-none flex justify-around">
      {Array.from({ length: columns }).map((_, i) => (
        <div key={i} className="flex flex-col text-[10px] leading-none text-primary whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, j) => (
            <motion.span
              key={j}
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, 40, 80],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
              style={{ willChange: "transform, opacity" }}
            >
              {Math.round(Math.random())}
            </motion.span>
          ))}
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-height-[90vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 overflow-hidden">
      <BinaryRain />
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative mb-8"
      >
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_30px_rgba(56,189,248,0.5)] relative">
          <Image
            src="/assets/me.jpg"
            alt={PERSONAL_INFO.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
            priority
          />
        </div>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -bottom-2 -right-2 bg-primary text-midnight p-2 rounded-full z-10"
        >
          <Terminal size={20} />
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tighter"
      >
        {PERSONAL_INFO.name.split(' ')[0]} <span className="text-gradient">{PERSONAL_INFO.name.split(' ')[1]}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-xl md:text-2xl text-secondary max-w-2xl mb-10 font-medium leading-relaxed"
      >
        {PERSONAL_INFO.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a
          href="#projects"
          className="group flex items-center gap-2 bg-primary text-midnight px-8 py-3 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
        >
          View Projects
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href={PERSONAL_INFO.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 border border-white/10 px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
        >
          Download CV
        </a>
        <a
          href="#blog"
          className="bg-midnight border border-primary/30 text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-midnight transition-all duration-300 flex items-center gap-2"
        >
          Engineering Log
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
