import React from 'react';
import { ExternalLink, Github, Code2, Smartphone, Cpu } from 'lucide-react';

const Projects = () => {
  const pastProjects = [
    {
      title: "Devisgon Web Platform",
      desc: "A high-performance blog and service site integrated with Payload CMS and multilingual support.",
      tags: ["Next.js", "Payload CMS", "Tailwind"],
      icon: <Code2 size={20} />,
      link: "#"
    },
    {
      title: "Taskera AI Dashboard",
      desc: "An intelligent task management interface designed for streamlined team collaboration and tracking.",
      tags: ["React", "Node.js", "Supabase"],
      icon: <Cpu size={20} />,
      link: "#"
    },
    {
      title: "Analytical Geometry Tool",
      desc: "A specialized educational platform for visualizing 3D coordinate geometry and mathematical functions.",
      tags: ["JavaScript", "Three.js", "Python"],
      icon: <ExternalLink size={20} />,
      link: "#"
    }
  ];

  const futureProjects = [
    {
      title: "NativeFlow Mobile App",
      desc: "An upcoming cross-platform mobile solution built with React Native for seamless user experiences.",
      tags: ["React Native", "Expo", "Firebase"],
      icon: <Smartphone size={20} />
    },
    {
      title: "AutoSync Logic Engine",
      desc: "A custom automation middleware using n8n to connect enterprise CRM tools with real-time analytics.",
      tags: ["n8n", "Webhooks", "API"],
      icon: <Cpu size={20} />
    },
    {
      title: "Figma-to-Code Plugin",
      desc: "A developer tool designed to bridge the gap between Figma designs and production-ready Tailwind code.",
      tags: ["TypeScript", "Figma API", "React"],
      icon: <Code2 size={20} />
    }
  ];

  return (
    <section className="w-full bg-[#211910] px-8 py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-12">
          <p className="text-[10px] font-bold text-orange-600 uppercase tracking-[0.2em] mb-2">Portfolio Showcase</p>
          <h2 className="text-4xl font-black text-white">Featured Projects</h2>
          <p className="mt-4 text-gray-500 max-w-2xl">A curated selection of my most impactful digital experiences and technical engineering feats.</p>
        </div>

        {/* Project Grid (Past Projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {pastProjects.map((project, i) => (
            <div key={i} className="group bg-[#2a2118] rounded-2xl border border-white/5 overflow-hidden transition-all hover:border-orange-600/50 hover:-translate-y-2">
              <div className="aspect-video bg-[#32281e] relative flex items-center justify-center">
                <div className="text-orange-600 opacity-20 group-hover:opacity-100 transition-opacity">
                  {React.cloneElement(project.icon, { size: 48 })}
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                   <a href={project.link} className="p-2 bg-black/40 backdrop-blur-md rounded-lg text-white hover:text-orange-600"><ExternalLink size={18} /></a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold text-orange-600 bg-orange-600/10 px-2 py-0.5 rounded uppercase">{tag}</span>
                  ))}
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Future Projects Section */}
        <div className="bg-orange-600/5 rounded-3xl border border-orange-600/20 p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-2 w-2 rounded-full bg-orange-600 animate-pulse"></span>
            <h3 className="text-xl font-bold text-white uppercase tracking-widest">Ongoing & Future Projects</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureProjects.map((fProject, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 text-orange-600">{fProject.icon}</div>
                <div>
                  <h4 className="text-white font-bold mb-1">{fProject.title}</h4>
                  <p className="text-xs text-gray-500 mb-3">{fProject.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {fProject.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-bold text-gray-400 border border-white/10 px-1.5 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Have a project in mind?</h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          <button className="rounded-full bg-orange-600 px-10 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]">
            Let's Get Started
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;