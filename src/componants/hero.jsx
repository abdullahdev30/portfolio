"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const TypingText = ({ text }) => {
  return (
    <span className="inline-flex min-h-[1.5em] items-center">
      <Typewriter
        options={{
          strings: [text],
          autoStart: true,
          loop: true,
          delay: 100,
          cursor: "|",
          cursorClassName: "animate-pulse text-t-primary",
        }}
      />
    </span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background px-6 py-24 text-center lg:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-t-secondary/30 blur-[120px] md:h-[400px] md:w-[800px]" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#f27f0c]  px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-t-secondary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-t-secondary"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-t-secondary md:text-xs">
            Available for New Projects
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-5xl font-black leading-[1.1] tracking-tighter text-t-primary md:text-6xl"
        >
          Crafting <span className="italic text-t-secondary">Digital</span> Masterpieces.
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="mt-6 max-w-2xl px-4 text-base leading-relaxed text-gray-500 dark:text-gray-400 md:text-lg"
        >
          I am an Associate Software Engineer specializing in high-impact web experiences.
          From Next.js and Tailwind CSS to seamless automation, I transform
          complex problems into elegant, functional solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
          className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
        >
          <a href="#projects"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-t-secondary px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_35px_rgba(234,88,12,0.6)] active:scale-95 sm:w-auto"
          >
            View My Work
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
          </a>

          <a href="#contact"
            className="group w-full rounded-xl border border-[#f27f0c] bg-white/5 px-8 py-4 font-bold text-t-primary transition-all duration-300 hover:-translate-y-1 hover:bg-t-secondary hover:text-white hover:shadow-[0_0_35px_rgba(234,88,12,0.6)] active:scale-95 sm:w-auto"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Stats Section */}
        <div className="mt-20 grid w-full max-w-3xl grid-cols-1 gap-8 border-t border-t-primary pt-10 sm:grid-cols-3 sm:gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="flex flex-col items-center"
          >
            <h3 className="text-2xl font-black text-t-primary">
              <TypingText text="Fresher" />
            </h3>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">Status</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="flex flex-col items-center border-y border-t-primary py-6 sm:border-x sm:border-y-0 sm:px-8 sm:py-0"
          >
            <h3 className="text-2xl font-black text-t-primary">
              <TypingText text="Frontend Dev" />
            </h3>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">Expertise</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
            className="flex flex-col items-center"
          >
            <h3 className="text-2xl font-black text-t-primary">
              <TypingText text="Automation" />
            </h3>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">Project</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;