"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, Terminal, Shield, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  glow?: boolean;
}

function BentoCard({ title, description, icon, className, glow = false }: BentoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "glass rounded-2xl p-6 cursor-pointer transition-all duration-300",
        glow && "glow-border-green",
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 text-blue-400">{icon}</div>
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 flex-grow">{description}</p>
      </div>
    </motion.div>
  );
}

export function BentoGrid() {
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1 - Large: Mobile & Web Development */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2">
            <BentoCard
              title="Mobile & Web Development"
              description="Custom mobile applications for iOS and Android, plus responsive web solutions built with modern frameworks. We deliver scalable, performant apps that your users will love."
              icon={
                <div className="flex gap-4">
                  <Smartphone className="w-8 h-8" />
                  <Globe className="w-8 h-8" />
                </div>
              }
              className="h-full"
            />
          </motion.div>

          {/* Card 2 - Medium: Desktop Clients & APIs */}
          <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-1">
            <BentoCard
              title="Desktop Clients & APIs"
              description="Cross-platform desktop applications and robust API development. Enterprise-grade solutions that integrate seamlessly with your existing infrastructure."
              icon={<Terminal className="w-8 h-8" />}
              className="h-full"
            />
          </motion.div>

          {/* Card 3 - Medium: 24/7 Support & After-Service Guarantee */}
          <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-1">
            <BentoCard
              title="24/7 Support & After-Service Guarantee"
              description="Round-the-clock customer support and a strict after-service guarantee. Your success is our commitment, backed by dedicated support whenever you need it."
              icon={
                <div className="flex gap-4">
                  <Shield className="w-8 h-8" />
                  <Clock className="w-8 h-8" />
                </div>
              }
              className="h-full"
              glow={true}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

