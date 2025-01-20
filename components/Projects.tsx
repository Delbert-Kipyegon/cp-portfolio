import { motion } from "framer-motion";

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

export default Projects;
