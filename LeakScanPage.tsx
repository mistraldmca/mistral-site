import React from 'react';
import Section from './Section';

const SupportedPlatforms: React.FC = () => {
  const platforms = [
    { name: 'Instagram', color: 'hover:text-pink-600' },
    { name: 'TikTok', color: 'hover:text-black' },
    { name: 'OnlyFans', color: 'hover:text-blue-500' },
    { name: 'Fansly', color: 'hover:text-blue-600' },
    { name: 'Twitter / X', color: 'hover:text-slate-900' },
    { name: 'Reddit', color: 'hover:text-orange-500' },
    { name: 'Google', color: 'hover:text-blue-500' },
    { name: 'Telegram', color: 'hover:text-sky-500' }
  ];

  return (
    <Section id="platforms" className="py-12 md:py-16 border-y border-slate-100">
      <div className="text-center mb-10">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Supported Platforms</h3>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        {platforms.map((platform) => (
          <div key={platform.name} className={`text-xl md:text-2xl font-bold text-slate-400 transition-colors duration-300 cursor-default ${platform.color}`}>
            {platform.name}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SupportedPlatforms;