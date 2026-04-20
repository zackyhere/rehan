import React from 'react';

export default function HomeTugas() {
  return (
    <div className="min-h-screen relative text-gray-800 font-sans selection:bg-teal-200 overflow-x-hidden bg-gray-50">
      
      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>

      {/* --- BACKGROUND SIMPEL --- */}
      <div className="fixed top-0 left-0 w-full h-64 bg-teal-600 z-0 rounded-b-[40px] md:rounded-b-[80px]"></div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 min-h-screen flex flex-col pt-20 items-center p-5">
        <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8 md:p-12 flex flex-col items-center text-center mt-10 border border-gray-100">
          
          <img 
            src="/logo.png" 
            alt="Logo SMK Pawyatan Daha 2" 
            className="w-24 md:w-32 object-contain mb-6 drop-shadow-md" 
          />
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
            SMK Pawyatan Daha 2
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-teal-600 mb-6">
            Teknik Komputer dan Jaringan
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed mb-8">
            Halaman ini berisi informasi seputar sekolah, profil program keahlian TKJ, serta panduan singkat mengenai pelaksanaan Ujian Kompetensi Keahlian (UKK).
          </p>

          {/* Navigasi Simple Card */}
          <nav className="w-full mt-4">
            <ul className="flex justify-center gap-4 flex-wrap list-none">
              <li>
                <a href="#info-sekolah" className="block px-6 py-3 rounded-lg text-gray-700 bg-gray-100 hover:bg-teal-500 hover:text-white font-medium transition-colors border border-gray-200">
                  Info Sekolah
                </a>
              </li>
              <li>
                <a href="#info-jurusan" className="block px-6 py-3 rounded-lg text-gray-700 bg-gray-100 hover:bg-teal-500 hover:text-white font-medium transition-colors border border-gray-200">
                  Jurusan TKJ
                </a>
              </li>
              <li>
                <a href="#panduan-ukk" className="block px-6 py-3 rounded-lg text-gray-700 bg-gray-100 hover:bg-teal-500 hover:text-white font-medium transition-colors border border-gray-200">
                  Tahapan UKK
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-5 pb-20 space-y-20">
        
        {/* INFO SEKOLAH */}
        <article id="info-sekolah" className="scroll-mt-24">
          <div className="bg-white shadow-lg border border-gray-100 rounded-2xl p-8 md:p-10">
            <div className="border-b-[3px] border-teal-500 inline-block mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-2">Informasi Sekolah</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-lg font-bold text-teal-700 mb-3">Tentang SMK Pawyatan Daha 2</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Sekolah menengah kejuruan ini sudah mulai beroperasi semenjak <strong>1 Agustus 1965</strong>. Lokasi gedungnya sangat mudah dijangkau karena berada di <strong>Jl. A. Yani No. 2, Banjaran, Kota Kediri</strong>. Selama puluhan tahun, sekolah ini terus fokus untuk melatih siswa-siswinya agar siap terjun langsung ke dunia kerja setelah lulus nanti.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-lg font-bold text-teal-700 mb-3">Sistem Pendidikan</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Pembelajaran di sini tidak hanya soal teori di kelas, tapi lebih banyak praktik langsung di laboratorium. Tujuannya supaya para siswa terbiasa dengan alat dan mesin yang nantinya benar-benar akan mereka gunakan saat bekerja di perusahaan atau industri.
                </p>
              </div>
            </div>

            {/* Visi Misi */}
            <div className="bg-teal-50 p-6 md:p-8 rounded-xl border border-teal-100">
              <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">Visi & Misi</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 font-medium italic mb-2">Visi Utama:</p>
                  <p className="text-gray-600 bg-white p-4 rounded-lg shadow-sm border border-teal-50 text-sm md:text-base">
                    "Menjadi sekolah yang tamatannya unggul dalam prestasi, kompetensi, dan kompetisi serta berbudaya, berakhlaq mulia"
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium mb-2">Langkah Misi:</p>
                  <ul className="list-disc list-outside ml-4 text-gray-600 space-y-1 text-sm md:text-base marker:text-teal-500">
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

        {/* PROFIL JURUSAN TKJ */}
        <article id="info-jurusan" className="scroll-mt-24">
          <div className="bg-white shadow-lg border border-gray-100 rounded-2xl p-8 md:p-10">
            <div className="border-b-[3px] border-teal-500 inline-block mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-2">Jurusan TKJ</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-6">
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  <strong>Teknik Komputer dan Jaringan (TKJ)</strong> adalah jurusan yang sangat cocok buat kamu yang suka utak-atik komputer dan internet. Di sini, siswa akan diajarkan segala hal dari nol, mulai dari merakit PC, menginstal Windows, sampai menyambungkan banyak komputer menjadi satu jaringan lokal maupun internet.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Lulusan TKJ biasanya punya peluang kerja yang lumayan luas. Beberapa profesi yang bisa diambil setelah lulus antara lain menjadi Teknisi Komputer, Admin Jaringan, Staff IT Support di kantor, atau bahkan membuka jasa *service* laptop dan komputer sendiri.
                </p>
              </div>

              <div className="flex-1 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-teal-700 mb-4">Materi yang Dipelajari</h3>
                <ul className="space-y-3">
                  {[
                    { title: "Bongkar Pasang PC", desc: "Merakit komponen komputer dari awal sampai menyala." },
                    { title: "Instalasi OS", desc: "Cara install Windows, Linux, dan aplikasi pendukung." },
                    { title: "Kabel Jaringan", desc: "Membuat kabel UTP (Straight dan Cross) untuk koneksi." },
                    { title: "Setting Mikrotik", desc: "Mengatur router agar bisa membagi koneksi internet." }
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 items-start">
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

        {/* PANDUAN UKK */}
        <article id="panduan-ukk" className="scroll-mt-24">
          <div className="bg-white shadow-lg border border-gray-100 rounded-2xl p-8 md:p-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Langkah-Langkah UKK TKJ</h2>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                Saat Ujian Praktik (UKK) nanti, siswa diwajibkan untuk menyelesaikan sebuah *project* jaringan dasar. Berikut adalah urutan tugas yang biasanya harus diselesaikan dari awal sampai akhir ujian.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-4 p-5 rounded-xl border border-gray-200 hover:border-teal-400 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 text-xl font-bold flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors">1</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Membuat Kabel Jaringan</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    Tahap awal adalah menyiapkan kabel jaringan UTP. Kita memotong pelindung luarnya dan menyusun urutan kabel kecil di dalamnya menggunakan aturan tipe <strong>Straight</strong> (Putih Orange, Orange, Putih Hijau, Biru, Putih Biru, Hijau, Putih Coklat, Coklat).
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Kalau susunannya sudah rata dan pas, ujung kabel dimasukkan ke konektor RJ-45 lalu ditekan kuat pakai tang <em>crimping</em>. Terakhir, dites pakai LAN tester untuk memastikan semua lampu (nomor 1 sampai 8) menyala dengan normal.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-4 p-5 rounded-xl border border-gray-200 hover:border-teal-400 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 text-xl font-bold flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors">2</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Instalasi Windows</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    Langkah kedua adalah menginstal ulang komputer. Caranya, atur pengaturan BIOS agar <em>booting</em> pertama kali membaca Flashdisk yang sudah berisi <em>installer</em> sistem operasi (misalnya Windows 11).
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Pilih opsi <em>Clean Install</em> agar Windows bersih dari data lama. Di bagian ini, kita juga akan membagi partisi penyimpanan (Local Disk C dan D) dan melakukan pembuatan nama komputer serta *password* *user*.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-4 p-5 rounded-xl border border-gray-200 hover:border-teal-400 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 text-xl font-bold flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors">3</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Setting IP Address</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    Setelah Windows siap, kita harus memberi "alamat" pada komputer tersebut. Buka menu pengaturan <em>Network and Sharing Center</em>, lalu masukkan alamat IP secara manual (Static IP), misalnya <code>192.168.1.10</code> beserta <em>Subnet Mask</em>-nya.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Untuk mengecek apakah komputer kita sudah berhasil terhubung dengan komputer teman (client/server), kita buka program CMD (Command Prompt) lalu ketikkan perintah <code>ping</code> ke IP tujuan.
                  </p>
                </div>
              </div>

              {/* Step 4 & 5 side by side on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-3 p-5 rounded-xl border border-gray-200 hover:border-teal-400 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 text-lg font-bold flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors">4</div>
                    <h3 className="text-lg font-bold text-gray-800">Sharing Folder</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Fitur <em>Network Discovery</em> harus diaktifkan dulu. Setelah itu, buat sebuah folder, klik kanan, lalu pilih menu <em>Properties</em> dan <em>Sharing</em>. Di sini kita mengatur siapa saja yang boleh mengakses dan apakah orang lain boleh mengedit file di dalamnya (<em>Read/Write permissions</em>).
                  </p>
                </div>

                <div className="flex flex-col gap-3 p-5 rounded-xl border border-gray-200 hover:border-teal-400 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 text-lg font-bold flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors">5</div>
                    <h3 className="text-lg font-bold text-gray-800">Sharing Printer</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Langkah terakhir adalah membagikan akses mesin <em>printer</em>. Masuk ke pengaturan <em>Devices and Printers</em> pada komputer yang colok kabel printer langsung (Server). Aktifkan opsi <em>Share this printer</em> supaya komputer lain di jaringan tersebut bisa ikut menge-<em>print</em> tugas tanpa harus pindah-pindah kabel USB.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </article>

      </main>

      {/* --- FOOTER --- */}
      <footer className="w-full text-center py-6 bg-white border-t border-gray-200 mt-10">
        <p className="text-sm text-gray-500">
          Tugas Website UKK - Dibuat untuk SMK Pawyatan Daha 2
        </p>
      </footer>
    </div>
  );
}