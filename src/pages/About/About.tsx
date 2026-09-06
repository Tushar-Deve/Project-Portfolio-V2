import { motion, useReducedMotion } from "motion/react";
import type { IconType } from "react-icons";
import { FaBolt, FaCode, FaPlug, FaRobot } from "react-icons/fa";
import {
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostman,
  SiReact,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const introductionLines = [
  "I'm Tushar, a Web Developer with an M.Sc. in Computer Science.",
  "I love to create modern responsive and interactive web experiences.",
  "I'm passionate about coding, exploring new technologies, and continuously",
  "learning new things in the world of web development.",
  "I enjoy turning creative ideas into clean, engaging, and meaningful digital experiences.",
];

type Skill = {
  label: string;
  color: string;
  Icon?: IconType;
};

type SkillGroup = {
  title: string;
  skills: Skill[];
};

const CursorIcon: IconType = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
  </svg>
);

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    skills: [
      { label: "React", color: "#61dafb", Icon: SiReact },
      { label: "Next.js", color: "#f5f1ea", Icon: SiNextdotjs },
      { label: "JavaScript", color: "#f7df1e", Icon: SiJavascript },
      { label: "HTML", color: "#e34f26", Icon: SiHtml5 },
      { label: "CSS", color: "#1572b6", Icon: SiCss },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { label: "Node.js", color: "#339933", Icon: SiNodedotjs },
      { label: "Express.js", color: "#f5f1ea", Icon: SiExpress },
      { label: "REST APIs", color: "#6ca9df", Icon: FaPlug },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { label: "VS Code", color: "#007acc", Icon: VscVscode },
      { label: "Vite", color: "#a855f7", Icon: SiVite },
      { label: "npm", color: "#cb3837", Icon: SiNpm },
    ],
  },
  {
    title: "AI Tools",
    skills: [
      { label: "Cursor", color: "#f5f1ea", Icon: CursorIcon },
      { label: "Codex", color: "#d8d1ca", Icon: FaCode },
      { label: "GitHub Copilot", color: "#c8b9e8", Icon: FaRobot },
    ],
  },
  {
    title: "Testing Tools",
    skills: [
      { label: "Postman", color: "#ff6c37", Icon: SiPostman },
      { label: "Thunder Client", color: "#5da9e9", Icon: FaBolt },
    ],
  },
  {
    title: "Version Control",
    skills: [
      { label: "Git", color: "#f05032", Icon: SiGit },
      { label: "GitHub", color: "#f5f1ea", Icon: SiGithub },
    ],
  },
];

function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-label="About"
      className="relative min-h-[calc(100dvh-4rem)] scroll-mt-16"
    >
      <div className="mx-auto grid min-h-[calc(100dvh-4rem)] w-full max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16 lg:px-16 lg:py-20">
        <Introduction />
        <div className="relative -top-6 grid grid-cols-1 gap-10 self-center sm:-top-16 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: Math.floor(index / 2) * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={shouldReduceMotion ? undefined : {
                y: -2,
                scale: 1.01,
                transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
              }}
              className="flex h-[7.25rem] flex-col items-center justify-center rounded-xl border border-accent/15 bg-ink-soft/10 p-4 text-center backdrop-blur-[2px] transition-colors duration-200 hover:border-accent/40 sm:h-[8.25rem]"
            >
              <h3 className="font-display text-base font-semibold tracking-wide text-white sm:text-lg">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {group.skills.map(({ label, color, Icon }) => (
                  <span
                    key={label}
                    className="inline-flex max-w-full items-center gap-1.5 rounded-md border border-white/10 bg-black/10 px-2 py-1 text-xs font-medium leading-none text-[#e8e2dc] sm:text-sm"
                  >
                    {Icon ? <Icon aria-hidden="true" className="size-3 shrink-0" style={{ color }} /> : null}
                    <span className="truncate">{label}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Introduction() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative -top-6 max-w-3xl px-1 py-4 sm:-top-16 sm:px-4 sm:py-6">
      <p className="relative -top-9 -left-2 mb-[-0.25rem] text-[2rem] font-bold leading-none tracking-[0.02em] text-accent-soft">
        ~ About Me ~
      </p>
      <motion.h2
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative -top-2 -left-1 font-display text-5xl leading-[0.95] font-bold tracking-[-0.045em] text-white sm:-left-2 sm:text-6xl"
      >
        Myself, Tushar
      </motion.h2>

      <p className="relative -left-1 mt-12 max-w-3xl break-words text-xl font-semibold leading-relaxed text-white sm:-left-2 sm:text-2xl">
        {introductionLines.map((line, index) => (
          <motion.span
            key={line}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{
              duration: 0.55,
              delay: 0.1 + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="block"
          >
            {line}
          </motion.span>
        ))}
      </p>
    </div>
  );
}


export default About;
