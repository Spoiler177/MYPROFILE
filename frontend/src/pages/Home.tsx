import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="h-screen flex items-center justify-center text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold mb-4">
          Hi, I'm Victor 👋
        </h1>

        <p className="text-xl mb-6">
          Developer | Student | Builder of Modern Web Apps
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-black px-6 py-3 rounded-full"
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  );
}