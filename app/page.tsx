'main'
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
  ExternalLink,
  Compass
} from 'lucide-react';
import { translations, servicesData, aboutData, teamCategoriesData, driveLinksData, eventsData, partnersData, blogData, Language } from './data';

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
    <main className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-blue-500 selection:text-white relative overflow-x-hidden flex flex-col justify-between p-4 md:p-10">
      
      {/* Uzay Arka Plan Efektleri */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />

      {/* ÜST KISIM (HEADER) */}
      <header className="max-w-4xl mx-auto w-full flex items-center justify-between pt-2 pb-6 relative z-10 border-b border-slate-800/60">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={goHome}>
          <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
            <Compass size={18} />
          </div>
          <span className="font-extrabold tracking-wider text-lg text-white">VEGA MEDIA</span>
        </div>

        {/* Geri Butonu veya Dil Seçeneği */}
        <div className="flex items-center gap-3">
          {activeSection !== 'home' && (
            <button 
              onClick={goHome}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all border border-slate-700"
            >
              <ArrowLeft size={14} />
              <span>{t.back}</span>
            </button>
          )}
          <button 
            onClick={() => setLang(lang === 'TR' ? 'EN' : 'TR')}
            className="px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 text-xs font-bold tracking-wider border border-slate-800 transition-colors"
          >
            {lang === 'TR' ? 'EN' : 'TR'}
          </button>
        </div>
      </header>

      {/* İÇERİK ALANI */}
      <div className="max-w-4xl mx-auto w-full my-auto relative z-10 py-4">
        
        {/* --- ANA SAYFA --- */}
        {activeSection === 'home' && (
          <div className="animate-fadeIn">
            <div className="mb-8">
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">
                VEGA MEDIA {t.brandSubtitle}
              </span>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mt-1">
                {t.homeTitle}
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              
              {/* Kart 1: Hizmetlerimiz */}
              <div onClick={() => setActiveSection('services')} className="group bg-[#090e1a]/80 hover:bg-[#0e1628] border border-slate-800 hover:border-blue-500/50 transition-all rounded-2xl p-5 cursor-pointer flex flex-col justify-between shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Camera size={20} />
                  </div>
                  <ArrowUpRight size={18} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{t.servicesTitle}</h2>
                  <p className="text-xs text-slate-400 mt-1">{t.servicesDesc}</p>
                </div>
              </div>

              {/* Kart 2: Ekibimize Katılın */}
              <div onClick={() => setActiveSection('join')} className="group bg-[#090e1a]/80 hover:bg-[#0e1628] border border-slate-800 hover:border-cyan-500/50 transition-all rounded-2xl p-5 cursor-pointer flex flex-col justify-between shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Rocket size={20} />
                  </div>
                  <ArrowUpRight size={18} className="text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{t.joinTitle}</h2>
                  <p className="text-xs text-slate-400 mt-1">{t.joinDesc}</p>
                </div>
              </div>

              {/* Kart 3: Vega Media Kimdir? */}
              <div onClick={() => setActiveSection('about')} className="group bg-[#090e1a]/80 hover:bg-[#0e1628] border border-slate-800 hover:border-indigo-500/50 transition-all rounded-2xl p-5 cursor-pointer flex flex-col justify-between shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <Sparkles size={20} />
                  </div>
                  <ArrowUpRight size={18} className="text-slate-600 group-hover:text-indigo-400 transition-colors" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{t.aboutTitle}</h2>
                  <p className="text-xs text-slate-400 mt-1">{t.aboutDesc}</p>
                </div>
              </div>

              {/* Kart 4: Ailemiz */}
              <div onClick={() => setActiveSection('team')} className="group bg-[#090e1a]/80 hover:bg-[#0e1628] border border-slate-800 hover:border-purple-500/50 transition-all rounded-2xl p-5 cursor-pointer flex flex-col justify-between shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Users size={20} />
                  </div>
                  <ArrowUpRight size={18} className="text-slate-600 group-hover:text-purple-400 transition-colors" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{t.teamTitle}</h2>
                  <p className="text-xs text-slate-400 mt-1">{t.teamDesc}</p>
                </div>
              </div>

              {/* Kart 5: Drive Bağlantıları */}
              <div onClick={() => setActiveSection('drive')} className="group bg-[#090e1a]/80 hover:bg-[#0e1628] border border-slate-800 hover:border-amber-500/50 transition-all rounded-2xl p-5 cursor-pointer flex flex-col justify-between shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <FolderKanban size={20} />
                  </div>
                  <ArrowUpRight size={18} className="text-slate-600 group-hover:text-amber-400 transition-colors" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{t.driveTitle}</h2>
                  <p className="text-xs text-slate-400 mt-1">{t.driveDesc}</p>
                </div>
              </div>

              {/* Kart 6: Etkinlikler */}
              <div onClick={() => setActiveSection('events')} className="group bg-[#090e1a]/80 hover:bg-[#0e1628] border border-slate-800 hover:border-sky-500/50 transition-all rounded-2xl p-5 cursor-pointer flex flex-col justify-between shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                    <Calendar size={20} />
                  </div>
                  <ArrowUpRight size={18} className="text-slate-600 group-hover:text-sky-400 transition-colors" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{t.eventsTitle}</h2>
                  <p className="text-xs text-slate-400 mt-1">{t.eventsDesc}</p>
                </div>
              </div>

              {/* Kart 7: Gelecek Partnerler */}
              <div onClick={() => setActiveSection('partners')} className="group bg-[#090e1a]/80 hover:bg-[#0e1628] border border-slate-800 hover:border-emerald-500/50 transition-all rounded-2xl p-5 cursor-pointer flex flex-col justify-between shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Handshake size={20} />
                  </div>
                  <ArrowUpRight size={18} className="text-slate-600 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{t.partnersTitle}</h2>
                  <p className="text-xs text-slate-400 mt-1">{t.partnersDesc}</p>
                </div>
              </div>

              {/* Kart 8: Blog */}
              <div onClick={() => setActiveSection('blog')} className="group bg-[#090e1a]/80 hover:bg-[#0e1628] border border-slate-800 hover:border-rose-500/50 transition-all rounded-2xl p-5 cursor-pointer flex flex-col justify-between shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                    <Newspaper size={20} />
                  </div>
                  <ArrowUpRight size={18} className="text-slate-600 group-hover:text-rose-400 transition-colors" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{t.blogTitle}</h2>
                  <p className="text-xs text-slate-400 mt-1">{t.blogDesc}</p>
                </div>
              </div>

            </div>

            {/* İletişim Tam Genişlik Kartı */}
            <div onClick={() => setActiveSection('contact')} className="mt-3.5 group bg-[#090e1a]/80 hover:bg-[#0e1628] border border-slate-800 hover:border-teal-500/50 transition-all rounded-2xl p-5 cursor-pointer flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                  <PhoneCall size={18} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{t.contactTitle}</h2>
                  <p className="text-xs text-slate-400">{t.contactDesc}</p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-slate-600 group-hover:text-teal-400 transition-colors" />
            </div>

          </div>
        )}

        {/* --- 1. HİZMETLERİMİZ --- */}
        {activeSection === 'services' && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-black text-white mb-6">📸 {t.servicesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {servicesData.map((item) => (
                <div key={item.id} className="bg-[#090e1a] border border-slate-800 rounded-2xl p-5">
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 mt-1.5">
                    {lang === 'TR' ? item.descTR : item.descEN}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- 2. EKİBİMİZE KATILIN --- */}
        {activeSection === 'join' && (
          <div className="animate-fadeIn bg-[#090e1a] border border-slate-800 rounded-2xl p-6 md:p-10 text-center">
            <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 mx-auto mb-4">
              <Rocket size={28} />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white">{t.joinMainText}</h2>
            <p className="text-xs md:text-sm text-slate-400 mt-2 max-w-md mx-auto">{t.joinSubText}</p>
            <a 
              href="https://forms.gle/placeholder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20"
            >
              {t.joinBtn}
            </a>
          </div>
        )}

        {/* --- 3. VEGA MEDIA KİMDİR? --- */}
        {activeSection === 'about' && (
          <div className="animate-fadeIn max-w-xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-6 text-center">🪽 {t.aboutTitle}</h2>
            <div className="bg-[#090e1a] border border-slate-800 rounded-3xl p-6 md:p-8 relative shadow-xl">
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                {aboutData[lang]}
              </p>
            </div>
          </div>
        )}

        {/* --- 4. AİLEMİZ --- */}
        {activeSection === 'team' && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-black text-white mb-6">👥 {t.teamTitle}</h2>
            <div className="space-y-3.5">
              {teamCategoriesData.map((cat) => (
                <div key={cat.id} className="bg-[#090e1a] border border-slate-800 rounded-2xl p-5 hover:border-purple-500/50 transition-all cursor-pointer">
                  <h3 className="text-base font-bold text-white">{lang === 'TR' ? cat.titleTR : cat.titleEN}</h3>
                  <p className="text-xs text-slate-400 mt-1">{lang === 'TR' ? cat.descTR : cat.descEN}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- 5. DRIVE BAĞLANTILARI --- */}
        {activeSection === 'drive' && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-black text-white mb-6">📁 {t.driveTitle}</h2>
            <div className="space-y-3.5">
              {driveLinksData.map((drive) => (
                <div key={drive.id} className="bg-[#090e1a] border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold text-white">{drive.name}</h3>
                    <p className="text-xs text-slate-400 mt-1">{lang === 'TR' ? drive.descTR : drive.descEN}</p>
                  </div>
                  <a 
                    href={drive.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-semibold transition-all w-fit"
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
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-black text-white mb-6">🎟️ {t.eventsTitle}</h2>
            <div className="space-y-4">
              {eventsData.map((event) => (
                <div key={event.id} className="bg-[#090e1a] border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
                  <img src={event.image} alt={event.title} className="w-full h-48 md:h-64 object-cover" />
                  <div className="p-5">
                    <span className="text-xs font-semibold text-sky-400">{event.date}</span>
                    <h3 className="text-lg font-bold text-white mt-1">{event.title}</h3>
                    <p className="text-xs text-slate-400 mt-1.5">{lang === 'TR' ? event.descTR : event.descEN}</p>
                    <a 
                      href={event.instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-semibold transition-all"
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
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-black text-white mb-6">🤝 {t.partnersTitle}</h2>
            <div className="space-y-4">
              {partnersData.map((partner) => (
                <div key={partner.id} className="bg-[#090e1a] border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
                  <img src={partner.image} alt={partner.name} className="w-full h-48 md:h-64 object-cover" />
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white">{partner.name}</h3>
                    <p className="text-xs text-slate-400 mt-1.5">{lang === 'TR' ? partner.descTR : partner.descEN}</p>
                    <a 
                      href={partner.instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-all"
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
          <div className="animate-fadeIn">
            {selectedBlogId === null ? (
              <div>
                <h2 className="text-2xl font-black text-white mb-6">📰 {t.blogTitle}</h2>
                <div className="space-y-4">
                  {blogData.map((blog) => (
                    <div 
                      key={blog.id} 
                      onClick={() => setSelectedBlogId(blog.id)}
                      className="bg-[#090e1a] border border-slate-800 hover:border-rose-500/50 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all"
                    >
                      <img src={blog.image} alt="Blog" className="w-full h-40 md:h-52 object-cover" />
                      <div className="p-5">
                        <span className="text-xs font-semibold text-rose-400">{blog.date}</span>
                        <h3 className="text-lg font-bold text-white mt-1">{lang === 'TR' ? blog.titleTR : blog.titleEN}</h3>
                        <p className="text-xs text-slate-400 mt-1.5">{lang === 'TR' ? blog.descTR : blog.descEN}</p>
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
                    <div className="bg-[#090e1a] border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
                      <img src={blog.image} alt="Blog Detay" className="w-full h-60 md:h-80 object-cover" />
                      <div className="p-6 md:p-8">
                        <button 
                          onClick={() => setSelectedBlogId(null)}
                          className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 mb-4 hover:underline"
                        >
                          <ArrowLeft size={14} />
                          <span>{t.back}</span>
                        </button>
                        <span className="text-xs font-semibold text-rose-400">{blog.date}</span>
                        <h1 className="text-2xl md:text-3xl font-black text-white mt-1 mb-4">{lang === 'TR' ? blog.titleTR : blog.titleEN}</h1>
                        <p className="text-sm text-slate-300 leading-relaxed">{lang === 'TR' ? blog.contentTR : blog.contentEN}</p>
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
          <div className="animate-fadeIn max-w-xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-6 text-center">📩 {t.contactTitle}</h2>
            <div className="bg-[#090e1a] border border-slate-800 rounded-3xl p-6 md:p-8 space-y-5 shadow-xl">
              
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <span className="text-sm font-semibold text-slate-400">{t.instagramLabel}</span>
                <a href="https://instagram.com/vegamediatr" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-teal-400 hover:underline">
                  @vegamediatr
                </a>
              </div>

              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <span className="text-sm font-semibold text-slate-400">{t.emailLabel}</span>
                <span className="text-sm font-medium text-slate-200">{t.emailPlaceholder}</span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div>
                  <span className="text-sm font-bold text-white block">{t.phone1Name}</span>
                  <span className="text-xs text-slate-500">Telefon</span>
                </div>
                <span className="text-sm font-medium text-slate-200">{t.phonePlaceholder}</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-white block">{t.phone2Name}</span>
                  <span className="text-xs text-slate-500">Telefon</span>
                </div>
                <span className="text-sm font-medium text-slate-200">{t.phonePlaceholder}</span>
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
            href="https://instagram.com/cenkyaman" 
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