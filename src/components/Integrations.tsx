import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Integrations: React.FC = () => {
  const { t } = useTranslation();

  const INTEGRATIONS = [
    {
      name: "Jira",
      category: "Issue Tracking",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    },
    {
      name: "GitHub",
      category: "Source Control",
      icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    },
    {
      name: "GitLab",
      category: "DevOps",
      icon: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
    },
    {
      name: "Slack",
      category: "Communication",
      icon: "M6 15a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.5-11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM6 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.5 10a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0 1a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"
    },
    {
      name: "Teams",
      category: "Communication",
      icon: "M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
    }
  ];

  return (
    <section id="integrations" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-green-500/5 rounded-full blur-3xl" style={{ animation: 'spin 20s linear infinite' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {t('integrations.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t('integrations.subtitle')}
          </motion.p>
        </div>

        {/* Centralized Integration Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl">
            {INTEGRATIONS.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                {/* Card Background with Glow */}
                <div className="relative bg-gradient-to-br from-gray-800/80 via-gray-700/80 to-gray-800/80 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8 shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-300">
                  
                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-6 flex justify-center">
                    <div className="relative">
                      {/* Background Circle */}
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        {/* Icon */}
                        <div className="w-16 h-16 text-white flex items-center justify-center">
                          <svg 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                            className="w-full h-full group-hover:scale-110 transition-transform duration-300"
                          >
                            <path d={integration.icon} />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Floating Particles */}
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75 delay-300"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {integration.name}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium">
                      {integration.category}
                    </p>
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Connection Lines */}
                {index < INTEGRATIONS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      className="w-8 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-full origin-left"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
