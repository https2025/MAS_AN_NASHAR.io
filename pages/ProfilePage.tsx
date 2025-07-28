import React from 'react';
import StaffCard from '../components/StaffCard';

const staff = [
    { name: "Dr. H. Ahmad Fauzi, M.Pd.", position: "Kepala Sekolah", imageUrl: "https://picsum.photos/200/200?image=836" },
    { name: "Siti Aminah, S.Pd.I", position: "Waka Kurikulum", imageUrl: "https://picsum.photos/200/200?image=823" },
    { name: "Muhammad Iqbal, S.Kom", position: "Waka Kesiswaan", imageUrl: "https://picsum.photos/200/200?image=782" },
    { name: "Drs. Abdullah Yusuf", position: "Guru Senior Fiqih", imageUrl: "https://picsum.photos/200/200?image=684" },
    { name: "Nurhaliza, S.S", position: "Guru Bahasa Arab", imageUrl: "https://picsum.photos/200/200?image=669" },
    { name: "Budi Santoso, M.Sc", position: "Guru Matematika & Sains", imageUrl: "https://picsum.photos/200/200?image=553" },
];

const photoPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTllYWViIi8+CiAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI4MCIgZmlsbD0iI2RkZGVlMiIvPgogIDxwYXRoIGQ9Ik0xMDAgODBWMTIwTTgwIDEwMEgxMjAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI4IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+';
const logoPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTllYWViIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2cHgiIGZpbGw9IiM5ZWE1YjYiPihMb2dvKTwvdGV4dD4KPC9zdmc+';

const teachers = [
    { name: "A. Ummu Aemana, S.Pd.", position: "Bhs. Inggris", imageUrl: photoPlaceholder },
    { name: "A.Wahyuni, S.Pd.", position: "PKN & Sosiologi", imageUrl: photoPlaceholder },
    { name: "ST. Aisyah. S.Pd", position: "Bhs. Arab", imageUrl: photoPlaceholder },
    { name: "Hj. Erna Damayanti, S.Pd. M.Pd", position: "Sejarah Indonesia", imageUrl: photoPlaceholder },
    { name: "Wahyuni Ummul Latifah, S.Pd", position: "Mulok", imageUrl: photoPlaceholder },
    { name: "ST. Aisyah Anwar, S.Pd.", position: "Aqidah", imageUrl: photoPlaceholder },
    { name: "Isnawati Toding, S.Pd.", position: "Matematika", imageUrl: photoPlaceholder },
    { name: "Nuraeni, S.Pd", position: "Biologi", imageUrl: photoPlaceholder },
    { name: "Fernanda A, S.Pd.", position: "SBK, Prakarya & Keterampilan", imageUrl: photoPlaceholder },
    { name: "Dwi Syukriadi, S.Pd. M.Pd", position: "Bhs. Indonesia", imageUrl: photoPlaceholder },
    { name: "Nur Adil, S.Pd", position: "PJOK", imageUrl: photoPlaceholder },
    { name: "Rostina, S.S, M.Pd", position: "Geografi", imageUrl: photoPlaceholder },
    { name: "Reski Widia Rahmi, S.Kom, Gr", position: "TIK", imageUrl: photoPlaceholder },
    { name: "Riski Islamul Haq, S.Pd", position: "Ekonomi", imageUrl: photoPlaceholder },
    { name: "Sakinahtul Qalbi, S.Pd", position: "Fiqih", imageUrl: photoPlaceholder },
    { name: "Ratu Mustika, S.Pd", position: "SKI", imageUrl: photoPlaceholder },
    { name: "Rizha Mawarni Raken, S.Pd", position: "Fisika", imageUrl: photoPlaceholder },
];

const ProfilePage: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="relative h-64 bg-primary-800">
                <img src="https://picsum.photos/1200/400?image=1011" alt="Gedung Sekolah" className="w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider">Profil Sekolah</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Sejarah */}
                <section>
                    <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center sm:text-left">Sejarah Singkat</h2>
                        <img src={logoPlaceholder} alt="Logo MAS An-Nashar" className="h-24 w-24 mt-4 sm:mt-0 bg-gray-200 rounded-md"/>
                    </div>
                    <div className="bg-primary-50 p-8 rounded-lg shadow-md">
                        <p className="text-gray-700 leading-relaxed">
                            Madrasah Aliyah Swasta (MAS) An-Nashar didirikan pada tahun 1998 oleh para ulama dan tokoh masyarakat yang peduli akan pentingnya pendidikan Islam yang berkualitas. Berawal dari sebuah bangunan sederhana, sekolah ini tumbuh dan berkembang berkat kepercayaan masyarakat dan dedikasi para pendidik. Nama "An-Nashar" yang berarti "Sang Penolong" menjadi cerminan dari cita-cita luhur para pendiri untuk menolong generasi muda meraih masa depan yang gemilang dengan berpegang teguh pada ajaran Islam. Sejak awal, MAS An-Nashar telah berkomitmen untuk menyeimbangkan antara kecerdasan intelektual, kematangan emosional, dan kedalaman spiritual.
                        </p>
                    </div>
                </section>

                {/* Visi & Misi */}
                <section className="mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-lg border-2 border-primary-600 shadow-xl">
                            <h3 className="text-2xl font-bold text-primary-700 mb-4">Visi</h3>
                            <p className="text-gray-700">"Terwujudnya generasi Rabbani yang unggul dalam prestasi, luhur dalam budi pekerti, berwawasan global, serta berlandaskan Iman dan Taqwa."</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg border-2 border-accent shadow-xl">
                            <h3 className="text-2xl font-bold text-accent-dark mb-4">Misi</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Menyelenggarakan pendidikan yang mengintegrasikan kurikulum nasional dengan nilai-nilai keislaman.</li>
                                <li>Mengembangkan potensi akademik dan non-akademik siswa secara optimal.</li>
                                <li>Membentuk karakter siswa yang berakhlakul karimah sesuai teladan Rasulullah SAW.</li>
                                <li>Membekali siswa dengan kemampuan literasi digital dan bahasa asing.</li>
                                <li>Menciptakan lingkungan belajar yang islami, kondusif, dan inspiratif.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Tenaga Pendidik */}
                <section className="mt-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Tenaga Pendidik & Kependidikan</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {staff.map((person, index) => (
                            <StaffCard key={index} {...person} />
                        ))}
                    </div>
                </section>

                {/* Guru Mata Pelajaran */}
                <section className="mt-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Guru Mata Pelajaran</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {teachers.map((person, index) => (
                            <StaffCard key={index} {...person} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProfilePage;
