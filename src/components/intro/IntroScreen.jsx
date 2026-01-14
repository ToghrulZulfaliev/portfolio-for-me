import { motion } from "framer-motion";
import me from "../../photo/ownphoto.jpg"; // adını öz şəkil faylına uyğun yaz

export default function IntroScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Avatar */}
        <motion.img
          src={me}
          alt="Toghrul Zulfaliyev"
          className="mx-auto h-28 w-28 rounded-full object-cover border border-white/20 shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />

        {/* Name */}
        <motion.h1
          className="mt-6 text-4xl font-bold tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          Toghrul Zulfaliyev
        </motion.h1>

        {/* Slogan */}
        <motion.p
          className="mt-3 text-lg text-zinc-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Front-End Developer | React Specialist
        </motion.p>

        {/* Progress bar (premium hiss) */}
        <div className="mx-auto mt-8 h-1 w-56 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full w-full bg-white/70"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
