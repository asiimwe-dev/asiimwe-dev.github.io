'use client';

import React from 'react';
import { Github, Linkedin, Twitter, Mail, Instagram, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={18} />, href: PERSONAL_INFO.github, label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
    { icon: <Twitter size={18} />, href: PERSONAL_INFO.twitter, label: 'Twitter' },
    { icon: <Mail size={18} />, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
    { icon: <Instagram size={18} />, href: PERSONAL_INFO.instagram, label: 'Instagram' },
    { icon: <MessageCircle size={18} />, href: PERSONAL_INFO.whatsapp, label: 'WhatsApp' },
  ];

  return (
    <footer className="mt-20 py-20 border-t border-white/5 bg-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left space-y-4">
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Asiimwe Gilbert</h3>
            <p className="text-secondary text-sm max-w-sm">
              Systems Engineer & AI Developer building for the future.
            </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center text-secondary text-xs">
          <p>© 2026 Asiimwe Gilbert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
