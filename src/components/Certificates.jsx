import { motion } from "framer-motion";
import {
  Award,
  CalendarDays,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

import { certificates } from "../data/certificates";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Certificates() {
  const visibleCertificates = certificates.filter(
    (certificate) => certificate.visible !== false
  );

  return (
    <section
      id="certificates"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
            <Award className="h-4 w-4" />
            Professional Development
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl">
            Certificates &
            <span className="text-indigo-600 dark:text-indigo-400">
              {" "}
              continuous learning
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-8">
            Certifications and training that support my development in Manual
            QA, API Testing, Automation QA and Frontend Development.
          </p>
        </motion.div>

        {visibleCertificates.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visibleCertificates.map((certificate) => (
              <motion.article
                key={certificate.id}
                variants={cardVariants}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative h-full"
              >
                <div className="pointer-events-none absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-indigo-500/25 via-violet-500/10 to-cyan-500/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm transition duration-300 group-hover:border-indigo-300 group-hover:shadow-xl group-hover:shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900 dark:group-hover:border-indigo-500/40 dark:group-hover:shadow-black/20">
                  <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800 sm:h-52">
                    {certificate.image ? (
                      <img
                        src={certificate.image}
                        alt={`${certificate.title} certificate`}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <Award className="h-14 w-14 text-zinc-300 dark:text-zinc-700" />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-zinc-950/5 to-transparent" />

                    <div className="absolute left-4 top-4">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-zinc-950/70 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
                        <ShieldCheck className="h-3.5 w-3.5 text-indigo-300" />
                        Verified Learning
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div>
                      <h3 className="text-lg font-bold leading-snug tracking-tight text-zinc-950 transition group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                        {certificate.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                        {certificate.platform}
                      </p>

                      {certificate.year && (
                        <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-500 dark:bg-zinc-950/60 dark:text-zinc-400">
                          <CalendarDays className="h-4 w-4 text-indigo-500" />
                          Issued in {certificate.year}
                        </div>
                      )}

                      {certificate.description && (
                        <p className="mt-4 line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                          {certificate.description}
                        </p>
                      )}

                      {Array.isArray(certificate.skills) &&
                        certificate.skills.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {certificate.skills.slice(0, 4).map((skill) => (
                              <span
                                key={skill}
                                className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-950/50 dark:text-zinc-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                    </div>

                    <div className="mt-auto pt-6">
                      {certificate.link ? (
                        <a
                          href={certificate.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/button inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 active:translate-y-0"
                        >
                          View Certificate

                          <ExternalLink className="h-4 w-4 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                        </a>
                      ) : (
                        <div className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-500 dark:border-zinc-700 dark:bg-zinc-950/60 dark:text-zinc-400">
                          <ShieldCheck className="h-4 w-4" />
                          Certificate Available
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 px-6 py-14 text-center dark:border-zinc-700 dark:bg-zinc-900/50"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-200 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
              <Award className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-zinc-950 dark:text-white">
              Certificates will be added soon
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              New QA and technical certifications are currently being prepared
              for this section.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}