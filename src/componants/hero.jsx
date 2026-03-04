import React from 'react';
import { ArrowRight, Box } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full bg-[#211910] px-8 py-20 lg:py-32 rounded-b-3xl overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-600/30 bg-orange-600/5 px-4 py-1.5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
          </span>
          <span className="text-xs font-bold tracking-wider text-orange-600 uppercase">
            Available for New Projects
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight text-white tracking-tighter">
              Crafting <span className="text-orange-600">Digital</span><br /> 
              Masterpieces.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-gray-400 leading-relaxed">
              I am an Associate Software Engineer specializing in high-impact web experiences. 
              From Next.js and Tailwind CSS to seamless automation with n8n, I transform 
              complex problems into elegant, functional solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-xl bg-orange-600 px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(234,88,12,0.4)]">
                View My Work <ArrowRight size={20} />
              </button>
              <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white transition-all hover:bg-white/10">
                Get In Touch
              </button>
            </div>

            {/* Stats Row */}
            <div className="mt-16 flex gap-12 border-t border-white/5 pt-10">
              <div>
                <h3 className="text-3xl font-black text-white">Fresher</h3>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Status</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-white">Next.js</h3>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Expertise</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-white">Devisgon</h3>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Project</p>
              </div>
            </div>
          </div>

          {/* Right Floating Badge (Visual Element) */}
          <div className="hidden lg:flex justify-end relative">
             <div className="relative z-10 flex items-center gap-4 rounded-2xl bg-[#2a2118] p-4 border border-white/5 shadow-2xl">
                <div className="h-12 w-12 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                   <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                   </div>
                </div>
                <div>
                  <p className="text-white font-black text-sm uppercase">Software Engineer</p>
                </div>
                <div className="ml-4 h-16 w-16 rounded-xl bg-orange-600 flex items-center justify-center shadow-[0_0_30px_rgba(234,88,12,0.3)]">
                   <Box size={32} color="black" />
                </div>
             </div>
             {/* Decorative Circle */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-dashed border-white/10 rounded-full animate-spin-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;