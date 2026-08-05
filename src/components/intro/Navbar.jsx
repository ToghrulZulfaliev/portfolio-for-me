import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  BriefcaseBusiness,
  ChevronUp,
  FlaskConical,
  Home,
  Info,
  Mail,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import useScrollPosition from "../../hooks/useScrollPosition";

const navigationItems = [
  {
    href: "#home",
    label: "Home",
    icon: Home,
  },
  {
    href: "#works",
    label: "QA Projects",
    icon: FlaskConical,
  },
  {
    href: "#skills",
    label: "Skills",
    icon: BriefcaseBusiness,
  },
  {
    href: "#about",
    label: "About",
    icon: Info,
  },
  {
    href: "#contact",
    label: "Contact",
    icon: Mail,
  },
];

export default function Navbar() {
  const introDone = useSelector((state) => state.theme.introDone);
  const scrolled = useScrollPosition(20);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const sectionElements = navigationItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (sectionElements.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              secondEntry.intersectionRatio - firstEntry.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(`#${visibleSections[0].target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sectionElements.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavigation = (href) => {
    const targetElement = document.querySelector(href);

    setMobileOpen(false);
    setActiveSection(href);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const goTop = () => {
    setMobileOpen(false);
    setActiveSection("#home");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b pt-[env(safe-area-inset-top)] backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-zinc-200/80 bg-white/90 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-950/90"
          : "border-transparent bg-white/75 dark:bg-zinc-950/75"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? "h-14" : "h-16 lg:h-[72px]"
        }`}
      >
        <motion.button
          type="button"
          onClick={goTop}
          initial={{
            opacity: 0,
            y: -14,
            scale: 0.9,
          }}
          animate={
            introDone
              ? {
                  opacity: 1,
                  y: 0,
                  scale: scrolled ? 0.98 : 1,
                }
              : {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }
          }
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.02,
          }}
          className="group flex min-w-0 items-center gap-3 rounded-xl text-left focus:outline-none focus:ring-4 focus:ring-indigo-500/15"
          aria-label="Go to home section"
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/20">
            <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />

            <ShieldCheck
              aria-hidden="true"
              className="relative h-5 w-5"
            />
          </span>

          <span className="min-w-0">
            <span className="block max-w-[150px] truncate text-sm font-bold tracking-tight text-zinc-950 dark:text-white sm:max-w-none sm:text-base">
              Toghrul Zulfaliev
              <span className="text-indigo-600 dark:text-indigo-400">.</span>
            </span>

            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400 sm:block">
              QA Engineer Portfolio
            </span>
          </span>
        </motion.button>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href;

              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavigation(item.href)}
                  className={`relative inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/15 ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon
                    aria-hidden="true"
                    className="h-4 w-4"
                  />

                  {item.label}

                  {isActive && (
                    <motion.span
                      layoutId="active-navigation"
                      className="absolute inset-x-3 -bottom-[9px] h-0.5 rounded-full bg-indigo-600 dark:bg-indigo-400"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="hidden h-7 w-px bg-zinc-200 dark:bg-zinc-800 lg:block" />

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileOpen((previousState) => !previousState)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/15 lg:hidden ${
              mobileOpen
                ? "border-indigo-500 bg-indigo-600 text-white"
                : "border-zinc-300 bg-white text-zinc-800 hover:border-indigo-300 hover:bg-indigo-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-500/10"
            }`}
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? (
              <X
                aria-hidden="true"
                className="h-5 w-5"
              />
            ) : (
              <Menu
                aria-hidden="true"
                className="h-5 w-5"
              />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation overlay"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[calc(4rem+env(safe-area-inset-top))] z-40 bg-zinc-950/40 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              id="mobile-navigation"
              initial={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              transition={{
                duration: 0.22,
                ease: "easeOut",
              }}
              className="absolute inset-x-0 top-full z-50 border-t border-zinc-200/70 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/95 lg:hidden"
            >
              <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
                <div className="mb-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/70">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/20">
                      <ShieldCheck
                        aria-hidden="true"
                        className="h-5 w-5"
                      />
                    </span>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-zinc-950 dark:text-white">
                        Toghrul Zulfaliev
                      </p>

                      <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                        Manual QA · API Testing · Automation
                      </p>
                    </div>
                  </div>
                </div>

                <nav
                  className="space-y-1"
                  aria-label="Mobile navigation"
                >
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.href;

                    return (
                      <button
                        key={item.href}
                        type="button"
                        onClick={() => handleNavigation(item.href)}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/15 ${
                          isActive
                            ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                            : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span className="flex items-center gap-3">
                          <Icon
                            aria-hidden="true"
                            className="h-4 w-4"
                          />

                          {item.label}
                        </span>

                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-white" />
                        )}
                      </button>
                    );
                  })}
                </nav>

                <div className="my-3 h-px bg-zinc-200 dark:bg-zinc-800" />

                <button
                  type="button"
                  onClick={goTop}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/15 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300"
                >
                  <ChevronUp
                    aria-hidden="true"
                    className="h-4 w-4"
                  />

                  Back to top
                </button>
              </div>

              <div className="h-[env(safe-area-inset-bottom)]" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}