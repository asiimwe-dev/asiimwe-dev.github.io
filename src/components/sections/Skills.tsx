'use client';

import React from 'react';
import Section from '../ui/Section';
import { SKILLS } from '@/data/portfolio';
import { Cpu, Terminal, Code, Settings, Database, Share2, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import SkillRadar from '../ui/SkillRadar';

const Skills = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Languages': return <Code className="text-primary" size={24} />;
      case 'Systems/OS': return <Cpu className="text-primary" size={24} />;
      case 'DevOps': return <Settings className="text-primary" size={24} />;
      case 'Backend': return <Database className="text-primary" size={24} />;
      case 'Networking': return <Share2 className="text-primary" size={24} />;
      default: return <Terminal className="text-primary" size={24} />;
    }
  };

  return (
    <Section id="skills" title="Technical Schematics" icon={<Cpu className="w-8 h-8" />}>
      <div className="grid lg:grid-cols-12 gap-8 items-center mb-12">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <SkillRadar />
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
           <div className="glass-card p-6 rounded-3xl border-primary/20 blueprint-bg">
              <div className="flex items-center gap-3 mb-4">
                <Activity size={20} className="text-primary" />
                <h3 className="text-xl font-bold text-white uppercase tracking-tight italic">System Optimization Profile</h3>
              </div>
              <p className="text-secondary text-sm leading-relaxed mb-6 font-mono">
                &gt; Analyzing multidimensional competency matrix... <br/>
                &gt; Status: ALL_SYSTEMS_OPTIMAL <br/>
                &gt; Core expertise focused on high-performance infrastructure and AI-driven automation.
              </p>
              <div className="flex gap-4">
                <div className="h-1 flex-grow bg-primary/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-primary"
                  />
                </div>
                <span className="text-[10px] font-mono text-primary font-bold">92.4% ADAPTABILITY</span>
              </div>
           </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-8 rounded-[2rem] group relative overflow-hidden blueprint-bg"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl group-hover:border-primary/50 transition-colors" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-2xl group-hover:border-primary/50 transition-colors" />
            
            <div className="mb-6 flex items-center justify-between">
              <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-500">
                {getIcon(skillGroup.category)}
              </div>
              <span className="text-[10px] font-mono text-primary/30 font-bold tracking-tighter uppercase">Comp_Node_{idx + 1}</span>
            </div>
            
            <h3 className="text-xl font-bold mb-6 tracking-tight text-white group-hover:text-primary transition-colors">{skillGroup.category}</h3>
            
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-midnight/50 border border-white/5 rounded-lg text-xs font-mono text-secondary hover:border-primary/30 hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Subtle scanning effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
