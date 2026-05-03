// All text content and data used across the portfolio

export const TOTAL_FRAMES = 120;
export const FRAME_PATH = '/frames/frame-';
export const FRAME_EXT = '.webp';

export const ABOUT = {
  title: 'Tentang Saya',
  heading: 'Dedikasi pada Akurasi, Kepatuhan, dan Pertumbuhan Bisnis',
  description: [
    'Dengan pengalaman lebih dari 8 tahun di bidang Account Receivable, Tax Administration, dan Finance, saya memiliki rekam jejak yang solid dalam memastikan kelancaran arus kas serta kepatuhan pajak perusahaan. Sebagai Teknisi Akuntansi Yunior tersertifikasi BNSP, saya terbiasa mengelola siklus piutang yang kompleks dan menyusun laporan keuangan yang presisi.',
    'Saya percaya bahwa di balik setiap angka terdapat cerita krusial mengenai kesehatan dan potensi sebuah bisnis. Melalui pendekatan yang detail-oriented dan pemahaman mendalam pada software seperti Accurate v4, saya selalu berupaya meminimalkan risiko keuangan dan mendukung efisiensi operasional.',
    'Selain keahlian teknis, sertifikasi EnglishScore CEFR B2 dari British Council dan pengalaman sebagai Team Leader membekali saya dengan kemampuan komunikasi yang baik untuk berkolaborasi dalam tim multinasional maupun memimpin penyelesaian masalah di bawah tekanan.'
  ],
  stats: [
    { label: 'Tahun Pengalaman', value: '8+' },
    { label: 'Sertifikasi', value: 'BNSP & CEFR B2' },
    { label: 'Fokus', value: 'AR & Pajak' }
  ]
};

export const HERO = {
  tagline: 'Angka Adalah Bahasa Kepercayaan Saya.',
  subTagline: 'Account Receivable · Tax Administration · Financial Reporting',
  scrollPrompt: 'Scroll untuk Menjelajahi Perjalanan Saya',
  badges: [
    { icon: '🏅', text: 'BNSP Certified — Junior Accounting Technician' },
    { icon: '🇬🇧', text: 'British Council EnglishScore CEFR B2' },
    { icon: '📋', text: '8+ Tahun Pengalaman Profesional' },
  ],
};

export const SCROLL_OVERLAYS = [
  { start: 0, end: 0.2, text: 'Memahami Setiap Angka Dalam Bisnis Anda' },
  { start: 0.21, end: 0.5, text: 'Mengelola Piutang & Arus Kas dengan Teliti' },
  { start: 0.51, end: 0.8, text: 'Meminimalkan Pajak. Memaksimalkan Kepatuhan.' },
  { start: 0.81, end: 1, text: 'Laporan Keuangan yang Akurat & Tepat Waktu.' },
];

export const PARALLAX_LABELS = [
  'Account Receivable',
  'Tax & Finance',
  'Akuntansi Laporan Keuangan',
  'Faktur Pajak',
  'Accurate v4 · Excel',
];

export const EXPERIENCE = [
  {
    id: 1,
    role: 'Team Leader — Customer Storage',
    company: 'Big Bad Wolf Books · Jatim Expo Surabaya',
    period: '2016 – 2017',
    highlighted: false,
    bullets: [
      'Mengorganisir tim & plotting job desk anggota',
      'Membimbing komunikasi dengan bulk buyer',
      'Memotivasi tim saat under pressure',
    ],
  },
  {
    id: 2,
    role: 'Admin Penjualan Offline & Online',
    company: 'CV. Tamtamboyz (Parabola)',
    period: '2018 – 2019',
    highlighted: false,
    bullets: [
      'Melayani customer offline & online (marketplace)',
      'Mengelola keluhan & ekspedisi pengiriman barang',
      'Input resi ke sistem & notifikasi customer',
    ],
  },
  {
    id: 3,
    role: 'Admin HRD',
    company: 'PT. Malindo Anugerah Perkasa',
    period: '2019',
    highlighted: false,
    bullets: [
      'Administrasi dokumen karyawan & kontrak kerja',
      'Membantu penggajian, cuti, dan lembur',
      'Rekrutmen & onboarding karyawan baru',
      'Budget departemen HR',
    ],
  },
  {
    id: 4,
    role: 'Account Receivable & Accounting Staff',
    company: 'PT. Sumber Multi Rejeki',
    period: 'Juni 2019 – Maret 2024 (±5 Tahun)',
    highlighted: true,
    bullets: [
      'Pencatatan piutang & seluruh faktur penjualan',
      'Penagihan via telepon, email, WhatsApp',
      'Pembuatan Faktur Pajak Keluaran',
      'Input ke sistem Accurate v4 & Excel',
      'Permintaan bukti potong PPH 23 & PPN',
      'Laporan piutang mingguan & bulanan',
      'Membantu persiapan kewajiban pajak bulanan/tahunan',
      'Verifikasi kelengkapan dokumen keuangan',
    ],
  },
];

