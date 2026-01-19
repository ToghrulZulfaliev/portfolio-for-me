import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "../ProjectModal";
import { projects } from "../../data/projects";

export default function Works() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (p) => {
    setSelected(p);
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
    setTimeout(() => setSelected(null), 150);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="works"
      className="mx-auto max-w-6xl px-4 py-14 sm:py-16 md:py-20"
    >
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          My Work
        </h2>

        <p className="mt-3 max-w-2xl text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          A selection of real-world projects where I focused on clean UI,
          scalable architecture, and practical user experience.
        </p>
      </div>

      <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <ProjectCard
            key={p.id ?? `${p.title}-${idx}`}
            project={p}
            onOpen={openModal}
          />
        ))}
      </div>

      <ProjectModal open={open} project={selected} onClose={close} />
    </section>
  );
}
