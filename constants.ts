import { Product, Category } from './types';

export const PRODUCTS: Product[] = [
  // --- LIBRI CARTACEI (BOOKS) ---
  {
    id: "book-brutte-persone-paperback",
    title: "I Conigli sono brutte persone",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/614kEQFvLKL.jpg",
    amazonUrl: "https://www.amazon.it/I-conigli-sono-brutte-persone/dp/B09Y2MNYYZ",
    category: Category.BOOKS,
    description: "Il manuale fondamentale. Tutto quello che il tuo coniglio pensa di te, messo nero su bianco.",
    quote: "La bibbia del disagio lagomorfo.",
    isBestSeller: true
  },
  {
    id: "book-cura-coniglio-paperback",
    title: "Come prendersi cura di un coniglio senza finire in analisi",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/61TxS+SAfgL.jpg",
    amazonUrl: "https://www.amazon.it/prendersi-coniglio-senza-finire-analisi/dp/B0BW3BJYLH",
    category: Category.BOOKS,
    description: "Una guida essenziale per la salute mentale del proprietario di conigli.",
    quote: "Perché il coniglio è carino, ma ti manda dallo psicologo.",
    isBestSeller: false
  },
  {
    id: "book-tutta-questa-paperback",
    title: "Tutta questa brutta gente",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/614kEQFvLKL.jpg", 
    amazonUrl: "https://www.amazon.it/stores/Maia-Natacha-Fiorelli/author/B09YLP2N8R",
    category: Category.BOOKS,
    description: "Storie di ordinaria follia animale e umana.",
    quote: "",
    isBestSeller: false
  },

  // --- EBOOK / KINDLE ---
  {
    id: "book-brutte-persone-kindle",
    title: "I Conigli sono brutte persone (eBook)",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/614kEQFvLKL.jpg",
    amazonUrl: "https://www.amazon.it/I-conigli-sono-brutte-persone-ebook/dp/B09Y2MNYYZ",
    category: Category.BOOKS,
    description: "La versione digitale per leggere del disagio ovunque tu sia.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "book-cura-coniglio-kindle",
    title: "Come prendersi cura di un coniglio... (eBook)",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/61TxS+SAfgL.jpg",
    amazonUrl: "https://www.amazon.it/prendersi-coniglio-senza-finire-analisi-ebook/dp/B0BW3BJYLH",
    category: Category.BOOKS,
    description: "Salute mentale in formato digitale. Leggero e portatile.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "book-tutta-questa-kindle",
    title: "Tutta questa brutta gente (eBook)",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/614kEQFvLKL.jpg",
    amazonUrl: "https://www.amazon.it/stores/Maia-Natacha-Fiorelli/author/B09YLP2N8R",
    category: Category.BOOKS,
    description: "Formato Kindle per le storie di brutta gente.",
    quote: "",
    isBestSeller: false
  },

  // --- ROBA DA INDOSSARE (APPAREL) ---
  {
    id: "auto-auzdxy",
    title: "Bunny Dad - T-Shirt",
    imageUrl: "https://m.media-amazon.com/images/I/712BRDQVF4L._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-Bunny-Dad-Maglietta/dp/B0CX23F231/ref=sr_1_3",
    category: Category.APPAREL,
    description: "Per il papà di coniglio che finge di comandare, ma in realtà esegue solo gli ordini.",
    quote: "Sono un Bunny Dad. La mia autorità è puramente decorativa.",
    isBestSeller: true
  },
  {
    id: "auto-xhghkf",
    title: "Rebel Bunny - Maglietta Donna",
    imageUrl: "https://m.media-amazon.com/images/I/61D+gqUauJL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Donna-Rebel-orecchie-coniglio-Maglietta/dp/B0CXKMPVP7/ref=sr_1_4",
    category: Category.APPAREL,
    description: "Per le coniglie ribelli e le loro umane che non seguono le regole (tranne quelle del coniglio).",
    quote: "Ribelle, soffice e letale.",
    isBestSeller: false
  },
  {
    id: "auto-c2z208",
    title: "Rebel Bunny - Canotta",
    imageUrl: "https://m.media-amazon.com/images/I/61AVKVOkIML._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Rebel-Bunny-orecchie-coniglio-Canotta/dp/B0CXKHLM9K/ref=sr_1_5",
    category: Category.APPAREL,
    description: "Freschezza estiva per mostrare i muscoli che usi per spostare i sacchi di fieno.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-zxg7iy",
    title: "Rebel Bunny - Felpa",
    imageUrl: "https://m.media-amazon.com/images/I/71RsJTlUzlL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Rebel-Bunny-orecchie-coniglio-Felpa/dp/B0CXKDPQD1/ref=sr_1_6",
    category: Category.APPAREL,
    description: "Calda, comoda e con quel tocco di anarchia lagomorfa che non guasta mai.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-r83oxd",
    title: "Rebel Bunny - Hoodie",
    imageUrl: "https://m.media-amazon.com/images/I/710Lq7t2XBL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Rebel-Bunny-orecchie-coniglio-Cappuccio/dp/B0CXK7Y2HD/ref=sr_1_7",
    category: Category.APPAREL,
    description: "Cappuccio su, mondo fuori. Perfetta per le giornate no.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-6iz6aa",
    title: "Rebel Bunny - Manica Raglan",
    imageUrl: "https://m.media-amazon.com/images/I/71-24JV6JeL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/orecchie-coniglio-Maglia-Maniche-Raglan/dp/B0CXK75GLD/ref=sr_1_8",
    category: Category.APPAREL,
    description: "Stile baseball per chi gioca nella squadra dei roditori.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-z2pnk6",
    title: "Rebel Bunny - T-Shirt",
    imageUrl: "https://m.media-amazon.com/images/I/61pC16Rd4FL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Rebel-Bunny-orecchie-coniglio-Maglietta/dp/B0CXK3NRQ3/ref=sr_1_9",
    category: Category.APPAREL,
    description: "Il classico must-have per il guardaroba di ogni schiavo umano.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-i8drx5",
    title: "Rebel Bunny - Hoodie Zip",
    imageUrl: "https://m.media-amazon.com/images/I/71dkLu-AhIL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Rebel-Bunny-orecchie-coniglio-Cappuccio/dp/B0CXJZC3Q4/ref=sr_1_10",
    category: Category.APPAREL,
    description: "Comoda zip per vestirsi velocemente quando senti un rumore sospetto dall'altra stanza.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-4kspka",
    title: "Bad Boy Coniglio - Hoodie",
    imageUrl: "https://m.media-amazon.com/images/I/81m3QYXnGBL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/bad-boy-Coniglio-Felpa-Cappuccio/dp/B0CXDZ2NV3/ref=sr_1_12",
    category: Category.APPAREL,
    description: "Lui è cattivo. Lui morde i cavi. Lui è il Bad Boy.",
    quote: "Nascondi i caricabatterie.",
    isBestSeller: false
  },
  {
    id: "auto-ogc73t",
    title: "Bad Boy Coniglio - Felpa",
    imageUrl: "https://m.media-amazon.com/images/I/81IedlW5CVL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-bad-Coniglio-Felpa/dp/B0CXDZ16B2/ref=sr_1_13",
    category: Category.APPAREL,
    description: "Sguardo torvo e orecchie basse. Attenzione.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-c74iur",
    title: "Bad Boy Coniglio - Canotta",
    imageUrl: "https://m.media-amazon.com/images/I/614j9hYA0kL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-bad-Coniglio-Canotta/dp/B0CXDYKDZ9/ref=sr_1_14",
    category: Category.APPAREL,
    description: "Per un look da duro, anche se poi gli dai i bacini sul naso.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-ti6zpd",
    title: "Bad Boy - T-Shirt",
    imageUrl: "https://m.media-amazon.com/images/I/71pYYg15OiL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-bad-Coniglio-Maglietta/dp/B0CXDWHQ74/ref=sr_1_19",
    category: Category.APPAREL,
    description: "L'uniforme ufficiale per chi convive con un teppista peloso.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-fluhst",
    title: "Bunny Mum - Hoodie",
    imageUrl: "https://m.media-amazon.com/images/I/81-lHWQskbL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Bunny-mum-Felpa-Cappuccio/dp/B0CX25SBM8/ref=sr_1_21",
    category: Category.APPAREL,
    description: "La divisa ufficiale della mamma coniglio. Tasca anteriore utile per nascondere premietti.",
    quote: "Bunny Mum: titolo nobiliare acquisito sul campo.",
    isBestSeller: true
  },
  {
    id: "auto-1xlic3",
    title: "Bunny Mum - T-Shirt",
    imageUrl: "https://m.media-amazon.com/images/I/71kPCxFdi6L._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-Bunny-mum-Maglietta/dp/B0CX242W4N/ref=sr_1_27",
    category: Category.APPAREL,
    description: "Il capo base. Se ne hai uno, ti serve questa.",
    quote: "",
    isBestSeller: true
  },
  {
    id: "auto-0a1hzh",
    title: "Bunny Mum - Felpa",
    imageUrl: "https://m.media-amazon.com/images/I/81lTCYnGTQL._AC_UL100_SR100,100_.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-Bunny-mum-Felpa/dp/B0CX23BMR1/ref=sr_1_31",
    category: Category.APPAREL,
    description: "Girocollo classico. Ottima per le riunioni Zoom dove non vuoi spiegare perché hai del fieno nei capelli.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-5x7fg3",
    title: "Boss - T-Shirt",
    imageUrl: "https://m.media-amazon.com/images/I/717RYkXPF1L._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/coniglio-boss-capo-sono-Maglietta/dp/B0CW1LBG54/ref=sr_1_37",
    category: Category.APPAREL,
    description: "Dillo a tutti chi comanda davvero.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-whd7gs",
    title: "Boss - Donna",
    imageUrl: "https://m.media-amazon.com/images/I/71Z82wVTilL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Donna-coniglio-boss-Maglietta-Collo/dp/B0CW1KN657/ref=sr_1_38",
    category: Category.APPAREL,
    description: "Eleganza sottomessa.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-p9krdt",
    title: "Boss - Hoodie",
    imageUrl: "https://m.media-amazon.com/images/I/81BnxDBpIVL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/coniglio-boss-capo-Felpa-Cappuccio/dp/B0CW1933TW/ref=sr_1_40",
    category: Category.APPAREL,
    description: "Felpa con cappuccio ufficiale del sindacato servitori di conigli.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-cq9f24",
    title: "I Love Animals - Felpa",
    imageUrl: "https://m.media-amazon.com/images/I/710oro5KKBL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-love-animals-Felpa/dp/B0CQPCMWVJ/ref=sr_1_43",
    category: Category.APPAREL,
    description: "Per chi ama gli animali più delle persone. Molto di più.",
    quote: "Le persone sono sopravvalutate. I conigli no.",
    isBestSeller: false
  },
  {
    id: "auto-5uqlqq",
    title: "I conigli sono brutte persone - T-shirt",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/614kEQFvLKL._AC_UL100_SR100,100_.jpg",
    amazonUrl: "https://www.amazon.it/I-conigli-sono-brutte-persone/dp/B09Y2MNYYZ/ref=rvi_d_sccl_5/257-6552221-1599542",
    category: Category.APPAREL,
    description: "Il manifesto programmatico. La verità scomoda che nessuno ha il coraggio di dire.",
    quote: "Sono carini, ma dentro sono dei piccoli dittatori.",
    isBestSeller: true
  },
  {
    id: "auto-gbq7zh",
    title: "I Conigli Sono Brutte Persone - T-Shirt",
    imageUrl: "https://m.media-amazon.com/images/I/61PVA-QZTuL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/conigli-sono-brutte-persone-Maglietta/dp/B0C3MFYC35/ref=sr_1_100",
    category: Category.APPAREL,
    description: "Cotone di qualità superiore per verità scomode superiori.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-4fq48d",
    title: "I Conigli Sono Brutte Persone - Felpa",
    imageUrl: "https://m.media-amazon.com/images/I/71EwOCKJ+JL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/conigli-sono-brutte-persone-Felpa/dp/B0C3MCCHK3/ref=sr_1_101",
    category: Category.APPAREL,
    description: "Calda, morbida e brutalmente onesta.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-gyor9v",
    title: "I Conigli Sono Brutte Persone - Donna",
    imageUrl: "https://m.media-amazon.com/images/I/61uGexBI4UL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Donna-conigli-sono-brutte-persone/dp/B0C3MC89Z3/ref=sr_1_102",
    category: Category.APPAREL,
    description: "Taglio sagomato per chi non ha paura del giudizio del proprio animale.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-q89a7z",
    title: "I Conigli Sono Brutte Persone - Hoodie",
    imageUrl: "https://m.media-amazon.com/images/I/81oDChJKkUL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/conigli-sono-brutte-persone-Cappuccio/dp/B0BWS24FCV/ref=sr_1_103",
    category: Category.APPAREL,
    description: "Cappuccio ampio per nascondere i morsi sulle orecchie.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-1s1akb",
    title: "I Conigli Sono Brutte Persone - Felpa",
    imageUrl: "https://m.media-amazon.com/images/I/71+FC77JczL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/conigli-sono-brutte-persone-Felpa/dp/B0BWS1JZJJ/ref=sr_1_104",
    category: Category.APPAREL,
    description: "Un classico intramontabile del disagio.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-g3695b",
    title: "I Conigli Sono Brutte Persone - Canotta",
    imageUrl: "https://m.media-amazon.com/images/I/61CMQfcTdPL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/conigli-sono-brutte-persone-Canotta/dp/B0BWS1FSCP/ref=sr_1_105",
    category: Category.APPAREL,
    description: "Per affrontare il caldo mentre il coniglio occupa il ventilatore.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-bgdofq",
    title: "I Conigli Sono Brutte Persone - T-Shirt",
    imageUrl: "https://m.media-amazon.com/images/I/71KnPnBmQOL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/conigli-sono-brutte-persone-Maglietta/dp/B0BPQTMT6J/ref=sr_1_113",
    category: Category.APPAREL,
    description: "Grigio melange, come l'umore del tuo coniglio.",
    quote: "",
    isBestSeller: false
  },
  
  // --- GATTI (CATS -> APPAREL) ---
  {
    id: "auto-ynzkbe",
    title: "Gatto & Gabbiano - Hoodie",
    imageUrl: "https://m.media-amazon.com/images/I/81YAp7m4UfL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Gatto-gabbiano-Brutta-gente-Cappuccio/dp/B0C573JFTM/ref=sr_1_90",
    category: Category.APPAREL,
    description: "Un'amicizia improbabile nata dal comune disprezzo per il genere umano.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-o4751w",
    title: "Gatto & Gabbiano - Felpa",
    imageUrl: "https://m.media-amazon.com/images/I/81zTWQb-RKL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Gatto-gabbiano-Brutta-gente-Felpa/dp/B0C572BY5L/ref=sr_1_96",
    category: Category.APPAREL,
    description: "Gatti e gabbiani: l'alleanza del male che non ti aspettavi.",
    quote: "",
    isBestSeller: false
  },

  // --- CANI (DOGS -> APPAREL) ---
  {
    id: "auto-ou18ps",
    title: "Il Capo Sono Io - Cane Stiloso",
    imageUrl: "https://m.media-amazon.com/images/I/61nYdnH7zKL._AC_UL100_SR100,100_.jpg",
    amazonUrl: "https://www.amazon.it/Capo-Sono-Cane-Stiloso-Maglietta/dp/B0CW619YKV/ref=rvi_d_sccl_4/257-6552221-1599542",
    category: Category.APPAREL,
    description: "Per cani con autostima e proprietari consapevoli del loro ruolo subordinato.",
    quote: "Cane stiloso, padrone orgoglioso.",
    isBestSeller: false
  },
  {
    id: "auto-3zud96",
    title: "Il Capo Sono Io - T-Shirt",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/61nYdnH7zKL._AC_UL100_SR100,100_.jpg",
    amazonUrl: "https://www.amazon.it/Capo-Sono-Cane-Stiloso-Maglietta/dp/B0CW619YKV/ref=rvi_d_sccl_4/257-6552221-1599542",
    category: Category.APPAREL,
    description: "Non c'è dubbio su chi comandi in casa (spoiler: ha 4 zampe).",
    quote: "",
    isBestSeller: false
  },

  // --- VOLATILI (BIRDS -> APPAREL) ---
  {
    id: "auto-9icdvj",
    title: "Gallina Ehilà - Manica Lunga",
    imageUrl: "https://m.media-amazon.com/images/I/81F+yJ8DpbL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Gallina-Ehil%C3%A0-Maglia-a-Manica/dp/B0C5745VHR/ref=sr_1_87",
    category: Category.APPAREL,
    description: "Un saluto pennuto che ti giudica silenziosamente.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-uarb59",
    title: "Gallina Ehilà - T-Shirt",
    imageUrl: "https://m.media-amazon.com/images/I/61YWIC3xhbL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-Gallina-Ehil%C3%A0-Maglietta/dp/B0C573YCL6/ref=sr_1_88",
    category: Category.APPAREL,
    description: "Ehilà! La gallina ti saluta, ma non vuole socializzare.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-sg5y4l",
    title: "Gallina Ehilà - Hoodie",
    imageUrl: "https://m.media-amazon.com/images/I/811tAON7GTL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Gallina-Ehil%C3%A0-Felpa-con-Cappuccio/dp/B0C573D95V/ref=sr_1_91",
    category: Category.APPAREL,
    description: "Calore e piume. Perfetta per il pollaio urbano.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-f33jbw",
    title: "Gallina Ehilà - Felpa",
    imageUrl: "https://m.media-amazon.com/images/I/81UnSmLHxNL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-Gallina-Ehil%C3%A0-Felpa/dp/B0C573CCSP/ref=sr_1_92",
    category: Category.APPAREL,
    description: "Girocollo classico con pollo sospettoso.",
    quote: "",
    isBestSeller: false
  },

  // --- ALTRI ANIMALI (OTHERS -> APPAREL) ---
  {
    id: "auto-7ck3x2",
    title: "Riccio Brutta Gente - Raglan",
    imageUrl: "https://m.media-amazon.com/images/I/61L2DKJWBvL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Riccio-Brutta-Maglia-Maniche-Raglan/dp/B0C5724SX7/ref=sr_1_97",
    category: Category.APPAREL,
    description: "Lui si chiude a riccio. Tu dovresti fare lo stesso con certe persone.",
    quote: "Spinosa verità.",
    isBestSeller: false
  },
  {
    id: "auto-pzs9cl",
    title: "Brutta Gente Trio - Manica Lunga",
    imageUrl: "https://m.media-amazon.com/images/I/71PqFFhPK9L._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Brutta-gente-3-Maglia-Manica/dp/B0C5723L2S/ref=sr_1_98",
    category: Category.APPAREL,
    description: "I tre dell'apocalisse animale riuniti in una sola maglietta.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-mtmv1k",
    title: "Brutta Gente Trio - Hoodie",
    imageUrl: "https://m.media-amazon.com/images/I/71fq8fyW6DL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Brutta-gente-3-Felpa-Cappuccio/dp/B0C57166M5/ref=sr_1_99",
    category: Category.APPAREL,
    description: "Massimo comfort per chi preferisce la compagnia del branco misto.",
    quote: "",
    isBestSeller: false
  },
  
  // --- ALTRI (RABBITS/GENERAL -> APPAREL) ---
  {
    id: "auto-ukhf4q",
    title: "I Love Animals - Canotta",
    imageUrl: "https://m.media-amazon.com/images/I/71Z53EaVWTL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-love-animals-Canotta/dp/B0CQP9MTKJ/ref=sr_1_49",
    category: Category.APPAREL,
    description: "Fresco amore per gli animali, perfetto per l'estate.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-t0h9la",
    title: "I Love Animals - Donna",
    imageUrl: "https://m.media-amazon.com/images/I/610KrgB8kqL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/love-animals-Maglietta-Collo/dp/B0CQP99JVG/ref=sr_1_50",
    category: Category.APPAREL,
    description: "Taglio femminile per dichiarare il tuo amore per il branco.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-pabet1",
    title: "I Love Animals - T-Shirt",
    imageUrl: "https://m.media-amazon.com/images/I/61Eb-OL9PmL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-love-animals-Maglietta/dp/B0CQPCBYB1/ref=sr_1_45",
    category: Category.APPAREL,
    description: "Semplice verità stampata su cotone: gli animali sono meglio.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-mv8ekj",
    title: "I Love Animals - Hoodie",
    imageUrl: "https://m.media-amazon.com/images/I/71k5tcQ4oXL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.it/I-love-animals-Felpa-Cappuccio/dp/B0CQPC7917/ref=sr_1_46",
    category: Category.APPAREL,
    description: "Un abbraccio caldo per chi preferisce abbracciare il cane piuttosto che i parenti.",
    quote: "",
    isBestSeller: false
  }
];