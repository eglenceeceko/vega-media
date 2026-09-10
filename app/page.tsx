'use client';

import { useState, useEffect } from 'react';
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
  ExternalLink,
  Flame
} from 'lucide-react';
import { translations, servicesData, aboutData, teamCategoriesData, driveLinksData, eventsData, partnersData, blogData, Language } from './data';

export default function VegaMediaApp() {
  const [lang, setLang] = useState<Language>('TR');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

const [isOpen, setIsOpen] = useState(false);

// --- USE EFFECT'I BURAYA EKLIYORSUN ---
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isOpen && e.deltaY > 0) {
        setIsOpen(true);
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isOpen]);

  const t = translations[lang];
  
  const goHome = () => {
    setActiveSection('home');
    setSelectedBlogId(null);
  };

  return (
    <main className="min-h-screen bg-[#030508] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden flex flex-col justify-between p-4 md:p-10 w-full max-w-full box-border">
      
      {/* Profesyonel Stüdyo Atmosfer Işıkları */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] md:w-[1200px] h-[450px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-blue-600/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[180px] rounded-full pointer-events-none" />

      {/* ÜST KISIM (HEADER & ÖZEL LOGO) */}
      <header className="max-w-4xl mx-auto w-full flex items-center justify-between pt-2 pb-6 relative z-10 border-b border-slate-800/60 backdrop-blur-md">
        <div className="flex items-center gap-3 cursor-pointer group min-w-0" onClick={goHome}>
{/* Profil Fotoğraflı Logo */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-all shrink-0 overflow-hidden">
            <div className="w-full h-full bg-[#0a0f1d] rounded-[11px] overflow-hidden flex items-center justify-center">
              <img 
                src="/vegamedia.jpeg" 
                alt="Cenk Yaman" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="min-w-0">
            <span className="font-black tracking-widest text-sm md:text-base text-white block truncate">
              VEGA MEDIA
            </span>
            <span className="text-[10px] text-indigo-400 font-semibold tracking-wider block -mt-1">
              Bir Cenk Yaman ve Nisa Damar kuruluşu.
            </span>
          </div>
        </div>
{/* Tam Ekran Kaydırılabilir Intro Perdesi */}
<div className={`fixed inset-0 z-[99999] bg-[#030508] flex flex-col items-center justify-between p-6 transition-transform duration-700 ease-in-out ${
  isOpen ? "-translate-y-full pointer-events-none" : "translate-y-0"
}`}
>
  {/* Sinematik Uzay ve Galaksi Atmosfer Işıkları */}
  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-blue-600/10 blur-[140px] rounded-full pointer-events-none" />
  <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-fuchsia-600/10 blur-[160px] rounded-full pointer-events-none" />

  {/* Sol Üst Dil Butonu */}
  <div className="z-10 self-start">
    <button 
      onClick={() => setLang(lang === 'TR' ? 'EN' : 'TR')}
      className="px-3.5 py-1.5 rounded-xl border border-slate-700/80 bg-slate-900/80 backdrop-blur-md text-xs font-semibold text-slate-300 hover:text-white transition-all shadow-md cursor-pointer"
    >
      {lang}
    </button>
  </div>

  {/* Orta Kısım: Ana Başlık ve Slogan */}
  <div className="z-10 flex flex-col items-center text-center my-auto cursor-pointer" onClick={() => setIsOpen(true)}>
    <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-bold mb-3 bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20 shadow-inner">
      Medya & Prodüksiyon
    </span>
    
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider text-white drop-shadow-2xl">
      VEGA MEDIA
    </h1>
    
    <p className="text-sm md:text-base text-slate-400 mt-4 max-w-md font-normal">
      {lang === 'TR' ? 'Her tarzdan etkinlik, gösteri ve konferansa destek veren medya ekibi' : 'The media team supporting all kinds of events, shows, and conferences'}
    </p>
  </div>

  {/* Alt Kısım: Keşfetmek İçin Kaydır */}
  <div className="z-10 flex flex-col items-center gap-2 pb-2 cursor-pointer" onClick={() => setIsOpen(true)}>
    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">
      {lang === 'TR' ? 'Keşfetmek İçin Kaydır' : 'Scroll to Discover'}
    </span>
    <div className="w-5 h-9 rounded-full border-2 border-slate-700/80 flex items-start justify-center p-1 bg-slate-900/50 backdrop-blur-sm">
      <div className="w-1 h-2 bg-indigo-400 rounded-full animate-bounce" />
    </div>
  </div>
</div>
        {/* Geri Butonu ve Dil Seçeneği */}
        <div className="flex items-center gap-3 shrink-0">
          {activeSection !== 'home' && (
            <button 
              onClick={goHome}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 text-xs font-semibold transition-all border border-slate-700/80 cursor-pointer shadow-md"
            >
              <ArrowLeft size={14} />
              <span>{t.back}</span>
            </button>
          )}
          <button 
            onClick={() => setLang(lang === 'TR' ? 'EN' : 'TR')}
            className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-indigo-300 text-xs font-bold tracking-wider border border-slate-800 transition-all cursor-pointer shadow-md"
          >
            {lang === 'TR' ? 'EN' : 'TR'}
          </button>
        </div>
      </header>

      {/* İÇERİK ALANI */}
      <div className="max-w-4xl mx-auto w-full my-auto relative z-10 py-4 min-w-0">
        
        {/* --- ANA SAYFA --- */}
        {activeSection === 'home' && (
          <div className="animate-fadeIn w-full">
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-indigo-400 text-xs font-bold tracking-widest uppercase bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20 shadow-inner">
                  <Flame size={14} className="text-indigo-400 animate-pulse shrink-0" />
                  <span className="truncate">VEGA MEDIA {t.brandSubtitle}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mt-3 break-words">
                  {t.homeTitle}
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Kart 1: Hizmetlerimiz */}
              <div onClick={() => setActiveSection('services')} className="group bg-[#090d16]/80 hover:bg-[#0e1424] border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 rounded-2xl p-5 cursor-pointer flex flex-col justify-between shadow-xl shadow-black/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/10 transition-all" />
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all shadow-md shrink-0">
                    <Camera size={22} />
                  </div>
                  <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-lg border border-indigo-500/20">{t.tagProduction}</span>
                </div>
                <div className="relative z-10 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors truncate">{t.servicesTitle}</h2>
                    <ArrowUpRight size={18} className="text-slate-600 group-hover:text-indigo-400 transition-colors shrink-0" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1 break-words">{t.servicesDesc}</p>
                </div>
              </div>

              {/* Kart 2: Ekibimize Katılın */}
              <div onClick={() => setActiveSection('join')} className="group bg-[#090d16]/80 hover:bg-[#0e1424] border border-slate-800/80 hover:border-blue-500/50 transition-all duration-300 rounded-2xl p-5 cursor-pointer flex flex-col justify-between shadow-xl shadow-black/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/10 transition-all" />
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all shadow-md shrink-0">
                    <Rocket size={22} />
                  </div>
                  <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-500/20">{t.tagCareer}</span>
                </div>
                <div className="relative z-10 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors truncate">{t.joinTitle}</h2>
                    <ArrowUpRight size={18} className="text-slate-600 group-hover:text-blue-400 transition-colors shrink-0" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1 break-words">{t.joinDesc}</p>
                </div>
              </div>

              {/* Kart 3: Vega Media Kimdir? */}
              <div onClick={() => setActiveSection('about')} className="group bg-[#090d16]/80 hover:bg-[#0e1424] border border-slate-800/80 hover:border-violet-500/50 transition-all duration-300 rounded-2xl p-5 cursor-pointer flex flex-col justify-between shadow-xl shadow-black/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-violet-500/10 transition-all" />
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:bg-violet-500/20 transition-all shadow-md shrink-0">
                    <Sparkles size={22} />
                  </div>
                  <span className="text-[10px] font-bold text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-lg border border-violet-500/20">{t.tagStory}</span>
                </div>
                <div className="relative z-10 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-lg font-bold text-white group-hover:text-violet-200 transition-colors truncate">{t.aboutTitle}</h2>
                    <ArrowUpRight size={18} className="text-slate-600 group-hover:text-violet-400 transition-colors shrink-0" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1 break-words">{t.aboutDesc}</p>
                </div>
              </div>

              {/* Kart 4: Ailemiz */}
              <div onClick={() => setActiveSection('team')} className="group bg-[#090d16]/80 hover:bg-[#0e1424] border border-slate-800/80 hover:border-fuchsia-500/50 transition-all duration-300 rounded-2xl p-5 cursor-pointer flex flex-col justify-between shadow-xl shadow-black/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-fuchsia-500/10 transition-all" />
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 group-hover:scale-110 group-hover:bg-fuchsia-500/20 transition-all shadow-md shrink-0">
                    <Users size={22} />
                  </div>
                  <span className="text-[10px] font-bold text-fuchsia-400 bg-fuchsia-500/10 px-2.5 py-1 rounded-lg border border-fuchsia-500/20">{t.tagTeam}</span>
                </div>
                <div className="relative z-10 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-lg font-bold text-white group-hover:text-fuchsia-200 transition-colors truncate">{t.teamTitle}</h2>
                    <ArrowUpRight size={18} className="text-slate-600 group-hover:text-fuchsia-400 transition-colors shrink-0" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1 break-words">{t.teamDesc}</p>
                </div>
              </div>

              {/* Kart 5: Drive Bağlantıları */}
              <div onClick={() => setActiveSection('drive')} className="group bg-[#090d16]/80 hover:bg-[#0e1424] border border-slate-800/80 hover:border-amber-500/50 transition-all duration-300 rounded-2xl p-5 cursor-pointer flex flex-col justify-between shadow-xl shadow-black/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/10 transition-all" />
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all shadow-md shrink-0">
                    <FolderKanban size={22} />
                  </div>
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">{t.tagArchive}</span>
                </div>
                <div className="relative z-10 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors truncate">{t.driveTitle}</h2>
                    <ArrowUpRight size={18} className="text-slate-600 group-hover:text-amber-400 transition-colors shrink-0" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1 break-words">{t.driveDesc}</p>
                </div>
              </div>

              {/* Kart 6: Etkinlikler */}
              <div onClick={() => setActiveSection('events')} className="group bg-[#090d16]/80 hover:bg-[#0e1424] border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 rounded-2xl p-5 cursor-pointer flex flex-col justify-between shadow-xl shadow-black/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-all" />
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all shadow-md shrink-0">
                    <Calendar size={22} />
                  </div>
                  <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">{t.tagCalendar}</span>
                </div>
                <div className="relative z-10 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors truncate">{t.eventsTitle}</h2>
                    <ArrowUpRight size={18} className="text-slate-600 group-hover:text-cyan-400 transition-colors shrink-0" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1 break-words">{t.eventsDesc}</p>
                </div>
              </div>

              {/* Kart 7: Gelecek Partnerler */}
              <div onClick={() => setActiveSection('partners')} className="group bg-[#090d16]/80 hover:bg-[#0e1424] border border-slate-800/80 hover:border-emerald-500/50 transition-all duration-300 rounded-2xl p-5 cursor-pointer flex flex-col justify-between shadow-xl shadow-black/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/10 transition-all" />
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all shadow-md shrink-0">
                    <Handshake size={22} />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">{t.tagCollaboration}</span>
                </div>
                <div className="relative z-10 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-lg font-bold text-white group-hover:text-emerald-200 transition-colors truncate">{t.partnersTitle}</h2>
                    <ArrowUpRight size={18} className="text-slate-600 group-hover:text-emerald-400 transition-colors shrink-0" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1 break-words">{t.partnersDesc}</p>
                </div>
              </div>

              {/* Kart 8: Blog */}
              <div onClick={() => setActiveSection('blog')} className="group bg-[#090d16]/80 hover:bg-[#0e1424] border border-slate-800/80 hover:border-rose-500/50 transition-all duration-300 rounded-2xl p-5 cursor-pointer flex flex-col justify-between shadow-xl shadow-black/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-rose-500/10 transition-all" />
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 group-hover:bg-rose-500/20 transition-all shadow-md shrink-0">
                    <Newspaper size={22} />
                  </div>
                  <span className="text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-lg border border-rose-500/20">{t.tagPublications}</span>
                </div>
                <div className="relative z-10 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-lg font-bold text-white group-hover:text-rose-200 transition-colors truncate">{t.blogTitle}</h2>
                    <ArrowUpRight size={18} className="text-slate-600 group-hover:text-rose-400 transition-colors shrink-0" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1 break-words">{t.blogDesc}</p>
                </div>
              </div>

            </div>

            {/* İletişim Tam Genişlik Kartı */}
            <div onClick={() => setActiveSection('contact')} className="mt-4 group bg-[#090d16]/80 hover:bg-[#0e1424] border border-slate-800/80 hover:border-teal-500/50 transition-all duration-300 rounded-2xl p-5 cursor-pointer flex items-center justify-between gap-4 shadow-xl shadow-black/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-500/10 transition-all" />
              <div className="flex items-center gap-4 relative z-10 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all shadow-md shrink-0">
                  <PhoneCall size={20} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-lg font-bold text-white group-hover:text-teal-200 transition-colors">{t.contactTitle}</h2>
                    <span className="text-[10px] font-bold text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded-lg border border-teal-500/20">{t.tagActive}</span>
                  </div>
                  <p className="text-xs text-slate-400 break-words">{t.contactDesc}</p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-slate-600 group-hover:text-teal-400 transition-colors relative z-10 shrink-0" />
            </div>

          </div>
        )}

        {/* --- 1. HİZMETLERİMİZ --- */}
        {activeSection === 'services' && (
          <div className="animate-fadeIn w-full">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block animate-ping shrink-0"></span>
              📸 {t.servicesTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicesData.map((item) => (
                <div key={item.id} className="bg-[#090d16] border border-slate-800/80 rounded-2xl p-5 shadow-lg backdrop-blur-sm">
                  <h3 className="text-base font-bold text-indigo-300 break-words">{item.title}</h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed break-words">
                    {lang === 'TR' ? item.descTR : item.descEN}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- 2. EKİBİMİZE KATILIN --- */}
        {activeSection === 'join' && (
          <div className="animate-fadeIn bg-[#090d16] border border-slate-800/80 rounded-3xl p-6 md:p-12 text-center shadow-2xl backdrop-blur-sm relative overflow-hidden w-full box-border">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mx-auto mb-4 shadow-inner relative z-10 shrink-0">
              <Rocket size={28} />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white relative z-10 break-words">{t.joinMainText}</h2>
            <p className="text-xs md:text-sm text-slate-400 mt-2 max-w-md mx-auto relative z-10 break-words">{t.joinSubText}</p>
            <a 
              href="https://forms.gle/placeholder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 cursor-pointer relative z-10"
            >
              {t.joinBtn}
            </a>
          </div>
        )}

        {/* --- 3. VEGA MEDIA KİMDİR? --- */}
        {activeSection === 'about' && (
          <div className="animate-fadeIn max-w-xl mx-auto w-full">
            <h2 className="text-2xl font-black text-white mb-6 text-center">🪽 {t.aboutTitle}</h2>
            <div className="bg-[#090d16] border border-slate-800/80 rounded-3xl p-6 md:p-8 relative shadow-2xl backdrop-blur-sm">
              <p className="text-sm md:text-base text-slate-300 leading-relaxed break-words">
                {aboutData[lang]}
              </p>
            </div>
          </div>
        )}

        {/* --- 4. AİLEMİZ --- */}
        {activeSection === 'team' && (
          <div className="animate-fadeIn w-full">
            <h2 className="text-2xl font-black text-white mb-6">👥 {t.teamTitle}</h2>
            <div className="space-y-4">
              {teamCategoriesData.map((cat) => (
                <div key={cat.id} className="bg-[#090d16] border border-slate-800/80 rounded-2xl p-5 hover:border-fuchsia-500/50 transition-all cursor-pointer shadow-lg backdrop-blur-sm">
                  <h3 className="text-base font-bold text-fuchsia-300 break-words">{lang === 'TR' ? cat.titleTR : cat.titleEN}</h3>
                  <p className="text-xs text-slate-400 mt-1 break-words">{lang === 'TR' ? cat.descTR : cat.descEN}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- 5. DRIVE BAĞLANTILARI --- */}
        {activeSection === 'drive' && (
          <div className="animate-fadeIn w-full">
            <h2 className="text-2xl font-black text-white mb-6">📁 {t.driveTitle}</h2>
            <div className="space-y-4">
              {driveLinksData.map((drive) => (
                <div key={drive.id} className="bg-[#090d16] border border-slate-800/80 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg backdrop-blur-sm">
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-amber-300 break-words">{drive.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 break-words">{lang === 'TR' ? drive.descTR : drive.descEN}</p>
                  </div>
                  <a 
                    href={drive.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-semibold transition-all w-fit cursor-pointer shadow-md shrink-0"
                  >
                    <span>{t.visitDrive}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- 6. ETKİNLİKLER --- */}
        {activeSection === 'events' && (
          <div className="animate-fadeIn w-full">
            <h2 className="text-2xl font-black text-white mb-6">🎟️ {t.eventsTitle}</h2>
            <div className="space-y-5">
              {eventsData.map((event) => (
                <div key={event.id} className="bg-[#090d16] border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
                  <img src={event.image} alt={event.title} className="w-full h-48 md:h-64 object-cover opacity-90" />
                  <div className="p-6">
                    <span className="text-xs font-semibold text-cyan-400">{event.date}</span>
                    <h3 className="text-lg font-bold text-white mt-1 break-words">{event.title}</h3>
                    <p className="text-xs text-slate-400 mt-1.5 break-words">{lang === 'TR' ? event.descTR : event.descEN}</p>
                    <a 
                      href={event.instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-semibold transition-all cursor-pointer shadow-md"
                    >
                      <span>{t.viewInstagram}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- 7. GELECEK PARTNERLERİMİZ --- */}
        {activeSection === 'partners' && (
          <div className="animate-fadeIn w-full">
            <h2 className="text-2xl font-black text-white mb-6">🤝 {t.partnersTitle}</h2>
            <div className="space-y-5">
              {partnersData.map((partner) => (
                <div key={partner.id} className="bg-[#090d16] border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
                  <img src={partner.image} alt={partner.name} className="w-full h-48 md:h-64 object-cover opacity-90" />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white break-words">{partner.name}</h3>
                    <p className="text-xs text-slate-400 mt-1.5 break-words">{lang === 'TR' ? partner.descTR : partner.descEN}</p>
                    <a 
                      href={partner.instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-all cursor-pointer shadow-md"
                    >
                      <span>{t.viewInstagram}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- 8. BLOG & BLOG DETAY --- */}
        {activeSection === 'blog' && (
          <div className="animate-fadeIn w-full">
            {selectedBlogId === null ? (
              <div>
                <h2 className="text-2xl font-black text-white mb-6">📰 {t.blogTitle}</h2>
                <div className="space-y-5">
                  {blogData.map((blog) => (
                    <div 
                      key={blog.id} 
                      onClick={() => setSelectedBlogId(blog.id)}
                      className="bg-[#090d16] border border-slate-800/80 hover:border-rose-500/50 rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 backdrop-blur-sm"
                    >
                      <img src={blog.image} alt="Blog" className="w-full h-40 md:h-52 object-cover opacity-90" />
                      <div className="p-6">
                        <span className="text-xs font-semibold text-rose-400">{blog.date}</span>
                        <h3 className="text-lg font-bold text-white mt-1 break-words">{lang === 'TR' ? blog.titleTR : blog.titleEN}</h3>
                        <p className="text-xs text-slate-400 mt-1.5 break-words">{lang === 'TR' ? blog.descTR : blog.descEN}</p>
                        <span className="inline-block mt-4 text-xs font-bold text-rose-400">
                          {t.readMore}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                {(() => {
                  const blog = blogData.find(b => b.id === selectedBlogId);
                  if (!blog) return null;
                  return (
                    <div className="bg-[#090d16] border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
                      <img src={blog.image} alt="Blog Detay" className="w-full h-60 md:h-80 object-cover opacity-90" />
                      <div className="p-6 md:p-8">
                        <button 
                          onClick={() => setSelectedBlogId(null)}
                          className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 mb-4 hover:underline cursor-pointer"
                        >
                          <ArrowLeft size={14} />
                          <span>{t.back}</span>
                        </button>
                        <span className="text-xs font-semibold text-rose-400">{blog.date}</span>
                        <h1 className="text-2xl md:text-3xl font-black text-white mt-1 mb-4 break-words">{lang === 'TR' ? blog.titleTR : blog.titleEN}</h1>
                        <p className="text-sm text-slate-300 leading-relaxed break-words">{lang === 'TR' ? blog.contentTR : blog.contentEN}</p>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        )}

        {/* --- 9. İLETİŞİM --- */}
        {activeSection === 'contact' && (
          <div className="animate-fadeIn max-w-xl mx-auto w-full">
            <h2 className="text-2xl font-black text-white mb-6 text-center">📩 {t.contactTitle}</h2>
            <div className="bg-[#090d16] border border-slate-800/80 rounded-3xl p-6 md:p-8 space-y-5 shadow-2xl backdrop-blur-sm">
              
              <div className="flex items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                <span className="text-sm font-semibold text-slate-400 shrink-0">{t.instagramLabel}</span>
                <a href="https://instagram.com/vegamediatr" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-teal-400 hover:underline truncate">
                  @vegamediatr
                </a>
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                <span className="text-sm font-semibold text-slate-400 shrink-0">{t.emailLabel}</span>
                <span className="text-sm font-medium text-slate-200 truncate">{t.emailPlaceholder}</span>
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                <div className="min-w-0">
                  <span className="text-sm font-bold text-white block truncate">{t.phone1Name}</span>
                  <span className="text-xs text-slate-500">Telefon</span>
                </div>
                <span className="text-sm font-medium text-slate-200 shrink-0">{t.phone1Value}</span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <span className="text-sm font-bold text-white block truncate">{t.phone2Name}</span>
                  <span className="text-xs text-slate-500">Telefon</span>
                </div>
                <span className="text-sm font-medium text-slate-200 shrink-0">{t.phone2Value}</span>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* FOOTER */}
      <footer className="max-w-4xl mx-auto w-full pt-8 pb-2 relative z-10 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          <span>Vega Media © 2026. All rights reserved.</span>
        </div>
        <div>
          <a 
            href="https://instagram.com/ccenkyaman" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-semibold text-slate-400 hover:text-white transition-colors"
          >
            {t.madeBy}
          </a>
        </div>
      </footer>

    </main>
  );
}