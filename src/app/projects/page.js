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

export default function Projects() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State untuk melacak kategori filter yang sedang aktif
  const [activeFilter, setActiveFilter] = useState('ALL');

  // Fungsi untuk scroll kembali ke atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen text-black pb-32">
      
      {/* Tombol Hamburger Menu Hitam (Kanan Atas) */}
      <div className="absolute top-8 right-6 md:top-10 md:right-10 z-40">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black flex flex-col items-center justify-center gap-[5px] hover:bg-gray-800 transition-colors shadow-lg"
        >
          <span className="w-5 md:w-6 h-[1.5px] bg-white block"></span>
          <span className="w-5 md:w-6 h-[1.5px] bg-white block"></span>
          <span className="w-5 md:w-6 h-[1.5px] bg-white block"></span>
        </button>
      </div>

      {/* Container Utama */}
      <div className="pt-32 md:pt-40 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        
        {/* Header "Featured Projects" & "Portfolio" */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-10 border-b border-gray-200 pb-10">
          <div className="flex flex-wrap items-baseline gap-3 md:gap-5 leading-none">
            <h1 className={`${playfair.className} text-5xl md:text-6xl lg:text-[7rem] tracking-tight font-normal`}>
              FEATURED
            </h1>
            <h1 className={`${montserrat.className} text-5xl md:text-6xl lg:text-[7rem] font-black tracking-tighter uppercase`}>
              PROJECTS.
            </h1>
          </div>
          <div className="mt-8 md:mt-0 text-left md:text-right">
            <p className={`${montserrat.className} text-[10px] md:text-xs tracking-[0.2em] text-gray-500 uppercase font-semibold leading-relaxed`}>
              PORTFOLIO
            </p>
          </div>
        </div>

        {/* Filter Kategori */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-16">
          <button 
            onClick={() => setActiveFilter('ALL')}
            className={`${montserrat.className} px-6 py-2.5 md:px-8 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors ${activeFilter === 'ALL' ? 'bg-black text-white' : 'bg-transparent border border-black text-black hover:bg-gray-100'}`}
          >
            ALL
          </button>
          <button 
            onClick={() => setActiveFilter('SOFTWARE DEVELOPMENT')}
            className={`${montserrat.className} px-6 py-2.5 md:px-8 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors ${activeFilter === 'SOFTWARE DEVELOPMENT' ? 'bg-black text-white' : 'bg-transparent border border-black text-black hover:bg-gray-100'}`}
          >
            SOFTWARE DEVELOPMENT
          </button>
          <button 
            onClick={() => setActiveFilter('DATA VISUALIZATION')}
            className={`${montserrat.className} px-6 py-2.5 md:px-8 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors ${activeFilter === 'DATA VISUALIZATION' ? 'bg-black text-white' : 'bg-transparent border border-black text-black hover:bg-gray-100'}`}
          >
            DATA VISUALIZATION
          </button>
          <button 
            onClick={() => setActiveFilter('OTHER')}
            className={`${montserrat.className} px-6 py-2.5 md:px-8 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors ${activeFilter === 'OTHER' ? 'bg-black text-white' : 'bg-transparent border border-black text-black hover:bg-gray-100'}`}
          >
            OTHER
          </button>
        </div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
          
          {/* --- Project Card 1: Activity Monitoring System --- */}
          {(activeFilter === 'ALL' || activeFilter === 'SOFTWARE DEVELOPMENT') && (
            <div className="group flex flex-col h-full border border-gray-200 bg-white hover:shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95">
              <div className="w-full aspect-[4/3] bg-[#f8f8f8] border-b border-gray-200 flex items-center justify-center overflow-hidden relative p-8">
                <img src="/mockup-1.png" alt="Activity Monitoring System Mockup" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"/>
              </div>
              
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
                    
                    <a href="https://drive.google.com/drive/folders/1z5JbjDE1gysyDKkpZAsLWyOjym3sJdku?usp=drive_link" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* --- Project Card 2: JagaJantung --- */}
          {(activeFilter === 'ALL' || activeFilter === 'SOFTWARE DEVELOPMENT') && (
            <div className="group flex flex-col h-full border border-gray-200 bg-white hover:shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95">
              <div className="w-full aspect-[4/3] bg-[#f8f8f8] border-b border-gray-200 flex items-center justify-center overflow-hidden relative p-8">
                <img src="/mockup-2.png" alt="JagaJantung Mockup" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"/>
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
                    
                    <a href="https://its.id/m/WebsiteThifah" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* --- Project Card 3: PaduPadan --- */}
          {(activeFilter === 'ALL' || activeFilter === 'SOFTWARE DEVELOPMENT') && (
            <div className="group flex flex-col h-full border border-gray-200 bg-white hover:shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95">
              <div className="w-full aspect-[4/3] bg-[#f8f8f8] border-b border-gray-200 flex items-center justify-center overflow-hidden relative p-8">
                <img src="/mockup-3.png" alt="PaduPadan Mockup" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"/>
              </div>
              
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className={`${montserrat.className} text-[10px] md:text-xs tracking-[0.15em] text-gray-500 font-semibold uppercase`}>SOFTWARE DEVELOPMENT</span>
                  <span className={`${montserrat.className} text-xs text-gray-500 font-mono`}>2025</span>
                </div>
                
                <h3 className={`${montserrat.className} text-2xl md:text-3xl font-black tracking-tight mb-4`}>
                  PaduPadan: AI Outfit Combination Recommender
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] md:text-xs text-gray-600 font-mono font-medium">NEXTJS</span>
                  <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] md:text-xs text-gray-600 font-mono font-medium">TAILWINDCSS</span>
                </div>

                <p className={`${montserrat.className} text-sm text-gray-600 font-medium leading-relaxed mb-8`}>
                  An innovative fashion website that recommends outfit combinations based on user preferences. The platform enables users to manage their digital wardrobe, explore fashion lookbooks, and interact with stylist-curated content.
                </p>
                
                <div className="mt-auto w-full pt-4">
                  <hr className="border-gray-200 mb-6" />
                  <div className="flex justify-between items-center">
                    <span className={`${montserrat.className} text-xs font-bold text-black uppercase tracking-widest`}>
                      DEV. <span className="text-gray-400">03</span>
                    </span>
                    
                    <a href="https://drive.google.com/drive/folders/1Q8_ckPbcmfw6XfvXju0Zeo2MFBDVkC-v?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300 cursor-pointer" aria-label="View Project">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* --- Project Card 4: ETL Admissions Dashboard --- */}
          {(activeFilter === 'ALL' || activeFilter === 'DATA VISUALIZATION') && (
            <div className="group flex flex-col h-full border border-gray-200 bg-white hover:shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95">
              <div className="w-full aspect-[4/3] bg-[#f8f8f8] border-b border-gray-200 flex items-center justify-center overflow-hidden relative p-8">
                <img src="/mockup-4.png" alt="University Admissions Dashboard Mockup" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"/>
              </div>
              
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className={`${montserrat.className} text-[10px] md:text-xs tracking-[0.15em] text-gray-500 font-semibold uppercase`}>DATA VISUALIZATION</span>
                  <span className={`${montserrat.className} text-xs text-gray-500 font-mono`}>2024</span>
                </div>
                
                <h3 className={`${montserrat.className} text-2xl md:text-3xl font-black tracking-tight mb-4`}>
                  ETL-Powered Dashboard for University Student Admissions
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] md:text-xs text-gray-600 font-mono font-medium">POWER BI</span>
                  <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] md:text-xs text-gray-600 font-mono font-medium">ETL</span>
                  <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] md:text-xs text-gray-600 font-mono font-medium">DATA LAKEHOUSE</span>
                </div>

                <p className={`${montserrat.className} text-sm text-gray-600 font-medium leading-relaxed mb-8`}>
                  An interactive dashboard using Power BI to visualize data from the 2020 university independent admission (Seleksi Mandiri), as part of a data lakehouse implementation project.
                </p>
                
                <div className="mt-auto w-full pt-4">
                  <hr className="border-gray-200 mb-6" />
                  <div className="flex justify-between items-center">
                    <span className={`${montserrat.className} text-xs font-bold text-black uppercase tracking-widest`}>
                      DEV. <span className="text-gray-400">04</span>
                    </span>
                    
                    <a href="https://drive.google.com/drive/folders/1PhiEvKAST18cVcWYqYz66hOo4mxs0hIC?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300 cursor-pointer" aria-label="View Project">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* --- Project Card 5: Bank Mandiri IT-BSC Dashboard --- */}
          {(activeFilter === 'ALL' || activeFilter === 'DATA VISUALIZATION') && (
            <div className="group flex flex-col h-full border border-gray-200 bg-white hover:shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95">
              <div className="w-full aspect-[4/3] bg-[#f8f8f8] border-b border-gray-200 flex items-center justify-center overflow-hidden relative p-8">
                <img src="/mockup-5.png" alt="Bank Mandiri IT-BSC Dashboard Mockup" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"/>
              </div>
              
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className={`${montserrat.className} text-[10px] md:text-xs tracking-[0.15em] text-gray-500 font-semibold uppercase`}>DATA VISUALIZATION</span>
                  <span className={`${montserrat.className} text-xs text-gray-500 font-mono`}>2025</span>
                </div>
                
                <h3 className={`${montserrat.className} text-2xl md:text-3xl font-black tracking-tight mb-4`}>
                  IT Balanced Scorecard Performance Dashboard
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] md:text-xs text-gray-600 font-mono font-medium">POWER BI</span>
                  <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] md:text-xs text-gray-600 font-mono font-medium">IT-BSC</span>
                  <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] md:text-xs text-gray-600 font-mono font-medium">DATA ANALYSIS</span>
                </div>

                <p className={`${montserrat.className} text-sm text-gray-600 font-medium leading-relaxed mb-8`}>
                  An interactive performance monitoring dashboard developed using Power BI based on the IT Balanced Scorecard framework. The system evaluates IT performance across four key perspectives to support strategic business decisions at corporate and branch levels.
                </p>
                
                <div className="mt-auto w-full pt-4">
                  <hr className="border-gray-200 mb-6" />
                  <div className="flex justify-between items-center">
                    <span className={`${montserrat.className} text-xs font-bold text-black uppercase tracking-widest`}>
                      DEV. <span className="text-gray-400">05</span>
                    </span>
                    
                    <a href="https://drive.google.com/drive/folders/1ucvmnM93bfBrmk-77KbNcMzWN69zGIli?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300 cursor-pointer" aria-label="View Project">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* --- Project Card 6: myITS Classroom Redesign (PROYEK BARU) --- */}
          {(activeFilter === 'ALL' || activeFilter === 'OTHER') && (
            <div className="group flex flex-col h-full border border-gray-200 bg-white hover:shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95">
              {/* Gambar Mockup Top */}
              <div className="w-full aspect-[4/3] bg-[#f8f8f8] border-b border-gray-200 flex items-center justify-center overflow-hidden relative p-8">
                {/* Pastikan kamu menambahkan gambar mockup-6.png ke folder public! */}
                <img src="/mockup-6.png" alt="myITS Classroom Redesign Mockup" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"/>
              </div>
              
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className={`${montserrat.className} text-[10px] md:text-xs tracking-[0.15em] text-gray-500 font-semibold uppercase`}>UX DESIGN</span>
                  <span className={`${montserrat.className} text-xs text-gray-500 font-mono`}>2024</span>
                </div>
                
                <h3 className={`${montserrat.className} text-2xl md:text-3xl font-black tracking-tight mb-4`}>
                  myITS Classroom Redesign
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] md:text-xs text-gray-600 font-mono font-medium">UI/UX DESIGN</span>
                  <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] md:text-xs text-gray-600 font-mono font-medium">USER RESEARCH</span>
                  <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[10px] md:text-xs text-gray-600 font-mono font-medium">FIGMA</span>
                </div>

                <p className={`${montserrat.className} text-sm text-gray-600 font-medium leading-relaxed mb-8`}>
                  Redesigning the myITS Classroom mobile application to better align with user needs and improve intuitiveness, aiming to position the app as the primary learning platform for students at ITS.
                </p>
                
                <div className="mt-auto w-full pt-4">
                  <hr className="border-gray-200 mb-6" />
                  <div className="flex justify-between items-center">
                    <span className={`${montserrat.className} text-xs font-bold text-black uppercase tracking-widest`}>
                      DEV. <span className="text-gray-400">06</span>
                    </span>
                    
                    <a href="https://myitsclassroomredesign.my.canva.site/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300 cursor-pointer" aria-label="View Project">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pesan jika tidak ada proyek pada kategori yang dipilih */}
          {activeFilter !== 'ALL' && activeFilter !== 'SOFTWARE DEVELOPMENT' && activeFilter !== 'DATA VISUALIZATION' && activeFilter !== 'OTHER' && (
            <div className="col-span-1 md:col-span-2 py-20 text-center animate-in fade-in">
              <p className={`${montserrat.className} text-gray-400 tracking-widest uppercase`}>
                No projects found in this category yet.
              </p>
            </div>
          )}

        </div>
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
            <Link href="/" onClick={() => setIsMenuOpen(false)} className={`${montserrat.className} text-5xl md:text-7xl font-black text-gray-500 hover:text-gray-300 hover:scale-105 transition-all`}>HOME</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className={`${montserrat.className} text-5xl md:text-7xl font-black text-gray-500 hover:text-gray-300 hover:scale-105 transition-all`}>ABOUT</Link>
            <Link href="/projects" onClick={() => setIsMenuOpen(false)} className={`${montserrat.className} text-5xl md:text-7xl font-black text-white underline decoration-white decoration-[4px] md:decoration-[5px] underline-offset-[12px] md:underline-offset-[16px] hover:scale-105 transition-transform`}>PROJECTS</Link>
          </nav>
        </div>
      )}
    </div>
  );
}