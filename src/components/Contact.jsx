import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(String(email).trim());

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const envOk = useMemo(() => {
    const s = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const t = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const p = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    return Boolean(s && t && p);
  }, []);

  useEffect(() => {
    if (status.type === "success") {
      const id = setTimeout(() => setStatus({ type: "", text: "" }), 4000);
      return () => clearTimeout(id);
    }
  }, [status.type]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    if (!envOk) {
      setStatus({
        type: "error",
        text:
          "Email config is missing. Make sure .env is in project root and restart: Ctrl+C then npm run dev.",
      });
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", text: "Please fill in all fields." });
      return;
    }

    if (!isValidEmail(form.email)) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          to_email: import.meta.env.VITE_RECIVE_EMAIL,
          message: form.message.trim(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({ type: "success", text: "Message sent successfully ✅" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        type: "error",
        text: err?.text || "Failed to send. Please try again in a moment.",
      });
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "w-full rounded-xl border px-4 py-3 bg-transparent " +
    "border-zinc-300 dark:border-zinc-700 " +
    "text-sm sm:text-base " +
    "focus:outline-none focus:ring-2 focus:ring-indigo-500 " +
    "disabled:opacity-60";

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-14 sm:py-16 md:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border p-5 sm:p-8 md:p-10
        border-zinc-200 dark:border-zinc-800
        bg-zinc-50 dark:bg-zinc-900"
      >
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Contact
          </h2>
          <p className="mt-3 sm:mt-4 max-w-xl mx-auto md:mx-0 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            If you’re hiring or have a project idea, send a message. I usually
            reply within 24 hours.
          </p>
        </div>

        {/* Status */}
        {status.text && (
          <div
            className={`mt-6 rounded-xl border px-4 py-3 text-sm ${
              status.type === "success"
                ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-700/50 dark:bg-emerald-950/30 dark:text-emerald-200"
                : "border-rose-300 bg-rose-50 text-rose-700 dark:border-rose-700/50 dark:bg-rose-950/30 dark:text-rose-200"
            }`}
          >
            {status.text}
          </div>
        )}

        <form
          onSubmit={onSubmit}
          className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-2"
        >
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            disabled={loading}
            type="text"
            placeholder="Your Name"
            className={inputBase}
          />

          <input
            name="email"
            value={form.email}
            onChange={onChange}
            disabled={loading}
            type="email"
            placeholder="Your Email"
            className={inputBase}
            inputMode="email"
            autoComplete="email"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            disabled={loading}
            placeholder="Your Message"
            rows={5}
            className={inputBase + " md:col-span-2 resize-y"}
          />

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 rounded-xl bg-indigo-500 px-6 py-3
            text-sm sm:text-base font-semibold text-white hover:bg-indigo-600 transition
            disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99]"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Socials */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center md:justify-start gap-3 sm:gap-4">
          <a
            href="https://github.com/ToghrulZulfaliev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border
            border-zinc-200 bg-white/70 text-zinc-600 shadow-sm
            hover:text-zinc-900 hover:-translate-y-0.5 transition
            dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-300 dark:hover:text-white"
          >
            <FaGithub className="text-xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/toghrul-zulfaliyev/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border
            border-zinc-200 bg-white/70 text-zinc-600 shadow-sm
            hover:-translate-y-0.5 transition
            dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-300"
          >
            <FaLinkedin className="text-xl hover:text-[#0A66C2]" />
          </a>

          <a
            href="mailto:toghrulzulfaliev8@gmail.com"
            aria-label="Email"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border
            border-zinc-200 bg-white/70 text-zinc-600 shadow-sm
            hover:text-emerald-500 hover:-translate-y-0.5 transition
            dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-300"
          >
            <FaEnvelope className="text-xl" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
