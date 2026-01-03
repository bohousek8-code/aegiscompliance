import React from 'react';
import { Scale, Building2, ClipboardCheck, AlertTriangle } from 'lucide-react';

export const AboutLaw: React.FC = () => {
  return (
    <section id="o-zakonu" className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
       {/* Decorative background */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-aegis-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Perex */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-aegis-gold/10 rounded-full mb-6">
            <Scale className="h-8 w-8 text-aegis-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Zákon o ochraně oznamovatelů <br/>
            <span className="text-aegis-gold">(č. 171/2023 Sb.) v kostce</span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed text-justify sm:text-center">
            Dne 1. srpna 2023 nabyl účinnosti zákon č. 171/2023 Sb., o ochraně oznamovatelů, který do českého práva transponuje směrnici Evropské unie. Cílem zákona je umožnit zaměstnancům a dalším osobám bezpečně nahlásit protiprávní jednání, o kterém se dozvěděli v souvislosti s prací, a chránit je před případnou odvetou zaměstnavatele.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Card 1: Who */}
          <div className="bg-slate-800/50 p-8 rounded-sm border border-slate-700 hover:border-aegis-gold/30 transition-colors h-full">
            <div className="flex items-center space-x-3 mb-6 border-b border-slate-700 pb-4">
              <Building2 className="text-aegis-gold h-6 w-6 shrink-0" />
              <h3 className="font-serif text-xl font-bold text-white">Koho se povinnost týká?</h3>
            </div>
            <p className="text-slate-400 mb-4 text-sm">Povinnost zavést vnitřní oznamovací systém se vztahuje na:</p>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-start">
                <span className="text-aegis-gold mr-3 mt-1">•</span> 
                <span><strong>Zaměstnavatelé s 50 a více zaměstnanci</strong> (včetně zaměstnanců na DPČ a DPP).</span>
              </li>
              <li className="flex items-start">
                <span className="text-aegis-gold mr-3 mt-1">•</span> 
                <span><strong>Veřejní zadavatelé</strong> (obce nad 10 000 obyvatel, státní úřady, příspěvkové organizace).</span>
              </li>
              <li className="flex items-start">
                <span className="text-aegis-gold mr-3 mt-1">•</span> 
                <span><strong>Osoby povinné dle AML zákona</strong> (bez ohledu na počet zaměstnanců – např. účetní, daňoví poradci, realitní zprostředkovatelé).</span>
              </li>
              <li className="flex items-start">
                <span className="text-aegis-gold mr-3 mt-1">•</span> 
                <span>Pojišťovny, banky a investiční společnosti.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Duties */}
          <div className="bg-slate-800/50 p-8 rounded-sm border border-slate-700 hover:border-aegis-gold/30 transition-colors h-full">
            <div className="flex items-center space-x-3 mb-6 border-b border-slate-700 pb-4">
              <ClipboardCheck className="text-aegis-gold h-6 w-6 shrink-0" />
              <h3 className="font-serif text-xl font-bold text-white">Klíčové povinnosti</h3>
            </div>
            <ul className="space-y-5 text-slate-300 text-sm">
              <li>
                <strong className="text-white block mb-1 text-base">Vnitřní oznamovací systém (VOS)</strong>
                <span className="text-slate-400 leading-snug block">Bezpečný kanál pro podávání oznámení (písemně, ústně i osobně), který zaručuje důvěrnost identity.</span>
              </li>
              <li>
                <strong className="text-white block mb-1 text-base">Určení "Příslušné osoby"</strong>
                <span className="text-slate-400 leading-snug block">Musíte jmenovat nezávislou osobu, která bude oznámení přijímat a prošetřovat. Nesmí být ve střetu zájmů.</span>
              </li>
              <li>
                <strong className="text-white block mb-1 text-base">Dodržování lhůt</strong>
                <ul className="ml-4 list-disc text-slate-400 space-y-1 mt-1">
                  <li>Potvrzení přijetí do 7 dnů.</li>
                  <li>Vyrozumění o výsledku do 30 dnů.</li>
                </ul>
              </li>
              <li>
                <strong className="text-white block mb-1 text-base">Zákaz odvetných opatření</strong>
                <span className="text-slate-400 leading-snug block">Zaměstnavatel nesmí oznamovatele jakkoli postihnout (výpověď, snížení mzdy).</span>
              </li>
            </ul>
          </div>

           {/* Card 3: Fines */}
           <div className="bg-slate-800/50 p-8 rounded-sm border border-slate-700 hover:border-aegis-gold/30 transition-colors h-full">
            <div className="flex items-center space-x-3 mb-6 border-b border-slate-700 pb-4">
              <AlertTriangle className="text-aegis-goldDark h-6 w-6 shrink-0" />
              <h3 className="font-serif text-xl font-bold text-white">Sankce za nedodržení</h3>
            </div>
            <p className="text-slate-400 mb-6 text-sm">Státní úřad inspekce práce může uložit vysoké sankce:</p>
            
            <div className="space-y-8">
              <div>
                <div className="text-2xl font-bold text-white mb-1">až 1 000 000 Kč</div>
                <div className="text-slate-400 text-sm">Za nezavedení vnitřního oznamovacího systému.</div>
              </div>
              <div className="w-full h-px bg-slate-700/50"></div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">až 1 000 000 Kč</div>
                <div className="text-slate-400 text-sm">Za umožnění odvetného opatření vůči oznamovateli.</div>
              </div>
              <div className="w-full h-px bg-slate-700/50"></div>
              <div>
                <div className="text-2xl font-bold text-aegis-gold mb-1">až 100 000 Kč</div>
                <div className="text-slate-400 text-sm">Pokuta přímo pro "příslušnou osobu", pokud vyzradí totožnost oznamovatele.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};