'use client';

import React from 'react';
import Section from '../ui/Section';
import { ENGINEERING_LOGS } from '@/data/portfolio';
import { Terminal, Calendar, ArrowUpRight, Hash } from 'lucide-react';
import { motion } from 'framer-motion';

const EngineeringLog = () => {
  return (
    <Section id="blog" title="Console Output" icon={<Terminal className="w-8 h-8" />}>
      <div className="space-y-4 max-w-5xl mx-auto">
        {ENGINEERING_LOGS.map((log, idx) => (
          <motion.div
            key={log.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-4 md:p-6 rounded-2xl group border-l-2 border-l-primary/30 hover:border-l-primary transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-3 min-w-[140px]">
                <span className="text-primary font-mono text-xs font-bold">[LOG]</span>
                <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">{log.date}</span>
              </div>
              
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h3 className="text-base md:text-lg font-mono font-bold text-white group-hover:text-primary transition-colors tracking-tight">
                    {log.title}
                  </h3>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-mono text-primary/40">READ_MORE</span>
                    <ArrowUpRight size={16} className="text-primary" />
                  </div>
                </div>
                
                <p className="text-secondary text-xs md:text-sm mt-1 mb-4 font-mono leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  &gt; {log.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {log.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-[10px] font-mono text-primary/60 hover:text-primary transition-colors cursor-default">
                      <span className="text-primary/30">--</span>{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Very subtle scanline for individual entries */}
            <div className="scanline opacity-5" />
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 flex flex-col items-center gap-4">
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <p className="text-secondary text-[10px] font-mono uppercase tracking-[0.3em] animate-pulse">
          End of Buffer | Awaiting Next Input
        </p>
      </div>
    </Section>
  );
};

export default EngineeringLog;
