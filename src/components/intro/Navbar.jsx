import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import useScrollPosition from "../../hooks/useScrollPosition";

export default function Navbar() {
  const introDone = useSelector((state) => state.theme.introDone);
  const scrolled = useScrollPosition(20);

  const [mobileOpen, setMobileOpen] = useState(false);

  // ESC ilə bağla + scroll lock
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
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
        // iPhone notch/safe area üçün yuxarı padding
        "pt-[env(safe-area-inset-top)]",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto max-w-6xl px-4 flex items-center justify-between transition-all min-w-0",
          scrolled ? "h-14" : "h-16",
        ].join(" ")}
      >
        {/* LOGO */}
        <motion.button
          type="button"
          onClick={goTop}
          className="group font-semibold tracking-wide text-lg cursor-pointer select-none min-w-0"
          initial={{ opacity: 0, rotate: -360, y: -20, scale: 0.6 }}
          animate={
            introDone
              ? { opacity: 1, rotate: 0, y: 0, scale: scrolled ? 0.98 : 1 }
              : { opacity: 1, rotate: 720, y: 0, scale: 1 }
          }
          transition={{ duration: 1.2, ease: "easeInOut" }}
          whileHover={{ scale: scrolled ? 1.02 : 1.03 }}
        >
          <span className="relative inline-flex items-center max-w-[62vw] sm:max-w-none min-w-0">
            <span className="absolute -inset-2 rounded-2xl bg-indigo-500/0 blur-xl transition group-hover:bg-indigo-500/20" />
            <span className="relative truncate">
              <span className="sm:hidden">
                Toghrul<span className="text-indigo-500">.</span>
              </span>
              <span className="hidden sm:inline">
                Toghrul Zulfaliyev<span className="text-indigo-500">.</span>
              </span>
            </span>
          </span>
        </motion.button>

        {/* RIGHT */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {[
              { href: "#works", label: "Works" },
              { href: "#about", label: "About" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                className="relative hover:text-indigo-500 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ThemeToggle />

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen((p) => !p)}
            className="md:hidden rounded-xl border px-3 py-2 text-sm
            border-zinc-300 dark:border-zinc-700 active:scale-[0.98] transition"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay: mobil menyudan kənara klik = bağlanır */}
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              onClick={closeMobile}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 z-40 bg-black/30"
            />

            {/* Panel */}
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="md:hidden relative z-50 border-t border-zinc-200/60 dark:border-zinc-800/60"
            >
              <div className="mx-auto max-w-6xl px-4 py-4">
                <div className="rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                  {[
                    { href: "#works", label: "Works" },
                    { href: "#about", label: "About" },
                    { href: "#contact", label: "Contact" },
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMobile}
                      className="block rounded-xl px-3 py-3 text-sm
                      hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                    >
                      {item.label}
                    </a>
                  ))}

                  <button
                    type="button"
                    onClick={goTop}
                    className="w-full rounded-xl px-3 py-3 text-left text-sm
                    hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                  >
                    Back to top ↑
                  </button>
                </div>
              </div>

              {/* aşağı safe-area (iPhone) */}
              <div className="h-[env(safe-area-inset-bottom)]" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
