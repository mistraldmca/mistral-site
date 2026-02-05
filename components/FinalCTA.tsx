import React from 'react';
import Button from './Button';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Stop Leaks Before They <br className="hidden md:block"/> Cost You More
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
          Every minute your content is online illegally, you lose potential subscribers. Take control of your brand today.
        </p>
        <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 hover:text-indigo-600 shadow-xl shadow-white/10" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
          Start Free Leak Scan
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;