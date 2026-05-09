import DarkMode from "../Hooks/DarkMode";

export default function Navbar() {
  const { dark, setDark } = DarkMode();

  return (
    <nav className="fixed w-full bg-white dark:bg-black shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between p-4">
        <h1 className="font-bold text-xl text-indigo-600">Victor.dev</h1>

        <div className="flex gap-6 items-center">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>

          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 border rounded"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}