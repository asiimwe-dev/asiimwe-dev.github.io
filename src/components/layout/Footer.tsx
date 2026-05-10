'use client';

import React from 'react';
import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio';

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: PERSONAL_INFO.github, label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: PERSONAL_INFO.twitter, label: 'Twitter' },
    { icon: <Mail className="w-5 h-5" />, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
    { icon: <Instagram className="w-5 h-5" />, href: PERSONAL_INFO.instagram, label: 'Instagram' },
  ];

  return (
    <footer className="mt-20 py-10 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold mb-6 text-secondary">Let's Connect 🤝</h3>
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-primary/50 text-primary hover:bg-primary hover:text-midnight transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mb-4" />
          <p className="text-secondary text-sm">
            Built with passion by {PERSONAL_INFO.name} • 2026
          </p>
          <p className="text-secondary/50 text-xs mt-2">
            Designed & developed with modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
