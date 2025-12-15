
import React, { useState, useMemo, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { BlogCard } from './components/BlogCard';
import { BlogPostPage } from './components/BlogPostPage';
import { GameModal } from './components/GameModal';
import { LegalModal } from './components/LegalModal';
import { CookieBanner } from './components/CookieBanner';
import { Footer } from './components/Footer';
import { PRODUCTS, BLOG_POSTS } from './constants';
import { Category, Product, BlogPost } from './types';
import { Filter, Rabbit, Cat, Dog, Bird, BookOpen, Skull, HeartHandshake, Gamepad2, ShoppingBag, PenTool, ArrowRight } from 'lucide-react';

// --- VIEWS ---

const HomeView: React.FC = () => {
    const navigate = useNavigate();
    // Get latest 3 blog posts
    const latestPosts = BLOG_POSTS.slice(0, 3);

    return (
        <>
            {/* HERO SECTION (Main Site) */}
            <div className="relative bg-pink-50 py-20 md:py-32 overflow-hidden">
                <div className="absolute top-10 left-[10%] text-pink-200 animate-bounce delay-100 hidden md:block"><Rabbit size={64} /></div>
                <div className="absolute bottom-20 right-[15%] text-pink-200 animate-bounce delay-700 hidden md:block"><Cat size={56} /></div>
                <div className="absolute top-20 right-[20%] text-pink-200 animate-pulse delay-300 hidden md:block"><Bird size={48} /></div>
                <div className="absolute bottom-10 left-[20%] text-pink-200 animate-bounce delay-500 hidden md:block"><Dog size={60} /></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-block bg-white px-6 py-2 rounded-full shadow-sm mb-6 transform -rotate-2">
                        <span className="text-pink-500 font-bold tracking-widest uppercase text-xs">Collezione Ufficiale</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-cartoony font-extrabold mb-6 leading-tight text-slate-800 drop-shadow-sm">
                        Roba bella per<br/>
                        <span className="text-pink-500 inline-block transform hover:scale-105 transition-transform cursor-default">brutte persone</span>
                    </h1>
                    
                    <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
                        Ironia graffiante, conigli dittatori e pecore che mangiano mollette. 
                        <br/>Tutto il disagio che cercavi, ora stampato su cotone.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mt-10 px-4">
                        <Link to="/catalogo" className="group relative bg-white border-4 border-pink-200 p-5 rounded-[2rem] hover:border-pink-500 hover:shadow-xl hover:shadow-pink-100 transition-all duration-300 text-left hover:-translate-y-1 flex items-center gap-5">
                            <div className="bg-pink-100 text-pink-500 p-4 rounded-2xl group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                <ShoppingBag size={32} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h3 className="font-cartoony font-bold text-2xl text-slate-800 group-hover:text-pink-600 transition-colors">Magliette</h3>
                                <p className="text-slate-500 text-sm leading-tight font-medium mt-1">Vestiti con il giusto disagio</p>
                            </div>
                        </Link>

                        <Link to="/catalogo?category=Libri" className="group relative bg-white border-4 border-slate-200 p-5 rounded-[2rem] hover:border-slate-800 hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 text-left hover:-translate-y-1 flex items-center gap-5">
                            <div className="bg-slate-100 text-slate-600 p-4 rounded-2xl group-hover:bg-slate-800 group-hover:text-white transition-colors">
                                <BookOpen size={32} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h3 className="font-cartoony font-bold text-2xl text-slate-800 group-hover:text-slate-800 transition-colors">Libri</h3>
                                <p className="text-slate-500 text-sm leading-tight font-medium mt-1">Letture per brutte persone</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                <div className="animate-fade-in-up space-y-16">
                    {/* The Manifesto Card */}
                    <div className="bg-white rounded-[3rem] p-8 md:p-16 border-4 border-pink-50 shadow-xl relative overflow-hidden max-w-5xl mx-auto">
                        <Skull className="absolute -top-6 -right-6 text-pink-50 w-48 h-48 transform rotate-12 opacity-50" />
                        <HeartHandshake className="absolute -bottom-6 -left-6 text-pink-50 w-48 h-48 transform -rotate-12 opacity-50" />

                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-cartoony font-bold text-slate-800 mb-8">
                                Non è moda.<br/>
                                <span className="text-pink-500">È legittima difesa.</span>
                            </h2>
                            <div className="prose prose-lg text-slate-600 font-medium mx-auto space-y-6 leading-relaxed">
                                <p>Benvenuti nel lato oscuro della tenerezza. Qui non si vendono semplici magliette o libri carini. Qui si vende la <strong>consapevolezza</strong>.</p>
                                <p>La consapevolezza che dietro quel musetto fremente si nasconde un dittatore spietato che giudica ogni tua scelta di vita. Hai mai guardato un coniglio negli occhi e visto il vuoto cosmico misto a un desiderio di distruzione? <strong>Noi sì.</strong></p>
                            </div>
                            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/catalogo?category=Libri" className="px-8 py-4 bg-slate-800 text-white rounded-2xl font-bold font-cartoony hover:bg-slate-700 transition shadow-lg hover:-translate-y-1">Istruisciti (Libri)</Link>
                                <Link to="/catalogo?category=Roba%20da%20indossare" className="px-8 py-4 bg-pink-500 text-white rounded-2xl font-bold font-cartoony hover:bg-pink-600 transition shadow-lg hover:-translate-y-1">Vestiti (Apparel)</Link>
                            </div>
                        </div>
                    </div>

                    {/* BLOG PREVIEW */}
                    <div className="mt-20">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-cartoony font-bold text-slate-800 flex items-center gap-3">
                                <PenTool className="text-pink-500" /> Il Diario del Disagio
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {latestPosts.map(post => (
                                <BlogCard key={post.id} post={post} onClick={() => navigate(`/blog/${post.id}`)} />
                            ))}
                        </div>
                        <div className="text-center">
                             <Link to="/blog" className="group relative inline-flex items-center gap-3 bg-white text-pink-600 px-8 py-4 rounded-full font-cartoony font-bold text-xl border-4 border-pink-500 shadow-lg hover:bg-pink-500 hover:text-white hover:shadow-pink-200 transition-all duration-300 transform hover:-translate-y-1">
                                <span>Leggi gli altri articoli del blog</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

interface CatalogViewProps {
    onProductClick: (p: Product) => void;
}

const CatalogView: React.FC<CatalogViewProps> = ({ onProductClick }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    
    // Parse category from URL query param
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    
    const selectedCategory = Object.values(Category).includes(categoryParam as Category) 
        ? (categoryParam as Category) 
        : null;

    // Filter Logic
    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter(product => {
            const matchesCategory = selectedCategory 
                ? product.category === selectedCategory 
                : product.category !== Category.BLOG; // Show all products if no category, but exclude blog type just in case

            const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                product.description.toLowerCase().includes(searchQuery.toLowerCase());
            
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const handleCategoryChange = (cat: Category | 'ALL') => {
        if (cat === 'ALL') {
             navigate('/catalogo');
        } else {
             navigate(`/catalogo?category=${encodeURIComponent(cat)}`);
        }
        setSearchQuery('');
    };

    return (
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full animate-fade-in" id="catalogo">
             <div className="flex flex-col items-center mb-12 space-y-6 pt-20">
                <h2 className="text-4xl font-cartoony font-bold text-slate-800">Catalogo Completo</h2>
                
                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3">
                    <button
                        onClick={() => handleCategoryChange('ALL')}
                        className={`px-6 py-3 rounded-2xl text-sm font-bold shadow-sm transition-all duration-300 border-2 ${!selectedCategory ? 'bg-pink-500 text-white border-pink-500 scale-105' : 'bg-white text-slate-500 border-slate-100 hover:border-pink-200'}`}
                    >
                        Tutto
                    </button>
                    {Object.values(Category).filter(c => c !== Category.HOME && c !== Category.BLOG).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`px-6 py-3 rounded-2xl text-sm font-bold shadow-sm transition-all duration-300 border-2 ${
                            selectedCategory === cat
                                ? 'bg-pink-500 text-white border-pink-500 transform scale-105 shadow-pink-200'
                                : 'bg-white text-slate-500 border-slate-100 hover:border-pink-200 hover:text-pink-500'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <input 
                    type="text" 
                    placeholder="Cerca un prodotto..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full max-w-md px-4 py-2 rounded-xl border-2 border-slate-200 focus:border-pink-500 outline-none"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} onClick={onProductClick} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 text-slate-500">Nessun prodotto trovato.</div>
                )}
                 {/* Link to Amazon Author Page - Only shown in Books */}
                 {(selectedCategory === Category.BOOKS) && (
                            <div className="col-span-full mt-8 flex justify-center">
                                <a 
                                    href="https://www.amazon.it/stores/Maia-Natacha-Fiorelli/author/B09YLP2N8R" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 bg-white border-2 border-pink-200 text-pink-600 px-8 py-4 rounded-2xl hover:bg-pink-50 transition-all shadow-sm hover:shadow-md"
                                >
                                    <BookOpen size={24} className="group-hover:scale-110 transition-transform" />
                                    <span className="font-cartoony font-bold text-lg">
                                        Vedi tutta la bibliografia su Amazon
                                    </span>
                                </a>
                            </div>
                        )}
            </div>
        </main>
    );
};

const BlogListView: React.FC = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = useMemo(() => {
        if (!searchQuery) return BLOG_POSTS;
        return BLOG_POSTS.filter(post => 
           post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
           post.content.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    return (
         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full animate-fade-in pt-32">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-cartoony font-bold text-slate-800 mb-4">Diario del Disagio</h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto">Cronache di vita vissuta tra peli, paglia e giudizi silenziosi.</p>
                <input 
                    type="text" 
                    placeholder="Cerca negli articoli..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mt-8 w-full max-w-md px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-pink-500 outline-none shadow-sm"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                    <BlogCard key={post.id} post={post} onClick={() => navigate(`/blog/${post.id}`)} />
                ))}
            </div>
         </main>
    );
};

const SinglePostView: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = BLOG_POSTS.find(p => p.id === id);

    if (!post) {
        return <div className="text-center py-40">Articolo non trovato! <button onClick={() => navigate('/blog')} className="text-pink-600 underline">Torna indietro</button></div>;
    }

    return (
        <BlogPostPage 
            post={post} 
            onBack={() => navigate('/blog')} 
            onNavigateToCategory={(cat) => navigate(`/catalogo?category=${encodeURIComponent(cat)}`)} 
        />
    );
};

// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Modals State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<'privacy' | 'cookie'>('privacy');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const openLegal = (tab: 'privacy' | 'cookie') => {
    setLegalModalTab(tab);
    setIsLegalModalOpen(true);
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onOpenGame={() => setIsGameOpen(true)}
        onLogoClick={() => navigate('/')}
      />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/catalogo" element={<CatalogView onProductClick={handleProductClick} />} />
        <Route path="/blog" element={<BlogListView />} />
        <Route path="/blog/:id" element={<SinglePostView />} />
        {/* Handle old query params redirect if needed, or catch all */}
        <Route path="*" element={<HomeView />} />
      </Routes>

      {/* Author Bio is now only on Home, or we can make it a footer element. For now, keep it on Home inside HomeView or shared footer? 
          Actually, the original design had it at the bottom of the catalog. Let's add it to Footer or keep it in HomeView/CatalogView.
          Let's put it in a separate block if we want it global, but usually it's better on Home.
          I'll add it to HomeView. 
      */}

      {/* Shared Footer Elements */}
      <div className="bg-pink-50 pb-10">
        <div id="autore" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-sm border-4 border-pink-100">
             {/* Background decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                 <div className="order-2 md:order-1">
                     <span className="bg-pink-100 text-pink-500 px-4 py-1 rounded-full font-bold uppercase text-xs shadow-sm mb-4 inline-block">L'Autrice</span>
                     <h2 className="text-4xl font-cartoony font-bold text-slate-800 mb-6">Maia Natacha Fiorelli</h2>
                     <div className="prose prose-lg text-slate-600 font-medium space-y-4 text-justify">
                         <p>Maia Natacha Fiorelli nasce a Buenos Aires il 3 novembre del 1977...</p>
                         <p>Si laurea a marzo del 2005 e a dicembre dello stesso anno apre un ambulatorio veterinario...</p>
                         <p className="text-pink-600 font-bold italic">Maia ama gli animali, la fotografia, la lettura e la scrittura e vorrebbe che le giornate durassero 48 ore.</p>
                     </div>
                 </div>
                 <div className="order-1 md:order-2 flex justify-center">
                     <div className="relative w-64 h-64 md:w-80 md:h-80">
                         <div className="absolute inset-0 bg-white rounded-3xl transform rotate-3 shadow-xl border-4 border-pink-100 flex items-center justify-center overflow-hidden">
                             <img src="https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/562381942_836083578997755_5680181863786713456_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Hf-_gbGb-4UQ7kNvwE0_zjS&_nc_oc=AdlsNf4w4U69J3dRhClsY46Exi1Nw_aw1nBPjqbhdwzPZYAUKBAnvXJFRDCi0Soae4U&_nc_zt=23&_nc_ht=scontent-mxp2-1.xx&_nc_gid=q_cW363xtixBE82_CGXx1A&oh=00_AfkLpiTE852Tcayftt1G_Muz_C44ffG5TDJxot65bivBZQ&oe=693F773E" alt="Maia Natacha Fiorelli" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                         </div>
                     </div>
                 </div>
             </div>
        </div>
      </div>

      <Footer onOpenPrivacy={() => openLegal('privacy')} onOpenCookie={() => openLegal('cookie')} />
      <CookieBanner onOpenPolicy={() => openLegal('cookie')} />

      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <GameModal isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
      <LegalModal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} defaultTab={legalModalTab} />
    </div>
  );
};

export default App;
