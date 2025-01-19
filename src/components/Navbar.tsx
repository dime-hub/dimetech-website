import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, Briefcase } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  {
    title: 'Services',
    path: '/services',
    dropdown: [
      { title: 'Software Development', path: '/services/software-development' },
      { title: 'Cloud Solutions', path: '/services/cloud-solutions' },
      { title: 'Consulting', path: '/services/consulting' }
    ]
  },
  { title: 'About', path: '/about' },
  { title: 'Portfolio', path: '/portfolio' },
  { title: 'Blog', path: '/blog' },
  { title: 'Careers', path: '/careers' },
  { title: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center space-x-2">
              <Briefcase className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <span className="hidden font-bold sm:inline-block text-indigo-600 dark:text-indigo-400">
                Dimetechnologies
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {item.title}
                  </Link>
                  
                  {item.dropdown && activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                    >
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.title}
                          to={dropItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {dropItem.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sheet - Moved outside the header */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed inset-y-0 right-0 z-50 w-[280px] bg-white dark:bg-gray-800 shadow-xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                  <Link 
                    to="/" 
                    className="flex items-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <Briefcase className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">
                      Dimetechnologies
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <nav className="px-4 py-4">
                    {navItems.map((item) => (
                      <div key={item.title} className="mb-2">
                        <Link
                          to={item.path}
                          className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                        {item.dropdown && (
                          <div className="pl-4 space-y-2 mt-1">
                            {item.dropdown.map((dropItem) => (
                              <Link
                                key={dropItem.title}
                                to={dropItem.path}
                                className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                                onClick={() => setIsOpen(false)}
                              >
                                {dropItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;