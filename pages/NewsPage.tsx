
import React from 'react';
import NewsCard from '../components/NewsCard';

const allNews = [
    { id: 1, title: "MAS An-Nashar Raih Juara 1 Lomba Cerdas Cermat Tingkat Nasional", date: "15 Agustus 2024", summary: "Tim cerdas cermat MAS An-Nashar berhasil menunjukkan keunggulannya dengan meraih prestasi gemilang dalam kompetisi yang diikuti oleh ratusan sekolah.", imageUrl: "https://picsum.photos/400/300?image=1073" },
    { id: 2, title: "Kegiatan Bakti Sosial dan Santunan Anak Yatim di Bulan Muharram", date: "10 Agustus 2024", summary: "Dalam rangka menyambut tahun baru Islam, OSIS MAS An-Nashar mengadakan kegiatan bakti sosial untuk masyarakat sekitar.", imageUrl: "https://picsum.photos/400/300?image=1078" },
    { id: 3, title: "Workshop 'Menjadi Wirausahawan Muda Islami' Sukses Digelar", date: "5 Agustus 2024", summary: "Sekolah kami mengadakan workshop kewirausahaan untuk membekali siswa dengan skill bisnis yang berlandaskan syariah.", imageUrl: "https://picsum.photos/400/300?image=1060" },
    { id: 4, title: "Studi Banding ke Pesantren Modern Gontor", date: "25 Juli 2024", summary: "Siswa-siswi kelas XI melakukan studi banding untuk memperluas wawasan tentang sistem pendidikan pesantren modern.", imageUrl: "https://picsum.photos/400/300?image=1041" },
    { id: 5, title: "Peringatan Isra Mi'raj Nabi Muhammad SAW 1445 H", date: "18 Juli 2024", summary: "Acara peringatan Isra Mi'raj diisi dengan tausiyah, lomba-lomba islami, dan muhasabah bersama.", imageUrl: "https://picsum.photos/400/300?image=1084" },
    { id: 6, title: "Gelar Karya Siswa P5 Kurikulum Merdeka", date: "10 Juli 2024", summary: "Para siswa memamerkan hasil proyek penguatan profil pelajar pancasila (P5) dalam sebuah pameran yang meriah.", imageUrl: "https://picsum.photos/400/300?image=103" },
];


const NewsPage: React.FC = () => {
    return (
        <div>
            <div className="relative h-64 bg-primary-800">
                <img src="https://picsum.photos/1200/400?image=338" alt="Berita" className="w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider">Berita & Kegiatan</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {allNews.map(news => (
                        <NewsCard key={news.id} {...news} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-16 flex justify-center">
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <span className="sr-only">Previous</span>
                            &laquo;
                        </a>
                        <a href="#" aria-current="page" className="z-10 bg-primary-50 border-primary-500 text-primary-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
                        <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a>
                        <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </a>
                        <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>
                        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <span className="sr-only">Next</span>
                            &raquo;
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
