import React, { useState, useEffect } from 'react';
import { 
  Calculator, Zap, TrendingUp, ShieldCheck, ArrowRight, X, Menu, 
  Check, ChevronRight, BarChart3, Fingerprint, Users, GraduationCap, 
  Briefcase, Info, Gift, CalendarClock, MessageCircle, Tag, Award, 
  Database, Trophy, Star, Rocket, LineChart, ShoppingBag, Target, Wallet 
} from 'lucide-react';

interface FeeState {
  base: number;
  variable: number;
  percent: number;
  total: number;
  tier: string;
}

const JuanMktProposal: React.FC = () => {
  // State for Calculator
  const [investment, setInvestment] = useState<number>(5000);
  const [fee, setFee] = useState<FeeState>({ base: 0, variable: 0, percent: 0, total: 0, tier: '' });
  // Note: isMenuOpen is defined in original code but not used in the layout provided, keeping for compatibility
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Fee Logic
  useEffect(() => {
    let base = 0;
    let variablePercent = 0;
    let tierName = '';

    if (investment <= 3000) {
      base = 500;
      variablePercent = 0;
      tierName = 'VALIDATION';
    } else if (investment <= 15000) {
      base = 600;
      variablePercent = 0.10;
      tierName = 'GROWTH';
    } else if (investment <= 50000) {
      base = 1000;
      variablePercent = 0.08;
      tierName = 'SCALING';
    } else {
      tierName = 'ENTERPRISE'; // Logic handled in render
    }

    const variable = investment * variablePercent;
    
    setFee({
      base,
      variable,
      percent: variablePercent * 100,
      total: base + variable,
      tier: tierName
    });
  }, [investment]);

  const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  // --- TUS ENLACES DE CONTACTO ---
  const links = {
    whatsapp_general: "https://wa.link/a75jti", 
    whatsapp_mentoria: "https://wa.link/4fvitd", 
    whatsapp_consultoria: "https://wa.link/r030oa" 
  };

  const credentials = [
    { type: 'badge', title: 'Trayectoria', desc: '+5 Años Exp.', url: '' },
    { type: 'image', url: "https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/Captura%20de%20pantalla%202026-01-14%20132948.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vQ2FwdHVyYSBkZSBwYW50YWxsYSAyMDI2LTAxLTE0IDEzMjk0OC5wbmciLCJpYXQiOjE3Njg0MTU0ODEsImV4cCI6MTc5OTk1MTQ4MX0.GE1D06c7mnC9oPX7-0Gi-bOFGRyOLhgxehSPiSC3e0w", title: 'Meta Ads Expert', desc: 'Certificación Oficial' },
    { type: 'image', url: "https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/Captura%20de%20pantalla%202026-01-14%20133003.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vQ2FwdHVyYSBkZSBwYW50YWxsYSAyMDI2LTAxLTE0IDEzMzAwMy5wbmciLCJpYXQiOjE3Njg0MTU1MjgsImV4cCI6MTc5OTk1MTUyOH0.680E65-OYHsWn8Iol_2KiMmBR33pBY5w5gZSQ_CDefw", title: 'Diploma Avanzado', desc: 'Estrategia Digital' },
    { type: 'image', url: "https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/Captura%20de%20pantalla%202026-01-14%20133013.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vQ2FwdHVyYSBkZSBwYW50YWxsYSAyMDI2LTAxLTE0IDEzMzAxMy5wbmciLCJpYXQiOjE3Njg0MTU1MzksImV4cCI6MTc5OTk1MTUzOX0.1Q5WoWsktOG57-bBgQ9_gOfvC1nUlRkaEPcNSg0sefo", title: 'Certificado Pro', desc: 'Media Buying' },
    { type: 'image', url: "https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/como-vender-por-facebook-e-instagram-ads.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vY29tby12ZW5kZXItcG9yLWZhY2Vib29rLWUtaW5zdGFncmFtLWFkcy5wbmciLCJpYXQiOjE3Njg0MTU1NzMsImV4cCI6MTc5OTk1MTU3M30.DVcP9EcDgihA-yE6uqRRB6BcESNgemS2Cepqlk2E6ps", title: 'Insignia Meta', desc: 'Facebook & IG Ads' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden w-full relative">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      {/* --- HEADER --- */}
      <nav className="fixed w-full z-50 bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 top-0 left-0">
        <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-black text-white italic">J</div>
            <span className="font-bold text-lg md:text-xl tracking-tighter text-white">JUAN <span className="text-blue-500">MKT</span></span>
          </div>
          {/* BOTÓN HEADER - CAPA Z-50 */}
          <a 
            href={links.whatsapp_general}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-50 bg-white text-black px-4 py-2 rounded-full font-bold text-xs md:text-sm hover:bg-blue-50 transition-colors flex items-center gap-2 pointer-events-auto cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden md:inline">Escribirme Ahora</span>
            <span className="md:hidden">Contacto</span>
          </a>
        </div>
      </nav>

      {/* --- HERO --- */}
      <header className="pt-28 pb-12 md:pt-40 md:pb-20 px-4 md:px-6 max-w-5xl mx-auto relative overflow-hidden">
        <div className="absolute top-20 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-500/30 bg-blue-900/10 text-blue-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Propuesta de Escalamiento
            </div>
            
            <h1 className="text-3xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
            De la Teoría a la <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Ejecución Masiva.</span>
            </h1>
            
            <div className="flex items-start gap-4 text-slate-400 max-w-2xl border-l-2 border-blue-600 pl-4 md:pl-6">
            <p className="text-sm md:text-lg leading-relaxed">
                Estimado Fundador,<br/><br/>
                Sabemos que tienes un producto increíble, pero escalar se siente como chocar contra una pared invisible. En <strong className="text-white">JUAN MKT</strong>, entendemos que tu problema no es la falta de deseo, sino la falta de un sistema predecible. Deja de "jugar a la tiendita" y comienza a construir el imperio que visualizas. Convertimos tu incertidumbre en facturación masiva.
            </p>
            </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 md:px-6 space-y-20 md:space-y-32 pb-32">
        
        {/* SECTION 1: THE SHIFT (REFORMULADO - NEUROLINGUISTICS FOCUS) */}
        <section className="grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  El Dolor de Crecer: <br />
                  <span className="text-blue-500">Vender más no debería significar dormir menos.</span>
                </h2>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                  ¿Te suena familiar? Inviertes más en anuncios y tu rentabilidad cae en picada. Es la trampa del <strong>"Valle de la Muerte"</strong>: ese punto donde el caos operativo devora tus ganancias.
                  <br /><br />
                  Nosotros somos los expertos que te sacan de ahí. No vendemos "humo" ni métricas de vanidad. Somos <strong>Ingenieros de Rentabilidad</strong>. Utilizamos estrategias psicológicas y financieras para proteger tu margen mientras escalamos. Recupera la tranquilidad de saber que cada dólar invertido vuelve multiplicado.
                </p>
            </div>
            
            {/* NUEVA BARRA DE AUTORIDAD (ESTILO POWER STATS CON 3 DATOS) */}
            <div className="border-l-4 border-blue-600 pl-6 py-2 flex flex-col gap-6">
                
                {/* Dato 1: Mensual */}
                <div>
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">+$60k</div>
                    <div className="text-[10px] md:text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                        <BarChart3 className="w-3 h-3" /> Capital Gestionado Mensual
                    </div>
                </div>

                {/* Dato 2: Histórico */}
                <div>
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">+$2M</div>
                    <div className="text-[10px] md:text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                        <Wallet className="w-3 h-3" /> Inversión Histórica Gestionada
                    </div>
                </div>

                {/* Dato 3: Especialidad (AJUSTADO) */}
                <div>
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">Shopify</div>
                    <div className="text-[10px] md:text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                        <Rocket className="w-3 h-3" /> Expertos en Escalamiento
                    </div>
                </div>
            </div>

            <p className="text-sm md:text-base text-slate-400 italic border-t border-white/5 pt-4 mt-4">
              "No es suerte. Es un sistema diseñado para eliminar el riesgo y acelerar el éxito."
            </p>
          </div>
          
          {/* STACK VISUAL */}
          <div className="relative bg-[#0A0A0A] rounded-2xl border border-white/10 p-4 md:p-8 overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>
             <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2 relative z-10">
                <Award className="w-4 h-4 text-blue-500" /> Herramientas de Precisión
             </h3>
             <div className="grid grid-cols-2 gap-3 md:gap-4 relative z-10">
                {/* Meta */}
                <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#1877F2]/20 rounded-lg flex items-center justify-center text-[#1877F2]"><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></div>
                    <div><div className="font-bold text-white text-xs">Meta Ads</div><div className="text-[9px] text-slate-400">Buying Pro</div></div>
                </div>
                {/* Google */}
                <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center"><svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg></div>
                    <div><div className="font-bold text-white text-xs">Google Ads</div><div className="text-[9px] text-slate-400">Search</div></div>
                </div>
                 {/* Shopify */}
                 <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden"><img src="https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/imgi_302_1156660_ecommerce_logo_shopify_icon-1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vaW1naV8zMDJfMTE1NjY2MF9lY29tbWVyY2VfbG9nb19zaG9waWZ5X2ljb24tMS5wbmciLCJpYXQiOjE3Njg0MTM0MDMsImV4cCI6MTc5OTk0OTQwM30.ThZQQrZLGYXKpydbJ3yH57q_1rla48dR7umP-XinIuk" alt="Shopify" className="w-full h-full object-contain"/></div>
                    <div><div className="font-bold text-white text-xs">Shopify</div><div className="text-[9px] text-slate-400">Partner</div></div>
                </div>
                {/* GA4 */}
                <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-500"><BarChart3 className="w-5 h-5"/></div>
                    <div><div className="font-bold text-white text-xs">Analytics 4</div><div className="text-[9px] text-slate-400">Data</div></div>
                </div>
             </div>

             <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center border-2 border-black text-[10px] font-bold">M</div>
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center border-2 border-black text-[10px] font-bold">G</div>
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center border-2 border-black text-[10px] font-bold">+5</div>
                </div>
                <div className="text-right">
                    <div className="text-xs text-white font-bold">Certificaciones Activas</div>
                    <div className="text-[10px] text-emerald-400">Actualizado 2025</div>
                </div>
             </div>
          </div>
        </section>

        {/* --- CREDENTIALS WALL (MANUAL SCROLL) --- */}
        <section className="w-full bg-[#0A0A0A] border-y border-white/10 py-12 relative z-10">
            <div className="max-w-5xl mx-auto px-4 md:px-6 mb-8 flex items-center justify-start">
                <h3 className="text-base md:text-lg font-bold text-white flex items-center gap-2">
                    <Award className="text-yellow-500 w-5 h-5" /> Respaldo Técnico & Trayectoria
                </h3>
            </div>
            <div className="flex overflow-x-auto gap-4 px-4 md:px-0 pb-6 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-5 md:gap-6 md:overflow-visible max-w-5xl mx-auto relative z-20">
                {credentials.map((item, index) => (
                    <div key={index} className="flex-shrink-0 snap-center w-[180px] h-[220px] bg-[#0F0F0F] border border-white/10 rounded-xl p-4 flex flex-col items-center justify-between group">
                        <div className="h-28 w-full flex items-center justify-center">
                            {item.type === 'badge' ? (
                                <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500/50">
                                    <Trophy className="w-10 h-10 text-yellow-400" />
                                </div>
                            ) : (
                                <img src={item.url} alt={item.title} className="h-full w-auto object-contain" />
                            )}
                        </div>
                        <div className="text-center w-full pt-3 border-t border-white/5">
                            <div className={`font-bold text-xs ${item.type === 'badge' ? 'text-yellow-400' : 'text-white'}`}>{item.title}</div>
                            <div className="text-[9px] text-slate-500 uppercase tracking-wider mt-1">{item.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="md:hidden flex justify-center gap-1.5 mt-2 text-xs text-slate-500">
               ← Desliza para ver más →
            </div>
        </section>

        {/* --- RESULTS SECTION --- */}
        <section className="py-12 md:py-20 bg-[#080808] relative z-10">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4">
                        <Rocket className="w-3 h-3" /> Resultados Verificados
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">No mostramos Anuncios. <br/><span className="text-blue-500">Mostramos Dinero.</span></h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* RESULT 1 */}
                    <div className="bg-[#0F0F0F] rounded-2xl border border-white/10 overflow-hidden">
                        <div className="h-48 md:h-56 bg-slate-900 relative">
                            <img src="https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/r2.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vcjIuanBlZyIsImlhdCI6MTc2ODQxNjgyMiwiZXhwIjoxNzk5OTUyODIyfQ.3clD7ksYtgIDzLHfIoemNsy6coAFJJrWSB9hPLbQuc0" className="w-full h-full object-cover" alt="Result"/>
                            <div className="absolute top-4 right-4 bg-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold font-mono">+196% CRECIMIENTO</div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-bold text-white mb-2">El Club del Billón</h3>
                            <p className="text-sm text-slate-400">Rompimos la barrera de los $1,000 Millones en facturación.</p>
                        </div>
                    </div>
                    {/* RESULT 2 */}
                    <div className="bg-[#0F0F0F] rounded-2xl border border-white/10 overflow-hidden">
                        <div className="h-48 md:h-56 bg-slate-900 relative">
                             <img src="https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/r3.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vcjMuanBlZyIsImlhdCI6MTc2ODQxNjc2NywiZXhwIjoxNzk5OTUyNzY3fQ.3tDLwvh9mGNDMIOpO-wCVkSOKjvRhZlQ64X0zxBzk84" className="w-full h-full object-cover" alt="Result"/>
                            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold font-mono">+150% PEDIDOS</div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-bold text-white mb-2">Máquina de Logística</h3>
                            <p className="text-sm text-slate-400">Escalamos la adquisición generando más de 3,290 órdenes.</p>
                        </div>
                    </div>
                    {/* RESULT 3 */}
                    <div className="bg-[#0F0F0F] rounded-2xl border border-white/10 overflow-hidden">
                        <div className="h-48 md:h-56 bg-slate-900 relative">
                             <img src="https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/r1.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vcjEuanBlZyIsImlhdCI6MTc2ODQxNjgwMCwiZXhwIjoxNzk5OTUyODAwfQ.mAz5GJj-FJeXs2nO3DJ8Xourh79gIYRB1BUfPR9cVJM" className="w-full h-full object-cover" alt="Result"/>
                            <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold font-mono">+94% VENTAS</div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-bold text-white mb-2">Duplicación de Facturación</h3>
                            <p className="text-sm text-slate-400">Un sólido 94% de crecimiento en ventas totales (68M COP).</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 2: CALCULATOR */}
        <section className="relative px-0 md:px-6 w-full z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent rounded-[3rem] -z-10 blur-3xl pointer-events-none"></div>
          
          <div className="text-center mb-8 md:mb-12 px-4 relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">Calculadora de Inversión</h2>
            <p className="text-xs md:text-base text-slate-400 max-w-xl mx-auto">Desliza la barra para simular tu presupuesto de publicidad.</p>
          </div>

          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl md:rounded-3xl p-3 md:p-10 shadow-2xl relative overflow-hidden mx-2 md:mx-auto max-w-5xl w-full">
            {/* NOISE BG - Pointer events none */}
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50 pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-6 md:gap-10 relative z-10">
              {/* SLIDER & TABLE */}
              <div className="lg:col-span-7 space-y-6 md:space-y-8">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 w-full">
                  <label className="text-[10px] md:text-sm font-bold text-blue-400 uppercase tracking-wider mb-2 block">1. TU PRESUPUESTO MENSUAL EN ADS</label>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                     <span className="text-[10px] md:text-xs text-slate-500">¿Cuánto pagas a Facebook/Google?</span>
                     <span className="text-xl md:text-3xl font-bold text-white tracking-tight">{formatCurrency(investment)}</span>
                  </div>
                  <input type="range" min="1000" max="60000" step="500" value={investment} onChange={(e) => setInvestment(Number(e.target.value))} className="w-full h-2 md:h-3 bg-slate-800 rounded-full appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all relative z-50 pointer-events-auto"/>
                </div>

                <div className="w-full overflow-x-auto rounded-xl border border-white/10 scrollbar-hide relative z-20 pointer-events-auto">
                  <table className="w-full text-left text-[10px] md:text-sm border-collapse min-w-[280px]">
                    <thead className="bg-slate-900 text-slate-400 font-bold uppercase text-[9px]">
                      <tr><th className="p-2 border-b border-white/10">Plan</th><th className="p-2 border-b border-white/10">Rango</th><th className="p-2 border-b border-white/10 text-center">Base</th><th className="p-2 border-b border-white/10 text-center">Var.</th></tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 bg-black">
                      <tr className={`${fee.tier === 'VALIDATION' ? 'bg-emerald-500/10' : ''}`}><td className="p-2 flex gap-1 items-center">{fee.tier === 'VALIDATION' && <Check className="w-3 h-3"/>} Starter</td><td className="p-2 text-slate-500">$0-$3k</td><td className="p-2 text-center font-mono">$500</td><td className="p-2 text-center">0%</td></tr>
                      <tr className={`${fee.tier === 'GROWTH' ? 'bg-blue-600/10' : ''}`}><td className="p-2 flex gap-1 items-center">{fee.tier === 'GROWTH' && <Check className="w-3 h-3"/>} Growth</td><td className="p-2 text-slate-500">$3k-$15k</td><td className="p-2 text-center font-mono">$600</td><td className="p-2 text-center">10%</td></tr>
                      <tr className={`${fee.tier === 'SCALING' ? 'bg-purple-600/10' : ''}`}><td className="p-2 flex gap-1 items-center">{fee.tier === 'SCALING' && <Check className="w-3 h-3"/>} Scale</td><td className="p-2 text-slate-500">$15k+</td><td className="p-2 text-center font-mono">$1k</td><td className="p-2 text-center">8%</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* RECEIPT */}
              <div className="lg:col-span-5 w-full bg-gradient-to-br from-slate-900 to-black rounded-2xl p-4 border border-blue-500/20 shadow-xl flex flex-col justify-between relative overflow-hidden">
                 {fee.tier === 'ENTERPRISE' ? (
                    <div className="text-center py-4 space-y-4">
                      <h3 className="text-xl font-bold text-white">Plan Enterprise</h3>
                      <p className="text-xs text-slate-400">Tu inversión supera nuestro modelo estándar.</p>
                      {/* BOTON ENTERPRISE */}
                      <a href={links.whatsapp_general} target="_blank" rel="noopener noreferrer" className="relative z-50 pointer-events-auto bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-blue-50 flex items-center justify-center gap-2 text-sm w-full cursor-pointer">
                        <MessageCircle className="w-4 h-4" /> Agendar Reunión
                      </a>
                    </div>
                 ) : (
                   <>
                    <div className="space-y-4 mt-2">
                       {fee.tier !== 'VALIDATION' && (
                        <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-2 flex gap-2 items-start">
                            <Gift className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                            <div><h4 className="text-[10px] font-bold text-emerald-400 uppercase">Promo Activada</h4><p className="text-[9px] text-slate-400">1er mes sin comisión variable.</p></div>
                        </div>
                      )}
                      <div className="bg-white/5 rounded-lg p-3 space-y-2">
                          <div className="flex justify-between"><span className="text-xs text-slate-400">Base</span><span className="text-sm font-mono text-white">{formatCurrency(fee.base)}</span></div>
                          <div className="flex justify-between"><span className="text-xs text-slate-400">Variable</span><span className="text-sm font-mono text-blue-400">{formatCurrency(fee.variable)}</span></div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-dashed border-white/10">
                      <div className="flex justify-between items-end mb-4">
                         <div className="text-left"><span className="text-[9px] text-emerald-400 font-bold uppercase block">Primer Mes</span><span className="text-3xl font-black text-white">{formatCurrency(fee.base)}</span></div>
                         <div className="text-right"><span className="text-[9px] text-slate-500 uppercase block">Mes 2+</span><span className="text-sm font-bold text-slate-400">{formatCurrency(fee.total)}</span></div>
                      </div>
                      {/* BOTON CALCULADORA - IMPORTANTE Z-50 */}
                      <a href={links.whatsapp_general} target="_blank" rel="noopener noreferrer" className="relative z-50 pointer-events-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 w-full rounded-xl flex items-center justify-center gap-2 text-sm cursor-pointer shadow-lg">
                        <MessageCircle className="w-4 h-4" /> Confirmar Plan <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                   </>
                 )}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: EDUCATIONAL SERVICES */}
        <section className="mt-20 px-4 md:px-6 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white">Servicios Educativos</h2>
            <div className="h-0.5 w-10 bg-blue-500 mx-auto mt-2"></div>
          </div>
          
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-4 md:p-10 relative mx-auto max-w-4xl">
             <div className="grid md:grid-cols-2 gap-8 relative z-10">
                {/* Mentorship */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2"><GraduationCap className="text-blue-500 w-5 h-5" /><h3 className="text-xl font-bold text-white">Mentoría 1 a 1</h3></div>
                    <div className="bg-blue-900/10 border border-blue-500/20 rounded-lg p-4 relative">
                        <div className="absolute top-0 right-0 bg-emerald-500 text-black text-[9px] font-bold px-2 py-1 rounded-bl-lg">AHORRA $300</div>
                        <div className="text-2xl font-bold text-white mb-1">$1,500 USD</div>
                        <div className="text-[10px] text-emerald-400 font-bold mb-3">Plan Trimestral (Promo)</div>
                        <ul className="space-y-1 text-xs text-slate-400">
                            <li>• 3 Meses de Acompañamiento</li>
                            <li>• Instalación de Sistema</li>
                            <li>• Soporte en Slack</li>
                        </ul>
                    </div>
                    {/* BOTON MENTORIA - Z-50 */}
                    <a href={links.whatsapp_mentoria} target="_blank" rel="noopener noreferrer" className="relative z-50 pointer-events-auto w-full bg-white text-black text-sm font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50 cursor-pointer">
                        <MessageCircle className="w-4 h-4" /> Escribirme al WhatsApp
                    </a>
                </div>

                {/* Single Session */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2"><Users className="text-purple-500 w-5 h-5" /><h3 className="text-xl font-bold text-white">Sesión Única</h3></div>
                    <div className="bg-purple-900/10 border border-purple-500/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-white mb-1">$150 USD</div>
                        <div className="text-[10px] text-purple-400 font-bold mb-3">Por Sesión (90 min)</div>
                         <ul className="space-y-1 text-xs text-slate-400">
                            <li>• Auditoría en Vivo</li>
                            <li>• Desbloqueo Estratégico</li>
                            <li>• Grabación Incluida</li>
                        </ul>
                    </div>
                     {/* BOTON SESION - Z-50 */}
                    <a href={links.whatsapp_consultoria} target="_blank" rel="noopener noreferrer" className="relative z-50 pointer-events-auto w-full bg-white text-black text-sm font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-50 cursor-pointer">
                        <MessageCircle className="w-4 h-4" /> Agendar por WhatsApp
                    </a>
                </div>
             </div>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/10 bg-[#020202] pt-20 pb-10 relative z-20">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">¿Hacemos equipo?</h2>
          
          {/* BOTON FOOTER - Z-50 */}
          <div className="relative z-50 inline-block p-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mb-12">
            <a href={links.whatsapp_general} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-black rounded-full text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-3 cursor-pointer pointer-events-auto">
               Hablar con Juan <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 text-xs text-slate-600 font-mono uppercase tracking-widest">
            <span>Juan MKT Agency</span>
            <span>Bogotá, Colombia</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JuanMktProposal;