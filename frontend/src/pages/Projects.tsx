function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">
              Farm E-Commerce Platform
            </h3>
            <p className="text-gray-400">
              Online system for farmers to manage and sell products
              digitally.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">
              Weather Forecast App
            </h3>
            <p className="text-gray-400">
              Real-time weather tracking app using API integration.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">
              MediGuide Platform
            </h3>
            <p className="text-gray-400">
              Health education website providing disease awareness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;