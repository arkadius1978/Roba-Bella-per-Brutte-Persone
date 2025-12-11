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
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border-4 border-slate-800 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative">
        
        <div className="bg-pink-100 p-4 rounded-full shrink-0">
            <Cookie size={32} className="text-pink-600" />
        </div>

        <div className="flex-grow text-center md:text-left">
            <h3 className="font-cartoony font-bold text-xl text-slate-800 mb-2">
                Informativa sui Cookie
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Questo sito utilizza <strong>cookie tecnici</strong> necessari al funzionamento e <strong>cookie di terze parti</strong> (Amazon) per mostrarti i prodotti e gestire l'affiliazione commerciale. 
                <br className="hidden md:block" />
                Cliccando su "Accetto e Chiudi", acconsenti all'uso dei cookie e dichiari di aver preso visione della nostra Informativa.
            </p>
            <button 
                onClick={onOpenPolicy}
                className="text-slate-800 underline text-xs mt-3 hover:text-pink-600 font-bold block md:inline-block"
            >
                Leggi l'informativa completa (Privacy & Cookie Policy)
            </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <button 
                onClick={handleAccept}
                className="bg-slate-900 text-white px-8 py-3 rounded-xl font-cartoony font-bold hover:bg-slate-700 transition shadow-lg hover:-translate-y-1 text-center w-full md:w-auto"
            >
                Accetto e Chiudi
            </button>
        </div>
      </div>
    </div>
  );
};