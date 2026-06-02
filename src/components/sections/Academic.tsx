'use client';

import React from 'react';
import Section from '../ui/Section';
import { ACADEMIC } from '@/data/portfolio';
import { GraduationCap, Award, Activity, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Academic = () => {
  return (
    <Section id="academic" title="Core Processing" icon={<Cpu className="w-8 h-8" />}>
      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 glass-card p-8 rounded-[2rem] relative overflow-hidden group blueprint-bg"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <GraduationCap size={200} className="text-primary" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-mono text-primary/40 font-bold uppercase tracking-widest">Institution_Primary</span>
              <div className="h-[1px] flex-grow bg-white/5" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black mb-2 text-white group-hover:text-primary transition-colors tracking-tight">
              {ACADEMIC.institution}
            </h3>
            <p className="text-primary font-mono text-sm md:text-base mb-8 uppercase tracking-tighter">
              &gt; Bachelor of Science in Computer Science
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-10">
               <div className="space-y-4">
                 <div className="flex items-center gap-2 mb-2">
                   <Activity size={14} className="text-primary/60" />
                   <span className="text-[10px] font-mono font-bold text-primary/40 uppercase tracking-widest">Instruction_Set</span>
                 </div>
                 <div className="flex flex-wrap gap-2">
                    {ACADEMIC.competencies.map((comp) => (
                      <span key={comp} className="text-[10px] font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-secondary hover:border-primary/30 hover:text-white transition-all">
                        {comp}
                      </span>
                    ))}
                 </div>
               </div>
               
               <div className="space-y-4">
                 <div className="flex items-center gap-2 mb-2">
                   <Award size={14} className="text-primary/60" />
                   <span className="text-[10px] font-mono font-bold text-primary/40 uppercase tracking-widest">Achievement_Log</span>
                 </div>
                 <p className="text-xs font-mono text-secondary leading-relaxed">
                   Consistently executing at peak efficiency within the top 5% of the processing pool. Optimized for complex algorithmic analysis and theoretical architecture.
                 </p>
               </div>
            </div>
          </div>
          
          <div className="scanline opacity-5" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-[2rem] flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/10 to-transparent border-primary/20 group overflow-hidden"
        >
          <div className="relative mb-6">
            <div className="text-6xl font-black text-white group-hover:text-primary transition-colors tracking-tighter">{ACADEMIC.achievement.split(' ')[0]}</div>
            <div className="absolute -top-4 -right-4 text-[10px] font-mono text-primary font-bold animate-pulse">LIVE_GPA</div>
          </div>
          <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-secondary/60">Cumulative Performance Index</div>
          
          <div className="mt-8 w-full h-[1px] bg-white/5 relative">
            <div className="absolute inset-0 bg-primary/20 w-3/4 animate-shimmer" />
          </div>
          
          <p className="mt-8 text-xs font-mono text-secondary italic leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
            &quot;Education is the kernel upon which I build scalable, high-fidelity systems.&quot;
          </p>
          
          <div className="scanline opacity-5" />
        </motion.div>
      </div>
    </Section>
  );
};

export default Academic;
