import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  FileText,
  Mail,
  ShieldCheck,
} from "lucide-react";

import { track } from "../utils/analytics";

export default function CTA() {
  const CV_URL = "/cv/Toghrul Zulfaliyev - CV.pdf";
  const CV_PAGES = 1;

  return (
    <section className="relative overflow-hidden px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white px-5 py-8 shadow-xl shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
        >
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
                <ShieldCheck className="h-4 w-4" />
                Open to QA Opportunities
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl">
                Let&apos;s deliver
                <span className="text-indigo-600 dark:text-indigo-400">
                  {" "}
                  quality software
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-8 lg:mx-0">
                I am open to QA Engineer, Manual QA, API Testing and Automation
                QA opportunities. My frontend development background also helps
                me understand user interfaces, integrations and product quality
                from a technical perspective.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                {[
                  "Manual Testing",
                  "API Testing",
                  "Automation QA",
                  "Frontend Knowledge",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-950/60 dark:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center lg:w-auto lg:flex-col">
              <a
                href="#contact"
                onClick={() =>
                  track("cta_contact_click", {
                    section: "cta",
                    page: "home",
                  })
                }
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 active:translate-y-0 sm:w-auto sm:min-w-[220px]"
              >
                <Mail className="h-4 w-4" />
                Contact Me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                download
                onClick={() =>
                  track("cv_download_click", {
                    file: CV_URL,
                    pages: CV_PAGES,
                    section: "cta",
                  })
                }
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/15 active:translate-y-0 dark:border-zinc-700 dark:bg-zinc-950/60 dark:text-zinc-200 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300 sm:w-auto sm:min-w-[220px]"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>

              <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <FileText className="h-3.5 w-3.5" />
                PDF · {CV_PAGES} {CV_PAGES === 1 ? "page" : "pages"}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}