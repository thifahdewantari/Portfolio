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
    <div className="bg-[#f8f4eb] min-h-screen text-[#161e28] pb-32 selection:bg-[#161e28] selection:text-[#f8f4eb]">
      
      {/* Tombol Hamburger Menu (Fixed) */}
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

      {/* Container Utama */}
      <div className="pt-32 md:pt-40 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10">
        
        {/* Header "Featured Projects" & "Portfolio" */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-10 border-b border-[#c9af80]/30 pb-10">
          <div className="flex flex-wrap items-baseline gap-3 md:gap-5 leading-none">
            <h1 className={`${playfair.className} text-5xl md:text-6xl lg:text-[7rem] tracking-tight font-normal text-[#c9af80]`}>
              RECENT
            </h1>
            <h1 className={`${montserrat.className} text-5xl md:text-6xl lg:text-[7rem] font-black tracking-tighter uppercase text-[#161e28]`}>
              PROJECTS.
            </h1>
          </div>
          <div className="mt-8 md:mt-0 text-left md:text-right">
            <p className={`${montserrat.className} text-[10px] md:text-xs tracking-[0.2em] text-[#c9af80] uppercase font-bold leading-relaxed`}>
              PORTFOLIO
            </p>
          </div>
        </div>

        {/* Filter Kategori */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-16">
          <button 
            onClick={() => setActiveFilter('ALL')}
            className={`${montserrat.className} px-6 py-2.5 md:px-8 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors ${activeFilter === 'ALL' ? 'bg-[#161e28] text-[#f8f4eb]' : 'bg-transparent border border-[#161e28] text-[#161e28] hover:bg-[#c9af80]/20'}`}
          >
            ALL
          </button>
          <button 
            onClick={() => setActiveFilter('SOFTWARE DEVELOPMENT')}
            className={`${montserrat.className} px-6 py-2.5 md:px-8 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors ${activeFilter === 'SOFTWARE DEVELOPMENT' ? 'bg-[#161e28] text-[#f8f4eb]' : 'bg-transparent border border-[#161e28] text-[#161e28] hover:bg-[#c9af80]/20'}`}
          >
            SOFTWARE DEVELOPMENT
          </button>
          <button 
            onClick={() => setActiveFilter('DATA VISUALIZATION')}
            className={`${montserrat.className} px-6 py-2.5 md:px-8 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors ${activeFilter === 'DATA VISUALIZATION' ? 'bg-[#161e28] text-[#f8f4eb]' : 'bg-transparent border border-[#161e28] text-[#161e28] hover:bg-[#c9af80]/20'}`}
          >
            DATA VISUALIZATION
          </button>
          <button 
            onClick={() => setActiveFilter('OTHER')}
            className={`${montserrat.className} px-6 py-2.5 md:px-8 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors ${activeFilter === 'OTHER' ? 'bg-[#161e28] text-[#f8f4eb]' : 'bg-transparent border border-[#161e28] text-[#161e28] hover:bg-[#c9af80]/20'}`}
          >
            OTHER
          </button>
        </div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
          
          {/* --- Project Card 1: Activity Monitoring System --- */}
          {(activeFilter === 'ALL' || activeFilter === 'SOFTWARE DEVELOPMENT') && (
            <div className="group flex flex-col h-full border border-[#c9af80] bg-[#f8f4eb] hover:shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95">
              <div className="w-full aspect-[4/3] bg-[#c9af80]/20 border-b border-[#c9af80] flex items-center justify-center overflow-hidden relative p-8">
                <img src="/mockup-1.png" alt="Activity Monitoring System Mockup" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"/>
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
                      DEV. <span className="text-[#c9af80]">01</span>
                    </span>
                    
                    <a href="https://drive.google.com/drive/folders/1z5JbjDE1gysyDKkpZAsLWyOjym3sJdku?usp=drive_link" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#c9af80] flex items-center justify-center group-hover:bg-[#161e28] group-hover:text-[#f8f4eb] transition-colors duration-300 cursor-pointer">
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
            <div className="group flex flex-col h-full border border-[#c9af80] bg-[#f8f4eb] hover:shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95">
              <div className="w-full aspect-[4/3] bg-[#c9af80]/20 border-b border-[#c9af80] flex items-center justify-center overflow-hidden relative p-8">
                <img src="/mockup-2.png" alt="JagaJantung Mockup" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"/>
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
                      DEV. <span className="text-[#c9af80]">02</span>
                    </span>
                    
                    <a href="https://its.id/m/WebsiteThifah" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#c9af80] flex items-center justify-center group-hover:bg-[#161e28] group-hover:text-[#f8f4eb] transition-colors duration-300 cursor-pointer">
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
            <div className="group flex flex-col h-full border border-[#c9af80] bg-[#f8f4eb] hover:shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95">
              <div className="w-full aspect-[4/3] bg-[#c9af80]/20 border-b border-[#c9af80] flex items-center justify-center overflow-hidden relative p-8">
                <img src="/mockup-3.png" alt="PaduPadan Mockup" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"/>
              </div>
              
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className={`${montserrat.className} text-[10px] md:text-xs tracking-[0.15em] text-[#c9af80] font-bold uppercase`}>SOFTWARE DEVELOPMENT</span>
                  <span className={`${montserrat.className} text-xs text-[#c9af80] font-mono font-semibold`}>2025</span>
                </div>
                
                <h3 className={`${montserrat.className} text-2xl md:text-3xl font-black tracking-tight mb-4 text-[#161e28]`}>
                  PaduPadan: AI Outfit Combination Recommender
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-1.5 rounded-full border border-[#c9af80] bg-[#c9af80]/20 text-[10px] md:text-xs text-[#161e28]/80 font-mono font-bold">NEXTJS</span>
                  <span className="px-4 py-1.5 rounded-full border border-[#c9af80] bg-[#c9af80]/20 text-[10px] md:text-xs text-[#161e28]/80 font-mono font-bold">TAILWINDCSS</span>
                </div>

                <p className={`${montserrat.className} text-sm text-[#161e28]/80 font-medium leading-relaxed mb-8`}>
                  An innovative fashion website that recommends outfit combinations based on user preferences. The platform enables users to manage their digital wardrobe, explore fashion lookbooks, and interact with stylist-curated content.
                </p>
                
                <div className="mt-auto w-full pt-4">
                  <hr className="border-[#c9af80] mb-6" />
                  <div className="flex justify-between items-center">
                    <span className={`${montserrat.className} text-xs font-bold text-[#161e28] uppercase tracking-widest`}>
                      DEV. <span className="text-[#c9af80]">03</span>
                    </span>
                    
                    <a href="https://drive.google.com/drive/folders/1Q8_ckPbcmfw6XfvXju0Zeo2MFBDVkC-v?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#c9af80] flex items-center justify-center group-hover:bg-[#161e28] group-hover:text-[#f8f4eb] transition-colors duration-300 cursor-pointer" aria-label="View Project">
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
            <div className="group flex flex-col h-full border border-[#c9af80] bg-[#f8f4eb] hover:shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95">
              <div className="w-full aspect-[4/3] bg-[#c9af80]/20 border-b border-[#c9af80] flex items-center justify-center overflow-hidden relative p-8">
                <img src="/mockup-4.png" alt="University Admissions Dashboard Mockup" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"/>
              </div>
              
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className={`${montserrat.className} text-[10px] md:text-xs tracking-[0.15em] text-[#c9af80] font-bold uppercase`}>DATA VISUALIZATION</span>
                  <span className={`${montserrat.className} text-xs text-[#c9af80] font-mono font-semibold`}>2024</span>
                </div>
                
                <h3 className={`${montserrat.className} text-2xl md:text-3xl font-black tracking-tight mb-4 text-[#161e28]`}>
                  ETL-Powered Dashboard for University Student Admissions
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-1.5 rounded-full border border-[#c9af80] bg-[#c9af80]/20 text-[10px] md:text-xs text-[#161e28]/80 font-mono font-bold">POWER BI</span>
                  <span className="px-4 py-1.5 rounded-full border border-[#c9af80] bg-[#c9af80]/20 text-[10px] md:text-xs text-[#161e28]/80 font-mono font-bold">ETL</span>
                  <span className="px-4 py-1.5 rounded-full border border-[#c9af80] bg-[#c9af80]/20 text-[10px] md:text-xs text-[#161e28]/80 font-mono font-bold">DATA LAKEHOUSE</span>
                </div>

                <p className={`${montserrat.className} text-sm text-[#161e28]/80 font-medium leading-relaxed mb-8`}>
                  An interactive dashboard using Power BI to visualize data from the 2020 university independent admission (Seleksi Mandiri), as part of a data lakehouse implementation project.
                </p>
                
                <div className="mt-auto w-full pt-4">
                  <hr className="border-[#c9af80] mb-6" />
                  <div className="flex justify-between items-center">
                    <span className={`${montserrat.className} text-xs font-bold text-[#161e28] uppercase tracking-widest`}>
                      DEV. <span className="text-[#c9af80]">04</span>
                    </span>
                    
                    <a href="https://drive.google.com/drive/folders/1PhiEvKAST18cVcWYqYz66hOo4mxs0hIC?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#c9af80] flex items-center justify-center group-hover:bg-[#161e28] group-hover:text-[#f8f4eb] transition-colors duration-300 cursor-pointer" aria-label="View Project">
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
            <div className="group flex flex-col h-full border border-[#c9af80] bg-[#f8f4eb] hover:shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95">
              <div className="w-full aspect-[4/3] bg-[#c9af80]/20 border-b border-[#c9af80] flex items-center justify-center overflow-hidden relative p-8">
                <img src="/mockup-5.png" alt="Bank Mandiri IT-BSC Dashboard Mockup" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"/>
              </div>
              
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className={`${montserrat.className} text-[10px] md:text-xs tracking-[0.15em] text-[#c9af80] font-bold uppercase`}>DATA VISUALIZATION</span>
                  <span className={`${montserrat.className} text-xs text-[#c9af80] font-mono font-semibold`}>2025</span>
                </div>
                
                <h3 className={`${montserrat.className} text-2xl md:text-3xl font-black tracking-tight mb-4 text-[#161e28]`}>
                  IT Balanced Scorecard Performance Dashboard
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-1.5 rounded-full border border-[#c9af80] bg-[#c9af80]/20 text-[10px] md:text-xs text-[#161e28]/80 font-mono font-bold">POWER BI</span>
                  <span className="px-4 py-1.5 rounded-full border border-[#c9af80] bg-[#c9af80]/20 text-[10px] md:text-xs text-[#161e28]/80 font-mono font-bold">IT-BSC</span>
                  <span className="px-4 py-1.5 rounded-full border border-[#c9af80] bg-[#c9af80]/20 text-[10px] md:text-xs text-[#161e28]/80 font-mono font-bold">DATA ANALYSIS</span>
                </div>

                <p className={`${montserrat.className} text-sm text-[#161e28]/80 font-medium leading-relaxed mb-8`}>
                  An interactive performance monitoring dashboard developed using Power BI based on the IT Balanced Scorecard framework. The system evaluates IT performance across four key perspectives to support strategic business decisions at corporate and branch levels.
                </p>
                
                <div className="mt-auto w-full pt-4">
                  <hr className="border-[#c9af80] mb-6" />
                  <div className="flex justify-between items-center">
                    <span className={`${montserrat.className} text-xs font-bold text-[#161e28] uppercase tracking-widest`}>
                      DEV. <span className="text-[#c9af80]">05</span>
                    </span>
                    
                    <a href="https://drive.google.com/drive/folders/1ucvmnM93bfBrmk-77KbNcMzWN69zGIli?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#c9af80] flex items-center justify-center group-hover:bg-[#161e28] group-hover:text-[#f8f4eb] transition-colors duration-300 cursor-pointer" aria-label="View Project">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* --- Project Card 6: myITS Classroom Redesign --- */}
          {(activeFilter === 'ALL' || activeFilter === 'OTHER') && (
            <div className="group flex flex-col h-full border border-[#c9af80] bg-[#f8f4eb] hover:shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95">
              <div className="w-full aspect-[4/3] bg-[#c9af80]/20 border-b border-[#c9af80] flex items-center justify-center overflow-hidden relative p-8">
                <img src="/mockup-6.png" alt="myITS Classroom Redesign Mockup" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"/>
              </div>
              
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className={`${montserrat.className} text-[10px] md:text-xs tracking-[0.15em] text-[#c9af80] font-bold uppercase`}>UX DESIGN</span>
                  <span className={`${montserrat.className} text-xs text-[#c9af80] font-mono font-semibold`}>2024</span>
                </div>
                
                <h3 className={`${montserrat.className} text-2xl md:text-3xl font-black tracking-tight mb-4 text-[#161e28]`}>
                  myITS Classroom Redesign
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-1.5 rounded-full border border-[#c9af80] bg-[#c9af80]/20 text-[10px] md:text-xs text-[#161e28]/80 font-mono font-bold">UI/UX DESIGN</span>
                  <span className="px-4 py-1.5 rounded-full border border-[#c9af80] bg-[#c9af80]/20 text-[10px] md:text-xs text-[#161e28]/80 font-mono font-bold">USER RESEARCH</span>
                  <span className="px-4 py-1.5 rounded-full border border-[#c9af80] bg-[#c9af80]/20 text-[10px] md:text-xs text-[#161e28]/80 font-mono font-bold">FIGMA</span>
                </div>

                <p className={`${montserrat.className} text-sm text-[#161e28]/80 font-medium leading-relaxed mb-8`}>
                  Redesigning the myITS Classroom mobile application to better align with user needs and improve intuitiveness, aiming to position the app as the primary learning platform for students at ITS.
                </p>
                
                <div className="mt-auto w-full pt-4">
                  <hr className="border-[#c9af80] mb-6" />
                  <div className="flex justify-between items-center">
                    <span className={`${montserrat.className} text-xs font-bold text-[#161e28] uppercase tracking-widest`}>
                      DEV. <span className="text-[#c9af80]">06</span>
                    </span>
                    
                    <a href="https://myitsclassroomredesign.my.canva.site/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#c9af80] flex items-center justify-center group-hover:bg-[#161e28] group-hover:text-[#f8f4eb] transition-colors duration-300 cursor-pointer" aria-label="View Project">
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
              <p className={`${montserrat.className} text-[#c9af80] tracking-widest uppercase font-bold`}>
                No projects found in this category yet.
              </p>
            </div>
          )}

        </div>
      </div>

      {/* Tombol Back to Top */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-6 md:right-10 w-12 h-12 md:w-14 md:h-14 bg-[#f8f4eb] text-[#161e28] border border-[#c9af80] rounded-full flex items-center justify-center hover:bg-[#161e28] hover:text-[#f8f4eb] transition-all shadow-lg z-40"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
      </button>

      {/* FULL SCREEN MENU OVERLAY */}
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
            <Link href="/" onClick={() => setIsMenuOpen(false)} className={`${montserrat.className} text-5xl md:text-7xl font-black text-[#c9af80] hover:text-[#f8f4eb] hover:scale-105 transition-all`}>HOME</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className={`${montserrat.className} text-5xl md:text-7xl font-black text-[#c9af80] hover:text-[#f8f4eb] hover:scale-105 transition-all`}>PERSONAL PROFILE</Link>
            <Link href="/projects" onClick={() => setIsMenuOpen(false)} className={`${montserrat.className} text-5xl md:text-7xl font-black text-[#f8f4eb] underline decoration-[#f8f4eb] decoration-[4px] md:decoration-[5px] underline-offset-[12px] md:underline-offset-[16px] hover:scale-105 transition-transform`}>PROJECTS</Link>
          </nav>
        </div>
      )}
    </div>
  );
}