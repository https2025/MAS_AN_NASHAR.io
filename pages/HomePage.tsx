
import React from 'react';
import Hero from '../components/Hero';
import NewsCard from '../components/NewsCard';
import { Link } from 'react-router-dom';

const latestNews = [
    {
        id: 1,
        title: "MAS An-Nashar Raih Juara 1 Lomba Cerdas Cermat Tingkat Nasional",
        date: "15 Agustus 2024",
        summary: "Tim cerdas cermat MAS An-Nashar berhasil menunjukkan keunggulannya dengan meraih prestasi gemilang.",
        imageUrl: "https://picsum.photos/400/300?image=1073",
    },
    {
        id: 2,
        title: "Kegiatan Bakti Sosial dan Santunan Anak Yatim di Bulan Muharram",
        date: "10 Agustus 2024",
        summary: "Dalam rangka menyambut tahun baru Islam, OSIS MAS An-Nashar mengadakan kegiatan bakti sosial.",
        imageUrl: "https://picsum.photos/400/300?image=1078",
    },
    {
        id: 3,
        title: "Workshop 'Menjadi Wirausahawan Muda Islami' Sukses Digelar",
        date: "5 Agustus 2024",
        summary: "Sekolah kami mengadakan workshop kewirausahaan untuk membekali siswa dengan skill bisnis.",
        imageUrl: "https://picsum.photos/400/300?image=1060",
    },
];

const programUnggulan = [
    {
        icon: '📚',
        title: 'Tahfidz Al-Qur\'an',
        description: 'Program menghafal Al-Qur\'an dengan target dan bimbingan intensif dari para hafidz/hafidzah.',
    },
    {
        icon: '🔬',
        title: 'Kajian Ilmiah & Riset',
        description: 'Mendorong siswa untuk berpikir kritis dan inovatif melalui kegiatan riset dan karya ilmiah.',
    },
    {
        icon: '💻',
        title: 'Teknologi & Digital',
        description: 'Pembekalan keterampilan teknologi informasi dan literasi digital untuk menghadapi era modern.',
    },
    {
        icon: '🏆',
        title: 'Pengembangan Prestasi',
        description: 'Fokus pada pengembangan bakat dan minat siswa di bidang akademik maupun non-akademik.',
    }
];

const HomePage: React.FC = () => {
    return (
        <div>
            <Hero />
            
            {/* Sambutan Kepala Sekolah */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                        <div className="md:col-span-1 flex justify-center">
                            <img src="https://picsum.photos/300/400?image=836" alt="Kepala Sekolah" className="rounded-lg shadow-2xl h-96 w-72 object-cover"/>
                        </div>
                        <div className="md:col-span-2">
                            <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
                                Sambutan Kepala Sekolah
                            </h2>
                            <p className="mt-4 text-lg text-primary-700 font-semibold">Dr. H. Ahmad Fauzi, M.Pd.</p>
                            <p className="mt-6 text-gray-600">
                                Assalamu'alaikum Warahmatullahi Wabarakatuh.<br/><br/>
                                Puji syukur kehadirat Allah SWT yang telah melimpahkan rahmat dan karunia-Nya kepada kita semua. Selamat datang di website resmi Madrasah Aliyah Swasta (MAS) An-Nashar. Melalui media ini, kami berharap dapat menyajikan informasi yang relevan dan bermanfaat mengenai kegiatan, prestasi, dan program-program unggulan sekolah kami. Kami berkomitmen untuk terus berinovasi dalam memberikan pendidikan terbaik yang mengintegrasikan ilmu pengetahuan, teknologi, dan nilai-nilai keislaman demi melahirkan generasi penerus yang cerdas, berkarakter, dan bertakwa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Unggulan */}
            <section className="py-20 bg-primary-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">Program Unggulan</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                            Program pendidikan yang dirancang untuk membentuk pribadi yang kompeten dan berakhlak mulia.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                        {programUnggulan.map(program => (
                            <div key={program.title} className="bg-white p-8 text-center rounded-xl shadow-lg hover:shadow-primary-200 transition-shadow">
                                <div className="text-5xl mb-4">{program.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900">{program.title}</h3>
                                <p className="mt-2 text-gray-600">{program.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Berita Terbaru */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">Berita Terbaru</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                            Ikuti terus perkembangan dan kegiatan terbaru dari MAS An-Nashar.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {latestNews.map(news => (
                            <NewsCard key={news.id} {...news} />
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link to="/berita" className="inline-block bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                            Lihat Semua Berita
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
