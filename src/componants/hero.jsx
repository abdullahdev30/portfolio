"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, Sparkles, Briefcase, Code, Globe, Award } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { RiNextjsLine } from "react-icons/ri";
import { SiN8N } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";




const AnimatedCounter = ({ to, suffix = "", duration = 1.8 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const target = parseInt(to, 10);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Easing out cubic for smooth slowing down at the end
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * target);

      setCount(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const animFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animFrame);
  }, [isInView, to, duration]);
<meta name="google-site-verification" content="yjhECT8HewYu3-5q9yTPXE996DhDQ2u5rRxUNjpjFak" />
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const tools = [
  {
    id: "nextjs",
    name: "Next.js",
    category: "Fullstack Framework",
    description: "Production-ready React framework with App Router, Server Components & SSR for high-performance web apps.",
    offset: 0,
    color: "#ffffff",
    icon: <RiNextjsLine className="text-xl" />,
  },
  {
    id: "nestjs",
    name: "NestJS",
    category: "Backend Framework",
    description: "Enterprise Node.js framework leveraging TypeScript, modular architecture, REST & GraphQL APIs.",
    offset: 90,
    color: "#E0234E",
    icon: <SiNestjs className="text-xl" />,
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "Database & Auth",
    description: "Open-source Firebase alternative delivering PostgreSQL, real-time subscriptions, storage & auth.",
    offset: 180,
    color: "#3ECF8E",
    icon: <RiSupabaseFill className="text-xl" />,
  },
  {
    id: "n8n",
    name: "n8n",
    category: "Workflow Automation",
    description: "Node-based workflow automation tool connecting complex APIs, AI agents & custom webhooks.",
    offset: 270,
    color: "#FF6C37",
    icon: <SiN8N className="text-xl" />,
  },
];

// Helper to generate keyframe coordinates matching SVG orbit ellipse (Rx=210, Ry=120, rotated 15deg)
function getOrbitKeyframes(offsetDeg) {
  const STEPS = 40;
  const Rx = 210;
  const Ry = 120;
  const angleRad = (15 * Math.PI) / 180;
  const cosA = Math.cos(angleRad);
  const sinA = Math.sin(angleRad);

  const x = [];
  const y = [];

  for (let i = 0; i <= STEPS; i++) {
    const theta = ((i / STEPS) * 360 + offsetDeg) * (Math.PI / 180);
    const ex = Rx * Math.cos(theta);
    const ey = Ry * Math.sin(theta);
    
    // Parametric rotation by 15deg
    const rx = ex * cosA - ey * sinA;
    const ry = ex * sinA + ey * cosA;

    x.push(rx);
    y.push(ry);
  }

  return { x, y };
}

