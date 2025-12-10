import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

interface CookieBannerProps {
  onOpenPolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPolicy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a small delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border-4 border-pink-500 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative">
        
        {/* Close button (optional, usually better to force choice, but kept for UX) */}
        <button 
            onClick={() => setIsVisible(false)} 
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 md:hidden"
        >
            <X size={20} />
        </button>

        <div className="bg-pink-100 p-4 rounded-full shrink-0">
            <Cookie size={32} className="text-pink-600" />
        </div>

        <div className="flex-grow text-center md:text-left">
            <h3 className="font-cartoony font-bold text-xl text-slate-800 mb-2">
                Usiamo i cookie (purtroppo non sono biscotti veri)
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
                Questo sito utilizza cookie tecnici per funzionare e cookie di terze parti (Amazon) per mostrarti i prodotti. 
                Nessun dato personale viene salvato sui nostri server, ma Amazon potrebbe tracciare la tua visita se clicchi sui prodotti.
                Continuando a navigare, accetti il fatto che i conigli ci giudicheranno comunque.
            </p>
            <button 
                onClick={onOpenPolicy}
                className="text-pink-500 underline text-xs mt-2 hover:text-pink-700 font-bold"
            >
                Leggi l'informativa completa (Privacy & Cookie Policy)
            </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <button 
                onClick={handleAccept}
                className="bg-pink-500 text-white px-8 py-3 rounded-xl font-cartoony font-bold hover:bg-pink-600 transition shadow-lg hover:-translate-y-1 text-center"
            >
                Accetto tutto
            </button>
        </div>
      </div>
    </div>
  );
};