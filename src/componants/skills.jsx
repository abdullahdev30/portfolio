import React from 'react';
import { Cpu, Layout, Database, Smartphone, Cloud, PenTool, CheckCircle2 } from 'lucide-react';

const TechnicalSkills = () => {
  const skills = [
    { title: "Automation", level: "92%", status: "ADVANCED", icon: <Cpu />, desc: "Expertise in n8n, Make, and Zapier for complex workflow logic." },
    { title: "Frontend Dev", level: "96%", status: "EXPERT", icon: <Layout />, desc: "Building performant apps with Next.js, React, and Tailwind CSS." },
    { title: "Backend Systems", level: "75%", status: "INTERMEDIATE", icon: <Database />, desc: "Managing databases with Supabase, MongoDB, and Node.js." },
    { title: "Mobile Apps", level: "88%", status: "EXPERT", icon: <Smartphone />, desc: "Developing cross-platform solutions using React Native." },
    { title: "Cloud & CMS", level: "82%", status: "ADVANCED", icon: <Cloud />, desc: "Integrating Payload CMS and deploying scalable web apps." },
    { title: "UI Design", level: "90%", status: "EXPERT", icon: <PenTool />, desc: "Crafting modern, high-fidelity prototypes in Figma." },
  ];

  return (
    <section className="w-full bg-background px-8 py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xl font-bold text-t-secondary uppercase tracking-[0.2em] mb-2">Expertise</p>
          <h2 className="text-5xl font-black text-t-primary">Technical Skills & Tools</h2>
          <p className="mt-4 text-gray-400 max-w-2xl">A comprehensive overview of my technical capabilities and proficiency levels across modern digital development.</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {skills.map((skill, i) => (
            <div key={i} className="bg-secondary p-6 rounded-2xl border border-white/5 group hover:border-orange-600/30 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-t-secondary/10 rounded-xl text-t-secondary">
                  {React.cloneElement(skill.icon, { size: 20 })}
                </div>
                <span className="text-[10px] font-bold text-t-secondary bg-t-secondary/10 px-2 py-1 rounded-md tracking-tighter">
                  {skill.status}
                </span>
              </div>
              <h3 className="text-t-primary font-bold mb-2">{skill.title}</h3>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">{skill.desc}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>Proficiency</span>
                  <span>{skill.level}</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-t-secondary transition-all duration-1000" 
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Creative Approach Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-t-primary mb-8">My Creative Approach</h2>
            <div className="space-y-8">
              {[
                { t: "User-Centric Methodology", d: "I believe every automation flow and pixel should serve a purpose and every interaction should feel natural." },
                { t: "Clean Code Principles", d: "Maintaining readable, efficient, and scalable codebases using the latest industry standards in Next.js and React Native." },
                { t: "Continuous Learning", d: "Staying ahead of the curve by constantly exploring emerging technologies like n8n and AI integration." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="mt-1 text-t-secondary"><CheckCircle2 size={40} /></div>
                  <div>
                    <h4 className="text-t-primary font-bold mb-1">{item.t}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Workspace Insight Image Mockup */}
          <div className="relative group rounded-2xl overflow-hidden border border-white/5 aspect-video">
            <div className="absolute inset-0 bg-orange-900/20 group-hover:bg-transparent transition-all z-10"></div>
            <img 
              src="/workspace-mockup.jpg" 
              alt="Workspace" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.5em] bg-black/40 backdrop-blur-md px-6 py-3 border border-orange-600/30">
                Workspace Insight
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;