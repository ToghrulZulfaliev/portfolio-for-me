import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "../ProjectModal";
import { projects } from "../../data/projects";

export default function Works() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (p) => {
    console.log("clicked project:", p); // ✅ debug (görünməlidir)
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
    <section id="works" className="mx-auto max-w-6xl px-4 py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold">My Work
</h2>
          <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
            A selection of real-world projects where I focused on clean UI,
            scalable architecture, and practical user experience.

          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <div
            key={p.id ?? `${p.title}-${idx}`}
            role="button"
            tabIndex={0}
            onClick={() => openModal(p)}
            onKeyDown={(e) => {
              if (e.key === "Enter") openModal(p);
            }}
            className="cursor-pointer outline-none"
          >
            <ProjectCard project={p} />
          </div>
        ))}
      </div>

      <ProjectModal open={open} project={selected} onClose={close} />
    </section>
  );
}
