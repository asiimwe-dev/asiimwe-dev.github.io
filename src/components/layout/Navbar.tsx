'use client';

import React from 'react';
import Link from 'next/link';
import { Home, User, LayoutGrid, GraduationCap, Cpu, Mail, Terminal } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { href: '#hero', label: 'HOME', icon: <Home size={14} /> },
    { href: '#about', label: 'ABOUT', icon: <User size={14} /> },
    { href: '#projects', label: 'GRID', icon: <LayoutGrid size={14} /> },
    { href: '#academic', label: 'CORE', icon: <GraduationCap size={14} /> },
    { href: '#skills', label: 'STACK', icon: <Cpu size={14} /> },
    { href: '#blog', label: 'LOG', icon: <Terminal size={14} /> },
    { href: '#contact', label: 'LINK', icon: <Mail size={14} /> },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="glass px-2 md:px-4 py-2 rounded-2xl flex items-center gap-1 md:gap-4 max-w-full overflow-x-auto no-scrollbar border-primary/20 shadow-[0_0_20px_rgba(56,189,248,0.1)]">
        {/* System Prefix */}
        <div className="hidden md:flex items-center gap-2 px-3 border-r border-white/10 mr-2 group/version">
           <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
           <span className="text-[10px] font-mono font-bold text-primary/60 tracking-widest glitch-text" data-text="G-OS v4.2">G-OS v4.2</span>
        </div>

        {navLinks.map((link) => (
          <Link 
            key={link.href}
            href={link.href} 
            className="group flex items-center gap-2 text-[10px] md:text-xs font-mono font-bold text-secondary hover:text-primary transition-all px-3 py-1.5 rounded-xl hover:bg-primary/10"
          >
            <span className="text-primary/40 group-hover:text-primary transition-colors">
              {link.icon}
            </span>
            <span className="tracking-tighter">{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
