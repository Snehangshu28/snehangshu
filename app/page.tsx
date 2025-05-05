'use client';

import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    // <div className="min-h-screen bg-black text-white pt-10">
    <div className="min-h-screen bg-black text-white pt-10 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-transparent opacity-20 pointer-events-none"></div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
              <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 font-playfair text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I&apos;m <span className="text-blue-500">Snehangshu</span>
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl mb-8 font-poppins text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >              Full Stack Developer
            </motion.h2>
            <p className="text-xl text-gray-300 mb-8">
              Crafting digital experiences with modern technologies and innovative solutions.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="/contact"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="/projects"
                className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </div>
          </motion.div> 
        <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-lg h-80 bg-gray-900 rounded-lg overflow-hidden border border-blue-500/20 group hover:border-blue-500/40 transition-all duration-300">
              {/* Code Editor Header */}
              <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-sm text-gray-400">index.tsx</div>
              </div>
              
              {/* Animated Code Display */}
              <div className="p-4 font-mono text-sm">
                {/* <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-500"
                >
                  // Welcome to my portfolio
                </motion.div> */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-500"
                >
                  const developer = {'{'}
                </motion.div>
                <div className="ml-4">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-blue-400"
                  >
                    name:
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-yellow-400 ml-4"
                  >
                    "Snehangshu",
                  </motion.div>
                  {/* <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                    className="text-blue-400"
                  >
                    role:
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-yellow-400 ml-4"
                  >
                    "Full Stack Developer",
                  </motion.div> */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                    className="text-blue-400"
                  >
                    skills:
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 }}
                    className="text-yellow-400 ml-4"
                  >
                    ["React", "Next.js", "Node.js", "Express", "MySQL", "MongoDB"],
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 }}
                    className="text-blue-400"
                  >
                    attributes:
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.0 }}
                    className="text-yellow-400 ml-4"
                  >
                    {'{'}
                  </motion.div>
                  <div className="ml-8">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.2 }}
                      className="text-green-400"
                    >
                      hardworking: true,
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.4 }}
                      className="text-green-400"
                    >
                      quickLearner: true,
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.6 }}
                      className="text-green-400"
                    >
                      problemSolver: true
                    </motion.div>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.8 }}
                    className="text-yellow-400 ml-4"
                  >
                    {'}'}
                  </motion.div>
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.0 }}
                  className="text-gray-500"
                >
                  {'}'}
                </motion.div>
                
                {/* Animated Cursor */}
                <motion.div 
                  className="inline-block w-2 h-4 bg-blue-500"
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                ></motion.div>
              </div>

              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>
            </div>
          </motion.div>
         
          
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative inline-block mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-blue-500"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-blue-500"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-blue-500"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-blue-500"></div>
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">About Me</h2>
          </motion.div>
          
          <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-lg text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              I am a passionate Full Stack Developer with expertise in building modern web applications.
              My journey in software development has equipped me with a diverse skill set and a deep
              understanding of both frontend and backend technologies.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative inline-block mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-blue-500"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-blue-500"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-blue-500"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-blue-500"></div>
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-500">Technical Skills</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "React", icon: "⚛️" },
            { name: "Node.js", icon: "🟢" },
            { name: "TypeScript", icon: "📘" },
            { name: "Next.js", icon: "▲" },
            { name: "MongoDB", icon: "🍃" },
            { name: "MySQL", icon: "🐬" },
            { name: "AWS", icon: "☁️" },
            { name: "Firebase", icon: "🔥" },
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-shadow text-center border border-gray-800 group hover:border-blue-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <motion.span 
                className="text-4xl mb-2 block group-hover:scale-110 transition-transform duration-300"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                {skill.icon}
              </motion.span>
              <motion.h3 
                className="text-xl font-semibold text-blue-500 group-hover:text-blue-400 transition-colors"
                animate={{
                  color: ["#3B82F6", "#60A5FA", "#3B82F6"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                {skill.name}
              </motion.h3>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative inline-block mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-blue-500"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-blue-500"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-blue-500"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-blue-500"></div>
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-500">Featured Projects</h2>
        </motion.div>

      

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Hospital Management System",
              description: "A comprehensive hospital management system for managing patient records, appointments, and medical staff efficiently.",
              technologies: ["React", "Node.js", "MySql", "Express"],
              link: "#"
            },
            {
              title: "School Management System",
              description: "An integrated school management platform for handling student records, attendance, and academic performance tracking.",
              technologies: ["Next.js", "MySQL", "Express", "Node.js"],
              link: "#"
            },
            {
              title: "POS Application",
              description: "A modern Point of Sale system with inventory management, sales tracking, and customer management features.",
              technologies: ["React", "Node.js", "Firebase", "Express"],
              link: "#"
            }
          ].map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Code Editor Display */}
              <div className="bg-gray-900">
                <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-400">{project.title.toLowerCase().replace(/\s+/g, '-')}.ts</div>
                </div>
                
                <div className="p-4 font-mono text-sm">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-500"
                  >
                    // Project Details
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-500"
                  >
                    const project = {'{'}
                  </motion.div>
                  <div className="ml-4">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-blue-400"
                    >
                      name:
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      className="text-green-400 ml-4"
                    >
                      "{project.title}",
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0 }}
                      className="text-blue-400"
                    >
                      description:
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                      className="text-green-400 ml-4"
                    >
                      "{project.description}",
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 }}
                      className="text-blue-400"
                    >
                      tools:
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.6 }}
                      className="text-yellow-400 ml-4"
                    >
                      {JSON.stringify(project.technologies)},
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.8 }}
                      className="text-blue-400"
                    >
                      myRole:
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.0 }}
                      className="text-green-400 ml-4"
                    >
                      "Full Stack Developer"
                    </motion.div>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className="text-gray-500"
                  >
                    {'}'}
                  </motion.div>
                  
                  {/* Animated Cursor */}
                  <motion.div 
                    className="inline-block w-2 h-4 bg-blue-500"
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  ></motion.div>
                </div>
              </div>

              <div className="p-4 border-t border-gray-800">
                <motion.a
                  href={project.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  View Project
                  <svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
