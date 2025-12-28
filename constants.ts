
import { Product, Category, BlogPost } from './types';

// --- BLOG POSTS (IL DIARIO DEL DISAGIO) ---
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-capodanno-botti",
    title: "Capodanno col botto ma possibilmente senza botti.",
    date: "28 Dicembre 2025",
    isoDate: "2025-12-28",
    author: "Maia N. Fiorelli",
    readTime: "3 min",
    imageUrl: "https://i.postimg.cc/SJTjfpQG/unnamed.jpg",
    excerpt: "Siamo fatti così, amiamo le tradizioni un po' stupide, specialmente quelle che implicano fare un baccano infernale. Ma per i nostri animali è l'inferno.",
    content: `
      <p>Siamo fatti così, amiamo le tradizioni un po' stupide, specialmente quelle che implicano fare un baccano infernale. I botti ci piacciono: sono colorati, rumorosi e soddisfano quel nostro lato infantile e vagamente idiota.</p>
      
      <p>Il problema è che per chiunque non abbia il pollice opponibile, la mezzanotte del 31 dicembre sembra l'inizio della Terza Guerra Mondiale.</p>
      
      <p>Ogni anno è la stessa ecatombe silenziosa. Cani che saltano recinzioni di due metri trasformandosi in atleti olimpici della disperazione per poi sparire nel nulla; gatti che si infilano in intercapedini da cui usciranno solo nel 2027; uccelli che muoiono di infarto in volo.</p>
      
      <h4 class="text-xl font-bold text-pink-600 mt-6 mb-3">Plotone e la carica dei 101... battiti</h4>
      <p>Persino Plotone, che con un nome così dovrebbe guidare la carica e non temere nulla, alla prima esplosione si trasforma in un ammasso di pelo tremante che cerca di mimetizzarsi in una buca. Già perché per i conigli e per tutti gli altri animali che avete in casa, un petardo non è folklore come invece sembra voi. Per loro è una minaccia, perciò molti scappano e si schiantano contro i muri; altri, semplicemente, decidono che il loro cuoricino non ne può più e muoiono di spavento sul colpo.</p>
      
      <p>Quindi, facciamo un patto: divertitevi, ma evitate di trasformare il vostro quartiere in una zona di guerra. Anche se i conigli sono delle carogne che probabilmente non si meritano la vostra pietà, cerchiamo di farli arrivare al 1° gennaio sani e salvi.</p>
      
      <p class="bg-pink-50 p-4 rounded-xl text-pink-600 font-bold italic mt-4 border-l-4 border-pink-400">Diamine, lasciamo che siano loro a trovare il modo migliore di ammazzarsi.</p>
    `
  },
  {
    id: "post-natale-albero",
    title: "Natale: Perché il tuo albero ha i minuti contati",
    date: "19 Dicembre 2025",
    isoDate: "2025-12-19",
    author: "Maia N. Fiorelli",
    readTime: "3 min",
    imageUrl: "https://scontent-mxp1-1.xx.fbcdn.net/v/t39.30808-6/594549942_879353974670715_904625935823656876_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QXOv_2571DQQ7kNvwGEO4zS&_nc_oc=Adn8Z1ASKeoNWwt0KBquoNxgDgYg-5SzUabmMJaE9Fu00HXy7_ofehaAjm1DzA3qwVA&_nc_zt=23&_nc_ht=scontent-mxp1-1.xx&_nc_gid=qdK8Uafba3GR0Wv9pFrjAQ&oh=00_Afmk2KBDkKz2U_ky473EZmAWHkO3GGgiRm1yzMmvoFQ56Q&oe=694AECC2",
    excerpt: "Diciamocelo: per noi umani il Natale è luci e regali. Per i nostri coinquilini pelosi è solo un esercizio nuovo con vari gradi di difficoltà.",
    content: `
      <p>Diciamocelo: per noi umani il Natale è luci e regali. Per i nostri coinquilini pelosi è solo un esercizio nuovo con vari gradi di difficoltà.</p>
      
      <p>Mentre guardo la mia gatta Fiordiluna scalare l’albero come se fosse l’Everest e Dottor Miao osservarla impassibile dal basso, mi dico: "chissà che casino gestire l'abete natalizio quando si hanno conigli in casa".</p>
      
      <p>Se il gatto medio è infatti un alpinista che punta alla cima per rovesciare la stella, il coniglio è un ingegnere della demolizione. Non perderebbe tempo a scalarlo. Lo smonterebbe pezzo per pezzo, partendo dalle radici:</p>
      
      <ul class="list-disc pl-5 space-y-2 text-slate-700 marker:text-pink-500 mb-4">
        <li><strong>I cavi delle luci:</strong> Il loro spuntino preferito (un classico "spaghetto" elettrico al gusto di corto circuito).</li>
        <li><strong>La struttura:</strong> Perché un albero deve cadere, è una questione di principio.</li>
        <li><strong>Il piedistallo:</strong> rosicchiato con la furia di chi ha una missione.</li>
      </ul>
      
      <h4 class="text-xl font-bold text-pink-600 mt-6 mb-3">Il verdetto della veterinaria</h4>
      <p>Se pensate di addobbare il territorio dei vostri lagomorfi, sappiate che non state facendo "atmosfera". State solo fornendo materiale da cantiere a dei vandali che non sanno cosa farsene della pace nel mondo. E se poi si fanno male fate anche lavorare me durante le feste!</p>
      
      <p>Per fortuna i miei barbari vivono in giardino e me ne guardo bene dal mettere un albero fuori, in balia delle loro menti contorte. Come minimo me lo ritroverei sul telto di casa.</p>
    `
  },
  {
    id: "post-conigli-pioggia",
    title: "Conigli bagnati e altri disastri: cronaca di una giornata di pioggia",
    date: "19 Dicembre 2025",
    isoDate: "2025-12-19",
    author: "Maia N. Fiorelli",
    readTime: "4 min",
    imageUrl: "https://i.postimg.cc/mDB70S5j/483509702-669297472343034-2119051174616120937-n.jpg",
    excerpt: "Nei giorni di pioggia, il mio giardino smette di essere un’oasi bucolica e diventa un girone dantesco umido, dove ogni animale mette in scena il suo personale psicodramma...",
    content: `
      <p>Nei giorni di pioggia, il mio giardino smette di essere un’oasi bucolica e diventa un girone dantesco umido, dove ogni animale mette in scena il suo personale psicodramma...</p>
      
      <p>Partiamo da Fiordiluna. Il suo hobby è chiedere di uscire, fissare l’acqua che cade con orrore, guardarmi con disprezzo (come se avessi rotto io il cielo) e rientrare. Tempo cinque minuti e resetta la memoria: vuole uscire di nuovo. È un loop infinito di miagolii e pretese.</p>
      
      <p>Poi c'è Gea, la cana, maestra del senso di colpa (il nostro). Lei non si limita a non voler uscire; lei mi accusa. Mi guarda con quella faccia da martire, per comunicarmi un solo concetto: "Madre, perché mi fai questo? Se mi amassi, spegneresti l'acqua". Perché La verità è che io mi vestirei anche con il mio bell'impermeabile e la porterai in giro, ma lei non vuole. La pioggia le dà fastidio e così usa le sue accuse silenziose per ingannare il tempo.</p>
      
      <h4 class="text-xl font-bold text-pink-600 mt-6 mb-3">E poi ci sono loro. Le brutte persone.</h4>
      <p>Mentre le pecore belano indignate dal riparo e le oche se la godono avvolte dalle loro piume impenetrabili, i conigli scelgono la via della psicopatia. Vi aspettereste che cerchino un riparo? Macché. I conigli restano sotto il diluvio. Immobili. Fradici.</p>
      
      <p>Con il pelo appiccicato che li fa sembrare degli Ewok usciti male, ti fissano attraverso la pioggia con aria di sfida. Non si lamentano, non cercano conforto. Stanno lì, nel fango, a dimostrarmi che loro sono superiori anche agli agenti atmosferici. Poi, se si ammalano, tocca a me curarli...</p>
      
      <p class="bg-pink-50 p-4 rounded-xl text-pink-600 font-bold italic mt-4 border-l-4 border-pink-400">Quindi, se vi sentite tristi per il maltempo, pensate ai miei conigli: bagnati, brutti e, come sempre, arrabbiati col mondo. Il loro odio è il migliore ombrello.</p>
    `
  },
  {
    id: "post-bosco-bagno",
    title: "Vivere nel bosco senza bagno? I miei conigli lo fanno da anni (e nessuno chiama gli assistenti sociali)",
    date: "15 Dicembre 2025",
    isoDate: "2025-12-15",
    author: "Maia N. Fiorelli",
    readTime: "4 min",
    imageUrl: "https://scontent-mxp1-1.xx.fbcdn.net/v/t39.30808-6/497115556_717636724175775_4435312892779509343_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cxgQd9IJJcgQ7kNvwGZZNMi&_nc_oc=AdlWlKgk49u0-7MgerDnRRG1CXa9TcI5itP9hgM9fv7dlFv4dJT8PZxLrk86fRDbMp0&_nc_zt=23&_nc_ht=scontent-mxp1-1.xx&_nc_gid=da0Rt4PgyEufMQ97FoGGYg&oh=00_Afm7CruUEIK_ofA2SRzIYH_rCnN2FpS4mxjpX1DvaSKbhw&oe=69461F36",
    excerpt: "Il web è in fiamme. Tutti parlano della famiglia 'hippie' in Abruzzo. Io leggo e sorrido. Perché tutto questo scalpore per due umani che decidono di vivere nel disagio? Venite nel mio giardino.",
    content: `
      <p>Il web è in fiamme. Non letteralmente, purtroppo – quello risolverebbe il problema del freddo umido che mi entra nelle ossa mentre cerco di convincere Plotone che l'antibiotico non è veleno per topi – ma metaforicamente. Tutti parlano della famiglia "hippie" in Abruzzo.</p>
      
      <p>Per chi si fosse perso l'ultima puntata di "Umani che fanno cose strane mentre io cerco di non far morire creature suicide": una coppia anglo-australiana ha deciso di vivere in un casolare sperduto tra i boschi abruzzesi, rifiutando la modernità. Niente luce, niente gas e, orrore degli orrori per il popolo dei social, niente bagno. Apriti cielo. Sono intervenuti gli assistenti sociali, il tribunale dei minori e, ovviamente, il Gran Giurì di Facebook, diviso equamente tra chi grida allo scandalo igienico-sanitario e chi li dipinge come eroi della libertà bucolica che sfidano il sistema.</p>
      
      <p>Io leggo e sorrido. Un sorriso amaro, da veterinaria che ha appena estratto un filo d'erba dall'occhio di un cane. Perché tutto questo scalpore per due umani che decidono di vivere nella sporcizia e nel disagio? <strong>Venite nel mio giardino.</strong></p>
      
      <h4 class="text-xl font-bold text-pink-600 mt-6 mb-3">Rewilding estremo (ovvero: Logan)</h4>
      <p>Qui, nella "Terra dei Conigli", vige da sempre lo stesso identico regime. Prendete Logan. Lui è il vero pioniere del rewilding estremo. Logan ha a disposizione ripari asciutti, paglia pulita e cibo servito in ciotole di ceramica. Eppure? Eppure sceglie metodicamente di vivere in un tunnel sotterraneo umido, buio e potenzialmente franoso che ha scavato con le sue stesse zampe, rifiutando ogni comfort moderno. Se gli proponessi un bagno piastrellato, probabilmente lo userebbe come latrina pubblica per poi dormirci di fianco, nel fango.</p>
      
      <p>La verità è che la "vita nel bosco" piace solo a chi non l'ha mai fatta. O ai conigli. I conigli adorano lo squallore. Logan non ha bisogno di dichiarazioni ideologiche per rifiutare la civiltà. Lui è il rifiuto della civiltà. Quando piove e il giardino diventa una palude, mentre io bestemmio in aramaico cercando di non scivolare nel fango con gli stivali, lui è lì. Immobile. Bagnato fradicio. Con l'aria di chi ti giudica perché hai l'ombrello.</p>
      
      <h4 class="text-xl font-bold text-pink-600 mt-6 mb-3">Due pesi, due misure</h4>
      <p>La differenza tra la famiglia in Abruzzo e i miei lagomorfi è che, quando i conigli decidono di vivere "allo stato brado" e di riempirsi di parassiti, nessuno chiama i servizi sociali. Chiamano me. E io, invece di polemizzare su Facebook, devo armarmi di pazienza, retino e antiparassitario, e andare a salvare questi "eroi della natura" dalle conseguenze delle loro stesse scelte di vita discutibili.</p>
      
      <p>Quindi, cari indignati del web, calmatevi. Vivere senza bagno non è una scelta rivoluzionaria. È una scomodità bestiale. Chiedetelo alle mie pecore, Lulù e Spirit, che pur avendo un intero prato a disposizione, preferiscono cagare esattamente sul vialetto di cemento dove devo passare io. Quella non è libertà. È, molto semplicemente, essere delle brutte persone.</p>
      
      <p class="bg-pink-50 p-4 rounded-xl text-pink-600 font-bold italic mt-4 border-l-4 border-pink-400">Ps: Se qualcuno degli assistenti sociali volesse passare di qui, ho un paio di conigli da segnalare per "condotta immorale e vagabondaggio". Citofonare Fiorelli.</p>
    `
  },
  {
    id: "post-plotone",
    title: "Dal mondo delle idee a full metal jacket: come un cambio di vocale ha trasformato un coniglio filosofo in spietato dittatore",
    date: "15 Dicembre 2025",
    isoDate: "2025-12-15",
    author: "Maia N. Fiorelli",
    readTime: "3 min",
    imageUrl: "https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/536676595_793063703299743_7859167366248459174_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JBfTAEZ9ZCQQ7kNvwHL5tjL&_nc_oc=Adk9GEn3ita7B8v6egcPCcIg4Mk4KvkkbTTncYqrF_kePGqCePJn85rSyhGW4XY_phM&_nc_zt=23&_nc_ht=scontent-mxp2-1.xx&_nc_gid=Qnzcn5HlwTHFh9XGAB5nzQ&oh=00_AfkyNalRK8O04ctBWA7Ca4WVT36ykn5b_6_oK4cRITNVeA&oe=69461493",
    excerpt: "Tutto è iniziato con un nome, o meglio, con un errore burocratico. Doveva chiamarsi Platone... ma la realtà ha deciso di prenderci in giro: benvenuto Plotone.",
    content: `
      <p>Tutto è iniziato con un nome, o meglio, con un errore burocratico. Quando le intenzioni erano nobili, quasi accademiche. Doveva chiamarsi Platone: era quello il nome che gli avevano dato i volontari che se ne prendevano cura. Ci piaceva l’idea di un coniglio saggio, che meditasse sul mondo delle idee mentre sgranocchiava un filo d’erba.</p>
      
      <p>Ma, come spesso accade quando si ha a che fare con i lagomorfi, la realtà ha deciso di prenderci in giro. Già al rifugio avevano sbagliato a scriverlo: sul foglio c’era scritto Plutone. E diciamocelo, Plutone è il dio degli inferi, è qualcosa di lugubre, di oscuro. Un presagio, forse? Assolutamente sì.</p>
      
      <p>Perché una volta messo piede (o zampa) nel suo nuovo regno, abbiamo capito subito che di filosofico non c’era proprio nulla. E nemmeno di "infernale" nel senso classico. C’era qualcosa di molto più pragmatico e militare.
      Da un cambio di vocale siamo passati a un cambio di paradigma: <strong>benvenuto Plotone</strong>.</p>
      
      <h4 class="text-xl font-bold text-pink-600 mt-6 mb-3">L’ascesa del regime</h4>
      <p>Plotone non è un coniglio aggressivo. Per carità, non vorrei mai diffamare la sua immagine pubblica. Diciamowe che è... assertivo. Avete presente quei leader che non chiedono il permesso per governare, ma si limitano a occupare il palazzo presidenziale? Ecco.</p>
      <p>Plotone è giovane, è forte, e ha capito subito come funziona la politica del giardino. In men che non si dica è diventato il Re, instaurando una monarchia assoluta condivisa con la sua consorte, la Regina Eimeria. Insieme, gestiscono il grosso del territorio, godendosi quella libertà che solo i dittatori (e i conigli giovani) sanno apprezzare.</p>
      
      <h4 class="text-xl font-bold text-pink-600 mt-6 mb-3">La geopolitica del giardino (ovvero: dividi et impera)</h4>
      <p>L’arrivo di Plotone ha costretto a ridisegnare la mappa geopolitica dei nostri spazi verdi. Non c’è più la libera circolazione delle merci e delle palline di cacca. C’è stata una vera e propria compartimentazione:</p>
      <ul class="list-disc pl-5 space-y-2 text-slate-700 marker:text-pink-500 mb-4">
        <li><strong>La Svizzera (Zona demilitarizzata)</strong>: Da una parte abbiamo isolato Tsuki e Mr. Big. Loro sono il lato pacifico dei conigli, quelli che guardano il telegiornale e scuotono la testa davanti alla violenza.</li>
        <li><strong>L’Esilio Dorato</strong>: Dall’altra parte c’è Logan. Lui rappresenta il lato selvaggio, il vecchio guerriero. Ma siccome è anziano, se lo lasciassimo nel mischione, finirebbe male. Logan è separato per il suo bene, perché altrimenti le "nuove leve" come Plotone lo menerebbero senza pietà.</li>
      </ul>
      
      <p>Quindi eccoci qui. Pensavamo di aver adottato un pensatore greco, ci siamo ritrovati con un comandante di plotone che pattuglia i confini con Eimeria al suo fianco.
      Plotone si gode la sua giovinezza e la sua forza, e noi ci godiamo lo spettacolo di questa nuova tirannia pelosa.</p>
      
      <p class="bg-pink-50 p-4 rounded-xl text-pink-600 font-bold italic mt-4 border-l-4 border-pink-400">Perché, ricordatevelo sempre: i conigli non cercano la democrazia. Cercano il dominio totale. E Plotone, con quel nome lì, non poteva che darci ragione.</p>
    `
  },
  {
    id: "post-kenny",
    title: "Hanno ammazzato Kenny! (O di come mi sono vestita da sacco della spazzatura per sopravvivere ai conigli)",
    date: "13 Dicembre 2025",
    isoDate: "2025-12-13",
    author: "Maia N. Fiorelli",
    readTime: "4 min",
    imageUrl: "https://i.postimg.cc/LsJ5LzXQ/Maia-impermeabile.jpg", 
    excerpt: "Siamo andati all'Artigiano in Fiera. Sapete, quella bolgia dantesca dove entri per un salame ed esci con un impermeabile arancione che ti fa sembrare un personaggio di South Park.",
    content: `
      <p>Siamo andati all'Artigiano in Fiera. Sapete, quella bolgia dantesca che si tiene ogni dicembre vicino a Milano, dove entri per comprare un salame e esci con un servizio di piatti uzbeki e la convinzione di aver fatto l'affare della vita.</p>
      <p>Io, però, non cercavo piatti. <strong>Io ho trovato Lui.</strong></p>
      <p>Un impermeabile. Non un impermeabile qualunque, ma una folgorazione arancione, lucida, prepotente. Mentre pagavo con gli occhi a cuore, Marco mi osservava con quel suo sopracciglio alzato da uomo di lettere che giudica la frivolezza del mondo. «Amore,» mi ha detto con la delicatezza di un elefante in cristalleria, «stai letteralmente pagando per comprare una specie di sacco della spazzatura colorato.»</p>
      
      <p>Lui non capisce. Gli uomini non capiscono mai la poesia di un acquisto impulsivo. Nella mia testa, io non ero un rifiuto ambulante. Io mi vedevo già scendere dalla macchina sotto il diluvio universale per andare a fare le visite a domicilio. Immaginavo di suonare ai campanelli dei clienti in una giornata grigia e triste, portando un’esplosione di colore, un raggio di sole sintetico che avrebbe reso gioiosa anche la diagnosi di una dermatite o il rinnovo di un vaccino. "Ecco la dottoressa! È arrivata l'allegria idrorepellente!".</p>
      
      <h4 class="text-xl font-bold text-pink-600 mt-6 mb-3">La realtà allo specchio</h4>
      <p>Poi però sono tornata a casa, l'ho provato davanti allo specchio, ho tirato su il cappuccio e ho capito. Marco aveva torto sul sacco della spazzatura, ma io forse avevo esagerato con l'ottimismo cromatico. Non sembravo Mary Poppins. <strong>Sembravo Kenny di South Park.</strong></p>
      <p>E sapete una cosa? Va benissimo così. Perché se Kenny muore in ogni puntata, io rischio la vita ogni volta che entro nel mio giardino. Chiedetelo a quel bastardo di Logan, il più ingrato dei miei conigli.</p>

      <h4 class="text-xl font-bold text-pink-600 mt-6 mb-3">La strategia del colore</h4>
      <p>E qui veniamo alla vera, geniale, funzione tattica di questo acquisto, quella che giustifica ogni euro speso e zittisce ogni marito scettico.
      Di che colore è la pipì dei conigli? Chi mi segue lo sa (e chi non lo sa, beato lui): la pipì di coniglio varia dal giallo, all'arancione intenso, fino al rosso sangue. I conigli, essendo notoriamente brutte persone, amano esprimere il loro dissenso – o semplicemente la loro esistenza – innaffiandoti. Se ti vesti di bianco, sei finita. Se ti vesti di nero, si vede la polvere del fieno.</p>
      
      <p>Ma se ti vesti di arancione lucido... ah! <strong>Scacco matto!</strong> Questo non è un impermeabile. Questa è una divisa per la guerra chimica. Se un coniglio mi fa pipì addosso su questo tessuto, divento un tutt'uno con l'onta. Sono tinta su tinta. Sono invisibile al degrado.</p>
      
      <p>Quindi ridete pure del mio sacco della spazzatura griffato. Quando sarò l'unica a uscire indenne e asciutta da un attacco a sorpresa di Logan, mentre voi sarete lì a smacchiare i jeans, sarò io a ridere. O forse no, perché sembrerò comunque un personaggio dei cartoni animati destinato a una brutta fine. Ma almeno, sarò un personaggio asciutto e coloratissimo.</p>
      <p class="bg-pink-50 p-4 rounded-xl text-pink-600 font-bold italic mt-4 border-l-4 border-pink-400">"Hanno ammazzato Maia! Brutti bastardi!"</p>
    `
  },
  {
    id: "post-blablabla",
    title: "BlaBlaBla: cronache di un catorcio chiacchierone",
    date: "13 Dicembre 2025",
    isoDate: "2025-12-13",
    author: "Maia N. Fiorelli",
    readTime: "3 min",
    imageUrl: "https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/571283279_845469701392476_8698690387579433516_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=j9FF2t5nvtMQ7kNvwHLcX95&_nc_oc=AdlhP2KQDa2gDRANVo2lB5hlVw3Qr8xJ5apDNczL_LaCnCDe4wZv-nmC4meUS3pkZGM&_nc_zt=23&_nc_ht=scontent-mxp2-1.xx&_nc_gid=ZkWQwHNd0PlGEGv8b2zNOQ&oh=00_AflsrUH6d2wuQA7bqCpFREU-wEEGJ6SyzDeZcNW-tclIUg&oe=6943706D",
    excerpt: "Ci sono vuoti che vanno riempiti, e non parlo solo di quelli nello stomaco delle Bambine. Parlo del vuoto lasciato da Romeo. Ed è così che è arrivata BlaBlaBla.",
    content: `
      <p>Ci sono vuoti che vanno riempiti, e non parlo solo di quelli nello stomaco delle Bambine (le pecore) o del mio bisogno patologico di complicarmi la vita. Parlo del vuoto lasciato da Romeo.</p>
      <p>Lo scorso gennaio, il nostro oco guerriero, l’indomito Sceriffo del giardino, ci ha lasciati. E siccome la natura aborre il vuoto, ma soprattutto T-Rex aborre la solitudine, ci siamo attivati per trovarle una nuova compagnia.</p>
      <p>La log