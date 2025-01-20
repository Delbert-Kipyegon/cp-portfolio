"use client";

import { motion } from "framer-motion";
import AnimationWrapper from "./animation-wrapper";

const Home = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center px-4"
  >
    <AnimationWrapper>
      <div className="text-center text-white space-y-6">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4 font-raleway tracking-tight drop-shadow-lg text-secondarycolor"
        >
          Cyprian Lemtukei
        </motion.h1>

        {/* Animated Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl md:text-3xl font-medium mb-6 font-raleway tracking-wide"
        >
          Developer & Business Person
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Bridging the gap between technology and business to create innovative
          solutions that transform ideas into impactful realities.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className=" bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full inline-block transition-transform duration-200"
        >
          Get in Touch
        </motion.a>
      </div>
    </AnimationWrapper>
  </section>
);

export default Home;
