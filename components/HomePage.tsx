import React from 'react';
import Hero from './Hero';
import Coverage from './Coverage';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQ from './FAQ';
import FinalCTA from './FinalCTA';
import ContactSection from './ContactSection';
import ImpactSection from './ImpactSection';

const HomePage: React.FC = () => {
  return (
    <div className="w-full flex flex-col relative">
      <Hero />
      <ImpactSection />
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