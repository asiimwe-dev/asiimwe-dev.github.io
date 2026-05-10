'use client';

import React, { useState } from 'react';
import Section from '../ui/Section';
import { Mail, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };

  return (
    <Section id="contact" title="Initialize Connection" icon={<Mail className="w-8 h-8" />}>
      <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
        {/* Decorative blur */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-secondary uppercase tracking-widest">Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-white"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-secondary uppercase tracking-widest">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-white"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-bold text-secondary uppercase tracking-widest">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-white resize-none"
              placeholder="Your engineering inquiry here..."
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting || isSent}
            className="w-full bg-primary text-midnight font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : isSent ? (
              "Message Transmitted!"
            ) : (
              <>
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
