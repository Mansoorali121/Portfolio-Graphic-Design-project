import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import namelogo from "./namelogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-md"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={namelogo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 lg:space-x-10">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative text-gray-700 font-medium px-3 py-2 rounded-lg transition-colors duration-300 hover:text-blue-600 group"
            >
              {link.name}
              {/* Underline Animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <ul className="flex flex-col space-y-4 py-6 px-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <motion.a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 5 }}
                  className="block text-gray-700 font-medium px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
