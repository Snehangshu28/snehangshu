'use client';

import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <motion.div
        className="container mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center font-playfair text-white"
          variants={itemVariants}
        >
          About Me
        </motion.h1>

        <motion.div
          className="max-w-3xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 shadow-xl"
          variants={itemVariants}
        >
          <motion.p
            className="text-lg text-gray-300 mb-6 font-poppins leading-relaxed"
            variants={itemVariants}
          >
            Hello! I&apos;m Snehangshu, a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. My journey in web development began with a curiosity about how websites work, and it has evolved into a deep passion for creating elegant and efficient solutions.
          </motion.p>

          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <motion.h2
              className="text-2xl font-bold mb-4 text-blue-400 font-playfair"
              variants={itemVariants}
            >
              My Journey
            </motion.h2>
            <motion.p
              className="text-gray-300 font-poppins leading-relaxed"
              variants={itemVariants}
            >
              Starting with the basics of HTML and CSS, I quickly moved on to JavaScript and modern frameworks. I&apos;ve worked on various projects ranging from simple websites to complex web applications, constantly learning and adapting to new technologies and best practices.
            </motion.p>
          </motion.div>

          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <motion.h2
              className="text-2xl font-bold mb-4 text-blue-400 font-playfair"
              variants={itemVariants}
            >
              Professional Skills
            </motion.h2>
            <motion.p
              className="text-gray-300 font-poppins leading-relaxed"
              variants={itemVariants}
            >
              I specialize in building responsive and user-friendly web applications using modern technologies like React, Next.js, Node.js, and various databases. My focus is on creating clean, maintainable code while following best practices and design patterns.
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-2xl font-bold mb-4 text-blue-400 font-playfair"
              variants={itemVariants}
            >
              Approach to Development
            </motion.h2>
            <motion.p
              className="text-gray-300 font-poppins leading-relaxed"
              variants={itemVariants}
            >
              I believe in writing code that is not only functional but also elegant and maintainable. I&apos;m passionate about creating user experiences that are both beautiful and intuitive. My development process involves thorough planning, clean architecture, and continuous testing to ensure high-quality results.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
} 