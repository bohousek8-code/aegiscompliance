import React from 'react';
import { HeartHandshake, ShieldCheck, Zap } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Lidský přístup",
    description: "Zaměstnanci se bojí nahrávat vzkazy do anonymních aplikací. My nabízíme diskrétní email a telefon přímo na právníka.",
    icon: HeartHandshake
  },
  {
    title: "Nulový střet zájmů",
    description: "Interní HR manažer nemůže vyšetřovat vlastního šéfa. Jako externí specialisté garantujeme 100% nezávislost.",
    icon: ShieldCheck
  },
  {
    title: "Okamžitá odpovědnost",
    description: "Nemusíte nic instalovat ani školit. Podepíšeme smlouvu a plníme vaši zákonnou povinnost my.",
    icon: Zap
  }
];

export const Services: React.FC = () => {
  return (
    <section id="sluzby" className="py-24 bg-aegis-darker relative">
       {/* Background decorative element */}
       <div className="absolute left-0 top-1/4 w-64 h-64 bg-aegis-emerald/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Proč software nestačí?
          </h2>
          <div className="w-24 h-1 bg-aegis-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-900/50 p-8 border border-slate-800 hover:border-aegis-gold/50 transition-all duration-300 group rounded-sm"
            >
              <div className="mb-6 inline-block p-4 bg-slate-800 rounded-sm group-hover:bg-aegis-gold group-hover:text-aegis-darker transition-colors duration-300 text-aegis-gold">
                <service.icon className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-4 group-hover:text-aegis-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};