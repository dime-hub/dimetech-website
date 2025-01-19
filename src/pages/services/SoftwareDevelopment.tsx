import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, Globe, Shield } from 'lucide-react';

const SoftwareDevelopment = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-indigo-600" />,
      title: "Custom Software Development",
      description: "Tailored solutions built to address your specific business challenges and requirements."
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-600" />,
      title: "Web Applications",
      description: "Responsive and scalable web applications using modern frameworks and technologies."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices."
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-600" />,
      title: "Database Solutions",
      description: "Efficient database design and optimization for improved performance and scalability."
    },
    {
      icon: <Cloud className="w-8 h-8 text-indigo-600" />,
      title: "Cloud Integration",
      description: "Seamless integration with cloud services and infrastructure solutions."
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Security Implementation",
      description: "Robust security measures to protect your applications and data."
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
            Software Development Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We deliver cutting-edge software solutions that drive innovation and business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
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

        {/* Development Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery",
                description: "Understanding your requirements and business objectives"
              },
              {
                step: "2",
                title: "Planning",
                description: "Detailed project planning and architecture design"
              },
              {
                step: "3",
                title: "Development",
                description: "Agile development with regular updates and feedback"
              },
              {
                step: "4",
                title: "Delivery",
                description: "Testing, deployment, and ongoing support"
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

export default SoftwareDevelopment;