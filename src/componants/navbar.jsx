"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import Theme_toggle from "@/componants/theme_provider"; 

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = ['About', 'Skills', 'Projects', 'Contact'];
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="w-full relative">
      {/* --- Main Top Bar --- */}
      <nav className="flex items-center justify-between bg-background px-6 py-5 border-b-[0.5px] border-[#f27f0c]/30">
        
        {/* Desktop Logo & Branding */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="flex h-14 w-14 items-center justigy-center overflow-hidden justify-center rounded-xl bg-[#f27f0c] transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110 shadow-[0_0_15px_rgba(242,127,12,0.2)]">
            <img
              src="/images/lo.png"
              alt="Logo"
              className="h-full w-full object-cover scale-150 mt-2 text-white" 
            />
          </div>
          <span className="text-2xl font-black tracking-tighter text-t-primary uppercase transition-colors group-hover:text-[#f27f0c]">
            Ch<span className="text-[#f27f0c] group-hover:text-t-primary"> Abdullah</span>
          </span>
        </div>

        {/* Desktop Links (With Sliding Animation) */}
        <ul className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <li key={item} className="overflow-hidden">
              <a 
                href={`#${item.toLowerCase()}`} 
                className="group relative flex items-center text-sm font-black text-t-primary uppercase tracking-[0.2em] transition-all"
              >
                {/* Sliding Text Effect */}
                <span className="relative transition-transform duration-500 group-hover:-translate-y-full">
                  {item}
                </span>
                <span className="absolute inset-0 translate-y-full text-[#f27f0c] transition-transform duration-500 group-hover:translate-y-0">
                  {item}
                </span>
                
                {/* Orange Dot Indicator */}
                <span className="ml-1 h-1.5 w-1.5 rounded-full bg-[#f27f0c] opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
              </a>
            </li>
          ))}
          <div className="pl-4 border-l border-white/10">
            <Theme_toggle />
          </div>
        </ul>

        {/* Mobile Menu Trigger */}
        <button 
          onClick={toggleSidebar}
          className="lg:hidden p-2 text-t-primary hover:bg-[#f27f0c]/10 rounded-lg transition-colors"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* --- Mobile Left Sidebar Overlay --- */}
      <div 
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-opacity duration-500 lg:hidden ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      />

      {/* Actual Sidebar Container */}
      <aside 
        className={`fixed top-0 left-0 z-50 h-full w-[300px] bg-background border-r border-[#f27f0c]/20 p-8 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-start mb-12 ">
            <div className="flex items-center -ml-6 items-center  gap-2">
             <div className="flex h-12 w-12  items-center overflow-hidden  rounded-xl bg-[#f27f0c] transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110 shadow-[0_0_15px_rgba(242,127,12,0.2)]">
            <img
              src="/images/lo.png"
              alt="Logo"
              className="h-full w-full object-cover scale-150 mt-1  text-white" 
            />
          </div>
          <span className="text-xl font-black tracking-tighter text-t-primary uppercase transition-colors group-hover:text-[#f27f0c]">
            Ch<span className="text-[#f27f0c] group-hover:text-t-primary"> Abdullah</span>
          </span>
            </div>
            <button onClick={toggleSidebar} className="p-2 hover:bg-white/5 rounded-full ml-18  transition-colors">
              <X size={24} className="text-[#f27f0c]" />
            </button>
          </div>
<div className="w-74 -mt-8 -ml-8 h-0.5 bg-[#f27f0c] rounded-full "></div>

          {/* Sidebar Navigation (Large Sliding Links) */}
          <ul className="flex flex-col gap-8 flex-grow mt-12">
            {navItems.map((item, i) => (
              <li 
                key={item} 
                className="overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <a 
                  href={`#${item.toLowerCase()}`} 
                  onClick={toggleSidebar}
                  className="group relative flex items-center text-xl font-bold  text-t-primary uppercase tracking-tighter transition-all"
                >
                  <span className="group-hover:text-[#f27f0c] group-hover:translate-x-4 transition-all duration-300">
                    {item}
                  </span>
                  <span className="absolute left-0 h-2 w-2 rounded-full bg-[#f27f0c] opacity-0 transition-all group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>

          {/* Sidebar Footer */}
          <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Theme</p>
              <span className="text-xs font-black text-t-primary">Toggle Appearance</span>
            </div>
            <Theme_toggle />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Navigation;