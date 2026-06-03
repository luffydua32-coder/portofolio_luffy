"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  tools: string[];
  image: string;
  challenge: string;
  solution: string;
};

type EducationItem = {
  year: string;
  title: string;
  institution: string;
  description: string;
};

const projects: Project[] = [
  // ── UI/UX ──────────────────────────────────────────
  {
    id: 1,
    title: "Admin Dashboard — Natasha",
    category: "UI/UX",
    year: "2025",
    description: "Desain antarmuka admin panel modern dengan layout bersih, hierarki informasi yang kuat, dan navigasi intuitif untuk produktivitas tinggi.",
    tools: ["Next.js", "Desain UI/UX"],
    image: "/portfolio/ui-ux/admin-natasha.png",
    challenge: "Menyusun informasi padat dalam satu layar tanpa membuat tampilan terasa penuh dan membingungkan pengguna.",
    solution: "Menerapkan sidebar navigasi bersih, card bento-grid untuk ringkasan data, dan palet warna netral dengan aksen tunggal yang kuat."
  },
  {
    id: 2,
    title: "Football App UI Concept",
    category: "UI/UX",
    year: "2025",
    description: "Konsep aplikasi olahraga sepak bola dengan visual dinamis, statistik pemain real-time, dan antarmuka immersive yang membangkitkan semangat kompetisi.",
    tools: ["Figma", "Desain UI/UX"],
    image: "/portfolio/ui-ux/football.png",
    challenge: "Menyajikan data statistik pertandingan yang kompleks dengan tampilan yang tetap menarik dan mudah dibaca di layar mobile.",
    solution: "Menggunakan visual lapangan sebagai latar, tipografi bold kontras tinggi, dan animasi highlight pada elemen statistik utama."
  },
  // ── Graphic Design ─────────────────────────────────
  {
    id: 3,
    title: "Konten Kreatif — Set 1 (A)",
    category: "Graphic Design",
    year: "2025",
    description: "Seri konten visual pertama dengan pendekatan layout modern, tipografi bersih, dan palet warna yang kuat untuk kebutuhan media sosial.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/konten1/1.png",
    challenge: "Menciptakan konten yang menarik perhatian dalam 3 detik pertama scroll feed media sosial.",
    solution: "Menggunakan kontras warna maksimal, headline besar, dan komposisi asimetris yang dinamis."
  },
  {
    id: 4,
    title: "Konten Kreatif — Set 1 (B)",
    category: "Graphic Design",
    year: "2025",
    description: "Varian kedua dari seri konten pertama dengan eksplorasi tipografi berbeda dan komposisi elemen yang lebih eksperimental.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/konten1/2.png",
    challenge: "Menjaga konsistensi visual antar slide dalam satu seri konten multi-part.",
    solution: "Mengunci palet warna dan font utama, lalu memvariasikan layout dan elemen pendukung pada tiap slide."
  },
  {
    id: 5,
    title: "Konten Kreatif — Set 1 (C)",
    category: "Graphic Design",
    year: "2025",
    description: "Bagian ketiga dari seri konten pertama dengan variasi tata letak dan pendekatan visual yang segar.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/konten1/3.png",
    challenge: "Menghindari kebosanan visual dalam seri konten yang panjang tanpa merusak identitas keseluruhan.",
    solution: "Rotasi posisi elemen utama dan sub-elemen dekoratif sambil mempertahankan grid dan palet yang sama."
  },
  {
    id: 6,
    title: "Konten Kreatif — Set 1 (D)",
    category: "Graphic Design",
    year: "2025",
    description: "Penutup seri konten pertama dengan penekanan pada call-to-action dan layout yang mengundang interaksi.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/konten1/4.png",
    challenge: "Merancang slide penutup yang mendorong audiens untuk bertindak (like, share, comment, atau DM).",
    solution: "Menempatkan CTA di zona hotspot visual dengan warna kontras dan panah arah yang memandu mata pembaca."
  },
  {
    id: 7,
    title: "Ucapan Hari Raya — Idul Fitri",
    category: "Graphic Design",
    year: "2025",
    description: "Desain konten media sosial bertema Hari Raya Idul Fitri dengan ornamen kaligrafi digital, gradasi hangat, dan tipografi elegan.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/konten2/Ucapan-har-raya.png",
    challenge: "Menciptakan visual ucapan yang terasa mewah dan personal sekaligus siap pakai sebagai konten media sosial.",
    solution: "Memadukan ornamen kaligrafi digital, latar gradasi emas-hijau zamrud, dan tata letak tipografi berlapis yang harmonis."
  },
  {
    id: 8,
    title: "Konten Set 3 — Visual A",
    category: "Graphic Design",
    year: "2025",
    description: "Bagian pertama dari seri konten ketiga dengan pendekatan ilustratif dan komposisi layout yang lebih bebas.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/konten3/1.png",
    challenge: "Menyajikan informasi dalam format yang engaging tanpa terasa seperti infografis yang kaku.",
    solution: "Mengintegrasikan elemen ilustrasi ringan dengan data teks, menciptakan visual yang terasa hidup dan informatif sekaligus."
  },
  {
    id: 9,
    title: "Konten Set 3 — Visual B",
    category: "Graphic Design",
    year: "2025",
    description: "Varian kedua dari seri konten ketiga dengan eksplorasi warna lebih berani dan komposisi tipografi yang kuat.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/konten3/2.png",
    challenge: "Mengeksplorasi keberanian warna tanpa kehilangan keterbacaan dan profesionalitas.",
    solution: "Memilih satu warna dominan berani dan menyeimbangkan sisanya dengan netral serta putih sebagai jeda visual."
  },
  {
    id: 10,
    title: "Pendaftaran Wisuda — Konten Digital",
    category: "Graphic Design",
    year: "2024",
    description: "Desain konten informasi pendaftaran wisuda dengan layout bersih, hierarki informasi yang jelas, dan gaya visual institusional formal.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/konten4/pendaftaran_wisuda.png",
    challenge: "Menyajikan informasi administratif yang padat agar mudah dipahami dalam format persegi media sosial.",
    solution: "Menggunakan boks-boks terstruktur berwarna, ikon pendukung, dan tipografi berlapis dengan ukuran yang konsisten."
  },
  {
    id: 11,
    title: "Poster Hari Kesehatan Nasional",
    category: "Graphic Design",
    year: "2025",
    description: "Desain poster peringatan Hari Kesehatan Nasional dengan visual medis yang bersih, informatif, dan modern.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/konten5/Hari_Kesehatan.png",
    challenge: "Mengemas informasi kesehatan dengan tampilan yang menarik tanpa terasa berat atau menakutkan.",
    solution: "Menggunakan ilustrasi flat modern, palet hijau-putih yang menyejukkan, dan tipografi sans-serif yang ramah."
  },
  {
    id: 12,
    title: "Poster Hari Kartini",
    category: "Graphic Design",
    year: "2025",
    description: "Desain konten peringatan Hari Kartini dengan visual feminin kuat, batik motif modern, dan tipografi yang penuh inspirasi.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/konten6/Hari_Kartini.png",
    challenge: "Menghormati semangat Kartini dalam visual modern yang tetap relevan bagi audiens muda.",
    solution: "Memadukan siluet wanita berkebaya dengan motif batik digital, palet kuning-hitam klasik, dan quote inspiratif sebagai pusat komposisi."
  },
  {
    id: 13,
    title: "Desain Wisuda — UMKT",
    category: "Graphic Design",
    year: "2024",
    description: "Materi desain grafis resmi upacara wisuda universitas, meliputi backdrop, spanduk, dan konten media sosial perayaan kelulusan.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/konten7/Wisuda.png",
    challenge: "Membangun kesan seremonial dan prestisius yang mencerminkan identitas institusi akademik secara visual.",
    solution: "Menerapkan palet warna biru-emas formal, ornamen akademik kustom, dan tipografi serif elegan yang konsisten di semua media."
  },
  {
    id: 14,
    title: "Pelaksana UTS — Konten Resmi",
    category: "Graphic Design",
    year: "2024",
    description: "Konten resmi pengumuman pelaksanaan Ujian Tengah Semester dengan layout informasional yang terstruktur dan profesional.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/konten8/Pelaksana_UTS.png",
    challenge: "Menyajikan jadwal dan aturan ujian yang kompleks dalam format visual yang tidak membingungkan.",
    solution: "Menggunakan tabel visual berwarna, ikon jam dan kalender, serta hierarki teks yang tegas untuk panduan cepat."
  },
  {
    id: 15,
    title: "Jam Operasional — Infografis",
    category: "Graphic Design",
    year: "2024",
    description: "Desain infografis jam operasional layanan dengan visual ikonik, mudah dibaca, dan estetika yang sesuai brand.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/konten9/jam-oprasional.png",
    challenge: "Menampilkan informasi jam dalam format yang tidak membosankan dan mudah di-screenshot untuk dishare.",
    solution: "Menggunakan ilustrasi jam analog sebagai focal point, dikelilingi keterangan waktu dengan tipografi besar dan kontras."
  },
  {
    id: 16,
    title: "Poster Hari Buruh Nasional",
    category: "Graphic Design",
    year: "2025",
    description: "Desain poster peringatan Hari Buruh dengan gaya tegas, berani, dan modern — menggabungkan elemen grafis kuat dengan tipografi impactful.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/Konten10/Hari_Buruh.png",
    challenge: "Menyampaikan pesan sosial yang kuat tanpa kehilangan estetika visual yang menarik dan mudah dibagikan.",
    solution: "Menggunakan warna merah dominan, komposisi diagonal dinamis, dan tipografi sans-serif hitam tebal sebagai elemen utama."
  },
  {
    id: 17,
    title: "Poster Hari Pendidikan Nasional",
    category: "Graphic Design",
    year: "2025",
    description: "Desain poster Hardiknas yang inspiratif dengan visual buku terbuka, gradasi warna biru cerah, dan komposisi yang menggugah semangat belajar.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/Konten11/Hari-Pendidikan-Nasional.png",
    challenge: "Menyampaikan semangat pendidikan nasional dalam satu visual yang ikonik dan mudah diingat.",
    solution: "Menggunakan siluet buku terbuka sebagai pusat komposisi dengan tipografi bold dan warna biru-putih yang bersih."
  },
  {
    id: 18,
    title: "Idul Adha — Visual (A)",
    category: "Graphic Design",
    year: "2025",
    description: "Desain konten Idul Adha pertama dengan suasana festif, ornamen tradisional digital, dan tipografi yang penuh kehangatan.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/Konten12/Idul_Adha1.png",
    challenge: "Membangun suasana perayaan Idul Adha yang khidmat sekaligus meriah dalam satu frame visual.",
    solution: "Menggabungkan siluet bulan sabit, bintang, dan ornamen islami dengan palet emas-hijau yang sakral."
  },
  {
    id: 19,
    title: "Idul Adha — Visual (B)",
    category: "Graphic Design",
    year: "2025",
    description: "Varian kedua konten Idul Adha dengan komposisi berbeda, menekankan elemen tipografi doa dan ucapan selamat.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/Konten12/Idul_Adha2.png",
    challenge: "Membedakan kedua varian konten agar tidak terasa repetitif namun tetap satu tema.",
    solution: "Membalik komposisi focal point dan menggunakan versi warna yang lebih terang pada varian kedua."
  },
  {
    id: 20,
    title: "Penerimaan Mahasiswa Baru",
    category: "Graphic Design",
    year: "2024",
    description: "Konten promosi penerimaan mahasiswa baru dengan visual muda, energik, dan informatif untuk menarik calon mahasiswa.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/Konten13/Penerimaan-Mahasiswa-Baru.png",
    challenge: "Menciptakan visual yang terasa fresh dan modern untuk menarik generasi Z sebagai target audiens.",
    solution: "Menggunakan gradient bold, ilustrasi flat karakter mahasiswa, dan tipografi sans-serif ekspresif yang tidak kaku."
  },
  {
    id: 21,
    title: "Kunjungan Resmi — Konten Visual",
    category: "Graphic Design",
    year: "2025",
    description: "Desain dokumentasi kunjungan resmi institusi dengan layout foto-plus-teks yang profesional dan bersih.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/Konten14/KUNJUNGAN.png",
    challenge: "Mengemas dokumentasi foto kunjungan agar terlihat profesional dan layak ditampilkan di akun resmi institusi.",
    solution: "Menempatkan foto sebagai latar dengan overlay tipografi gelap semi-transparan dan frame branding institusi."
  },
  {
    id: 22,
    title: "Juara Hackathon — Sertifikat Visual",
    category: "Graphic Design",
    year: "2025",
    description: "Konten apresiasi prestasi hackathon dengan desain trofi, bintang, dan tipografi kemenangan yang membangkitkan kebanggaan.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/Konten15/juara1-5_Heckaton.png",
    challenge: "Memvisualisasikan pencapaian kompetisi secara menarik tanpa terkesan sombong.",
    solution: "Menggunakan warna emas-putih dengan ikon trofi minimalis dan teks pencapaian yang to-the-point."
  },
  {
    id: 23,
    title: "Hari Kelahiran Pancasila",
    category: "Graphic Design",
    year: "2025",
    description: "Poster peringatan Hari Lahir Pancasila dengan visual nasionalis, lambang garuda, dan tipografi penuh semangat kebangsaan.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/Konten16/Hari_Kelahiran_Pancasila_baru.png",
    challenge: "Merepresentasikan nilai-nilai Pancasila dalam visual modern yang tetap memancarkan nuansa nasionalisme.",
    solution: "Menggabungkan lambang garuda modern, merah-putih sebagai palet utama, dan tipografi bold serif yang tegas."
  },
  {
    id: 24,
    title: "Jadwal & Cetak UAS",
    category: "Graphic Design",
    year: "2025",
    description: "Konten jadwal cetak Ujian Akhir Semester dengan layout tabel yang bersih, mudah dibaca, dan siap print.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/Konten17/Jadwal&Cetak_UAS.png",
    challenge: "Menyajikan jadwal UAS yang sangat padat informasi dalam format yang tidak membuat mata lelah.",
    solution: "Menggunakan alternating row color, tipografi mono untuk jadwal, dan header berwarna tegas sebagai pembatas."
  },
  {
    id: 26,
    title: "Desain Pribadi — Karakter Digital",
    category: "Graphic Design",
    year: "2025",
    description: "Eksplorasi desain karakter digital personal dengan gaya anime-ilustrasi, ekspresi unik, dan representasi diri yang kreatif.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/Untuk_Pribadi/adalah-saya23.png",
    challenge: "Menciptakan avatar digital personal yang mencerminkan kepribadian asli tanpa kehilangan gaya artistik.",
    solution: "Mengeksplorasi proporsi karakter semi-realistis dengan palet warna yang merepresentasikan sifat personal."
  },
  {
    id: 27,
    title: "Karakter Topeng — Seni Personal",
    category: "Graphic Design",
    year: "2025",
    description: "Variasi karakter personal dengan konsep topeng, mengeksplorasi dualitas identitas melalui visualisasi yang misterius dan artistik.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/Untuk_Pribadi/adalah-saya-3_topeng.png",
    challenge: "Mengekspresikan konsep dualitas identitas melalui satu visual yang kuat dan penuh interpretasi.",
    solution: "Menggunakan kontras antara wajah asli dan topeng sebagai elemen naratif visual utama."
  },
  {
    id: 28,
    title: "Batik Hari Kartini — Edisi Khusus",
    category: "Graphic Design",
    year: "2025",
    description: "Desain personal bertema batik Hari Kartini dengan motif tradisional yang diinterpretasikan ulang dalam estetika digital modern.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/Untuk_Pribadi/Batik_Hari_Kartini.png",
    challenge: "Merepresentasikan kecintaan pada budaya batik dalam format desain digital yang relevan dengan anak muda.",
    solution: "Mendigitalisasi motif batik pilihan, memadukannya dengan color grading modern, dan frame kartini yang ikonik."
  },
  {
    id: 29,
    title: "Batik Seminar — Edisi Khusus",
    category: "Graphic Design",
    year: "2025",
    description: "Desain visual khusus bertema batik untuk acara seminar formal dengan kesan elegan, tradisional namun tetap modern.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/Untuk_Pribadi/BATIK SEMINAR.png",
    challenge: "Menggabungkan nuansa formal seminar dengan keindahan batik agar tidak terasa terlalu kaku.",
    solution: "Menggunakan batik sebagai latar belakang dengan overlay semi-transparan, memungkinkan teks seminar tetap terbaca jelas."
  },
  {
    id: 30,
    title: "Luffy — Karakter Desainer",
    category: "Graphic Design",
    year: "2025",
    description: "Desain karakter personal 'Luffy Perker' — representasi diri sebagai desainer kreatif dengan gaya visual yang bold dan berkarakter kuat.",
    tools: ["Canva", "Desain Grafis"],
    image: "/portfolio/Desain_Saya/Untuk_Pribadi/Luffy_Perker.png",
    challenge: "Membangun personal brand visual yang unik dan mudah diingat dalam satu karakter ikonik.",
    solution: "Merancang karakter dengan ciri khas visual yang konsisten: warna signature, pose khas, dan elemen identitas yang distictive."
  },
  // ── Sketches ───────────────────────────────────────
  {
    id: 31,
    title: "Sketsa Tangan Vol. 1",
    category: "Sketches",
    year: "2026",
    description: "Eksplorasi karakter sketsa tangan pertama dengan gaya dinamis dan ekspresif, menggambarkan persona unik melalui goresan monokrom.",
    tools: ["Menggambar Sketsa", "Manual Art"],
    image: "/portfolio/Gambar/WhatsApp Image 2026-06-04 at 02.13.27.jpeg",
    challenge: "Menangkap kepribadian karakter yang kuat hanya dengan goresan garis tanpa bantuan warna.",
    solution: "Fokus pada ekspresi wajah, gesture tubuh yang tegas, dan variasi ketebalan garis untuk membangun hierarki visual."
  },
  {
    id: 32,
    title: "Sketsa Tangan Vol. 2",
    category: "Sketches",
    year: "2026",
    description: "Seri ilustrasi tangan kedua mengeksplorasi komposisi karakter dari berbagai sudut pandang dan nuansa emosi.",
    tools: ["Menggambar Sketsa", "Manual Sketch"],
    image: "/portfolio/Gambar/WhatsApp Image 2026-06-04 at 02.13.28.jpeg",
    challenge: "Menjaga konsistensi style sambil mengeksplorasi variasi pose dan emosi berbeda.",
    solution: "Menetapkan panduan proporsi dasar, lalu memvariasikan pose dan ekspresi di atas fondasi yang konsisten."
  },
  {
    id: 33,
    title: "Sketsa Tangan Vol. 3",
    category: "Sketches",
    year: "2026",
    description: "Eksplorasi goresan ketiga dengan fokus pada detail wajah, ekspresi mikro, dan karakterisasi lebih dalam.",
    tools: ["Menggambar Sketsa", "Manual Art"],
    image: "/portfolio/Gambar/WhatsApp Image 2026-06-04 at 02.13.28 (1).jpeg",
    challenge: "Mengangkat detail ekspresi wajah yang subtil melalui goresan tangan tanpa tools digital.",
    solution: "Menggunakan teknik cross-hatching untuk bayangan dan memperkuat garis mata sebagai pusat ekspresi."
  },
  {
    id: 34,
    title: "Sketsa Tangan Vol. 4",
    category: "Sketches",
    year: "2026",
    description: "Seri keempat dengan komposisi yang lebih kompleks, mengeksplorasi interaksi antar elemen karakter.",
    tools: ["Menggambar Sketsa", "Manual Art"],
    image: "/portfolio/Gambar/WhatsApp Image 2026-06-04 at 02.13.28 (2).jpeg",
    challenge: "Menyusun komposisi multi-elemen agar tidak terlihat penuh namun tetap dinamis.",
    solution: "Mengatur focal point utama di golden ratio frame dan membiarkan elemen pendukung mengisi ruang negatif."
  },
  {
    id: 35,
    title: "Sketsa Tangan Vol. 5",
    category: "Sketches",
    year: "2026",
    description: "Kelanjutan eksplorasi tangan dengan pendekatan gesture drawing — menangkap gerakan dan energi dalam goresan cepat.",
    tools: ["Menggambar Sketsa", "Gesture Drawing"],
    image: "/portfolio/Gambar/WhatsApp Image 2026-06-04 at 02.13.29.jpeg",
    challenge: "Menangkap kesan gerak dan energi dalam goresan statis di atas kertas.",
    solution: "Menggunakan goresan cepat overlapping, garis aksi yang kuat, dan meminimalisir detail untuk kesan bergerak."
  },
  {
    id: 36,
    title: "Sketsa Tangan Vol. 6",
    category: "Sketches",
    year: "2026",
    description: "Eksplorasi keenam dengan studi bayangan dan volume — menggunakan teknik shading bertingkat pada sketsa monokrom.",
    tools: ["Menggambar Sketsa", "Shading Study"],
    image: "/portfolio/Gambar/WhatsApp Image 2026-06-04 at 02.13.29 (1).jpeg",
    challenge: "Menciptakan ilusi 3D dan volume pada sketsa 2D hanya dengan variasi gelap-terang.",
    solution: "Menerapkan teknik shading berlapis dari terang ke gelap dengan hatching halus pada area bayangan."
  },
  {
    id: 37,
    title: "Sketsa Tangan Vol. 7",
    category: "Sketches",
    year: "2026",
    description: "Penutup seri sketsa tangan dengan eksplorasi komposisi paling matang — menggabungkan teknik terbaik dari volume sebelumnya.",
    tools: ["Menggambar Sketsa", "Manual Art"],
    image: "/portfolio/Gambar/WhatsApp Image 2026-06-04 at 02.13.29 (2).jpeg",
    challenge: "Mencapai kualitas terbaik dalam seri sketsa tangan sebagai showcase kemampuan paling matang.",
    solution: "Menggabungkan semua teknik yang dipelajari: gesture kuat, shading berlapis, proporsi akurat, dan ekspresi dalam."
  },
];

