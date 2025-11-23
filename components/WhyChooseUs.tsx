"use client";

import { motion } from "framer-motion";
import { DollarSign, Code, Zap, Shield } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    title: "Affordable Rates",
    description: "Competitive pricing without compromising on quality. Get enterprise-grade solutions at startup-friendly prices.",
    color: "text-green-400",
  },
  {
    icon: Code,
    title: "Customizable Code",
    description: "Full source code access. Modify, extend, and scale your solution exactly how you need it.",
    color: "text-blue-400",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Rapid development cycles. From concept to deployment, we deliver faster than traditional agencies.",
    color: "text-yellow-400",
  },
  {
    icon: Shield,
    title: "Guaranteed Quality",
    description: "Rigorous testing and quality assurance. We stand behind our work with comprehensive support.",
    color: "text-purple-400",
  },
];

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Four pillars that set us apart in the tech development landscape
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                className="glass rounded-2xl p-6 text-center cursor-pointer"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-white/5">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{stat.title}</h3>
                <p className="text-gray-400">{stat.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

