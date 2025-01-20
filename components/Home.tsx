"use client";

import { motion } from "framer-motion";

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

export default Home;
