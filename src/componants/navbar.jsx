import React from 'react';
import { Code2 } from 'lucide-react'; 
import  Theme_toggle from "@/componants/theme_provider";
const Navigation = () => {
  return (
    <div className="w-full">
      <nav className="flex items-center justify-between bg-background px-8 py-5 border-b-[0.5px] border-t-secondary ">
        
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f27f0c]">
            <Code2 size={24} color="white" strokeWidth={3} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-t-primary uppercase">
            Ch<span className="text-t-secondary"> Abdullah</span>
          </span>
        </div>

        <ul className="hidden items-center gap-10 lg:flex">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item}`} 
                className="text-xl font-bold text-t-primary transition-all hover:text-t-secondary"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

       

<Theme_toggle/>

      </nav>
    </div>
  );
};

export default Navigation;