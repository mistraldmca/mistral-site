import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'gray';
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, background = 'white' }) => {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-slate-50';
  
  // Added scroll-mt-24 to ensure the section header isn't hidden behind the fixed navbar
  return (
    <section id={id} className={`py-20 md:py-28 scroll-mt-24 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;