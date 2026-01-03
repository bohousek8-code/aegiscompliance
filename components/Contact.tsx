import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Construct email body
    const subject = `Poptávka: ${data['Služba']} - ${data['Jméno']}`;
    const body = `
Dobrý den,

mám zájem o vaše služby.

Detaily poptávky:
--------------------------------
Jméno a příjmení: ${data['Jméno']}
Telefon: ${data['Telefon']}
Email: ${data['Email']}
Vybraná služba: ${data['Služba']}

Zpráva:
${data['Zpráva']}
--------------------------------
`.trim();

    // Create mailto link
    const mailtoLink = `mailto:aegiscompliance@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show confirmation
    setIsSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 bg-aegis-darker border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
                Kontaktujte nás
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Máte dotaz k implementaci whistleblowingu? Chcete nezávaznou nabídku? 
                Vyplňte formulář nebo nám zavolejte. Jsme tu pro vás.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:aegiscompliance@proton.me" className="flex items-center space-x-4 p-4 bg-slate-900/50 border border-slate-800 rounded-sm hover:border-aegis-gold/50 transition-colors group">
                <div className="p-3 bg-slate-800 rounded-full text-aegis-gold group-hover:bg-aegis-gold group-hover:text-aegis-darker transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Email</p>
                  <p className="text-white text-lg group-hover:text-aegis-gold transition-colors">aegiscompliance@proton.me</p>
                </div>
              </a>

              <a href="tel:+420722312964" className="flex items-center space-x-4 p-4 bg-slate-900/50 border border-slate-800 rounded-sm hover:border-aegis-gold/50 transition-colors group">
                <div className="p-3 bg-slate-800 rounded-full text-aegis-gold group-hover:bg-aegis-gold group-hover:text-aegis-darker transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Telefon</p>
                  <p className="text-white text-lg group-hover:text-aegis-gold transition-colors">+420 722 312 964</p>
                </div>
              </a>
              
              <div className="flex items-center space-x-4 p-4 bg-slate-900/50 border border-slate-800 rounded-sm">
                <div className="p-3 bg-slate-800 rounded-full text-aegis-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Sídlo</p>
                  <p className="text-white text-lg">Nekvasilova 571/21, 186 00 Praha 8-Invalidovna</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 p-8 sm:p-10 rounded-sm border border-slate-800 shadow-2xl relative min-h-[500px] flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-aegis-gold/5 blur-[60px] rounded-full pointer-events-none"></div>
            
            {isSubmitted ? (
              <div className="relative z-10 text-center space-y-6 animate-fade-in">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Poptávka připravena
                </h3>
                <p className="text-slate-400 max-w-sm mx-auto">
                  Váš emailový klient byl otevřen s předvyplněnou zprávou. 
                  <br/><br/>
                  <strong className="text-white">Pro dokončení prosím stiskněte tlačítko "Odeslat" ve vašem emailu.</strong>
                </p>
                <div className="pt-4 flex flex-col items-center gap-3">
                  <Button 
                    onClick={() => {
                        // Re-trigger mailto logic if needed
                        const form = document.querySelector('form');
                        if (form) form.requestSubmit();
                    }}
                    className="gap-2"
                  >
                    <ExternalLink size={16} />
                    Otevřít email znovu
                  </Button>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors mt-2"
                  >
                    Zpět na formulář
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Jméno a příjmení</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="Jméno" 
                      required 
                      className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-aegis-gold focus:ring-1 focus:ring-aegis-gold transition-all"
                      placeholder="Jan Novák"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-300">Telefonní číslo</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="Telefon" 
                      className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-aegis-gold focus:ring-1 focus:ring-aegis-gold transition-all"
                      placeholder="+420 777 888 999"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Emailová adresa</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="Email" 
                    required
                    className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-aegis-gold focus:ring-1 focus:ring-aegis-gold transition-all"
                    placeholder="jan.novak@firma.cz"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-slate-300">O jakou službu máte zájem?</label>
                  <div className="relative">
                    <select 
                      id="service" 
                      name="Služba"
                      className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-aegis-gold focus:ring-1 focus:ring-aegis-gold transition-all appearance-none"
                    >
                      <option value="Nezávazná konzultace">Nezávazná konzultace</option>
                      <option value="Tarif: Zákonný základ">Tarif: Zákonný základ</option>
                      <option value="Tarif: Bezpečná firma">Tarif: Bezpečná firma (Doporučeno)</option>
                      <option value="Tarif: Korporát">Tarif: Korporát</option>
                      <option value="Jiné">Jiné / Dotaz</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Poznámka / Zpráva</label>
                  <textarea 
                    id="message" 
                    name="Zpráva" 
                    rows={4}
                    className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-aegis-gold focus:ring-1 focus:ring-aegis-gold transition-all resize-none"
                    placeholder="Popište stručně vaše potřeby..."
                  ></textarea>
                </div>

                <Button type="submit" fullWidth className="group">
                  <span className="flex items-center">
                    Připravit email k odeslání
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                
                <p className="text-xs text-slate-500 text-center mt-4">
                  Kliknutím se otevře váš emailový klient s předvyplněnou zprávou.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};