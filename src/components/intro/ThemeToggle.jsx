import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../../store/themeSlice.js";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  const isDarkMode = mode === "dark";

  return (
    <motion.button
      type="button"
      onClick={() => dispatch(toggleTheme())}
      whileTap={{ scale: 0.94 }}
      whileHover={{ scale: 1.03 }}
      aria-label={
        isDarkMode ? "Switch to light mode" : "Switch to dark mode"
      }
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="
        group relative inline-flex h-10 items-center justify-center gap-2
        overflow-hidden rounded-xl border border-zinc-300 bg-white px-3
        text-zinc-700 shadow-sm transition-all duration-200
        hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700
        focus:outline-none focus:ring-4 focus:ring-indigo-500/15
        dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300
        dark:hover:border-indigo-500/40 dark:hover:bg-indigo-500/10
        dark:hover:text-indigo-300
      "
    >
      <span
        aria-hidden="true"
        className="
          absolute inset-0 bg-gradient-to-r
          from-indigo-500/5 via-violet-500/5 to-transparent
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      <span className="relative flex h-5 w-5 items-center justify-center">
        {isDarkMode ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            <Sun
              aria-hidden="true"
              className="h-[18px] w-[18px] text-amber-500"
            />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            <Moon
              aria-hidden="true"
              className="h-[18px] w-[18px] text-indigo-600"
            />
          </motion.span>
        )}
      </span>

      <span className="relative hidden text-sm font-semibold sm:inline">
        {isDarkMode ? "Light" : "Dark"}
      </span>
    </motion.button>
  );
}