import React from 'react';

export default function Home() {
  return (
    // Menambahkan scroll-smooth agar navigasi anchor (href="#id") bergerak secara halus
    <div className="min-h-screen bg-white text-[#111111] font-sans scroll-smooth selection:bg-[#38B6FF] selection:text-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      {/* h-screen agar tinggi memenuhi layar (full viewport) */}
      <section className="relative h-screen flex flex-col justify-center bg-[url('/20534381-10.jpg')] bg-no-repeat bg-center bg-cover border-b-[4px] border-black">
        {/* Opacity diturunkan menjadi 60% agar gambar background lebih jelas */}
        <div className="absolute inset-0 bg-white/60 z-[5] transition-all duration-500"></div>
        
        <div className="relative z-10 w-full px-[20px] flex flex-col items-center justify-center h-full">
          <img src="/logo.png" alt="Logo SMK Pawyatan Daha 2 Kediri" className="w-[100px] md:w-[130px] mb-[30px] drop-shadow-[3px_3px_0px_#000] hover:scale-105 transition-transform duration-300" />
          
          <div className="text-center w-full">
            <h1 className="inline-block bg-[#FFDE00] text-black border-[3px] border-black px-[30px] py-[15px] shadow-[6px_6px_0px_#000] text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-[25px] hover:-translate-y-1 transition-transform duration-300">
              SMK Pawyatan Daha 2
            </h1>
            <p className="bg-white text-black font-bold py-[12px] px-[25px] border-[3px] border-black shadow-[4px_4px_0px_#000] text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              Teknik Komputer dan Jaringan – Menghubungkan dunia melalui teknologi.
            </p>
          </div>

          {/* --- NAVIGATION --- */}
          <nav className="absolute bottom-[50px] w-full">
            <ul className="flex justify-center gap-[20px] flex-wrap list-none px-[20px]">
              <li>
                {/* Efek tekan halus: hover:translate dan hover:shadow-none */}
                <a href="#profil" className="bg-[#38B6FF] border-[3px] border-black py-[12px] px-[30px] text-black font-bold no-underline text-base md:text-lg shadow-[6px_6px_0px_#000] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all duration-300 block">
                  PROFIL SEKOLAH
                </a>
              </li>
              <li>
                <a href="#tkj" className="bg-[#FF90E8] border-[3px] border-black py-[12px] px-[30px] text-black font-bold no-underline text-base md:text-lg shadow-[6px_6px_0px_#000] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all duration-300 block">
                  PROFIL JURUSAN
                </a>
              </li>
              <li>
                <a href="#ukk" className="bg-[#7ED957] border-[3px] border-black py-[12px] px-[30px] text-black font-bold no-underline text-base md:text-lg shadow-[6px_6px_0px_#000] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all duration-300 block">
                  TENTANG UKK
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* --- CONTENT CONTAINER (FULL WIDTH) --- */}
      <main className="w-full">
        
        {/* PROFIL SEKOLAH */}
        {/* Lebar penuh tanpa kotak, padding horizontal diatur menggunakan persentase layar */}
        <article id="profil" className="w-full px-[5%] lg:px-[10%] py-[80px] bg-[#FAFAFA] border-b-[4px] border-black">
          <div className="mb-[40px]">
            <h2 className="text-3xl md:text-4xl font-black text-black inline-block bg-[#38B6FF] px-[20px] py-[10px] border-[3px] border-black shadow-[6px_6px_0px_#000]">
              PROFIL SEKOLAH
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px]">
            <div className="space-y-[40px]">
              <section>
                <h3 className="text-xl md:text-2xl font-black bg-[#FFDE00] inline-block px-[15px] py-[5px] border-[3px] border-black mb-[15px]">
                  SEJARAH & LOKASI
                </h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  SMK Pawyatan Daha 2 Kediri merupakan salah satu lembaga pendidikan menengah kejuruan yang berlokasi di <strong>Jl. A. Yani No. 2, Banjaran, Kota Kediri</strong>. 
                  Didirikan pada <strong>1 Agustus 1965</strong>, sekolah ini telah membangun lingkungan pendidikan yang solid selama lebih dari setengah abad. Kami memiliki pengalaman panjang dalam menyelenggarakan pendidikan kejuruan yang berorientasi pada pengembangan kompetensi dan karakter siswa.
                </p>
              </section>

              <section>
                <h3 className="text-xl md:text-2xl font-black bg-[#FFDE00] inline-block px-[15px] py-[5px] border-[3px] border-black mb-[15px]">
                  KOMITMEN PENDIDIKAN
                </h3>
                <div className="space-y-[15px] text-lg text-gray-800 leading-relaxed">
                  <p>
                    Sebagai institusi kejuruan, kami berkomitmen untuk menghasilkan lulusan yang tidak hanya memiliki pengetahuan akademik, tetapi juga keterampilan profesional yang mumpuni, sikap kerja yang baik, serta kemampuan beradaptasi dengan dunia industri yang dinamis.
                  </p>
                  <p>
                    Proses pembelajaran di SMK Pawyatan Daha 2 Kediri dilaksanakan dengan memadukan teori dan praktik secara seimbang. Didukung oleh tenaga pendidik yang kompeten serta fasilitas yang memadai, kami memastikan setiap siswa siap menghadapi tantangan di dunia kerja sesungguhnya.
                  </p>
                </div>
              </section>
            </div>

            <div className="space-y-[40px]">
              <section>
                <h3 className="text-xl md:text-2xl font-black bg-[#FFDE00] inline-block px-[15px] py-[5px] border-[3px] border-black mb-[15px]">
                  PROGRAM KEAHLIAN
                </h3>
                <div className="flex flex-col gap-[15px]">
                  {[
                    { title: "Teknik Komputer dan Jaringan (TKJ)", desc: "Fokus pada infrastruktur IT dan administrasi server." },
                    { title: "Bisnis Daring dan Pemasaran (BDP)", desc: "Keahlian dalam strategi perdagangan digital dan pemasaran." },
                    { title: "Manajemen Perkantoran & Layanan Bisnis (MPLB)", desc: "Profesionalisme tata kelola administrasi kantor." },
                    { title: "Agribisnis Pengolahan Hasil Pertanian (APHP)", desc: "Inovasi dalam pengolahan sumber daya alam." },
                    { title: "Akuntansi dan Keuangan Lembaga (AKL)", desc: "Ketelitian dan akurasi dalam manajemen finansial." }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-[15px] border-[3px] border-black flex flex-col hover:-translate-y-1 transition-transform duration-300">
                      <strong className="text-black text-lg mb-[5px]">{item.title}</strong>
                      <span className="text-base text-gray-700">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="mt-[60px] bg-[#7ED957] p-[30px] md:p-[50px] border-[4px] border-black shadow-[8px_8px_0px_#000]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
              <div>
                <h3 className="text-black font-black mb-[15px] text-xl md:text-2xl border-b-[4px] border-black inline-block">VISI SEKOLAH</h3>
                <p className="italic text-lg md:text-xl font-bold leading-relaxed mt-[10px]">
                  "Menjadi sekolah yang tamatannya unggul dalam prestasi, kompetensi, dan kompetisi serta berbudaya, berakhlaq mulia"
                </p>
              </div>
              <div>
                <h3 className="text-black font-black mb-[15px] text-xl md:text-2xl border-b-[4px] border-black inline-block">MISI SEKOLAH</h3>
                <ul className="list-decimal list-inside text-lg font-bold space-y-[10px] mt-[10px]">
                  <li>Meningkatkan mutu pendidikan sesuai perkembangan IPTEK.</li>
                  <li>Meningkatkan prestasi Akademik dan non-Akademik.</li>
                  <li>Meningkatkan pendidikan sistem ganda.</li>
                  <li>Meningkatkan dan mengembangkan pendidikan yang berakhlaq mulia.</li>
                  <li>Meningkatkan keterserapan tamatan di Dunia Kerja dan Industri.</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        {/* PROFIL JURUSAN TKJ */}
        <article id="tkj" className="w-full px-[5%] lg:px-[10%] py-[80px] bg-white border-b-[4px] border-black">
          <div className="mb-[40px]">
            <h2 className="text-3xl md:text-4xl font-black text-black inline-block bg-[#FF90E8] px-[20px] py-[10px] border-[3px] border-black shadow-[6px_6px_0px_#000]">
              PROFIL JURUSAN TKJ
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px] mb-[50px]">
            <section>
              <h3 className="text-xl md:text-2xl font-black bg-[#38B6FF] inline-block px-[15px] py-[5px] border-[3px] border-black mb-[15px]">
                GAMBARAN UMUM JURUSAN
              </h3>
              <div className="space-y-[15px] text-lg text-gray-800 leading-relaxed">
                <p>
                  Teknik Komputer dan Jaringan (TKJ) merupakan program keahlian unggulan di SMK Pawyatan Daha 2 Kediri. Kami berfokus pada pengembangan kompetensi teknologi informasi, mulai dari perakitan perangkat keras, pengelolaan jaringan, hingga sistem komunikasi data. 
                </p>
                <p>
                  Program ini dirancang untuk membentuk tenaga teknis di dunia digital yang memiliki pemahaman luas dan sikap profesional untuk menghadapi perkembangan teknologi yang semakin pesat.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-black bg-[#38B6FF] inline-block px-[15px] py-[5px] border-[3px] border-black mb-[15px]">
                SISTEM PEMBELAJARAN
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                Siswa akan mendapatkan pengalaman belajar yang mengintegrasikan teori di kelas dan praktik di laboratorium. Melalui pendekatan berbasis kompetensi, siswa akan dilatih memahami infrastruktur IT secara mendalam: dari dasar perangkat keras, jaringan LAN/WAN, hingga pengelolaan keamanan jaringan.
              </p>
            </section>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px]">
            <section>
              <h3 className="text-xl md:text-2xl font-black bg-[#38B6FF] inline-block px-[15px] py-[5px] border-[3px] border-black mb-[20px]">
                KOMPETENSI UTAMA
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                {[
                  { title: "Perangkat Keras (Hardware)", desc: "Perakitan, perbaikan, dan perawatan perangkat komputer." },
                  { title: "Sistem Operasi", desc: "Instalasi dan konfigurasi berbagai sistem operasi." },
                  { title: "Jaringan Komputer", desc: "Membangun dan mengelola topologi jaringan (Router & Switch)." },
                  { title: "Administrasi Server", desc: "Pengelolaan server dan manajemen layanan IT." }
                ].map((item, index) => (
                  <div key={index} className="bg-[#FAFAFA] p-[20px] border-[3px] border-black hover:-translate-y-1 transition-transform duration-300">
                    <strong className="text-black text-lg block mb-[5px]">{item.title}</strong>
                    <span className="text-base text-gray-700">{item.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="mb-[30px]">
                <h3 className="text-xl md:text-2xl font-black bg-[#38B6FF] inline-block px-[15px] py-[5px] border-[3px] border-black mb-[15px]">
                  TUJUAN JURUSAN
                </h3>
                <ul className="list-disc list-inside text-lg text-gray-800 space-y-[10px] pl-[10px]">
                  <li>Memiliki kompetensi teknis yang tinggi di bidang komputer dan jaringan.</li>
                  <li>Mampu merancang, mengimplementasikan, dan memelihara sistem jaringan.</li>
                  <li>Memiliki kemampuan penyelesaian masalah (problem solving) secara analitis.</li>
                  <li>Siap bekerja di dunia industri atau melanjutkan pendidikan.</li>
                </ul>
              </div>

              <div className="bg-[#FAFAFA] p-[30px] border-[4px] border-black shadow-[6px_6px_0px_#000]">
                <h3 className="text-black font-black mb-[20px] text-xl md:text-2xl border-b-[4px] border-black inline-block">PELUANG KARIER</h3>
                <ul className="grid grid-cols-2 gap-[15px] list-none text-base font-bold text-center">
                  <li className="bg-[#FFDE00] border-[3px] border-black py-[10px] px-[10px] hover:bg-[#111] hover:text-[#FFDE00] transition-colors duration-300">Network Administrator</li>
                  <li className="bg-[#FFDE00] border-[3px] border-black py-[10px] px-[10px] hover:bg-[#111] hover:text-[#FFDE00] transition-colors duration-300">IT Technical Support</li>
                  <li className="bg-[#FFDE00] border-[3px] border-black py-[10px] px-[10px] hover:bg-[#111] hover:text-[#FFDE00] transition-colors duration-300">System Administrator</li>
                  <li className="bg-[#FFDE00] border-[3px] border-black py-[10px] px-[10px] hover:bg-[#111] hover:text-[#FFDE00] transition-colors duration-300">Network Technician</li>
                </ul>
              </div>
            </section>
          </div>
        </article>

        {/* TENTANG UKK */}
        <article id="ukk" className="w-full px-[5%] lg:px-[10%] py-[80px] bg-[#FAFAFA] border-b-[4px] border-black">
          <div className="mb-[40px]">
            <h2 className="text-3xl md:text-4xl font-black text-white inline-block bg-[#FF5757] px-[20px] py-[10px] border-[3px] border-black shadow-[6px_6px_0px_#000]">
              TENTANG UKK
            </h2>
          </div>

          <div className="mb-[50px] max-w-5xl">
            <p className="text-lg text-gray-800 leading-relaxed">
              Uji Kompetensi Keahlian (UKK) merupakan salah satu bentuk penilaian yang dilakukan untuk mengukur kemampuan dan keterampilan teknis siswa sesuai dengan kompetensi yang telah dipelajari selama menempuh pendidikan di jurusan Teknik Komputer dan Jaringan. Dalam kegiatan UKK ini, siswa diharapkan mampu menerapkan pengetahuan teori ke dalam praktik secara langsung dengan menggunakan peralatan yang tersedia.
            </p>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-black border-b-[4px] border-black mb-[30px] inline-block">
            PANDUAN PELAKSANAAN UKK
          </h3>
          
          {/* Menggunakan CSS Grid agar langkah-langkah menyebar ke samping pada layar lebar */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
            
            {/* Step 1 */}
            <div className="bg-white p-[25px] border-[3px] border-black hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <h4 className="text-black font-black text-lg lg:text-xl uppercase mb-[15px] flex items-center gap-[10px]">
                <span className="bg-[#FF5757] text-white px-[12px] py-[2px] border-[3px] border-black">1</span> 
                Crimping Kabel UTP
              </h4>
              <ol className="list-decimal list-inside text-base text-gray-800 space-y-[8px] pl-[5px] flex-grow">
                <li>Siapkan kabel UTP, konektor RJ45, dan Crimping Tool.</li>
                <li>Potong ujung kabel menggunakan tang crimping.</li>
                <li>Kupas kulit luar kabel sekitar 2–3 cm.</li>
                <li>Pisahkan dan luruskan 8 kabel kecil.</li>
                <li>Susun sesuai standar Straight: PO, O, PH, B, PB, H, PC, C.</li>
                <li>Rapikan dan potong sejajar menyisakan 1,5 cm.</li>
                <li>Masukkan kabel ke RJ45 (klip di bawah).</li>
                <li>Kunci menggunakan tang crimping.</li>
                <li>Uji menggunakan LAN Tester.</li>
              </ol>
              <div className="mt-[20px] bg-[#FFDE00] p-[15px] border-[3px] border-black font-bold text-sm">
                ✅ Catatan: Lampu LAN tester harus menyala berurutan 1-8.
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-[25px] border-[3px] border-black hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <h4 className="text-black font-black text-lg lg:text-xl uppercase mb-[15px] flex items-center gap-[10px]">
                <span className="bg-[#FF5757] text-white px-[12px] py-[2px] border-[3px] border-black">2</span> 
                Instalasi Windows 11
              </h4>
              <ol className="list-decimal list-inside text-base text-gray-800 space-y-[8px] pl-[5px]">
                <li>Hubungkan flashdisk bootable Windows 11.</li>
                <li>Restart PC, masuk Boot Menu (F2/F12/Del).</li>
                <li>Pilih booting via USB / Flashdisk.</li>
                <li>Pilih Bahasa dan Keyboard, klik Next lalu Install Now.</li>
                <li>Pilih versi Windows & setujui lisensi.</li>
                <li>Pilih "Custom: Install Windows only (Advanced)".</li>
                <li>Hapus partisi lama, pilih Unallocated Space, klik Next.</li>
                <li>Tunggu proses instalasi hingga restart.</li>
                <li>Atur Region, Keyboard, dan buat Profil Pengguna.</li>
                <li>Selesai, instal driver perangkat yang dibutuhkan.</li>
              </ol>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-[25px] border-[3px] border-black hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <h4 className="text-black font-black text-lg lg:text-xl uppercase mb-[15px] flex items-center gap-[10px]">
                <span className="bg-[#FF5757] text-white px-[12px] py-[2px] border-[3px] border-black">3</span> 
                Konfigurasi IP Address
              </h4>
              <div className="space-y-[15px] flex-grow">
                <p className="text-base text-gray-800 font-bold border-b-[2px] border-black inline-block mb-[5px]">Tahapan:</p>
                <ol className="list-decimal list-inside text-base text-gray-800 space-y-[8px] pl-[5px]">
                  <li>Buka Control Panel {'>'} Network and Sharing Center.</li>
                  <li>Pilih Change adapter settings, klik kanan Ethernet {'>'} Properties.</li>
                  <li>Klik ganda Internet Protocol Version 4 (TCP/IPv4).</li>
                  <li>Pilih "Use the following IP address" (Contoh: 192.168.1.10).</li>
                  <li>Isi Subnet Mask (255.255.255.0).</li>
                  <li>Isi DNS Google (8.8.8.8 dan 8.8.4.4).</li>
                  <li>Klik OK untuk menyimpan.</li>
                  <li>Buka CMD (Win + R {'>'} ketik cmd).</li>
                  <li>Ketik <code>ping 8.8.8.8</code> untuk cek koneksi.</li>
                </ol>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-[25px] border-[3px] border-black hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <h4 className="text-black font-black text-lg lg:text-xl uppercase mb-[15px] flex items-center gap-[10px]">
                <span className="bg-[#FF5757] text-white px-[12px] py-[2px] border-[3px] border-black">4</span> 
                File Sharing
              </h4>
              <ol className="list-decimal list-inside text-base text-gray-800 space-y-[8px] pl-[5px]">
                <li>Buka Control Panel {'>'} Network and Sharing Center.</li>
                <li>Klik Change advanced sharing settings.</li>
                <li>Aktifkan Network Discovery & File/Printer Sharing (Private & Public).</li>
                <li>Di All Networks: Turn off Password protected sharing.</li>
                <li>Klik kanan folder target {'>'} Properties {'>'} tab Sharing.</li>
                <li>Pilih Share atau Advanced Sharing.</li>
                <li>Centang Share this folder, atur Permissions.</li>
                <li>Di PC Klien: Buka File Explorer {'>'} Network {'>'} Buka PC Server.</li>
              </ol>
            </div>

            {/* Step 5 */}
            <div className="bg-white p-[25px] border-[3px] border-black hover:-translate-y-2 transition-transform duration-300 flex flex-col md:col-span-2 xl:col-span-1">
              <h4 className="text-black font-black text-lg lg:text-xl uppercase mb-[15px] flex items-center gap-[10px]">
                <span className="bg-[#FF5757] text-white px-[12px] py-[2px] border-[3px] border-black">5</span> 
                Printer Sharing
              </h4>
              <ol className="list-decimal list-inside text-base text-gray-800 space-y-[8px] pl-[5px]">
                <li>Buka Control Panel {'>'} Devices and Printers.</li>
                <li>Klik kanan printer {'>'} Printer Properties {'>'} tab Sharing.</li>
                <li>Centang Share this printer dan isi Share Name.</li>
                <li>Pastikan PC server & klien satu jaringan LAN/WiFi.</li>
                <li>Di PC Klien: Buka Settings {'>'} Bluetooth & Devices {'>'} Printers.</li>
                <li>Klik Add Device, lalu pilih printer jaringan yang muncul.</li>
                <li>Selesai. Printer siap digunakan bersama.</li>
              </ol>
            </div>

          </div>

          <div className="bg-[#38B6FF] p-[30px] md:p-[40px] border-[4px] border-black shadow-[8px_8px_0px_#000] mt-[60px] flex flex-col items-center max-w-4xl mx-auto hover:scale-[1.02] transition-transform duration-300">
            <h4 className="text-center text-black font-black text-2xl md:text-3xl mb-[15px] uppercase">
              🏆 Uji Kompetensi Selesai
            </h4>
            <p className="text-center text-black font-medium text-lg md:text-xl max-w-2xl leading-relaxed">
              Keterampilan teknis dan pemahaman Anda telah terverifikasi. Anda telah menyelesaikan seluruh tahapan instruksi dengan baik.
            </p>
          </div>
        </article>

      </main>

      {/* --- FOOTER --- */}
      <footer className="w-full text-center py-[40px] px-[20px] bg-white border-t-[6px] border-black">
        <p className="font-black text-base md:text-lg text-black uppercase tracking-wider">
        © 2026 SMKDAHA2. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}