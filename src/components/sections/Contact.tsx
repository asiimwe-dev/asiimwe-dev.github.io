'use client';

import React, { useState, useRef } from 'react';
import Section from '../ui/Section';
import { Mail, Send, Loader2, CheckCircle2, ShieldCheck, Wifi, Cpu } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
      setError('UPLINK_FAILURE: Protocol handshake timed out. Please retry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Establish Uplink" icon={<Mail className="w-8 h-8" />}>
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Metadata Sidebar */}
          <div className="lg:col-span-2 space-y-4">
             <div className="glass-card p-6 rounded-2xl border-primary/20 blueprint-bg">
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                  <span className="text-[10px] font-mono font-bold text-primary/40 uppercase tracking-widest">Uplink_Status</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-3 bg-primary animate-pulse" />
                    <div className="w-1 h-3 bg-primary/40" />
                    <div className="w-1 h-3 bg-primary/20" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={14} className="text-primary/60" />
                    <span className="text-[10px] font-mono text-secondary">Encryption: <span className="text-primary">AES-256</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wifi size={14} className="text-primary/60" />
                    <span className="text-[10px] font-mono text-secondary">Signal: <span className="text-primary">STABLE</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cpu size={14} className="text-primary/60" />
                    <span className="text-[10px] font-mono text-secondary">Buffer: <span className="text-primary">READY</span></span>
                  </div>
                </div>
             </div>

             <div className="glass-card p-6 rounded-2xl border-primary/20 bg-primary/5">
                <p className="text-[10px] font-mono text-primary leading-relaxed">
                  &gt; INITIALIZING SECURE COMMUNICATION PROTOCOL... <br/>
                  &gt; AWAITING INPUT PARITY... <br/>
                  &gt; READY FOR TRANSMISSION.
                </p>
             </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-3 glass-card p-8 rounded-[2rem] relative overflow-hidden group">
            <div className="scanline opacity-5" />
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-[10px] font-mono font-bold text-primary/40 uppercase tracking-widest ml-1">Identity_Name</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all text-white font-mono text-sm placeholder:text-white/10"
                    placeholder="Enter_Identity..."
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-[10px] font-mono font-bold text-primary/40 uppercase tracking-widest ml-1">Uplink_Address</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all text-white font-mono text-sm placeholder:text-white/10"
                    placeholder="name@domain.sys"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-mono font-bold text-primary/40 uppercase tracking-widest ml-1">Payload_Data</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all text-white font-mono text-sm resize-none placeholder:text-white/10"
                  placeholder="Enter_Secure_Payload..."
                />
              </div>
              
              {error && (
                <p className="text-red-400 font-mono text-[10px] uppercase tracking-wider animate-pulse border border-red-500/20 p-2 rounded bg-red-500/5">
                  [!] ERROR: {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting || isSent}
                className="w-full bg-primary text-midnight font-mono font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group shadow-[0_0_20px_rgba(56,189,248,0.2)]"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : isSent ? (
                  <>
                    <CheckCircle2 size={18} /> DATA_TRANSMITTED
                  </>
                ) : (
                  <>
                    INITIALIZE_TRANSMISSION <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