const education: EducationItem[] = [
  {
    year: "2023 - Sekarang",
    title: "S1 Teknik Informatika",
    institution: "UMKT (Universitas Muhammadiyah Kalimantan Timur)",
    description:
      "Mendalami ilmu rekayasa perangkat lunak, algoritma, pemrograman web modern, dan pengembangan sistem berbasis teknologi digital masa depan."
  },
  {
    year: "2020 - 2023",
    title: "Sekolah Menengah Kejuruan (SMK)",
    institution: "SMK Muhammadiyah Sangkulirang",
    description:
      "Mulai mendalami teknologi komputer dasar, manajemen berkarya, dan dasar-dasar kreativitas visual kejuruan."
  },
  {
    year: "2017 - 2020",
    title: "Madrasah Tsanawiyah (Setara SMP)",
    institution: "MTs Nurussa`adah Sangkulirang",
    description:
      "Mengasah ketertarikan awal pada ilustrasi, menggambar sketsa manual di kertas, dan apresiasi seni budaya."
  },
  {
    year: "2011 - 2017",
    title: "Sekolah Dasar (SD)",
    institution: "SD 037 Samarinda & SD 007 Sangkulirang",
    description:
      "Masa pengenalan awal akademis dasar, melatih koordinasi motorik halus lewat menggambar, mewarnai, dan kriya seni."
  },
  {
    year: "2010 - 2011",
    title: "Taman Kanak-kanak (TK)",
    institution: "TK Samarinda",
    description:
      "Masa pengenalan awal bersosialisasi dan eksplorasi kreativitas menggunakan bentuk geometri dan warna-warni cerah."
  }
];

