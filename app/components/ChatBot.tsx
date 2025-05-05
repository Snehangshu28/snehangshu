'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Knowledge base of questions and answers
const knowledgeBase = {
  general: [
    {
      question: "hi|hello|hey",
      answer: "Hello! I'm your portfolio assistant. How can I help you today?"
    },
    {
      question: "who are you|what can you do",
      answer: "I'm an AI assistant here to help you learn more about this portfolio. I can answer questions about the projects, technologies used, and more!"
    },
    {
      question: "thank you|thanks",
      answer: "You're welcome! Feel free to ask if you have any other questions."
    }
  ],
  tech: [
    {
      question: "what technologies|tech stack|skills",
      answer: "The portfolio uses Next.js, React, TypeScript, Tailwind CSS, and Framer Motion for animations. The backend technologies include Node.js, Express, MongoDB, Firebase, and MySQL."
    },
    {
      question: "next.js|nextjs",
      answer: "Next.js is a React framework that enables server-side rendering and static site generation. It provides features like file-based routing, API routes, and built-in optimizations."
    },
    {
      question: "react|reactjs",
      answer: "React is a JavaScript library for building user interfaces. It uses a component-based architecture and virtual DOM for efficient updates."
    },
    {
      question: "node.js|nodejs",
      answer: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It's used for building scalable network applications and server-side development."
    },
    {
      question: "express|expressjs",
      answer: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
    },
    {
      question: "mongodb|mongo",
      answer: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It's known for its scalability and flexibility."
    },
    {
      question: "firebase",
      answer: "Firebase is a platform developed by Google for creating mobile and web applications. It provides services like authentication, real-time database, hosting, and cloud functions."
    },
    {
      question: "mysql",
      answer: "MySQL is a popular open-source relational database management system. It's known for its reliability, performance, and ease of use."
    }
  ]
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your portfolio assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const findAnswer = (question: string) => {
    const normalizedQuestion = question.toLowerCase().trim();
    
    // Check general questions
    for (const qa of knowledgeBase.general) {
      if (new RegExp(qa.question).test(normalizedQuestion)) {
        return qa.answer;
      }
    }

    // Check tech questions
    for (const qa of knowledgeBase.tech) {
      if (new RegExp(qa.question).test(normalizedQuestion)) {
        return qa.answer;
      }
    }

    // Default response if no match found
    return "I'm not sure about that. You can ask me about the technologies used in this portfolio, like Next.js, React, Node.js, Express, MongoDB, Firebase, or MySQL.";
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const userMessage = inputMessage.trim();
      setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
      
      // Get bot response
      const botResponse = findAnswer(userMessage);
      setTimeout(() => {
        setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
      }, 1000);
      
      setInputMessage('');
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors z-50"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-24 right-8 w-80 h-96 bg-gray-900 rounded-lg shadow-xl border border-gray-700 overflow-hidden z-50"
          >
            {/* Chat Header */}
            <div className="bg-gray-800 p-4 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Portfolio Assistant</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="p-4 h-64 overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex items-start space-x-2 ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 ${
                    message.sender === 'user' ? 'bg-blue-500' : 'bg-gray-700'
                  } flex items-center justify-center`}>
                    {message.sender === 'user' ? (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>
                  
                  {/* Message */}
                  <div
                    className={`p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 text-gray-200'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors flex items-center justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 