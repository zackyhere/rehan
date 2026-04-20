import React from 'react';

export default function HomeTugasFullwidth() {
  return (
    <div className="min-h-screen relative text-gray-800 font-sans selection:bg-teal-200 bg-white">
      
      <style>{`
        html { scroll-behavior: smooth; }
        /* Menyembunyikan scrollbar untuk menu di HP tapi tetap bisa digeser */
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* --- HEADER & NAVIGATION --- */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-3">
          {/* Logo / Nama Web (Muncul di layar agak besar) */}
          <div className="hidden md:flex items-center gap-2 font-bold text-teal-700">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
            <span>Pawyatan Daha 2</span>
          </div>

          {/* Menu Navigasi */}
          <nav className="w-full md:w-auto">
            <ul className="flex justify-center md:justify-end gap-2 md:gap-4 overflow-x-auto hide-scrollbar whitespace-nowrap px-2">
              <li>
                <a href="#info-sekolah" className="block px-4 py-2 rounded text-sm md:text-base text-gray-600 hover:bg-teal-50 hover:text-teal-700 font-medium transition-colors">
                  Info Sekolah
                </a>
              </li>
              <li>
                <a href="#info-jurusan" className="block px-4 py-2 rounded text-sm md:text-base text-gray-600 hover:bg-teal-50 hover:text-teal-700 font-medium transition-colors">
                  Jurusan TKJ
                </a>
              </li>
              <li>
                <a href="#panduan-ukk" className="block px-4 py-2 rounded text-sm md:text-base text-white bg-teal-600 hover:bg-teal-700 font-medium transition-colors shadow-sm">
                  Tahapan UKK
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* --- HERO SECTION (TINGGI SELAYAR & GAMBAR BELAKANG) --- */}
      <section className="w-full min-h-screen relative bg-[url('/images.jpg')] bg-cover bg-center bg-no-repeat text-white px-5 flex flex-col items-center justify-center text-center overflow-hidden">
        
        {/* Dark Overlay: Lapisan hitam transparan agar teks mudah dibaca */}
        <div className="absolute inset-0 bg-gray-900/60 z-0"></div>

        {/* Konten Hero: Diberi z-10 agar berada di atas overlay */}
        <div className="relative z-10 flex flex-col items-center">
          <img 
            src="/logo.png" 
            alt="Logo SMK Pawyatan Daha 2" 
            className="w-28 md:w-40 object-contain mb-8 drop-shadow-2xl" 
          />
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
            SMK Pawyatan Daha 2
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-teal-100 mb-6 drop-shadow-md">
            Program Keahlian Teknik Komputer dan Jaringan
          </h2>
          <p className="text-base md:text-lg text-teal-50 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Halaman ini berisi informasi seputar sekolah, profil program keahlian TKJ, serta panduan singkat mengenai pelaksanaan Ujian Kompetensi Keahlian (UKK).
          </p>
        </div>
      </section>

      {/* --- INFO SEKOLAH (SELAYAR - LATAR PUTIH) --- */}
      <article id="info-sekolah" className="w-full bg-white py-16 px-5 scroll-mt-14">
        <div className="max-w-5xl mx-auto">
          <div className="border-b-[3px] border-teal-500 inline-block mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-2">Informasi Sekolah</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">Tentang SMK Pawyatan Daha 2</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Sekolah menengah kejuruan ini sudah mulai beroperasi semenjak <strong>1 Agustus 1965</strong>. Lokasi gedungnya sangat mudah dijangkau karena berada di <strong>Jl. A. Yani No. 2, Banjaran, Kota Kediri</strong>. Selama puluhan tahun, sekolah ini terus fokus untuk melatih siswa-siswinya agar siap terjun langsung ke dunia kerja setelah lulus nanti.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">Sistem Pendidikan</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Pembelajaran di sini tidak hanya soal teori di kelas, tapi lebih banyak praktik langsung di laboratorium. Tujuannya supaya para siswa terbiasa dengan alat dan mesin yang nantinya benar-benar akan mereka gunakan saat bekerja di perusahaan atau industri.
              </p>
            </div>
          </div>

          {/* Visi Misi Tanpa Kotak Tegas */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Visi & Misi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500">
                <p className="text-gray-700 font-semibold mb-2">Visi Utama:</p>
                <p className="text-gray-600 italic text-sm md:text-base">
                  "Menjadi sekolah yang tamatannya unggul dalam prestasi, kompetensi, dan kompetisi serta berbudaya, berakhlaq mulia"
                </p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold mb-3">Langkah Misi:</p>
                <ul className="list-disc list-outside ml-4 text-gray-600 space-y-2 text-sm md:text-base marker:text-teal-500">
                  <li>Mengikuti perkembangan teknologi terkini dalam proses belajar.</li>
                  <li>Mendorong siswa meraih juara di bidang akademik maupun lomba luar kelas.</li>
                  <li>Memperkuat program magang atau PKL (Pendidikan Sistem Ganda).</li>
                  <li>Mendidik karakter dan moral siswa agar berakhlak baik.</li>
                  <li>Memastikan lulusan gampang mencari kerja di dunia industri.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* --- PROFIL JURUSAN TKJ (SELAYAR - LATAR ABU-ABU TERANG) --- */}
      <article id="info-jurusan" className="w-full bg-gray-50 py-16 px-5 border-y border-gray-200 scroll-mt-14">
        <div className="max-w-5xl mx-auto">
          <div className="border-b-[3px] border-teal-500 inline-block mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-2">Jurusan TKJ</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1 space-y-6">
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                <strong>Teknik Komputer dan Jaringan (TKJ)</strong> adalah jurusan yang sangat cocok buat kamu yang suka utak-atik komputer dan internet. Di sini, siswa akan diajarkan segala hal dari nol, mulai dari merakit PC, menginstal Windows, sampai menyambungkan banyak komputer menjadi satu jaringan lokal maupun internet.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Lulusan TKJ biasanya punya peluang kerja yang lumayan luas. Beberapa profesi yang bisa diambil setelah lulus antara lain menjadi Teknisi Komputer, Admin Jaringan, Staff IT Support di kantor, atau bahkan membuka jasa <em>service</em> laptop dan komputer sendiri.
              </p>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Materi yang Dipelajari</h3>
              <ul className="space-y-4">
                {[
                  { title: "Bongkar Pasang PC", desc: "Merakit komponen komputer dari awal sampai menyala." },
                  { title: "Instalasi OS", desc: "Cara install Windows, Linux, dan aplikasi pendukung." },
                  { title: "Kabel Jaringan", desc: "Membuat kabel UTP (Straight dan Cross) untuk koneksi." }
                ].map((item, index) => (
                  <li key={index} className="flex gap-4 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="w-6 h-6 mt-0.5 rounded bg-teal-100 text-teal-600 flex items-center justify-center font-bold text-xs shrink-0">✓</div>
                    <div>
                      <strong className="text-gray-700 text-sm md:text-base block">{item.title}</strong>
                      <span className="text-sm text-gray-500">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* --- PANDUAN UKK (SELAYAR - LATAR PUTIH) --- */}
      <article id="panduan-ukk" className="w-full bg-white py-16 px-5 scroll-mt-14">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Langkah-Langkah UKK TKJ</h2>
            <p className="text-gray-600 text-sm md:text-base">
              Saat Ujian Praktik (UKK) nanti, siswa diwajibkan untuk menyelesaikan sebuah <em>project</em> jaringan dasar. Berikut adalah urutan tugas yang biasanya harus diselesaikan dari awal sampai akhir ujian.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            
            {/* Step 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-teal-100 text-teal-600 font-bold text-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-5 rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Membuat Kabel Jaringan</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Tahap awal adalah menyiapkan kabel jaringan UTP. Kita menyusun urutan kabel kecil di dalamnya menggunakan aturan tipe <strong>Straight</strong>. Kalau susunannya sudah rata, dikunci ke konektor RJ-45 pakai tang <em>crimping</em> dan dites pakai LAN tester.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-teal-100 text-teal-600 font-bold text-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-5 rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Instalasi Windows</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Atur pengaturan BIOS agar <em>booting</em> dari Flashdisk <em>installer</em>. Pilih opsi <em>Clean Install</em> agar Windows bersih dari data lama, lalu bagi partisi penyimpanan (C dan D) dan buat *password* *user*.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-teal-100 text-teal-600 font-bold text-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-5 rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Setting IP Address</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Berikan alamat IP secara manual (Static IP), misalnya <code>192.168.1.10</code> lewat menu <em>Network Center</em>. Lakukan uji koneksi dengan perintah <code>ping</code> di CMD untuk memastikan tersambung.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-teal-100 text-teal-600 font-bold text-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                4
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-5 rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Sharing Folder</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Aktifkan <em>Network Discovery</em>, lalu buat folder dan atur di menu <em>Properties - Sharing</em>. Atur perizinan supaya komputer lain boleh membaca atau mengambil file dari folder tersebut.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-teal-100 text-teal-600 font-bold text-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                5
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-5 rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Sharing Printer</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Langkah terakhir, masuk ke <em>Devices and Printers</em> pada komputer server. Centang opsi <em>Share this printer</em> supaya komputer klien bisa ikut mencetak dokumen via jaringan LAN.
                </p>
              </div>
            </div>

          </div>
        </div>
      </article>

      {/* --- FOOTER (SELAYAR) --- */}
      <footer className="w-full text-center py-8 bg-gray-800 text-gray-300 mt-auto">
        <p className="text-sm">
          Tugas Website UKK - Dibuat untuk SMK Pawyatan Daha 2
        </p>
      </footer>
    </div>
  );
}