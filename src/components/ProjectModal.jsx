import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function ProjectModal({ open, onClose, project }) {
  // scroll lock + ESC
  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && project && (
        <>
          {/* Overlay */}
          <motion.button
            type="button"
            aria-label="Close modal overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm"
          />

          {/* Wrapper */}
          <div
            className="fixed inset-0 z-[1000] flex items-center justify-center
            px-3 sm:px-6
            pt-[calc(env(safe-area-inset-top)+16px)]
            pb-[calc(env(safe-area-inset-bottom)+16px)]"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={project.title}
            >
              <div
                className="rounded-2xl sm:rounded-3xl border
                border-zinc-200 dark:border-zinc-800
                bg-white dark:bg-zinc-950 shadow-2xl
                overflow-hidden"
              >
                {/* Sticky header */}
                <div className="sticky top-0 z-10 border-b border-zinc-200/70 dark:border-zinc-800/70 bg-white/90 dark:bg-zinc-950/85 backdrop-blur">
                  <div className="p-4 sm:p-6 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-2xl font-bold break-words text-zinc-900 dark:text-zinc-100">
                        {project.title}
                      </h3>
                      {project.description && (
                        <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                          {project.description}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={onClose}
                      className="shrink-0 rounded-xl border px-3 py-2 text-sm
                      border-zinc-300 dark:border-zinc-700
                      hover:bg-zinc-100 dark:hover:bg-zinc-900 transition active:scale-[0.99]"
                      aria-label="Close"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Scrollable content */}
                <div className="max-h-[75vh] sm:max-h-[78vh] overflow-y-auto p-4 sm:p-6">
                  <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border p-4 border-zinc-200 dark:border-zinc-800">
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                        Problem
                      </h4>
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {project.problem ||
                          "Problem description has not been provided yet."}
                      </p>
                    </div>

                    <div className="rounded-2xl border p-4 border-zinc-200 dark:border-zinc-800">
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                        Solution
                      </h4>
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {project.solution ||
                          "Solution details have not been provided yet."}
                      </p>
                    </div>

                    <div className="md:col-span-2 rounded-2xl border p-4 border-zinc-200 dark:border-zinc-800">
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                        Tech Stack
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {(project.tags || []).map((t) => (
                          <span
                            key={t}
                            className="rounded-full border px-3 py-1 text-xs
                            border-zinc-200 dark:border-zinc-700
                            bg-zinc-50 dark:bg-zinc-900"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                    {project.live && (
                      <a
                        onClick={(e) => e.stopPropagation()}
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="col-span-1 text-center rounded-xl bg-indigo-500 px-5 py-2.5
                        text-sm font-semibold text-white hover:bg-indigo-600 transition active:scale-[0.99]"
                      >
                        Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        onClick={(e) => e.stopPropagation()}
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="col-span-1 text-center rounded-xl border px-5 py-2.5 text-sm font-semibold
                        border-zinc-300 dark:border-zinc-700 hover:border-indigo-400 transition active:scale-[0.99]"
                      >
                        GitHub
                      </a>
                    )}
                  </div>

                  <p className="mt-5 text-xs text-zinc-500 dark:text-zinc-400">
                    Tip: Press <b>ESC</b> or tap outside to close
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
