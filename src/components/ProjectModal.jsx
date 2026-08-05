import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  AlertTriangle,
  ArrowUpRight,
  Bug,
  CheckCircle2,
  Code2,
  ExternalLink,
  FileText,
  ListChecks,
  ShieldCheck,
  Target,
  TestTube2,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const categoryConfig = {
  "Manual QA": {
    label: "Manual QA",
    icon: Bug,
  },
  "API Testing": {
    label: "API Testing",
    icon: ShieldCheck,
  },
  "Automation QA": {
    label: "Automation QA",
    icon: TestTube2,
  },
  Frontend: {
    label: "Frontend",
    icon: Code2,
  },
};

function DetailCard({ title, value, icon: Icon }) {
  if (!value || Array.isArray(value)) {
    return null;
  }

  return (
    <div className="h-full rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950/60">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
          <Icon className="h-5 w-5" />
        </div>

        <h4 className="font-bold text-zinc-950 dark:text-white">{title}</h4>
      </div>

      <p className="mt-4 whitespace-pre-line text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        {value}
      </p>
    </div>
  );
}

function ListSection({ title, items, icon: Icon }) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <div className="h-full rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950/60">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
          <Icon className="h-5 w-5" />
        </div>

        <h4 className="font-bold text-zinc-950 dark:text-white">{title}</h4>
      </div>

      <ul className="mt-4 space-y-3">
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="flex items-start gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
          >
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectModal({ open, onClose, project }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!project) {
    return null;
  }

  const category =
    categoryConfig[project.category] || categoryConfig.Frontend;

  const CategoryIcon = category.icon;

  const metrics = [
    {
      label: "Test Cases",
      value: project.testCases,
    },
    {
      label: "Bugs Found",
      value: project.bugsFound,
    },
    {
      label: "Endpoints",
      value: project.endpoints,
    },
  ].filter(
    (item) =>
      item.value !== undefined &&
      item.value !== null &&
      item.value !== ""
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close project modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[999] cursor-default bg-zinc-950/75 backdrop-blur-md"
          />

          <div className="fixed inset-0 z-[1000] flex items-center justify-center px-3 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-[calc(env(safe-area-inset-top)+12px)] sm:px-6">
            <motion.div
              initial={{
                opacity: 0,
                y: 28,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 28,
                scale: 0.97,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              className="w-full max-w-5xl"
            >
              <div className="relative max-h-[calc(100vh-24px)] overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950">
                <div className="sticky top-0 z-20 border-b border-zinc-200/80 bg-white/95 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/95">
                  <div className="flex items-start justify-between gap-4 p-4 sm:p-6">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
                          <CategoryIcon className="h-3.5 w-3.5" />
                          {category.label}
                        </span>

                        {project.featured && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            Featured
                          </span>
                        )}
                      </div>

                      <h3
                        id="project-modal-title"
                        className="mt-3 break-words text-xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-2xl"
                      >
                        {project.title}
                      </h3>

                      {project.role && (
                        <p className="mt-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                          {project.role}
                        </p>
                      )}
                    </div>

                    <button
                      ref={closeButtonRef}
                      type="button"
                      onClick={onClose}
                      aria-label="Close project details"
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-300 bg-white text-zinc-700 transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600 focus:outline-none focus:ring-4 focus:ring-rose-500/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-rose-500/40 dark:hover:bg-rose-500/10 dark:hover:text-rose-300"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="max-h-[calc(100vh-130px)] overflow-y-auto">
                  {project.image && (
                    <div className="relative h-60 overflow-hidden bg-zinc-100 dark:bg-zinc-900 sm:h-80">
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        className="h-full w-full object-cover object-center"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-transparent to-transparent" />
                    </div>
                  )}

                  <div className="p-4 sm:p-6 lg:p-8">
                    {project.description && (
                      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
                        <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
                          {project.description}
                        </p>
                      </div>
                    )}

                    {metrics.length > 0 && (
                      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-2xl border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-900"
                          >
                            <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                              {metric.value}
                            </p>

                            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-6 grid items-stretch gap-4 md:grid-cols-2">
                      <DetailCard
                        title={
                          project.category === "Frontend"
                            ? "Project Challenge"
                            : "Testing Objective"
                        }
                        value={
                          project.testObjective ||
                          project.problem ||
                          project.challenge
                        }
                        icon={Target}
                      />

                      <DetailCard
                        title={
                          project.category === "Frontend"
                            ? "Solution"
                            : "Testing Approach"
                        }
                        value={
                          project.testApproach ||
                          project.solution ||
                          project.approach
                        }
                        icon={ShieldCheck}
                      />

                      <DetailCard
                        title="My Responsibilities"
                        value={project.responsibilities}
                        icon={ListChecks}
                      />

                      <DetailCard
                        title="Result"
                        value={
                          typeof project.keyResults === "string"
                            ? project.keyResults
                            : project.result || project.results
                        }
                        icon={CheckCircle2}
                      />
                    </div>

                    <div className="mt-4 grid items-stretch gap-4 md:grid-cols-2">
                      <ListSection
                        title="Test Scenarios"
                        items={project.testScenarios}
                        icon={ListChecks}
                      />

                      <ListSection
                        title="Bugs Identified"
                        items={project.bugs}
                        icon={AlertTriangle}
                      />

                      <ListSection
                        title="API Endpoints Tested"
                        items={project.apiEndpoints}
                        icon={ShieldCheck}
                      />

                      <ListSection
                        title="Key Results"
                        items={
                          Array.isArray(project.keyResults)
                            ? project.keyResults
                            : []
                        }
                        icon={CheckCircle2}
                      />
                    </div>

                    {Array.isArray(project.tags) &&
                      project.tags.length > 0 && (
                        <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                              <Code2 className="h-5 w-5" />
                            </div>

                            <h4 className="font-bold text-zinc-950 dark:text-white">
                              Tools & Technologies
                            </h4>
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    <div className="mt-6 flex flex-col gap-3 border-t border-zinc-200 pt-6 dark:border-zinc-800 sm:flex-row sm:flex-wrap">
                      {project.documentation && (
                        <a
                          href={project.documentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
                        >
                          <FileText className="h-4 w-4" />
                          View Documentation
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Project
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300"
                        >
                          <FaGithub className="h-4 w-4" />
                          GitHub
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      )}
                    </div>

                    <p className="mt-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
                      Press ESC or click outside the window to close
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}