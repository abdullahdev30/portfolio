"use client";
import React from 'react';
import { Cpu, Layout, Database, Smartphone, Cloud, PenTool, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const TechnicalSkills = () => {
  const skills = [
    { title: "Automation", level: "92%", status: "ADVANCED", icon: <Cpu />, desc: "Expertise in n8n, Make, and Zapier for complex workflow logic." },
    { title: "Frontend Dev", level: "96%", status: "EXPERT", icon: <Layout />, desc: "Building performant apps with Next.js, React, and Tailwind CSS." },
    { title: "Backend Systems", level: "75%", status: "INTERMEDIATE", icon: <Database />, desc: "Managing databases with Supabase, MongoDB, and Node.js." },
    { title: "Mobile Apps", level: "88%", status: "EXPERT", icon: <Smartphone />, desc: "Developing cross-platform solutions using React Native." },
    { title: "Cloud & CMS", level: "82%", status: "ADVANCED", icon: <Cloud />, desc: "Integrating Payload CMS and deploying scalable web apps." },
    { title: "UI Design", level: "90%", status: "EXPERT", icon: <PenTool />, desc: "Crafting modern, high-fidelity prototypes in Figma." },
  ];

  // Variants for the "Pop Up" cards
  const popContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const popItem = {
    hidden: { opacity: 0, scale: 0.7, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 200, damping: 15 } 
    }
  };

  return (
    <section id="skills" className="w-full bg-background px-8 py-20 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xl font-bold text-t-secondary uppercase tracking-[0.2em] mb-2">Expertise</p>
          <h2 className="text-5xl font-black text-t-primary">Technical Skills & Tools</h2>
        </motion.div>

        {/* Skills Grid - POP UP ANIMATION */}
        <motion.div 
          variants={popContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
        >
          {skills.map((skill, i) => (
            <motion.div 
              key={i} 
              variants={popItem}
              whileHover={{ scale: 1.05, borderColor: "rgba(234, 88, 12, 0.5)" }}
              className="bg-secondary p-6 rounded-2xl border border-white/5 group transition-colors shadow-2xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-t-secondary/10 rounded-xl text-t-secondary">
                  {React.cloneElement(skill.icon, { size: 20 })}
                </div>
                <span className="text-[10px] font-bold text-t-secondary bg-t-secondary/10 px-2 py-1 rounded-md">
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
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="h-full bg-t-secondary" 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Creative Approach - FADE ANIMATIONS (Left for Text, Right for Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* TEXT FROM LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-black text-t-primary mb-8">My Creative Approach</h2>
            <div className="space-y-8">
              {[
                { t: "User-Centric Methodology", d: "I believe every automation flow and pixel should serve a purpose." },
                { t: "Clean Code Principles", d: "Maintaining readable, efficient, and scalable codebases." },
                { t: "Continuous Learning", d: "Staying ahead of the curve with n8n and AI." }
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
          </motion.div>
          
          {/* IMAGE FROM RIGHT */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group rounded-2xl overflow-hidden border border-white/5 aspect-video"
          >
            <img 
              src="/images/skills.png" 
              alt="Workspace" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;