import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Pricing: React.FC = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t('pricing.basic.name'),
      subtitle: t('pricing.basic.subtitle'),
      price: t('pricing.basic.price'),
      period: t('pricing.basic.period'),
      popular: false,
      cta: t('pricing.startTrial'),
      features: [
        "5 Engagements/Projects",
        "Up to 10 Users",
        "100 AI Credits/month",
        "White-label Option",
        "Email Support",
        "Standard Templates"
      ]
    },
    {
      name: t('pricing.professional.name'),
      subtitle: t('pricing.professional.subtitle'),
      price: t('pricing.professional.price'),
      period: t('pricing.professional.period'),
      popular: false,
      cta: t('pricing.startTrial'),
      features: [
        "25 Engagements/Projects",
        "Up to 50 Users",
        "1,000 AI Credits/month",
        "Priority Support",
        "Custom Templates",
        "API Access",
        "White-label Option"
      ]
    },
    {
      name: t('pricing.business.name'),
      subtitle: t('pricing.business.subtitle'),
      price: t('pricing.business.price'),
      period: t('pricing.business.period'),
      popular: true,
      cta: t('pricing.startTrial'),
      features: [
        "Unlimited Engagements/Projects",
        "Unlimited Users",
        "Unlimited AI Credits",
        "24/7 Priority Support",
        "Advanced Analytics",
        "Custom Integrations",
        "Dedicated Account Manager"
      ]
    },
    {
      name: t('pricing.enterprise.name'),
      subtitle: t('pricing.enterprise.subtitle'),
      price: t('pricing.enterprise.price'),
      period: t('pricing.enterprise.period'),
      popular: false,
      cta: t('pricing.contactSales'),
      features: [
        "Full Tenant Control",
        "Advanced Security Features",
        "Custom Development",
        "On-premise Option",
        "SLA Guarantees",
        "Training & Certification",
        "Custom Contract Terms"
      ]
    }
  ];

  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {t('pricing.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t('pricing.subtitle')}
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {t('pricing.mostPopular')}
                  </div>
                </div>
              )}

              {/* Plan Card */}
              <div className={`relative bg-gradient-to-br from-gray-800/80 via-gray-700/80 to-gray-800/80 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 h-full ${
                plan.popular ? 'border-purple-500/50' : ''
              }`}>
                
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.subtitle}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full rounded-lg px-6 py-3 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-700/60 text-white hover:bg-gray-600/60 border border-gray-600'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            {t('pricing.freeTrialNote')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
