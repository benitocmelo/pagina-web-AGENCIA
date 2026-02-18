import React, { useState } from 'react';
import { 
  Calculator, Zap, TrendingUp, ShieldCheck, ArrowRight, X, Menu, 
  Check, ChevronRight, BarChart3, Fingerprint, Users, GraduationCap, 
  Briefcase, Info, Gift, CalendarClock, MessageCircle, Tag, Award, 
  Database, Trophy, Star, Rocket, LineChart, ShoppingBag, Target, Wallet,
  AlertTriangle, CheckCircle2, Microscope, FileCheck
} from 'lucide-react';

// 1. Declaración global para evitar errores de TypeScript con fbq
declare global {
  interface Window {
    fbq: any;
  }
}

// --- SUB-COMPONENT: Credential Card (Handles Image Errors & Clicks) ---
const CredentialCard: React.FC<{ item: any, onClick: () => void }> = ({ item, onClick }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      onClick={onClick}
      className="flex-shrink-0 snap-center w-[220px] md:w-full h-full bg-[#0F0F0F] border border-white/10 rounded-xl p-5 flex flex-col justify-between group hover:border-white/30 transition-all cursor-pointer hover:bg-[#141414]"
    >
        {/* Header Visual */}
        <div className="h-32 w-full flex items-center justify-center mb-4 relative overflow-hidden rounded-lg bg-black/50">
            {item.type === 'badge' ? (
                <div className="w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center border border-yellow-500/30 group-hover:scale-110 transition-transform duration-500">
                    <Trophy className="w-10 h-10 text-yellow-500" />
                </div>
            ) : (
                <>
                    {!imgError ? (
                        <img 
                            src={item.url} 
                            alt={item.title} 
                            className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500" 
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        // Placeholder Premium cuando falla la imagen
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center text-slate-500">
                            <FileCheck className="w-8 h-8 mb-2 opacity-50" />
                            <span className="text-[9px] uppercase tracking-widest font-bold opacity-50">Certificado Verificado</span>
                        </div>
                    )}
                </>
            )}
            
            {/* Hover Hint */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-bold text-white flex items-center gap-1">
                    <Microscope className="w-3 h-3" /> Ver Credencial
                </span>
            </div>
        </div>

        {/* Text Content */}
        <div className="text-center w-full">
            <h4 className="font-bold text-sm text-white mb-1">{item.title}</h4>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider opacity-70 mb-2">{item.subtitle}</div>
            <p className="text-[10px] text-slate-400 leading-snug line-clamp-2">
                {item.desc}
            </p>
        </div>
    </div>
  );
};

