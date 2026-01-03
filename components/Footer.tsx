import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-aegis-darker pt-16 pb-8 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Address */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-aegis-gold" />
              <span className="font-serif text-lg font-bold text-white">AEGIS COMPLIANCE</span>
            </div>
            <div className="text-slate-400 space-y-2 leading-relaxed">
              <p>Nekvasilova 571/21</p>
              <p>186 00 Praha 8 - Invalidovna</p>
              <p className="pt-2 text-xs text-slate-600">Provozovatel webu zpracovává osobní údaje v souladu s nařízením EU (GDPR).</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
             <h3 className="text-white font-serif font-semibold mb-6 tracking-wide">Navigace</h3>
             <ul className="space-y-3 text-slate-400">
               <li><a href="#o-zakonu" className="hover:text-aegis-gold transition-colors">O zákonu</a></li>
               <li><a href="#sluzby" className="hover:text-aegis-gold transition-colors">Služby</a></li>
               <li><a href="#cenik" className="hover:text-aegis-gold transition-colors">Ceník</a></li>
               <li><a href="#kontakt" className="hover:text-aegis-gold transition-colors">Kontakt</a></li>
             </ul>
          </div>

          {/* Legal Links (Requested) */}
          <div>
             <h3 className="text-white font-serif font-semibold mb-6 tracking-wide">Právní informace</h3>
             <ul className="space-y-3 text-slate-400">
               <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-aegis-gold transition-colors">Všeobecné obchodní podmínky</a></li>
               <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-aegis-gold transition-colors">Ochrana osobních údajů (GDPR)</a></li>
               <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-aegis-gold transition-colors">Zásady používání cookies</a></li>
               <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-aegis-gold transition-colors">Reklamační řád</a></li>
             </ul>
          </div>

          {/* Contact */}
           <div>
             <h3 className="text-white font-serif font-semibold mb-6 tracking-wide">Rychlý kontakt</h3>
             <ul className="space-y-3 text-slate-400">
               <li><a href="mailto:aegiscompliance@proton.me" className="hover:text-aegis-gold transition-colors">aegiscompliance@proton.me</a></li>
               <li><a href="tel:+420722312964" className="hover:text-aegis-gold transition-colors">+420 722 312 964</a></li>
             </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} AEGIS COMPLIANCE. Všechna práva vyhrazena.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition-colors">Nastavení cookies</a>
             <span className="text-slate-700">|</span>
             <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition-colors">Právní doložka</a>
          </div>
        </div>
      </div>
    </footer>
  );
};