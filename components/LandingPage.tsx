import React from 'react';
import Hero from './Hero';
import SupportedPlatforms from './SupportedPlatforms';
import HowItWorks from './HowItWorks';
import Coverage from './Coverage';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQ from './FAQ';
import FinalCTA from './FinalCTA';

const LandingPage: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      <SupportedPlatforms />
      <HowItWorks />
      <Coverage />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default LandingPage;