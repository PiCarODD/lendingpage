import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
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
            {t('contact.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.getInTouch')}</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                {t('contact.description')}
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{t('contact.emailSupport')}</h4>
                  <p className="text-slate-400 mt-1">hello@nextecasia.com</p>
                  <p className="text-slate-500 text-sm mt-1">{t('contact.responseTime')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{t('contact.phoneSupport')}</h4>
                  <p className="text-slate-400 mt-1">+660814535007</p>
                  <p className="text-slate-500 text-sm mt-1">{t('contact.businessHours')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{t('contact.globalPresence')}</h4>
                  <p className="text-slate-400 mt-1">{t('contact.servingWorldwide')}</p>
                  <p className="text-slate-500 text-sm mt-1">{t('contact.multiTenantPlatform')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  placeholder={t('contact.fullName')}
                  className="w-full bg-slate-900/40 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-purple-500 focus:outline-none transition"
                />
                <input
                  placeholder={t('contact.company')}
                  className="w-full bg-slate-900/40 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-purple-500 focus:outline-none transition"
                />
              </div>

              <input
                placeholder={t('contact.workEmail')}
                type="email"
                className="w-full bg-slate-900/40 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-purple-500 focus:outline-none transition"
              />

              <select className="w-full bg-slate-900/40 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:border-purple-500 focus:outline-none transition">
                <option>{t('contact.selectPlan')}</option>
                <option>Basic - $99/month</option>
                <option>Professional - $299/month</option>
                <option>Business - $499/month</option>
                <option>Enterprise - $1500/month</option>
              </select>

              <textarea
                placeholder={t('contact.tellUsAbout')}
                className="w-full bg-slate-900/40 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition h-32 resize-none"
              />

              <div className="flex flex-col gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t('contact.sendMessage')}
                </motion.button>
                <p className="text-xs text-slate-500 text-center">
                  {t('contact.responseNote')}
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
