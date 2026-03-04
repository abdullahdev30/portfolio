import React from 'react';
import { Code2 } from 'lucide-react'; 

const Navigation = () => {
  return (
    <div className="w-full">
      <nav className="flex items-center justify-between bg-[#211910] px-8 py-5 border-b-[0.5px] border-orange-600 ">
        
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-600">
            <Code2 size={24} color="white" strokeWidth={3} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase">
            Design<span className="text-orange-600">os</span>
          </span>
        </div>

        <ul className="hidden items-center gap-10 lg:flex">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item}`} 
                className="text-xl font-bold text-white transition-all hover:text-orange-600"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

       
      </nav>
    </div>
  );
};

export default Navigation;