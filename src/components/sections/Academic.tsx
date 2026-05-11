'use client';

import React from 'react';
import Section from '../ui/Section';
import { ACADEMIC } from '@/data/portfolio';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Academic = () => {
  return (
    <Section id="academic" title="Academic Excellence" icon={<GraduationCap className="w-8 h-8" />}>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass-card p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <GraduationCap size={120} />
          </div>
          <h3 className="text-2xl font-bold mb-2">{ACADEMIC.institution}</h3>
          <p className="text-primary font-mono text-lg mb-6">Bachelor of Science in Computer Science</p>
          
          <div className="space-y-4">
             <div className="flex items-start gap-3">
               <Award className="text-accent mt-1 flex-shrink-0" size={20} />
               <div>
                 <p className="font-bold text-white">Academic Achievement: {ACADEMIC.achievement}</p>
                 <p className="text-sm text-secondary">Consistently ranked among the top of the cohort through rigorous problem-solving and theoretical excellence.</p>
               </div>
             </div>
             <div className="flex items-start gap-3">
               <BookOpen className="text-accent mt-1 flex-shrink-0" size={20} />
               <div>
                 <p className="font-bold text-white">Core Competencies</p>
                 <div className="flex flex-wrap gap-2 mt-2">
                    {ACADEMIC.competencies.map((comp) => (
                      <span key={comp} className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-secondary">
                        {comp}
                      </span>
                    ))}
                 </div>
               </div>
             </div>
          </div>
        </div>

        <div className="glass-card p-8 rounded-3xl flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/10 to-transparent">
          <div className="text-4xl font-black text-primary mb-2">{ACADEMIC.achievement.split(' ')[0]}</div>
          <div className="text-sm font-bold uppercase tracking-widest text-secondary">Cumulative GPA</div>
          <div className="mt-6 w-full h-[1px] bg-white/10" />
          <p className="mt-6 text-sm text-secondary italic">
            &quot;Education is the foundation upon which I build sustainable systems.&quot;
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Academic;
