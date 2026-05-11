'use client';

import React from 'react';
import Link from 'next/link';
import { Home, User, LayoutGrid, GraduationCap, Cpu, BookText, Mail } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { href: '#hero', label: 'Home', icon: <Home size={18} /> },
    { href: '#about', label: 'About', icon: <User size={18} /> },
    { href: '#projects', label: 'Projects', icon: <LayoutGrid size={18} /> },
    { href: '#academic', label: 'Academic', icon: <GraduationCap size={18} /> },
    { href: '#skills', label: 'Skills', icon: <Cpu size={18} /> },
    { href: '#blog', label: 'Log', icon: <BookText size={18} /> },
    { href: '#contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="glass px-4 md:px-6 py-3 rounded-full flex items-center gap-2 md:gap-8 max-w-[95vw] overflow-x-auto no-scrollbar">
        {navLinks.map((link) => (
          <Link 
            key={link.href}
            href={link.href} 
            className="group flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors whitespace-nowrap px-2"
          >
            <span className="md:hidden text-primary group-hover:scale-110 transition-transform">
              {link.icon}
            </span>
            <span className="hidden md:inline">{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
