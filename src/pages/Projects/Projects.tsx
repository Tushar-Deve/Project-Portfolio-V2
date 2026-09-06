
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ExternalLink, GitBranch, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, type Project } from "../../data/projects";

const slideEase = [0.22, 1, 0.36, 1] as const;
type NavigationDirection = "left" | "right";

function ProjectImage({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-t-xl bg-ink-soft/80 ${
        compact ? "aspect-[16/8]" : "aspect-[16/7]"
      }`}
    >
      <img
        src={project.image}
        alt={`${project.title} preview`}
        className="h-full w-full object-contain"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

function TechnologyBadge({ technology }: { technology: string }) {
  return (
    <span className="rounded-sm border border-accent/20 bg-accent/5 px-2 py-1 text-[11px] text-[#e7d9cc]">
      {technology}
    </span>
  );
}

function MainProjectCard({
  project,
  navigationDirection,
}: {
  project: Project;
  navigationDirection: NavigationDirection;
}) {
  return (
    <motion.article
      key={project.id}
      initial={{ opacity: 0, x: navigationDirection === "left" ? 24 : -24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: navigationDirection === "left" ? -24 : 24 }}
      transition={{ duration: 0.55, ease: slideEase }}
      className="group overflow-hidden rounded-xl border border-accent/45 bg-ink-soft/55 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-md"
    >
      <ProjectImage project={project} />

      <div className="flex min-h-[10.75rem] flex-col p-2.5 sm:min-h-[11.75rem] sm:p-3.5">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {project.title}
        </h2>

        <p className="mt-1 text-sm leading-relaxed text-[#b7ada4] sm:text-base">
          {project.description}
        </p>

        <div className="mt-1.5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechnologyBadge key={technology} technology={technology} />
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-2 pt-2.5 sm:flex-row">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm border border-white/15 px-3 py-2 text-sm font-medium text-[#f5f1ea] transition-colors hover:border-accent/60 hover:bg-accent/10"
          >
            <GitBranch size={15} aria-hidden="true" />
            GitHub Repository
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-accent px-3 py-2 text-sm font-semibold text-[#fff8f2] transition-colors hover:bg-accent-soft"
          >
            <ExternalLink size={15} aria-hidden="true" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function PreviewCard({
  project,
  direction,
  navigationDirection,
}: {
  project: Project;
  direction: "left" | "right";
  navigationDirection: NavigationDirection;
}) {
  return (
    <motion.article
      key={`${direction}-${project.id}`}
      initial={{
        opacity: 0,
        x: navigationDirection === "left" ? 18 : -18,
        scale: 0.94,
      }}
      animate={{ opacity: 0.7, x: 0, scale: 1 }}
      exit={{
        opacity: 0,
        x: navigationDirection === "left" ? -18 : 18,
        scale: 0.94,
      }}
      transition={{ duration: 0.55, ease: slideEase }}
      className="group hidden self-center overflow-hidden rounded-xl border border-white/10 bg-ink-soft/25 shadow-[0_12px_35px_rgba(0,0,0,0.18)] backdrop-blur-sm md:block"
    >
      <ProjectImage project={project} compact />

      <div className="p-2.5">
        <h3 className="font-display text-lg font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#aaa099]">
          {project.description}
        </p>
      </div>
    </motion.article>
  );
}

function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [interactionVersion, setInteractionVersion] = useState(0);
  const [navigationDirection, setNavigationDirection] = useState<NavigationDirection>("right");

  const updateProject = (nextIndex: number, direction: NavigationDirection) => {
    setActiveIndex(nextIndex);
    setNavigationDirection(direction);
    setInteractionVersion((current) => current + 1);
  };

  const goToPreviousProject = () => {
    updateProject((activeIndex - 1 + projects.length) % projects.length, "left");
  };

  const goToNextProject = () => {
    updateProject((activeIndex + 1) % projects.length, "right");
  };

  useEffect(() => {
    if (shouldReduceMotion || projects.length < 2) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
      setNavigationDirection("right");
    }, 4500);

    return () => window.clearTimeout(timer);
  }, [activeIndex, interactionVersion, shouldReduceMotion]);

  const previousProject =
    projects[(activeIndex - 1 + projects.length) % projects.length];

  const activeProject = projects[activeIndex];

  const nextProject = projects[(activeIndex + 1) % projects.length];

  return (
    <section
      id="projects"
      aria-label="Projects"
      className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden scroll-mt-16 px-5 py-3 sm:px-8 sm:py-4 lg:px-16 lg:py-5"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-center">
        {/* Header */}
        <header className="relative -top-8 max-w-2xl pl-1 sm:-top-10 sm:pl-4 lg:-top-8">
          <p className="text-2xl font-bold uppercase tracking-[0.28em] text-accent-soft">
            ~ Portfolio ~
          </p>

          <h1 className="mt-1 font-display text-5xl font-bold tracking-[-0.045em] text-white sm:text-4xl">
            Projects :
          </h1>

          <p className="mt-2 max-w-xl text-base leading-relaxed text-[#aaa099] sm:text-lg">
            A selection of practical work that reflects how I build thoughtful,
            responsive, and engaging web experiences.
          </p>
        </header>

        {/* Carousel and pagination */}
        <div className="relative -top-1 mt-2 flex w-full flex-col items-center">
          <div className="relative mx-auto grid w-full max-w-[1120px] items-center gap-4 md:grid-cols-[minmax(0,0.65fr)_minmax(0,1.15fr)_minmax(0,0.65fr)] lg:gap-6">
          <button
            type="button"
            aria-label="Previous project"
            onClick={goToPreviousProject}
            className="absolute -left-2 top-1/2 z-20 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-accent/30 bg-ink/70 text-accent-soft backdrop-blur-sm transition hover:border-accent/70 hover:bg-accent/10 md:-left-10 lg:-left-20"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>

          <AnimatePresence mode="wait" initial={false}>
            <PreviewCard
              key={`previous-${previousProject.id}`}
              project={previousProject}
              direction="left"
              navigationDirection={navigationDirection}
            />
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <MainProjectCard
              key={`active-${activeProject.id}`}
              project={activeProject}
              navigationDirection={navigationDirection}
            />
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <PreviewCard
              key={`next-${nextProject.id}`}
              project={nextProject}
              direction="right"
              navigationDirection={navigationDirection}
            />
          </AnimatePresence>

          <button
            type="button"
            aria-label="Next project"
            onClick={goToNextProject}
            className="absolute -right-2 top-1/2 z-20 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-accent/30 bg-ink/70 text-accent-soft backdrop-blur-sm transition hover:border-accent/70 hover:bg-accent/10 md:-right-10 lg:-right-20"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2" aria-label="Project pagination">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              aria-label={`Show ${project.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => {
                updateProject(index, index >= activeIndex ? "right" : "left");
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-7 bg-accent-soft"
                  : "w-1.5 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

