import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Shield, Zap, BarChart, Server, Lock } from 'lucide-react';

const CloudSolutions = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-indigo-600" />,
      title: "Cloud Migration",
      description: "Seamless migration of your existing infrastructure to the cloud"
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Cloud Security",
      description: "Comprehensive security solutions for your cloud infrastructure"
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      title: "Performance Optimization",
      description: "Optimize your cloud resources for maximum efficiency"
    },
    {
      icon: <BarChart className="w-8 h-8 text-indigo-600" />,
      title: "Cloud Analytics",
      description: "Advanced analytics and monitoring solutions"
    },
    {
      icon: <Server className="w-8 h-8 text-indigo-600" />,
      title: "Infrastructure Management",
      description: "24/7 management and maintenance of your cloud infrastructure"
    },
    {
      icon: <Lock className="w-8 h-8 text-indigo-600" />,
      title: "Disaster Recovery",
      description: "Robust backup and disaster recovery solutions"
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
            Cloud Solutions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Scalable and secure cloud infrastructure solutions for your business
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

        {/* Cloud Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Cloud Platforms We Work With
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Amazon Web Services",
                description: "Comprehensive cloud computing services"
              },
              {
                name: "Microsoft Azure",
                description: "Enterprise-grade cloud solutions"
              },
              {
                name: "Google Cloud Platform",
                description: "Innovative cloud technologies"
              }
            ].map((platform, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl text-center"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {platform.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CloudSolutions;