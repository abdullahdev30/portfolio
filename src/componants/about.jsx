"use client"
import React from 'react';
import { MapPin, Briefcase, Calendar, Globe, Download } from 'lucide-react';
import { useState } from "react";
import { motion } from "framer-motion"; 

const About = () => {
    const [active, setActive] = useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf'; 
        link.download = 'Abdullah_Shafique_CV.pdf';
        link.click();
    };

    // Animation Variants
    const fadeInSide = (direction) => ({
        hidden: { opacity: 0, x: direction === 'left' ? -50 : 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    });

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="w-full bg-primary px-6 md:px-8 py-12 md:py-20 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    
                    {/* LEFT SIDE: IMAGE WITH MOTION */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={fadeInSide('left')}
                        className="relative group max-w-md mx-auto lg:max-w-none cursor-pointer"
                        onClick={() => setActive(!active)}
                    >
                        {/* Glow Layer */}
                        <div
                            className={`absolute -inset-1 bg-t-secondary rounded-2xl blur transition duration-700
                            ${active ? "opacity-100" : "opacity-25 group-hover:opacity-100"}`}
                        ></div>

                        {/* Image Container */}
                        <div className="relative overflow-hidden rounded-2xl bg-[#2a2118] border border-white/5">
                            <img
                                src="/images/about.png"
                                alt="Abdullah Shafique"
                                className={`w-full h-auto object-cover aspect-[4/5] transition-all duration-500
                                ${active ? "opacity-100 grayscale-0" : "opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0"}`}
                            />
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: CONTENT WITH MOTION */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={fadeInSide('right')}
                        className="text-center lg:text-left"
                    >
                        <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                            <span className="text-3xl font-semibold md:text-xl font-black text-t-secondary uppercase tracking-tight">About Me</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-t-primary leading-tight">
                            Software Engineer & <br />
                            <span className="text-t-secondary">Automation Engineer</span>
                        </h2>

                        <p className="mt-6 text-gray-400 leading-relaxed text-base md:text-lg">
                            I am a dedicated software engineer with a passion for building high-quality digital experiences. 
                            With a focus on modern aesthetics and functional design, I work at brands like <span className="text-t-primary font-semibold">Devisgon</span> stand out 
                            in the digital landscape using bold accents and high-performance code.
                        </p>

                        {/* Info Grid - Animating children separately */}
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 border-y border-white/5 py-10">
                            {[
                                { icon: <MapPin size={22} />, label: "Location", value: "Okara, Pakistan" },
                                { icon: <Briefcase size={22} />, label: "Experience", value: "Associate Software Engineer" },
                                { icon: <Calendar size={22} />, label: "Availability", value: "Open to Projects" },
                                { icon: <Globe size={22} />, label: "LinkedIn", value: "Abdullah Shafique", link: "https://www.linkedin.com/in/abdullah-shafique-29b337280" }
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false }}
                                    transition={{ delay: index * 0.5 }} // Stagger effect
                                    className="flex items-center gap-4"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-t-secondary/10 text-t-secondary shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.label}</p>
                                        {item.link ? (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white font-bold underline decoration-t-secondary/30 hover:text-t-secondary transition-colors">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-white font-bold">{item.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Actions */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.5 }}
                            className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4"
                        >
                            <button 
                                onClick={handleDownload}
                                className="flex items-center justify-center gap-2 rounded-xl bg-t-secondary px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(234,88,12,0.4)]"
                            >
                                <Download size={20} /> Download CV
                            </button>
                            <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-t-secondary transition-all hover:bg-t-secondary/10 hover:shadow-[0_0_25px_rgba(234,88,12,0.4)]">
                                Contact Information
                            </button>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;