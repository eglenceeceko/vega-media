'use client';

import React, { useState } from 'react';
import { 
  Camera, 
  Rocket, 
  Sparkles, 
  Users, 
  FolderKanban, 
  Calendar, 
  Handshake, 
  Newspaper, 
  PhoneCall, 
  ArrowLeft, 
  ArrowUpRight,
  Zap
} from 'lucide-react';
import { translations, Language } from './data';

export default function VegaMediaApp() {
  const [lang, setLang] = useState<Language>('TR');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  const t = translations[lang];

  const goHome = () => {
    setActiveSection('home');
    setSelectedBlogId(null);
  };

  return (
    <main className="min-h-screen bg-[#030508] text-slate-300 font-sans selection:bg-indigo-900 selection:text-white relative overflow-x-hidden flex flex-col justify-between p-6 md:p-16 antialiased">
      
      {/* --- UZAY VE YILDIZ ARKA PLAN KATMANI --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Vega Yıldızı Temsili (Tepe Noktada Parlayan Dev Gradyan) */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[45rem] h-[45rem] bg-indigo-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/4 -right-32 w-[35rem] h-[35rem] bg-blue-600/10 rounded-full blur-[120px]" />
        
        {/* Sabit Yıldız Efektleri (CSS ile rastgele serpiştirilmiş minik parıltılar) */}
        <div className="absolute top-12 left-[15%] w-1 h-1 bg-white rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-28 right-[20%] w-1.5 h-1.5 bg-indigo-200 rounded-full opacity-80 animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-40 left-[30%] w-1 h-1 bg-blue-300 rounded-full opacity-50" />
        <div className="absolute top-1/3 right-[15%] w-1 h-1 bg-white rounded-full opacity-70" />
        <div className="absolute bottom-1/4 left-[10%] w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-60 animate-pulse" />
        <div className="absolute bottom-20 right-[25%] w-1 h-1 bg-white rounded-full opacity-40" />
      </div>

      {/* HEADER */}
      <header className="max-w-3xl mx-auto w-full flex items-center justify-between pb-8 border-b border-slate-800/80 relative z-10">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={goHome}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-700 p-0.5 shadow-lg shadow-indigo-900/40 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#030508] rounded-[10px] flex items-center justify-center">
              <span className="font-extrabold text-sm tracking-tighter text-white">VM</span>
            </div>
          </div>
          <div>
            <h1 className="font-bold tracking-widest text-sm text-white uppercase flex items-center gap-1.5">
              Vega Media <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping"></span>
            </h1>
            <p className="text-[10px] text-slate-500 tracking-wider uppercase font-medium">Production Hub</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {activeSection !== 'home' && (
            <button 
              onClick={goHome}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-700/80 text-slate-200 text-xs font-medium transition-all duration-300 cursor-pointer backdrop-blur-md"
            >
              <ArrowLeft size={14} className="text-indigo-400" />
              <span>{t.back}</span>
            </button>
          )}
          <button 
            onClick={() => setLang(lang === 'TR' ? 'EN' : 'TR')}
            className="px-4 py-2 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-700/80 text-indigo-400 font-bold text-xs tracking-wider transition-all duration-300 cursor-pointer backdrop-blur-md"
          >
            {lang === 'TR' ? 'EN' : 'TR'}
          </button>
        </div>
      </header>

      {/* İÇERİK ALANI */}
      <div className="max-w-3xl mx-auto w-full my-auto py-12 relative z-10">
        
        {activeSection === 'home' && (
          <div className="animate-fadeIn">
            <div className="mb-12 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-700/50 text-indigo-300 text-[11px] font-semibold mb-3 shadow-inner backdrop-blur-md">
                <Zap size={12} className="text-indigo-400" />
                <span>Yaratıcı Medya Ekosistemi</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white leading-tight">
                {t.homeTitle}
              </h2>
            </div>

            {/* Grid Kartlar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              
              <div onClick={() => setActiveSection('services')} className="group bg-slate-900/30 hover:bg-slate-900/70 border border-slate-800/80 hover:border-indigo-700 rounded-2xl p-5 cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/50 backdrop-blur-md h-48">
                <div className="flex items-center justify-between mb-auto">
                  <div className="p-2.5 rounded-xl bg-indigo-950/80 border border-indigo-800/60 text-indigo-400"><Camera size={18} strokeWidth={1.5} /></div>
                  <span className="text-[10px] font-mono text-slate-600 group-hover:text-indigo-400 transition-colors">01</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-100 group-hover:text-white">{t.servicesTitle}</h3>
                  <p className="text-xs text-slate-500 mt-1.5 group-hover:text-slate-400">{t.servicesDesc}</p>
                </div>
              </div>

              <div onClick={() => setActiveSection('join')} className="group bg-slate-900/30 hover:bg-slate-900/70 border border-slate-800/80 hover:border-blue-700 rounded-2xl p-5 cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/50 backdrop-blur-md h-48">
                <div className="flex items-center justify-between mb-auto">
                  <div className="p-2.5 rounded-xl bg-blue-950/80 border border-blue-800/60 text-blue-400"><Rocket size={18} strokeWidth={1.5} /></div>
                  <span className="text-[10px] font-mono text-slate-600 group-hover:text-blue-400 transition-colors">02</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-100 group-hover:text-white">{t.joinTitle}</h3>
                  <p className="text-xs text-slate-500 mt-1.5 group-hover:text-slate-400">{t.joinDesc}</p>
                </div>
              </div>

              <div onClick={() => setActiveSection('about')} className="group bg-slate-900/30 hover:bg-slate-900/70 border border-slate-800/80 hover:border-fuchsia-700 rounded-2xl p-5 cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-950/50 backdrop-blur-md h-48">
                <div className="flex items-center justify-between mb-auto">
                  <div className="p-2.5 rounded-xl bg-fuchsia-950/80 border border-fuchsia-800/60 text-fuchsia-400"><Sparkles size={18} strokeWidth={1.5} /></div>
                  <span className="text-[10px] font-mono text-slate-600 group-hover:text-fuchsia-400 transition-colors">03</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-100 group-hover:text-white">{t.aboutTitle}</h3>
                  <p className="text-xs text-slate-500 mt-1.5 group-hover:text-slate-400">{t.aboutDesc}</p>
                </div>
              </div>

              <div onClick={() => setActiveSection('team')} className="group bg-slate-900/30 hover:bg-slate-900/70 border border-slate-800/80 hover:border-teal-700 rounded-2xl p-5 cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-950/50 backdrop-blur-md h-48">
                <div className="flex items-center justify-between mb-auto">
                  <div className="p-2.5 rounded-xl bg-teal-950/80 border border-teal-800/60 text-teal-400"><Users size={18} strokeWidth={1.5} /></div>
                  <span className="text-[10px] font-mono text-slate-600 group-hover:text-teal-400 transition-colors">04</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-100 group-hover:text-white">{t.teamTitle}</h3>
                  <p className="text-xs text-slate-500 mt-1.5 group-hover:text-slate-400">{t.teamDesc}</p>
                </div>
              </div>

              <div onClick={() => setActiveSection('drive')} className="group bg-slate-900/30 hover:bg-slate-900/70 border border-slate-800/80 hover:border-amber-700 rounded-2xl p-5 cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-950/50 backdrop-blur-md h-48">
                <div className="flex items-center justify-between mb-auto">
                  <div className="p-2.5 rounded-xl bg-amber-950/80 border border-amber-800/60 text-amber-400"><FolderKanban size={18} strokeWidth={1.5} /></div>
                  <span className="text-[10px] font-mono text-slate-600 group-hover:text-amber-400 transition-colors">05</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-100 group-hover:text-white">{t.driveTitle}</h3>
                  <p className="text-xs text-slate-500 mt-1.5 group-hover:text-slate-400">{t.driveDesc}</p>
                </div>
              </div>

              <div onClick={() => setActiveSection('events')} className="group bg-slate-900/30 hover:bg-slate-900/70 border border-slate-800/80 hover:border-cyan-700 rounded-2xl p-5 cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/50 backdrop-blur-md h-48">
                <div className="flex items-center justify-between mb-auto">
                  <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-800/60 text-cyan-400"><Calendar size={18} strokeWidth={1.5} /></div>
                  <span className="text-[10px] font-mono text-slate-600 group-hover:text-cyan-400 transition-colors">06</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-100 group-hover:text-white">{t.eventsTitle}</h3>
                  <p className="text-xs text-slate-500 mt-1.5 group-hover:text-slate-400">{t.eventsDesc}</p>
                </div>
              </div>

              <div onClick={() => setActiveSection('partners')} className="group bg-slate-900/30 hover:bg-slate-900/70 border border-slate-800/80 hover:border-emerald-700 rounded-2xl p-5 cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/50 backdrop-blur-md h-48">
                <div className="flex items-center justify-between mb-auto">
                  <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-400"><Handshake size={18} strokeWidth={1.5} /></div>
                  <span className="text-[10px] font-mono text-slate-600 group-hover:text-emerald-400 transition-colors">07</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-100 group-hover:text-white">{t.partnersTitle}</h3>
                  <p className="text-xs text-slate-500 mt-1.5 group-hover:text-slate-400">{t.partnersDesc}</p>
                </div>
              </div>

              <div onClick={() => setActiveSection('blog')} className="group bg-slate-900/30 hover:bg-slate-900/70 border border-slate-800/80 hover:border-rose-700 rounded-2xl p-5 cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-950/50 backdrop-blur-md h-48">
                <div className="flex items-center justify-between mb-auto">
                  <div className="p-2.5 rounded-xl bg-rose-950/80 border border-rose-800/60 text-rose-400"><Newspaper size={18} strokeWidth={1.5} /></div>
                  <span className="text-[10px] font-mono text-slate-600 group-hover:text-rose-400 transition-colors">08</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-100 group-hover:text-white">{t.blogTitle}</h3>
                  <p className="text-xs text-slate-500 mt-1.5 group-hover:text-slate-400">{t.blogDesc}</p>
                </div>
              </div>

            </div>

            {/* İletişim Kartı */}
            <div onClick={() => setActiveSection('contact')} className="mt-4 group bg-slate-900/30 hover:bg-slate-900/70 border border-slate-800/80 hover:border-teal-700 rounded-2xl p-6 cursor-pointer flex items-center justify-between transition-all duration-300 hover:shadow-xl hover:shadow-teal-950/50 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-teal-950/80 border border-teal-800/60 text-teal-400"><PhoneCall size={20} strokeWidth={1.5} /></div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 group-hover:text-white">{t.contactTitle}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{t.contactDesc}</p>
                </div>
              </div>
              <ArrowUpRight size={20} className="text-slate-600 group-hover:text-teal-400 transition-colors" />
            </div>

          </div>
        )}

        {/* Diğer Sayfalar için Yer Tutucu */}
        {activeSection !== 'home' && (
          <div className="text-slate-200 animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4 capitalize">{activeSection}</h2>
            <p className="text-sm text-slate-400">Bu bölüm aktif ve verilerini data.ts üzerinden çekiyor.</p>
          </div>
        )}

      </div>

      <footer className="max-w-3xl mx-auto w-full pt-8 border-t border-slate-800/80 text-center text-xs text-slate-600 relative z-10">
        © {new Date().getFullYear()} Vega Media Production Hub. Tüm hakları saklıdır.
      </footer>
    </main>
  );
}