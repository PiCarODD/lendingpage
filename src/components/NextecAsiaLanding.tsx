import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Integrations from './Integrations';
import Pricing from './Pricing';
import Contact from './Contact';
import Footer from './Footer';

const NextsecAsiaLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Integrations />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default NextsecAsiaLanding;

