import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-sans" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-pink-900/40 backdrop-blur-md transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
        <div className="relative transform overflow-hidden bg-white rounded-[2rem] text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-4xl border-4 border-pink-100">
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-pink-100 rounded-full transition-colors text-pink-400 hover:text-pink-600"
          >
            <X size={28} strokeWidth={2.5} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-64 md:h-auto bg-pink-50 p-10 flex items-center justify-center">
               <img 
                src={product.imageUrl} 
                alt={product.title} 
                className="max-h-[350px] w-auto h-auto object-contain rounded-lg shadow-sm"
              />
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-between bg-white">
              <div>
                <div className="inline-block px-3 py-1 rounded-lg bg-pink-100 text-pink-600 text-xs font-cartoony font-bold uppercase tracking-wider mb-4">
                    {product.category}
                </div>
                <h3 className="text-3xl font-cartoony font-bold text-slate-800 mb-4 leading-tight">{product.title}</h3>
                
                {product.quote && (
                  <div className="bg-pink-50 p-4 rounded-2xl mb-6 relative">
                    <p className="italic text-slate-600 font-medium text-lg leading-relaxed text-center">
                      "{product.quote}"
                    </p>
                  </div>
                )}
                
                <div className="prose prose-pink text-slate-500 mb-8 leading-relaxed">
                  <p>{product.description}</p>
                </div>
              </div>

              <div className="mt-4 pt-6 border-t-2 border-pink-50">
                <a 
                    href={product.amazonUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full group flex items-center justify-center gap-3 bg-pink-500 hover:bg-pink-600 text-white py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-pink-200 transform hover:-translate-y-1"
                >
                    <span className="font-cartoony font-bold text-lg">Vedi prezzo su Amazon</span>
                    <ExternalLink size={20} className="opacity-80 group-hover:rotate-12 transition-transform" />
                </a>
                <p className="text-[10px] text-slate-400 text-center mt-3 font-medium">
                    Gestito da Amazon.it • Sicuro & Veloce
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};