"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="quote-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get a Quote
          </h2>
          <p className="text-xl text-gray-400">
            Ready to start your project? Let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 mb-4">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-gray-400 text-sm">info@nextecasia.com</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 mb-4">
                <Phone className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400 text-sm">+65 1234 5678</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 mb-4">
                <MessageSquare className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-400 text-sm">24/7 Support</p>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-white mb-2">Project Type</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select a project type</option>
                <option value="mobile">Mobile App</option>
                <option value="web">Web Application</option>
                <option value="desktop">Desktop Application</option>
                <option value="api">API Development</option>
                <option value="pos">Smart POS</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <Button size="lg" variant="default" className="w-full">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

