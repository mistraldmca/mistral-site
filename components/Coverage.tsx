import React, { useEffect, useRef, useState } from 'react';
import Section from './Section';
import { Search, Globe, Users, FileWarning, Share2, AlertTriangle } from 'lucide-react';

const Coverage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const items = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Tube & Leak Sites",
      desc: "Instant removal from major adult tube sites and leak aggregators."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Search Results",
      desc: "Delisting from Google and Bing to hide leaks from public view."
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Social Media",
      desc: "Takedowns for Twitter (X), Reddit, Instagram, and TikTok reposts."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Impersonators",
      desc: "Removal of fake profiles pretending to be you to scam fans."
    },
    {
      icon: <FileWarning className="w-6 h-6" />,
      title: "File Hosting",
      desc: "Deindexing from Mega, Dropbox, Google Drive, and torrent sites."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Forums & Boards",
      desc: "Scrubbing leaked private sets from discussion forums."
    }
  ];

  return (
    <Section id="features">
      <div ref={sectionRef}>
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">We Scrub the Entire Web</h2>
            <p className="text-slate-600 text-lg">
              Our technology scans thousands of platforms to find where your content is being shared illegally.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`
                group flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100
                hover:border-indigo-300 hover:bg-indigo-50/50 hover:shadow-xl hover:shadow-indigo-100/40 hover:scale-[1.02]
                transition-all duration-300 ease-out cursor-default transform
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${100 + (idx * 75)}ms` }}
            >
              <div className="p-3 bg-white rounded-lg shadow-sm text-indigo-600 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ring-1 ring-slate-100 group-hover:ring-indigo-500/20">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1 group-hover:text-indigo-700 transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-600 transition-opacity group-hover:text-slate-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Coverage;