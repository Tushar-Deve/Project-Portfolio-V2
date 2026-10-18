import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Award, Briefcase, Calendar, CheckCircle2, Eye } from "lucide-react";
import { experiences, internshipCertificate } from "../../data/experience";

type ExperienceProps = {
  onViewCertificate: () => void;
};

export default function Experience({ onViewCertificate }: ExperienceProps) {
  const shouldReduceMotion = useReducedMotion();
  const primaryExperience = experiences[0];
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      id="experience"
      aria-label="Experience and Internship"
      className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-visible scroll-mt-16 px-5 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-14"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-center">
        {/* Section Header */}
        <header className="relative max-w-2xl pl-1 sm:pl-4">
          <p className="text-2xl font-bold uppercase tracking-[0.28em] text-accent-soft">
            ~ Experience ~
          </p>

          <h1 className="mt-1 font-display text-4xl font-bold tracking-[-0.045em] text-white sm:text-5xl">
            Work Experience :
          </h1>

          <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-[#aaa099] sm:text-base">
            Professional experience, hands-on internships, and verified credentials.
          </p>
        </header>

        {/* Experience Content Cards */}
        <div className="mt-6 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.85fr)] lg:gap-6">
          {/* Main Experience Details Card */}
          <motion.article
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col justify-between rounded-xl border border-accent/35 bg-ink-soft/45 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-300 hover:border-accent/60 sm:p-6"
          >
            <div>
              {/* Header inside card */}
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-accent/20 pb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent-soft">
                    <Briefcase size={12} />
                    <span>{primaryExperience.type}</span>
                  </div>
                  <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {primaryExperience.role}
                  </h2>
                  <p className="text-sm font-medium text-accent-soft sm:text-base">
                    {primaryExperience.company}
                  </p>
                </div>

                <div className="space-y-1 text-xs text-[#b7ada4] sm:text-right">
                  <p className="flex items-center gap-1.5 sm:justify-end">
                    <Calendar size={13} className="text-accent-soft" />
                    <span>{primaryExperience.period}</span>
                  </p>
                </div>
              </div>

              {/* Bullet points */}
              <div className="mt-4">
                <h3 className="text-xs font-semibold tracking-wider text-accent-soft uppercase">
                  Responsibilities &amp; Achievements:
                </h3>
                <ul className="mt-2.5 space-y-2">
                  {primaryExperience.description.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-xs leading-relaxed text-[#d8d1ca] sm:text-sm">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-soft" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack footer */}
            <div className="mt-5 border-t border-accent/15 pt-3.5">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-semibold tracking-wider text-[#9f958d] uppercase mr-1">
                  Skills:
                </span>
                {primaryExperience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-accent/25 bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-[#f5f1ea]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          {/* Certificate Showcase Card */}
          <motion.aside
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between rounded-xl border border-accent/35 bg-ink-soft/45 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-300 hover:border-accent/60 sm:p-6"
          >
            <div>
              <div className="flex items-center justify-between border-b border-accent/20 pb-3">
                <div className="flex items-center gap-1.5 text-accent-soft">
                  <Award size={16} />
                  <span className="text-xs font-semibold tracking-wider uppercase">
                    Credential
                  </span>
                </div>
                <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                  <CheckCircle2 size={11} />
                  Verified
                </span>
              </div>

              <h3 className="mt-3 font-display text-lg font-bold text-white sm:text-xl">
                {internshipCertificate.title}
              </h3>

              <p className="mt-0.5 text-xs text-[#aaa099]">
                {internshipCertificate.issuer} &bull; {internshipCertificate.duration}
              </p>

              {/* Certificate Preview Frame (Clean placeholder or uploaded photo) */}
              <div
                onClick={onViewCertificate}
                className="group relative mt-3.5 flex h-36 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-dashed border-accent/40 bg-black/30 transition-all duration-300 hover:border-accent hover:bg-black/50 sm:h-40"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onViewCertificate();
                  }
                }}
                title="Click to view certificate"
              >
                {!imageFailed ? (
                  <img
                    src={internshipCertificate.image}
                    alt="Certificate preview"
                    onError={() => setImageFailed(true)}
                    className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-4 text-center">
                    <div className="flex size-10 items-center justify-center rounded-full border border-accent/30 bg-accent/15 text-accent-soft mb-2 group-hover:scale-110 transition-transform">
                      <Award size={20} />
                    </div>
                    <span className="text-xs font-semibold text-white">
                      Certificate Preview
                    </span>
                    <span className="mt-0.5 text-[11px] text-[#8e857e]">
                      Click button below to inspect
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 backdrop-blur-[1px] transition-opacity duration-200 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-accent px-3 py-1.5 text-xs font-semibold text-[#fff8f2] shadow-lg">
                    <Eye size={13} />
                    View Certificate
                  </span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-4 pt-2">
              <button
                type="button"
                onClick={onViewCertificate}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-4 py-2 text-xs font-semibold text-[#fff8f2] shadow-sm transition-colors duration-200 hover:bg-accent-soft sm:text-sm"
              >
                <Eye size={15} aria-hidden="true" />
                View Certificate
              </button>
              <p className="mt-1.5 text-center text-[10px] text-[#8e857e]">
                In-browser preview &bull; No download
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
