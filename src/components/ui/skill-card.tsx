"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

export const SkillCard = ({ name, icon, color, delay = 0 }: SkillCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Framer Motion values for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for fluid movement
  const springX = useSpring(x, { stiffness: 400, damping: 30 });
  const springY = useSpring(y, { stiffness: 400, damping: 30 });

  // Convert mouse position to rotation angles
  const rotateX = useMotionTemplate`calc(${springY} * -15deg)`;
  const rotateY = useMotionTemplate`calc(${springX} * 15deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse position relative to center of card (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay * 0.05 }}
      style={{ perspective: 1000 }}
      className="group relative"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative flex items-center gap-4 p-4 md:p-5 rounded-2xl glass border border-white/5 bg-white/5 dark:bg-black/20 hover:bg-white/10 dark:hover:bg-white/5 transition-colors cursor-pointer"
      >
        {/* Animated Glow Drop Shadow (Only visible on hover) */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
          style={{ backgroundColor: color, opacity: 0.15 }}
        />

        {/* Inner Card Outline that colored glows on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: `inset 0 0 0 1px ${color}80` }}
        />

        {/* Icon Floating Effect */}
        <div
          className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 dark:bg-white/5 border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300"
          style={{ color: color, transform: "translateZ(30px)" }} // Pops out in 3D
        >
          {icon}
        </div>

        {/* Text Area */}
        <div className="flex flex-col flex-1" style={{ transform: "translateZ(20px)" }}>
          <span className="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-white transition-colors">
            {name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};