const Hero = () => {
  const [hoveredTool, setHoveredTool] = useState(null);

  return (
    <section id="home" className="relative w-full overflow-hidden bg-background px-6 pt-28 pb-20">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-t-secondary/15 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-t-secondary/20 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Text Content & CTAs */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-t-secondary/40 bg-t-secondary/10 px-4 py-2 backdrop-blur-md shadow-[0_0_15px_rgba(242,127,12,0.15)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-t-secondary opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-t-secondary shadow-[0_0_8px_#f27f0c]"></span>
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-t-secondary">
                Available for New Projects.
              </span>
            </motion.div>

            {/* Main Heading (Syne font) */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-syne text-4xl font-black tracking-tight text-t-primary md:text-6xl  leading-[1.08]"
            >
              Crafting{" "}
              <span className="relative inline-block italic text-t-secondary ">
                Digital
              </span>{" "}
              Masterpieces<span className="text-t-secondary">.</span>
            </motion.h1>

            {/* Paragraph Description (Plus Jakarta Sans font) */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans mt-6 max-w-xl text-base leading-relaxed text-t-primary/70 md:text-lg"
            >
              I&apos;m an Associate Software Engineer specializing in modern web experiences,
              automation, and elegant, functional solutions. I turn complex problems
              into seamless digital products that deliver real impact.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
            >
              <a
                href="#projects"
                className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#f27f0c] to-[#d96b00] px-8 py-4 font-bold text-white shadow-[0_0_25px_rgba(242,127,12,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(242,127,12,0.7)] active:scale-95 sm:w-auto"
              >
                <span className="font-space">View My Work</span>
                <ArrowRight size={19} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>

              <a
                href="#contact"
                className="group flex w-full items-center justify-center rounded-xl border border-t-secondary/40 bg-white/5 dark:bg-white/5 px-8 py-4 font-bold text-t-primary backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-t-secondary hover:bg-t-secondary/10 hover:shadow-[0_0_25px_rgba(242,127,12,0.25)] active:scale-95 sm:w-auto"
              >
                <span className="font-space">Get In Touch</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Precise Orbit Following & Hover Detail Expansion */}
          <div className="relative flex items-center justify-center lg:col-span-5 min-h-[540px] sm:min-h-[620px] lg:min-h-[660px]">
            
            {/* Enlarged Cosmic Sphere Glow */}
            <div className="absolute h-96 w-96 rounded-full bg-gradient-to-tr from-[#f27f0c]/35 via-[#f27f0c]/15 to-transparent blur-3xl animate-pulse" />
            <div className="absolute h-64 w-64 rounded-full bg-[#f27f0c]/15 blur-2xl" />

            {/* SVG Vector Orbit Lines (Exact Rx=210, Ry=120, rotate=15deg) */}
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none overflow-visible"
              viewBox="0 0 600 600"
              fill="none"
            >
              {/* Main Active Orbit Line that cards ride on */}
              <ellipse
                cx="300"
                cy="300"
                rx="210"
                ry="120"
                stroke="url(#orbit_active)"
                strokeWidth="2.5"
                className="opacity-80"
                style={{ transformOrigin: "300px 300px", transform: "rotate(15deg)" }}
              />

              {/* Outer Decorative Vector Ellipse */}
              <ellipse
                cx="300"
                cy="300"
                rx="260"
                ry="155"
                stroke="url(#orbit_lg_1)"
                strokeWidth="1.5"
                strokeDasharray="8 8"
                className="opacity-40 animate-[spin_60s_linear_infinite]"
                style={{ transformOrigin: "300px 300px", transform: "rotate(-20deg)" }}
              />

              {/* Inner Decorative Vector Ellipse */}
              <ellipse
                cx="300"
                cy="300"
                rx="140"
                ry="80"
                stroke="url(#orbit_lg_3)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="opacity-30 animate-[spin_30s_linear_infinite_reverse]"
                style={{ transformOrigin: "300px 300px", transform: "rotate(-35deg)" }}
              />

              {/* Orbital Glow Nodes */}
              <circle cx="150" cy="200" r="4.5" fill="#f27f0c" className="animate-ping opacity-90" />
              <circle cx="480" cy="220" r="5" fill="#f27f0c" className="shadow-[0_0_18px_#f27f0c]" />
              <circle cx="390" cy="430" r="4" fill="#ffb703" className="shadow-[0_0_12px_#ffb703]" />

              <defs>
                <linearGradient id="orbit_active" x1="0" y1="0" x2="600" y2="600">
                  <stop stopColor="#f27f0c" stopOpacity="0.9" />
                  <stop offset="0.5" stopColor="#ffb703" stopOpacity="0.4" />
                  <stop offset="1" stopColor="#f27f0c" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="orbit_lg_1" x1="0" y1="0" x2="600" y2="600">
                  <stop stopColor="#f27f0c" stopOpacity="0.7" />
                  <stop offset="1" stopColor="#ffffff" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="orbit_lg_3" x1="300" y1="150" x2="300" y2="450">
                  <stop stopColor="#f27f0c" stopOpacity="0.6" />
                  <stop offset="1" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>

            {/* Orbiting Tool Cards Container */}
            <div className="relative flex h-[500px] w-[500px] items-center justify-center">
              {tools.map((tool) => {
                const keyframes = getOrbitKeyframes(tool.offset);
                const isHovered = hoveredTool?.id === tool.id;

                return (
                  <motion.div
                    key={tool.id}
                    animate={
                      isHovered
                        ? {}
                        : {
                            x: keyframes.x,
                            y: keyframes.y,
                          }
                    }
                    transition={{
                      duration: 28,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    onMouseEnter={() => setHoveredTool(tool)}
                    onMouseLeave={() => setHoveredTool(null)}
                    className="absolute z-20 cursor-pointer"
                  >
                    <motion.div
                      layout
                      style={{
                        borderColor: isHovered ? `${tool.color}70` : undefined,
                        boxShadow: isHovered ? `0 12px 40px ${tool.color}35` : undefined,
                      }}
                      className={`relative flex flex-col rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                        isHovered
                          ? "w-72 bg-secondary dark:bg-primary p-5 scale-110 z-30 shadow-2xl"
                          : "items-center justify-center rounded-full border-t-primary/15 dark:border-t-secondary/40 bg-secondary dark:bg-primary px-3.5 py-2 shadow-lg hover:scale-105"
                      }`}
                    >
                      {/* Compact Pill View (When NOT hovered) */}
                      {!isHovered ? (
                        <div className="flex items-center gap-2.5">
                          <div
                            className="flex h-8 w-8 items-center justify-center rounded-lg border shadow-inner transition-colors"
                            style={{
                              color: tool.color,
                              borderColor: `${tool.color}40`,
                              backgroundColor: `${tool.color}15`,
                            }}
                          >
                            {tool.icon}
                          </div>
                          <span className="font-space text-xs sm:text-sm font-bold text-t-primary tracking-wide whitespace-nowrap">
                            {tool.name}
                          </span>
                        </div>
                      ) : (
                        /* Expanded Detail View (On Hover) */
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          className="flex flex-col gap-3"
                        >
                          <div
                            className="flex items-center justify-between border-b pb-3"
                            style={{ borderColor: `${tool.color}25` }}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className="flex h-11 w-11 items-center justify-center rounded-xl border shadow-inner"
                                style={{
                                  color: tool.color,
                                  borderColor: `${tool.color}50`,
                                  backgroundColor: `${tool.color}20`,
                                  boxShadow: `0 0 15px ${tool.color}30`,
                                }}
                              >
                                {tool.icon}
                              </div>
                              <div>
                                <h3 className="font-space text-base font-bold text-t-primary">{tool.name}</h3>
                                <p className="font-mono text-[11px] font-bold" style={{ color: tool.color }}>
                                  {tool.category}
                                </p>
                              </div>
                            </div>
                            <Sparkles size={16} style={{ color: tool.color }} className="animate-pulse" />
                          </div>

                          <p className="font-sans text-xs leading-relaxed text-t-primary/80">
                            {tool.description}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Glass Counter Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 mx-auto w-full max-w-5xl rounded-3xl border border-t-primary/15 dark:border-t-secondary/30 bg-secondary/90 dark:bg-primary/90 p-6 sm:p-7 backdrop-blur-2xl shadow-xl"
        >
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/15 dark:md:divide-t-secondary/20">
            
            {/* Stat 1: Years Experience */}
            <div className="flex items-center gap-4 px-2 sm:px-6 py-2 justify-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-t-secondary/15 border border-t-secondary/30 text-t-secondary shadow-inner">
                <Briefcase size={22} />
              </div>
              <div>
                <h4 className="font-mono text-2xl sm:text-3xl font-black text-t-primary tracking-tight">
                  <AnimatedCounter to="1" suffix="+" />
                </h4>
                <p className="font-mono text-xs font-semibold text-t-primary/60 mt-0.5">Years Experience</p>
              </div>
            </div>

            {/* Stat 2: Projects Completed */}
            <div className="flex items-center gap-4 px-2 sm:px-6 py-2 justify-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-t-secondary/15 border border-t-secondary/30 text-t-secondary shadow-inner">
                <Code size={22} />
              </div>
              <div>
                <h4 className="font-mono text-2xl sm:text-3xl font-black text-t-primary tracking-tight">
                  <AnimatedCounter to="10" suffix="+" />
                </h4>
                <p className="font-mono text-xs font-semibold text-t-primary/60 mt-0.5">Projects Completed</p>
              </div>
            </div>

            {/* Stat 3: Live Projects */}
            <div className="flex items-center gap-4 px-2 sm:px-6 py-2 justify-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-t-secondary/15 border border-t-secondary/30 text-t-secondary shadow-inner">
                <Globe size={22} />
              </div>
              <div>
                <h4 className="font-mono text-2xl sm:text-3xl font-black text-t-primary tracking-tight">
                  <AnimatedCounter to="4" suffix="+" />
                </h4>
                <p className="font-mono text-xs font-semibold text-t-primary/60 mt-0.5">Live Projects</p>
              </div>
            </div>

            {/* Stat 4: Client Satisfaction */}
            <div className="flex items-center gap-4 px-2 sm:px-6 py-2 justify-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-t-secondary/15 border border-t-secondary/30 text-t-secondary shadow-inner">
                <Award size={22} />
              </div>
              <div>
                <h4 className="font-mono text-2xl sm:text-3xl font-black text-t-primary tracking-tight">
                  <AnimatedCounter to="100" suffix="%" />
                </h4>
                <p className="font-mono text-xs font-semibold text-t-primary/60 mt-0.5">Client Satisfaction</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;




