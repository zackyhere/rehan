"use client";

import React from 'react';

// Data untuk langkah-langkah UKK agar kode lebih bersih
const ukkSteps = [
  {
    id: 1,
    title: "Membuat Kabel LAN",
    desc: "Proses crimping kabel UTP ke konektor RJ-45 dengan standar urutan warna yang benar (Straight/Cross). Dibutuhkan 2 unit kabel.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Testing Kabel",
    desc: "Melakukan verifikasi konektivitas menggunakan LAN Tester untuk memastikan semua pin terhubung sempurna tanpa ada kabel yang putus.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Instalasi Windows 11",
    desc: "Re-install sistem operasi Windows 11 Pro menggunakan USB Bootable, mencakup pengaturan BIOS dan manajemen partisi storage.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Setting Jaringan",
    desc: "Konfigurasi topologi fisik via Switch: Port 1 (Internet), Port 2 (Komputer 1), dan Port 3 (Komputer 2) agar terhubung dalam satu segmen.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Konfigurasi IP Auto",
    desc: "Mengatur Network Adapter ke mode DHCP (Automatic) sehingga kedua komputer mendapatkan alamat IP langsung dari Gateway Internet.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Test Transfer File",
    desc: "Uji coba berbagi data antar komputer menggunakan fitur File Sharing Windows untuk memastikan fungsionalitas jaringan lokal.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
  },
];

export default function Home() {
  // Fungsi untuk menangani smooth scrolling saat navigasi diklik
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSToz4PgJSIEmXey0W2gbq5udZCXzSTuhGNyQ&s" 
              alt="Logo SMK Pawyatan Daha 2" 
              className="h-9 w-auto object-contain"
            />
            <span className="text-lg font-bold tracking-tight">SMK PAWYATAN DAHA 2</span>
          </div>
          <div className="hidden space-x-8 md:flex">
            {["Profil", "Jurusan", "UKK"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, item.toLowerCase())}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
              >
                {item === "UKK" ? "Panduan UKK" : `Profil ${item}`}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Uji Kompetensi Keahlian <span className="text-blue-500">2026</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 sm:text-xl">
            Laporan kegiatan dan profil teknis Jurusan Teknik Jaringan Komputer dan Telekomunikasi.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Section: Profil Sekolah */}
        <section id="profil" className="mb-32 scroll-mt-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl shadow-xl min-h-[350px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTISK51d2K4SQc08aUndXY-Q2w6E2gyRoerYQ&s"
                alt="Kampus SMK PAWYATAN DAHA 2"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Profil Sekolah</h2>
              <p className="text-lg leading-relaxed text-slate-600">
                SMK Pawyatan Daha 2 Kediri merupakan lembaga pendidikan kejuruan swasta di bawah naungan Yayasan Pawyatan Daha yang berlokasi strategis di Jl. Ahmad Yani No. 2, Kota Kediri. Kami berkomitmen mencetak generasi muda yang mandiri, kreatif, inovatif, dan berorientasi pada kewirausahaan. Didukung fasilitas lengkap dan kurikulum yang selaras dengan Dunia Usaha dan Dunia Industri (DUDI), kami menyiapkan lulusan unggul yang siap bersaing di era digital.
              </p>
              <div className="flex gap-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <span className="block text-2xl font-bold">A</span>
                  <span className="text-sm text-slate-500 uppercase tracking-wider">Akreditasi</span>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <span className="block text-2xl font-bold">DUDI</span>
                  <span className="text-sm text-slate-500 uppercase tracking-wider">Mitra Industri</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Profil TJKT */}
        <section id="jurusan" className="mb-32 scroll-mt-24 rounded-[2.5rem] bg-white p-8 shadow-sm border border-slate-100 md:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 mb-6">Fokus Keahlian</span>
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">Teknik Jaringan Komputer & Telekomunikasi</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Program keahlian TJKT membekali siswa dengan kompetensi komprehensif di bidang instalasi jaringan lokal, perakitan komputer, administrasi server, keamanan jaringan, hingga infrastruktur telekomunikasi. Melalui sistem pembelajaran berbasis proyek (Project-Based Learning) di laboratorium standar, siswa dilatih menjadi teknisi jaringan yang andal, profesional, dan siap menjawab tantangan kebutuhan tenaga IT perusahaan.
            </p>
          </div>
        </section>

        {/* Section: UKK Details */}
        <section id="ukk" className="scroll-mt-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">Alur Kerja Praktik UKK</h2>
            <p className="mx-auto max-w-2xl text-slate-600 text-lg">
              Representasi sistematis dari tugas yang dikerjakan selama pengujian kompetensi berlangsung.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ukkSteps.map((step) => (
              <div
                key={step.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  <span className="text-blue-600/30 mr-2">0{step.id}.</span>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          <p>© 2026 SMK PAWYATAN DAHA 2 • Jurusan TJKT</p>
        </div>
      </footer>
    </div>
  );
}