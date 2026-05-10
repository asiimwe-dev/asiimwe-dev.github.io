'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-midnight">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8"
      >
        <div className="text-9xl font-black text-white/5 select-none">404</div>
        <div className="absolute inset-0 flex items-center justify-center">
          <AlertTriangle size={80} className="text-primary animate-pulse" />
        </div>
      </motion.div>
      
      <h1 className="text-4xl font-bold mb-4 tracking-tight">System Routing Error</h1>
      <p className="text-secondary max-w-md mb-10 leading-relaxed">
        The requested module or route could not be initialized. It may have been moved, deleted, or never existed in this architecture.
      </p>
      
      <Link 
        href="/"
        className="flex items-center gap-2 bg-primary text-midnight px-8 py-3 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
      >
        <Home size={18} />
        Return to Mainframe
      </Link>

      <div className="mt-20 font-mono text-[10px] text-primary/20 uppercase tracking-[0.2em]">
        Error_Code: ERR_PATH_NOT_FOUND // Sector: 0x0a0f1c
      </div>
    </div>
  );
}
