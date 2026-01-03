import React from 'react';
import { CalendarCheck, Users, Star } from 'lucide-react';

export const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-aegis-dark border-t border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-aegis-gold/5 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800/50">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center p-4">
            <div className="mb-4 p-3 bg-slate-800/50 rounded-full text-aegis-gold ring-1 ring-aegis-gold/20">
              <CalendarCheck size={28} strokeWidth={1.5} />
            </div>
            <div className="font-serif text-4xl font-bold text-white mb-2">
              2 <span className="text-aegis-gold">roky</span>
            </div>
            <p className="text-slate-400 text-sm uppercase tracking-wider font-medium">
              Na trhu compliance
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center p-4">
            <div className="mb-4 p-3 bg-slate-800/50 rounded-full text-aegis-gold ring-1 ring-aegis-gold/20">
              <Users size={28} strokeWidth={1.5} />
            </div>
            <div className="font-serif text-4xl font-bold text-white mb-2">
              30<span className="text-aegis-gold">+</span>
            </div>
            <p className="text-slate-400 text-sm uppercase tracking-wider font-medium">
              Spokojených klientů
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center p-4">
            <div className="mb-4 p-3 bg-slate-800/50 rounded-full text-aegis-gold ring-1 ring-aegis-gold/20">
              <Star size={28} strokeWidth={1.5} />
            </div>
            <div className="font-serif text-4xl font-bold text-white mb-2">
              20<span className="text-aegis-gold">+</span>
            </div>
            <p className="text-slate-400 text-sm uppercase tracking-wider font-medium">
              Recenzí od zákazníků
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};