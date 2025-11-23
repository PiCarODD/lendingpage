"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dropdown } from "@/components/ui/dropdown";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Building the Digital Future of Asia
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          From custom Mobile & Web Apps to enterprise APIs. Fast, affordable, and engineered for scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            variant="default"
            onClick={() => {
              const quoteSection = document.getElementById('quote-section');
              if (quoteSection) {
                quoteSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get a Quote
          </Button>
          <Dropdown
            trigger={
              <Button size="lg" variant="outline" className="flex items-center gap-2">
                View Products
                <ChevronDown className="w-4 h-4" />
              </Button>
            }
            items={[
              {
                label: "Smart POS",
                href: "https://pos.nextecasia.com",
              },
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}

