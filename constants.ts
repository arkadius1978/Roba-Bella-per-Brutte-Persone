
import { Product, Category, BlogPost } from './types';

// --- BLOG POSTS (IL DIARIO DEL DISAGIO) ---
export const BLOG_POSTS: BlogPost[] = [
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
      
      <p>Per fortuna i miei barbari vivono in giardino e me ne guardo bene dal mettere un albero fuori, in balia delle loro menti contorte. Come minimo me lo ritroverei sul tetto di casa.</p>
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
      <p>Plotone non è un coniglio aggressivo. Per carità, non vorrei mai diffamare la sua immagine pubblica. Diciamo che è... assertivo. Avete presente quei leader che non chiedono il permesso per governare, ma si limitano a occupare il palazzo presidenziale? Ecco.</p>
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
      <p>La logica avrebbe suggerito di trovare un bell’esemplare sano, magari un principe azzurro pennuto. Ma ehi, guardatevi intorno: questo è il giardino dei casi disperati. La normalità qui è bandita!</p>
      
      <h4 class="text-xl font-bold text-pink-600 mt-6 mb-3">Benvenuta BlaBlaBla</h4>
      <p>Ed è così che è arrivata <strong>BlaBlaBla</strong>.</p>
      <p>Diciamocelo subito, senza girarci attorno: BlaBlaBla non è esattamente un’oca da copertina. Se cercate la bellezza apollinea, avete sbagliato indirizzo.
      Questa nuova creatura è stata recuperata da una situazione di disagio in cui, povera stella, veniva bullizzata pesantemente dalle altre oche. È stata, per usare un eufemismo, "ghettizzata". Perché? Perché anche nel mondo animale, se sei diverso, le prendi.</p>
      <p>E BlaBlaBla è diversa forte. Ha dei problemi fisici evidenti: falangi storte che fanno crescere le piume di un’ala al contrario, zoppica vistosamente e, in generale, sembra un puzzle montato da qualcuno che aveva perso le istruzioni.</p>
      <p class="font-bold italic text-slate-700 my-4">Insomma, un catorcio. Un catorcio DOC.</p>
      
      <h4 class="text-xl font-bold text-pink-600 mt-6 mb-3">La strategia della simpatia</h4>
      <p>All'inizio ero scettica. T-Rex, dal canto suo, ci ha messo un po' ad accettarla. La guardava dall'alto della sua integrità fisica con quell'aria da matrona severa. Ma BlaBlaBla ha sfoderato la sua arma segreta: la simpatia patetica. Si è messa d'impegno, ha sopportato le prime diffidenze e si è fatta letteralmente in quattro per farsi benvolere.</p>
      <p>E alla fine, persino il cuore di pietra di T-Rex si è sciolto. Ora sono lì, la regina e il giullare zoppicante, che condividono il prato.</p>
      
      <p><strong>Ma perché questo nome ridicolo?</strong></p>
      <p>Semplice. Questa oca è una gran chiacchierona. Non starnazza nel modo marziale e aggressivo di Romeo. Lei parla. Commenta. Appena sente la presenza umana, attacca bottone. Emette un suono continuo, un sottofondo sonoro che ti accompagna mentre cerchi di non calpestare le solite mine antiuomo lasciate dai conigli.</p>
      <p>È un suono felice, credo. È il suono di chi, dopo essere stato l'ultimo degli ultimi, bullizzato e messo all'angolo perché "sbagliato", ha trovato finalmente un posto dove avere le piume storte e camminare male non è un difetto, ma solo una caratteristica come un'altra.</p>
      <p class="bg-pink-50 p-4 rounded-xl mt-4 border-l-4 border-pink-400">Benvenuta nel giardino, BlaBlaBla. Ora fai ufficialmente parte della nostra banda di disadattati. Cerca solo di non farti investire dalle pecore.</p>
    `
  },
  {
    id: "post-mr-big",
    title: "Mr. Big: ovvero come un chilo e mezzo di ormoni ha quasi distrutto il giardino",
    date: "13 Dicembre 2025",
    isoDate: "2025-12-13",
    author: "Maia N. Fiorelli",
    readTime: "3 min",
    imageUrl: "https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/568949045_849805024284143_6404322187829837797_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MncBuU5YNUMQ7kNvwG7QwcB&_nc_oc=Adm367IrShAlhgfju95KyIZWi9mDP24QR4oh0cC8_1S1BImeZ0K7bF6HB4nUa9uXPcg&_nc_zt=23&_nc_ht=scontent-mxp2-1.xx&_nc_gid=BGNCgD6Y52MomjyloLRR0Q&oh=00_AfkpTK2xrmWrwxmMDyMbpkEKAkKN__J6VsavKIa-j0dDww&oe=6942F97F",
    excerpt: "Storia di un nanetto di un chilo e mezzo con un ego spropositato e di come Tsuki, la coniglia zen, gli ha insegnato l'educazione a suon di botte.",
    content: `
      <p>Avete presente quella palletta di pelo bianco e nero che compare nella mia foto sul blog? Quello che sembra guardarmi con adorazione (o forse sta solo calcolando la traiettoria per staccarmi un dito)? Ecco, quello è <strong>Mr. Big</strong>.</p>
      <p>Il nome, ovviamente, è un omaggio a <em>Sex and the City</em>, ma ammettiamolo: è pura ironia. Mr. Big è un nanetto di un chilo e mezzo scarso. Un concentrato di ego spropositato stipato in un corpo da peluche tascabile.</p>
      <p>La sua storia inizia come quella di tanti altri "catorci" che finiscono nel mio giardino: dopo anni di galera in una gabbia, i vecchi proprietari hanno deciso di regalargli una vita migliore. "Lo mandiamo in campagna", hanno detto. "Sarà libero", hanno pensato. Poveri illusi. Liberare un coniglio non castrato in un giardino è come lanciare una bomba a mano senza spoletta in un negozio di cristalli e sperare che non si rompa niente.</p>
      
      <h4 class="text-xl font-bold text-pink-600 mt-6 mb-3">L'ormone impazzito</h4>
      <p>Appena Mr. Big ha toccato l'erba, non ha pensato "Oh, che meraviglia la natura". No. Ha pensato: <em>"Dove sono le femmine?"</em>. Perché il nostro Mr. Big, all'epoca, era integro. E quando dico integro, intendo che ragionava con due sole cose: lo stomaco e quei due piccoli generatori di caos che si portava tra le gambe.</p>
      <p>La vittima designata? <strong>Tsuki</strong>.</p>
      <p>Tsuki è una coniglia pacifica, una creatura zen che probabilmente in un'altra vita era un monaco tibetano. Ma Mr. Big non voleva meditare. Mr. Big voleva consumare. Per giorni, questo nanetto erotomane ha perseguitato la povera Tsuki con l'insistenza di uno stalker telefonico e la grazia di un martello pneumatico. La inseguiva ovunque, convinto di essere un dono di Dio all'universo femminile lagomorfo.</p>
      
      <h4 class="text-xl font-bold text-pink-600 mt-6 mb-3">La vendetta zen</h4>
      <p>E Tsuki? Tsuki ha sopportato. Ha fatto la vaga. Ha provato a spiegargli che "no è no". Poi, come succede alle donne (e alle coniglie) quando la misura è colma, è scattata la violenza.</p>
      <p>Un bel giorno, stanca di essere l'oggetto del desiderio di quel tappo infoiato, Tsuki si è girata e lo ha corcato di botte. Ma di quelle vere. Il risultato? Mr. Big è finito in infermeria, pesto e ridimensionato nella sua virilità, a meditare sui suoi errori (o più probabilmente a chiedersi perché la coniglia dei suoi sogni fosse diventata Mike Tyson).</p>
      
      <p>Abbiamo dovuto rimetterlo in gabbia per curarlo, un passo indietro che sapeva di sconfitta, ma necessario. E lì, mentre le ferite guarivano, abbiamo preso la decisione fatidica. <strong>Zac.</strong> Addio palline, addio manie di grandezza, addio delirio di onnipotenza sessuale.</p>
      <p>Oggi Mr. Big è un coniglio diverso. O meglio, è sempre un coniglio – e quindi, per definitione, una "brutta persona" pronta a giudicarti – ma almeno ha smesso di molestare Tsuki. La pace dei sensi (imposta chirurgicamente) ha funzionato. Ora vivono insieme in giardino, vanno d'amore e d'accordo. Lui probabilmente crede ancora di essere il re del mondo, e noi gli lasciamo questa illusione.</p>
      <p class="bg-pink-50 p-4 rounded-xl text-pink-600 font-bold italic mt-4 border-l-4 border-pink-400">In fondo, in un chilo e mezzo, c'è spazio per un sacco di autostima.</p>
    `
  }
];

export const PRODUCTS: Product[] = [
  // --- LIBRI (BOOKS) ---
  {
    id: "book-brutte-persone",
    title: "I Conigli sono brutte persone",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/614kEQFvLKL.jpg",
    amazonUrl: "https://www.amazon.it/I-conigli-sono-brutte-persone/dp/B09Y2MNYYZ",
    category: Category.BOOKS,
    description: "Una veterinaria con l’impulso adottivo, una trentina di animali, un marito paziente... Il libro è costruito come un diario divertente sulla convivenza tra bipedi, quadrupedi, pelosi e pennuti. Storie di cani, gatti, galline, oche, pecore e conigli trattate con frizzante ironia, ma anche ricordi del passato e riflessioni profonde sul dolore, la vita e la morte. I conigli sono brutte persone è un romanzo coinvolgente che si legge in un lampo!",
    quote: "La bibbia del disagio lagomorfo.",
    isBestSeller: true
  },
  {
    id: "book-cura-coniglio",
    title: "Come prendersi cura di un coniglio senza finire in analisi",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/61TxS+SAfgL.jpg",
    amazonUrl: "https://www.amazon.it/prendersi-coniglio-senza-finire-analisi/dp/B0BW3BJYLH",
    category: Category.BOOKS,
    description: "In questo libro troverai molti suggerimenti utili per la cura del tuo coniglio. Si tratta di un manuale divertente scritto in chiave ironica, ma che prende sul serio l'argomento. Scritto da una veterinaria appassionata di animali da compagnia e innamorata dei conigli, diventerà una piacevole lettura per imparare l'arte della cura dei conigli per una adozione consapevole.",
    quote: "Perché il coniglio è carino, ma ti manda dallo psicologo.",
    isBestSeller: false
  },
  {
    id: "book-tutta-questa",
    title: "Tutta questa brutta gente",
    imageUrl: "https://m.media-amazon.com/images/I/618ALZYIHpL.jpg",
    amazonUrl: "https://www.amazon.it/Tutta-questa-brutta-Natacha-Fiorelli/dp/B0C9SP2SWH",
    category: Category.BOOKS,
    description: "Tra cani, gatti, pecore, oche e galline, i conigli la fanno da padrone nelle preoccupazioni della nostra protagonista: una veterinaria che ce la mette tutta a mantenere l’armonia in giardino, tenendo conto della natura di ognuno. È proprio su questo punto che il libro si fa introspettivo e gli animali diventano un mezzo per riflettere, per non snaturare e non snaturarsi. Un libro divertente, ironico e dal ritmo incalzante che si legge in un baleno!",
    quote: "Non siamo soli nel disagio.",
    isBestSeller: false
  },

  // --- ROBA DA INDOSSARE (APPAREL) ---
  {
    id: "auto-auzdxy",
    title: "Bunny Dad - T-Shirt",
    imageUrl: "https://m.media-amazon.com/images/I/712BRDQVF4L.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-Bunny-Dad-Maglietta/dp/B0CX23F231/ref=sr_1_3",
    category: Category.APPAREL,
    description: "Per il papà di coniglio che finge di comandare, ma in realtà esegue solo gli ordini.",
    quote: "Sono un Bunny Dad. La mia autorità è puramente decorativa.",
    isBestSeller: true
  },
  {
    id: "auto-xhghkf",
    title: "Rebel Bunny - Maglietta Donna",
    imageUrl: "https://m.media-amazon.com/images/I/61D+gqUauJL.jpg",
    amazonUrl: "https://www.amazon.it/Donna-Rebel-orecchie-coniglio-Maglietta/dp/B0CXKMPVP7/ref=sr_1_4",
    category: Category.APPAREL,
    description: "Per le coniglie ribelli e le loro umane che non seguono le regole (tranne quelle del coniglio).",
    quote: "Ribelle, soffice e letale.",
    isBestSeller: false
  },
  {
    id: "auto-c2z208",
    title: "Rebel Bunny - Canotta",
    imageUrl: "https://m.media-amazon.com/images/I/61AVKVOkIML.jpg",
    amazonUrl: "https://www.amazon.it/Rebel-Bunny-orecchie-coniglio-Canotta/dp/B0CXKHLM9K/ref=sr_1_5",
    category: Category.APPAREL,
    description: "Freschezza estiva per mostrare i muscoli che usi per spostare i sacchi di fieno.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-zxg7iy",
    title: "Rebel Bunny - Felpa",
    imageUrl: "https://m.media-amazon.com/images/I/71RsJTlUzlL.jpg",
    amazonUrl: "https://www.amazon.it/Rebel-Bunny-orecchie-coniglio-Felpa/dp/B0CXKDPQD1/ref=sr_1_6",
    category: Category.APPAREL,
    description: "Calda, comoda e con quel tocco di anarchia lagomorfa che non guasta mai.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-r83oxd",
    title: "Rebel Bunny - Hoodie",
    imageUrl: "https://m.media-amazon.com/images/I/710Lq7t2XBL.jpg",
    amazonUrl: "https://www.amazon.it/Rebel-Bunny-orecchie-coniglio-Cappuccio/dp/B0CXK7Y2HD/ref=sr_1_7",
    category: Category.APPAREL,
    description: "Cappuccio su, mondo fuori. Perfetta per le giornate no.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-6iz6aa",
    title: "Rebel Bunny - Manica Raglan",
    imageUrl: "https://m.media-amazon.com/images/I/71-24JV6JeL.jpg",
    amazonUrl: "https://www.amazon.it/orecchie-coniglio-Maglia-Maniche-Raglan/dp/B0CXK75GLD/ref=sr_1_8",
    category: Category.APPAREL,
    description: "Stile baseball per chi gioca nella squadra dei roditori.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-z2pnk6",
    title: "Rebel Bunny - T-Shirt",
    imageUrl: "https://m.media-amazon.com/images/I/61pC16Rd4FL.jpg",
    amazonUrl: "https://www.amazon.it/Rebel-Bunny-orecchie-coniglio-Maglietta/dp/B0CXK3NRQ3/ref=sr_1_9",
    category: Category.APPAREL,
    description: "Il classico must-have per il guardaroba di ogni schiavo umano.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-i8drx5",
    title: "Rebel Bunny - Hoodie Zip",
    imageUrl: "https://m.media-amazon.com/images/I/71dkLu-AhIL.jpg",
    amazonUrl: "https://www.amazon.it/Rebel-Bunny-orecchie-coniglio-Cappuccio/dp/B0CXJZC3Q4/ref=sr_1_10",
    category: Category.APPAREL,
    description: "Comoda zip per vestirsi velocemente quando senti un rumore sospetto dall'altra stanza.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-4kspka",
    title: "Bad Boy Coniglio - Hoodie",
    imageUrl: "https://m.media-amazon.com/images/I/81m3QYXnGBL.jpg",
    amazonUrl: "https://www.amazon.it/bad-boy-Coniglio-Felpa-Cappuccio/dp/B0CXDZ2NV3/ref=sr_1_12",
    category: Category.APPAREL,
    description: "Lui è cattivo. Lui morde i cavi. Lui è il Bad Boy.",
    quote: "Nascondi i caricabatterie.",
    isBestSeller: false
  },
  {
    id: "auto-ogc73t",
    title: "Bad Boy Coniglio - Felpa",
    imageUrl: "https://m.media-amazon.com/images/I/81IedlW5CVL.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-bad-Coniglio-Felpa/dp/B0CXDZ16B2/ref=sr_1_13",
    category: Category.APPAREL,
    description: "Sguardo torvo e orecchie basse. Attenzione.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-c74iur",
    title: "Bad Boy Coniglio - Canotta",
    imageUrl: "https://m.media-amazon.com/images/I/614j9hYA0kL.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-bad-Coniglio-Canotta/dp/B0CXDYKDZ9/ref=sr_1_14",
    category: Category.APPAREL,
    description: "Per un look da duro, anche se poi gli dai i bacini sul naso.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-ti6zpd",
    title: "Bad Boy - T-Shirt",
    imageUrl: "https://m.media-amazon.com/images/I/71pYYg15OiL.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-bad-Coniglio-Maglietta/dp/B0CXDWHQ74/ref=sr_1_19",
    category: Category.APPAREL,
    description: "L'uniforme ufficiale per chi convive con un teppista peloso.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-fluhst",
    title: "Bunny Mum - Hoodie",
    imageUrl: "https://m.media-amazon.com/images/I/81-lHWQskbL.jpg",
    amazonUrl: "https://www.amazon.it/Bunny-mum-Felpa-Cappuccio/dp/B0CX25SBM8/ref=sr_1_21",
    category: Category.APPAREL,
    description: "La divisa ufficiale della mamma coniglio. Tasca anteriore utile per nascondere premietti.",
    quote: "Bunny Mum: titolo nobiliare acquisito sul campo.",
    isBestSeller: true
  },
  {
    id: "auto-1xlic3",
    title: "Bunny Mum - T-Shirt",
    imageUrl: "https://m.media-amazon.com/images/I/71kPCxFdi6L.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-Bunny-mum-Maglietta/dp/B0CX242W4N/ref=sr_1_27",
    category: Category.APPAREL,
    description: "Il capo base. Se ne hai uno, ti serve questa.",
    quote: "",
    isBestSeller: true
  },
  {
    id: "auto-0a1hzh",
    title: "Bunny Mum - Felpa",
    imageUrl: "https://m.media-amazon.com/images/I/81lTCYnGTQL.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-Bunny-mum-Felpa/dp/B0CX23BMR1/ref=sr_1_31",
    category: Category.APPAREL,
    description: "Girocollo classico. Ottima per le riunioni Zoom dove non vuoi spiegare perché hai del fieno nei capelli.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-5x7fg3",
    title: "Boss - T-Shirt",
    imageUrl: "https://m.media-amazon.com/images/I/717RYkXPF1L.jpg",
    amazonUrl: "https://www.amazon.it/coniglio-boss-capo-sono-Maglietta/dp/B0CW1LBG54/ref=sr_1_37",
    category: Category.APPAREL,
    description: "Dillo a tutti chi comanda davvero.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-whd7gs",
    title: "Boss - Donna",
    imageUrl: "https://m.media-amazon.com/images/I/71Z82wVTilL.jpg",
    amazonUrl: "https://www.amazon.it/Donna-coniglio-boss-Maglietta-Collo/dp/B0CW1KN657/ref=sr_1_38",
    category: Category.APPAREL,
    description: "Eleganza sottomessa.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-p9krdt",
    title: "Boss - Hoodie",
    imageUrl: "https://m.media-amazon.com/images/I/81BnxDBpIVL.jpg",
    amazonUrl: "https://www.amazon.it/coniglio-boss-capo-Felpa-Cappuccio/dp/B0CW1933TW/ref=sr_1_40",
    category: Category.APPAREL,
    description: "Felpa con cappuccio ufficiale del sindacato servitori di conigli.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-cq9f24",
    title: "I Love Animals - Felpa",
    imageUrl: "https://m.media-amazon.com/images/I/710oro5KKBL.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-love-animals-Felpa/dp/B0CQPCMWVJ/ref=sr_1_43",
    category: Category.APPAREL,
    description: "Per chi ama gli animali più delle persone. Molto di più.",
    quote: "Le persone sono sopravvalutate. I conigli no.",
    isBestSeller: false
  },
  {
    id: "auto-gbq7zh",
    title: "I Conigli Sono Brutte Persone - T-Shirt",
    imageUrl: "https://m.media-amazon.com/images/I/61PVA-QZTuL.jpg",
    amazonUrl: "https://www.amazon.it/conigli-sono-brutte-persone-Maglietta/dp/B0C3MFYC35/ref=sr_1_100",
    category: Category.APPAREL,
    description: "Cotone di qualità superiore per verità scomode superiori.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-4fq48d",
    title: "I Conigli Sono Brutte Persone - Felpa",
    imageUrl: "https://m.media-amazon.com/images/I/71EwOCKJ+JL.jpg",
    amazonUrl: "https://www.amazon.it/conigli-sono-brutte-persone-Felpa/dp/B0C3MCCHK3/ref=sr_1_101",
    category: Category.APPAREL,
    description: "Calda, morbida e brutalmente onesta.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-gyor9v",
    title: "I Conigli Sono Brutte Persone - Donna",
    imageUrl: "https://m.media-amazon.com/images/I/61uGexBI4UL.jpg",
    amazonUrl: "https://www.amazon.it/Donna-conigli-sono-brutte-persone/dp/B0C3MC89Z3/ref=sr_1_102",
    category: Category.APPAREL,
    description: "Taglio sagomato per chi non ha paura del giudizio del proprio animale.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-q89a7z",
    title: "I Conigli Sono Brutte Persone - Hoodie",
    imageUrl: "https://m.media-amazon.com/images/I/81oDChJKkUL.jpg",
    amazonUrl: "https://www.amazon.it/conigli-sono-brutte-persone-Cappuccio/dp/B0BWS24FCV/ref=sr_1_103",
    category: Category.APPAREL,
    description: "Cappuccio ampio per nascondere i morsi sulle orecchie.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-1s1akb",
    title: "I Conigli Sono Brutte Persone - Felpa",
    imageUrl: "https://m.media-amazon.com/images/I/71+FC77JczL.jpg",
    amazonUrl: "https://www.amazon.it/conigli-sono-brutte-persone-Felpa/dp/B0BWS1JZJJ/ref=sr_1_104",
    category: Category.APPAREL,
    description: "Un classico intramontabile del disagio.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-g3695b",
    title: "I Conigli Sono Brutte Persone - Canotta",
    imageUrl: "https://m.media-amazon.com/images/I/61CMQfcTdPL.jpg",
    amazonUrl: "https://www.amazon.it/conigli-sono-brutte-persone-Canotta/dp/B0BWS1FSCP/ref=sr_1_105",
    category: Category.APPAREL,
    description: "Per affrontare il caldo mentre il coniglio occupa il ventilatore.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-bgdofq",
    title: "I Conigli Sono Brutte Persone - T-Shirt",
    imageUrl: "https://m.media-amazon.com/images/I/71KnPnBmQOL.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/81YAp7m4UfL.jpg",
    amazonUrl: "https://www.amazon.it/Gatto-gabbiano-Brutta-gente-Cappuccio/dp/B0C573JFTM/ref=sr_1_90",
    category: Category.APPAREL,
    description: "Un'amicizia improbabile nata dal comune disprezzo per il genere umano.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-o4751w",
    title: "Gatto & Gabbiano - Felpa",
    imageUrl: "https://m.media-amazon.com/images/I/81zTWQb-RKL.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/61nYdnH7zKL.jpg",
    amazonUrl: "https://www.amazon.it/Capo-Sono-Cane-Stiloso-Maglietta/dp/B0CW619YKV/ref=rvi_d_sccl_4/257-6552221-1599542",
    category: Category.APPAREL,
    description: "Per cani con autostima e proprietari consapevoli del loro ruolo subordinato.",
    quote: "Cane stiloso, padrone orgoglioso.",
    isBestSeller: false
  },
  {
    id: "auto-3zud96",
    title: "Il Capo Sono Io - T-Shirt",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/61nYdnH7zKL.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/81F+yJ8DpbL.jpg",
    amazonUrl: "https://www.amazon.it/Gallina-Ehil%C3%A0-Maglia-a-Manica/dp/B0C5745VHR/ref=sr_1_87",
    category: Category.APPAREL,
    description: "Un saluto pennuto che ti giudica silenziosamente.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-uarb59",
    title: "Gallina Ehilà - T-Shirt",
    imageUrl: "https://m.media-amazon.com/images/I/61YWIC3xhbL.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-Gallina-Ehil%C3%A0-Maglietta/dp/B0C573YCL6/ref=sr_1_88",
    category: Category.APPAREL,
    description: "Ehilà! La gallina ti saluta, ma non vuole socializzare.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-sg5y4l",
    title: "Gallina Ehilà - Hoodie",
    imageUrl: "https://m.media-amazon.com/images/I/811tAON7GTL.jpg",
    amazonUrl: "https://www.amazon.it/Gallina-Ehil%C3%A0-Felpa-con-Cappuccio/dp/B0C573D95V/ref=sr_1_91",
    category: Category.APPAREL,
    description: "Calore e piume. Perfetta per il pollaio urbano.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-f33jbw",
    title: "Gallina Ehilà - Felpa",
    imageUrl: "https://m.media-amazon.com/images/I/81UnSmLHxNL.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-Gallina-Ehil%C3%A0-Felpa/dp/B0C573CCSP/ref=sr_1_92",
    category: Category.APPAREL,
    description: "Girocollo classico con pollo sospettoso.",
    quote: "",
    isBestSeller: false
  },

  // --- RICCI (APPAREL) ---
  {
    id: "auto-7ck3x2",
    title: "Riccio Brutta Gente - Raglan",
    imageUrl: "https://m.media-amazon.com/images/I/61L2DKJWBvL.jpg",
    amazonUrl: "https://www.amazon.it/Riccio-Brutta-Maglia-Maniche-Raglan/dp/B0C5724SX7/ref=sr_1_97",
    category: Category.APPAREL,
    description: "Lui si chiude a riccio. Tu dovresti fare lo stesso con certe persone.",
    quote: "Spinosa verità.",
    isBestSeller: false
  },
  {
    id: "auto-pzs9cl",
    title: "Brutta Gente Trio - Manica Lunga",
    imageUrl: "https://m.media-amazon.com/images/I/71PqFFhPK9L.jpg",
    amazonUrl: "https://www.amazon.it/Brutta-gente-3-Maglia-Manica/dp/B0C5723L2S/ref=sr_1_98",
    category: Category.APPAREL,
    description: "I tre dell'apocalisse animale riuniti in una sola maglietta.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-mtmv1k",
    title: "Brutta Gente Trio - Hoodie",
    imageUrl: "https://m.media-amazon.com/images/I/71fq8fyW6DL.jpg",
    amazonUrl: "https://www.amazon.it/Brutta-gente-3-Felpa-Cappuccio/dp/B0C57166M5/ref=sr_1_99",
    category: Category.APPAREL,
    description: "Massimo comfort per chi preferisce la compagnia del branco misto.",
    quote: "",
    isBestSeller: false
  },
  
  // --- ALTRI (APPAREL) ---
  {
    id: "auto-ukhf4q",
    title: "I Love Animals - Canotta",
    imageUrl: "https://m.media-amazon.com/images/I/71Z53EaVWTL.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-love-animals-Canotta/dp/B0CQP9MTKJ/ref=sr_1_49",
    category: Category.APPAREL,
    description: "Fresco amore per gli animali, perfetto per l'estate.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-t0h9la",
    title: "I Love Animals - Donna",
    imageUrl: "https://m.media-amazon.com/images/I/610KrgB8kqL.jpg",
    amazonUrl: "https://www.amazon.it/love-animals-Maglietta-Collo/dp/B0CQP99JVG/ref=sr_1_50",
    category: Category.APPAREL,
    description: "Taglio femminile per dichiarare il tuo amore per il branco.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-pabet1",
    title: "I Love Animals - T-Shirt",
    imageUrl: "https://m.media-amazon.com/images/I/61Eb-OL9PmL.jpg",
    amazonUrl: "https://www.amazon.it/Brutte-persone-love-animals-Maglietta/dp/B0CQPCBYB1/ref=sr_1_45",
    category: Category.APPAREL,
    description: "Semplice verità stampata su cotone: gli animali sono meglio.",
    quote: "",
    isBestSeller: false
  },
  {
    id: "auto-mv8ekj",
    title: "I Love Animals - Hoodie",
    imageUrl: "https://m.media-amazon.com/images/I/71k5tcQ4oXL.jpg",
    amazonUrl: "https://www.amazon.it/I-love-animals-Felpa-Cappuccio/dp/B0CQPC7917/ref=sr_1_46",
    category: Category.APPAREL,
    description: "Un abbraccio caldo per chi preferisce abbracciare il cane piuttosto che i parenti.",
    quote: "",
    isBestSeller: false
  }
];
