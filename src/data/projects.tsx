import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { FaBrain } from "react-icons/fa";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiFastapi,
  SiRedis,
  SiScikitlearn
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <SiRedis />,
  },
  scikitlearn: {
    title: "Scikit-Learn",
    bg: "black",
    fg: "white",
    icon: <SiScikitlearn />,
  },
  groq: {
    title: "Groq (Llama 3)",
    bg: "black",
    fg: "white",
    icon: <FaBrain />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "cyberguard-ai-honeypot",
    category: "AI / CyberSecurity",
    title: "CyberGuard AI-Powered Scam Honeypot System",
    src: "/assets/projects-screenshots/cyberguard/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.react,
      ],
      backend: [
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.groq,
        PROJECT_SKILLS.scikitlearn,
      ],
    },
    live: "https://cyberguard77.vercel.app",
    github: "https://github.com/jp7107/CyberGuard-AI-Powered-Scam-Honeypot-System",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl mb-4">
            A state-of-the-art "National-Level" AI honeypot designed to engage, analyze, and expose digital scammers.
          </TypographyP>
          <TypographyP className="font-mono mb-4">
            By simulating vulnerable personas, CyberGuard wastes scammers' time while extracting critical threat intelligence like Bank Accounts, UPI IDs, and Phone Numbers in real-time.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Threat Intelligence Extraction</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
             <li>🏦 Bank Account Numbers</li>
             <li>💸 UPI IDs</li>
             <li>🔗 Phishing Links</li>
             <li>📞 Phone Numbers</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Technology Stack</TypographyH3>
          <div className="font-mono space-y-2">
            <p><strong>Frontend:</strong> Next.js 14, TailwindCSS for responsive dashboard & chat UI</p>
            <p><strong>Backend:</strong> FastAPI (Python) high-performance async API</p>
            <p><strong>AI Core:</strong> Groq API (Llama 3) ultra-fast inference for real-time replies</p>
            <p><strong>Database:</strong> Redis (Upstash) for session management & MongoDB Atlas for long-term intelligence storage</p>
            <p><strong>ML Engine:</strong> Scikit-Learn Naive Bayes Classifier for scam detection</p>
          </div>

          <TypographyH3 className="my-4 mt-8">Platform Preview</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/cyberguard/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "zktls-donation",
    category: "Blockchain",
    title: "Decentralized Verifiable Donation Platform Using ZkTLS",
    src: "/assets/projects-screenshots/zktls-donation/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
      ],
    },
    live: "https://charity-hackathon.vercel.app",
    github: "https://github.com/jp7107",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl mb-4">
            A decentralized donation platform that leverages ZkTLS (Zero-Knowledge Transport Layer Security) 
            to ensure transparent and verifiable charitable donations on the blockchain.
          </TypographyP>
          <TypographyP className="font-mono mb-4">
            This platform incentivizes honest behavior by providing cryptographic proof of donations 
            while maintaining donor privacy through zero-knowledge proofs.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Web3 wallet integration for seamless blockchain transactions</li>
            <li>ZkTLS implementation for verifiable donations without compromising privacy</li>
            <li>Smart contracts deployed on Monad EVM for efficient transaction processing</li>
            <li>Dynamic UI with real-time donation tracking</li>
            <li>RESTful API backend for data management</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Technology Stack</TypographyH3>
          <div className="font-mono space-y-2">
            <p><strong>Frontend:</strong> Next.js, TypeScript, React, Tailwind CSS, Web3 wallet integration</p>
            <p><strong>Backend:</strong> Node.js, Express.js, REST APIs</p>
            <p><strong>Blockchain:</strong> Monad EVM, Solidity, ZkTLS logic</p>
          </div>

          <TypographyH3 className="my-4 mt-8">Platform Preview</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/zktls-donation/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "blood-donation-network",
    category: "Full Stack / Web App",
    title: "Blood Donation Network",
    src: "/assets/projects-screenshots/bloodnet/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.sockerio,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "#",
    github: "https://github.com/jp7107/Real-Time-Blood-Donor-Network",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl mb-4">
            The Blood Donation Network is a real-time, location-aware platform designed to eliminate fatal delays in emergency blood procurement.
          </TypographyP>
          <TypographyP className="font-mono mb-4">
            By seamlessly connecting eligible blood donors, hospitals, and patients, the platform ensures rapid response to critical blood shortages.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
             <li>🏥 Real-time Hospital Dashboard for emergency requests</li>
             <li>❤️ Donor Dashboard for managing availability</li>
             <li>📍 Location-aware donor matching</li>
             <li>⚡ Instant notifications and real-time updates</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Technology Stack</TypographyH3>
          <div className="font-mono space-y-2">
            <p><strong>Frontend:</strong> Next.js, React, Tailwind CSS</p>
            <p><strong>Backend:</strong> Node.js, Express.js</p>
            <p><strong>Real-time Comm:</strong> Socket.io</p>
            <p><strong>Database:</strong> MongoDB</p>
          </div>

          <TypographyH3 className="my-4 mt-8">Platform Preview</TypographyH3>
          <SlideShow images={[`${BASE_PATH}/bloodnet/landing.png`]} />
        </div>
      );
    },
  },
];
export default projects;
