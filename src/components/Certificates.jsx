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
            className="border rounded-2xl p-4 transition
  border-zinc-200 hover:border-indigo-400
  dark:border-zinc-800 dark:hover:border-indigo-500
  hover:shadow-lg"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="rounded-xl mb-4 w-full h-44 object-cover"
              loading="lazy"
            />

            <h3 className="font-semibold text-lg">{cert.title}</h3>

            <p className="text-sm text-gray-500">
              {cert.platform} — {cert.year}
            </p>

            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-indigo-600 font-medium hover:underline"
            >
              View Certificate →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
