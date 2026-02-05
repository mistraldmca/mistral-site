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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif-logo text-3xl text-slate-900 tracking-tight">Mistral</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">How it Works</a>
            <a href="#platforms" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Supported Platforms</a>
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Coverage</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="primary" size="sm" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 shadow-lg flex flex-col gap-4">
          <a href="#how-it-works" className="text-sm font-medium text-slate-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>How it Works</a>
          <a href="#platforms" className="text-sm font-medium text-slate-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Supported Platforms</a>
          <a href="#features" className="text-sm font-medium text-slate-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Coverage</a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
          <Button variant="primary" fullWidth onClick={() => {
            setIsMobileMenuOpen(false);
            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Start Free Scan
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;