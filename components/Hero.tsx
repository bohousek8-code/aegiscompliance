import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-aegis-darker via-aegis-dark to-aegis-emerald opacity-90"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-aegis-gold/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Whistleblowing není o softwaru. <br/>
              <span className="text-aegis-gold">Je o důvěře.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl border-l-2 border-aegis-gold/30 pl-6">
              Splňte zákon č. 171/2023 Sb. lidsky a bezpečně. Převezmeme roli Příslušné osoby za vás. 
              Žádné instalace, žádné aplikace. Jen přímá linka na odborníka.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={() => scrollTo('#cenik')}>
                Zobrazit ceník
              </Button>
              <Button variant="outline" onClick={() => scrollTo('#sluzby')} className="group">
                Jak to funguje
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-[400px] lg:h-[600px] w-full rounded-sm overflow-hidden shadow-2xl border border-slate-700/50 group">
             {/* Using a placeholder that suggests a legal professional/office context */}
             <img 
              src="https://picsum.photos/id/4/800/1000" 
              alt="Professional Consultant" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 hover:opacity-80 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-aegis-darker via-transparent to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-slate-900/90 backdrop-blur-sm p-6 border-l-4 border-aegis-gold">
                <p className="font-serif text-white italic text-lg">
                  "Externí Příslušná osoba je vaše nejbezpečnější volba."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};