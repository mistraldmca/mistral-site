import React from 'react';
import Section from './Section';
import Button from './Button';
import { Check, Shield, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const proFeatures = [
    "DMCA Takedowns",
    "Google Delisting",
    "Social Media Removals",
    "Hourly Scans",
    "Unlimited Self-Submissions",
    "Facial Recognition & AI Recognition",
    "Worldwide Coverage"
  ];

  return (
    <Section id="pricing" background="gray">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-slate-600">
            Choose the protection that fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Pro Plan */}
          <div className="relative bg-white rounded-3xl shadow-xl shadow-indigo-200/50 overflow-hidden border border-slate-200 flex flex-col">
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            
            <div className="p-8 md:p-10 flex flex-col h-full">
               <div className="flex items-center gap-2 mb-6">
                 <Shield className="text-indigo-600 w-6 h-6" />
                 <span className="font-bold text-slate-900 tracking-wide uppercase text-sm">Pro Protection</span>
               </div>
               
               <div className="mb-8">
                 <div className="flex items-baseline gap-1">
                   <span className="text-4xl md:text-5xl font-bold text-slate-900">$199</span>
                   <span className="text-slate-500 font-medium">/ month</span>
                 </div>
               </div>

               <Button fullWidth size="lg" onClick={scrollToContact} className="mb-8">
                 Start Free Leak Scan
               </Button>

               <div className="space-y-4 flex-grow">
                 <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-4">Everything included:</h4>
                 {proFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm md:text-base">{feature}</span>
                    </div>
                 ))}
               </div>
            </div>
          </div>

          {/* One-Time Removals Plan */}
          <div className="relative bg-gradient-to-b from-[#F6F3FF] to-white rounded-3xl shadow-2xl shadow-purple-100 border border-indigo-200 overflow-hidden flex flex-col transform md:-translate-y-2 transition-transform">
            {/* Badge */}
            <div className="absolute top-6 right-6 z-10">
                <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide border border-purple-200/50">
                    Popular for Large Leaks
                </span>
            </div>
            
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-80"></div>
            
            <div className="p-8 md:p-10 flex flex-col h-full">
               <div className="flex items-center gap-2 mb-6">
                 <Zap className="text-purple-600 w-6 h-6" />
                 <span className="font-bold text-slate-900 tracking-wide uppercase text-sm">One-Time Removals</span>
               </div>
               
               <div className="mb-8">
                  <div className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Custom</div>
                  <div className="text-slate-500 font-medium mt-1">pricing</div>
               </div>
               
               <p className="text-lg text-slate-600 mb-8 flex-grow leading-relaxed">
                 For creators who want everything removed without committing to a monthly plan. Ideal for large leaks or urgent takedowns.
               </p>

               <Button variant="primary" fullWidth size="lg" onClick={scrollToContact} className="bg-purple-600 hover:bg-purple-700 shadow-purple-200 shadow-lg focus:ring-purple-600">
                 Contact Us
               </Button>
               <p className="text-[11px] text-center text-slate-400 mt-4 font-medium">
                 Get a quote for your specific needs.
               </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;