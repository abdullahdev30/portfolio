"use client";
import React from "react";
import { ExternalLink, Code2, Smartphone, Cpu } from "lucide-react";
import { motion } from "framer-motion";

/* React Icons */
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPayloadcms,
  SiReact,
  SiNodedotjs,
  SiSupabase,
  SiJavascript,
  SiThreedotjs,
  SiPython,
  SiExpo,
  SiFirebase,
  SiN8N,
  SiTypescript,
  SiFigma,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

/* Tech icon map */
const techIcons = {
  "Next.js": <SiNextdotjs size={12} />,
  Tailwind: <SiTailwindcss size={12} />,
  "Payload CMS": <SiPayloadcms size={12} />,
  React: <SiReact size={12} />,
  "Node.js": <SiNodedotjs size={12} />,
  Supabase: <SiSupabase size={12} />,
  JavaScript: <SiJavascript size={12} />,
  "Three.js": <SiThreedotjs size={12} />,
  Python: <SiPython size={12} />,
  "React Native": <SiReact size={12} />,
  Expo: <SiExpo size={12} />,
  Firebase: <SiFirebase size={12} />,
  n8n: <SiN8N size={12} />,
  API: <TbApi size={12} />,
  Webhooks: <TbApi size={12} />,
  TypeScript: <SiTypescript size={12} />,
  "Figma API": <SiFigma size={12} />,
};

const Projects = () => {
  const pastProjects = [
    {
      title: "Devisgon Web Platform",
      desc: "A high-performance blog and service site integrated with Payload CMS and multilingual support.",
      tags: ["Next.js", "Payload CMS", "Tailwind"],
      icon: <Code2 size={20} />,
      link: "#",
      // DIRECTION: Slide from Left
    variant: {
        hidden: { opacity: 0, x: -70 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
      },
    },
    {
      title: "Taskera AI Dashboard",
      desc: "An intelligent task management interface designed for streamlined team collaboration and tracking.",
      tags: ["React", "Node.js", "Supabase"],
      icon: <Cpu size={20} />,
      link: "#",
      // DIRECTION: Pop from Center
       variant: {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
      }
    },
    {
      title: "Analytical Geometry Tool",
      desc: "A specialized educational platform for visualizing 3D coordinate geometry and mathematical functions.",
      tags: ["JavaScript", "Three.js", "Python"],
      icon: <ExternalLink size={20} />,
      link: "#",
      // DIRECTION: Slide from Right
       variant: {
        hidden: { opacity: 0, x: 70 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
      }
    },
  ];

  const futureProjects = [
    {
      title: "NativeFlow Mobile App",
      desc: "An upcoming cross-platform mobile solution built with React Native.",
      tags: ["React Native", "Expo", "Firebase"],
      icon: <Smartphone size={20} />,
    },
    {
      title: "AutoSync Logic Engine",
      desc: "A custom automation middleware using n8n to connect enterprise CRM tools.",
      tags: ["n8n", "Webhooks", "API"],
      icon: <Cpu size={20} />,
    },
    {
      title: "Figma-to-Code Plugin",
      desc: "A developer tool designed to bridge the gap between Figma and Tailwind.",
      tags: ["TypeScript", "Figma API", "React"],
      icon: <Code2 size={20} />,
    },
  ];

  return (
    <section id="projects" className="w-full bg-background px-8 py-20 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Loop True
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xl font-bold text-t-secondary uppercase tracking-[0.2em] mb-2">
            Portfolio Showcase
          </p>
          <h2 className="text-5xl font-black text-t-primary">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl">
            A curated selection of my most impactful digital experiences.
          </p>
        </motion.div>

        {/* Past Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {pastProjects.map((project, i) => (
            <motion.div
              key={i}
              variants={project.variant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // Loop True
              whileHover={{ y: -10 }}
              className="group bg-secondary text-black  dark:text-white rounded-2xl border border-white/5 overflow-hidden transition-all hover:border-[#f27f0c] hover:-translate-y-8 duration-500 shadow-2xl"
            >
              <div className="aspect-video bg-primary flex items-center justify-center relative overflow-hidden">
                {/* Visual Icon Container */}
                <div className="text-t-secondary opacity-20 group-hover:opacity-100  group-hover:scale-110 transition-all duration-500">
                  {React.cloneElement(project.icon, { size: 48 })}
                </div>

                <div className="absolute top-4 right-4">
                  <a
                    href={project.link}
                    className="p-2 
                    rounded-lg text-white hover:text-t-secondary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex gap-2 mb-3 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 text-[9px] font-bold text-t-secondary bg-t-secondary/10 px-2 py-0.5 rounded uppercase tracking-tighter"
                    >
                      {techIcons[tag]}
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-t-primary font-bold text-xl mb-2 group-hover:text-t-secondary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Projects - SLIDE FROM DOWN */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }} // Loop True
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-secondary rounded-3xl border border-orange-600/20 hover:border-[#f27f0c] p-8 lg:p-12 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="h-2 w-2 rounded-full bg-t-secondary animate-pulse"></span>
            <h3 className="text-xl font-bold text-t-primary uppercase tracking-widest">
              Ongoing & Future Projects
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {futureProjects.map((fProject, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="mt-1 text-xl text-t-secondary group-hover:rotate-12 transition-transform">
                  {fProject.icon}
                </div>

                <div>
                  <h4 className="text-t-primary font-bold mb-1">
                    {fProject.title}
                  </h4>

                  <p className="text-xs text-gray-400 mb-3">
                    {fProject.desc}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {fProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 text-[8px] font-bold text-gray-400 border border-white/10 px-1.5 py-0.5 rounded"
                      >
                        {techIcons[tag]}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA - POP UP */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black text-t-primary mb-8">
            Have a project in mind?
          </h2>

          <p className="text-gray-500 mb-10 max-w-xl mx-auto">
            I'm always open to discussing new projects and creative ideas.
          </p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-t-secondary px-10 py-4 font-bold text-white shadow-[0_0_30px_rgba(234,88,12,0.4)]"
          >
            Let's Get Started
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;