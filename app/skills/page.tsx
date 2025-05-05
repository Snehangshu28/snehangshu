'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const skills = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    category: 'Backend Development',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'Firebase', level: 85 },
      { name: 'MySQL', level: 75 },
      { name: 'RESTful APIs', level: 85 },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'CI/CD', level: 75 },
      { name: 'Linux', level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
            Technical Skills
          </h1>
          
          <div className="space-y-12">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + categoryIndex * 0.2 }}
                className="bg-gray-900 rounded-lg p-6"
              >
                <h2 className="text-2xl font-bold text-blue-500 mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-blue-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <motion.div
                          className="bg-blue-500 h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.8 + skillIndex * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
} 