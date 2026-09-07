import { type MouseEvent, useEffect, useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

function desktopLinkClass({ isActive }: { isActive: boolean }) {
  return [
    "relative px-1 py-1 text-[13px] font-medium tracking-[0.14em] uppercase transition-colors duration-300",
    isActive
      ? "text-accent-soft after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-accent-soft"
      : "text-[#a9a19a] hover:text-[#f5f1ea]",
  ].join(" ");
}

function mobileLinkClass({ isActive }: { isActive: boolean }) {
  return [
    "block rounded-lg px-3 py-3 text-sm tracking-wide transition-colors duration-200",
    isActive
      ? "bg-accent/10 text-accent-soft"
      : "text-[#a9a19a] hover:bg-white/4 hover:text-[#f5f1ea]",
  ].join(" ");
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const handleMobileLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href")?.replace("#", "");
    setIsMenuOpen(false);
    document.body.style.overflow = "";

    if (!targetId) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const target = document.getElementById(targetId);
        const navigation = document.querySelector<HTMLElement>('nav[aria-label="Primary"]');

        if (!target) return;

        const navigationHeight = navigation?.getBoundingClientRect().height ?? 0;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - navigationHeight;

        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: "smooth",
        });
      });
    });
  };

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-accent/20 bg-ink/75 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-xl"
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <a href="#home" className="font-display text-lg font-semibold tracking-tight text-white transition-opacity duration-200 hover:opacity-70">
          PROJECT PORTFOLIO
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={desktopLinkClass({ isActive: link.label === "Home" })}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-zinc-200 transition-colors duration-200 hover:bg-white/6 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id={menuId}
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/8 bg-ink/95 md:hidden"
          >
            <ul className="flex flex-col px-5 py-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={mobileLinkClass({ isActive: link.label === "Home" })} onClick={handleMobileLinkClick}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
