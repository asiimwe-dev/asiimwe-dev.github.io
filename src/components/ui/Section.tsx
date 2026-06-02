'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, id, className, title, icon }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("py-24 px-4 max-w-6xl mx-auto scroll-mt-24 relative", className)}
    >
      {title && (
        <div className="relative mb-16">
          <div className="flex items-center gap-4">
            {icon && (
              <div className="p-3 bg-primary/10 rounded-2xl text-primary border border-primary/20 backdrop-blur-sm">
                {icon}
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-primary/40 uppercase tracking-[0.3em] font-bold leading-none mb-1">
                Systems_Module_{id?.toUpperCase() || 'DATA'}
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
                {title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 !== 0 ? 'text-primary' : ''}>{word} </span>
                ))}
              </h2>
            </div>
          </div>
          
          {/* Section Header Decoration */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-primary/20 -z-10" />
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-primary/10 via-transparent to-transparent -z-10 translate-y-8" />
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Vertical Section Indicator */}
      <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent hidden lg:block -ml-8" />
    </motion.section>
  );
};

export default Section;
