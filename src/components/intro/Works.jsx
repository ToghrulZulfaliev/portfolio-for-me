import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bug,
  Code2,
  FlaskConical,
  Layers3,
  Search,
  SearchX,
  ShieldCheck,
} from "lucide-react";

import ProjectCard from "./ProjectCard";
import ProjectModal from "../ProjectModal";
import { projects } from "../../data/projects";

const categories = [
  {
    value: "All",
    label: "All Projects",
    icon: Layers3,
  },
  {
    value: "Manual QA",
    label: "Manual QA",
    icon: Bug,
  },
  {
    value: "API Testing",
    label: "API Testing",
    icon: ShieldCheck,
  },
  {
    value: "Automation QA",
    label: "Automation QA",
    icon: FlaskConical,
  },
  {
    value: "Frontend",
    label: "Frontend",
    icon: Code2,
  },
];

export default function Works() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const filteredProjects = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return projects
      .filter((project) => {
        const isPublished = project.published !== false;

        const matchesCategory =
          activeCategory === "All" ||
          project.category === activeCategory;

        const searchableContent = [
          project.title,
          project.description,
          project.category,
          project.role,
          ...(Array.isArray(project.tags) ? project.tags : []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        const matchesSearch =
          normalizedSearch === "" ||
          searchableContent.includes(normalizedSearch);

        return isPublished && matchesCategory && matchesSearch;
      })
      .sort((firstProject, secondProject) => {
        if (firstProject.featured && !secondProject.featured) {
          return -1;
        }

        if (!firstProject.featured && secondProject.featured) {
          return 1;
        }

        return (
          (firstProject.displayOrder ?? 999) -
          (secondProject.displayOrder ?? 999)
        );
      });
  }, [activeCategory, searchTerm]);

  const clearFilters = () => {
    setActiveCategory("All");
    setSearchTerm("");
  };

  return (
    <section
      id="works"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
            <ShieldCheck className="h-4 w-4" />
            Portfolio & Case Studies
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl">
            Projects that demonstrate
            <span className="block text-indigo-600 dark:text-indigo-400">
              quality and technical thinking
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-8">
            A collection of QA case studies and frontend projects showing my
            approach to software quality, test design, API validation,
            automation and user-focused development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-10 rounded-3xl border border-zinc-200 bg-white/80 p-4 shadow-sm backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70 sm:p-5"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
              />

              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search project, tool or technology..."
                aria-label="Search projects"
                className="h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 pl-11 pr-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-zinc-700 dark:bg-zinc-950/60 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-indigo-500/50"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.value;

                return (
                  <button
                    key={category.value}
                    type="button"
                    onClick={() => setActiveCategory(category.value)}
                    aria-pressed={isActive}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/15 ${
                      isActive
                        ? "border-indigo-600 bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                        : "border-zinc-200 bg-white text-zinc-600 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 dark:border-zinc-700 dark:bg-zinc-950/50 dark:text-zinc-300 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-zinc-200 pt-4 dark:border-zinc-800">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              <span className="font-bold text-zinc-900 dark:text-white">
                {filteredProjects.length}
              </span>{" "}
              project{filteredProjects.length === 1 ? "" : "s"} found
            </p>

            {(searchTerm || activeCategory !== "All") && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Clear filters
              </button>
            )}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${searchTerm}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mt-10 grid auto-rows-fr gap-8 md:grid-cols-2 xl:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id ?? `${project.title}-${index}`}
                  project={project}
                  onOpen={setSelectedProject}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty-projects"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="mt-10 rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 px-6 py-16 text-center dark:border-zinc-700 dark:bg-zinc-900/50"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-200 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                <SearchX className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-zinc-950 dark:text-white">
                No matching projects found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Try a different keyword or reset the selected project category.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
              >
                Show all projects
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ProjectModal
        open={Boolean(selectedProject)}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}