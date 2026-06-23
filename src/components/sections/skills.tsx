"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SkillCard } from "../ui/skill-card";
import { motion } from "framer-motion";

// Official Brand Icons
import { 
  SiC, SiCplusplus, SiJavascript,
  SiGooglecloud, SiFirebase,
  SiFastapi, SiNodedotjs, SiNextdotjs, SiExpress, SiJsonwebtokens, SiSocketdotio,
  SiVite, SiReact, SiThreedotjs, SiWeb3Dotjs,
  SiNodemon,
  SiMongodb, SiMysql, SiRedis,
  SiPytorch, SiTensorflow, SiNumpy, SiPandas, SiScikitlearn,
  SiGit, SiGithub
} from "react-icons/si";
import { FaBrain, FaChartLine, FaRobot, FaAmazon } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { GrOracle } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";


const SKILL_CATEGORIES = [
  {
    category: "Programming",
    skills: [
      { name: "C", icon: <SiC />, color: "#A8B9CC" },
      { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    ]
  },
  {
    category: "Cloud",
    skills: [
      { name: "AWS", icon: <FaAmazon />, color: "#232F3E" },
      { name: "Azure", icon: <VscAzure />, color: "#0089D6" },
      { name: "Google Cloud", icon: <SiGooglecloud />, color: "#4285F4" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
      { name: "Oracle", icon: <GrOracle />, color: "#F80000" },
    ]
  },
  {
    category: "Backend / Frameworks",
    skills: [
      { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
      { name: "Express.js", icon: <SiExpress />, color: "#000000" },
      { name: "JWT", icon: <SiJsonwebtokens />, color: "#000000" },
      { name: "Socket.io", icon: <SiSocketdotio />, color: "#010101" },
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "Vite.js", icon: <SiVite />, color: "#646CFF" },
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Three.js", icon: <SiThreedotjs />, color: "#000000" },
      { name: "Web3.js", icon: <SiWeb3Dotjs />, color: "#F16822" },
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
    ]
  },
  {
    category: "AI / Data Science",
    skills: [
      { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
      { name: "NumPy", icon: <SiNumpy />, color: "#013243" },
      { name: "Pandas", icon: <SiPandas />, color: "#150458" },
      { name: "Matplotlib", icon: <FaChartLine />, color: "#11557C" },
      { name: "Scikit-learn", icon: <SiScikitlearn />, color: "#F7931E" },
      { name: "LLM", icon: <FaBrain />, color: "#8B5CF6" },
      { name: "RAG", icon: <FaRobot />, color: "#3B82F6" },
    ]
  },
  {
    category: "DevOps & Version Control",
    skills: [
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#181717" },
    ]
  }
];

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" className="w-full min-h-screen pt-20 pb-32">
      <SectionHeader id="skills" title="Tech Stack" />
      
      <div className="flex flex-col gap-16 mt-16 max-w-7xl mx-auto px-4 md:px-8">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div 
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 dark:from-white dark:to-gray-400">
              {category.category}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.skills.map((skill, index) => (
                <SkillCard 
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  color={skill.color}
                  delay={index}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
