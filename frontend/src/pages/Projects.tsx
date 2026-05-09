import { motion } from "framer-motion";

const projects = [
  { title: "Farm System", desc: "E-commerce for farmers" },
  { title: "Weather App", desc: "Live weather updates" },
  { title: "MediGuide", desc: "Health education platform" },
];

export default function Projects() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-black px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Work
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white dark:bg-gray-900 shadow rounded-xl transition"
          >
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-gray-500">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}