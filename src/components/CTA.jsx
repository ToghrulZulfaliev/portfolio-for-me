import { motion } from "framer-motion";
import { track } from "../utils/analytics";

export default function CTA() {
  const CV_URL = "/cv/Toghrul Zulfaliyev - en son.pdf";
  const CV_PAGES = 2;

  return (
    <section className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border p-5 sm:p-8 md:p-10
        border-zinc-200 dark:border-zinc-800
        bg-gradient-to-r from-indigo-500/10 via-emerald-400/5 to-pink-500/10"
      >
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Let’s build something great
          </h2>
          <p className="mt-3 max-w-2xl mx-auto sm:mx-0 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Open to Front-End roles and freelance projects. If you want a clean
            UI + smooth UX, I’m ready.
          </p>
        </div>

        <div className="mt-7 sm:mt-8 grid gap-3 sm:flex sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href="#contact"
            onClick={() =>
              track("cta_contact_click", { section: "cta", page: "home" })
            }
            className="w-full sm:w-auto text-center rounded-xl bg-indigo-500 px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-indigo-600 transition active:scale-[0.99]"
          >
            Hire / Contact Me
          </a>

          <a
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
            download
            onClick={() =>
              track("cv_download_click", {
                file: CV_URL,
                pages: CV_PAGES,
                section: "cta",
              })
            }
            className="w-full sm:w-auto text-center rounded-xl border px-6 py-3 text-sm sm:text-base font-semibold
            border-zinc-300 dark:border-zinc-700
            hover:bg-white/60 dark:hover:bg-zinc-900/40 transition active:scale-[0.99]
            inline-flex items-center justify-center gap-2"
          >
            <span className="whitespace-nowrap">Download CV</span>

            {/* mobil-də qırılma/daşmanı önləyirik */}
            <span className="hidden sm:inline text-sm opacity-80">
              (PDF, {CV_PAGES} page)
            </span>

            <span aria-hidden="true" className="ml-1">
              ⬇️
            </span>
          </a>

          {/* mobil üçün ayrıca xırda info (daşmır, səliqəli görünür) */}
          <p className="sm:hidden text-center text-xs text-zinc-600 dark:text-zinc-400">
            PDF • {CV_PAGES} pages
          </p>
        </div>
      </motion.div>
    </section>
  );
}
