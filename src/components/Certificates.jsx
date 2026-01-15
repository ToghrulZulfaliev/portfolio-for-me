import { certificates } from "../data/certificates";
import { motion } from "framer-motion";

export default function Certificates() {
  return (
    <section id="certificates" className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-10 text-center"
      >
        Certificates
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.08 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl overflow-hidden"
          >
            {/* ✅ Gradient Border Layer (CTA style) */}
            <div
              className="
                absolute inset-0 rounded-3xl p-[1px]
                bg-gradient-to-r from-indigo-500/30 via-emerald-400/20 to-pink-500/30
                opacity-40 group-hover:opacity-100
                transition
              "
            />

            {/* ✅ Glass Card */}
            <div
              className="
                relative rounded-3xl p-4
                bg-white/70 dark:bg-zinc-950/60
                backdrop-blur-xl
                border border-zinc-200/60 dark:border-zinc-800/60
                shadow-sm group-hover:shadow-xl
                transition
              "
            >
              {/* ✅ Glow hover effect */}
              <div
                className="
                  pointer-events-none absolute -inset-10
                  opacity-0 group-hover:opacity-100
                  bg-gradient-to-r from-indigo-500/15 via-emerald-400/10 to-pink-500/15
                  blur-2xl transition
                "
              />

              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                className="
                  relative rounded-2xl mb-4 w-full h-44 object-cover
                  ring-1 ring-zinc-200/50 dark:ring-zinc-800/50
                  group-hover:ring-indigo-500/30
                  transition
                "
              />

              <h3 className="relative font-semibold text-lg">
                {cert.title}
              </h3>

              <p className="relative text-sm text-gray-500 dark:text-zinc-400">
                {cert.platform} — {cert.year}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="
                  relative inline-flex items-center justify-center gap-2
                  mt-4 w-full
                  rounded-2xl px-4 py-3 text-sm font-semibold
                  border border-zinc-200/60 dark:border-zinc-800/60
                  bg-white/70 dark:bg-zinc-950/60
                  backdrop-blur-xl
                  hover:border-indigo-400/70 dark:hover:border-indigo-500/60
                  transition
                "
              >
                View Certificate →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
