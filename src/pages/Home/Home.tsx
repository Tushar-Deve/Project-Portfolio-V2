import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Download, Mail } from "lucide-react";

const rotatingPhrases = [
  "Building modern web experiences.",
  "Turning ideas into interactive products.",
  "Creating scalable web applications.",
  "Exploring AI & LLM technologies.",
];

function RotatingPhrase() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % rotatingPhrases.length);
    }, 3400);

    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <p className="min-h-[1.6em] text-base text-zinc-300 sm:text-lg">
        {rotatingPhrases[0]}
      </p>
    );
  }

  return (
    <div className="relative min-h-[1.6em] overflow-hidden text-lg text-zinc-300 sm:text-xl">
      <AnimatePresence mode="wait">
        <motion.p
          key={rotatingPhrases[index]}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {rotatingPhrases[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative isolate min-h-[calc(100dvh-4rem)] scroll-mt-16 overflow-hidden">
      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-4rem)] max-w-[1440px] items-center px-5 py-16 sm:px-8 lg:px-16 lg:py-20">
        <h2 className="absolute left-7 top-12 text-[2rem] font-bold leading-none tracking-tight text-accent-soft sm:left-12 lg:left-20">
          ~ Home ~
        </h2>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl px-1 py-8 sm:px-4 sm:py-10"
        >
          <h1 className="font-display text-[4rem] leading-[0.9] font-bold tracking-[-0.055em] text-white sm:text-7xl lg:text-[5rem]">
            Hello, I'm Tushar
          </h1>

          <p className="mt-6 text-4xl font-medium uppercase tracking-[0.28em] text-accent-soft sm:text-3xl">
            Web Developer
          </p>

          <div className="mt-6">
            <RotatingPhrase />
          </div>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-[#a9a19a] sm:text-xl"
          >
            I design and build thoughtful, responsive web experiences that balance strong engineering with clear, usable interfaces.
          </motion.p>

          <div className="mt-9">
            <motion.div whileHover={shouldReduceMotion ? undefined : { y: -2 }} whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}>
              <a
                href="/resume/Tushar-Resume-1.pdf"
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-accent/70 bg-accent px-5 py-3 text-md font-semibold tracking-wide text-[#fff8f2] transition-colors duration-200 hover:bg-accent-soft sm:w-auto"
              >
                <Download size={16} aria-hidden="true" />
                Download Resume
              </a>
            </motion.div>
          </div>

          <div className="mt-10 flex w-fit items-center justify-center gap-9 sm:gap-15">
            <a href="https://github.com/Tushar-Deve" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[#e6edf3] transition duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(230,237,243,0.35)]"><svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.54 1.04 1.54 1.04.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.5c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg></a>
            <a href="https://www.linkedin.com/in/tusharjaura70" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[#0a8fe8] transition duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(10,143,232,0.4)]"><svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden="true"><path d="M5.1 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.3 8.9h3.6V20H3.3V8.9Zm5.9 0h3.45v1.52h.05c.48-.91 1.66-1.87 3.42-1.87 3.66 0 4.34 2.41 4.34 5.54V20h-3.6v-5.2c0-1.24-.02-2.83-1.72-2.83-1.73 0-2 1.35-2 2.74V20H9.2V8.9Z" /></svg></a>
            <a href="" target="_blank" rel="noreferrer" aria-label="Email Tushar" className="text-[#ea6a47] transition duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(234,106,71,0.4)]"><Mail size={28} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
