
import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Link as LinkIcon, MessageCircle } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogPostPageProps {
  post: BlogPost | null;
  onBack: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onBack }) => {
  if (!post) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Leggi questo articolo: ${post.title}`;

  // SEO & Head Management
  useEffect(() => {
    // 1. Update Document Title
    const previousTitle = document.title;
    document.title = `${post.title} | Roba Bella`;

    // 2. Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    const previousMetaDesc = metaDesc?.getAttribute('content');
    if (metaDesc) {
        metaDesc.setAttribute('content', post.excerpt || '');
    }

    // 3. Inject JSON-LD (Structured Data for Google News/Search)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": post.title,
      "image": post.imageUrl ? [post.imageUrl] : [],
      "datePublished": post.isoDate, 
      "dateModified": post.isoDate,
      "author": [{
          "@type": "Person",
          "name": post.author
      }],
      "description": post.excerpt
    });
    document.head.appendChild(script);

    // Cleanup when component unmounts
    return () => {
        document.title = previousTitle;
        if (metaDesc && previousMetaDesc) {
            metaDesc.setAttribute('content', previousMetaDesc);
        }
        if (document.head.contains(script)) {
            document.head.removeChild(script);
        }
    };
  }, [post]);

  const handleShare = (platform: 'facebook' | 'whatsapp' | 'twitter') => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case 'whatsapp':
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`;
        break;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    alert('Link copiato negli appunti!');
  };

  return (
    <div className="min-h-screen bg-white animate-fade-in">
      
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full bg-slate-100">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        
        <div className="absolute top-4 left-4 z-20">
             <button 
                onClick={onBack}
                className="flex items-center gap-2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white px-4 py-2 rounded-full font-bold transition-all hover:scale-105"
             >
                <ArrowLeft size={20} /> Torna alla Home
             </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-5xl mx-auto text-white z-10">
            <div className="flex flex-wrap gap-4 text-sm font-medium opacity-90 mb-4">
                <span className="flex items-center gap-1 bg-pink-500/80 px-3 py-1 rounded-lg backdrop-blur-sm">
                    <Calendar size={14}/> {post.date}
                </span>
                <span className="flex items-center gap-1 bg-slate-800/80 px-3 py-1 rounded-lg backdrop-blur-sm">
                    <Clock size={14}/> {post.readTime}
                </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-cartoony font-bold leading-tight shadow-sm mb-4">
                {post.title}
            </h1>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white text-pink-500 flex items-center justify-center font-bold">
                    <User size={20} />
                </div>
                <p className="font-bold text-lg">{post.author}</p>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Article Body - Uses Tailwind Typography (prose) */}
            <article className="lg:w-3/4">
                <div 
                    className="prose prose-lg prose-pink text-slate-600 max-w-none leading-relaxed first-letter:text-5xl first-letter:font-cartoony font-bold first-letter:text-pink-500 first-letter:mr-1 first-letter:float-left"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>

            {/* Sidebar / Share */}
            <aside className="lg:w-1/4 space-y-8">
                <div className="bg-pink-50 p-6 rounded-3xl border-2 border-pink-100 sticky top-24">
                    <h3 className="font-cartoony font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
                        <Share2 size={20} className="text-pink-500" /> Condividi
                    </h3>
                    <p className="text-sm text-slate-500 mb-6">
                        Diffondi il verbo del disagio ai tuoi amici (o nemici).
                    </p>
                    
                    <div className="space-y-3">
                        <button 
                            onClick={() => handleShare('facebook')}
                            className="w-full flex items-center justify-center gap-3 bg-[#1877F2] text-white py-3 rounded-xl font-bold hover:opacity-90 transition shadow-sm"
                        >
                            <Facebook size={18} /> Facebook
                        </button>
                        <button 
                            onClick={() => handleShare('whatsapp')}
                            className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-3 rounded-xl font-bold hover:opacity-90 transition shadow-sm"
                        >
                            <MessageCircle size={18} /> WhatsApp
                        </button>
                        <button 
                            onClick={copyLink}
                            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-200 text-slate-600 py-3 rounded-xl font-bold hover:bg-slate-50 transition shadow-sm"
                        >
                            <LinkIcon size={18} /> Copia Link
                        </button>
                    </div>
                </div>
            </aside>

        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-100 text-center">
             <button 
                onClick={onBack}
                className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition inline-flex items-center gap-2"
            >
                <ArrowLeft size={18} /> Torna all'elenco articoli
            </button>
        </div>
      </div>
    </div>
  );
};
