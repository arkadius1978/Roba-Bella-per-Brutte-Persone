import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'privacy' | 'cookie';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, defaultTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = React.useState<'privacy' | 'cookie'>(defaultTab);

  // Update tab when prop changes
  React.useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto font-sans" aria-modal="true">
      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
          
          {/* Header */}
          <div className="bg-slate-50 border-b border-slate-200 p-4 flex justify-between items-center shrink-0">
            <div className="flex gap-4">
                <button 
                    onClick={() => setActiveTab('privacy')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all font-bold ${activeTab === 'privacy' ? 'bg-pink-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-200'}`}
                >
                    <Shield size={18} /> Privacy Policy
                </button>
                <button 
                    onClick={() => setActiveTab('cookie')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all font-bold ${activeTab === 'cookie' ? 'bg-pink-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-200'}`}
                >
                    <FileText size={18} /> Cookie Policy
                </button>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition">
                <X size={24} className="text-slate-500" />
            </button>
          </div>

          {/* Content (Scrollable) */}
          <div className="overflow-y-auto p-8 md:p-12 text-slate-700 leading-relaxed text-sm md:text-base">
            
            {activeTab === 'privacy' && (
                <div className="space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-cartoony font-bold text-slate-900 mb-6">Informativa sulla Privacy</h2>
                    
                    <section>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">1. Titolare del Trattamento dei Dati</h3>
                        <p>
                            <strong>Marco Ragni</strong><br/>
                            Contatto: sonobruttepersone@gmail.com<br/>
                            <span className="text-xs text-slate-500 italic">(In seguito indicato come "il Titolare")</span>
                        </p>
                    </section>

                    <section>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">2. Tipologie di Dati raccolti</h3>
                        <p>
                            Questo Sito non richiede registrazione e non raccoglie direttamente dati personali identificativi (come nome, cognome, indirizzo) degli utenti, a meno che tali dati non vengano forniti volontariamente dall'utente tramite email al contatto sopra indicato.
                            <br/><br/>
                            Durante la navigazione, possono essere raccolti <strong>Dati di Utilizzo</strong> (es. indirizzo IP anonimizzato, orario della richiesta) e <strong>Cookie</strong> per finalità tecniche e di affiliazione (vedi Cookie Policy).
                        </p>
                    </section>

                    <section>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">3. Affiliazione Amazon</h3>
                        <p>
                            Questo sito partecipa al <strong>Programma Affiliazione Amazon EU</strong>, un programma di affiliazione che consente ai siti di percepire una commissione pubblicitaria pubblicizzando e fornendo link al sito Amazon.it.
                            <br/>
                            Cliccando sui link che portano ad Amazon, l'utente viene reindirizzato sulla piattaforma di Amazon, che diventa Titolare autonomo del trattamento dei dati relativi all'acquisto e alla navigazione sul proprio sito. Si invita l'utente a consultare la <a href="https://www.amazon.it/gp/help/customer/display.html?nodeId=201909010" target="_blank" className="text-pink-600 underline">Informativa sulla Privacy di Amazon.it</a>.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">4. Base giuridica e Conservazione</h3>
                        <p>
                            Il trattamento dei dati tecnici è necessario per il funzionamento del sito (legittimo interesse). I dati di navigazione non vengono conservati dal Titolare oltre il tempo strettamente necessario alla sessione o come richiesto dalla legge.
                        </p>
                    </section>
                </div>
            )}

            {activeTab === 'cookie' && (
                <div className="space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-cartoony font-bold text-slate-900 mb-6">Cookie Policy Estesa</h2>
                    
                    <section>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">Cosa sono i Cookie?</h3>
                        <p>
                            I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">Cookie utilizzati da questo sito</h3>
                        <div className="bg-slate-50 p-4 rounded-xl space-y-4 border border-slate-200">
                            <div>
                                <h4 className="font-bold text-slate-800">1. Cookie Tecnici (Necessari)</h4>
                                <p className="text-sm">
                                    Il sito utilizza cookie tecnici strettamente necessari per permettere la navigazione e salvare la preferenza sul consenso ai cookie (voce locale: `cookie-consent`). Senza questi cookie, alcune funzionalità (come non mostrare il banner ogni volta) non potrebbero essere erogate. Per questi cookie non è richiesto il consenso preventivo.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800">2. Cookie di Terze Parti (Amazon)</h4>
                                <p className="text-sm">
                                    Il sito ospita link e immagini provenienti dai server di Amazon.it. Amazon potrebbe installare cookie per tracciare la provenienza della visita (necessario per riconoscere la commissione di affiliazione) e per le proprie finalità di marketing e profilazione.
                                    <br/>
                                    Il Titolare di questo sito <strong>NON</strong> ha accesso ai dati raccolti da questi cookie, che sono gestiti autonomamente da Amazon.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">Gestione dei Cookie</h3>
                        <p>
                            L'utente può decidere se accettare o meno i cookie utilizzando le impostazioni del proprio browser. La disabilitazione dei cookie di terze parti potrebbe impedire la visualizzazione corretta dei prodotti Amazon, ma non pregiudica la navigazione sulle pagine informative del sito.
                        </p>
                        <p className="mt-2 text-sm text-slate-500">
                            Guide per disabilitare i cookie: Chrome, Firefox, Safari, Edge (consultare la guida del proprio browser).
                        </p>
                    </section>
                </div>
            )}

          </div>
          
          <div className="bg-slate-50 p-4 border-t border-slate-200 text-center">
            <p className="text-xs text-slate-400">Ultimo aggiornamento: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};