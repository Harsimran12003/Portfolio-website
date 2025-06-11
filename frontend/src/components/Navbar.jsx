const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 py-4 flex items-center justify-between shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="logo.png"
          alt="Logo"
          className="h-10 w-auto object-contain"
        />
      </div>

      {/* Menu Links */}
      <ul className="hidden md:flex space-x-8 font-semibold text-sm tracking-wide uppercase">
        <li><a href="#home" className="hover:text-lime-300 transition">Home</a></li>
        <li><a href="#about" className="hover:text-lime-300 transition">About</a></li>
        <li><a href="#work" className="hover:text-lime-300 transition">Skills</a></li>
        <li><a href="#projects" className="hover:text-lime-300 transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-lime-300 transition">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
