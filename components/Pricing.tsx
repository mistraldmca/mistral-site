import React from 'react';
import Section from './Section';
import Button from './Button';
import { Check, Shield } from 'lucide-react';

const Pricing: React.FC = () => {
  const features = [
    "Unlimited DMCA takedowns",
    "Google & Bing Search delisting",
    "Social media repost removals",
    "24/7 Leak site monitoring",
    "Daily automated scans",
    "Priority legal support",
    "Dedicated case manager",
    "Copyright registration assistance"
  ];

  return (
    <Section id="pricing" background="gray">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Free Leak Scan. Total Protection.</h2>
          <p className="text-xl text-slate-600">
            Start protecting your revenue today. No hidden fees.
          </p>
        </div>

        <div className="relative bg-white rounded-3xl shadow-2xl shadow-indigo-200 overflow-hidden border border-slate-200">
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
          
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
               <div className="flex items-center gap-2 mb-6">
                 <Shield className="text-indigo-600 w-6 h-6" />
                 <span className="font-bold text-slate-900 tracking-wide uppercase text-sm">Pro Protection</span>
               </div>
               
               <div className="mb-8">
                 <div className="flex items-baseline gap-2 mb-1">
                   <span className="text-5xl font-bold text-slate-900">Free</span>
                   <span className="text-xl font-medium text-slate-500">for 7 days</span>
                 </div>
                 <div className="text-slate-500 font-medium">
                   Then $100 per month
                 </div>
               </div>

               <Button fullWidth size="lg" className="mb-4 shadow-xl shadow-indigo-500/20">
                 Start Free Leak Scan
               </Button>
               <p className="text-xs text-center text-slate-400">
                 No credit card required for the initial scan.
               </p>
            </div>

            <div className="p-8 md:p-12 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 mb-6">Everything included:</h3>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-slate-600 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;