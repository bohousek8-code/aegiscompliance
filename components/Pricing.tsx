import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from './Button';
import { PricingTier } from '../types';

const pricingTiers: PricingTier[] = [
  {
    id: 'basic',
    name: 'ZÁKONNÝ ZÁKLAD',
    price: '2 490 Kč / měs',
    features: [
      { text: 'Role Příslušné osoby', included: false },
      { text: 'Pouze písemná komunikace', included: true },
      { text: 'Zákonné lhůty', included: true }
    ],
    cta: 'Kontaktovat'
  },
  {
    id: 'recommended',
    name: 'BEZPEČNÁ FIRMA',
    price: '4 990 Kč / měs',
    recommended: true,
    features: [
      { text: 'Kompletní outsourcing', included: true },
      { text: 'Přímá telefonní linka', included: true },
      { text: 'Osobní email', included: true },
      { text: 'Vzorové směrnice', included: true },
      { text: 'Řešení incidentů', included: true }
    ],
    cta: 'Zvolit tento tarif'
  },
  {
    id: 'corporate',
    name: 'KORPORÁT',
    price: '9 990 Kč / měs',
    features: [
      { text: 'Vše z tarifu Bezpečná Firma', included: true },
      { text: 'Osobní školení', included: true },
      { text: 'Audit rizik', included: true }
    ],
    cta: 'Kontaktovat'
  }
];

export const Pricing: React.FC = () => {
  const handleCtaClick = (tierName: string) => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Pre-select the appropriate option in the contact form
      const serviceSelect = document.getElementById('service') as HTMLSelectElement;
      if (serviceSelect) {
        if (tierName === 'ZÁKONNÝ ZÁKLAD') serviceSelect.value = 'Tarif: Zákonný základ';
        else if (tierName === 'BEZPEČNÁ FIRMA') serviceSelect.value = 'Tarif: Bezpečná firma';
        else if (tierName === 'KORPORÁT') serviceSelect.value = 'Tarif: Korporát';
      }
    }
  };

  return (
    <section id="cenik" className="py-24 bg-gradient-to-b from-slate-900 to-aegis-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Ceník služeb Příslušné osoby
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Transparentní měsíční paušál bez skrytých poplatků.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.id}
              className={`relative flex flex-col p-8 rounded-sm transition-all duration-300 ${
                tier.recommended 
                  ? 'bg-slate-800 border-2 border-aegis-gold shadow-[0_0_30px_rgba(212,175,55,0.1)] scale-100 lg:scale-110 z-10' 
                  : 'bg-slate-900 border border-slate-700 hover:border-slate-500 scale-100'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-aegis-gold text-aegis-darker px-4 py-1 text-xs font-bold tracking-widest uppercase rounded-full shadow-lg">
                  DOPORUČUJEME
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-serif text-xl font-bold mb-4 ${tier.recommended ? 'text-aegis-gold' : 'text-white'}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">{tier.price.split(' /')[0]}</span>
                  <span className="text-slate-400 ml-2 text-sm">/ měs</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className={`flex items-start ${!feature.included ? 'opacity-50' : ''}`}>
                    {feature.included ? (
                      <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${tier.recommended ? 'text-aegis-gold' : 'text-slate-500'}`} />
                    ) : (
                      <X className="h-5 w-5 mr-3 flex-shrink-0 text-slate-600" />
                    )}
                    <span className={`text-sm ${
                      feature.included && ['Kompletní outsourcing', 'Přímá telefonní linka'].includes(feature.text) 
                        ? 'text-white font-semibold' 
                        : 'text-slate-300'
                    }`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.recommended ? 'primary' : 'outline'}
                fullWidth
                onClick={() => handleCtaClick(tier.name)}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};