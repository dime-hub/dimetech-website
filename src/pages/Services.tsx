import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Database, Shield, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-indigo-600" />,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs",
      link: "/services/software-development"
    },
    {
      icon: <Cloud className="w-12 h-12 text-indigo-600" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      link: "/services/cloud-solutions"
    },
    {
      icon: <Database className="w-12 h-12 text-indigo-600" />,
      title: "Database Management",
      description: "Efficient database design and optimization",
      link: "/services/consulting"
    },
    {
      icon: <Shield className="w-12 h-12 text-indigo-600" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions and consulting",
      link: "/services/consulting"
    },
    {
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      title: "IT Consulting",
      description: "Expert guidance for digital transformation",
      link: "/services/consulting"
    },
    {
      icon: <Briefcase className="w-12 h-12 text-indigo-600" />,
      title: "Enterprise Solutions",
      description: "Scalable solutions for large organizations",
      link: "/services/software-development"
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
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology solutions to drive your business forward
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="block bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise",
                description: "Years of experience in delivering cutting-edge solutions"
              },
              {
                title: "Innovation",
                description: "Stay ahead with the latest technologies and methodologies"
              },
              {
                title: "Support",
                description: "24/7 dedicated support and maintenance services"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;