function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <p>© {new Date().getFullYear()} Victor Kamau. All rights reserved.</p>
      <p className="text-gray-400 mt-2">
        Built with React & Tailwind CSS
      </p>
    </footer>
  );
}

export default Footer;