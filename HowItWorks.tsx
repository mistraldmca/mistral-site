import React, { useState } from 'react';
import Section from './Section';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the free scan work?",
      answer: "Our automated system scans millions of websites using facial recognition and keyword matching to find your content. You simply provide your public profile names, and we do the rest. The report is generated instantly."
    },
    {
      question: "How long do removals take?",
      answer: "It depends on the host. Compliant hosts (like Google, Twitter, Mega) usually remove content within 6-24 hours. Non-compliant hosts may take longer, but we send repeated notices and escalate to ISPs when necessary."
    },
    {
      question: "Do I need to submit links manually?",
      answer: "No! While you can manually submit specific links if you find them, our AI system automatically finds new leaks 24/7 so you don't have to hunt for them yourself."
    },
    {
      question: "What platforms do you support?",
      answer: "We support takedowns on all major platforms including Google Search, Bing, Twitter (X), Reddit, Instagram, Facebook, TikTok, Tube sites, file hosting services (Mega, Dropbox), and many forum boards."
    },
    {
      question: "Is this legal?",
      answer: "Yes. We operate strictly under the Digital Millennium Copyright Act (DMCA). We act as your authorized agent to enforce your intellectual property rights."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. There are no long-term contracts. You can cancel your subscription at any time from your dashboard with one click."
    }
  ];

  return (
    <Section id="faq" background="gray">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900 pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-indigo-600 shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;