"use client";

import { useState, useEffect, useRef } from 'react';
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

  // State & Ref untuk Animation on Scroll
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  // Intersection Observer untuk mendeteksi elemen saat di-scroll bolak-balik
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15, 
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'about') setIsAboutVisible(true);
          if (entry.target.id === 'projects') setIsProjectsVisible(true);
        } else {
          if (entry.target.id === 'about') setIsAboutVisible(false);
          if (entry.target.id === 'projects') setIsProjectsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => observer.disconnect();
  }, []);

  // Fungsi untuk scroll kembali ke atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="bg-[#f8f4eb] min-h-screen overflow-x-hidden selection:bg-[#161e28] selection:text-[#f8f4eb] relative">
        
        {/* =========================================
            TOMBOL HAMBURGER MENU (FIXED)
        ========================================= */}
        <div className="fixed top-8 right-6 md:top-10 md:right-10 z-50">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#161e28] flex flex-col items-center justify-center gap-[5px] hover:bg-[#161e28]/80 transition-colors shadow-lg border border-[#161e28]"
          >
            <span className="w-5 md:w-6 h-[1.5px] bg-[#f8f4eb] block"></span>
            <span className="w-5 md:w-6 h-[1.5px] bg-[#f8f4eb] block"></span>
            <span className="w-5 md:w-6 h-[1.5px] bg-[#f8f4eb] block"></span>
          </button>
        </div>

        {/* =========================================
            BAGIAN GELAP (HERO & ABOUT)
        ========================================= */}
        <div className="bg-[#161e28] text-[#f8f4eb] rounded-b-[3rem] md:rounded-b-[5rem] pb-24 md:pb-32 relative z-10 shadow-2xl">
          
          {/* Efek Glow di Kanan Atas */}
          <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#c9af80]/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>

          {/* HERO SECTION */}
          <main className="relative flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-16 md:pt-40 md:pb-20 min-h-[75vh]">
            <div className="relative z-10 w-full">
              <h2 className={`${montserrat.className} text-base md:text-xl lg:text-2xl font-light text-[#c9af80] mb-4 md:mb-6 tracking-wide max-w-4xl leading-relaxed`}>
                I'm a <span className="font-bold text-[#f8f4eb]">Final Year Information Technology Student</span> passionate <br className="hidden md:block" />
                about software development, system analysis, and data visualization.
              </h2>

              <div className="flex flex-row items-baseline gap-3 md:gap-5 lg:gap-8 whitespace-nowrap overflow-hidden">
                <h1 className={`${playfair.className} text-[clamp(4.5rem,11.5vw,11.5rem)] text-[#c9af80] tracking-tight font-normal leading-none`}>
                  HI!
                </h1>
                <h1 className={`${montserrat.className} text-[clamp(4.5rem,11.5vw,11.5rem)] font-black text-[#f8f4eb] tracking-tighter uppercase leading-none`}>
                  AATHIFAH
                </h1>
              </div>
            </div>
          </main>

          {/* ABOUT ME SECTION */}
          <section id="about" ref={aboutRef} className="relative px-6 md:px-12 lg:px-24 pt-8 md:pt-12 z-10 flex flex-col md:flex-row justify-between md:items-center gap-12 md:gap-20">
            
            <div className={`flex flex-col leading-[0.8] flex-shrink-0 transition-all duration-1000 ease-out transform ${isAboutVisible ? 'translate-x-0 opacity-100' : '-translate-x-32 opacity-0'}`}>
              <h2 className={`${playfair.className} text-7xl md:text-[8rem] lg:text-[10rem] text-[#c9af80] tracking-tight font-normal`}>
                ABOUT
              </h2>
              <h2 className={`${montserrat.className} text-7xl md:text-[8rem] lg:text-[10rem] font-black text-[#f8f4eb] tracking-tighter uppercase`}>
                ME
              </h2>
            </div>

            <div className={`md:w-1/2 lg:w-5/12 flex flex-col justify-center mt-4 md:mt-0 transition-all duration-1000 delay-200 ease-out transform ${isAboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <p className={`${montserrat.className} text-[#c9af80] font-light text-lg md:text-xl leading-relaxed mb-10`}>
                Passionate about software development and exploring data-driven solutions. I specialize in creating <span className="font-bold text-[#f8f4eb]">dynamic experiences</span> and comprehensive system architectures that leave a lasting impact.
              </p>
              
              <Link 
                href="/about" 
                className={`${montserrat.className} uppercase tracking-[0.15em] text-xs md:text-sm font-bold text-[#f8f4eb] border border-[#f8f4eb] rounded-full px-8 py-4 flex items-center gap-4 w-fit group hover:bg-[#f8f4eb] hover:text-[#161e28] transition-all duration-300`}
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
        <section id="projects" ref={projectsRef} className="relative px-6 md:px-12 lg:px-24 py-20 md:py-28 bg-[#f8f4eb] text-[#161e28] z-0">
          
          {/* Header */}
          <div className={`mb-12 md:mb-16 flex flex-col leading-[0.9] transition-all duration-1000 ease-out transform ${isProjectsVisible ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'}`}>
            <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl text-[#c9af80] tracking-tight`}>
              Recent
            </h2>
            <h2 className={`${montserrat.className} text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter`}>
              Projects
            </h2>
          </div>

          {/* Grid Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
            
            {/* --- Project Card 1 --- */}
            <div className={`group flex flex-col h-full border border-[#c9af80] bg-[#f8f4eb] hover:shadow-2xl transition-all duration-700 ease-out transform ${isProjectsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              
              <div className="w-full aspect-[4/3] bg-[#c9af80]/20 border-b border-[#c9af80] flex items-center justify-center overflow-hidden relative p-8">
                <img 
                  src="/mockup-1.png" 
                  alt="Activity Monitoring System Mockup" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className={`${montserrat.className} text-[10px] md:text-xs tracking-[0.15em] text-[#c9af80] font-bold uppercase`}>SOFTWARE DEVELOPMENT</span>
                  <span className={`${montserrat.className} text-xs text-[#c9af80] font-mono font-semibold`}>2025</span>
                </div>
                
                <h3 className={`${montserrat.className} text-2xl md:text-3xl font-black tracking-tight mb-4 text-[#161e28]`}>
                  Activity Monitoring System for IT Employee
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-1.5 rounded-full border border-[#c9af80] bg-[#c9af80]/20 text-[10px] md:text-xs text-[#161e28]/80 font-mono font-bold">LARAVEL</span>
                  <span className="px-4 py-1.5 rounded-full border border-[#c9af80] bg-[#c9af80]/20 text-[10px] md:text-xs text-[#161e28]/80 font-mono font-bold">PHP</span>
                  <span className="px-4 py-1.5 rounded-full border border-[#c9af80] bg-[#c9af80]/20 text-[10px] md:text-xs text-[#161e28]/80 font-mono font-bold">MYSQL</span>
                </div>

                <p className={`${montserrat.className} text-sm text-[#161e28]/80 font-medium leading-relaxed mb-8`}>
                  A full-stack web application using Laravel, PHP, and MySQL to automate the tracking, recording, and validation of daily IT employee tasks.
                </p>
                
                <div className="mt-auto w-full pt-4">
                  <hr className="border-[#c9af80] mb-6" />
                  
                  <div className="flex justify-between items-center">
                    <span className={`${montserrat.className} text-xs font-bold text-[#161e28] uppercase tracking-widest`}>
                      PROJECT <span className="text-[#c9af80]">01</span>
                    </span>
                    
                    <a 
                      href="https://drive.google.com/drive/folders/1z5JbjDE1gysyDKkpZAsLWyOjym3sJdku?usp=drive_link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-[#c9af80] flex items-center justify-center group-hover:bg-[#161e28] group-hover:text-[#f8f4eb] transition-colors duration-300 cursor-pointer"
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
            <div className={`group flex flex-col h-full border border-[#c9af80] bg-[#f8f4eb] hover:shadow-2xl transition-all duration-700 delay-150 ease-out transform ${isProjectsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              
              <div className="w-full aspect-[4/3] bg-[#c9af80]/20 border-b border-[#c9af80] flex items-center justify-center overflow-hidden relative p-8">
                <img 
                  src="/mockup-2.png" 
                  alt="JagaJantung Mockup" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className={`${montserrat.className} text-[10px] md:text-xs tracking-[0.15em] text-[#c9af80] font-bold uppercase`}>SOFTWARE DEVELOPMENT</span>
                  <span className={`${montserrat.className} text-xs text-[#c9af80] font-mono font-semibold`}>2026</span>
                </div>
                
                <h3 className={`${montserrat.className} text-2xl md:text-3xl font-black tracking-tight mb-4 text-[#161e28]`}>
                  JagaJantung: Cardiovascular Risk Advisory System
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-1.5 rounded-full border border-[#c9af80] bg-[#c9af80]/20 text-[10px] md:text-xs text-[#161e28]/80 font-mono font-bold">NEXTJS</span>
                  <span className="px-4 py-1.5 rounded-full border border-[#c9af80] bg-[#c9af80]/20 text-[10px] md:text-xs text-[#161e28]/80 font-mono font-bold">TAILWINDCSS</span>
                  <span className="px-4 py-1.5 rounded-full border border-[#c9af80] bg-[#c9af80]/20 text-[10px] md:text-xs text-[#161e28]/80 font-mono font-bold">PYTHON</span>
                </div>

                <p className={`${montserrat.className} text-sm text-[#161e28]/80 font-medium leading-relaxed mb-8`}>
                  An interactive rule-based advisory system designed to evaluate cardiovascular risk levels and generate personalized recommendations for physical activity and smoking cessation.
                </p>
                
                <div className="mt-auto w-full pt-4">
                  <hr className="border-[#c9af80] mb-6" />
                  
                  <div className="flex justify-between items-center">
                    <span className={`${montserrat.className} text-xs font-bold text-[#161e28] uppercase tracking-widest`}>
                      PROJECT <span className="text-[#c9af80]">02</span>
                    </span>
                    
                    <a 
                      href="https://its.id/m/WebsiteThifah" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-[#c9af80] flex items-center justify-center group-hover:bg-[#161e28] group-hover:text-[#f8f4eb] transition-colors duration-300 cursor-pointer"
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

          {/* --- VIEW ALL PROJECTS --- */}
          <div className={`mt-16 md:mt-20 flex justify-center w-full transition-all duration-1000 delay-300 ease-out transform ${isProjectsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link 
              href="/projects" 
              className={`${montserrat.className} uppercase tracking-[0.15em] text-xs md:text-sm font-bold text-[#161e28] bg-[#f8f4eb] border border-[#161e28] rounded-full px-8 py-4 flex items-center gap-4 w-fit group hover:bg-[#161e28] hover:text-[#f8f4eb] transition-all duration-300`}
            >
              VIEW ALL PROJECTS 
              <span className="text-xl md:text-2xl leading-none font-light group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
            </Link>
          </div>

        </section>

      </div>

      {/* Back to Top */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-6 md:right-10 w-12 h-12 md:w-14 md:h-14 bg-[#f8f4eb] text-[#161e28] border border-[#c9af80] rounded-full flex items-center justify-center hover:bg-[#161e28] hover:text-[#f8f4eb] transition-all shadow-lg z-40"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
      </button>

      {/* OVERLAY MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#161e28] flex flex-col items-center justify-center animate-in fade-in duration-300">
          <div className="absolute top-8 right-6 md:top-10 md:right-10">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#f8f4eb]/20 bg-[#161e28]/40 backdrop-blur-sm flex items-center justify-center hover:bg-[#f8f4eb]/10 transition-colors"
            >
              <span className="text-[#f8f4eb] text-2xl font-light leading-none mb-1">✕</span>
            </button>
          </div>

          <nav className="flex flex-col items-center gap-6 md:gap-8">
            <Link 
              href="/" 
              onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`${montserrat.className} text-5xl md:text-7xl font-black text-[#f8f4eb] underline decoration-[#f8f4eb] decoration-[4px] md:decoration-[5px] underline-offset-[12px] md:underline-offset-[16px] hover:scale-105 transition-transform`}
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsMenuOpen(false)}
              className={`${montserrat.className} text-5xl md:text-7xl font-black text-[#c9af80] hover:text-[#f8f4eb] hover:scale-105 transition-all`}
            >
              PERSONAL PROFILE
            </Link>
            <Link 
              href="/projects" 
              onClick={() => setIsMenuOpen(false)}
              className={`${montserrat.className} text-5xl md:text-7xl font-black text-[#c9af80] hover:text-[#f8f4eb] hover:scale-105 transition-all`}
            >
              PROJECTS
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}