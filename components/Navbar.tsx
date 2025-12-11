import React from 'react';
import { Menu, X, Heart, Gamepad2, Instagram, Facebook } from 'lucide-react';

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  onOpenGame: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
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

          {/* Social / External Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            
            <button 
                onClick={onOpenGame}
                className="flex items-center gap-2 text-slate-600 hover:text-pink-500 font-cartoony font-semibold transition hover:scale-105 transform bg-pink-50 px-3 py-1 rounded-xl mr-2"
            >
                <Gamepad2 size={20} />
                <span className="hidden lg:inline">Sala Giochi</span>
            </button>

            {/* Facebook Link */}
            <a href="https://www.facebook.com/iconiglisonobruttepersone" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#1877F2] text-white px-3 py-2 rounded-full hover:bg-blue-700 font-bold transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <Facebook size={18} />
              <span className="text-xs font-cartoony hidden xl:inline">FACEBOOK</span>
            </a>

            {/* Instagram Link */}
            <a href="https://www.instagram.com/bruttissimepersone?igsh=aGlnMWFsZjJwb3Ez" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-pink-500 text-white px-3 py-2 rounded-full hover:bg-pink-600 font-bold transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <Instagram size={18} />
              <span className="text-xs font-cartoony hidden xl:inline">INSTAGRAM</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
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
        <div className="md:hidden bg-white border-b-4 border-pink-100 shadow-lg absolute w-full rounded-b-3xl animate-fade-in-down">
          <div className="px-4 pt-4 pb-6 space-y-4">
            
            <div className="grid grid-cols-2 gap-3 pt-2">
                <a href="https://www.facebook.com/iconiglisonobruttepersone" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1877F2] text-white font-cartoony text-sm font-bold shadow-sm">
                  <Facebook size={18} /> Facebook
                </a>
                <a href="https://www.instagram.com/bruttissimepersone?igsh=aGlnMWFsZjJwb3Ez" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-pink-500 text-white font-cartoony text-sm font-bold shadow-sm">
                  <Instagram size={18} /> Instagram
                </a>
            </div>

            <a href="#autore" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-xl hover:bg-pink-50 font-cartoony text-xl text-slate-700 font-bold text-center border-2 border-transparent hover:border-pink-100">
              L'Autrice
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};