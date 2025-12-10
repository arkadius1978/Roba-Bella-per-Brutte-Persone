import React from 'react';
import { Instagram, Facebook, Heart, PawPrint } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-pink-100 pt-16 pb-8 border-t-8 border-pink-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
                <Heart size={24} className="text-pink-500 fill-pink-500" />
                <span className="font-cartoony font-bold text-xl">Roba bella...</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              ...per brutte persone. O forse no. <br/>
              Comunque i conigli restano delle brutte persone, fidati.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-pink-500 mb-6 bg-slate-800 inline-block px-2 py-1 rounded">Menu</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#bichitos" className="hover:text-white hover:underline transition decoration-green-500 decoration-2 flex items-center gap-2"><PawPrint size={14} className="text-green-500"/> Associazione Bichitos</a></li>
              <li><a href="#autore" className="hover:text-white hover:underline transition decoration-pink-500 decoration-2">L'Autrice</a></li>
              <li><a href="#catalogo" className="hover:text-white hover:underline transition decoration-pink-500 decoration-2">Catalogo</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-pink-500 mb-6 bg-slate-800 inline-block px-2 py-1 rounded">Seguici</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/iconiglisonobruttepersone" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-2xl hover:bg-[#1877F2] hover:text-white transition duration-300 transform hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              {/* Placeholder for future instagram if needed */}
              <a href="#" className="p-3 bg-slate-800 rounded-2xl hover:bg-[#E4405F] hover:text-white transition duration-300 transform hover:-translate-y-1 opacity-50 cursor-not-allowed" title="Presto disponibile">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Maia Natacha Fiorelli. Tutti i diritti riservati.
          </p>
          <p className="text-[10px] text-slate-600 uppercase tracking-wider bg-slate-800 px-3 py-1 rounded-full">
            Affiliato Amazon: Guadagno dagli acquisti idonei
          </p>
        </div>
      </div>
    </footer>
  );
};