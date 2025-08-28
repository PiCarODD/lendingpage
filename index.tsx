import React from "react";
import { motion } from "framer-motion";

// NextecAsia Landing Page - ReportPortal Pentest Vulnerability Management Platform
// Tailwind CSS required in the project (no external CSS files here)
// Usage: import NextecAsiaLanding from './NextecAsiaLanding'; then render <NextecAsiaLanding />

export default function NextecAsiaLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 text-slate-100 antialiased">
      {/* Top SVG decorative background */}
      <header className="relative overflow-hidden">
        <svg
          className="absolute inset-0 -z-10 w-full h-96"
          preserveAspectRatio="none"
          viewBox="0 0 1600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#021124" />
            </linearGradient>
            <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="40" result="b" />
              <feBlend in="SourceGraphic" in2="b" />
            </filter>
          </defs>

          <rect width="100%" height="100%" fill="url(#g1)" />

          <g filter="url(#f1)" opacity="0.18" transform="translate(-200,20)">
            <path
              d="M0 300 C200 180 400 420 800 300 C1200 180 1400 420 1600 300 L1600 600 L0 600 Z"
              fill="#7c3aed"
            />
          </g>

          <g opacity="0.08">
            <circle cx="120" cy="70" r="60" fill="#7c3aed" />
            <circle cx="1500" cy="120" r="80" fill="#06b6d4" />
            <circle cx="300" cy="200" r="40" fill="#ef4444" />
          </g>
        </svg>

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-2/3"
            >
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                NextecAsia
                <span className="ml-2 text-purple-400">Pentest Vulnerability Management</span>
              </h1>

              <p className="mt-4 text-slate-300 max-w-2xl text-lg">
                Enterprise-grade platform for managing penetration testing projects, findings, and reports
                with advanced security features, multi-tenant architecture, and AI-powered insights.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-3 rounded-2xl bg-purple-600/95 px-5 py-3 font-semibold shadow-lg hover:bg-purple-500 transition"
                >
                  View Pricing
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L13 6.414V17a1 1 0 11-2 0V6.414L6.707 9.707A1 1 0 015.293 8.293l5-5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="#features"
                  className="inline-flex items-center gap-3 rounded-2xl border border-slate-700 px-5 py-3 font-semibold hover:bg-slate-800 transition"
                >
                  Product features
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2">✓ Multi-tenant architecture</span>
                <span className="inline-flex items-center gap-2">✓ Role-based access control</span>
                <span className="inline-flex items-center gap-2">✓ Customizable report templates</span>
                <span className="inline-flex items-center gap-2">✓ AI powered finding explanation and management reporting</span>
                <span className="inline-flex items-center gap-2">✓ Real-time notifications</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/3"
            >
              {/* Card showcasing quick stats + onboard form */}
              <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 shadow-xl backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Start your pentest management</h3>
                    <p className="mt-1 text-sm text-slate-400">14-day free trial — no credit card</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold">4.9/5</div>
                    <div className="text-xs text-slate-400">User satisfaction</div>
                  </div>
                </div>

                <form className="mt-6 grid gap-3">
                  <input
                    type="email"
                    placeholder="Work email"
                    className="w-full bg-slate-900/40 border border-slate-700 rounded-md px-3 py-2 text-slate-100 placeholder-slate-500"
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full bg-slate-900/40 border border-slate-700 rounded-md px-3 py-2 text-slate-100 placeholder-slate-500"
                  />

                  <button className="w-full rounded-md bg-purple-600/95 py-2 font-semibold hover:bg-purple-500 transition">
                    Start Free Trial
                  </button>

                  <div className="text-xs text-slate-500">By signing up you agree to our terms.</div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Features */}
        <section id="features" className="mt-6">
          <h2 className="text-3xl font-bold text-center">Why Choose NextecAsia?</h2>
          <p className="mt-4 text-slate-400 max-w-3xl mx-auto text-center text-lg">
            Enterprise-grade pentest vulnerability management with advanced security features,
            multi-tenant architecture, and AI-powered insights.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((f, index) => (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 grid place-items-center mb-4">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor">
                    <path d={f.icon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-3 text-white">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Product Showcase */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">See NextecAsia in Action</h3>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
              Powerful features designed for modern penetration testing teams
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Risk Assessment Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-colors"
            >
              <div className="mb-6">
                <svg viewBox="0 0 400 300" className="w-full h-48">
                  {/* Background */}
                  <rect width="400" height="300" rx="8" fill="#0f172a" />

                  {/* Header */}
                  <rect x="20" y="20" width="360" height="40" rx="6" fill="#1e293b" />
                  <text x="30" y="45" fill="#94a3b8" fontSize="12">Risk Assessment Dashboard</text>

                  {/* Risk Score Cards */}
                  <g transform="translate(20,80)">
                    {/* Critical */}
                    <rect x="0" y="0" width="80" height="60" rx="4" fill="#7f1d1d" />
                    <text x="40" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">CRITICAL</text>
                    <text x="40" y="45" textAnchor="middle" fill="#fca5a5" fontSize="18" fontWeight="bold">9.2</text>

                    {/* High */}
                    <rect x="90" y="0" width="80" height="60" rx="4" fill="#ea580c" />
                    <text x="130" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">HIGH</text>
                    <text x="130" y="45" textAnchor="middle" fill="#fed7aa" fontSize="18" fontWeight="bold">7.8</text>

                    {/* Medium */}
                    <rect x="180" y="0" width="80" height="60" rx="4" fill="#ca8a04" />
                    <text x="220" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">MEDIUM</text>
                    <text x="220" y="45" textAnchor="middle" fill="#fde047" fontSize="18" fontWeight="bold">5.1</text>

                    {/* Low */}
                    <rect x="270" y="0" width="80" height="60" rx="4" fill="#16a34a" />
                    <text x="310" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">LOW</text>
                    <text x="310" y="45" textAnchor="middle" fill="#86efac" fontSize="18" fontWeight="bold">2.3</text>
                  </g>

                  {/* Chart */}
                  <g transform="translate(20,160)">
                    <rect x="0" y="0" width="360" height="120" rx="4" fill="#1e293b" />
                    <text x="10" y="20" fill="#94a3b8" fontSize="12">Vulnerability Trend</text>
                    {/* Simple bar chart */}
                    <rect x="30" y="70" width="20" height="40" fill="#7f1d1d" />
                    <rect x="60" y="50" width="20" height="60" fill="#ea580c" />
                    <rect x="90" y="30" width="20" height="80" fill="#ca8a04" />
                    <rect x="120" y="20" width="20" height="90" fill="#16a34a" />
                  </g>
                </svg>
            </div>
              <h4 className="text-xl font-semibold mb-3">Risk Assessment Dashboard</h4>
              <p className="text-slate-400 text-sm">
                Real-time risk scoring with color-coded severity levels and trend analysis
              </p>
            </motion.div>

            {/* Multi-Tenant Management */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-colors"
            >
              <div className="mb-6">
                <svg viewBox="0 0 400 300" className="w-full h-48">
                  {/* Background */}
                  <rect width="400" height="300" rx="8" fill="#0f172a" />

                  {/* Header */}
                  <rect x="20" y="20" width="360" height="40" rx="6" fill="#1e293b" />
                  <text x="30" y="45" fill="#94a3b8" fontSize="12">Tenant Management Portal</text>

                  {/* Tenant Cards */}
                  <g transform="translate(20,80)">
                    {/* Tenant 1 */}
                    <rect x="0" y="0" width="360" height="50" rx="6" fill="#1e293b" />
                    <circle cx="30" cy="25" r="8" fill="#10b981" />
                    <text x="50" y="30" fill="#e2e8f0" fontSize="14">Acme Corp</text>
                    <text x="330" y="30" fill="#94a3b8" fontSize="12">25 Users</text>

                    {/* Tenant 2 */}
                    <rect x="0" y="60" width="360" height="50" rx="6" fill="#1e293b" />
                    <circle cx="30" cy="85" r="8" fill="#3b82f6" />
                    <text x="50" y="90" fill="#e2e8f0" fontSize="14">TechStart Inc</text>
                    <text x="330" y="90" fill="#94a3b8" fontSize="12">12 Users</text>

                    {/* Tenant 3 */}
                    <rect x="0" y="120" width="360" height="50" rx="6" fill="#1e293b" />
                    <circle cx="30" cy="145" r="8" fill="#8b5cf6" />
                    <text x="50" y="150" fill="#e2e8f0" fontSize="14">SecureBank</text>
                    <text x="330" y="150" fill="#94a3b8" fontSize="12">89 Users</text>
                  </g>

                  {/* Stats */}
                  <g transform="translate(20,240)">
                    <rect x="0" y="0" width="170" height="40" rx="4" fill="#7c3aed" />
                    <text x="85" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">126 Total Users</text>

                    <rect x="190" y="0" width="170" height="40" rx="4" fill="#10b981" />
                    <text x="275" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">3 Active Tenants</text>
                  </g>
                </svg>
          </div>
              <h4 className="text-xl font-semibold mb-3">Multi-Tenant Architecture</h4>
              <p className="text-slate-400 text-sm">
                Complete tenant isolation with dedicated management and resource allocation
              </p>
            </motion.div>

            {/* AI-Powered Features */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-colors"
            >
              <div className="mb-6">
                <svg viewBox="0 0 400 300" className="w-full h-48">
                  {/* Background */}
                  <rect width="400" height="300" rx="8" fill="#0f172a" />

                  {/* AI Assistant Interface */}
                  <rect x="20" y="20" width="360" height="260" rx="8" fill="#1e293b" />

                  {/* Header */}
                  <rect x="30" y="30" width="340" height="30" rx="4" fill="#0f172a" />
                  <text x="40" y="50" fill="#e2e8f0" fontSize="12">AI Vulnerability Assistant</text>

                  {/* Chat Messages */}
                  <g transform="translate(30,80)">
                    {/* User Message */}
                    <rect x="0" y="0" width="280" height="40" rx="6" fill="#7c3aed" />
                    <text x="20" y="25" fill="white" fontSize="12">How can I remediate this SQL injection?</text>

                    {/* AI Response */}
                    <rect x="0" y="50" width="340" height="80" rx="6" fill="#374151" />
                    <text x="20" y="70" fill="#e2e8f0" fontSize="11">Here's how to fix the SQL injection vulnerability:</text>
                    <text x="20" y="85" fill="#94a3b8" fontSize="10">1. Use parameterized queries</text>
                    <text x="20" y="100" fill="#94a3b8" fontSize="10">2. Implement input validation</text>
                    <text x="20" y="115" fill="#94a3b8" fontSize="10">3. Use prepared statements</text>
                  </g>

                  {/* AI Providers */}
                  <g transform="translate(30,180)">
                    <circle cx="15" cy="15" r="8" fill="#10b981" />
                    <text x="30" y="20" fill="#e2e8f0" fontSize="12">OpenAI GPT-4</text>

                    <circle cx="15" cy="40" r="8" fill="#3b82f6" />
                    <text x="30" y="45" fill="#e2e8f0" fontSize="12">Claude 3</text>

                    <circle cx="15" cy="65" r="8" fill="#f59e0b" />
                    <text x="30" y="70" fill="#e2e8f0" fontSize="12">DeepSeek</text>
                  </g>

                  {/* Usage Stats */}
                  <g transform="translate(200,180)">
                    <text x="0" y="15" fill="#94a3b8" fontSize="10">Credits Used: 1,247</text>
                    <text x="0" y="30" fill="#94a3b8" fontSize="10">Monthly Limit: 2,000</text>
                    <rect x="0" y="35" width="100" height="4" rx="2" fill="#374151" />
                    <rect x="0" y="35" width="62" height="4" rx="2" fill="#7c3aed" />
              </g>
            </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">AI-Powered Assistance</h4>
              <p className="text-slate-400 text-sm">
                Multi-provider AI support for vulnerability analysis and remediation guidance
              </p>
            </motion.div>
          </div>
        </section>

        {/* How it works */}
        <section className="mt-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold">How NextecAsia Works</h3>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
              Streamlined workflow from initial assessment to final report delivery
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {STEPS.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white font-bold text-xl">
                    {idx + 1}
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-white">{s.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
                {idx < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-purple-600 to-transparent transform translate-x-4" />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Integrations */}
        <section className="mt-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold">Powerful Integrations</h3>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
              Seamlessly connect with your existing tools and workflows
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {INTEGRATIONS.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4 hover:border-purple-500/50 hover:bg-slate-800/50 transition-all duration-300 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d={integration.icon} />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-sm text-white">{integration.name}</h4>
                  <p className="text-xs text-slate-400 mt-1">{integration.category}</p>
              </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-6">
              Need a custom integration? Our API-first architecture makes it easy to connect with any tool.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/60 border border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-700 transition"
              >
                View API Docs
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/95 rounded-lg text-sm font-medium hover:bg-purple-500 transition"
              >
                Request Integration
              </a>
            </div>
          </div>
        </section>

        {/* Pricing / Plans */}
        <section id="pricing" className="mt-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold">Choose Your Plan</h3>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
              Start with our flexible pricing plans. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PLANS.map((p, index) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-slate-900/50 border rounded-2xl p-6 ${
                  p.popular
                    ? 'border-purple-500 ring-2 ring-purple-500/20'
                    : 'border-slate-700'
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h4 className="font-semibold text-xl">{p.name}</h4>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">${p.price}</span>
                    <span className="text-slate-400 text-sm">/month</span>
                  </div>
                  <p className="text-slate-400 text-sm mt-1">{p.subtitle}</p>
                </div>

                <ul className="mt-6 space-y-3 text-slate-300 text-sm">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <button className={`w-full rounded-lg px-4 py-3 font-semibold transition ${
                    p.popular
                      ? 'bg-purple-600 hover:bg-purple-500 text-white'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}>
                    {p.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm">
              All plans include SSL encryption, 99.9% uptime SLA, and 24/7 support.
              <br />
              <a href="#contact" className="text-purple-400 hover:text-purple-300">Contact us</a> for custom enterprise pricing.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16 bg-slate-900/30 border border-slate-700 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold">Get Started Today</h3>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
              Ready to transform your penetration testing workflow? Contact our team or start your free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email Support</h4>
                    <p className="text-slate-400 mt-1">hello@nextecasia.com</p>
                    <p className="text-slate-500 text-sm mt-1">Response within 4 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
            <div>
                    <h4 className="text-lg font-semibold text-white">Phone Support</h4>
                    <p className="text-slate-400 mt-1">+1 (555) 123-4567</p>
                    <p className="text-slate-500 text-sm mt-1">Mon-Fri 9AM-6PM EST</p>
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
                    <h4 className="text-lg font-semibold text-white">Headquarters</h4>
                    <p className="text-slate-400 mt-1">Yangon, Myanmar</p>
                    <p className="text-slate-500 text-sm mt-1">Serving APAC region</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  placeholder="Full name"
                  className="w-full bg-slate-900/40 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-purple-500 focus:outline-none transition"
                />
                <input
                  placeholder="Company"
                  className="w-full bg-slate-900/40 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-purple-500 focus:outline-none transition"
                />
              </div>

              <input
                placeholder="Work email"
                type="email"
                className="w-full bg-slate-900/40 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-purple-500 focus:outline-none transition"
              />

              <select className="w-full bg-slate-900/40 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:border-purple-500 focus:outline-none transition">
                <option>Select plan interest</option>
                <option>Basic - $99/month</option>
                <option>Professional - $299/month</option>
                <option>Business - $499/month</option>
                <option>Enterprise - $1500/month</option>
              </select>

              <textarea
                placeholder="Tell us about your penetration testing needs..."
                className="w-full bg-slate-900/40 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-purple-500 focus:outline-none transition h-32 resize-none"
              />

              <div className="flex flex-col gap-4">
                <button className="w-full rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500 transition">
                  Send Message
                </button>
                <p className="text-xs text-slate-500 text-center">
                  We'll respond within 4 hours during business hours. By submitting, you agree to our privacy policy.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-slate-800/60 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">NextecAsia</h3>
              <p className="text-slate-400 mb-4 max-w-md">
                Enterprise-grade pentest vulnerability management platform with advanced security features, 
                multi-tenant architecture, and AI-powered insights.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">System Status</a></li>
                <li><a href="#" className="hover:text-white transition">Community</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} NextecAsia. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// -- Data

const FEATURES = [
  {
    title: "Multi-Tenant Architecture",
    desc: "Isolated tenant environments with dedicated super admin controls. Complete data separation and security.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Advanced Role-Based Access",
    desc: "Granular permissions with 6 distinct roles: Super Admin, Admin, Security Team Lead, Security Engineer, Project Stakeholder, and Manager.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "AI-Powered Insights",
    desc: "Multi-provider AI support (OpenAI, Claude, Gemini, DeepSeek) with usage tracking and cost management.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Real-Time Notifications",
    desc: "WebSocket-powered live updates, SLA breach monitoring, and instant notifications for critical events.",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  },
  {
    title: "Rich Text Editing",
    desc: "TinyMCE-powered rich text editing for findings, reports, and templates with advanced formatting capabilities.",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  },
  {
    title: "Risk Assessment Engine",
    desc: "Automatic risk scoring based on CVSS scores with color-coded indicators and real-time vulnerability tracking.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const STEPS = [
  { title: "Setup & Configure", desc: "Create tenant, configure users, roles, and AI providers for your organization." },
  { title: "Plan & Execute", desc: "Create engagements, assign teams, and execute penetration testing activities." },
  { title: "Document & Report", desc: "Record findings with rich text editing, CVSS scoring, and detailed remediation steps." },
  { title: "Track & Deliver", desc: "Monitor progress, generate professional reports, and deliver to stakeholders." },
];

const INTEGRATIONS = [
  {
    name: "Jira",
    category: "Issue Tracking",
    icon: "M10 12l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    name: "GitHub",
    category: "Source Control",
    icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
  },
  {
    name: "GitLab",
    category: "DevOps",
    icon: "M12 0l-1.5 4.5H3l1.5 4.5L12 24l7.5-15L21 4.5h-7.5L12 0z"
  },
  {
    name: "Slack",
    category: "Communication",
    icon: "M8 12a4 4 0 11-8 0 4 4 0 018 0zM8 0a4 4 0 11-8 0 4 4 0 018 0zM20 8a4 4 0 11-8 0 4 4 0 018 0zM20 20a4 4 0 11-8 0 4 4 0 018 0z"
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: "M3.5 6a.5.5 0 000 1h13a.5.5 0 000-1h-13zM3 8.5a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM3.5 11a.5.5 0 000 1h13a.5.5 0 000-1h-13z"
  },
  {
    name: "Azure",
    category: "Cloud",
    icon: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l8-8 4 8z"
  },
  {
    name: "Docker",
    category: "Container",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    name: "Jenkins",
    category: "CI/CD",
    icon: "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v10H5V5z"
  },
  {
    name: "Confluence",
    category: "Documentation",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    name: "Teams",
    category: "Communication",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
  {
    name: "Splunk",
    category: "SIEM",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
  },
  {
    name: "Elasticsearch",
    category: "Search",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }
];

const PLANS = [
  {
    name: "Basic",
    subtitle: "Perfect for startups",
    price: "99",
    popular: false,
    cta: "Start Free Trial",
    features: [
      "5 Engagements/Projects",
      "Up to 10 Users",
      "100 AI Credits/month",
      "Custom Templates",
      "White-label Option",
      "Email Support",
      "Standard Templates"
    ]
  },
  {
    name: "Professional",
    subtitle: "Growing security teams",
    price: "299",
    popular: false,
    cta: "Start Free Trial",
    features: [
      "25 Engagements/Projects",
      "Up to 50 Users",
      "1,000 AI Credits/month",
      "Advanced Reporting",
      "Priority Support",
      "Custom Templates",
      "White-label Option",
      "API Access"
    ]
  },
  {
    name: "Business",
    subtitle: "Enterprise-ready",
    price: "499",
    popular: true,
    cta: "Start Free Trial",
    features: [
      "Unlimited Engagements/Projects",
      "Unlimited Users",
      "Unlimited AI Credits",
      "All Reporting Features",
      "24/7 Phone Support",
      "White-label Option",
      "Advanced Integrations"
    ]
  },
  {
    name: "Enterprise",
    subtitle: "Full tenant control",
    price: "1500",
    popular: false,
    cta: "Contact Sales",
    features: [
      "Everything in Business",
      "Custom pricing option",
      "Full Tenant Management",
      "Dedicated CSM",
      "Custom SLA",
      "On-premise Deployment",
    ]
  }
];
