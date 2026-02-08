import React, { useState, useEffect } from 'react';
import Section from './Section';
import { Quote, Star, ShieldCheck } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  
  const reviews = [
    {
      id: 0,
      name: "Vanna",
      role: "Digital Influencer",
      image: "https://i.imgur.com/dGQn8k9.jpg",
      quote: "Mistral handles everything automatically, I manage everything from my phone. Since they've protected my content, my earnings have gone up because fans are paying for MY scenes, not leaks.",
      stat: "+40% Revenue"
    },
    {
      id: 1,
      name: "Drea",
      role: "Top 0.5% Creator",
      image: "https://i.imgur.com/LEqd5ia.jpg",
      quote: "I used to spend hours stressing over leaked content appearing on random forums. Mistral wipes them out before I even see them. It's not just protection, it's peace of mind.",
      stat: "Hours Saved"
    }
  ];

  // Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <Section id="testimonials" className="bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-[100px] -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
            <Star className="w-4 h-4 text-indigo-600 fill-indigo-600" />
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Creators Trust Mistral
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of creators who reclaimed their content and revenue.
          </p>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:grid grid-cols-12 gap-8 items-center h-[500px]">
          
          {/* Left Card (Vanna) */}
          <div 
            className={`col-span-3 h-[400px] rounded-3xl relative overflow-hidden cursor-pointer transition-all duration-500 ease-out transform group bg-slate-200 ${active === 0 ? 'scale-100 ring-4 ring-indigo-500 ring-offset-4 shadow-2xl z-20' : 'scale-90 opacity-50 hover:opacity-80 hover:scale-95 grayscale'}`}
            onClick={() => setActive(0)}
          >
            <img 
              src={reviews[0].image} 
              alt={reviews[0].name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              loading="eager"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">{reviews[0].name}</h3>
              <p className="text-white/80 text-sm">{reviews[0].role}</p>
            </div>
            {/* Animated Progress Bar */}
            {active === 0 && (
               <div className="absolute bottom-0 left-0 h-1.5 bg-indigo-500 animate-[progress_8s_linear]"></div>
            )}
          </div>

          {/* Center Content (Quote) */}
          <div className="col-span-6 flex flex-col items-center text-center px-4 relative">
             <Quote className="w-16 h-16 text-indigo-200 mb-8 absolute -top-12 left-1/2 -translate-x-1/2" />
             
             <div className="relative h-[250px] w-full flex items-center justify-center">
                {reviews.map((review, idx) => (
                  <div 
                    key={idx}
                    className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${active === idx ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'}`}
                  >
                     <p className="text-2xl md:text-3xl font-medium text-slate-900 leading-relaxed mb-8 font-serif-logo">
                       "{review.quote}"
                     </p>
                     
                     <div className="flex items-center gap-3">
                        <div className="bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-indigo-100 flex items-center gap-2 shadow-sm">
                           <ShieldCheck className="w-4 h-4 text-indigo-600" />
                           <span className="text-indigo-900 font-bold text-sm">{review.stat}</span>
                        </div>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Right Card (Drea) */}
          <div 
            className={`col-span-3 h-[400px] rounded-3xl relative overflow-hidden cursor-pointer transition-all duration-500 ease-out transform group bg-slate-200 ${active === 1 ? 'scale-100 ring-4 ring-indigo-500 ring-offset-4 shadow-2xl z-20' : 'scale-90 opacity-50 hover:opacity-80 hover:scale-95 grayscale'}`}
            onClick={() => setActive(1)}
          >
            <img 
              src={reviews[1].image} 
              alt={reviews[1].name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              loading="eager"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">{reviews[1].name}</h3>
              <p className="text-white/80 text-sm">{reviews[1].role}</p>
            </div>
             {/* Animated Progress Bar */}
             {active === 1 && (
               <div className="absolute bottom-0 left-0 h-1.5 bg-indigo-500 animate-[progress_8s_linear]"></div>
            )}
          </div>
        </div>

        {/* MOBILE LAYOUT (Tab Switcher) */}
        <div className="md:hidden">
            {/* Mobile Tabs */}
            <div className="flex p-1.5 bg-slate-200/50 rounded-2xl mb-8 mx-auto max-w-sm shadow-inner border border-slate-100/50">
                {reviews.map((review, idx) => (
                <button
                    key={idx}
                    onClick={() => setActive(idx)}
                    className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${active === idx ? 'bg-white text-indigo-600 shadow-md transform scale-100' : 'text-slate-500 hover:text-slate-700 scale-95'}`}
                >
                    {review.name}
                </button>
                ))}
            </div>

            {/* Mobile Card */}
            <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100">
                {/* Image Area */}
                <div className="relative h-[450px] w-full bg-slate-200">
                   {reviews.map((review, idx) => (
                      <div 
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${active === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                      >
                         <img 
                           src={review.image} 
                           alt={review.name} 
                           className="w-full h-full object-cover text-transparent" // text-transparent hides alt text styling in some browsers
                           loading="eager"
                           referrerPolicy="no-referrer"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
                         
                         <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <div className="flex justify-between items-end gap-4">
                                <div>
                                    <h3 className="text-4xl font-bold mb-2 tracking-tight">{review.name}</h3>
                                    <p className="text-white/90 text-base font-medium">{review.role}</p>
                                </div>
                                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-lg mb-1">
                                    <span className="text-xs font-bold tracking-wide uppercase whitespace-nowrap">{review.stat}</span>
                                </div>
                            </div>
                        </div>
                      </div>
                   ))}
                </div>

                {/* Text Area */}
                <div className="p-8 relative min-h-[220px] flex items-center bg-white">
                    <Quote className="absolute top-6 left-6 w-10 h-10 text-indigo-500 opacity-10" />
                    {reviews.map((review, idx) => (
                         <div 
                            key={idx}
                            className={`transition-all duration-500 absolute inset-x-8 top-1/2 -translate-y-1/2 flex flex-col justify-center ${active === idx ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'}`}
                         >
                            <p className="text-xl text-slate-700 leading-relaxed font-medium">
                                "{review.quote}"
                            </p>
                        </div>
                    ))}
                </div>
                
                {/* Mobile Progress Bar */}
                <div className="h-1.5 bg-indigo-50 w-full relative overflow-hidden">
                     {/* We remount the progress bar when active changes to restart animation */}
                     <div key={active} className="absolute inset-y-0 left-0 bg-indigo-500 animate-[progress_8s_linear] w-full origin-left"></div>
                </div>
            </div>
        </div>

      </div>
      <style>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </Section>
  );
};

export default Testimonials;