import React from 'react';
import Section from './Section';
import { Search, Globe, Users, FileWarning, Share2, AlertTriangle } from 'lucide-react';

const Coverage: React.FC = () => {
  const items = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Tube & Leak Sites",
      desc: "Instant removal from major adult tube sites and leak aggregators."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Search Results",
      desc: "Delisting form Google and Bing to hide leaks from public view."
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
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">We Scrub the Entire Web</h2>
          <p className="text-slate-600 text-lg">
            Our technology scans thousands of platforms to find where your content is being shared illegally.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all">
            <div className="p-3 bg-white rounded-lg shadow-sm text-indigo-600 shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Coverage;