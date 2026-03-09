"use client"
import React from 'react';
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-background px-8 py-16 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          {/* Brand & Tagline */}
          <div className="max-w-xs group cursor-default">
            <div className="flex items-center gap-3 mb-6 transition-transform duration-500 group-hover:translate-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f27f0c] shadow-[0_0_20px_rgba(242,127,12,0.3)] animate-pulse group-hover:rotate-[12deg] transition-transform">
                <Zap size={20} color="black" fill="black" />
              </div>
              <span className="text-2xl font-black text-t-primary tracking-tighter">
                Abdullah<span className="text-[#f27f0c]"> Shafique</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed transition-colors group-hover:text-gray-400">
              Designing digital experiences that matter. Available for freelance projects and collaborations.
            </p>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-wrap gap-x-10 gap-y-4">
              {['Work', 'Services', 'About', 'Contact'].map((item, index) => (
                <li key={item} className="overflow-hidden">
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="group relative flex items-center text-xs font-black text-t-primary uppercase tracking-[0.2em] transition-all"
                  >
                    {/* Sliding Text Effect */}
                    <span className="relative transition-transform duration-500 group-hover:-translate-y-full">
                      {item}
                    </span>
                    <span className="absolute inset-0 translate-y-full text-[#f27f0c] transition-transform duration-500 group-hover:translate-y-0">
                      {item}
                    </span>
                    
                    {/* Dot Indicator */}
                    <span className="ml-2 h-1 w-1 rounded-full bg-[#f27f0c] opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping" />
            <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">
              © 2026 Abdullah Shafique. Built with Precision.
            </p>
          </div>

          {/* Back to top or small status */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[10px] font-black text-gray-600 hover:text-[#f27f0c] uppercase tracking-widest transition-colors flex items-center gap-2 group"
          >
            Back to top
            <span className="transition-transform group-hover:-translate-y-1">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;