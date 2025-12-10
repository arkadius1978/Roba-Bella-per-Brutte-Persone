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
                            Maia Natacha Fiorelli<br/>
                            Indirizzo email del Titolare: [INSERISCI LA TUA EMAIL QUI]<br/>
                            <span className="text-xs text-slate-500 italic">(In seguito indicato come "il Sito" o "il Titolare")</span>
                        </p>
                    </section>

                    <section>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">2. Tipologie di Dati raccolti</h3>
                        <p>
                            Questo Sito non raccoglie direttamente dati personali identificativi (come nome, cognome, indirizzo) degli utenti, a meno che non vengano forniti volontariamente tramite contatto email.
                            <br/><br/>
                            Vengono raccolti automaticamente <strong>Dati di Utilizzo</strong> e <strong>Cookie</strong> (vedi Cookie Policy) necessari al funzionamento del sito e all'integrazione con Amazon.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">3. Affiliazione Amazon</h3>
                        <p>
                            Questo sito partecipa al Programma Affiliazione Amazon EU, un programma di affiliazione che consente ai siti di percepire una commissione pubblicitaria pubblicizzando e fornendo link al sito Amazon.it.
                            <br/>
                            Quando clicchi su un link o un prodotto verso Amazon, Amazon potrebbe raccogliere dati sulla tua navigazione per attribuire la vendita a questo Sito. Per maggiori informazioni, consulta la <a href="https://www.amazon.it/gp/help/customer/display.html?nodeId=201909010" target="_blank" className="text-pink-600 underline">Privacy Policy di Amazon</a>.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">4. Finalità del Trattamento</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Visualizzazione di contenuti da piattaforme esterne (immagini prodotti Amazon).</li>
                            <li>Statistica (in forma anonima).</li>
                            <li>Affiliazione commerciale.</li>
                        </ul>
                    </section>
                </div>
            )}

            {activeTab === 'cookie' && (
                <div className="space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-cartoony font-bold text-slate-900 mb-6">Cookie Policy</h2>
                    
                    <section>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">Cosa sono i Cookie?</h3>
                        <p>
                            I cookie sono porzioni di codice installate all'interno del browser che assistono il Titolare nell’erogazione del Servizio. Questo sito utilizza cookie per salvare la tua preferenza sul banner dei cookie (Cookie Tecnico) e integra servizi di terze parti.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">Cookie Tecnici</h3>
                        <p>
                            Il Sito utilizza un cookie locale (`cookie-consent`) per ricordare che hai accettato il banner, in modo da non mostrartelo ad ogni visita. Questo cookie dura finché non cancelli la cache del browser.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">Cookie di Terze Parti (Amazon)</h3>
                        <p>
                            Il Sito visualizza immagini e link provenienti direttamente dai server di Amazon. Amazon potrebbe installare cookie per tracciare la provenienza del clic (necessario per il programma di affiliazione) o per le proprie finalità statistiche e di profilazione.
                        </p>
                        <p className="mt-2 bg-slate-100 p-4 rounded-xl border-l-4 border-slate-400">
                            Noi non abbiamo accesso ai dati raccolti da Amazon tramite questi cookie.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">Come disabilitare i Cookie</h3>
                        <p>
                            Puoi negare il consenso all'utilizzo dei cookie selezionando l'impostazione appropriata sul tuo browser. Tuttavia, tieni presente che disabilitando i cookie di terze parti, le immagini dei prodotti potrebbero non essere caricate correttamente.
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