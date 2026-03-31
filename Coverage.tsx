import React from 'react';
import Section from './Section';
import { ScanSearch, Gavel, ShieldAlert } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      Icon: ScanSearch,
      title: "1. Scan the Internet",
      description: "Our AI-powered engine searches billions of pages, social media, and file-sharing sites to find your stolen content instantly."
    },
    {
      Icon: Gavel,
      title: "2. Legal Takedowns",
      description: "We automatically file legally binding DMCA takedown notices to hosts, search engines, and ISPs to remove infringing content."
    },
    {
      Icon: ShieldAlert,
      title: "3. 24/7 Monitoring",
      description: "Protection never sleeps. We continuously monitor the web for new leaks and re-uploads, ensuring you stay protected."
    }
  ];

  return (
    <Section id="how-it-works" background="gray">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Mistral Works</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Automated protection that moves faster than leaks.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 relative group">
            <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <div className="group-hover:text-white transition-colors duration-300">
                  <step.Icon className="w-8 h-8 text-indigo-600 group-hover:text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default HowItWorks;