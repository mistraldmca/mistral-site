import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Coverage', id: 'features' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="font-serif-logo text-3xl text-slate-900 tracking-tight">Mistral</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
               <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)} 
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors bg-transparent border-none cursor-pointer"
               >
                 {link.name}
               </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="primary" size="sm" onClick={() => scrollToSection('pricing')}>
              Free Leak Scan
            </Button>
          </div>

          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 shadow-lg flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
             <button 
               key={link.id}
               onClick={() => scrollToSection(link.id)} 
               className="text-left text-sm font-medium text-slate-600 py-2 bg-transparent border-none"
             >
               {link.name}
             </button>
          ))}
          <Button variant="primary" fullWidth onClick={() => scrollToSection('pricing')}>
            Free Leak Scan
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;