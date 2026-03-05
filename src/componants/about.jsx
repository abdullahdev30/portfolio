"use client"
import React from 'react';
import { MapPin, Briefcase, Calendar, Globe, Download } from 'lucide-react';

const About = () => {
  // Function to handle CV download
  const handleDownload = () => {
    // Replace '/resume.pdf' with the actual path to your file in the public folder
    const link = document.createElement('a');
    link.href = '/resume.pdf'; 
    link.download = 'Abdullah_Shafique_CV.pdf';
    link.click();
  };

  return (
    <section className="w-full bg-primary px-6 md:px-8 py-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Side: Image with Glow Effect */}
          <div className="relative group max-w-md mx-auto lg:max-w-none">
            <div className="absolute -inset-1 bg-t-secondary rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative overflow-hidden rounded-2xl bg-[#2a2118] border border-white/5">
              <img 
                src="/images/about.png" 
                alt="Abdullah Shafique" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 object-cover aspect-[4/5]"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <span className="text-sm md:text-xl font-bold tracking-widest text-t-secondary uppercase">About Me</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-t-primary leading-tight">
              Software Engineer & <br />
              <span className="text-t-secondary">Automation Engineer</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed text-base md:text-lg">
              I am a dedicated software engineer with a passion for building high-quality digital experiences. 
              With a focus on modern aesthetics and functional design, I work at brands like <span className="text-t-primary font-semibold">Devisgon</span> stand out 
              in the digital landscape using bold accents and high-performance code.
            </p>

            {/* Info Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 border-y border-white/5 py-10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-t-secondary/10 text-t-secondary shrink-0">
                  <MapPin size={22} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Location</p>
                  <p className="text-white font-bold">Okara, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-t-secondary/10 text-t-secondary shrink-0">
                  <Briefcase size={22} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Experience</p>
                  <p className="text-white font-bold">Associate Engineer</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-t-secondary/10 text-t-secondary shrink-0">
                  <Calendar size={22} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Availability</p>
                  <p className="text-white font-bold">Open to Projects</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-t-secondary/10 text-t-secondary shrink-0">
                  <Globe size={22} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">LinkedIn</p>
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white font-bold underline decoration-t-secondary/30 hover:text-t-secondary transition-colors">
                    linkedin.com/in/abdullah
                  </a>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
              <button 
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 rounded-xl bg-t-secondary px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(234,88,12,0.4)]"
              >
                <Download size={20} /> Download CV
              </button>
              <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-t-secondary transition-all hover:bg-t-secondary/10 hover:shadow-[0_0_25px_rgba(234,88,12,0.4)]">
                Contact Information
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;