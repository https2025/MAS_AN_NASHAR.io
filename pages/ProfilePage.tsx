
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
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Sejarah Singkat</h2>
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
            </div>
        </div>
    );
};

export default ProfilePage;
