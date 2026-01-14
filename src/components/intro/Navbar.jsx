import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import useScrollPosition from "../../hooks/useScrollPosition";

export default function Navbar() {
  const introDone = useSelector((state) => state.theme.introDone);
  const scrolled = useScrollPosition(20);

  const [mobileOpen, setMobileOpen] = useState(false);

  // mobil menu açıqdırsa, scrollu bağlamaq (optional, premium hiss)
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const goTop = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b backdrop-blur",
        "border-zinc-200/60 dark:border-zinc-800/60",
        "bg-white/70 dark:bg-zinc-950/70",
        scrolled ? "py-1" : "py-0",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto max-w-6xl px-4 flex items-center justify-between transition-all",
          scrolled ? "h-14" : "h-16",
        ].join(" ")}
      >
        {/* LOGO (click -> top) */}
        <motion.button
          type="button"
          onClick={goTop}
          className="group font-semibold tracking-wide text-lg cursor-pointer select-none"
          initial={{ opacity: 0, rotate: -360, y: -20, scale: 0.6 }}
          animate={
            introDone
              ? { opacity: 1, rotate: 0, y: 0, scale: scrolled ? 0.98 : 1 }
              : { opacity: 1, rotate: 720, y: 0, scale: 1 }
          }
          transition={{ duration: 1.2, ease: "easeInOut" }}
          whileHover={{ scale: scrolled ? 1.02 : 1.03 }}
        >
          <span className="relative inline-flex items-center">
            {/* glow */}
            <span className="absolute -inset-2 rounded-2xl bg-indigo-500/0 blur-xl transition group-hover:bg-indigo-500/20" />
            <span className="relative">
              Toghrul Zulfaliyev<span className="text-indigo-500">.</span>
            </span>
          </span>
        </motion.button>

        {/* DESKTOP NAV */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a
              className="relative hover:text-indigo-500 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
              href="#works"
            >
              Works
            </a>
            <a
              className="relative hover:text-indigo-500 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
              href="#about"
            >
              About
            </a>
            <a
              className="relative hover:text-indigo-500 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
              href="#contact"
            >
              Contact
            </a>
          </nav>

          <ThemeToggle />

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen((p) => !p)}
            className="md:hidden rounded-xl border px-3 py-2 text-sm
            border-zinc-300 dark:border-zinc-700"
            aria-label="Open menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (animated) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-zinc-200/60 dark:border-zinc-800/60"
          >
            <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3 text-sm">
              <a
                href="#works"
                onClick={closeMobile}
                className="rounded-xl px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              >
                Works
              </a>
              <a
                href="#about"
                onClick={closeMobile}
                className="rounded-xl px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={closeMobile}
                className="rounded-xl px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              >
                Contact
              </a>

              <button
                type="button"
                onClick={goTop}
                className="rounded-xl px-3 py-2 text-left hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              >
                Back to top ↑
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
