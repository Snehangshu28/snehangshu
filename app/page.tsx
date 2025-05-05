'use client';

import Image from "next/image";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white pt-10">
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
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-500"
                >
                  // Welcome to my portfolio
                </motion.div>
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
                  <motion.div 
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
                  </motion.div>
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
                    ["React", "Node.js", "TypeScript"],
                  </motion.div>
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
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
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-4xl mb-2 block group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
              <h3 className="text-xl font-semibold text-blue-500 group-hover:text-blue-400 transition-colors">{skill.name}</h3>
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
              image: "/hospital.avif",
              link: "#"
            },
            {
              title: "School Management System",
              description: "An integrated school management platform for handling student records, attendance, and academic performance tracking.",
              technologies: ["Next.js", "MySQL", "Express", "Node.js"],
              image: "/school1.jpg",
              link: "#"
            },
            {
              title: "POS Application",
              description: "A modern Point of Sale system with inventory management, sales tracking, and customer management features.",
              technologies: ["React", "Node.js", "Firebase", "Express"],
              image: "/pos.avif",
              link: "#"
            }
          ].map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-gray-900/50 group-hover:bg-gray-900/30 transition-colors"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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
