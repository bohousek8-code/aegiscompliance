import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from './Button';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'O zákonu', href: '#o-zakonu' },
  { label: 'Služby', href: '#sluzby' },
  { label: 'O mně', href: '#o-mne' },
  { label: 'Ceník', href: '#cenik' },
  { label: 'Kontakt', href: '#kontakt' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsultationClick = () => {
    setIsOpen(false);
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Reset form selection to default consultation
      const serviceSelect = document.getElementById('service') as HTMLSelectElement;
      if (serviceSelect) {
        serviceSelect.value = 'Nezávazná konzultace';
      }
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-aegis-dark/95 backdrop-blur-md border-slate-800 py-3 shadow-lg' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <Shield className="h-8 w-8 text-aegis-gold" strokeWidth={1.5} />
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white">
              AEGIS <span className="text-aegis-gold">COMPLIANCE</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm font-medium text-slate-300 hover:text-aegis-gold transition-colors uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="secondary" 
              className="!py-2 !px-4 text-sm"
              onClick={handleConsultationClick}
            >
              Nezávazná konzultace
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-aegis-dark border-b border-slate-800 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block w-full text-center px-3 py-4 text-base font-medium text-slate-300 hover:text-aegis-gold hover:bg-slate-800/50 rounded-md uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 w-full">
               <Button fullWidth onClick={handleConsultationClick}>
                Nezávazná konzultace
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};