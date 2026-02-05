import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SupportedPlatforms from './components/SupportedPlatforms';
import HowItWorks from './components/HowItWorks';
import Coverage from './components/Coverage';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <SupportedPlatforms />
        <HowItWorks />
        <Coverage />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;