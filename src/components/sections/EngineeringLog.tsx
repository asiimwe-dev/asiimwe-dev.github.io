'use client';

import React from 'react';
import Section from '../ui/Section';
import { ENGINEERING_LOGS } from '@/data/portfolio';
import { BookText, Calendar, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const EngineeringLog = () => {
  return (
    <Section id="blog" title="Engineering Log" icon={<BookText className="w-8 h-8" />}>
      <div className="space-y-6 max-w-4xl mx-auto">
        {ENGINEERING_LOGS.map((log, idx) => (
          <motion.div
            key={log.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-6 md:p-8 rounded-3xl group flex flex-col md:flex-row gap-6 hover:bg-white/5 transition-all duration-300"
          >
            <div className="flex-shrink-0 flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-0 text-secondary border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-8 md:min-w-[120px]">
              <Calendar size={14} className="mb-0 md:mb-2" />
              <span className="text-xs font-bold uppercase tracking-widest">{log.date}</span>
            </div>
            
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{log.title}</h3>
                <ArrowUpRight size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-secondary text-sm mb-4 leading-relaxed">
                {log.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {log.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-primary/70 bg-primary/5 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-secondary text-sm italic">
          More technical logs coming soon. System expansion in progress...
        </p>
      </div>
    </Section>
  );
};

export default EngineeringLog;
