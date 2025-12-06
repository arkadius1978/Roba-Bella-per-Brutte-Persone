import React from 'react';
import { Eye, ExternalLink, Quote } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="group relative bg-white flex flex-col rounded-3xl border-2 border-pink-50 hover:border-pink-300 shadow-sm hover:shadow-xl hover:shadow-pink-100 transition-all duration-300 overflow-hidden"
    >
      {/* Image Container */}
      {/* Reduced padding from p-8 to p-4 to make images larger. Added w-full h-full to img to maximize usage of space. */}
      <div className="aspect-[4/5] bg-pink-50 relative overflow-hidden p-4 flex items-center justify-center">
        {product.isBestSeller && (
            <div className="absolute top-4 right-4 z-10 bg-yellow-400 text-slate-900 font-cartoony font-bold text-xs px-3 py-1 rounded-full shadow-md transform rotate-3">
                ★ BESTSELLER
            </div>
        )}
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="w-full h-full object-contain rounded-lg transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500 drop-shadow-sm"
        />
        
        {/* Hover Actions */}
        <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
          <button 
            onClick={(e) => { e.stopPropagation(); onClick(product); }}
            className="bg-white text-pink-500 p-3 rounded-2xl hover:bg-pink-500 hover:text-white transition-all transform scale-0 group-hover:scale-100 duration-300 shadow-lg border-2 border-pink-200"
            title="Guarda"
          >
            <Eye size={24} strokeWidth={2.5} />
          </button>
          <a 
            href={product.amazonUrl}
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-800 text-white p-3 rounded-2xl hover:bg-black transition-all transform scale-0 group-hover:scale-100 duration-300 delay-75 shadow-lg border-2 border-slate-700"
            title="Vedi su Amazon"
          >
            <ExternalLink size={24} strokeWidth={2.5} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow text-center justify-between">
        <div>
          <div className="self-center inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-[10px] font-cartoony font-bold uppercase tracking-wide mb-3">
            {product.category}
          </div>
          
          <h3 
              className="font-cartoony font-bold text-xl text-slate-800 leading-tight mb-3 cursor-pointer hover:text-pink-500 transition-colors"
              onClick={() => onClick(product)}
          >
            {product.title}
          </h3>

          {product.quote && (
            <div className="mb-4 relative bg-pink-50/50 p-3 rounded-xl">
              <Quote size={16} className="absolute -top-2 -left-1 text-pink-300 transform -scale-x-100 fill-pink-100" />
              <p className="text-xs text-slate-500 italic leading-relaxed font-medium">
                {product.quote}
              </p>
            </div>
          )}
        </div>
        
        <div className="pt-2 flex items-center justify-center">
            <button 
                onClick={(e) => { e.stopPropagation(); onClick(product); }}
                className="text-pink-500 text-sm font-bold hover:underline font-cartoony"
            >
                Scopri di più &rarr;
            </button>
        </div>
      </div>
    </div>
  );
};