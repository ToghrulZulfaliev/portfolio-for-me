import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bug,
  CheckCircle2,
  Code2,
  ExternalLink,
  FileText,
  ShieldCheck,
  TestTube2,
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

export default function ProjectCard({ project, onOpen }) {
  const category =
    categoryConfig[project.category] || categoryConfig.Frontend;

  const CategoryIcon = category.icon;

  const metrics = [
    {
      label: "Test Cases",
      value: project.testCases,
    },
    {
      label: "Bugs",
      value: project.bugsFound,
    },
    {
      label: "Endpoints",
      value: project.endpoints,
    },
  ].filter(
    (metric) =>
      metric.value !== undefined &&
      metric.value !== null &&
      metric.value !== ""
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group relative flex h-full min-h-[610px] flex-col"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-indigo-500/25 via-violet-500/10 to-cyan-500/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
      />

      <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition-all duration-300 group-hover:border-indigo-300 group-hover:shadow-2xl group-hover:shadow-zinc-900/10 dark:border-zinc-800 dark:bg-zinc-900 dark:group-hover:border-indigo-500/40 dark:group-hover:shadow-black/30">
        <div className="relative h-60 shrink-0 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              loading="lazy"
              className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <CategoryIcon className="h-14 w-14 text-zinc-300 dark:text-zinc-700" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-zinc-950/10 to-transparent" />

          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-zinc-950/75 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
              <CategoryIcon className="h-3.5 w-3.5 text-indigo-300" />
              {category.label}
            </span>
          </div>

          {project.featured && (
            <div className="absolute right-4 top-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Featured
              </span>
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 p-5">
            {project.role && (
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-200">
                {project.role}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="min-h-[56px] text-xl font-bold leading-7 tracking-tight text-zinc-950 transition group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
            {project.title}
          </h3>

          <p className="mt-3 min-h-[72px] line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>

          {metrics.length > 0 && (
            <div className="mt-5 grid grid-cols-3 gap-2">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-zinc-200 bg-zinc-50 px-2 py-3 text-center dark:border-zinc-800 dark:bg-zinc-950/60"
                >
                  <p className="text-lg font-bold text-zinc-950 dark:text-white">
                    {metric.value}
                  </p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {Array.isArray(project.tags) && project.tags.length > 0 && (
            <div className="mt-5 min-h-[62px]">
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-950/50 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}

                {project.tags.length > 4 && (
                  <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-500 dark:border-zinc-700 dark:bg-zinc-950/50">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>
            </div>
          )}

          <div className="mt-auto border-t border-zinc-200 pt-5 dark:border-zinc-800">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onOpen?.(project)}
                className="group/button inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
              >
                View Case Study
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
              </button>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} GitHub repository`}
                  title="GitHub repository"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-300 bg-white text-zinc-700 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/15 dark:border-zinc-700 dark:bg-zinc-950/50 dark:text-zinc-300 dark:hover:border-indigo-500/50 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300"
                >
                  <FaGithub className="h-4 w-4" />
                </a>
              )}

              {project.documentation && (
                <a
                  href={project.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} documentation`}
                  title="Project documentation"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-300 bg-white text-zinc-700 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/15 dark:border-zinc-700 dark:bg-zinc-950/50 dark:text-zinc-300 dark:hover:border-indigo-500/50 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300"
                >
                  <FileText className="h-4 w-4" />
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live version of ${project.title}`}
                  title="Live project"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-300 bg-white text-zinc-700 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/15 dark:border-zinc-700 dark:bg-zinc-950/50 dark:text-zinc-300 dark:hover:border-indigo-500/50 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}