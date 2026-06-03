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
      <div className="glass px-4 py-2 rounded-full flex items-center gap-4 max-w-full overflow-x-auto no-scrollbar border-white/10 shadow-lg">
        {navLinks.map((link) => (
          <Link 
            key={link.href}
            href={link.href} 
            className="group flex items-center gap-2 text-xs font-bold text-secondary hover:text-primary transition-all px-3 py-1.5 rounded-full"
          >
            <span className="text-primary/60 group-hover:text-primary transition-colors">
              {link.icon}
            </span>
            <span className="tracking-widest">{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
