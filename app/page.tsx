import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen relative text-slate-700 font-sans selection:bg-blue-300 selection:text-white overflow-x-hidden bg-[#eef2f5]">
      
      {/* Memastikan scroll-smooth berjalan optimal di seluruh halaman */}
      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>

      {/* --- BACKGROUND DECORATION (Glassmorphism & Neumorphism Base) --- */}
      {/* Latar belakang gambar dengan efek blur ekstrem untuk kesan kaca */}
      <div className="fixed inset-0 z-0 bg-[url('/20534381-10.jpg')] bg-cover bg-center opacity-20 filter blur-[8px]"></div>
      
      {/* Ornamen warna pastel untuk memperkuat efek Glassmorphism */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-300/30 filter blur-[100px] z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-300/30 filter blur-[100px] z-0"></div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center p-[20px]">
        {/* Glassmorphism Card Wrapper */}
        <div className="w-full max-w-5xl bg-white/40 backdrop-blur-lg border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] rounded-3xl p-[40px] md:p-[60px] flex flex-col items-center text-center">
          
          {/* Neumorphic Image Container */}
          <div className="p-[15px] bg-[#eef2f5] rounded-full shadow-[8px_8px_16px_#caced1,-8px_-8px_16px_#ffffff] mb-[30px]">
            <img 
              src="/logo.png" 
              alt="Logo SMK Pawyatan Daha 2 Kediri" 
              className="w-[80px] md:w-[120px] object-contain" 
            />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800 tracking-tight mb-[20px]">
            SMK Pawyatan Daha 2
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-[40px]">
            Program Keahlian Teknik Komputer dan Jaringan. Berdedikasi mencetak generasi unggul yang siap menghubungkan dunia melalui inovasi teknologi.
          </p>

          {/* Navigation with Neumorphism Buttons */}
          <nav className="w-full">
            <ul className="flex justify-center gap-[15px] md:gap-[25px] flex-wrap list-none">
              <li>
                <a href="#profil" className="block px-[25px] py-[12px] rounded-xl text-slate-700 font-semibold transition-all duration-300 bg-[#eef2f5] shadow-[6px_6px_12px_#caced1,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#caced1,inset_-6px_-6px_12px_#ffffff] hover:text-blue-600">
                  Profil Sekolah
                </a>
              </li>
              <li>
                <a href="#tkj" className="block px-[25px] py-[12px] rounded-xl text-slate-700 font-semibold transition-all duration-300 bg-[#eef2f5] shadow-[6px_6px_12px_#caced1,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#caced1,inset_-6px_-6px_12px_#ffffff] hover:text-indigo-600">
                  Profil Jurusan
                </a>
              </li>
              <li>
                <a href="#ukk" className="block px-[25px] py-[12px] rounded-xl text-slate-700 font-semibold transition-all duration-300 bg-[#eef2f5] shadow-[6px_6px_12px_#caced1,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#caced1,inset_-6px_-6px_12px_#ffffff] hover:text-green-600">
                  Tentang UKK
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-[20px] pb-[80px] space-y-[60px] md:space-y-[80px]">
        
        {/* PROFIL SEKOLAH */}
        <article id="profil" className="scroll-mt-[40px]">
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-[30px] md:p-[50px]">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-[40px] text-center">Profil Sekolah</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
              {/* Sejarah & Komitmen */}
              <div className="space-y-[30px]">
                <section className="p-[25px] rounded-2xl bg-[#eef2f5] shadow-[inset_5px_5px_10px_#caced1,inset_-5px_-5px_10px_#ffffff]">
                  <h3 className="text-xl font-semibold text-blue-700 mb-[15px]">Sejarah dan Lokasi</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    SMK Pawyatan Daha 2 Kediri merupakan institusi pendidikan menengah kejuruan yang telah berdiri sejak <strong>1 Agustus 1965</strong>. Berlokasi strategis di <strong>Jl. A. Yani No. 2, Banjaran, Kota Kediri</strong>, sekolah kami memiliki dedikasi lebih dari setengah abad dalam menghadirkan layanan pendidikan kejuruan yang berorientasi pada peningkatan kompetensi dan pembentukan karakter peserta didik.
                  </p>
                </section>

                <section className="p-[25px] rounded-2xl bg-[#eef2f5] shadow-[inset_5px_5px_10px_#caced1,inset_-5px_-5px_10px_#ffffff]">
                  <h3 className="text-xl font-semibold text-blue-700 mb-[15px]">Komitmen Pendidikan</h3>
                  <div className="space-y-[10px] text-slate-600 leading-relaxed text-sm md:text-base">
                    <p>
                      Sebagai lembaga pendidikan vokasi, kami berfokus pada keseimbangan antara pengetahuan akademik dan keterampilan praktis. Kami bertujuan untuk mencetak lulusan yang profesional, memiliki sikap kerja yang baik, serta adaptif terhadap perkembangan dunia industri.
                    </p>
                    <p>
                      Didukung oleh tenaga pendidik yang kompeten serta fasilitas yang memadai, proses pembelajaran dirancang agar setiap peserta didik memiliki kesiapan penuh untuk bersaing di dunia kerja yang sesungguhnya.
                    </p>
                  </div>
                </section>
              </div>

              {/* Program Keahlian */}
              <div className="space-y-[30px]">
                <section>
                  <h3 className="text-xl font-semibold text-blue-700 mb-[15px] px-[10px]">Program Keahlian</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-[20px] px-[10px]">
                    Guna memfasilitasi minat dan bakat peserta didik, kami menyelenggarakan beberapa program keahlian unggulan, yaitu:
                  </p>
                  <div className="space-y-[15px]">
                    {[
                      { title: "Teknik Komputer dan Jaringan (TKJ)", desc: "Mempelajari infrastruktur teknologi informasi dan administrasi server." },
                      { title: "Bisnis Daring dan Pemasaran (BDP)", desc: "Mendalami keahlian perdagangan digital dan strategi pemasaran modern." },
                      { title: "Manajemen Perkantoran & Layanan Bisnis", desc: "Membentuk profesionalisme dalam tata kelola administrasi perkantoran." },
                      { title: "Agribisnis Pengolahan Hasil Pertanian", desc: "Berinovasi dalam pengolahan dan pemanfaatan sumber daya alam." },
                      { title: "Akuntansi dan Keuangan Lembaga", desc: "Melatih ketelitian dan akurasi dalam pengelolaan manajemen finansial." }
                    ].map((item, index) => (
                      <div key={index} className="p-[15px] rounded-xl bg-[#eef2f5] shadow-[5px_5px_10px_#caced1,-5px_-5px_10px_#ffffff] border border-white/50">
                        <strong className="text-slate-700 block mb-[4px]">{item.title}</strong>
                        <span className="text-sm text-slate-500">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/* Visi Misi Container */}
            <div className="mt-[40px] p-[30px] md:p-[40px] rounded-3xl bg-gradient-to-br from-blue-50/50 to-indigo-50/50 shadow-[inset_6px_6px_15px_rgba(0,0,0,0.05),inset_-6px_-6px_15px_rgba(255,255,255,0.8)] border border-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-[15px]">Visi Sekolah</h3>
                  <p className="text-slate-700 italic leading-relaxed">
                    "Menjadi sekolah yang tamatannya unggul dalam prestasi, kompetensi, dan kompetisi serta berbudaya, berakhlaq mulia"
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-[15px]">Misi Sekolah</h3>
                  <ul className="list-decimal list-inside text-slate-700 space-y-[8px] leading-relaxed text-sm md:text-base">
                    <li>Meningkatkan mutu pendidikan sesuai perkembangan IPTEK.</li>
                    <li>Meningkatkan prestasi Akademik dan non-Akademik.</li>
                    <li>Meningkatkan pendidikan sistem ganda.</li>
                    <li>Meningkatkan dan mengembangkan pendidikan yang berakhlaq mulia.</li>
                    <li>Meningkatkan keterserapan tamatan di Dunia Kerja dan Industri.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </article>

        {/* PROFIL JURUSAN TKJ */}
        <article id="tkj" className="scroll-mt-[40px]">
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-[30px] md:p-[50px]">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-[40px] text-center">Profil Jurusan TKJ</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
              <section className="space-y-[20px]">
                <div className="p-[25px] rounded-2xl bg-[#eef2f5] shadow-[inset_5px_5px_10px_#caced1,inset_-5px_-5px_10px_#ffffff]">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-[15px]">Gambaran Umum</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-[10px]">
                    Program Keahlian Teknik Komputer dan Jaringan (TKJ) didesain khusus untuk membekali peserta didik dengan pemahaman mendalam di bidang teknologi informasi. Keahlian yang diajarkan mencakup dasar perakitan perangkat keras, pengelolaan infrastruktur jaringan, hingga sistem komunikasi data terpadu.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Program ini bertujuan untuk membentuk tenaga teknis menengah yang memiliki sikap profesional dan tanggap terhadap laju perkembangan teknologi digital.
                  </p>
                </div>

                <div className="p-[25px] rounded-2xl bg-[#eef2f5] shadow-[inset_5px_5px_10px_#caced1,inset_-5px_-5px_10px_#ffffff]">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-[15px]">Sistem Pembelajaran</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Pendekatan pembelajaran kami memadukan kajian teori di ruang kelas dengan penerapan praktik secara intensif di laboratorium. Siswa dilatih untuk melakukan analisis dan pemecahan masalah (problem solving) pada simulasi infrastruktur IT yang nyata.
                  </p>
                </div>
              </section>

              <section className="space-y-[30px]">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-700 mb-[15px] px-[10px]">Kompetensi Utama</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
                    {[
                      { title: "Perangkat Keras", desc: "Perakitan dan perbaikan komputer." },
                      { title: "Sistem Operasi", desc: "Instalasi beragam sistem operasi." },
                      { title: "Jaringan Komputer", desc: "Manajemen topologi (Router & Switch)." },
                      { title: "Administrasi Server", desc: "Pengelolaan layanan berbasis server." }
                    ].map((item, index) => (
                      <div key={index} className="p-[15px] rounded-xl bg-[#eef2f5] shadow-[4px_4px_8px_#caced1,-4px_-4px_8px_#ffffff] flex flex-col justify-center text-center">
                        <strong className="text-slate-700 text-sm md:text-base">{item.title}</strong>
                        <span className="text-xs text-slate-500 mt-[5px]">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-[25px] rounded-2xl bg-[#eef2f5] shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] border border-white/60">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-[15px]">Tujuan & Peluang Karier</h3>
                  <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-[6px] mb-[20px]">
                    <li>Mencetak tenaga ahli di bidang jaringan komputer.</li>
                    <li>Mampu merancang dan memelihara sistem jaringan.</li>
                    <li>Mempersiapkan lulusan untuk terjun ke industri atau melanjutkan studi.</li>
                  </ul>
                  <div className="flex flex-wrap gap-[10px]">
                    {["Network Admin", "IT Support", "System Admin", "Teknisi Jaringan"].map((job, idx) => (
                      <span key={idx} className="text-xs md:text-sm font-medium text-slate-700 px-[12px] py-[6px] bg-white/50 border border-white rounded-full shadow-sm">
                        {job}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </article>

        {/* TENTANG UKK */}
        <article id="ukk" className="scroll-mt-[40px]">
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-[30px] md:p-[50px]">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-[20px] text-center">Panduan Pelaksanaan UKK</h2>
            
            <p className="text-slate-600 leading-relaxed text-sm md:text-base text-center max-w-3xl mx-auto mb-[40px]">
              Uji Kompetensi Keahlian (UKK) merupakan bentuk evaluasi akhir guna mengukur capaian keterampilan teknis siswa secara komprehensif. Melalui ujian ini, peserta didik diharapkan mampu mempraktikkan kompetensi yang telah dipelajari menggunakan standar dan prosedur operasional industri.
            </p>

            {/* Steps Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
              
              {/* Step 1 */}
              <div className="p-[25px] rounded-2xl bg-[#eef2f5] shadow-[6px_6px_12px_#caced1,-6px_-6px_12px_#ffffff] border border-white/50 hover:shadow-[inset_4px_4px_8px_#caced1,inset_-4px_-4px_8px_#ffffff] transition-all duration-300">
                <div className="flex items-center gap-[15px] mb-[15px]">
                  <div className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1)]">1</div>
                  <h3 className="text-lg font-semibold text-slate-800">Perakitan Kabel Jaringan</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-[10px]">
                  Peserta didik melakukan persiapan dan pemotongan kabel UTP. Selanjutnya, menyusun urutan warna sesuai standar <em>Straight-through</em> (Putih Orange, Orange, Putih Hijau, Biru, Putih Biru, Hijau, Putih Coklat, Coklat).
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Setelah tersusun rapi, kabel dimasukkan ke dalam konektor RJ45 dan dikunci menggunakan <em>Crimping Tool</em>. Hasil rakitan wajib diuji kelancarannya menggunakan LAN Tester.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-[25px] rounded-2xl bg-[#eef2f5] shadow-[6px_6px_12px_#caced1,-6px_-6px_12px_#ffffff] border border-white/50 hover:shadow-[inset_4px_4px_8px_#caced1,inset_-4px_-4px_8px_#ffffff] transition-all duration-300">
                <div className="flex items-center gap-[15px] mb-[15px]">
                  <div className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1)]">2</div>
                  <h3 className="text-lg font-semibold text-slate-800">Instalasi Sistem Operasi</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-[10px]">
                  Tahap ini diawali dengan pengaturan prioritas <em>Booting</em> komputer menuju media instalasi (Flashdisk). Peserta didik kemudian menjalankan proses instalasi Windows 11 secara bersih (<em>Clean Install</em>).
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Proses ini mencakup pengelolaan partisi penyimpanan, persetujuan lisensi, hingga penyelesaian konfigurasi awal sistem (bahasa, zona waktu, dan profil pengguna).
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-[25px] rounded-2xl bg-[#eef2f5] shadow-[6px_6px_12px_#caced1,-6px_-6px_12px_#ffffff] border border-white/50 hover:shadow-[inset_4px_4px_8px_#caced1,inset_-4px_-4px_8px_#ffffff] transition-all duration-300">
                <div className="flex items-center gap-[15px] mb-[15px]">
                  <div className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1)]">3</div>
                  <h3 className="text-lg font-semibold text-slate-800">Konfigurasi Pengalamatan IP</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-[10px]">
                  Peserta didik mengatur identitas jaringan komputer secara manual melalui menu <em>Network and Sharing Center</em>. Konfigurasi yang diatur meliputi penetapan <em>IP Address</em> (misal: 192.168.1.10), pengisian <em>Subnet Mask</em>, serta pengaturan alamat DNS Server.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Keberhasilan tahapan ini divalidasi dengan melakukan uji konektivitas menggunakan perintah <code>ping</code> melalui antarmuka <em>Command Prompt</em>.
                </p>
              </div>

              {/* Step 4 & 5 Combined visually for balance */}
              <div className="flex flex-col gap-[25px]">
                <div className="p-[25px] rounded-2xl bg-[#eef2f5] shadow-[6px_6px_12px_#caced1,-6px_-6px_12px_#ffffff] border border-white/50 hover:shadow-[inset_4px_4px_8px_#caced1,inset_-4px_-4px_8px_#ffffff] transition-all duration-300">
                  <div className="flex items-center gap-[15px] mb-[10px]">
                    <div className="w-[35px] h-[35px] flex shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1)]">4</div>
                    <h3 className="text-lg font-semibold text-slate-800">Manajemen Berbagi Data (File Sharing)</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pl-[50px]">
                    Mengaktifkan fitur <em>Network Discovery</em> dan membagikan folder spesifik kepada pengguna lain dengan memberikan pengaturan hak akses (<em>Permissions</em>) yang sesuai.
                  </p>
                </div>

                <div className="p-[25px] rounded-2xl bg-[#eef2f5] shadow-[6px_6px_12px_#caced1,-6px_-6px_12px_#ffffff] border border-white/50 hover:shadow-[inset_4px_4px_8px_#caced1,inset_-4px_-4px_8px_#ffffff] transition-all duration-300">
                  <div className="flex items-center gap-[15px] mb-[10px]">
                    <div className="w-[35px] h-[35px] flex shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1)]">5</div>
                    <h3 className="text-lg font-semibold text-slate-800">Berbagi Perangkat Pencetak (Printer)</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pl-[50px]">
                    Menginstal dan mengatur fungsi berbagi pada perangkat printer dari komputer <em>Server</em>, untuk kemudian dihubungkan dan digunakan secara nirkabel oleh komputer <em>Client</em>.
                  </p>
                </div>
              </div>

            </div>

            {/* Validation Banner */}
            <div className="mt-[40px] p-[25px] text-center rounded-2xl bg-green-50/60 border border-green-200 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.02)]">
              <h4 className="text-lg md:text-xl font-bold text-green-700 mb-[5px]">Penyelesaian Evaluasi</h4>
              <p className="text-sm md:text-base text-green-600/80 font-medium">
                Siswa yang berhasil menyelesaikan seluruh instruksi teknis di atas dinyatakan kompeten dan memenuhi standar kualifikasi keahlian.
              </p>
            </div>
          </div>
        </article>

      </main>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 w-full text-center py-[30px] border-t border-white/40 bg-white/20 backdrop-blur-md">
        <p className="text-sm text-slate-500 font-medium tracking-wide">
        © 2026 SMKDAHA2. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}