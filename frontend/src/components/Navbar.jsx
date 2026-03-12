import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Achievements", link: "#achievements" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="bg-black/90 backdrop-blur-md text-white px-6 md:px-10 py-4 flex items-center justify-between shadow-lg sticky top-0 z-50 border-b border-gray-800">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src="logo.png" alt="Logo" className="h-10 w-auto object-contain" />
        <span className="font-bold text-lg tracking-wide hidden sm:block">
          Portfolio
        </span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-8 font-semibold text-sm tracking-wider uppercase">
        {links.map((item) => (
          <li key={item.name}>
            <a
              href={item.link}
              className="relative group hover:text-lime-300 transition"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-lime-300 transition-all group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[72px] left-0 w-full bg-black border-t border-gray-800 md:hidden">
          <ul className="flex flex-col items-center py-6 gap-6 font-semibold uppercase text-sm">
            {links.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="hover:text-lime-300 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;