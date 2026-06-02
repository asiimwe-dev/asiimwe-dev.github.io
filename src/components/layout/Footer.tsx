'use client';

import React from 'react';
import { Github, Linkedin, Twitter, Mail, Instagram, MessageCircle, Terminal, Cpu } from 'lucide-react';
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
    <footer className="mt-20 py-20 border-t border-white/5 bg-gradient-to-b from-transparent to-primary/5 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 p-10 opacity-5 pointer-events-none">
        <Cpu size={300} className="text-primary" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div className="text-left space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Terminal size={20} className="text-primary" />
              </div>
              <h3 className="text-2xl font-black tracking-tighter text-white uppercase italic">Initialize Connection</h3>
            </div>
            <p className="text-secondary max-w-md text-sm leading-relaxed">
              Available for architectural consultation, full-stack AI development, and systems engineering projects. Let&apos;s build the next generation of resilient infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-primary hover:bg-primary hover:text-midnight transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="text-right space-y-4">
            <div className="inline-block glass p-6 rounded-2xl border-primary/20 text-left min-w-[280px]">
              <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                 <span className="text-[10px] font-mono font-bold text-primary/40 uppercase tracking-widest">Session_Metadata</span>
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
              <div className="space-y-2">
                 <div className="flex justify-between text-[10px] font-mono">
                   <span className="text-secondary">Uptime:</span>
                   <span className="text-primary">100.0%</span>
                 </div>
                 <div className="flex justify-between text-[10px] font-mono">
                   <span className="text-secondary">Environment:</span>
                   <span className="text-primary">Production</span>
                 </div>
                 <div className="flex justify-between text-[10px] font-mono">
                   <span className="text-secondary">Location:</span>
                   <span className="text-primary">Mbarara, UG</span>
                 </div>
                 <div className="flex justify-between text-[10px] font-mono mt-4 pt-2 border-t border-white/5">
                   <span className="text-secondary">Author:</span>
                   <span className="text-white font-bold">{PERSONAL_INFO.name.toUpperCase()}</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary/40 text-[10px] font-mono uppercase tracking-[0.2em]">
            © 2026 G-OS CORE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/20" />
            <div className="w-2 h-2 rounded-full bg-primary/40" />
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <span className="text-[10px] font-mono text-primary/40 ml-2">SYSTEMS_CHECK_PASSED</span>
          </div>
        </div>
      </div>
      
      <div className="scanline opacity-5" />
    </footer>
  );
};

export default Footer;
