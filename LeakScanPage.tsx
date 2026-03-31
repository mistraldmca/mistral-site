import React from 'react';
import Hero from './Hero';
import Coverage from './Coverage';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQ from './FAQ';
import FinalCTA from './FinalCTA';
import ContactSection from './ContactSection';

const HomePage: React.FC = () => {
  return (
    <div className="w-full flex flex-col relative">
      <Hero />
      <Coverage />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <ContactSection />
    </div>
  );
};

export default HomePage;