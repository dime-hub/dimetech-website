import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

const Careers = () => {
  const positions = [
    {
      title: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120K - $180K",
      description: "We're looking for an experienced Full Stack Developer to join our team...",
      requirements: [
        "5+ years of experience with React and Node.js",
        "Experience with cloud platforms (AWS/Azure/GCP)",
        "Strong understanding of database design",
        "Excellent problem-solving skills"
      ]
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      salary: "$100K - $150K",
      description: "Seeking a DevOps Engineer to help build and maintain our infrastructure...",
      requirements: [
        "3+ years of DevOps experience",
        "Strong knowledge of Docker and Kubernetes",
        "Experience with CI/CD pipelines",
        "Cloud platform expertise"
      ]
    },
    {
      title: "UI/UX Designer",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90K - $130K",
      description: "Looking for a creative UI/UX Designer to craft beautiful user experiences...",
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma and Adobe Creative Suite",
        "Strong portfolio of web and mobile designs",
        "Experience with user research"
      ]
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
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Build your career with us and help shape the future of technology
          </p>
        </motion.div>

        {/* Why Join Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              title: "Innovation",
              description: "Work on cutting-edge technologies and challenging projects"
            },
            {
              title: "Growth",
              description: "Continuous learning and career development opportunities"
            },
            {
              title: "Culture",
              description: "Collaborative and inclusive work environment"
            }
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Open Positions */}
        <div className="space-y-8">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex flex-wrap gap-6 items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {position.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {position.location}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {position.type}
                    </div>
                    <div className="flex items-center">
                      <DollarSign size={16} className="mr-1" />
                      {position.salary}
                    </div>
                  </div>
                </div>
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Apply Now
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {position.description}
              </p>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Requirements:
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  {position.requirements.map((req, reqIndex) => (
                    <li key={reqIndex}>{req}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;