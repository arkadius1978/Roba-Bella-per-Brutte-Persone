
import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Link as LinkIcon, MessageCircle, ShoppingBag, BookOpen } from 'lucide-react';
import { BlogPost, Category } from '../types';
import { SEO } from './SEO';

interface BlogPostPageProps {
  post: BlogPost | null;
  onBack: () => void;
  onNavigateToCategory: (category: Category) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onBack, onNavigateToCategory }) => {
  if (!post) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Leggi questo articolo: ${post.title}`;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  const handleShare = async (platform: 'facebook' | 'whatsapp' | 'twitter' | 'native') => {
    const shareUrl = window.location.href; 
    
    if (platform === 'native' && navigator.share) {
        try {
            await navigator.share({
                title: post.title,
                text: post.excerpt,
                url: shareUrl,
            });
            return;
        } catch (err) {
            console.log('Error sharing:', err);
        }
    }

    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'whatsapp':
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'native':
         copyLink();
         return;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    alert('Link copiato negli appunti!');
  };

  return (
    <div className="min-h-screen bg-white animate-fade-in">
      <SEO 
        title={`${post.title} | Diario del Disagio`}
        description={post.excerpt}
        image={post.imageUrl}
        type="article"
      />
      
      <div className="relative bg-slate-900 overflow-hidden pb-12 pt-24 md:pt-32 px-4 shadow-xl">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img src={post.imageUrl} className="w-full h-full object-cover opacity-30 blur-2xl scale-110 saturate-150" alt="" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900"></div>
        </div>
        <div className="absolute top-6 left-4 md:left-8 z-20">
             <button onClick={onBack} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full font-bold transition-all backdrop-blur-md border border-white/10 hover:scale-105">
                <ArrowLeft size={18} /> <span className="hidden sm:inline">Torna al Blog</span>
             </button>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full max-w-lg md:w-5/12 shrink-0">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 rotate-1 transform hover:rotate-0 transition-transform duration-500 bg-slate-800">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="text-center md:text-left flex-grow space-y-6">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm font-medium">
                    <span className="flex items-center gap-1 bg-pink-500 text-white px-3 py-1 rounded-lg shadow-lg shadow-pink-500/30"><Calendar size={14}/> {post.date}</span>
                    <span className="flex items-center gap-1 bg-slate-700 text-slate-200 px-3 py-1 rounded-lg border border-slate-600"><Clock size={14}/> {post.readTime}</span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-cartoony font-bold text-white leading-tight drop-shadow-md">{post.title}</h1>
                <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                    <div className="w-12 h-12 rounded-full bg-white text-pink-600 flex items-center justify-center font-bold shadow-lg border-2 border-pink-100"><User size={24} /></div>
                    <div className="text-left"><p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Scritto da</p><p className="font-bold text-xl text-white">{post.author}</p></div>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
            <article className="lg:w-3/4">
                <div className="prose prose-lg prose-pink text-slate-600 max-w-none leading-relaxed first-letter:text-5xl first-letter:font-cartoony font-bold first-letter:text-pink-500 first-letter:mr-1 first-letter:float-left mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />
                
                <div className="bg-gradient-to-br from-pink-50 to-white rounded-[2rem] p-8 border-4 border-white shadow-xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                    <div className="flex-grow text-center md:text-left relative z-10">
                        <span className="inline-block bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider shadow-sm">Sostieni il Disagio</span>
                        <h3 className="text-2xl font-cartoony font-bold text-slate-800 mb-2">Ti è piaciuta la storia?</h3>
                        <p className="text-slate-600 font-medium">Portati a casa un pezzo di questo caos.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10">
                        <button onClick={() => onNavigateToCategory(Category.APPAREL)} className="flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-bold font-cartoony transition shadow-md hover:shadow-lg hover:-translate-y-1"><ShoppingBag size={20} /> MAGLIETTE</button>
                        <button onClick={() => onNavigateToCategory(Category.BOOKS)} className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold font-cartoony transition shadow-md hover:shadow-lg hover:-translate-y-1"><BookOpen size={20} /> LIBRI</button>
                    </div>
                </div>
            </article>

            <aside className="lg:w-1/4 space-y-8">
                <div className="bg-white p-6 rounded-3xl border-4 border-pink-100 shadow-lg text-center">
                    <h3 className="font-cartoony font-bold text-xl text-slate-800 mb-2">Shopping Terapeutico</h3>
                    <div className="space-y-3 mt-4">
                         <button onClick={() => onNavigateToCategory(Category.APPAREL)} className="w-full flex items-center justify-center gap-2 bg-pink-100 text-pink-600 hover:bg-pink-500 hover:text-white py-3 rounded-xl font-bold transition-all duration-300"><ShoppingBag size={18} /> Magliette</button>
                         <button onClick={() => onNavigateToCategory(Category.BOOKS)} className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-600 hover:bg-slate-800 hover:text-white py-3 rounded-xl font-bold transition-all duration-300"><BookOpen size={18} /> Libri</button>
                    </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border-2 border-slate-100 sticky top-24">
                    <h3 className="font-cartoony font-bold text-xl text-slate-800 mb-4 flex items-center gap-2"><Share2 size={20} className="text-slate-400" /> Condividi</h3>
                    <div className="space-y-3">
                        <button onClick={() => handleShare('native')} className="w-full flex md:hidden items-center justify-center gap-3 bg-slate-800 text-white py-3 rounded-xl font-bold hover:opacity-90 transition shadow-sm"><Share2 size={18} /> Condividi (App)</button>
                        <button onClick={() => handleShare('facebook')} className="w-full flex items-center justify-center gap-3 bg-[#1877F2] text-white py-3 rounded-xl font-bold hover:opacity-90 transition shadow-sm"><Facebook size={18} /> Facebook</button>
                        <button onClick={() => handleShare('whatsapp')} className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-3 rounded-xl font-bold hover:opacity-90 transition shadow-sm"><MessageCircle size={18} /> WhatsApp</button>
                        <button onClick={copyLink} className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-200 text-slate-600 py-3 rounded-xl font-bold hover:bg-slate-50 transition shadow-sm"><LinkIcon size={18} /> Copia Link</button>
                    </div>
                </div>
            </aside>
        </div>
      </div>
    </div>
  );
};
