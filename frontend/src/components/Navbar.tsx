function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-green-400">
          Victor Kamau
        </h1>

        <div className="space-x-6 hidden md:block">
          <a href="#home" className="hover:text-green-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-green-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-green-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-green-400 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;