"use client";

import { useState } from 'react';
import { Montserrat, Playfair_Display } from 'next/font/google';
import Link from 'next/link';

// Load font Montserrat
const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '900'] 
});

// Load font Playfair Display
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  style: ['italic'], 
  weight: ['400'] 
});

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk scroll kembali ke atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="bg-white min-h-screen overflow-x-hidden selection:bg-fuchsia-900 selection:text-white relative">
        
        {/* =========================================
            BAGIAN GELAP (HERO & ABOUT)
        ========================================= */}
        <div className="bg-black text-white rounded-b-[3rem] md:rounded-b-[5rem] pb-24 md:pb-32 relative z-10 shadow-2xl">
          
          {/* Efek Glow Ungu/Pink di Kanan Atas */}
          <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-fuchsia-900/20 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>

          {/* Tombol Hamburger Menu (Kanan Atas) */}
          <div className="absolute top-8 right-6 md:top-10 md:right-10 z-40">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center gap-[5px] hover:bg-white/10 transition-colors"
            >
              <span className="w-5 md:w-6 h-[1.5px] bg-white block"></span>
              <span className="w-5 md:w-6 h-[1.5px] bg-white block"></span>
              <span className="w-5 md:w-6 h-[1.5px] bg-white block"></span>
            </button>
          </div>

          {/* HERO SECTION */}
          <main className="relative flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-16 md:pt-40 md:pb-20 min-h-[75vh]">
            <div className="relative z-10 w-full">
              <h2 className={`${montserrat.className} text-base md:text-xl lg:text-2xl font-light text-gray-300 mb-4 md:mb-6 tracking-wide max-w-4xl leading-relaxed`}>
                I'm a <span className="font-bold text-white">Final Year Information Technology Student</span> passionate <br className="hidden md:block" />
                about software development, system analysis, and data visualization.
              </h2>

              <div className="flex flex-row items-baseline gap-3 md:gap-5 lg:gap-8 whitespace-nowrap overflow-hidden">
                <h1 className={`${playfair.className} text-[clamp(4.5rem,11.5vw,11.5rem)] text-gray-300 tracking-tight font-normal leading-none`}>
                  HI!
                </h1>
                <h1 className={`${montserrat.className} text-[clamp(4.5rem,11.5vw,11.5rem)] font-black text-white tracking-tighter uppercase leading-none`}>
                  AATHIFAH.
                </h1>
              </div>
            </div>
          </main>

          {/* ABOUT ME SECTION */}
          <section id="about" className="relative px-6 md:px-12 lg:px-24 pt-8 md:pt-12 z-10 flex flex-col md:flex-row justify-between md:items-center gap-12 md:gap-20">
            <div className="flex flex-col leading-[0.8] flex-shrink-0">
              <h2 className={`${playfair.className} text-7xl md:text-[8rem] lg:text-[10rem] text-gray-300 tracking-tight font-normal`}>
                ABOUT
              </h2>
              <h2 className={`${montserrat.className} text-7xl md:text-[8rem] lg:text-[10rem] font-black text-white tracking-tighter uppercase`}>
                ME.
              </h2>
            </div>

            <div className="md:w-1/2 lg:w-5/12 flex flex-col justify-center mt-4 md:mt-0">
              <p className={`${montserrat.className} text-gray-400 font-light text-lg md:text-xl leading-relaxed mb-10`}>
                Passionate about software development and exploring data-driven solutions. I specialize in creating <span className="font-bold text-white">dynamic experiences</span> and comprehensive system architectures that leave a lasting impact.
              </p>
              
              <Link 
                href="/about" 
                className={`${montserrat.className} uppercase tracking-[0.15em] text-xs md:text-sm font-bold text-white border border-white rounded-full px-8 py-4 flex items-center gap-4 w-fit group hover:bg-white hover:text-black transition-all duration-300`}
              >
                READ MORE 
                <span className="text-xl md:text-2xl leading-none font-light group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
              </Link>
            </div>
          </section>
        </div>

        {/* =========================================
            BAGIAN TERANG (FEATURED PROJECTS)
        ========================================= */}
        <section id="projects" className="relative px-6 md:px-12 lg:px-24 py-20 md:py-28 bg-white text-black z-0">
          
          {/* Header "Featured Projects." */}
          <div className="mb-12 md:mb-16 flex flex-col leading-[0.9]">
            <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl text-gray-400 tracking-tight`}>
              Featured
            </h2>
            <h2 className={`${montserrat.className} text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter`}>
              Projects.
            </h2>
          </div>

          {/* Grid Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
            
            {/* --- Project Card 1 --- */}
            <div className="group flex flex-col h-full border border-gray-200 bg-white hover:shadow-2xl transition-all duration-500">
              
              {/* Gambar Mockup Top */}
              <div className="w-full aspect-[4/3] bg-[#f8f8f8] border-b border-gray-200 flex items-center justify-center overflow-hidden relative p-8">
                <img 
                  src="/mockup-1.png" 
                  alt="Activity Monitoring System Mockup" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              {/* Konten Text Bawah */}
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className={`${montserrat.className} text-[10px] md:text-xs tracking-[0.15em] text-gray-500 font-semibold uppercase`}>SOFTWARE DEVELOPMENT</span>
                  <span className={`${montserrat.className} text-xs text-gray-500 font-mono`}>2025</span>
                </div>
                
                <h3 className={`${montserrat.className} text-2xl md:text-3xl font-black tracking-tight mb-4`}>
                  Activity Monitoring System for IT Employee
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] md:text-xs text-gray-600 font-mono font-medium">LARAVEL</span>
                  <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] md:text-xs text-gray-600 font-mono font-medium">PHP</span>
                  <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] md:text-xs text-gray-600 font-mono font-medium">MYSQL</span>
                </div>

                <p className={`${montserrat.className} text-sm text-gray-600 font-medium leading-relaxed mb-8`}>
                  A full-stack web application using Laravel, PHP, and MySQL to automate the tracking, recording, and validation of daily IT employee tasks.
                </p>
                
                <div className="mt-auto w-full pt-4">
                  <hr className="border-gray-200 mb-6" />
                  
                  <div className="flex justify-between items-center">
                    <span className={`${montserrat.className} text-xs font-bold text-black uppercase tracking-widest`}>
                      DEV. <span className="text-gray-400">01</span>
                    </span>
                    
                    <a 
                      href="https://drive.google.com/drive/folders/1z5JbjDE1gysyDKkpZAsLWyOjym3sJdku?usp=drive_link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300 cursor-pointer"
                      aria-label="View Project"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Project Card 2 --- */}
            <div className="group flex flex-col h-full border border-gray-200 bg-white hover:shadow-2xl transition-all duration-500">
              
              <div className="w-full aspect-[4/3] bg-[#f8f8f8] border-b border-gray-200 flex items-center justify-center overflow-hidden relative p-8">
                <img 
                  src="/mockup-2.png" 
                  alt="JagaJantung Mockup" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className={`${montserrat.className} text-[10px] md:text-xs tracking-[0.15em] text-gray-500 font-semibold uppercase`}>SOFTWARE DEVELOPMENT</span>
                  <span className={`${montserrat.className} text-xs text-gray-500 font-mono`}>2026</span>
                </div>
                
                <h3 className={`${montserrat.className} text-2xl md:text-3xl font-black tracking-tight mb-4`}>
                  JagaJantung: Cardiovascular Risk Advisory System
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] md:text-xs text-gray-600 font-mono font-medium">NEXTJS</span>
                  <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] md:text-xs text-gray-600 font-mono font-medium">TAILWINDCSS</span>
                  <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] md:text-xs text-gray-600 font-mono font-medium">PYTHON</span>
                </div>

                <p className={`${montserrat.className} text-sm text-gray-600 font-medium leading-relaxed mb-8`}>
                  An interactive rule-based advisory system designed to evaluate cardiovascular risk levels and generate personalized recommendations for physical activity and smoking cessation.
                </p>
                
                <div className="mt-auto w-full pt-4">
                  <hr className="border-gray-200 mb-6" />
                  
                  <div className="flex justify-between items-center">
                    <span className={`${montserrat.className} text-xs font-bold text-black uppercase tracking-widest`}>
                      DEV. <span className="text-gray-400">02</span>
                    </span>
                    
                    <a 
                      href="https://its.id/m/WebsiteThifah" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300 cursor-pointer"
                      aria-label="View Project"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* --- TOMBOL VIEW ALL PROJECTS --- */}
          <div className="mt-16 md:mt-20 flex justify-center w-full">
            <Link 
              href="/projects" 
              className={`${montserrat.className} uppercase tracking-[0.15em] text-xs md:text-sm font-bold text-black bg-white border border-black rounded-full px-8 py-4 flex items-center gap-4 w-fit group hover:bg-black hover:text-white transition-all duration-300`}
            >
              VIEW ALL PROJECTS 
              <span className="text-xl md:text-2xl leading-none font-light group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
            </Link>
          </div>

        </section>

      </div>

      {/* Tombol Back to Top */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-6 md:right-10 w-12 h-12 md:w-14 md:h-14 bg-white text-black border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-lg z-40"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
      </button>

      {/* FULL SCREEN MENU OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col items-center justify-center animate-in fade-in duration-300">
          
          <div className="absolute top-8 right-6 md:top-10 md:right-10">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <span className="text-white text-2xl font-light leading-none mb-1">✕</span>
            </button>
          </div>

          <nav className="flex flex-col items-center gap-6 md:gap-8">
            <Link 
              href="/" 
              onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`${montserrat.className} text-5xl md:text-7xl font-black text-white underline decoration-white decoration-[4px] md:decoration-[5px] underline-offset-[12px] md:underline-offset-[16px] hover:scale-105 transition-transform`}
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsMenuOpen(false)}
              className={`${montserrat.className} text-5xl md:text-7xl font-black text-gray-500 hover:text-gray-300 hover:scale-105 transition-all`}
            >
              ABOUT
            </Link>
            <Link 
              href="/projects" 
              onClick={() => setIsMenuOpen(false)}
              className={`${montserrat.className} text-5xl md:text-7xl font-black text-gray-500 hover:text-gray-300 hover:scale-105 transition-all`}
            >
              PROJECTS
            </Link>
          </nav>
          
        </div>
      )}
    </>
  );
}