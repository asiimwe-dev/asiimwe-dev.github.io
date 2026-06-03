'use client';

import React, { useState, useRef } from 'react';
import Section from '@/components/ui/Section';
import { Mail, Send, Loader2, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const emailjs = (await import('@emailjs/browser')).default;
      
      await emailjs.sendForm(
        'service_c0nwniu', 
        'template_1hbyewt',
        formRef.current,
        '9iNbL_qYzCE4wmWMX'
      );

      setIsSent(true);
      formRef.current.reset();
      setTimeout(() => setIsSent(false), 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Get in Touch" icon={<Mail className="w-8 h-8" />}>
      <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-3xl border-white/10">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="user_name" className="text-sm font-bold text-white uppercase tracking-widest">Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 focus:outline-none transition-all text-white placeholder:text-white/20"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="user_email" className="text-sm font-bold text-white uppercase tracking-widest">Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 focus:outline-none transition-all text-white placeholder:text-white/20"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-bold text-white uppercase tracking-widest">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 focus:outline-none transition-all text-white resize-none placeholder:text-white/20"
              placeholder="How can I help you?"
            />
          </div>
          
          {error && (
            <p className="text-red-400 text-sm font-medium">{error}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting || isSent}
            className="w-full bg-primary text-midnight font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : isSent ? (
              <>
                <CheckCircle2 size={18} /> Message Sent
              </>
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