const JuanMktProposal: React.FC = () => {
  // State for Calculator
  const [investment, setInvestment] = useState<number>(1000);
  
  // State for Modal (Credentials)
  const [selectedCredential, setSelectedCredential] = useState<string | null>(null);

  // 2. Función Inteligente para enviar el evento (Francotirador)
  const handleLeadClick = (label: string) => {
    // Verificamos si el pixel está cargado para evitar errores
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: label,
        content_category: 'WhatsApp Contact',
        value: 10.00, // Valor simbólico para el algoritmo
        currency: 'USD'
      });
      console.log(`⚡ Evento Lead enviado a Facebook: ${label}`);
    }
  };

  // Derive plan from investment
  const getPlanFromInvestment = (inv: number): 'starter' | 'growth' | 'scale' => {
    if (inv <= 3000) return 'starter';
    if (inv <= 15000) return 'growth';
    return 'scale';
  };

  const activePlanKey = getPlanFromInvestment(investment);

  const plans = {
    starter: { 
      name: 'Starter', 
      range: '$0–$3k / mes en ads', 
      base: 500, 
      varPct: 0, 
      tag: 'Orden + Preparación para escalar',
      defaultInv: 1000
    },
    growth: { 
      name: 'Growth', 
      range: '$3k–$15k / mes en ads', 
      base: 600, 
      varPct: 10, 
      tag: 'Crecimiento + Testing constante',
      defaultInv: 5000
    },
    scale: { 
      name: 'Scale', 
      range: '$15k+ / mes en ads', 
      base: 1000, 
      varPct: 8, 
      tag: 'Escalamiento controlado',
      defaultInv: 20000
    }
  };

  const currentPlan = plans[activePlanKey];
  const variableFee = (investment * currentPlan.varPct) / 100;
  const month1Total = currentPlan.base;
  const month2Total = currentPlan.base + variableFee;

  const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  // --- TUS ENLACES DE CONTACTO ---
  const links = {
    whatsapp_general: "https://wa.link/a75jti", 
    whatsapp_mentoria: "https://wa.link/4fvitd", 
    whatsapp_consultoria: "https://wa.link/r030oa" 
  };
  
  // Custom WhatsApp link generation for Calculator
  const phoneNumber = "573000000000"; 
  const whatsappMessage = `Hola quiero aplicar al modelo de escalamiento.

Tienda: [link]
Inversión mensual en Ads: ${formatCurrency(investment)}
Plan de interés: ${currentPlan.name}
Objetivo en 90 días: [meta]`;
  const whatsappCalculatorLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // --- CREDENTIALS DATA (UPDATED WITH FRESH LINKS) ---
  const credentials = [
    { 
        id: 1,
        type: 'image', 
        title: 'Meta Ads Expert', 
        subtitle: 'CERTIFICACIÓN OFICIAL',
        desc: 'Validación oficial de competencias en Meta Ads.',
        url: "https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/Captura%20de%20pantalla%202026-01-14%20132948.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vQ2FwdHVyYSBkZSBwYW50YWxsYSAyMDI2LTAxLTE0IDEzMjk0OC5wbmciLCJpYXQiOjE3NzA4NjA1OTUsImV4cCI6MTgwMjM5NjU5NX0.qskjBqENwUVihVKN1fP_c1qz35F-IDQbOVOomBpNSYA"
    },
    { 
        id: 2,
        type: 'image', 
        title: 'Diploma Avanzado', 
        subtitle: 'ESTRATEGIA DIGITAL',
        desc: 'Estrategia aplicada a adquisición, embudos y crecimiento.',
        url: "https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/Captura%20de%20pantalla%202026-01-14%20133003.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vQ2FwdHVyYSBkZSBwYW50YWxsYSAyMDI2LTAxLTE0IDEzMzAwMy5wbmciLCJpYXQiOjE3NzA4NjA2NDMsImV4cCI6MTgwMjM5NjY0M30.xhO0APqziIbP2z7S6A_Hhm-Tz6GHSD9nJKU50kMO1L4"
    },
    { 
        id: 3,
        type: 'badge', 
        title: 'Trayectoria', 
        subtitle: '+5 AÑOS EXP.',
        desc: 'Experiencia real gestionando y escalando cuentas en ecommerce.',
        url: '' 
    },
    { 
        id: 4,
        type: 'image', 
        title: 'Certificado Pro', 
        subtitle: 'MEDIA BUYING',
        desc: 'Metodología de testeo, control de costos y escalamiento.',
        url: "https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/Captura%20de%20pantalla%202026-01-14%20133013.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vQ2FwdHVyYSBkZSBwYW50YWxsYSAyMDI2LTAxLTE0IDEzMzAxMy5wbmciLCJpYXQiOjE3NzA4NjA2NTksImV4cCI6MTgwMjM5NjY1OX0.jU0BDLh4EuUoyMdCuMc9fHmNElUEhHBKbVzznL2yzUg"
    },
    { 
        id: 5,
        type: 'image', 
        title: 'Insignia Meta', 
        subtitle: 'FACEBOOK & IG ADS',
        desc: 'Estructura, optimización y buenas prácticas para performance.',
        url: "https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/como-vender-por-facebook-e-instagram-ads.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vY29tby12ZW5kZXItcG9yLWZhY2Vib29rLWUtaW5zdGFncmFtLWFkcy5wbmciLCJpYXQiOjE3NzA4NjA2NzMsImV4cCI6MTgwMjM5NjY3M30.Ym0v_2upC4U79dBx2_S80Q_LRY7ZNjZ8uvd7Ix8PxdE"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden w-full relative">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* --- MODAL FOR CREDENTIALS --- */}
      {selectedCredential && (
        <div 
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedCredential(null)}
        >
          <div className="relative max-w-4xl w-full bg-[#101010] border border-white/10 rounded-2xl p-2 md:p-4 shadow-2xl flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
             <button 
                onClick={() => setSelectedCredential(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
             >
                <X className="w-5 h-5" />
             </button>
             
             <div className="w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-black/50 rounded-lg overflow-hidden">
                <img src={selectedCredential} alt="Certificado" className="max-w-full max-h-full object-contain" />
             </div>
             <div className="mt-4 text-center">
                <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4" /> Documento Verificado
                </div>
                <p className="text-[10px] text-slate-500 mt-1">Copia digital del certificado original.</p>
             </div>
          </div>
        </div>
      )}
      
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
            onClick={() => handleLeadClick('Header Contact Button')}
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
            <div className="max-w-5xl mx-auto px-4 md:px-6 mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                    Credenciales verificables (no promesas)
                </h3>
                <p className="text-sm text-slate-400 flex items-center gap-2">
                    <Award className="text-blue-500 w-4 h-4" /> Certificaciones + experiencia práctica escalando cuentas con Meta Ads en Colombia.
                </p>
            </div>
            
            {/* GRID OF CARDS - UPDATED TO 5 COLUMNS */}
            <div className="flex overflow-x-auto gap-4 px-4 md:px-0 pb-6 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-5 md:gap-4 md:overflow-visible max-w-5xl mx-auto relative z-20">
                {credentials.map((item) => (
                    <CredentialCard 
                        key={item.id} 
                        item={item} 
                        onClick={() => item.type === 'image' && setSelectedCredential(item.url)}
                    />
                ))}
            </div>
            
            <div className="mt-6 text-center">
                <p className="text-xs text-slate-600 uppercase tracking-widest font-bold">
                    No vendemos humo: mostramos credenciales y resultados verificables.
                </p>
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

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* RESULT 1 */}
                    <div className="bg-[#0F0F0F] rounded-2xl border border-white/10 overflow-hidden group hover:border-white/20 transition-colors">
                        {/* FIX: Moved badges to a dedicated header row so image is not covered. Used object-contain to show full image. */}
                        
                        {/* Technical Badges Header (Moved Out) */}
                        <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex justify-between items-center">
                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                                🇨🇴 COLOMBIA · META ADS
                            </div>
                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                                90 DÍAS
                            </div>
                        </div>

                        <div className="h-56 bg-black relative p-2 flex items-center justify-center">
                            <img src="https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/r2.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vcjIuanBlZyIsImlhdCI6MTc2ODQxNjgyMiwiZXhwIjoxNzk5OTUyODIyfQ.3clD7ksYtgIDzLHfIoemNsy6coAFJJrWSB9hPLbQuc0" className="max-w-full max-h-full object-contain" alt="Result"/>

                            {/* Result Tag (Moved to Bottom Right of Image) */}
                            <div className="absolute bottom-3 right-3 bg-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold font-mono shadow-lg shadow-emerald-900/20 z-10 border border-emerald-400">
                                +196% CRECIMIENTO
                            </div>
                        </div>
                        <div className="p-5 border-t border-white/10">
                            <h3 className="text-lg font-bold text-white mb-2">El Club del Billón</h3>
                            <p className="text-sm text-slate-400 mb-4">Rompimos la barrera de los $1,000 Millones en facturación.</p>
                            <div className="pt-3 border-t border-white/5">
                                <p className="text-[11px] text-slate-500 font-mono leading-snug">
                                    <span className="text-slate-400 font-bold opacity-75">Palanca aplicada:</span> <br/>
                                    Sistema de testeo creativo + escalamiento progresivo
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RESULT 2 */}
                    <div className="bg-[#0F0F0F] rounded-2xl border border-white/10 overflow-hidden group hover:border-white/20 transition-colors">
                        
                         {/* Technical Badges Header (Moved Out) */}
                         <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex justify-between items-center">
                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                                🇨🇴 COLOMBIA · META ADS
                            </div>
                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                                90 DÍAS
                            </div>
                        </div>

                        <div className="h-56 bg-black relative p-2 flex items-center justify-center">
                             <img src="https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/r3.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vcjMuanBlZyIsImlhdCI6MTc2ODQxNjc2NywiZXhwIjoxNzk5OTUyNzY3fQ.3tDLwvh9mGNDMIOpO-wCVkSOKjvRhZlQ64X0zxBzk84" className="max-w-full max-h-full object-contain" alt="Result"/>
                            
                            {/* Result Tag (Moved to Bottom Right) */}
                            <div className="absolute bottom-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold font-mono shadow-lg shadow-blue-900/20 z-10 border border-blue-400/50">
                                +150% PEDIDOS
                            </div>
                        </div>
                        <div className="p-5 border-t border-white/10">
                            <h3 className="text-lg font-bold text-white mb-2">Máquina de Logística</h3>
                            <p className="text-sm text-slate-400 mb-4">Escalamos la adquisición generando más de 3,290 órdenes.</p>
                            <div className="pt-3 border-t border-white/5">
                                <p className="text-[11px] text-slate-500 font-mono leading-snug">
                                    <span className="text-slate-400 font-bold opacity-75">Palanca aplicada:</span> <br/>
                                    Creativos ganadores + optimización de estructura
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RESULT 3 */}
                    <div className="bg-[#0F0F0F] rounded-2xl border border-white/10 overflow-hidden group hover:border-white/20 transition-colors">
                        
                         {/* Technical Badges Header (Moved Out) */}
                         <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex justify-between items-center">
                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                                🇨🇴 COLOMBIA · META ADS
                            </div>
                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                                21 DÍAS
                            </div>
                        </div>

                        <div className="h-56 bg-black relative p-2 flex items-center justify-center">
                             <img src="https://erxxuotslhjluwrlxmyx.supabase.co/storage/v1/object/sign/LANDING%20POST%20PARTO/r1.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZWQxZTBkNS1mNzcwLTRmMDMtODRhYy1jYTk2YzZkZmM1NDQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMQU5ESU5HIFBPU1QgUEFSVE8vcjEuanBlZyIsImlhdCI6MTc2ODQxNjgwMCwiZXhwIjoxNzk5OTUyODAwfQ.mAz5GJj-FJeXs2nO3DJ8Xourh79gIYRB1BUfPR9cVJM" className="max-w-full max-h-full object-contain" alt="Result"/>
                            
                            {/* Result Tag (Moved to Bottom Right) */}
                            <div className="absolute bottom-3 right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold font-mono shadow-lg shadow-purple-900/20 z-10 border border-purple-400/50">
                                +94% VENTAS
                            </div>
                        </div>
                        <div className="p-5 border-t border-white/10">
                            <h3 className="text-lg font-bold text-white mb-2">Duplicación de Facturación</h3>
                            <p className="text-sm text-slate-400 mb-4">Un sólido 94% de crecimiento en ventas totales (68M COP).</p>
                             <div className="pt-3 border-t border-white/5">
                                <p className="text-[11px] text-slate-500 font-mono leading-snug">
                                    <span className="text-slate-400 font-bold opacity-75">Palanca aplicada:</span> <br/>
                                    Aceleración de ganadores + control de costos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-xs text-slate-500/75 opacity-75">Resultados reales en Colombia con Meta Ads. Cada caso muestra ventana de medición + palanca aplicada.</p>
                </div>
            </div>
        </section>

        {/* SECTION 2: CALCULATOR (UPDATED MODELO DE ESCALAMIENTO) */}
        <section id="modelo-escalamiento" className="py-20 px-4 md:px-6 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent -z-10 blur-3xl pointer-events-none"></div>
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
               <div className="inline-block px-3 py-1 border border-white/10 rounded-full text-slate-400 text-xs tracking-widest uppercase mb-4 bg-white/5">
                  Modelo de Trabajo
               </div>
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Modelo de Escalamiento <br/>
                  <span className="text-blue-500">(Base + Variable)</span>
               </h2>
               <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                  Esto no es “cobro por anuncios”. Es un sistema de gestión y escalamiento. <br/>
                  <strong className="text-white">Trabajamos con marcas que se adaptan a la estructura</strong> (no al revés).
               </p>
            </div>

            {/* Filter Cards */}
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
               <div className="bg-emerald-900/10 border border-emerald-500/20 p-4 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                     <h4 className="text-xs font-bold text-emerald-400 uppercase mb-1">Requisito Recomendado</h4>
                     <p className="text-xs text-slate-400">Inversión mínima en Ads: <strong className="text-white">$1,000 USD/mes</strong></p>
                  </div>
               </div>
               <div className="bg-yellow-900/10 border border-yellow-500/20 p-4 rounded-xl flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                  <div>
                     <h4 className="text-xs font-bold text-yellow-500 uppercase mb-1">Importante</h4>
                     <p className="text-xs text-slate-400">Si tu inversión es muy baja y la base te obliga a recortar pauta, <strong className="text-white">este modelo no es para ti</strong>.</p>
                  </div>
               </div>
            </div>

            {/* Logic Explanation */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-slate-400 mb-12 text-center">
               <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/5">
                  <strong className="text-white">Base:</strong> Gestión + Sistema + Ejecución
               </div>
               <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/5">
                  <strong className="text-white">Variable:</strong> % sobre inversión (Alineación)
               </div>
               <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/5">
                  <strong className="text-white">Mes 1:</strong> Instalación del sistema (Sin Variable)
               </div>
            </div>

            {/* Main Panel */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl relative overflow-hidden">
               <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
                  
                  {/* Left Column: Input & Plans */}
                  <div className="lg:col-span-7 space-y-8">
                     {/* Slider */}
                     <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                        <div className="flex justify-between items-center mb-8 gap-4">
                           <div className="max-w-[65%]">
                              <h3 className="text-blue-500 font-bold text-sm md:text-base uppercase leading-tight tracking-wide">
                                 ¿Cuánto inviertes al mes en Ads?
                              </h3>
                              <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                                 Mueve el slider y te asignamos el plan que te corresponde.
                              </p>
                           </div>
                           <div className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                                {formatCurrency(investment)}
                           </div>
                        </div>
                        
                        <input 
                          type="range" 
                          min="0" 
                          max="20000" 
                          step="250" 
                          value={investment} 
                          onChange={(e) => setInvestment(Number(e.target.value))}
                          className="w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
                        />
                        <div className="flex justify-between mt-3 text-xs text-slate-500 font-mono mb-8">
                           <span>$0</span><span>$5k</span><span>$10k</span><span>$15k</span><span>$20k+</span>
                        </div>
                         
                         {/* DISCLAIMER NO PRECIO */}
                        <div className="text-[10px] text-slate-400/80 bg-[#0A0A0A] p-4 rounded-lg text-center border border-white/5">
                            Esto <strong className="text-slate-200">NO es el precio</strong>. Es el plan que te corresponde según tu inversión.
                        </div>
                     </div>

                     {/* Plans Selection */}
                     <div className="space-y-3">
                        {Object.entries(plans).map(([key, plan]) => (
                           <button
                              key={key}
                              onClick={() => setInvestment(plan.defaultInv)}
                              className={`w-full flex flex-col p-4 rounded-xl border transition-all text-left group relative overflow-hidden ${
                                 activePlanKey === key 
                                 ? 'bg-blue-600/10 border-blue-500/50 shadow-[0_0_20px_rgba(37,99,235,0.1)]' 
                                 : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                              }`}
                           >
                              {activePlanKey === key && (
                                  <div className="absolute top-0 right-0 bg-blue-600 text-[9px] font-bold text-white px-2 py-1 rounded-bl-lg">
                                      PLAN RECOMENDADO
                                  </div>
                              )}
                              
                              <div className="flex flex-col w-full">
                                 <span className={`font-bold text-sm mb-1 ${activePlanKey === key ? 'text-white' : 'text-slate-300'}`}>{plan.name}</span>
                                 <span className="text-xs text-slate-500 mb-2">{plan.range}</span>
                                 
                                 {/* TAG DESCRIPTIVO */}
                                 <div className={`inline-flex items-center gap-1.5 text-xs font-medium ${activePlanKey === key ? 'text-blue-300' : 'text-slate-400'}`}>
                                     <Tag className="w-3 h-3" /> {plan.tag}
                                 </div>

                                 {/* MINI CTA SOLO SI ACTIVO */}
                                 {activePlanKey === key && (
                                     <div className="mt-3 pt-3 border-t border-blue-500/20 text-[10px] font-bold text-blue-400 flex items-center gap-1 animate-pulse">
                                         Ver detalles del plan <ArrowRight className="w-3 h-3" />
                                     </div>
                                 )}
                              </div>
                           </button>
                        ))}
                        
                        <div className="text-center mt-6">
                            <p className="text-xs text-slate-500">En el siguiente paso verás el detalle del pago y cómo trabajamos en tu plan.</p>
                        </div>
                     </div>
                  </div>

                  {/* Right Column: Summary */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                     <div className="bg-gradient-to-br from-slate-900 to-black border border-blue-500/20 rounded-2xl p-6 h-full relative overflow-hidden flex flex-col">
                        {/* Promo Badge */}
                        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3 mb-6">
                           <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1">MES 1: INSTALACIÓN</div>
                           <p className="text-xs text-slate-400 leading-relaxed">Primer mes sin variable. Ordenamos estructura, señales y sistema de testeo antes de escalar.</p>
                        </div>

                        {/* MES 1 Breakdown */}
                        <div className="mb-6 pb-6 border-b border-white/10">
                            <div className="text-[10px] font-bold text-white uppercase tracking-wider mb-3">MES 1 (SIN VARIABLE)</div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm text-slate-400">
                                    <span>Fijo mensual</span>
                                    <span className="text-white font-mono">{formatCurrency(currentPlan.base)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-slate-400">
                                    <span>% sobre Ads</span>
                                    <span className="text-white font-mono">$0</span>
                                </div>
                                <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5">
                                    <span className="text-xs font-bold text-emerald-400 uppercase">TOTAL MES 1</span>
                                    <strong className="text-xl font-black text-white">{formatCurrency(month1Total)}</strong>
                                </div>
                            </div>
                        </div>

                        {/* MES 2+ Breakdown */}
                        <div className="mb-8">
                            <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-3">MES 2+ (GESTIÓN + ESCALAMIENTO)</div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm text-slate-400">
                                    <span>Fijo mensual</span>
                                    <span className="text-white font-mono">{formatCurrency(currentPlan.base)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-slate-400">
                                    <span>% sobre Ads ({currentPlan.varPct}%)</span>
                                    <span className="text-white font-mono">{formatCurrency(variableFee)}</span>
                                </div>
                                <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5">
                                    <span className="text-xs font-bold text-white uppercase">TOTAL MES 2+</span>
                                    <strong className="text-xl font-black text-white">{formatCurrency(month2Total)}</strong>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <a 
                               href={whatsappCalculatorLink} 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               onClick={() => handleLeadClick('Calculator Application')}
                               className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-0.5"
                            >
                               Aplicar por WhatsApp <ArrowRight className="w-4 h-4" />
                            </a>

                            <p className="text-[10px] text-center text-slate-500 mt-4 leading-relaxed">
                               Si necesitas bajar tu inversión para pagar el fee, <strong className="text-slate-400">no somos fit</strong>. Preferimos decírtelo de frente.
                            </p>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: STRATEGIC INTERVENTIONS (UPGRADED HIGH TICKET) */}
        <section className="mt-20 py-24 relative z-10 overflow-hidden">
          {/* Fondo Diferenciado - Midnight Blue Premium */}
          <div className="absolute inset-0 bg-[#09090b]"></div>
          
          {/* Iluminación Ambiental (Aurora Effect) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
          
          {/* Contenedor Principal */}
          <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-10">
                <div className="inline-block mb-3">
                     <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[10px] font-bold text-indigo-300 uppercase tracking-widest">
                         Servicios High-Ticket
                     </span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">Intervenciones Estratégicas</h2>
                <div className="text-xs md:text-sm text-slate-400 font-mono uppercase tracking-wider mb-6">
                  Sistema de Testeo → Validación → Graduación → Escalamiento
                </div>
                <div className="inline-block px-5 py-3 bg-[#0F0F13]/80 backdrop-blur-md border border-white/10 rounded-lg shadow-lg">
                   <p className="text-sm font-bold text-white">"Aquí tú ejecutas. Nosotros te guiamos."</p>
                   <p className="text-[10px] text-slate-400 mt-1">(Si buscas que lo hagamos por ti, ve al <a href="#modelo-escalamiento" className="text-indigo-400 hover:underline">Modelo de Escalamiento Base + Variable</a>.)</p>
                </div>
              </div>

              {/* FILTRO DE CALIDAD - Glassmorphism */}
              <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-[#13131A]/60 backdrop-blur-sm border border-white/5 rounded-lg p-3 text-center">
                    <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">Para Quién Es</div>
                    <div className="text-xs text-white font-medium flex items-center justify-center gap-2">
                       <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Marcas Validadas ($1k+/mes)
                    </div>
                  </div>
                  <div className="bg-[#13131A]/60 backdrop-blur-sm border border-white/5 rounded-lg p-3 text-center">
                    <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">Para Quién NO Es</div>
                    <div className="text-xs text-white font-medium flex items-center justify-center gap-2">
                       <X className="w-3 h-3 text-red-500" /> Dropshipping Genérico
                    </div>
                  </div>
                  <div className="bg-[#13131A]/60 backdrop-blur-sm border border-white/5 rounded-lg p-3 text-center">
                    <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">Requisito Mínimo</div>
                    <div className="text-xs text-white font-medium flex items-center justify-center gap-2">
                       <ShoppingBag className="w-3 h-3 text-indigo-500" /> Tienda Activa + Pixel
                    </div>
                  </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 relative z-10">
                  {/* Single Session - ENTRY POINT */}
                  <div className="bg-[#121218]/90 backdrop-blur border border-indigo-500/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative group hover:border-indigo-500/40 transition-colors shadow-lg hover:shadow-indigo-900/10">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                <Microscope className="w-4 h-4" />
                            </div>
                            <h3 className="text-lg font-bold text-white">Diagnóstico de Escalamiento <span className="text-sm font-normal text-slate-500 ml-1">(75 min)</span></h3>
                        </div>
                        <div className="text-3xl font-black text-white mb-2">$150 USD <span className="text-xs font-normal text-slate-500 ml-1">/ Único pago</span></div>
                        <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                            Sesión única. Sin gestión. Sales con un plan de 30 días. Diagnosticamos fugas de capital y te entregamos el roadmap exacto para destrabar tu facturación actual.
                        </p>
                        
                        <div className="space-y-3 mb-8">
                            <div className="flex gap-2 items-start">
                                <Check className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                                <div className="text-xs text-slate-300"><strong className="text-white">Auditoría en Vivo:</strong> Revisión de campañas y estructura.</div>
                            </div>
                            <div className="flex gap-2 items-start">
                                <Check className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                                <div className="text-xs text-slate-300"><strong className="text-white">Sistema de Testeo:</strong> Cómo encontrar ganadores rápido.</div>
                            </div>
                             <div className="flex gap-2 items-start">
                                <Check className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                                <div className="text-xs text-slate-300"><strong className="text-white">Roadmap Claro:</strong> Qué hacer los próximos 30 días.</div>
                            </div>
                        </div>
                      </div>

                      <a 
                        href={links.whatsapp_consultoria} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={() => handleLeadClick('Diagnostico Escalamiento')}
                        className="w-full bg-white/5 border border-white/10 text-white text-sm font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-600 hover:border-indigo-600 transition-all cursor-pointer group-hover:bg-indigo-600/10"
                      >
                          Agendar por WhatsApp <ArrowRight className="w-4 h-4" />
                      </a>
                      
                      <div className="mt-3 text-center text-[9px] text-slate-500 uppercase tracking-wider">Ideal para desbloquear crecimiento</div>
                  </div>

                  {/* Mentorship - HIGH TICKET */}
                  <div className="bg-[#121218]/90 backdrop-blur border border-blue-500/30 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative shadow-2xl shadow-blue-900/10">
                      <div className="absolute top-0 right-0 bg-blue-600 text-white text-[9px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                        CUPOS LIMITADOS
                      </div>
                      
                      <div>
                         <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <Zap className="w-4 h-4" />
                            </div>
                            <h3 className="text-lg font-bold text-white">Mentoría 1:1 - Sistema</h3>
                        </div>
                        <div className="text-3xl font-black text-white mb-2">$1,500 USD <span className="text-xs font-normal text-slate-500 ml-1">/ Trimestral</span></div>
                         <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                            90 días de acompañamiento (no una sesión). Estructura + testing + decisiones semanales para escalar sin romper margen.
                        </p>

                         <div className="space-y-3 mb-8">
                            <div className="flex gap-2 items-start">
                                <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <div className="text-xs text-slate-300"><strong className="text-white">12 Semanas:</strong> 1 sesión semanal de optimización.</div>
                            </div>
                            <div className="flex gap-2 items-start">
                                <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <div className="text-xs text-slate-300"><strong className="text-white">Estrategia:</strong> Revisión de métricas + plan de tests semanal.</div>
                            </div>
                             <div className="flex gap-2 items-start">
                                <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <div className="text-xs text-slate-300"><strong className="text-white">Soporte Slack/WhatsApp:</strong> Feedback continuo sobre creativos.</div>
                            </div>
                        </div>
                      </div>

                      <a 
                        href={links.whatsapp_mentoria} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={() => handleLeadClick('Mentoria High Ticket')}
                        className="w-full bg-blue-600 text-white text-sm font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-500 shadow-lg shadow-blue-900/50 cursor-pointer"
                      >
                          Aplicar al Programa <ArrowRight className="w-4 h-4" />
                      </a>
                      
                       <div className="mt-3 text-center text-[9px] text-blue-400/60 uppercase tracking-wider">Solo para dueños comprometidos</div>
                  </div>
              </div>
              
               <div className="mt-6 text-center">
                  <p className="text-[10px] text-slate-600 italic">
                    "¿Y si mi cuenta está desordenada?" — Precisamente por eso necesitas un sistema. <br/>
                    Ordenamos las señales primero, escalamos después. Basado en data real de Shopify + Meta Ads.
                  </p>
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
            <a 
                href={links.whatsapp_general} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => handleLeadClick('Footer Contact Button')}
                className="px-10 py-4 bg-black rounded-full text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-3 cursor-pointer pointer-events-auto"
            >
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