'use client';

import React from 'react';
import Section from '../ui/Section';
import { PROJECTS, Project } from '@/data/portfolio';
import { LayoutGrid, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const getProjectTheme = (id: string) => {
  if (id.includes('farmer')) return 'border-agri/20 hover:border-agri/50 text-agri';
  if (id.includes('petro')) return 'border-energy/20 hover:border-energy/50 text-energy';
  return 'border-primary/20 hover:border-primary/50 text-primary';
};

const getProjectAccent = (id: string) => {
  if (id.includes('farmer')) return 'bg-agri';
  if (id.includes('petro')) return 'bg-energy';
  return 'bg-primary';
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isLarge = index === 0; // First project is large
  const theme = getProjectTheme(project.id);
  const accent = getProjectAccent(project.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`glass-card rounded-3xl overflow-hidden group relative flex flex-col ${isLarge ? 'md:col-span-2 md:row-span-2' : ''} ${theme.split(' ')[0]} ${theme.split(' ')[1]}`}
    >
      <div className={`relative ${isLarge ? 'h-64 md:h-full' : 'h-48'} overflow-hidden`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent z-10" />
        
        {/* Project Info Overlay */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
          <div className="flex items-center gap-3 mb-4">
             <div className={`p-3 rounded-2xl bg-midnight/80 backdrop-blur-md border border-white/10 text-2xl`}>
               {project.icon}
             </div>
             <div>
               <h3 
                 className={`text-2xl font-black tracking-tighter text-white group-hover:text-primary transition-colors glitch-text`}
                 data-text={project.title}
               >
                 {project.title}
               </h3>
               <p className={`text-[10px] uppercase tracking-[0.2em] font-bold opacity-60`}>Project_Module_{index + 1}</p>
             </div>
          </div>
          
          <p className={`text-secondary text-sm leading-relaxed ${isLarge ? 'max-w-xl' : 'line-clamp-2'} mb-6 group-hover:text-white transition-colors`}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-1 rounded text-secondary/80">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-white/80 hover:text-primary transition-colors"
              >
                <ExternalLink size={14} /> Deploy
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-xs font-bold text-white/80 hover:text-primary transition-colors"
              >
                <Github size={14} /> Source
              </a>
            )}
            <div className="ml-auto">
               <div className={`h-1 w-12 rounded-full ${accent} opacity-20 group-hover:opacity-100 transition-all group-hover:w-24`} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scanline effect */}
      <div className="scanline opacity-5" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <Section id="projects" title="Engineering Grid" icon={<LayoutGrid className="w-8 h-8" />}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
