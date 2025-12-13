
import React from 'react';
import { X, Calendar, User, Clock } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, isOpen, onClose }) => {
  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto font-sans" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" 
        onClick={onClose}
      ></div>

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white w-full max-w-3xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col my-8 border-4 border-pink-100">
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-white/50 hover:bg-white p-2 rounded-full backdrop-blur-md transition-all text-slate-600 hover:text-pink-500 shadow-sm"
          >
            <X size={24} strokeWidth={2.5} />
          </button>

          {/* Hero Image */}
          <div className="h-64 md:h-80 relative">
             <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             <div className="absolute bottom-6 left-6 md:left-10 text-white">
                 <div className="flex gap-4 text-sm font-medium opacity-90 mb-2">
                     <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
                     <span className="flex items-center gap-1"><Clock size={14}/> {post.readTime}</span>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-cartoony font-bold leading-tight shadow-sm">
                    {post.title}
                 </h2>
             </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8 pb-8 border-b border-slate-100">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
                    <User size={20} />
                </div>
                <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">Scritto da</p>
                    <p className="font-bold text-slate-800">{post.author}</p>
                </div>
            </div>

            <div 
                className="prose prose-lg prose-pink text-slate-600 max-w-none leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-12 pt-8 border-t border-slate-100 text-center">
                <button 
                    onClick={onClose}
                    className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition"
                >
                    Chiudi Articolo
                </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
