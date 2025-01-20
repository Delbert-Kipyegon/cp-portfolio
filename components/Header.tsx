"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <header className="fixed w-full z-10 bg-primarycolor bg-opacity-90 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Image */}
        <a
          href="#home"
          onClick={() => handleClick("#home")}
          className="flex items-center"
        >
          <Image
            src="/images/logo3-bg.png" // Ensure this path matches your image file location
            alt="3gloo Logo"
            width={30} // Set an appropriate width
            height={30} // Set an appropriate height
            className="object-contain"
          />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`hover:text-blue-300 transition-colors ${
                activeSection === item.href.slice(1)
                  ? "text-secondarycolor"
                  : "text-white"
              }`}
              onClick={() => handleClick(item.href)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-white"
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

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-primarycolor bg-opacity-90"
        >
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 px-4 text-white hover:bg-secondarycolor"
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
