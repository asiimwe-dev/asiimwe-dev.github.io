'use client';

import React from 'react';
import Link from 'next/link';
import { PERSONAL_INFO } from '@/data/portfolio';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="glass px-6 py-3 rounded-full flex items-center gap-8">
        <Link href="#hero" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
        <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
        <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</Link>
        <Link href="#academic" className="text-sm font-medium hover:text-primary transition-colors">Academic</Link>
        <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">Skills</Link>
        <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
