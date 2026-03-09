"use client"
import React, { useState } from 'react';
import { Code2, Menu, X } from 'lucide-react'; 
import Theme_toggle from "@/componants/theme_provider"; // Fixed typo 'components'

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="w-full relative">
      {/* --- Main Top Bar --- */}
      <nav className="flex items-center justify-between bg-background px-6 py-5 border-b-[0.5px] border-t-secondary">
        
        {/* Desktop Logo & Branding */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center overflow-hidden justify-center rounded-xl bg-[#f27f0c]">
            <img
              src="/images/lo.svg"
              alt="Logo"
              className="h-full w-full object-cover scale-150 mt-4 ml-2 text-white" 
            />
          </div>
          <span className="text-xl font-black tracking-tighter text-t-primary uppercase">
            Ch<span className="text-t-secondary"> Abdullah</span>
          </span>
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <ul className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-lg font-bold text-t-primary hover:text-t-secondary transition-colors">
                {item}
              </a>
            </li>
          ))}
          <Theme_toggle />
        </ul>

        {/* Mobile Menu Trigger */}
        <button 
          onClick={toggleSidebar}
          className="lg:hidden p-2 text-t-primary hover:bg-secondary/20 rounded-lg transition-colors"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* --- Mobile Left Sidebar Overlay --- */}
      {/* Dark Backdrop */}
      <div 
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      />

      {/* Actual Sidebar Container */}
      <aside 
        className={`fixed top-0 left-0 z-50 h-full w-[280px] bg-background border-r border-secondary p-6 transition-transform duration-300 ease-in-out lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header: Logo + Close Button */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f27f0c]">
<img
              src="/images/lo.svg"
              alt="Logo"
              className="h-full w-full object-cover scale-150 mt-4 ml-2 text-white" 
            />              </div>
              <span className="font-black text-t-primary uppercase tracking-tighter">
                Ch Abdullah
              </span>
            </div>
            <button onClick={toggleSidebar} className="text-t-primary">
              <X size={24} />
            </button>
          </div>

          {/* Sidebar Navigation Links */}
          <ul className="flex flex-col gap-6 flex-grow">
            {navItems.map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  onClick={toggleSidebar}
                  className="block text-2xl font-bold text-t-primary hover:text-t-secondary transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Sidebar Footer: Theme Toggle resides here on mobile */}
          <div className="mt-auto pt-6 border-t border-secondary flex items-center justify-between">
            <span className="text-sm font-medium text-t-primary">Switch Theme</span>
            <Theme_toggle />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Navigation;