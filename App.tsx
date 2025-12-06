import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { Footer } from './components/Footer';
import { PRODUCTS } from './constants';
import { Category, Product } from './types';
import { Filter, Rabbit, Cat, Dog, Bird, ArrowDown, BookOpen, Skull, HeartHandshake } from 'lucide-react';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.HOME);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter Logic - Only applies when NOT in HOME view (unless search is active)
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // If we are on HOME and searching, search everything. 
      // If we are on specific category, filter by that category.
      const matchesCategory = selectedCategory === Category.HOME 
        ? true // In Home (with search) we might want to show everything matching search, or nothing if no search
        : product.category === selectedCategory;

      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // If simply browsing Home without search, return empty (we show the Manifesto instead)
      if (selectedCategory === Category.HOME && !searchQuery) return false;

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const isHomeView = selectedCategory === Category.HOME && !searchQuery;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Hero Section */}
      <div className="relative bg-pink-50 py-20 md:py-32 overflow-hidden">
        
        {/* Decorative Floating Animals */}
        <div className="absolute top-10 left-[10%] text-pink-200 animate-bounce delay-100 hidden md:block">
            <Rabbit size={64} />
        </div>
        <div className="absolute bottom-20 right-[15%] text-pink-200 animate-bounce delay-700 hidden md:block">
            <Cat size={56} />
        </div>
        <div className="absolute top-20 right-[20%] text-pink-200 animate-pulse delay-300 hidden md:block">
            <Bird size={48} />
        </div>
        <div className="absolute bottom-10 left-[20%] text-pink-200 animate-bounce delay-500 hidden md:block">
            <Dog size={60} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block bg-white px-6 py-2 rounded-full shadow-sm mb-6 transform -rotate-2">
                <span className="text-pink-500 font-bold tracking-widest uppercase text-xs">
                    Collezione Ufficiale
                </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-cartoony font-extrabold mb-6 leading-tight text-slate-800 drop-shadow-sm">
              Roba bella per<br/>
              <span className="text-pink-500 inline-block transform hover:scale-105 transition-transform cursor-default">brutte persone</span>
            </h1>
            
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
              Ironia graffiante, conigli dittatori e pecore che mangiano mollette. 
              <br/>Tutto il disagio che cercavi, ora stampato su cotone.
            </p>

            <div className="flex justify-center">
                <button 
                  onClick={() => {
                    const el = document.getElementById('catalogo');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-full font-cartoony font-bold text-lg hover:bg-slate-700 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
                >
                    Entra nella tana <ArrowDown size={20} />
                </button>
            </div>
        </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full" id="catalogo">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-col items-center mb-12 space-y-6">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.values(Category).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
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
        </div>

        {/* CONTENT SWITCHER: Home Manifesto OR Product Grid */}
        
        {isHomeView ? (
          /* --- HOME MANIFESTO SECTION --- */
          <div className="animate-fade-in-up space-y-16">
            
            {/* The Manifesto Card */}
            <div className="bg-white rounded-[3rem] p-8 md:p-16 border-4 border-pink-50 shadow-xl relative overflow-hidden max-w-5xl mx-auto">
              {/* Decoration */}
              <Skull className="absolute -top-6 -right-6 text-pink-50 w-48 h-48 transform rotate-12 opacity-50" />
              <HeartHandshake className="absolute -bottom-6 -left-6 text-pink-50 w-48 h-48 transform -rotate-12 opacity-50" />

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-cartoony font-bold text-slate-800 mb-8">
                  Non è moda.<br/>
                  <span className="text-pink-500">È legittima difesa.</span>
                </h2>
                
                <div className="prose prose-lg text-slate-600 font-medium mx-auto space-y-6 leading-relaxed">
                  <p>
                    Benvenuti nel lato oscuro della tenerezza. Qui non si vendono semplici magliette o libri carini. 
                    Qui si vende la <strong>consapevolezza</strong>.
                  </p>
                  <p>
                    La consapevolezza che dietro quel musetto fremente si nasconde un dittatore spietato che giudica ogni tua scelta di vita.
                    Hai mai guardato un coniglio negli occhi e visto il vuoto cosmico misto a un desiderio di distruzione? <strong>Noi sì.</strong>
                  </p>
                  <p className="bg-pink-50 p-6 rounded-2xl border-l-4 border-pink-500 text-slate-700 italic">
                    "Ogni acquisto su questo sito ha uno scopo nobile e disperato: finanziare l'impero del male dei nostri animali domestici."
                  </p>
                  <p>
                    Crocchette di lusso (perché quelle normali "non sono degne"), fieno di prima scelta importato dalle Alpi svizzere, 
                    e le costose sedute dallo psicologo per noi umani che li serviamo.
                  </p>
                  <p>
                    Non stiamo cercando di essere fashion. Stiamo solo cercando di sopravvivere al prossimo sguardo di disapprovazione del nostro coniglio nano.
                  </p>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                   <button 
                      onClick={() => setSelectedCategory(Category.BOOKS)}
                      className="px-8 py-4 bg-slate-800 text-white rounded-2xl font-bold font-cartoony hover:bg-slate-700 transition shadow-lg hover:-translate-y-1"
                   >
                     Istruisciti (Libri)
                   </button>
                   <button 
                      onClick={() => setSelectedCategory(Category.APPAREL)}
                      className="px-8 py-4 bg-pink-500 text-white rounded-2xl font-bold font-cartoony hover:bg-pink-600 transition shadow-lg hover:-translate-y-1"
                   >
                     Vestiti (Apparel)
                   </button>
                </div>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
               <div className="bg-pink-50 rounded-3xl p-8 text-center hover:shadow-lg transition duration-300">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-3xl">🐰</div>
                  <h3 className="font-cartoony font-bold text-xl mb-2 text-slate-800">Dittatura Morbida</h3>
                  <p className="text-slate-600 text-sm">Celebriamo la tirannia dei piccoli animali pelosi che comandano in casa nostra.</p>
               </div>
               <div className="bg-pink-50 rounded-3xl p-8 text-center hover:shadow-lg transition duration-300">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-3xl">💊</div>
                  <h3 className="font-cartoony font-bold text-xl mb-2 text-slate-800">Terapia di Gruppo</h3>
                  <p className="text-slate-600 text-sm">Indossare queste magliette è un modo per riconoscersi tra sopravvissuti.</p>
               </div>
               <div className="bg-pink-50 rounded-3xl p-8 text-center hover:shadow-lg transition duration-300">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-3xl">📚</div>
                  <h3 className="font-cartoony font-bold text-xl mb-2 text-slate-800">Cultura del Disagio</h3>
                  <p className="text-slate-600 text-sm">Libri che spiegano perché la tua vita è in mano a un essere da 1.5 kg.</p>
               </div>
            </div>

          </div>

        ) : (
          /* --- PRODUCT GRID SECTION --- */
          <div className="animate-fade-in">
            {searchQuery && (
              <div className="mb-8 text-center">
                 <p className="text-slate-500 font-medium">
                   Risultati ricerca per: <span className="text-pink-600 font-bold">"{searchQuery}"</span>
                 </p>
                 {selectedCategory === Category.HOME && (
                   <p className="text-xs text-slate-400 mt-1">(Stai cercando in tutto il catalogo)</p>
                 )}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        onClick={handleProductClick} 
                    />
                    ))
                ) : (
                    <div className="col-span-full flex justify-center">
                        <div className="text-center py-24 bg-pink-50 rounded-[3rem] border-4 border-white shadow-inner max-w-2xl w-full">
                            <div className="inline-block p-6 rounded-full bg-white mb-6 shadow-sm">
                            <Filter size={40} className="text-pink-300" />
                            </div>
                            <h3 className="text-2xl font-cartoony font-bold text-slate-800 mb-2">Ops! Deserto.</h3>
                            <p className="text-slate-500">I conigli si sono nascosti troppo bene.</p>
                            <button 
                            onClick={() => {setSelectedCategory(Category.HOME); setSearchQuery('');}}
                            className="mt-6 text-pink-500 font-bold hover:text-pink-700 bg-white px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
                            >
                            Torna alla Home
                            </button>
                        </div>
                    </div>
                )}

                {/* Link to Amazon Author Page - Only shown in Books or Search */}
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
          </div>
        )}

        {/* Info Section (Formerly Author) - Always visible at bottom */}
        <div id="autore" className="mt-32 bg-pink-50 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="order-2 md:order-1">
                    <span className="bg-white text-pink-500 px-4 py-1 rounded-full font-bold uppercase text-xs shadow-sm mb-4 inline-block">Il Progetto</span>
                    <h2 className="text-4xl font-cartoony font-bold text-slate-800 mb-6">Chi c'è dietro?</h2>
                    <div className="prose prose-lg text-slate-600 font-medium">
                        <p className="mb-4">
                            Tutto nasce da un libro e da una persona che vive in campagna con una collezione variabile di circa 27 animali (il numero è approssimativo per difetto).
                        </p>
                        <p>
                            Questo merchandising non serve a comprare ville alle Cayman, ma a finanziare le scatolette di Lagrigia, le cure per l'asma di Dottor Miao 
                            e la terapia necessaria per sopravvivere a Emiglio, il coniglio che crede di essere Napoleone.
                        </p>
                    </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 bg-white rounded-full transform rotate-6 shadow-xl border-4 border-pink-100 flex items-center justify-center overflow-hidden">
                             <img src="https://picsum.photos/seed/maia/600/800" alt="Maia" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-cartoony font-bold shadow-lg transform -rotate-3 border-2 border-white">
                            Maia Natacha Fiorelli
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>

      <Footer />
      
      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default App;