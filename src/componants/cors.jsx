"use client";
import React from 'react';
import { Cpu, Code2, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const expertise = [
    {
      title: "Automation",
      desc: "Streamlining workflows using n8n, Make, and Zapier to connect tools and eliminate repetitive tasks through smart logic.",
      icon: <Cpu size={24} />,
      // Custom animation variant for the left card
      variant: {
        hidden: { opacity: 0, x: -70 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
      }
    },
    {
      title: "Web Development",
      desc: "Building fast, responsive, and scalable web applications using Next.js, Tailwind CSS, and modern backend integrations.",
      icon: <Code2 size={24} />,
      // Custom animation variant for the center card
      variant: {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
      }
    },
    {
      title: "React Native",
      desc: "Developing cross-platform mobile applications that provide a native look and feel on both iOS and Android devices.",
      icon: <Smartphone size={24} />,
      // Custom animation variant for the right card
      variant: {
        hidden: { opacity: 0, x: 70 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
      }
    }
  ];

  return (
    <section className="w-full px-8 py-20 bg-background border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-space text-5xl md:text-6xl font-black text-t-primary tracking-tight">
            Core <span className="text-t-secondary">Expertise</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "160px" }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-2 h-1 bg-t-secondary rounded-full"
          />
        </motion.div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expertise.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={skill.variant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 } 
              }}
              className="group relative rounded-2xl bg-secondary text-t-primary p-8 border border-t-primary/10 dark:border-white/5 transition-all duration-300 hover:bg-primary shadow-xl"
            >
              {/* Icon Container */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-t-secondary/10 text-t-secondary transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                {skill.icon}
              </div>

              {/* Text Content */}
              <h3 className="font-space mb-3 text-xl font-bold text-t-primary group-hover:text-t-secondary transition-colors">
                {skill.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-t-primary/70 group-hover:text-t-primary transition-colors">
                {skill.desc}
              </p>

              {/* Subtle bottom glow line on hover */}
              <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-t-secondary transition-all duration-300 group-hover:w-full rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;