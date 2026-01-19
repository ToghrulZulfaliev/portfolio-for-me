import { motion } from "framer-motion";
import useTilt from "../../hooks/useTilt";

export default function ProjectCard({ project, onOpen }) {
  const { ref, onMouseMove, onMouseLeave, onMouseEnter } = useTilt({
    max: 12,
    perspective: 900,
    scale: 1.03,
  });

  const open = () => onOpen?.(project);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="relative group cursor-pointer"
      onClick={open}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") open();
      }}
    >
      {/* glow */}
      <div
        className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition duration-300
        bg-gradient-to-r from-indigo-500/30 via-emerald-400/20 to-pink-500/20
        group-hover:opacity-100"
      />

      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        className="relative rounded-3xl border overflow-hidden transition duration-300
          border-zinc-200 dark:border-zinc-800
          bg-white/70 dark:bg-zinc-900/60 backdrop-blur
          hover:border-indigo-400/60 dark:hover:border-indigo-400/40
          focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
        style={{
          transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
          transition: "transform 180ms ease",
        }}
      >
        {/* image */}
        {project.image && (
          <div className="relative h-44 sm:h-52 md:h-56 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.06]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-70" />
          </div>
        )}

        <div className="p-4 sm:p-6">
          <h3 className="text-base sm:text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {project.title}
          </h3>

          {project.description && (
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
              {project.description}
            </p>
          )}

          {/* tags */}
          {Array.isArray(project.tags) && project.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-3 py-1 text-xs
                    border-zinc-200 dark:border-zinc-700
                    bg-zinc-50 dark:bg-zinc-950/40"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* actions */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-row">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="col-span-1 text-center rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white
                  hover:bg-indigo-600 transition active:scale-[0.99]"
              >
                Live
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="col-span-1 text-center rounded-xl border px-4 py-2 text-sm font-medium
                  border-zinc-300 dark:border-zinc-700
                  hover:border-indigo-400 dark:hover:border-indigo-400
                  transition active:scale-[0.99]"
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* shine */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 hidden md:block">
          <div className="absolute -top-24 left-[-30%] h-64 w-64 rotate-12 bg-white/20 blur-2xl" />
        </div>
      </div>

      {/* ✅ Mobil-də tilt/hover effektlərini "sakitləşdir" */}
      <style>{`
        @media (hover: none) and (pointer: coarse) {
          .group:hover img { transform: none !important; }
        }
      `}</style>
    </motion.article>
  );
}
