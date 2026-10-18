import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X, ExternalLink, Award, CheckCircle2, Calendar, Building, Sparkles } from "lucide-react";
import type { InternshipCertificate } from "../../data/experience";

type CertificateModalProps = {
  isOpen: boolean;
  onClose: () => void;
  certificate: InternshipCertificate;
};

export default function CertificateModal({
  isOpen,
  onClose,
  certificate,
}: CertificateModalProps) {
  const shouldReduceMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);

  // Close on Escape key and lock background scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-accent/40 bg-ink-soft/95 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-accent/20 px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/15 text-accent-soft">
                  <Award size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3
                    id="certificate-modal-title"
                    className="font-display text-lg font-bold text-white sm:text-xl"
                  >
                    {certificate.title}
                  </h3>
                  <p className="flex items-center gap-1.5 text-xs text-accent-soft sm:text-sm">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    Verified Credential &bull; {certificate.issuer}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  title="View full resolution in new tab"
                  className="hidden items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent-soft transition hover:border-accent hover:bg-accent/20 sm:inline-flex"
                >
                  <ExternalLink size={13} />
                  <span>Full View</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close certificate modal"
                  className="rounded-lg p-2 text-[#aaa099] transition hover:bg-white/10 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body / Scrollable Area */}
            <div className="custom-scrollbar overflow-y-auto p-4 sm:p-6">
              {/* Certificate Image Frame */}
              <div className="group relative overflow-hidden rounded-xl border border-accent/30 bg-black/40 shadow-2xl">
                {!imageError ? (
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} awarded to ${certificate.recipient}`}
                    onError={() => setImageError(true)}
                    className="max-h-[55vh] w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center">
                    <div className="flex size-14 items-center justify-center rounded-full border border-accent/40 bg-accent/15 text-accent-soft mb-3">
                      <Award size={28} />
                    </div>
                    <h4 className="font-display text-lg font-bold text-white sm:text-xl">
                      {certificate.title}
                    </h4>
                    <p className="mt-1 text-xs text-accent-soft sm:text-sm">
                      {certificate.recipient} &bull; {certificate.issuer}
                    </p>
                    <div className="mt-4 max-w-md rounded-lg border border-accent/25 bg-ink-soft/80 p-3 text-xs text-[#b7ada4]">
                      Aap apni certificate image file <code className="text-accent-soft font-mono">public/certificates/</code> folder me daal kar <code className="text-accent-soft font-mono">src/data/experience.ts</code> me uska path set kar sakte hain.
                    </div>
                  </div>
                )}
              </div>

              {/* Key Details Cards */}
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-3 rounded-lg border border-accent/15 bg-ink/50 p-3">
                  <Building size={18} className="shrink-0 text-accent-soft" />
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-[#9f958d]">
                      Issuing Organization
                    </span>
                    <span className="text-xs font-semibold text-white sm:text-sm">
                      {certificate.issuer}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-accent/15 bg-ink/50 p-3">
                  <Calendar size={18} className="shrink-0 text-accent-soft" />
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-[#9f958d]">
                      Duration & Issue
                    </span>
                    <span className="text-xs font-semibold text-white sm:text-sm">
                      {certificate.duration}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-accent/15 bg-ink/50 p-3">
                  <Sparkles size={18} className="shrink-0 text-accent-soft" />
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-[#9f958d]">
                      Recipient
                    </span>
                    <span className="text-xs font-semibold text-white sm:text-sm">
                      {certificate.recipient} &bull; Web Developer
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills verified */}
              <div className="mt-4 rounded-lg border border-accent/15 bg-ink/30 p-3.5">
                <p className="mb-2 text-xs font-semibold tracking-wide text-accent-soft uppercase">
                  Verified Skills & Competencies:
                </p>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-accent/25 bg-accent/10 px-2.5 py-1 text-xs font-medium text-[#e8ded3]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between border-t border-accent/20 bg-ink/40 px-5 py-3 sm:px-6">
              <span className="text-xs text-[#9f958d]">
                Recruiter View Only &bull; Instant In-Browser Preview
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-soft hover:underline sm:hidden"
                >
                  <ExternalLink size={13} />
                  Full View
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-sm bg-accent px-4 py-1.5 text-xs font-semibold text-[#fff8f2] transition hover:bg-accent-soft"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
