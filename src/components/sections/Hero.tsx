'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/portfolio';
import { ChevronRight, Cpu, Shield, Zap, Code } from 'lucide-react';
import Image from 'next/image';

interface BadgeProps {
  icon: React.ElementType;
  label: string;
}

const FeatureBadge = ({ icon: Icon, label }: BadgeProps) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
    <Icon size={16} className="text-primary" />
    <span className="text-xs font-medium text-white">{label}</span>
  </div>
);

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
      <div className="relative w-full max-w-4xl mx-auto z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-8"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/10 p-1 relative">
            <Image
              src="/assets/me.jpg"
              alt={PERSONAL_INFO.name}
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          {PERSONAL_INFO.name.split(' ')[0]} <span className="text-primary">{PERSONAL_INFO.name.split(' ')[1]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-secondary max-w-2xl mb-10 leading-relaxed"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <FeatureBadge icon={Cpu} label="Systems Engineering" />
          <FeatureBadge icon={Code} label="Fullstack Development" />
          <FeatureBadge icon={Zap} label="AI Innovation" />
          <FeatureBadge icon={Shield} label="Scalable Architecture" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 bg-primary text-midnight px-8 py-3 rounded-full font-bold hover:bg-white transition-all duration-300"
          >
            View Work
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 border border-white/10 px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
