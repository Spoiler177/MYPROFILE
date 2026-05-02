function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6"
    >
      <div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-green-400">Victor Kamau</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
          Passionate Frontend Developer and Student building modern,
          scalable web applications using React, TypeScript and
          modern technologies.
        </p>

        <a
          href="#projects"
          className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-lg font-semibold transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Home;