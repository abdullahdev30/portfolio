import React from 'react';
import { MapPin, Briefcase, Calendar, Globe, Download } from 'lucide-react';

const About = () => {
  return (
    <section className="w-full bg-[#211910] px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image with Glow Effect */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative overflow-hidden rounded-2xl bg-[#2a2118] border border-white/5">
              {/* Replace with your actual image path */}
              <img 
                src="/your-profile-image.jpg" 
                alt="Abdullah Shafique" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 object-cover aspect-[4/5]"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-orange-600"></div>
              <span className="text-sm font-bold tracking-widest text-orange-600 uppercase">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Software Engineer & <br />
              <span className="text-orange-600">Automation Engineer</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed text-lg">
              I am a dedicated software engineer with a passion for building high-quality digital experiences. 
              With a focus on modern aesthetics and functional design, I work at  brands like <span className="text-white font-semibold">Devisgon</span> stand out 
              in the digital landscape using bold accents and high-performance code.
            </p>

            {/* Info Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 border-y border-white/5 py-10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600/10 text-orange-600">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Location</p>
                  <p className="text-white font-bold">Okara, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600/10 text-orange-600">
                  <Briefcase size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Experience</p>
                  <p className="text-white font-bold">Associate Engineer</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600/10 text-orange-600">
                  <Calendar size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Availability</p>
                  <p className="text-white font-bold">Open to Projects</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600/10 text-orange-600">
                  <Globe size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Linkdin</p>
                  <p className="text-white font-bold underline decoration-orange-600/30">yourportfolio.com</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-xl bg-orange-600 px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(234,88,12,0.4)]">
                <Download size={20} /> Download CV
              </button>
              <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-orange-600 transition-all hover:bg-white/10">
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