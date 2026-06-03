'use client';

import React from 'react';
import Section from '@/components/ui/Section';
import { ENGINEERING_LOGS } from '@/data/portfolio';
import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const EngineeringLog = () => {
  return (
    <Section id="blog" title="Engineering Insights" icon={<Terminal size={24} />}>
      <div className="space-y-8 max-w-3xl mx-auto">
        {ENGINEERING_LOGS.map((log, idx) => (
          <motion.div
            key={log.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group flex flex-col md:flex-row gap-6 border-b border-white/5 pb-8 hover:bg-white/5 p-4 rounded-xl transition-colors"
          >
            <div className="flex-shrink-0 text-secondary text-sm font-medium pt-1">
              {log.date}
            </div>
            
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                  {log.title}
                </h3>
              </div>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                {log.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {log.tags.map((tag) => (
                  <span key={tag} className="text-[10px] bg-white/5 px-2 py-1 rounded-md text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default EngineeringLog;
