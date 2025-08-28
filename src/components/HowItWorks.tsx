import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: 1,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      color: 'from-purple-600 via-purple-700 to-purple-800'
    },
    {
      number: 2,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      color: 'from-blue-600 via-blue-700 to-blue-800'
    },
    {
      number: 3,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      color: 'from-green-600 via-green-700 to-green-800'
    },
    {
      number: 4,
      title: t('howItWorks.step4.title'),
      description: t('howItWorks.step4.description'),
      color: 'from-emerald-600 via-emerald-700 to-emerald-800'
    }
  ];

  return (
    <section id="how-it-works" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {t('howItWorks.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t('howItWorks.subtitle')}
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="relative group"
            >
              {/* Step Card */}
              <div className="relative bg-gradient-to-br from-gray-800/80 via-gray-700/80 to-gray-800/80 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8 shadow-xl group-hover:shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-300">
                
                {/* Number Badge */}
                <div className="relative mb-6 flex justify-center">
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                    {/* Inner Glow */}
                    <div className="absolute inset-1 bg-gradient-to-br from-white/10 to-transparent rounded-xl"></div>
                    {/* Border Accent */}
                    <div className="absolute inset-0 rounded-2xl border border-white/20"></div>
                    {/* Number */}
                    <span className="relative text-3xl font-black text-white tracking-tight">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Success Indicator for Step 4 */}
                  {step.number === 4 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Animated Arrows */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2 + 0.5,
                      type: "spring",
                      stiffness: 100
                    }}
                    animate={{
                      x: [0, 3, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }
                    }}
                    className="relative"
                  >
                    {/* Arrow Line */}
                    <div className={`w-8 h-1 bg-gradient-to-r ${step.color} rounded-full origin-left`}></div>
                    {/* Arrow Head */}
                    <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-0 border-t-2 border-b-2 border-t-${step.color.split('-')[1]}-600 border-b-${step.color.split('-')[1]}-600`}></div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
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

export default HowItWorks;
