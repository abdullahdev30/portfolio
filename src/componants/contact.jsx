"use client"
import React from 'react';
import { Send, Globe, Share2, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-background px-6 py-24 border-t border-white/5">
      <div className="mx-auto max-w-4xl flex flex-col items-center">
        
        {/* --- Header Section --- */}
        <div className="mb-16 text-center">
          <p className="text-xl font-bold text-[#f27f0c] uppercase tracking-[0.3em] mb-3">
            Contact Me
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-t-primary leading-[1.1] tracking-tighter">
            Let's build something <br />
            <span className="text-[#f27f0c] underline decoration-white/10 underline-offset-8">extraordinary</span> together.
          </h2>
        </div>

        {/* --- Centralized Contact Form Container --- */}
        <div className="w-full max-w-2xl">
          <div 
            className="bg-secondary p-8 md:p-12 rounded-[2.5rem] border border-white/5 transition-all duration-700 ease-out cursor-default
                       /* THE COMPLETE FORM GLOW ON HOVER */
                       hover:border-[#f27f0c] 
                       hover:shadow-[0_0_80px_rgba(242,127,12,0.15)] 
                       
                       /* THE NEON POP ON CLICK/ACTIVE */
                       active:shadow-[0_0_120px_rgba(242,127,12,0.35)] 
                       active:scale-[0.99]"
          >
            
            <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
              {/* Name Field */}
              <div className="group/input">
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-3 transition-colors group-focus-within/input:text-[#f27f0c]">
                  Full Name
                </label>
                <input 
                  type="text" 
                  placeholder="Abdullah Shafique"
                  className="w-full bg-background border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-700 outline-none transition-all 
                    hover:border-[#f27f0c]/50
                    focus:border-[#f27f0c] focus:bg-background/50 focus:shadow-[0_0_20px_rgba(242,127,12,0.1)]"
                />
              </div>

              {/* Email Field */}
              <div className="group/input">
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-3 transition-colors group-focus-within/input:text-[#f27f0c]">
                  Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="abdullahshafique319@gmail.com"
                  className="w-full bg-background border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-700 outline-none transition-all 
                    hover:border-[#f27f0c]/50
                    focus:border-[#f27f0c] focus:bg-background/50 focus:shadow-[0_0_20px_rgba(242,127,12,0.1)]"
                />
              </div>

              {/* Message Field */}
              <div className="group/input">
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-3 transition-colors group-focus-within/input:text-[#f27f0c]">
                  Your Message
                </label>
                <textarea 
                  rows="5"
                  placeholder="Tell me about your project ideas..."
                  className="w-full bg-background border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-700 outline-none transition-all 
                    hover:border-[#f27f0c]/50
                    focus:border-[#f27f0c] focus:bg-background/50 focus:shadow-[0_0_20px_rgba(242,127,12,0.1)] resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#f27f0c] py-6 font-black text-white uppercase tracking-widest transition-all 
                hover:scale-[1.02] hover:brightness-110 hover:shadow-[0_0_30px_rgba(242,127,12,0.5)] 
                active:scale-[0.98] active:shadow-[0_0_50px_rgba(242,127,12,0.8)]">
                <span className="relative z-10">Send Message</span>
                <Send size={20} className="relative z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
                
                {/* Background Glass Slide Effect */}
                <div className="absolute inset-0 translate-y-full bg-gradient-to-t from-white/20 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
              </button>
            </form>
          </div>

          {/* --- Social Footer --- */}
          <div className="mt-20 pt-12 border-t border-white/5 text-center">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-8">
              Stay Connected
            </p>
            <div className="flex justify-center gap-6 md:gap-8">
              {[
                { Icon: Globe, label: 'Website' },
                { Icon: Share2, label: 'Share' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Youtube, label: 'Youtube' }
              ].map(({ Icon, label }, i) => (
                <a 
                  key={i} 
                  href="#" 
                  aria-label={label}
                  className="group flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-[#f27f0c] border border-white/5 transition-all duration-500
                    hover:bg-[#f27f0c] hover:text-white hover:-translate-y-3 hover:border-[#f27f0c] hover:shadow-[0_20px_40px_rgba(242,127,12,0.3)] 
                    active:scale-90 active:shadow-[0_0_40px_rgba(242,127,12,0.7)]"
                >
                  <Icon 
                    size={26} 
                    strokeWidth={2.5} 
                    className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[10deg]" 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;