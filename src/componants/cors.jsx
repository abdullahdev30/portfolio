import React from 'react';
import { Cpu, Code2, Smartphone } from 'lucide-react';

const Skills = () => {
  const expertise = [
    {
      title: "Automation",
      desc: "Streamlining workflows using n8n, Make, and Zapier to connect tools and eliminate repetitive tasks through smart logic.",
      icon: <Cpu size={24} className="text-orange-600" />,
    },
    {
      title: "Web Development",
      desc: "Building fast, responsive, and scalable web applications using Next.js, Tailwind CSS, and modern backend integrations.",
      icon: <Code2 size={24} className="text-orange-600" />,
    },
    {
      title: "React Native",
      desc: "Developing cross-platform mobile applications that provide a native look and feel on both iOS and Android devices.",
      icon: <Smartphone size={24} className="text-orange-600" />,
    }
  ];

  return (
    <section className="w-full bg-[#211910] px-8 py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-black text-white tracking-tight">
            Core <span className="text-orange-600">Expertise</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-orange-600 rounded-full"></div>
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expertise.map((skill, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl bg-[#2a2118] p-8 border border-white/5 transition-all hover:bg-[#32281e] hover:shadow-2xl"
            >
              {/* Icon Container */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600/10 group-hover:bg-orange-600 transition-colors">
                <div className="group-hover:text-white transition-colors">
                  {skill.icon}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="mb-3 text-xl font-bold text-white">
                {skill.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;