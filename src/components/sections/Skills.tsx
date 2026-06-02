'use client';

import React from 'react';
import Section from '../ui/Section';
import { SKILLS } from '@/data/portfolio';
import { Cpu, Terminal, ShieldCheck, Binary, Cog, Database, Network } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Languages': return <Binary className="text-primary" size={24} />;
      case 'Systems/OS': return <Cpu className="text-primary" size={24} />;
      case 'DevOps': return <Cog className="text-primary" size={24} />;
      case 'Backend': return <Database className="text-primary" size={24} />;
      case 'Networking': return <Network className="text-primary" size={24} />;
      default: return <Terminal className="text-primary" size={24} />;
    }
  };

  return (
    <Section id="skills" title="Technical Schematics" icon={<Cpu className="w-8 h-8" />}>
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
