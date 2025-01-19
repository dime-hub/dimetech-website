import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution with real-time inventory management",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      category: "Web Development"
    },
    {
      title: "Healthcare Management System",
      description: "Integrated healthcare platform for patient and resource management",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      technologies: ["Angular", "Python", "PostgreSQL", "Docker"],
      category: "Enterprise Solutions"
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Real-time financial data visualization and analysis platform",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      technologies: ["Vue.js", "D3.js", "FastAPI", "Redis"],
      category: "Data Analytics"
    },
    {
      title: "Smart City IoT Platform",
      description: "IoT platform for monitoring and managing city infrastructure",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
      technologies: ["React", "Node.js", "MQTT", "InfluxDB"],
      category: "IoT Solutions"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing our successful projects and innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">
                  {project.category}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <Github size={16} className="mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;