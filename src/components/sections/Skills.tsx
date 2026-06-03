'use client';

import React from 'react';
import Section from '@/components/ui/Section';
import { SKILLS } from '@/data/portfolio';
import { Cpu, Terminal, Code, Settings, Database, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SkillRadar from '@/components/ui/SkillRadar';

const Skills = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Languages': return <Code className="text-primary" size={20} />;
      case 'Systems/OS': return <Cpu className="text-primary" size={20} />;
      case 'DevOps': return <Settings className="text-primary" size={20} />;
      case 'Backend': return <Database className="text-primary" size={20} />;
      case 'Networking': return <Share2 className="text-primary" size={20} />;
      default: return <Terminal className="text-primary" size={20} />;
    }
  };

  return (
    <Section id="skills" title="Technical Competencies" icon={<Cpu className="w-8 h-8" />}>
      <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <SkillRadar />
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
           <div className="glass-card p-8 rounded-3xl border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Strategic Technical Focus</h3>
              <p className="text-secondary text-sm leading-relaxed mb-6">
                I specialize in architecting high-performance systems and AI-driven solutions. My technical profile is designed to solve complex challenges with operational efficiency.
              </p>
              <div className="flex gap-4 items-center">
                <div className="h-1 flex-grow bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-primary"
                  />
                </div>
                <span className="text-xs font-bold text-primary">92% Proficiency</span>
              </div>
           </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-8 rounded-3xl"
          >
            <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl">
              {getIcon(skillGroup.category)}
            </div>
            
            <h3 className="text-lg font-bold mb-4 tracking-tight text-white">{skillGroup.category}</h3>
            
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white/5 rounded-lg text-xs text-secondary hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
