'use client';

import React from 'react';
import Section from '../ui/Section';
import { PROJECTS, Project } from '@/data/portfolio';
import { LayoutGrid, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-500"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent opacity-60 z-10" />
        <div className="absolute top-4 left-4 text-3xl z-20">{project.icon}</div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-secondary text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] uppercase tracking-wider font-bold bg-white/5 border border-white/10 px-2 py-1 rounded text-secondary group-hover:border-primary/30 transition-colors">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-primary hover:text-white transition-colors"
            >
              Live Demo <ExternalLink size={14} />
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-xs font-bold text-secondary hover:text-white transition-colors"
            >
              GitHub <Github size={14} />
            </a>
          )}
          <button className="ml-auto text-[10px] text-primary/50 hover:text-primary font-mono uppercase tracking-tighter transition-colors">
            [Architecture]
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <Section id="projects" title="Engineering Grid" icon={<LayoutGrid className="w-8 h-8" />}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
