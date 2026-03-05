import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full bg-background px-6 py-24 lg:py-40 overflow-hidden flex flex-col items-center justify-center text-center">
      
      <div className="absolute top-1/3 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] md:w-[800px] md:h-[400px] bg-t-secondary/30 blur-[120px] rounded-full z-10" />

      <div className="mx-auto max-w-4xl flex flex-col items-center">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-background bg-background px-4 py-1.5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-t-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-t-secondary"></span>
          </span>
          <span className="text-[10px] md:text-xs font-bold tracking-wider text-t-secondary uppercase">
            Available for New Projects
          </span>
        </div>

        {/* Hero Content */}
        <h1 className="text-5xl md:text-6xl font-black leading-[1.1] text-t-primary tracking-tighter">
          Crafting <span className="text-t-secondary italic">Digital</span> Masterpieces.
        </h1>
        
        <p className="mt-6 max-w-2xl text-base md:text-lg  text-gray-500 dark:text-gray-400 leading-relaxed px-4">
          I am an Associate Software Engineer specializing in high-impact web experiences. 
          From Next.js and Tailwind CSS to seamless automation, I transform 
          complex problems into elegant, functional solutions.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-t-secondary px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(234,88,12,0.4)]">
            View My Work <ArrowRight size={20} />
          </button>
          <button className="w-full sm:w-auto rounded-xl border border-t-secondary bg-white/5 px-8 py-4 font-bold text-t-primary transition-all hover:bg-t-secondary hover:text-white hover:shadow-[0_0_25px_rgba(234,88,12,0.4)]">
            Get In Touch
          </button>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-16 border-t border-t-primary pt-10 w-full max-w-2xl">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-black text-t-primary">Fresher</h3>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Status</p>
          </div>
          <div className="flex flex-col items-center border-y border-t-primary py-6 sm:border-y-0 sm:py-0 sm:border-x sm:px-8">
            <h3 className="text-2xl font-black text-t-primary">Next.js</h3>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Expertise</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-black text-t-primary">Devisgon</h3>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Project</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;