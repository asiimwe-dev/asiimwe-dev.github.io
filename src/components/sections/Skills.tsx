'use client';

import React from 'react';
import Section from '../ui/Section';
import { SKILLS } from '@/data/portfolio';
import { Cpu, Terminal, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Languages': return <Terminal className="text-primary" size={24} />;
      case 'Systems/OS': return <Cpu className="text-primary" size={24} />;
      case 'DevOps': return <ShieldCheck className="text-primary" size={24} />;
      default: return <Terminal className="text-primary" size={24} />;
    }
  };

  return (
    <Section id="skills" title="Core Competencies" icon={<Cpu className="w-8 h-8" />}>
      <div className="grid md:grid-cols-3 gap-8">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-8 rounded-3xl group"
          >
            <div className="mb-6 p-3 bg-white/5 w-fit rounded-2xl group-hover:bg-primary/10 transition-colors duration-300">
              {getIcon(skillGroup.category)}
            </div>
            <h3 className="text-xl font-bold mb-6">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-midnight border border-white/5 rounded-xl text-sm text-secondary hover:border-primary/50 hover:text-white transition-all duration-300 cursor-default"
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
