import { motion } from "framer-motion";
import { track } from "../utils/analytics";

export default function CTA() {
  const CV_URL = "/cv/Toghrul_Zulfaliyev_CV.pdf";
  const CV_PAGES = 1; // 👈 CV neçə səhifədirsə burda dəyiş

  return (
    <section className="mx-auto max-w-6xl px-4 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border p-8 md:p-10
        border-zinc-200 dark:border-zinc-800
        bg-gradient-to-r from-indigo-500/10 via-emerald-400/5 to-pink-500/10"
      >
        <h2 className="text-3xl font-bold">Let’s build something great</h2>
        <p className="mt-3 max-w-2xl text-zinc-700 dark:text-zinc-300">
          Open to Front-End roles and freelance projects. If you want a clean UI + smooth UX, I’m ready.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            onClick={() =>
              track("cta_contact_click", { section: "cta", page: "home" })
            }
            className="rounded-xl bg-indigo-500 px-6 py-3 font-medium text-white hover:bg-indigo-600 transition"
          >
            Hire / Contact Me
          </a>

          <a
            href="../../cv/Toghrul Zulfaliyev - en son.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              track("cv_download_click", {
                file: CV_URL,
                pages: CV_PAGES,
                section: "cta",
              })
            }
            className="rounded-xl border px-6 py-3 font-medium
            border-zinc-300 dark:border-zinc-700
            hover:bg-white/60 dark:hover:bg-zinc-900/40 transition
            inline-flex items-center gap-2"
          >
            <span>Download CV</span>
            <span className="text-sm opacity-80">(PDF, {CV_PAGES} page)</span>
            <span aria-hidden="true" className="ml-1">
              ⬇️
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
