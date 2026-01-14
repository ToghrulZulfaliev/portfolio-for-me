import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ open, onClose, project }) {
  return (
    <AnimatePresence>
      {open && project && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm"
          />

          {/* Mobile-first wrapper: full-height scroll area */}
          <div className="fixed inset-0 z-[1000] overflow-y-auto">
            {/* This creates top spacing and keeps modal readable on mobile */}
            <div className="min-h-full px-3 py-6 sm:px-6 sm:py-10">
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.98 }}
                transition={{ duration: 0.22 }}
                className="mx-auto w-full max-w-3xl"
                // stop closing when clicking inside modal
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="rounded-2xl sm:rounded-3xl border
                  border-zinc-200 dark:border-zinc-800
                  bg-white dark:bg-zinc-950 shadow-2xl
                  p-4 sm:p-8"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold break-words">
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
                      hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Sections */}
                  <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border p-4 border-zinc-200 dark:border-zinc-800">
                      <h4 className="font-semibold">Problem</h4>
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {project.problem ||
                          "Problem description has not been provided yet."}
                      </p>
                    </div>

                    <div className="rounded-2xl border p-4 border-zinc-200 dark:border-zinc-800">
                      <h4 className="font-semibold">Solution</h4>
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {project.solution ||
                          "Solution details have not been provided yet."}
                      </p>
                    </div>

                    <div className="md:col-span-2 rounded-2xl border p-4 border-zinc-200 dark:border-zinc-800">
                      <h4 className="font-semibold">Tech Stack</h4>
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
                  <div className="mt-5 sm:mt-6 flex flex-wrap gap-3">
                    {project.live && (
                      <a
                        onClick={(e) => e.stopPropagation()}
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl bg-indigo-500 px-5 py-2.5
                        text-sm font-medium text-white hover:bg-indigo-600 transition"
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
                        className="rounded-xl border px-5 py-2.5 text-sm font-medium
                        border-zinc-300 dark:border-zinc-700 hover:border-indigo-400 transition"
                      >
                        GitHub
                      </a>
                    )}
                  </div>

                  <p className="mt-5 text-xs text-zinc-500">
                    Tip: Press <b>ESC</b> or click outside to close
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
