import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Target, TrendingUp, Compass, Workflow } from 'lucide-react';

const Consulting = () => {
  const services = [
    {
      icon: <Lightbulb className="w-8 h-8 text-indigo-600" />,
      title: "Strategic Planning",
      description: "Develop comprehensive technology strategies aligned with your business goals"
    },
    {
      icon: <Target className="w-8 h-8 text-indigo-600" />,
      title: "Digital Transformation",
      description: "Guide your organization through successful digital transformation"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
      title: "Process Optimization",
      description: "Streamline operations and improve efficiency through technology"
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Team Development",
      description: "Build and train high-performing technology teams"
    },
    {
      icon: <Compass className="w-8 h-8 text-indigo-600" />,
      title: "Technology Assessment",
      description: "Evaluate and recommend optimal technology solutions"
    },
    {
      icon: <Workflow className="w-8 h-8 text-indigo-600" />,
      title: "Project Management",
      description: "Expert guidance in managing complex technology projects"
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
            IT Consulting Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Expert guidance to help your business leverage technology effectively
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Consulting Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Consulting Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Assessment",
                description: "Thorough analysis of your current technology landscape"
              },
              {
                step: "2",
                title: "Strategy",
                description: "Develop a tailored technology roadmap"
              },
              {
                step: "3",
                title: "Implementation",
                description: "Execute the planned solutions effectively"
              },
              {
                step: "4",
                title: "Optimization",
                description: "Continuous improvement and support"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {phase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Consulting;