import React from 'react';
import { ShoppingBag, Search, Menu, X, Heart, Gamepad2 } from 'lucide-react';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  onOpenGame: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  searchQuery, 
  setSearchQuery,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  onOpenGame
}) => {
  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b-4 border-pink-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="text-pink-500 transform group-hover:scale-110 transition-transform duration-300">
              <Heart size={32} fill="currentColor" strokeWidth={0} />
            </div>
            <span className="font-cartoony font-bold text-2xl tracking-tight text-pink-600 group-hover:text-pink-500 transition-colors">
              Roba Bella
            </span>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-pink-300 group-focus-within:text-pink-500 transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-2 border-2 border-pink-100 rounded-full bg-pink-50/50 placeholder-pink-300 focus:outline-none focus:border-pink-400 focus:bg-white focus:ring-0 transition-all duration-300 text-sm font-cartoony text-slate-700"
                placeholder="Cerca un animaletto..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Social / External Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            
            <button 
                onClick={onOpenGame}
                className="flex items-center gap-2 text-slate-600 hover:text-pink-500 font-cartoony font-semibold transition hover:scale-105 transform bg-pink-50 px-3 py-1 rounded-xl"
            >
                <Gamepad2 size={20} />
                Sala Giochi
            </button>

            <div className="h-6 w-0.5 bg-pink-100 rounded-full mx-2"></div>
            <a href="#" className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 font-bold transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <ShoppingBag size={18} />
              <span className="text-xs font-cartoony">AMAZON</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
             <button
              onClick={onOpenGame}
              className="inline-flex items-center justify-center p-2 rounded-xl text-pink-500 bg-pink-50 hover:bg-pink-100 focus:outline-none transition duration-150 ease-in-out"
            >
              <Gamepad2 size={24} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-pink-400 hover:bg-pink-50 hover:text-pink-600 focus:outline-none transition duration-150 ease-in-out"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b-4 border-pink-100 shadow-lg absolute w-full rounded-b-3xl">
          <div className="px-4 pt-4 pb-6 space-y-4">
             <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-pink-300" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border-2 border-pink-100 rounded-full leading-5 bg-pink-50 placeholder-pink-300 focus:outline-none focus:border-pink-400 text-sm font-cartoony"
                placeholder="Cerca..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <a href="#bichitos" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-xl hover:bg-green-50 text-green-700 font-cartoony text-xl font-bold">
              Associazione Bichitos
            </a>
            <a href="#autore" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-xl hover:bg-pink-50 font-cartoony text-xl text-slate-700 font-bold">
              L'Autrice
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};