const categories = ["All", "UI/UX", "Graphic Design", "Sketches"];

const skills = [
  "Menggambar Sketsa",
  "Desain UI/UX Next.js",
  "Desain Grafis by Canva",
];

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [sandboxFontSize, setSandboxFontSize] = useState(44);
  const [sandboxWeight, setSandboxWeight] = useState(700);
  const [sandboxPalette, setSandboxPalette] = useState("orange");
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const paletteClass = useMemo(() => {
    switch (sandboxPalette) {
      case "cyan":
        return "from-cyan-500 via-sky-500 to-blue-600";
      case "emerald":
        return "from-emerald-500 via-teal-500 to-green-600";
      case "orange":
        return "from-[#ff6b4a] via-[#e65c00] to-rose-600";
      default:
        return "from-violet-500 via-fuchsia-500 to-indigo-600";
    }
  }, [sandboxPalette]);


  return (
    <main className="min-h-screen bg-transparent text-slate-900 relative">
      {/* Decorative floating blur spheres */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-[5%] top-[2%] h-[400px] w-[400px] rounded-full glow-sphere-1 blur-3xl" />
        <div className="absolute right-[5%] top-[20%] h-[450px] w-[450px] rounded-full glow-sphere-2 blur-3xl" />
        <div className="absolute left-[15%] bottom-[10%] h-[500px] w-[500px] rounded-full glow-sphere-3 blur-3xl" />
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#faf6f2]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#hero" className="text-xl font-bold tracking-wider text-slate-900 hover:text-[#ff6b4a] transition-colors duration-200 uppercase">
            Luffy3Darma
          </a>

          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-[#ff6b4a]">
              About
            </a>
            <a href="#education" className="transition hover:text-[#ff6b4a]">
              Education
            </a>
            <a href="#works" className="transition hover:text-[#ff6b4a]">
              Works
            </a>
            <a href="#sandbox" className="transition hover:text-[#ff6b4a]">
              Sandbox
            </a>
            <a href="#contact" className="transition hover:text-[#ff6b4a]">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="relative group flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 pl-1 pr-4 py-1 hover:border-[#ff6b4a]/40 hover:bg-[#ff6b4a]/5 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
            title="Hubungi Saya"
          >
            {/* Profile photo */}
            <span className="relative flex-shrink-0">
              <span className="block w-8 h-8 rounded-full overflow-hidden border-2 border-white ring-2 ring-transparent group-hover:ring-[#ff6b4a]/40 transition-all duration-300 shadow-sm">
                <Image
                  src="/portfolio/profil/WhatsApp Image 2026-06-04 at 02.52.17.jpeg"
                  alt="Luffy3Darma"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </span>
              {/* Green availability pulse dot */}
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white shadow-sm">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
              </span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 group-hover:text-[#ff6b4a] transition-colors">
              Hubungi
            </span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-2 lg:px-10 lg:pb-28 lg:pt-24 items-center"
      >
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center rounded-full border border-[#ff6b4a]/25 bg-[#ff6b4a]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#d35400]">
            Sketsa &bull; Desain &bull; UI/UX
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-7xl tracking-tight uppercase">
            Menggambar Sketsa, Desain, UI/UX
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Halo! Saya Luffy3Darma. Saya membuat antarmuka digital yang bersih, konsep sketsa karakter digital yang ekspresif, dan sistem identitas visual yang seimbang. Siap bekerja keras dan belajar cepat sebagai desainer magang di studio Anda.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#works"
              className="rounded-full bg-gradient-to-r from-[#ff6b4a] to-[#e65c00] text-white font-bold px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition hover:opacity-90 hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-[#ff6b4a]/20"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-200 bg-white/80 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-700 transition hover:bg-slate-50 hover:scale-[1.03] active:scale-[0.97] shadow-sm"
            >
              Kontak
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {["UI/UX Modern", "Branding Visual", "Sketsa Kreatif", "Koding Next.js"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-4 text-xs font-bold tracking-wider uppercase text-slate-700 backdrop-blur text-center shadow-sm"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        {/* Bento-grid visual showcase on Hero */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-xl backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-2 px-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-100 bg-white p-5 group cursor-pointer hover:border-[#ff6b4a]/20 transition-all duration-300 shadow-sm">
                <div className="mb-3 h-36 rounded-2xl bg-gradient-to-br from-[#ff6b4a] to-[#f5b041] overflow-hidden relative border border-slate-100">
                  <Image src="/portfolio/ui-ux/admin-natasha.png" alt="UI Case Study" fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-slate-900">UI Case Study</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  Desain antarmuka bersih dengan visualisasi data, grid seimbang, dan estetika modern.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-5 group cursor-pointer hover:border-[#ff6b4a]/20 transition-all duration-300 shadow-sm">
                <div className="mb-3 h-36 rounded-2xl bg-gradient-to-br from-[#e65c00] to-[#c0392b] overflow-hidden relative border border-slate-100">
                  <Image src="/portfolio/Desain_Saya/konten2/Ucapan-har-raya.png" alt="Graphic Design" fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-slate-900">Desain Grafis</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  Konten visual kustom untuk media sosial dengan komposisi tipografi kuat dan elegan.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-5 group cursor-pointer hover:border-[#ff6b4a]/20 transition-all duration-300 shadow-sm">
                <div className="mb-3 h-36 rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#374151] overflow-hidden relative border border-slate-100">
                  <Image src="/portfolio/Gambar/WhatsApp Image 2026-06-04 at 02.13.27.jpeg" alt="Sketsa Karakter" fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-slate-900">Sketsa Tangan</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  Goresan karakter manual ekspresif — persona digital melalui seni sketsa monokrom.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-150 bg-white p-5 md:col-span-3 shadow-sm border border-slate-200">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#ff6b4a]">Status Ketersediaan</p>
                    <h3 className="mt-1 text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Tersedia untuk magang &amp; proyek kolaborasi visual
                    </h3>
                  </div>
                  <div className="rounded-2xl border border-[#ff6b4a]/20 bg-[#ff6b4a]/5 px-4 py-3 text-xs font-bold uppercase tracking-widest text-[#ff6b4a] text-center">
                    Samarinda Ulu, ID
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#ff6b4a]/10 blur-3xl" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 border-t border-slate-200">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#ff6b4a]">
            About Me
          </p>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-wider text-slate-900 sm:text-4xl leading-tight">
            Kreator visual yang memprioritaskan kerapian struktur, detail mikro, dan presentasi kuat.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-700">
            Saya percaya bahwa desain yang baik adalah kombinasi dari struktur yang logis dan estetika yang berkarakter. Baik dalam menggambar sketsa manual, mendesain logo cetak, maupun menata koding layout web, kerapian grid dan pemilihan warna selalu menjadi fokus utama saya untuk menghasilkan karya yang profesional.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 flex flex-col justify-between backdrop-blur shadow-sm">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#ff6b4a]">Lokasi / Alamat Lengkap</p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">Samarinda Ulu, Indonesia</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Jl. Ir. H. Juanda, Sidodadi, Kec. Samarinda Ulu, Kota Samarinda, Kalimantan Timur 75243
              </p>
            </div>
            <span className="text-[10px] uppercase font-bold text-[#ff6b4a] mt-4 tracking-widest">Siap WFO / WFH / Hybrid</span>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 lg:col-span-2 backdrop-blur shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-[#ff6b4a]">Kekuatan Utama (Core Strengths)</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                "Sketsa gambar karakter manual di kertas",
                "Perancangan tata letak visual cepat menggunakan Canva",
                "Penerjemahan ide visual menjadi koding Next.js dinamis",
                "Desain antarmuka UI/UX yang fokus pada kerapian struktur",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 text-sm leading-relaxed text-slate-700 font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-[#ff6b4a]">Keahlian & Perangkat Kreatif</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm hover:border-[#ff6b4a] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 border-t border-slate-200">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#ff6b4a] flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-[#ff6b4a]" />
            Education Timeline
          </p>
          <h2 className="mt-5 text-3xl font-black uppercase tracking-wider text-slate-900 sm:text-5xl leading-tight">
            Tumbuh Lewat{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff6b4a 0%, #e65c00 40%, #f5b041 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Belajar,
            </span>{" "}
            Bereksperimen{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #e65c00 0%, #ff6b4a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              &amp; Berkembang.
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 max-w-2xl">
            Setiap tahapan pendidikan adalah fondasi yang membentuk pola pikir kreatif, logis, dan adaptif — dari bangku SD hingga kampus informatika.
          </p>
        </div>

        <style>{`
          @keyframes fadeSlideIn {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulseDot {
            0%, 100% { box-shadow: 0 0 0 0 rgba(255,107,74,0.4); }
            50%       { box-shadow: 0 0 0 8px rgba(255,107,74,0); }
          }
          @keyframes lineDraw {
            from { transform: scaleY(0); }
            to   { transform: scaleY(1); }
          }
          .edu-card:hover {
            transform: translateY(-4px) scale(1.01);
            box-shadow: 0 20px 60px -10px rgba(255,107,74,0.15), 0 8px 24px -4px rgba(0,0,0,0.08);
          }
          .edu-card {
            transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease;
          }
          .timeline-dot-pulse {
            animation: pulseDot 2s ease-in-out infinite;
          }
        `}</style>

        <div className="relative ml-4 pl-8"
          style={{
            borderLeft: "2px solid transparent",
            backgroundImage: "linear-gradient(#faf6f2, #faf6f2), linear-gradient(180deg, #ff6b4a 0%, #f5b041 100%)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          {education.map((item, index) => (
            <div
              key={item.institution}
              className={`${index !== education.length - 1 ? "mb-10" : ""} relative`}
              style={{
                animation: `fadeSlideIn 0.55s cubic-bezier(0.22,1,0.36,1) both`,
                animationDelay: `${index * 0.12}s`,
              }}
            >
              {/* Glowing dot */}
              <div className="absolute -left-[2.85rem] top-4 flex items-center justify-center">
                <span
                  className="timeline-dot-pulse flex h-8 w-8 rounded-full items-center justify-center border-2 border-[#ff6b4a] bg-white shadow-md"
                  style={{ animationDelay: `${index * 0.4}s` }}
                >
                  <span className="h-3 w-3 rounded-full bg-gradient-to-br from-[#ff6b4a] to-[#e65c00]" />
                </span>
              </div>

              {/* Card */}
              <div className="edu-card glass-card rounded-3xl p-6 border border-slate-200/70 bg-white/80 backdrop-blur-sm">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ff6b4a]/20 bg-[#ff6b4a]/8 px-3 py-1 text-[10px] font-black font-mono uppercase tracking-widest text-[#d35400]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b4a] animate-pulse" />
                      {item.year}
                    </span>
                  </div>
                  <span
                    className="text-[10px] font-black uppercase tracking-widest rounded-full px-3 py-1 border"
                    style={{
                      background: index === 0 ? "linear-gradient(135deg,#ff6b4a,#e65c00)" : "transparent",
                      color: index === 0 ? "white" : "#94a3b8",
                      borderColor: index === 0 ? "transparent" : "#e2e8f0",
                    }}
                  >
                    {index === 0 ? "✦ Current" : `Step ${education.length - index}`}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-black text-slate-900 uppercase tracking-wide leading-tight">
                  {item.institution}
                </h3>
                <p
                  className="mt-1.5 text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#ff6b4a" }}
                >
                  {item.title}
                </p>
                <p className="mt-4 leading-relaxed text-slate-600 text-sm border-t border-slate-100 pt-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Gallery Section */}
      <section id="works" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 border-t border-slate-200">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#ff6b4a]">
              Work Gallery
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-wider text-slate-900 sm:text-4xl leading-tight">
              Karya pilihan yang disusun dengan struktur layout bersih & rapi.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Kombinasi karya terkurasi yang mewakili keahlian menggambar sketsa manual, desain grafis digital, dan rancangan antarmuka UI/UX. Klik kartu atau tombol untuk melihat rincian kasus studi.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition cursor-pointer shadow-sm ${isActive
                    ? "bg-gradient-to-r from-[#ff6b4a] to-[#e65c00] text-white"
                    : "border border-slate-200 bg-white/70 text-slate-700 hover:bg-white"
                    }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative mt-10">
          {/* Fade hint at bottom */}
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-20 z-10 rounded-b-3xl"
            style={{ background: "linear-gradient(to top, #faf6f2 0%, transparent 100%)" }}
          />

          <style>{`
            .gallery-scroll::-webkit-scrollbar { width: 5px; }
            .gallery-scroll::-webkit-scrollbar-track { background: transparent; }
            .gallery-scroll::-webkit-scrollbar-thumb { background: rgba(255,107,74,0.35); border-radius: 999px; }
            .gallery-scroll::-webkit-scrollbar-thumb:hover { background: rgba(255,107,74,0.65); }
            .gallery-scroll { scrollbar-width: thin; scrollbar-color: rgba(255,107,74,0.35) transparent; }
          `}</style>

          <div
            className="gallery-scroll overflow-y-auto pr-1"
            style={{ maxHeight: "780px", scrollBehavior: "smooth" }}
          >
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 pb-10">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="glass-card group overflow-hidden rounded-3xl flex flex-col h-full justify-between cursor-pointer"
                >
                  <div>
                    <div className="h-56 w-full relative overflow-hidden bg-slate-50 border-b border-slate-100">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 350px"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-5 py-2.5 border border-[#ff6b4a] bg-[#f9f6f2] text-xs font-bold uppercase tracking-wider rounded-full text-[#ff6b4a] shadow-lg shadow-[#ff6b4a]/25">
                          Lihat Detail
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between gap-4">
                        <span className="rounded-full border border-[#ff6b4a]/20 bg-[#ff6b4a]/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#ff6b4a]">
                          {project.category}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">{project.year}</span>
                      </div>

                      <h3 className="mt-4 text-xl font-bold uppercase tracking-wide text-slate-900 group-hover:text-[#ff6b4a] transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-auto">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full bg-slate-50 border border-slate-100 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-600"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold uppercase tracking-widest text-[#ff6b4a] transition group-hover:text-slate-900 flex items-center gap-1"
                    >
                      Lihat Detail <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[95vh] flex flex-col rounded-[2rem] overflow-hidden shadow-2xl"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button — floats top-right */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur border border-white/20 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all cursor-pointer"
              aria-label="Tutup detail proyek"
            >
              ✕
            </button>

            {/* Image — full natural proportions */}
            <div className="relative w-full bg-black flex items-center justify-center" style={{ maxHeight: "72vh" }}>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={1600}
                height={1200}
                className="w-full h-auto max-h-[72vh] object-contain"
                style={{ display: "block" }}
              />
              {/* Gradient overlay on bottom of image for readability */}
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              {/* Title badge on image bottom */}
              <div className="absolute bottom-4 left-5 right-16 z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff6b4a]">
                  {selectedProject.category} &bull; {selectedProject.year}
                </span>
                <h3 className="text-xl font-black uppercase tracking-wide text-white mt-0.5 leading-tight drop-shadow">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Info panel */}
            <div className="bg-[#f9f6f2] border-t border-slate-200 p-5 lg:p-6 flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-[#ff6b4a] font-bold mb-1">Tantangan</h4>
                  <p className="text-sm leading-relaxed text-slate-700">{selectedProject.challenge}</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-[#ff6b4a] font-bold mb-1">Solusi Visual</h4>
                  <p className="text-sm leading-relaxed text-slate-700">{selectedProject.solution}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-white border border-slate-200 rounded-full font-bold uppercase tracking-wider text-slate-700 shadow-sm">
                      {tool}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 bg-slate-900 text-white font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Design Sandbox Section */}
      <section id="sandbox" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 border-t border-slate-200">
        <div className="glass-card overflow-hidden rounded-[2rem] shadow-sm">
          <div className="grid gap-10 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#ff6b4a]">
                Design Sandbox
              </p>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-wider text-slate-900 sm:text-4xl leading-tight">
                Eksperimen kontrol tipografi, ketebalan huruf, dan warna aksen secara langsung.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
                Sandbox interaktif ini mendemonstrasikan bagaimana spasi, kerning, warna aksen, dan ukuran teks bersatu membentuk karakter visual sebuah merek. Gunakan kontrol di bawah untuk memanipulasi kartu preview kreatif.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <label htmlFor="font-size-slider" className="text-xs font-bold uppercase tracking-wider text-slate-500">Font Size</label>
                  <input
                    id="font-size-slider"
                    type="range"
                    min="28"
                    max="64"
                    value={sandboxFontSize}
                    onChange={(e) => setSandboxFontSize(Number(e.target.value))}
                    className="mt-4 w-full accent-[#ff6b4a] cursor-pointer"
                  />
                  <p className="mt-3 text-sm font-mono text-slate-800">{sandboxFontSize}px</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <label htmlFor="weight-slider" className="text-xs font-bold uppercase tracking-wider text-slate-500">Font Weight</label>
                  <input
                    id="weight-slider"
                    type="range"
                    min="400"
                    max="900"
                    step="100"
                    value={sandboxWeight}
                    onChange={(e) => setSandboxWeight(Number(e.target.value))}
                    className="mt-4 w-full accent-[#ff6b4a] cursor-pointer"
                  />
                  <p className="mt-3 text-sm font-mono text-slate-800">{sandboxWeight}</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <label htmlFor="palette-select" className="text-xs font-bold uppercase tracking-wider text-slate-500">Palette</label>
                  <select
                    id="palette-select"
                    value={sandboxPalette}
                    onChange={(e) => setSandboxPalette(e.target.value)}
                    className="mt-4 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none cursor-pointer"
                  >
                    <option value="orange">Sunset Orange</option>
                    <option value="cyan">Cyber Cyan</option>
                    <option value="emerald">Emerald Mint</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-full rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-inner">
                <div
                  className={`rounded-[1.5rem] bg-gradient-to-br ${paletteClass} p-6 sm:p-8 shadow-2xl transition-all duration-300`}
                >
                  <div className="rounded-[1.25rem] border border-white/20 bg-black/25 p-6 sm:p-8 backdrop-blur">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
                      Creative Preview
                    </p>
                    <h3
                      className="mt-6 leading-tight text-white uppercase tracking-tight"
                      style={{
                        fontSize: `${sandboxFontSize}px`,
                        fontWeight: sandboxWeight,
                      }}
                    >
                      Design with clarity.
                    </h3>
                    <p className="mt-5 max-w-lg text-xs leading-relaxed text-white/80">
                      Sebagai mahasiswa DKV UMKT, bagi saya desain grafis adalah media pemecahan masalah visual. Spasi mikro dan grid yang konsisten menentukan tingkat profesionalitas sebuah karya.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-slate-200 px-6 py-12 lg:px-10 mt-16 bg-[#faf6f2]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">© {new Date().getFullYear()} Luffy3Darma. All rights reserved.</p>
            <p className="mt-1 text-[10px] text-slate-400 font-bold uppercase tracking-widest">Dirancang & dikoding rapi menggunakan Next.js & Tailwind CSS v4</p>
          </div>

          {/* Professional Social Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Instagram — brand gradient purple-pink-orange */}
            <a
              href="https://instagram.com/luffy3d_"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2.5 overflow-hidden rounded-full px-5 py-2.5 text-xs font-bold tracking-wider text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              style={{
                background: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
                boxShadow: "0 4px 20px rgba(131,58,180,0.3)",
              }}
            >
              {/* hover shimmer overlay */}
              <span
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, #a044ff 0%, #ff2d55 50%, #ff9f0a 100%)",
                }}
              />
              <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </span>
              <span className="relative">@luffy3d_</span>
            </a>

            {/* TikTok — dark with cyan + red dual glow */}
            <a
              href="https://tiktok.com/@Luffy3Darma_"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2.5 overflow-hidden rounded-full px-5 py-2.5 text-xs font-bold tracking-wider text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              style={{
                background: "linear-gradient(135deg, #010101 0%, #1a1a2e 100%)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              }}
            >
              {/* hover subtle glow */}
              <span
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #010101 0%, #2a1a2e 100%)",
                  boxShadow: "inset 0 0 16px rgba(105,201,208,0.15)",
                }}
              />
              <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                {/* TikTok icon with cyan + red offset effect */}
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.41-.42-.58-.65-.02 2.13-.01 4.26-.02 6.39-.08 2.37-.87 4.82-2.73 6.39-1.92 1.69-4.73 2.13-7.14 1.64-2.82-.54-5.26-2.67-6.07-5.51-.97-3.23.23-7.05 2.94-8.83 1.63-1.09 3.65-1.5 5.58-1.21v4.13c-.93-.24-1.96-.1-2.76.43-1.03.65-1.54 1.98-1.33 3.18.23 1.47 1.48 2.68 2.98 2.83 1.34.15 2.8-.57 3.37-1.8.27-.52.36-1.12.35-1.72V.02z"
                    fill="#69C9D0"
                  />
                  <path
                    d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.41-.42-.58-.65-.02 2.13-.01 4.26-.02 6.39-.08 2.37-.87 4.82-2.73 6.39-1.92 1.69-4.73 2.13-7.14 1.64-2.82-.54-5.26-2.67-6.07-5.51-.97-3.23.23-7.05 2.94-8.83 1.63-1.09 3.65-1.5 5.58-1.21v4.13c-.93-.24-1.96-.1-2.76.43-1.03.65-1.54 1.98-1.33 3.18.23 1.47 1.48 2.68 2.98 2.83 1.34.15 2.8-.57 3.37-1.8.27-.52.36-1.12.35-1.72V.02z"
                    fill="#EE1D52"
                    style={{ mixBlendMode: "multiply", opacity: 0.6 }}
                  />
                </svg>
              </span>
              <span className="relative flex items-center gap-1">
                <span style={{ color: "#69C9D0" }}>@</span>
                <span>Luffy3Darma_</span>
              </span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
