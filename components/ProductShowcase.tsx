"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Package, Cloud } from "lucide-react";

export function ProductShowcase() {
  return (
    <section id="products-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Innovations by Nextec
          </h2>
          <p className="text-xl text-gray-400">Our flagship product revolutionizing retail operations</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mock POS UI */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                  <div className="text-white font-semibold mb-2">Smart POS System</div>
                  <div className="text-gray-400 text-sm">Transaction #12345</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-white">
                    <span>Item 1</span>
                    <span>$29.99</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Item 2</span>
                    <span>$15.50</span>
                  </div>
                  <div className="border-t border-white/10 pt-2 mt-4">
                    <div className="flex justify-between text-white font-bold">
                      <span>Total</span>
                      <span>$45.49</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <div
                    key={num}
                    className="bg-slate-800/50 rounded-lg p-4 text-center text-white hover:bg-slate-700/50 transition-colors cursor-pointer"
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <ShoppingCart className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Seamless Transactions</h3>
                  <p className="text-gray-400">
                    Process payments quickly and securely with our intuitive interface. Support for multiple payment methods including cards, digital wallets, and cash.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Package className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Real-time Inventory</h3>
                  <p className="text-gray-400">
                    Track your stock levels in real-time. Get instant alerts when items are running low and automatically sync with your suppliers.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Cloud className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Cloud-connected</h3>
                  <p className="text-gray-400">
                    Access your data from anywhere. All transactions and inventory are securely stored in the cloud, ensuring business continuity and data safety.
                  </p>
                </div>
              </div>
            </div>

            <motion.a
              href="https://pos.nextecasia.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-6"
            >
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
                Try Smart POS Now
              </button>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

