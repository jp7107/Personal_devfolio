"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, User, GraduationCap, Briefcase } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";
import { EXPERIENCE, EDUCATION } from "@/data/constants";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper
      id="hero"
      className={cn("relative w-full min-h-screen flex items-center")}
    >
      {/* Main layout: left content (intro + cards) | right profile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full max-w-7xl mx-auto px-4 md:px-8 py-20 z-[2]">

        {/* ── LEFT COLUMN ── Intro heading + 2-col card sub-grid */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start w-full">
          {!isLoading && (
            <div className="flex flex-col w-full gap-5">

              {/* Heading block */}
              <div>
                <BlurIn delay={0.5}>
                  <p className="font-display font-normal text-lg text-zinc-400 tracking-wide mb-1">
                    Hi, I am
                  </p>
                </BlurIn>

                <BlurIn delay={0.75}>
                  <h1
                    className={cn(
                      "leading-[0.9] font-display font-black text-white text-left",
                      "text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem]",
                      "tracking-tight cursor-default"
                    )}
                  >
                    {config.author}
                  </h1>
                </BlurIn>

                <BlurIn delay={1}>
                  <p className="font-display font-semibold text-lg md:text-xl text-white/80 mt-2 tracking-tight">
                    Aspiring SDE/Full Stack Developer
                  </p>
                </BlurIn>
              </div>

              {/* ── 2-column card sub-grid ── */}
              <BlurIn delay={1.2}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">

                  {/* ── LEFT CARD STACK ── About Me + Education */}
                  <div className="flex flex-col gap-3">

                    {/* Card: About Me */}
                    <div className="hero-card rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <User className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <h2 className="text-[11px] font-bold text-white tracking-widest uppercase font-display">
                          About Me
                        </h2>
                      </div>
                      <p className="text-[12px] text-zinc-400 leading-relaxed font-sans">
                        I&apos;m a Computer Science Engineering student at Swami Keshvanand Institute of Technology (SKIT) Jaipur with hands-on experience in software development, AI/ML, and research-driven problem solving.
                      </p>
                      <p className="text-[12px] text-zinc-400 leading-relaxed font-sans mt-2.5">
                        Continuously strengthening expertise in Data Structures & Algorithms, Full-Stack Development, and modern software engineering practices.                      </p>
                    </div>

                    {/* Card: Education */}
                    <div className="hero-card rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <GraduationCap className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <h2 className="text-[11px] font-bold text-white tracking-widest uppercase font-display">
                          Education
                        </h2>
                      </div>
                      {EDUCATION.map((edu) => (
                        <div key={edu.id} className="font-sans">
                          <p className="text-[12px] font-semibold text-white leading-snug">
                            {edu.degree}
                          </p>
                          <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                            {edu.institution}
                          </p>
                          <p className="text-[12px] text-cyan-400 font-bold mt-2 tracking-wide">
                            {edu.startDate} – {edu.endDate}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── RIGHT CARD ── Experience & Internships (full height) */}
                  <div className="hero-card rounded-xl p-4 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <h2 className="text-[11px] font-bold text-white tracking-widest uppercase font-display">
                        Experience &amp; Internships
                      </h2>
                    </div>

                    <div className="flex flex-col gap-4 flex-1 font-sans">
                      {EXPERIENCE.slice(0, 2).map((exp, index) => (
                        <div key={exp.id}>
                          {index > 0 && (
                            <div className="border-t border-zinc-800/60 mb-4" />
                          )}
                          <h3 className="text-[12px] font-bold text-white leading-snug flex items-center gap-1.5">
                            {exp.logo && (
                              <img 
                                src={exp.logo} 
                                alt={`${exp.company} logo`} 
                                className="w-3.5 h-3.5 object-contain"
                              />
                            )}
                            <span>{exp.company} &ndash; {exp.title}</span>
                          </h3>
                          <p className="text-[10px] text-zinc-500 mt-0.5 mb-2 tracking-wide">
                            {exp.startDate} – {exp.endDate}
                          </p>
                          <ul className="list-disc list-outside ml-4 space-y-1.5">
                            {exp.description.map((desc, i) => (
                              <li
                                key={i}
                                className="text-[11px] text-zinc-400 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: desc }}
                              />
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </BlurIn>

              {/* ── Action buttons & socials ── */}
              <BlurIn delay={1.5}>
                <div className="flex flex-wrap items-center gap-3 mt-1">
                  <Link
                    href="https://drive.google.com/file/d/1HM82-wn_mlToRK1J24Yb9HdqgmnFVsf1/view?usp=sharing"
                    target="_blank"
                  >
                    <BoxReveal delay={1.8} width="fit-content">
                      <Button className="flex items-center gap-2 bg-white text-black hover:bg-white/90 rounded-full font-bold px-6 py-5 text-sm shadow-md">
                        <File size={16} />
                        <span>Resume</span>
                      </Button>
                    </BoxReveal>
                  </Link>

                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href="#contact">
                        <Button className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 rounded-full font-bold px-6 py-5 text-sm">
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Let&apos;s work together!</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Social icons */}
                  <div className="flex items-center gap-2 ml-1">
                    <Link href={config.social.github} target="_blank">
                      <Button
                        variant="outline"
                        className="rounded-full border-zinc-700 bg-transparent text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/50 p-0 h-9 w-9 flex items-center justify-center"
                      >
                        <SiGithub size={15} />
                      </Button>
                    </Link>
                    <Link href={config.social.linkedin} target="_blank">
                      <Button
                        variant="outline"
                        className="rounded-full border-zinc-700 bg-transparent text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/50 p-0 h-9 w-9 flex items-center justify-center"
                      >
                        <FaLinkedin size={15} />
                      </Button>
                    </Link>
                    <Link href={config.social.twitter} target="_blank">
                      <Button
                        variant="outline"
                        className="rounded-full border-zinc-700 bg-transparent text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/50 p-0 h-9 w-9 flex items-center justify-center"
                      >
                        <SiX size={14} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </BlurIn>
            </div>
          )}
        </div>

        {/* ── RIGHT COLUMN ── Profile Image */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center mt-12 lg:mt-0">
          <div className="relative animate-fade-in animation-delay-300 flex items-center justify-center">
            <div className="relative max-w-[13rem] sm:max-w-[15rem] md:max-w-[17rem] mx-auto">
              {/* Outer ambient glow */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-cyan-500/15 via-violet-500/15 to-pink-500/10 blur-3xl" />

              {/* Spinning conic-gradient border */}
              <div className="profile-card-wrapper">
                <div className="profile-card-inner">
                  <img
                    src="/profile-photo.jpg"
                    alt="Jyotiprakash Jangid"
                    className="w-full aspect-[4/5] object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 animate-float z-10 shadow-xl shadow-cyan-500/10 whitespace-nowrap border border-zinc-700/60">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/50 flex-shrink-0" />
                  <span className="text-[11px] font-semibold text-white tracking-wide">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
