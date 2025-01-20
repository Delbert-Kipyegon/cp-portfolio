"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimationWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimationWrapper = ({ children, delay = 0 }: AnimationWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
