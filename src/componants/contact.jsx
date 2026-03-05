import React from 'react';
import { Mail, Phone, MapPin, Send, Globe, Share2, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-background px-8 py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-xl font-bold text-t-secondary uppercase tracking-[0.2em] mb-2">Contact</p>
          <h2 className="text-4xl md:text-5xl font-black text-t-primary leading-tight">
            Let's build something <br />
            extraordinary together.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Form */}
          <div className="bg-secondary p-8 lg:p-10 rounded-3xl border border-white/5 shadow-2xl">
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Abdullah Shafique"
                  className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-700 outline-none transition-all focus:border-orange-600 focus:shadow-[0_0_15px_rgba(234,88,12,0.2)]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Email Address</label>
                <input 
                  type="email" 
                  placeholder="abdullahshafique319@gmail.com"
                  className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-700 outline-none transition-all focus:border-orange-600 focus:shadow-[0_0_15px_rgba(234,88,12,0.2)]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Message</label>
                <textarea 
                  rows="4"
                  placeholder="Tell me about your project ideas..."
                  className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-700 outline-none transition-all focus:border-orange-600 focus:shadow-[0_0_15px_rgba(234,88,12,0.2)] resize-none"
                ></textarea>
              </div>

              <button className="group flex w-full items-center justify-center gap-3 rounded-xl bg-t-secondary py-5 font-bold text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] active:scale-95">
                Send Message <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>

          {/* Contact Info & Socials */}
          <div className="space-y-10">
            {/* Info Items */}
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-t-secondary transition-all group-hover:bg-orange-600 group-hover:text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-t-primary font-bold text-lg">abdullahshafique319@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-t-secondary transition-all group-hover:bg-orange-600 group-hover:text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Office</p>
                  <p className="text-t-primary font-bold text-lg">Okara, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-10 border-t border-white/5">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">Connect on Social</p>
              <div className="flex gap-4">
                {[Globe, Share2, Instagram, Youtube].map((Icon, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-t-secondary border border-white/5 transition-all hover:bg-orange-600 hover:text-white hover:shadow-[0_0_15px_rgba(234,88,12,0.3)]"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;