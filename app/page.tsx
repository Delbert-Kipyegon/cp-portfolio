"use client";

import { useState, useEffect } from "react";
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

const Home = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center px-4"
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 font-raleway">
        Cyprian Lemtukei
      </h1>
      <h2 className="text-2xl md:text-3xl mb-6 font-raleway">
        Developer & Business Person
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Bridging the gap between technology and business to create innovative
        solutions.
      </p>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-block"
      >
        Get in Touch
      </motion.a>
    </motion.div>
  </section>
);

const About = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center px-4 py-16"
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center font-raleway">
        About Me
      </h2>
      <div className="space-y-6">
        <p>
          As a developer and business person, I bring a unique perspective to
          the world of technology. My genetic makeup includes:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>50% Problem-solving DNA</li>
          <li>25% Entrepreneurial spirit</li>
          <li>15% Coffee-powered coding</li>
          <li>10% Innovative thinking</li>
        </ul>
        <p>
          With a strong foundation in both technical and business domains, I
          strive to create solutions that not only work flawlessly but also
          drive business growth and user satisfaction.
        </p>
        <p>
          My journey in the tech world has been shaped by a passion for learning
          and a commitment to excellence. I believe in the power of technology
          to transform businesses and improve lives.
        </p>
      </div>
    </div>
  </section>
);

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "AI-powered Chatbot",
      description:
        "An intelligent chatbot using natural language processing for customer support.",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
    },
    {
      title: "Blockchain Voting System",
      description:
        "A secure and transparent voting system built on blockchain technology.",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center font-raleway">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-900 bg-opacity-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2 font-raleway">
                {project.title}
              </h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-700 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = () => (
  <section
    id="blog"
    className="min-h-screen flex items-center justify-center px-4 py-16"
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center font-raleway">Blog</h2>
      <p className="text-center">
        Coming soon! I&apos;ll be sharing my thoughts on technology, business,
        and innovation.
      </p>
    </div>
  </section>
);

const Contact = () => (
  <section
    id="contact"
    className="min-h-screen flex items-center justify-center px-4 py-16"
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 font-raleway">Contact</h2>
      <p className="mb-6">
        My inbox is always open. Whether you need some help on a project or you
        just want to say hi, send me a message and I will get back to you!
      </p>
      <motion.a
        href="mailto:lemtukeicyprian@gmail.com"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-block mb-4"
      >
        Shoot me a message!
      </motion.a>
      <div className="space-y-2">
        <p>Email: lemtukeicyprian@gmail.com</p>
        <p>Phone: +254 113 688376</p>
      </div>
    </div>
  </section>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "blog", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main>
        <Home />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
