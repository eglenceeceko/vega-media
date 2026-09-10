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
  ExternalLink
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
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-zinc-200 selection:text-black relative overflow-x-hidden flex flex-col justify-between p-6 md:p-16">
      
      {/* ÜST KISIM (HEADER & LOGO) */}
      <header className="max-w-3xl mx-auto w-full flex items-center justify-between pb-8 border-b border-zinc-800">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={goHome}>
          <div className="w-9 h-9 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center group-hover:border-zinc-500 transition-colors">
            <span className="font-mono font-bold text-xs tracking-tighter text-zinc-200">
              VM
            </span>
          </div>
          <div>
            <span className="font-bold tracking-widest text-xs uppercase text-zinc-200 block">
              Vega Media
            </span>
            <span className="text-[9px] font-mono text-zinc-500 tracking-wider block">
              EST. 2026 // STUDIOS
            </span>
          </div>
        </div>

        {/* Geri Butonu ve Dil Seçeneği */}
        <div className="flex items-center gap-3">
          {activeSection !== 'home' && (
            <button 
              onClick={goHome}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-medium transition-colors border border-zinc-800 cursor-pointer"
            >
              <ArrowLeft size={13} />
              <span>{t.back}</span>
            </button>
          )}
          <button 
            onClick={() => setLang(lang === 'TR' ? 'EN' : 'TR')}
            className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 font-mono text-xs transition-colors border border-zinc-800 cursor-pointer"
          >
            {lang === 'TR' ? 'EN' : 'TR'}
          </button>
        </div>
      </header>

      {/* İÇERİK ALANI */}
      <div className="max-w-3xl mx-auto w-full my-auto py-8">
        
        {/* --- ANA SAYFA --- */}
        {activeSection === 'home' && (
          <div className="animate-fadeIn">
            <div className="mb-10">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                // Creative Production & Media Hub
              </span>
              <h1 className="text-3xl md:text-4xl font-light tracking-tight text-zinc-100">
                {t.homeTitle}
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              
              {/* Kart 1: Hizmetlerimiz */}
              <div onClick={() => setActiveSection('services')} className="group bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 rounded-xl p-5 cursor-pointer flex flex-col justify-between">
                <div className="flex items-center justify-between mb-8">
                  <Camera size={18} className="text-zinc-400 group-hover:text-zinc-100 transition-colors" />
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400">01</span>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-zinc-200 group-hover:text-white">{t.servicesTitle}</h2>
                    <ArrowUpRight size={15} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">{t.servicesDesc}</p>
                </div>
              </div>

              {/* Kart 2: Ekibimize Katılın */}
              <div onClick={() => setActiveSection('join')} className="group bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 rounded-xl p-5 cursor-pointer flex flex-col justify-between">
                <div className="flex items-center justify-between mb-8">
                  <Rocket size={18} className="text-zinc-400 group-hover:text-zinc-100 transition-colors" />
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400">02</span>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-zinc-200 group-hover:text-white">{t.joinTitle}</h2>
                    <ArrowUpRight size={15} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">{t.joinDesc}</p>
                </div>
              </div>

              {/* Kart 3: Vega Media Kimdir? */}
              <div onClick={() => setActiveSection('about')} className="group bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 rounded-xl p-5 cursor-pointer flex flex-col justify-between">
                <div className="flex items-center justify-between mb-8">
                  <Sparkles size={18} className="text-zinc-400 group-hover:text-zinc-100 transition-colors" />
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400">03</span>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-zinc-200 group-hover:text-white">{t.aboutTitle}</h2>
                    <ArrowUpRight size={15} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">{t.aboutDesc}</p>
                </div>
              </div>

              {/* Kart 4: Ailemiz */}
              <div onClick={() => setActiveSection('team')} className="group bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 rounded-xl p-5 cursor-pointer flex flex-col justify-between">
                <div className="flex items-center justify-between mb-8">
                  <Users size={18} className="text-zinc-400 group-hover:text-zinc-100 transition-colors" />
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400">04</span>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-zinc-200 group-hover:text-white">{t.teamTitle}</h2>
                    <ArrowUpRight size={15} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">{t.teamDesc}</p>
                </div>
              </div>

              {/* Kart 5: Drive Bağlantıları */}
              <div onClick={() => setActiveSection('drive')} className="group bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 rounded-xl p-5 cursor-pointer flex flex-col justify-between">
                <div className="flex items-center justify-between mb-8">
                  <FolderKanban size={18} className="text-zinc-400 group-hover:text-zinc-100 transition-colors" />
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400">05</span>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-zinc-200 group-hover:text-white">{t.driveTitle}</h2>
                    <ArrowUpRight size={15} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">{t.driveDesc}</p>
                </div>
              </div>

              {/* Kart 6: Etkinlikler */}
              <div onClick={() => setActiveSection('events')} className="group bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 rounded-xl p-5 cursor-pointer flex flex-col justify-between">
                <div className="flex items-center justify-between mb-8">
                  <Calendar size={18} className="text-zinc-400 group-hover:text-zinc-100 transition-colors" />
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400">06</span>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-zinc-200 group-hover:text-white">{t.eventsTitle}</h2>
                    <ArrowUpRight size={15} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">{t.eventsDesc}</p>
                </div>
              </div>

              {/* Kart 7: Gelecek Partnerler */}
              <div onClick={() => setActiveSection('partners')} className="group bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 rounded-xl p-5 cursor-pointer flex flex-col justify-between">
                <div className="flex items-center justify-between mb-8">
                  <Handshake size={18} className="text-zinc-400 group-hover:text-zinc-100 transition-colors" />
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400">07</span>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-zinc-200 group-hover:text-white">{t.partnersTitle}</h2>
                    <ArrowUpRight size={15} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">{t.partnersDesc}</p>
                </div>
              </div>

              {/* Kart 8: Blog */}
              <div onClick={() => setActiveSection('blog')} className="group bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 rounded-xl p-5 cursor-pointer flex flex-col justify-between">
                <div className="flex items-center justify-between mb-8">
                  <Newspaper size={18} className="text-zinc-400 group-hover:text-zinc-100 transition-colors" />
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400">08</span>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-zinc-200 group-hover:text-white">{t.blogTitle}</h2>
                    <ArrowUpRight size={15} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">{t.blogDesc}</p>
                </div>
              </div>

            </div>

            {/* İletişim Tam Genişlik */}
            <div onClick={() => setActiveSection('contact')} className="mt-3 group bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 rounded-xl p-5 cursor-pointer flex items-center justify-between">
              <div className="flex items-center gap-4">
                <PhoneCall size={18} className="text-zinc-400 group-hover:text-zinc-100 transition-colors" />
                <div>
                  <h2 className="text-sm font-medium text-zinc-200 group-hover:text-white">{t.contactTitle}</h2>
                  <p className="text-xs text-zinc-500">{t.contactDesc}</p>
                </div>
              </div>
              <ArrowUpRight size={15} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
            </div>

          </div>
        )}

        {/* --- 1. HİZMETLERİMİZ --- */}
        {activeSection === 'services' && (
          <div className="animate-fadeIn">
            <h2 className="text-xl font-light text-zinc-100 mb-6">{t.servicesTitle}</h2>
            <div className="space-y-3">
              {servicesData.map((item) => (
                <div key={item.id} className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-5">
                  <h3 className="text-sm font-medium text-zinc-200">{item.title}</h3>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                    {lang === 'TR' ? item.descTR : item.descEN}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- 2. EKİBİMİZE KATILIN --- */}
        {activeSection === 'join' && (
          <div className="animate-fadeIn bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-lg md:text-xl font-medium text-zinc-100">{t.joinMainText}</h2>
            <p className="text-xs md:text-sm text-zinc-500 mt-2 max-w-md mx-auto">{t.joinSubText}</p>
            <a 
              href="https://forms.gle/placeholder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-6 px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-900 font-medium text-xs transition-colors cursor-pointer"
            >
              {t.joinBtn}
            </a>
          </div>
        )}

        {/* --- 3. VEGA MEDIA KİMDİR? --- */}
        {activeSection === 'about' && (
          <div className="animate-fadeIn max-w-xl mx-auto">
            <h2 className="text-xl font-light text-zinc-100 mb-6 text-center">{t.aboutTitle}</h2>
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 md:p-8">
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                {aboutData[lang]}
              </p>
            </div>
          </div>
        )}

        {/* --- 4. AİLEMİZ --- */}
        {activeSection === 'team' && (
          <div className="animate-fadeIn">
            <h2 className="text-xl font-light text-zinc-100 mb-6">{t.teamTitle}</h2>
            <div className="space-y-3">
              {teamCategoriesData.map((cat) => (
                <div key={cat.id} className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-5">
                  <h3 className="text-sm font-medium text-zinc-200">{lang === 'TR' ? cat.titleTR : cat.titleEN}</h3>
                  <p className="text-xs text-zinc-500 mt-1">{lang === 'TR' ? cat.descTR : cat.descEN}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- 5. DRIVE BAĞLANTILARI --- */}
        {activeSection === 'drive' && (
          <div className="animate-fadeIn">
            <h2 className="text-xl font-light text-zinc-100 mb-6">{t.driveTitle}</h2>
            <div className="space-y-3">
              {driveLinksData.map((drive) => (
                <div key={drive.id} className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-zinc-200">{drive.name}</h3>
                    <p className="text-xs text-zinc-500 mt-1">{lang === 'TR' ? drive.descTR : drive.descEN}</p>
                  </div>
                  <a 
                    href={drive.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium transition-colors w-fit"
                  >
                    <span>{t.visitDrive}</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- 6. ETKİNLİKLER --- */}
        {activeSection === 'events' && (
          <div className="animate-fadeIn">
            <h2 className="text-xl font-light text-zinc-100 mb-6">{t.eventsTitle}</h2>
            <div className="space-y-6">
              {eventsData.map((event) => (
                <div key={event.id} className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-48 md:h-60 object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-300" />
                  <div className="p-6">
                    <span className="text-[11px] font-mono text-zinc-500">{event.date}</span>
                    <h3 className="text-base font-medium text-zinc-200 mt-1">{event.title}</h3>
                    <p className="text-xs text-zinc-500 mt-1.5">{lang === 'TR' ? event.descTR : event.descEN}</p>
                    <a 
                      href={event.instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium transition-colors"
                    >
                      <span>{t.viewInstagram}</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- 7. PARTNERLER --- */}
        {activeSection === 'partners' && (
          <div className="animate-fadeIn">
            <h2 className="text-xl font-light text-zinc-100 mb-6">{t.partnersTitle}</h2>
            <div className="space-y-6">
              {partnersData.map((partner) => (
                <div key={partner.id} className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl overflow-hidden">
                  <img src={partner.image} alt={partner.name} className="w-full h-48 md:h-60 object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-300" />
                  <div className="p-6">
                    <h3 className="text-base font-medium text-zinc-200">{partner.name}</h3>
                    <p className="text-xs text-zinc-500 mt-1.5">{lang === 'TR' ? partner.descTR : partner.descEN}</p>
                    <a 
                      href={partner.instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium transition-colors"
                    >
                      <span>{t.viewInstagram}</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- 8. BLOG --- */}
        {activeSection === 'blog' && (
          <div className="animate-fadeIn">
            {selectedBlogId === null ? (
              <div>
                <h2 className="text-xl font-light text-zinc-100 mb-6">{t.blogTitle}</h2>
                <div className="space-y-4">
                  {blogData.map((blog) => (
                    <div 
                      key={blog.id} 
                      onClick={() => setSelectedBlogId(blog.id)}
                      className="bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 rounded-2xl p-5 cursor-pointer transition-colors"
                    >
                      <span className="text-[11px] font-mono text-zinc-500">{blog.date}</span>
                      <h3 className="text-base font-medium text-zinc-200 mt-1">{lang === 'TR' ? blog.titleTR : blog.titleEN}</h3>
                      <p className="text-xs text-zinc-500 mt-1.5">{lang === 'TR' ? blog.descTR : blog.descEN}</p>
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
                    <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 md:p-8">
                      <button 
                        onClick={() => setSelectedBlogId(null)}
                        className="flex items-center gap-1.5 text-xs text-zinc-400 mb-6 hover:text-zinc-200 cursor-pointer"
                      >
                        <ArrowLeft size={13} />
                        <span>{t.back}</span>
                      </button>
                      <span className="text-[11px] font-mono text-zinc-500">{blog.date}</span>
                      <h1 className="text-xl md:text-2xl font-light text-zinc-100 mt-1 mb-4">{lang === 'TR' ? blog.titleTR : blog.titleEN}</h1>
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">{lang === 'TR' ? blog.contentTR : blog.contentEN}</p>
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
            <h2 className="text-xl font-light text-zinc-100 mb-6 text-center">{t.contactTitle}</h2>
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 md:p-8 space-y-4">
              
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-xs text-zinc-500">{t.instagramLabel}</span>
                <a href="https://instagram.com/vegamediatr" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-zinc-200 hover:underline">
                  @vegamediatr
                </a>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-xs text-zinc-500">{t.emailLabel}</span>
                <span className="text-xs font-medium text-zinc-300">{t.emailPlaceholder}</span>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-xs text-zinc-500">{t.phone1Name}</span>
                <span className="text-xs font-medium text-zinc-300">{t.phonePlaceholder}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-500">{t.phone2Name}</span>
                <span className="text-xs font-medium text-zinc-300">{t.phonePlaceholder}</span>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* FOOTER */}
      <footer className="max-w-3xl mx-auto w-full pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
        <div>
          <span>Vega Media © 2026.</span>
        </div>
        <div>
          <a 
            href="https://instagram.com/cenkyaman" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            {t.madeBy}
          </a>
        </div>
      </footer>

    </main>
  );
}