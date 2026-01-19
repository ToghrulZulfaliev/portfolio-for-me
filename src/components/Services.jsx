import { motion } from "framer-motion";

const items = [
  {
    title: "Modern & Responsive UI",
    desc: "Building clean and responsive user interfaces using modern CSS practices, with focus on layout, spacing, and usability.",
  },
  {
    title: "React Component Development",
    desc: "Developing reusable React components, working with props, state, and basic hooks to structure applications.",
  },
  {
    title: "API Integration & UI States",
    desc: "Integrating REST APIs and handling common UI states such as loading, errors, and empty data scenarios.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-4 py-14 sm:py-16 md:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-zinc-900 dark:text-zinc-100">
            My Core Skills
          </h2>

          <p className="mt-3 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            For teams and clients: fast delivery, clean UI, and maintainable
            React code.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <motion.div
              key={it.title}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-full rounded-3xl border p-5 sm:p-6
              border-zinc-200 dark:border-zinc-800
              bg-white/60 dark:bg-zinc-900/50 backdrop-blur
              md:hover:border-indigo-400/60 md:dark:hover:border-indigo-400/40
              md:hover:bg-white/80 md:dark:hover:bg-zinc-900/60
              transition"
            >
              <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {it.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
