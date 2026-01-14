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

  // env-lər oxunub-oxunmamasını yoxlayırıq (ən çox problem burdan çıxır)
  const envOk = useMemo(() => {
    const s = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const t = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const p = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    return Boolean(s && t && p);
  }, []);

  useEffect(() => {
    // Success mesajı 4 saniyəyə itib getsin
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
          message: form.message.trim(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({ type: "success", text: "Message sent successfully ✅" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        type: "error",
        text: "Failed to send. Please try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border p-8 md:p-10
        border-zinc-200 dark:border-zinc-800
        bg-zinc-50 dark:bg-zinc-900"
      >
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
          If you’re hiring or have a project idea, send a message. I usually reply within 24 hours.
        </p>

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

        <form onSubmit={onSubmit} className="mt-10 grid gap-6 md:grid-cols-2">
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            disabled={loading}
            type="text"
            placeholder="Your Name"
            className="rounded-xl border px-4 py-3 bg-transparent
            border-zinc-300 dark:border-zinc-700
            focus:outline-none focus:ring-2 focus:ring-indigo-500
            disabled:opacity-60"
          />
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            disabled={loading}
            type="email"
            placeholder="Your Email"
            className="rounded-xl border px-4 py-3 bg-transparent
            border-zinc-300 dark:border-zinc-700
            focus:outline-none focus:ring-2 focus:ring-indigo-500
            disabled:opacity-60"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            disabled={loading}
            placeholder="Your Message"
            rows="5"
            className="md:col-span-2 rounded-xl border px-4 py-3 bg-transparent
            border-zinc-300 dark:border-zinc-700
            focus:outline-none focus:ring-2 focus:ring-indigo-500
            disabled:opacity-60"
          />

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 rounded-xl bg-indigo-500 px-6 py-3
            font-medium text-white hover:bg-indigo-600 transition
            disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="mt-10 flex items-center gap-6">
  <a
    href="https://github.com/ToghrulZulfaliev"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="text-2xl text-zinc-500 hover:text-white transition hover:-translate-y-1"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/toghrul-zulfaliyev/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="text-2xl text-zinc-500 hover:text-[#0A66C2] transition hover:-translate-y-1"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:toghrulzulfaliev8@gmail.com"
    aria-label="Email"
    className="text-2xl text-zinc-500 hover:text-emerald-400 transition hover:-translate-y-1"
  >
    <FaEnvelope />
  </a>
</div>
      </motion.div>
    </section>
  );
}
