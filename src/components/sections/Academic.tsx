'use client';

import React from 'react';
import Section from '@/components/ui/Section';
import { ACADEMIC } from '@/data/portfolio';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Academic = () => {
  return (
    <Section id="academic" title="Academic Profile" icon={<GraduationCap className="w-8 h-8" />}>
      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 glass-card p-8 rounded-[2rem] relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white tracking-tight">
              {ACADEMIC.institution}
            </h3>
            <p className="text-primary font-medium text-sm md:text-base mb-8">
              Bachelor of Science in Computer Science
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
               <div className="space-y-4">
                 <h4 className="text-sm font-bold text-white uppercase tracking-wider">Competencies</h4>
                 <div className="flex flex-wrap gap-2">
                    {ACADEMIC.competencies.map((comp) => (
                      <span key={comp} className="text-xs bg-white/5 px-3 py-1.5 rounded-lg text-secondary">
                        {comp}
                      </span>
                    ))}
                 </div>
               </div>
               
               <div className="space-y-4">
                 <h4 className="text-sm font-bold text-white uppercase tracking-wider">Achievement</h4>
                 <p className="text-sm text-secondary leading-relaxed">
                   Consistent academic performance with a focus on theoretical foundations and practical application in systems design.
                 </p>
               </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-[2rem] flex flex-col justify-center items-center text-center bg-white/5 border-white/10"
        >
          <div className="text-5xl font-bold text-white mb-2">{ACADEMIC.achievement.split(' ')[0]}</div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Cumulative GPA</div>
          
          <p className="mt-8 text-sm text-secondary italic leading-relaxed opacity-70">
            &quot;Education is the foundation for sustainable innovation.&quot;
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default Academic;
