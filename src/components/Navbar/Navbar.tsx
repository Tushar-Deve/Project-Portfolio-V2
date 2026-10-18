import { type MouseEvent, useEffect, useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
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
  const { theme, toggleTheme } = useTheme();
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

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={desktopLinkClass({ isActive: link.label === "Home" })}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Mode Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex items-center gap-1.5 rounded-full border border-accent/35 bg-ink-soft/60 px-3 py-1.5 text-xs font-semibold text-accent-soft backdrop-blur-md transition-all duration-300 hover:border-accent hover:bg-accent/15 hover:scale-105 shadow-[0_0_12px_rgba(201,106,36,0.15)]"
          >
            {theme === "dark" ? (
              <>
                <Sun size={14} className="text-amber-400" />
                <span className="font-medium">Light</span>
              </>
            ) : (
              <>
                <Moon size={14} className="text-accent-soft" />
                <span className="font-medium">Dark</span>
              </>
            )}
          </button>

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
        </div>
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
              <li className="pt-2 border-t border-white/10 mt-1">
                <button
                  type="button"
                  onClick={() => {
                    toggleTheme();
                    setIsMenuOpen(false);
                  }}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-accent-soft hover:bg-white/5"
                >
                  <span>Theme</span>
                  <span className="flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-semibold">
                    {theme === "dark" ? (
                      <>
                        <Sun size={13} className="text-amber-400" />
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon size={13} className="text-accent-soft" />
                        <span>Dark Mode</span>
                      </>
                    )}
                  </span>
                </button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;

