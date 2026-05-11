'use client';

import React from 'react';
import Section from '../ui/Section';
import { User, Cpu } from 'lucide-react';

const About = () => {
  return (
    <Section id="about" title="Engineering Mindset" icon={<User className="w-8 h-8" />}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-lg text-secondary leading-relaxed">
          <p>
            Hello! I&apos;m <span className="text-white font-semibold">Asiimwe Gilbert</span>, a Systems Engineer with a deep passion for architecting solutions that bridge the gap between complex technology and regional socio-economic needs.
          </p>
          <p>
            My journey is driven by the <span className="text-primary italic">Systems Mindset</span>: viewing every problem not just as a bug to be fixed, but as a component in a larger ecosystem. Whether it&apos;s optimizing energy grids or digitizing agricultural supply chains, I focus on scalability, security, and impact.
          </p>
          <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary">
            <p className="text-sm italic">
              &quot;Building technology isn&apos;t just about code; it&apos;s about engineering systems that empower communities and drive economic evolution.&quot;
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square glass-card rounded-3xl flex items-center justify-center p-8 overflow-hidden group">
            <Cpu className="w-32 h-32 text-primary/20 group-hover:text-primary/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-midnight/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <h4 className="text-primary font-bold mb-2">Technical Core</h4>
               <p className="text-sm">Specializing in Full-Stack AI, Linux Kernel management, and Distributed Systems.</p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
        </div>
      </div>
    </Section>
  );
};

export default About;
