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
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("py-20 px-4 max-w-6xl mx-auto scroll-mt-20", className)}
    >
      {title && (
        <div className="flex items-center gap-4 mb-16">
          {icon && (
            <div className="p-3 bg-white/5 rounded-2xl text-primary border border-white/10">
              {icon}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {title}
          </h2>
        </div>
      )}
      {children}
    </motion.section>
  );
};

export default Section;
