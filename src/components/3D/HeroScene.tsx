import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "motion/react";
import type { Group, Points } from "three";
import { BufferAttribute, BufferGeometry } from "three";
import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiCss,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

type Technology = {
  label: string;
  Icon: IconType;
  color: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  depth: "near" | "mid" | "far";
  rotation: string;
};

const technologies: Technology[] = [
  { label: "React.js", Icon: SiReact, color: "#61dafb", left: "20%", size: 70, duration: 16, delay: 0, depth: "near", rotation: "-14deg" },
  { label: "Next.js", Icon: SiNextdotjs, color: "#f5f1ea", left: "68%", size: 65, duration: 16.15, delay: 0.62, depth: "mid", rotation: "8deg" },
  { label: "Visual Studio Code", Icon: VscVscode, color: "#38a8ff", left: "41%", size: 70, duration: 15.9, delay: 1.21, depth: "near", rotation: "12deg" },
  { label: "MySQL", Icon: SiMysql, color: "#4d9bbd", left: "78%", size: 63, duration: 16.1, delay: 1.83, depth: "far", rotation: "-10deg" },
  { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8", left: "30%", size: 68, duration: 15.85, delay: 2.56, depth: "near", rotation: "-7deg" },
  { label: "Python", Icon: SiPython, color: "#ffd343", left: "56%", size: 65, duration: 16.2, delay: 3.29, depth: "mid", rotation: "14deg" },
  { label: "JavaScript", Icon: SiJavascript, color: "#f7df1e", left: "10%", size: 68, duration: 16.05, delay: 3.91, depth: "near", rotation: "-11deg" },
  { label: "Node.js", Icon: SiNodedotjs, color: "#74b749", left: "72%", size: 60, duration: 15.95, delay: 4.57, depth: "far", rotation: "9deg" },
  { label: "Express.js", Icon: SiExpress, color: "#e8e2dc", left: "47%", size: 63, duration: 16.1, delay: 5.22, depth: "mid", rotation: "-16deg" },
  { label: "GitHub", Icon: SiGithub, color: "#f5f1ea", left: "80%", size: 65, duration: 15.9, delay: 5.94, depth: "mid", rotation: "5deg" },
  { label: "Bootstrap", Icon: SiBootstrap, color: "#a855f7", left: "25%", size: 60, duration: 16.15, delay: 6.55, depth: "far", rotation: "-5deg" },
  { label: "TypeScript", Icon: SiTypescript, color: "#3178c6", left: "61%", size: 63, duration: 16.05, delay: 7.26, depth: "far", rotation: "15deg" },
  { label: "React.js", Icon: SiReact, color: "#61dafb", left: "35%", size: 60, duration: 15.85, delay: 7.88, depth: "mid", rotation: "-12deg" },
  { label: "Next.js", Icon: SiNextdotjs, color: "#f5f1ea", left: "15%", size: 58, duration: 16.2, delay: 8.61, depth: "far", rotation: "8deg" },
  { label: "Visual Studio Code", Icon: VscVscode, color: "#38a8ff", left: "75%", size: 60, duration: 15.95, delay: 9.22, depth: "far", rotation: "-8deg" },
  { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8", left: "52%", size: 63, duration: 16.1, delay: 9.96, depth: "mid", rotation: "11deg" },
  { label: "Python", Icon: SiPython, color: "#ffd343", left: "6%", size: 58, duration: 15.9, delay: 10.6, depth: "far", rotation: "-15deg" },
  { label: "JavaScript", Icon: SiJavascript, color: "#f7df1e", left: "69%", size: 60, duration: 16.15, delay: 11.33, depth: "mid", rotation: "6deg" },
  { label: "Node.js", Icon: SiNodedotjs, color: "#74b749", left: "43%", size: 58, duration: 16.05, delay: 11.97, depth: "far", rotation: "-6deg" },
  { label: "GitHub", Icon: SiGithub, color: "#f5f1ea", left: "79%", size: 60, duration: 15.85, delay: 12.68, depth: "mid", rotation: "13deg" },
  { label: "HTML5", Icon: SiHtml5, color: "#e34f26", left: "28%", size: 65, duration: 16.2, delay: 13.28, depth: "mid", rotation: "-9deg" },
  { label: "CSS3", Icon: SiCss, color: "#1572b6", left: "58%", size: 63, duration: 15.95, delay: 13.96, depth: "far", rotation: "10deg" },
  { label: "Redux", Icon: SiRedux, color: "#764abc", left: "18%", size: 65, duration: 16.1, delay: 14.58, depth: "mid", rotation: "-13deg" },
  { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169e1", left: "74%", size: 63, duration: 15.9, delay: 15.34, depth: "far", rotation: "7deg" },
];

function TechnologyRain({ reduced }: { reduced: boolean }) {
  return (
    <div className="tech-rain" aria-hidden="true">
      {technologies.map(({ Icon, ...technology }, index) => (
        <div
          className={`tech-rain-item tech-rain-item--${technology.depth}`}
          key={`${technology.label}-${index}`}
          style={{
            left: technology.left,
            width: technology.size,
            height: technology.size,
            ["--fall-duration" as string]: `${technology.duration}s`,
            ["--fall-delay" as string]: `-${technology.delay}s`,
            ["--object-rotation" as string]: technology.rotation,
            ["--logo-color" as string]: technology.color,
            animationPlayState: reduced ? "paused" : "running",
          }}
        >
          <div className="tech-object" title={technology.label}>
            <Icon className="tech-object__icon" />
          </div>
        </div>
      ))}
    </div>
  );
}

function Particles({ reduced }: { reduced: boolean }) {
  const ref = useRef<Points>(null);
  const geometry = useMemo(() => {
    const positions = new Float32Array(174);
    for (let i = 0; i < 58; i += 1) {
      positions[i * 3] = ((i * 37) % 97) / 12 - 4;
      positions[i * 3 + 1] = ((i * 53) % 109) / 13 - 4.2;
      positions[i * 3 + 2] = -1.5 - ((i * 17) % 31) / 10;
    }
    const nextGeometry = new BufferGeometry();
    nextGeometry.setAttribute("position", new BufferAttribute(positions, 3));
    return nextGeometry;
  }, []);
  useFrame((_, delta) => {
    if (!ref.current || reduced) return;
    ref.current.rotation.z += delta * 0.008;
    ref.current.rotation.y += delta * 0.012;
  });
  return <points ref={ref} geometry={geometry}><pointsMaterial color="#e58a3a" size={0.026} transparent opacity={0.43} depthWrite={false} /></points>;
}

function AmbientGeometry({ reduced }: { reduced: boolean }) {
  const group = useRef<Group>(null);
  useFrame((_, delta) => {
    if (!group.current || reduced) return;
    group.current.rotation.y += delta * 0.045;
    group.current.rotation.z += delta * 0.014;
  });
  return <group ref={group}><mesh position={[-3.4, 1.7, -1.2]} rotation={[0.7, 0.4, 0]}><torusGeometry args={[0.48, 0.018, 8, 32]} /><meshBasicMaterial color="#c96a24" transparent opacity={0.38} /></mesh><mesh position={[0.4, -2.2, -2.1]} rotation={[0.3, 0.6, 0.2]}><boxGeometry args={[0.48, 0.48, 0.48]} /><meshBasicMaterial color="#e58a3a" wireframe transparent opacity={0.25} /></mesh><mesh position={[3.6, 2.4, -2.8]}><sphereGeometry args={[0.22, 16, 16]} /><meshBasicMaterial color="#c96a24" transparent opacity={0.3} /></mesh><Particles reduced={reduced} /></group>;
}

function HeroScene() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  return <div className="absolute inset-0 overflow-hidden"><Canvas className="absolute inset-0" camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]} frameloop={shouldReduceMotion ? "demand" : "always"} gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }} style={{ pointerEvents: "none" }}><AmbientGeometry reduced={shouldReduceMotion} /></Canvas><TechnologyRain reduced={shouldReduceMotion} /><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_42%,transparent_0%,rgba(15,13,11,0.18)_46%,rgba(15,13,11,0.72)_100%)]" /></div>;
}

export default HeroScene;
