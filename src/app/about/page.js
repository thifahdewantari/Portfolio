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

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk scroll kembali ke atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#161e28] min-h-screen text-[#f8f4eb] pb-32 selection:bg-[#f8f4eb] selection:text-[#161e28] relative">
      
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
          HERO PROFILE SECTION (TERANG)
      ========================================= */}
      <div className="relative bg-[#f8f4eb] min-h-[90vh] rounded-b-[3rem] md:rounded-b-[5rem] flex flex-col justify-center overflow-hidden z-10 pb-20 shadow-2xl">
        
        {/* Teks Watermark "PROFILE" Raksasa di Belakang */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none opacity-40">
          <h1 className={`${montserrat.className} text-[22vw] font-black text-[#c9af80]/20 tracking-tighter`}>
            PROFILE
          </h1>
        </div>

        {/* Konten Utama Kiri & Kanan */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-24 pt-24 md:pt-0">
          
          {/* Kolom Kiri: Nama & Tombol */}
          <div className="w-full md:w-1/2 flex flex-col mt-4 md:mt-12">
            <h2 className={`${playfair.className} text-6xl md:text-[5.5rem] lg:text-[7.5rem] font-normal text-[#161e28] leading-[0.85] tracking-tight`}>
              Hello, I'm
            </h2>
            <h2 className={`${montserrat.className} text-7xl md:text-[6.5rem] lg:text-[9rem] font-black text-[#161e28] leading-[0.85] tracking-tighter uppercase mt-2`}>
              THIFAH
            </h2>

            {/* Grup Tombol */}
            <div className="flex flex-wrap items-center gap-4 mt-10 md:mt-12">
              {/* Tombol Let's Connect */}
              <a 
                href="https://www.linkedin.com/in/aathifahdewantari/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#161e28] text-[#f8f4eb] rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center gap-3 w-fit hover:scale-105 transition-transform group shadow-lg"
              >
                <span className={`${montserrat.className} text-xs md:text-sm font-medium uppercase tracking-widest`}>Let's Connect</span>
                <span className="text-lg md:text-xl font-light group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </a>

              {/* Tombol My Resume */}
              <a 
                href="#link-drive-cv-nanti-disini" 
                className="bg-[#f8f4eb] text-[#161e28] border border-[#161e28] rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center gap-3 w-fit hover:bg-[#c9af80]/20 hover:scale-105 transition-all group shadow-sm"
              >
                <span className={`${montserrat.className} text-xs md:text-sm font-bold uppercase tracking-widest`}>My Resume</span>
                <span className="text-lg md:text-xl font-light group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Paragraf Deskripsi */}
          <div className="w-full md:w-1/2 flex items-center md:pt-16">
            <p className={`${montserrat.className} text-[#161e28]/80 font-normal text-base md:text-lg leading-loose md:leading-relaxed text-justify md:text-left`}>
              I'm a final-year Information Systems undergraduate student at Institut Teknologi Sepuluh Nopember (ITS). I am dedicated to bridging the gap between technical execution and business strategy through Full-Stack Development, Strategic System Analysis, and Data Visualization. With a proven track record of engineering role-based enterprise solutions and translating operational data into high-level management insights, I aim to leverage my analytical problem-solving and programming skills to drive process optimization and support corporate decision-making.
            </p>
          </div>

        </div>
      </div>

      {/* =========================================
          PROFESSIONAL JOURNEY SECTION (GELAP)
      ========================================= */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-24 md:pt-32">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-8">
          <div className="flex flex-col leading-[0.85]">
            <h2 className={`${montserrat.className} text-4xl md:text-6xl lg:text-7xl font-black text-[#f8f4eb] uppercase tracking-tighter`}>
              PROFESSIONAL
            </h2>
            <h2 className={`${playfair.className} text-4xl md:text-6xl lg:text-7xl font-normal text-[#c9af80] uppercase tracking-tight`}>
              Experience
            </h2>
          </div>
        </div>
        
        {/* Garis Pembatas Utama */}
        <hr className="border-[#c9af80]/30 mb-8" />

        {/* EXPERIENCE CARD (HOVER UNTUK EXPAND) */}
        <div className="group py-6 md:py-8 border-b border-[#c9af80]/30 hover:bg-[#f8f4eb]/5 transition-colors duration-300 rounded-xl px-4 md:px-6 -mx-4 md:-mx-6 cursor-default">
          
          {/* Bagian Header Card (Selalu Terlihat) */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
            
            {/* Tanggal */}
            <div className="w-full md:w-2/12 text-xs md:text-sm font-mono text-[#c9af80] group-hover:text-[#c9af80]/80 transition-colors">
              Jul – Dec 2025
            </div>
            
            {/* Posisi/Role */}
            <div className="w-full md:w-6/12">
              <h3 className={`${montserrat.className} text-3xl md:text-5xl font-bold text-[#f8f4eb] tracking-tight`}>
                IT Intern
              </h3>
            </div>
            
            {/* Perusahaan & Tombol Plus/Silang */}
            <div className="w-full md:w-4/12 flex items-center justify-between md:justify-end gap-6 text-[#c9af80] group-hover:text-[#f8f4eb] transition-colors flex-shrink-0">
              <span className={`${montserrat.className} text-lg md:text-xl font-light text-left md:text-right`}>
                Bank Jatim
              </span>
              <span className="text-2xl font-light block group-hover:hidden transition-all">+</span>
              <span className="text-2xl font-light hidden group-hover:block transition-all">✕</span>
            </div>
            
          </div>

          {/* Bagian Body Card (Expandable dengan efek animasi mulus) */}
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
            <div className="overflow-hidden">
              <div className="pt-8 md:pt-10 flex flex-col gap-8 w-full">
                
                {/* Teks Paragraf Pengalaman */}
                <p className="text-[#f8f4eb]/80 text-sm md:text-base leading-relaxed text-justify md:text-left w-full">
                  During my internship in the Information Technology Division, I actively contributed to streamlining workflows by replacing manual reporting with an integrated digital solution. My primary focus involved engineering a full-stack Activity Monitoring application using Laravel, PHP, and MySQL to automate the tracking and validation of daily employee tasks. Additionally, I authored comprehensive technical documentation and designed an intuitive user interface to align system capabilities with operational needs. These experiences allowed me to apply my analytical skills in a corporate environment and deepen my understanding of enterprise-level software development.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-5 py-2 rounded-full border border-[#c9af80]/50 text-[10px] md:text-xs text-[#c9af80] font-mono group-hover:border-[#f8f4eb] group-hover:text-[#f8f4eb] transition-colors">LARAVEL</span>
                  <span className="px-5 py-2 rounded-full border border-[#c9af80]/50 text-[10px] md:text-xs text-[#c9af80] font-mono group-hover:border-[#f8f4eb] group-hover:text-[#f8f4eb] transition-colors">PHP</span>
                  <span className="px-5 py-2 rounded-full border border-[#c9af80]/50 text-[10px] md:text-xs text-[#c9af80] font-mono group-hover:border-[#f8f4eb] group-hover:text-[#f8f4eb] transition-colors">MYSQL</span>
                </div>
                
              </div>
            </div>
          </div>
          
        </div>

      </div>

      {/* =========================================
          EDUCATION SECTION 
      ========================================= */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-24 md:pt-32">
        
        {/* Header Section */}
        <div className="flex flex-col mb-8 leading-[0.85]">
          <h2 className={`${montserrat.className} text-4xl md:text-6xl lg:text-7xl font-black text-[#f8f4eb] uppercase tracking-tighter`}>
            EDUCATION
          </h2>
        </div>
        
        {/* Garis Pembatas */}
        <hr className="border-[#c9af80]/30 mb-8" />

        {/* EDUCATION CARD (HOVER ANIMATION) */}
        <div className="group border border-[#c9af80]/30 rounded-2xl p-6 md:p-10 hover:bg-[#f8f4eb] transition-colors duration-500 ease-in-out cursor-default relative overflow-hidden bg-[#161e28]">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            
            {/* Bagian Kiri: Tahun dan Institusi */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs md:text-sm text-[#c9af80] group-hover:text-[#161e28]/60 transition-colors duration-500 tracking-[0.15em] font-bold uppercase whitespace-nowrap">
                Jun 2022 - Aug 2026 (Expected)
              </span>
              <h3 className={`${montserrat.className} text-2xl md:text-3xl lg:text-4xl font-black text-[#f8f4eb] group-hover:text-[#161e28] transition-colors duration-500 uppercase tracking-tighter mt-1`}>
                Institut Teknologi Sepuluh Nopember
              </h3>
            </div>
            
            {/* Bagian Kanan: Jurusan */}
            <div className="mt-2 md:mt-0 md:text-right flex-shrink-0">
              <span className={`${montserrat.className} text-lg md:text-xl font-medium text-[#f8f4eb]/80 group-hover:text-[#161e28] transition-colors duration-500 whitespace-nowrap`}>
                Information Systems
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* =========================================
          BACK TO TOP & OVERLAY MENU
      ========================================= */}
      
      {/* Tombol Back to Top */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 md:w-14 md:h-14 bg-[#f8f4eb] text-[#161e28] border border-[#c9af80] rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#161e28] hover:text-[#f8f4eb] transition-all shadow-lg z-40"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
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
            <Link 
              href="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`${montserrat.className} text-5xl md:text-7xl font-black text-[#c9af80] hover:text-[#f8f4eb] hover:scale-105 transition-all`}
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`${montserrat.className} text-5xl md:text-7xl font-black text-[#f8f4eb] underline decoration-[#f8f4eb] decoration-[4px] md:decoration-[5px] underline-offset-[12px] md:underline-offset-[16px] hover:scale-105 transition-transform`}
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

    </div>
  );
}