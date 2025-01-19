import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Cloud Computing",
      excerpt: "Explore the latest trends and innovations shaping the future of cloud technology...",
      date: "March 15, 2024",
      author: "John Smith",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      category: "Cloud Technology"
    },
    {
      title: "Best Practices in Software Development",
      excerpt: "Learn about modern software development practices that can improve your team's efficiency...",
      date: "March 12, 2024",
      author: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Development"
    },
    {
      title: "Cybersecurity in the Digital Age",
      excerpt: "Understanding the importance of cybersecurity in today's interconnected world...",
      date: "March 10, 2024",
      author: "Michael Chen",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      category: "Security"
    },
    {
      title: "AI and Machine Learning Trends",
      excerpt: "Discover how AI and machine learning are transforming business operations...",
      date: "March 8, 2024",
      author: "Emily Davis",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      category: "AI & ML"
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
            Latest Insights & News
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest technology trends and insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">
                  {post.category}
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      {post.author}
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    Read more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;