export const EDUCATION = [
  {
    id: 'A',
    degree: 'S1 Manajemen Dakwah',
    institution: 'STID Al Hadid Surabaya',
    period: '2014 – 2017',
    ipk: '3.06',
    predikat: 'Sangat Memuaskan',
    relevant: [
      'Akuntansi/Laporan Keuangan',
      'Manajemen Keuangan',
      'Sistem Informasi Manajemen',
    ],
  },
  {
    id: 'B',
    degree: 'SMK Kimia Industri (4 Tahun)',
    institution: 'SMK Pembangunan / SMK Negeri 5 Surabaya',
    period: '2012 – 2014 (lanjutan)',
    magang: 'PT. Petrokimia Gresik & PT. Hanil Jaya Steel',
  },
];

export const CERTIFICATIONS = [
  {
    icon: '🏅',
    title: 'BNSP — Sertifikat Kompetensi',
    subtitle: 'Teknisi Akuntansi Yunior',
    number: 'No: P.85321.2411.01.0008455.2023',
    issuer: 'Lembaga Sertifikasi Profesi UNTAG Surabaya',
    validity: 'Berlaku: 10 Februari 2023 (3 tahun)',
    competencies: [
      'Journal Entry',
      'Ledger',
      'Laporan Keuangan',
      'Spreadsheet',
      'Aplikasi Akuntansi',
    ],
  },
  {
    icon: '🇬🇧',
    title: 'British Council — EnglishScore',
    subtitle: 'CEFR B2 · Upper Intermediate · Skor: 450',
    scores: [
      { label: 'Grammar', value: 219 },
      { label: 'Vocabulary', value: 423 },
      { label: 'Reading', value: 252 },
      { label: 'Listening', value: 252 },
    ],
    validity: 'Berlaku: 04 Des 2022 – 03 Des 2024',
    code: 'Verified Code: f52ce0a5',
  },
  {
    icon: '📜',
    title: 'Sertifikat DPRD Provinsi Jawa Timur',
    number: 'No: 001/DPRDJatim-HariJadiKe-80/050/2025',
    description:
      'Atas Partisipasi pada Rapat Paripurna Istimewa Peringatan Hari Jadi ke-80 Pemerintah Provinsi Jawa Timur',
    location: 'Surabaya, 14 Oktober 2025',
    hasImage: true,
  },
];

export const SKILLS = [
  { name: 'Account Receivable & Invoicing', percentage: 90 },
  { name: 'Faktur Pajak (PPN / PPH 23)', percentage: 85 },
  { name: 'Accurate Versi 4', percentage: 88 },
  { name: 'Microsoft Excel', percentage: 90 },
  { name: 'HRD Administration', percentage: 70 },
  { name: 'English (CEFR B2)', percentage: 80 },
  { name: 'Team Leadership', percentage: 75 },
];

export const CONTACT = {
  phone: '081220404342',
  email: 'Emailfatma768@gmail.com',
  location: 'Surabaya, Jawa Timur',
};

export const NAV_LINKS = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang', href: '#about' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Pendidikan', href: '#education' },
  { label: 'Sertifikasi', href: '#certifications' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Kontak', href: '#contact' },
];
