"use client";

import { motion } from "framer-motion";
import AnimationWrapper from "./animation-wrapper";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Autoship Spare Parts Ecommerce",
      description:
        "An e-commerce platform for autoship spare parts with a seamless user experience.",
      link: "https://autoship.shop/",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/images/autoship.jpg",
    },
    {
      title: "VirtualRep Attendance System",
      description:
        "A system designed to manage meeting attendance tasks efficiently.",
      link: "https://www.virtualrep.online/",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      image: "/images/virtualrep.jpg",
    },
    {
      title: "Defy Tickets & Events Management",
      description:
        "A ticketing platform for managing events with real-time features.",
      link: "https://app.defytickets.co/welcome",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/images/defytickets.jpg",
    },
    {
      title: "TruProve Farm Traceability System",
      description:
        "A traceability system for farm products ensuring transparency and trust.",
      link: "https://truprove.com/",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/images/truprove.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
    >
      <AnimationWrapper>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-white font-raleway">
            Projects
          </h2>
          <p className="text-lg text-center text-gray-300 mb-12">
            I specialize in delivering custom software solutions like the ones
            listed below. Whether you&apos;re looking for an e-commerce
            platform, an event management system, or something unique, I can
            bring your ideas to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-primarycolor border border-blue-500 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-semibold mb-2 font-raleway text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-secondary-dark text-white px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 font-bold flex flex-row gap-2 items-center"
                  >
                    View Project <ArrowRight />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimationWrapper>
    </section>
  );
};

export default Projects;
