"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = (href: string) => {
    setActiveSection(href.slice(1));
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full z-10 bg-[#021842] bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold"
          onClick={() => handleClick("#home")}
        >
          CL
        </a>
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`hover:text-blue-300 transition-colors ${
                activeSection === item.href.slice(1) ? "text-blue-300" : ""
              }`}
              onClick={() => handleClick(item.href)}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 px-4 hover:bg-blue-900"
              onClick={() => handleClick(item.href)}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
