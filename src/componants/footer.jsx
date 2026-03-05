import React from 'react';
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-background px-8 py-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Brand & Tagline */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-t-secondary">
                <Zap size={18} color="black" fill="black" />
              </div>
              <span className="text-xl font-bold text-t-primary tracking-tight">
                Creative<span className="text-t-secondary">Pro</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Designing digital experiences that matter. Available for freelance projects and collaborations.
            </p>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-wrap gap-8">
              {['Work', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-xs font-bold text-t-primary uppercase tracking-widest transition-colors hover:text-orange-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            © 2026 Abdullah Shafique. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] font-bold text-gray-600 uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold text-gray-600 uppercase tracking-widest hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;