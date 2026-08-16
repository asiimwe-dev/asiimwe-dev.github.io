"use client";

import React from "react";
import Section from "@/components/ui/Section";
import { User, Cpu, GraduationCap, Target, Award, Brain } from "lucide-react";
import { ACADEMIC } from "@/data/portfolio";
import { motion } from "framer-motion";

interface SpecItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

const SpecItem = ({ icon: Icon, label, value }: SpecItemProps) => (
  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors group">
    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
      <Icon size={16} className="text-primary" />
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-widest text-primary/40 font-bold">
        {label}
      </p>
      <p className="text-sm font-mono text-secondary group-hover:text-white transition-colors">
        {value}
      </p>
    </div>
  </div>
);

const About = () => {
  return (
    <Section
      id="about"
      title="Engineering Mindset"
      icon={<Brain className="w-8 h-8" />}
    >
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* The Persona - Bio */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-secondary leading-relaxed"
          >
            <p>
              Hello! I&apos;m{" "}
              <span className="text-white font-bold tracking-tight">
                Asiimwe Gilbert
              </span>
              , a Systems Engineer dedicated to architecting high-performance
              solutions for regional socio-economic challenges.
            </p>
            <p>
              My methodology is defined by the{" "}
              <span className="text-primary font-mono italic">
                Systems Mindset
              </span>
              : treating every challenge as an interconnected node within a
              larger ecosystem. I prioritize{" "}
              <span className="text-white">scalability</span>,{" "}
              <span className="text-white">security</span>, and{" "}
              <span className="text-white">operational efficiency</span>.
            </p>

            <div className="relative p-8 rounded-3xl bg-linear-to-br from-primary/10 to-transparent border border-primary/20 overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target size={80} className="text-primary" />
              </div>
              <p className="relative z-10 text-xl font-medium italic text-primary/90 leading-snug">
                &quot;Engineering is not just about writing code; it&apos;s
                about designing resilient systems that serve as the backbone for
                community empowerment and economic evolution.&quot;
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-[1px] w-8 bg-primary/40" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/60">
                  Gilbert-OS Core Philosophy
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Machine - System Specs */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-[2rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
                <Cpu size={24} className="text-primary animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  System Specs
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-primary/40 font-bold leading-none">
                  Identity: gilbert_asiimwe.sys
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <SpecItem
                icon={GraduationCap}
                label="Academic Core"
                value={ACADEMIC.institution}
              />
              <SpecItem
                icon={Award}
                label="Performance Metric"
                value={`${ACADEMIC.achievement} CGPA`}
              />
              <SpecItem
                icon={Target}
                label="Core Focus"
                value="AI & Distributed Systems"
              />
              <SpecItem
                icon={User}
                label="Status"
                value="Senior CS Student (MUST)"
              />
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-widest text-primary/40 font-bold mb-4">
                Competency Nodes
              </p>
              <div className="flex flex-wrap gap-2">
                {ACADEMIC.competencies.map((comp) => (
                  <span
                    key={comp}
                    className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-mono text-secondary hover:text-primary hover:border-primary/30 transition-all"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Scanline effect for that CRT feel */}
            <div className="scanline" />
          </motion.div>

          {/* Decorative background element */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-20" />
        </div>
      </div>
    </Section>
  );
};

export default About;
