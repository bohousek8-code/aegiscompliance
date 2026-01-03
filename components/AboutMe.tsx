import React from 'react';

export const AboutMe: React.FC = () => {
  return (
    <section id="o-mne" className="py-24 bg-slate-900 border-y border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
           
           {/* Image Side */}
           <div className="order-1 lg:order-2 relative group">
              <div className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl border border-slate-700/50">
                {/* 
                   IMPORTANT: Ensure the photo is saved as 'bohuslav.jpg' in the root folder.
                */}
                <img 
                  src="bohuslav.jpg" 
                  alt="Bohuslav Kronika" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aegis-darker/80 via-transparent to-transparent"></div>
                
                {/* Floating Name Card on Image */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-6 border-l-4 border-aegis-gold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-serif text-2xl text-white">Bohuslav Kronika</p>
                  <p className="text-aegis-gold text-xs uppercase tracking-[0.2em] mt-1">Zakladatel & příslušná osoba</p>
                </div>
              </div>
              
              {/* Decorative background elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-aegis-gold/10 -z-10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-aegis-emerald/20 -z-10 rounded-full blur-3xl"></div>
           </div>

           {/* Text Side */}
           <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Kdo bude vaší <br/>
                  <span className="text-aegis-gold">Příslušnou osobou?</span>
                </h2>
                
                <h3 className="text-lg sm:text-xl text-slate-200 font-medium italic border-l-2 border-aegis-gold pl-6 py-2 bg-gradient-to-r from-aegis-gold/5 to-transparent">
                  "Garantuji vám nestrannost, kterou interní zaměstnanec nemůže nabídnout."
                </h3>
              </div>
              
              <div className="space-y-6 text-slate-400 leading-relaxed text-base sm:text-lg">
                <p>
                  Celou svou kariéru se pohybuji v prostředí, kde je důvěra nejcennější měnou. Založil jsem <strong className="text-slate-200">Aegis Compliance</strong> s jedinou vizí: Vrátit do procesu whistleblowingu lidský faktor.
                </p>
                <p>
                  Viděl jsem příliš mnoho firem, které nakoupily drahý software, ale jejich zaměstnanci ho báli používat. Aplikace totiž neumí naslouchat, neumí uklidnit obavy a neumí rozlišit mezi šikanou a skutečným rizikem.
                </p>
                <p>
                  Jako vaše externí Příslušná osoba nestojím na straně managementu ani na straně zaměstnanců. <span className="text-white font-medium decoration-aegis-gold/50 underline underline-offset-4">Stojím na straně zákona a férovosti.</span> Díky tomu se mi lidé nebojí svěřit, a vy se o problémech dozvíte dříve, než se dostanou do médií.
                </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};