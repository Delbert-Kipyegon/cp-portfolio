import { motion } from "framer-motion";

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

export default Contact;
