import React, { useState, useRef } from 'react';
import Section from './Section';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      name: "Vanna",
      role: "Digital Influencer",
      image: "https://i.imgur.com/dGQn8k9.jpeg", 
      quote: "Mistral handles everything automatically, I manage everything from my phone. Since they've protected my content, my earnings have gone up because fans are paying for MY scenes, not leaks."
    },
    {
      name: "Drea",
      role: "Top 0.5% Creator",
      image: "https://i.imgur.com/LEqd5ia.jpeg",
      quote: "I used to spend hours stressing over leaked content appearing on random forums. Mistral wipes them out before I even see them. It's not just protection, it's peace of mind."
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 0;
      // Using a threshold to determine the active index
      const index = Math.round(scrollPosition / cardWidth);
      setMobileIndex(index);
    }
  };

  return (
    <Section id="testimonials" className="bg-gradient-to-b from-white to-slate-50">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Real Stories, Real Impact</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Empowering creators with AI-driven protection, hear how it's making a difference.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* MOBILE CAROUSEL LAYOUT */}
        <div className="md:hidden">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 px-4 -mx-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, idx) => (
              <div 
                key={idx} 
                className="flex-none w-[85vw] snap-center bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden flex flex-col"
              >
                {/* Updated Image Container for Mobile Framing */}
                <div className="relative w-full aspect-[4/5] max-h-[420px]">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                  <div className="absolute bottom-4 left-6 text-white">
                     <p className="font-bold text-xl">{review.name}</p>
                     <p className="text-slate-200 text-sm">{review.role}</p>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <Quote className="w-8 h-8 text-indigo-500 mb-4 opacity-40" />
                  <p className="text-slate-700 leading-relaxed font-medium text-lg">
                    "{review.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-2">
            {reviews.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${mobileIndex === idx ? 'w-6 bg-indigo-600' : 'w-1.5 bg-slate-300'}`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP SIDE-BY-SIDE LAYOUT */}
        <div className="hidden md:flex flex-row items-stretch justify-center gap-6 h-[600px]">
          
          {/* Left Selection - Vanna */}
          <div 
            onClick={() => setActiveTab(0)}
            className={`relative w-1/4 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out group ${activeTab === 0 ? 'ring-4 ring-indigo-600 ring-offset-4 shadow-2xl' : 'opacity-60 hover:opacity-100 hover:-translate-y-2'}`}
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all z-10"></div>
            <img 
              src={reviews[0].image} 
              alt={reviews[0].name} 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20">
              <p className="text-white font-bold text-xl">{reviews[0].name}</p>
              <p className="text-slate-200 text-sm">{reviews[0].role}</p>
            </div>
          </div>

          {/* Center Content - Active Quote */}
          <div className="flex-1 bg-white rounded-3xl p-12 shadow-xl border border-slate-100 flex flex-col justify-center relative">
            <Quote className="w-12 h-12 text-indigo-500 mb-6 opacity-80" />
            
            <div className="relative overflow-hidden w-full h-full flex items-center">
               {reviews.map((review, idx) => (
                 <div 
                    key={idx} 
                    className={`transition-all duration-500 ease-in-out absolute inset-0 flex flex-col justify-center ${
                      activeTab === idx 
                        ? 'opacity-100 translate-x-0 relative' 
                        : 'opacity-0 translate-x-8 absolute pointer-events-none'
                    }`}
                    style={{ position: activeTab === idx ? 'relative' : 'absolute', width: '100%' }}
                 >
                    <h3 className="text-3xl font-medium text-slate-900 leading-relaxed mb-8">
                      "{review.quote}"
                    </h3>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-[1px] bg-slate-300"></div>
                      <span className="font-serif-logo text-xl text-slate-900 font-bold">{review.name}</span>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Right Selection - Drea */}
          <div 
            onClick={() => setActiveTab(1)}
            className={`relative w-1/4 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out group ${activeTab === 1 ? 'ring-4 ring-indigo-600 ring-offset-4 shadow-2xl' : 'opacity-60 hover:opacity-100 hover:-translate-y-2'}`}
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all z-10"></div>
            <img 
              src={reviews[1].image} 
              alt={reviews[1].name} 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20">
              <p className="text-white font-bold text-xl">{reviews[1].name}</p>
              <p className="text-slate-200 text-sm">{reviews[1].role}</p>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Testimonials;