import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // requires lucide-react for icons

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 h-20 bg-gray-800 text-white z-50 flex justify-between items-center px-6 shadow-md"
    >
      {/* Logo + App Name */}
      <Link
        to="/"
        className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-300"
      >
        <img
          src="https://media.licdn.com/dms/image/v2/C4E0BAQENh8zIGZ5_2g/company-logo_200_200/company-logo_200_200/0/1630650407924?e=2147483647&v=beta&t=Xesj3DI8B4BPMrpbxHOzHZpE2ehSzu0Ao4KoPJCwxBA"
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-2xl font-semibold tracking-wide">MyThemeApp</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link to="/" className="nav-link hover:text-blue-400">Home</Link>
        <Link to="/about" className="nav-link hover:text-blue-400">About</Link>
        <Link to="/contact" className="nav-link hover:text-blue-400">Contact</Link>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
          className="bg-gray-700 border border-gray-600 text-white text-sm rounded px-3 py-1 focus:outline-none focus:border-blue-400 hover:border-blue-400 transition-all duration-300"
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </nav>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-0 w-full bg-gray-900 flex flex-col items-start px-6 py-4 gap-4 text-white md:hidden shadow-lg"
          >
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
            <select
  value={theme}
  onChange={(e) => {
    if (window.innerWidth < 768) setMenuOpen(false); // auto close on mobile
    setTheme(e.target.value as any);
  }}
  className="w-full md:w-auto bg-gray-700 border border-gray-600 text-white text-sm rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition-all duration-300"
>
  <option value="theme1">Theme 1</option>
  <option value="theme2">Theme 2</option>
  <option value="theme3">Theme 3</option>
</select>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
