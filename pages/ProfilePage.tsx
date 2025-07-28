import React from 'react';
import StaffCard from '../components/StaffCard';

// Data Staf Pimpinan
const pimpinan = [
    { name: 'Dr. H. Ahmad Fauzi, M.Pd.', position: 'Kepala Sekolah', imageUrl: '/public/images/staff/ahmad-fauzi.jpg' },
    { name: 'Siti Aminah, S.Pd.I', position: 'Waka Kurikulum', imageUrl: '/public/images/staff/siti-aminah.jpg' },
    { name: 'Muhammad Iqbal, S.Kom', position: 'Waka Kesiswaan', imageUrl: '/public/images/staff/muhammad-iqbal.jpg' },
    { name: 'Drs. Abdullah Yusuf', position: 'Waka Sarana & Prasarana', imageUrl: '/public/images/staff/abdullah-yusuf.jpg' },
    { name: 'Nurhaliza, S.S', position: 'Waka Humas', imageUrl: '/public/images/staff/nurhaliza.jpg' },
    { name: 'Budi Santoso, M.Sc', position: 'Kepala Laboratorium', imageUrl: '/public/images/staff/budi-santoso.jpg' },
];

// Data Guru Mata Pelajaran
const teachers = [
    { name: 'A. Ummu Aemana, S.Pd.', subject: 'BHS.inggris', imageUrl: '/public/images/teachers/a-ummu-aemana.jpg' },
    { name: 'A.Wahyuni, S.Pd.', subject: 'PKN, SOSIOLOGI', imageUrl: '/public/images/teachers/a-wahyuni.jpg' },
    { name: 'ST. Aisyah. S.Pd', subject: 'BHS. ARAB', imageUrl: '/public/images/teachers/st-aisyah.jpg' },
    { name: 'Hj. Erna Damayanti, S.Pd. M.Pd', subject: 'SEJARAH INDONESIA', imageUrl: '/public/images/teachers/erna-damayanti.jpg' },
    { name: 'Wahyuni Ummul Latifah, S.Pd', subject: 'MULOK', imageUrl: '/public/images/teachers/wahyuni-ummul-latifah.jpg' },
    { name: 'ST. Aisyah Anwar, S.Pd.', subject: 'AQIDAH', imageUrl: '/public/images/teachers/st-aisyah-anwar.jpg' },
    { name: 'Isnawati Toding, S.Pd.', subject: 'MTK', imageUrl: '/public/images/teachers/isnawati-toding.jpg' },
    { name: 'Nuraeni, S.Pd', subject: 'BIOLOGI', imageUrl: '/public/images/teachers/nuraeni.jpg' },
    { name: 'Fernanda A, S.Pd.', subject: 'SBK PRAKARYA KETERAMPILAN', imageUrl: '/public/images/teachers/fernanda-a.jpg' },
    { name: 'Dwi Syukriadi, S.Pd. M.Pd', subject: 'BHS. INDONESIA', imageUrl: '/public/images/teachers/dwi-syukriadi.jpg' },
    { name: 'Nur Adil, S.Pd', subject: 'PJOK', imageUrl: '/public/images/teachers/nur-adil.jpg' },
    { name: 'Rostina, S.S, M.Pd', subject: 'GEOGRAFI', imageUrl: '/public/images/teachers/rostina.jpg' },
    { name: 'Reski Widia Rahmi, S.Kom, Gr', subject: 'TIK', imageUrl: '/public/images/teachers/reski-widia-rahmi.jpg' },
    { name: 'Riski Islamul Haq, S.Pd', subject: 'EKONOMI', imageUrl: '/public/images/teachers/riski-islamul-haq.jpg' },
    { name: 'Sakinahtul Qalbi, S.Pd', subject: 'FIQIH', imageUrl: '/public/images/teachers/sakinahtul-qalbi.jpg' },
    { name: 'Ratu Mustika, S.Pd', subject: 'SKI', imageUrl: '/public/images/teachers/ratu-mustika.jpg' },
    { name: 'Rizha Mawarni Raken, S.Pd', subject: 'FISIKA', imageUrl: '/public/images/teachers/rizha-mawarni-raken.jpg' },
];

const ProfilePage: React.FC = () => {
    return (
        <div className="bg-gray-50">
            <div className="relative h-64 bg-primary-800">
                <img src="https://picsum.photos/1200/400?image=2" alt="Profil Sekolah" className="w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider">Profil Sekolah</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                {/* Visi Misi */}
                <section className="mb-20">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Visi & Misi</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                            <div>
                                <h3 className="text-2xl font-semibold text-primary-700 mb-3">Visi</h3>
                                <p className="text-gray-600">"Terwujudnya generasi Islam yang unggul dalam prestasi, luhur dalam budi pekerti, berlandaskan iman dan taqwa, serta siap menghadapi tantangan global."</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-primary-700 mb-3">Misi</h3>
                                <ul className="list-disc list-inside text-left text-gray-600 space-y-2">
                                    <li>Menyelenggarakan pendidikan berkualitas yang mengintegrasikan ilmu pengetahuan umum dan agama.</li>
                                    <li>Membentuk karakter siswa yang berakhlakul karimah sesuai teladan Rasulullah SAW.</li>
                                    <li>Mengembangkan potensi, bakat, dan minat siswa secara optimal.</li>
                                    <li>Menciptakan lingkungan belajar yang islami, kondusif, dan inovatif.</li>
                                    <li>Membekali siswa dengan keterampilan abad ke-21.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Sejarah Singkat */}
                <section className="mb-20">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="md:w-2/3">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Sejarah Singkat</h2>
                                <p className="text-gray-600 mb-4">
                                    Madrasah Aliyah Swasta (MAS) An-Nashar didirikan pada tahun 2005 oleh para tokoh masyarakat dan ulama setempat yang memiliki kepedulian tinggi terhadap pendidikan generasi muda Islam. Berawal dari sebuah bangunan sederhana, MAS An-Nashar kini telah berkembang menjadi lembaga pendidikan yang representatif dan berprestasi.
                                </p>
                                <p className="text-gray-600">
                                    Dengan komitmen yang kuat, kami terus berupaya meningkatkan kualitas pendidikan untuk menjawab kebutuhan zaman, tanpa meninggalkan akar nilai-nilai keislaman yang menjadi fondasi utama sekolah.
                                </p>
                            </div>
                             <div className="md:w-1/3 flex justify-center">
                                <img src="/public/images/logo-madrasah.png" alt="Logo Madrasah" className="h-48 w-48 object-contain" onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/150'; }} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Staf Pimpinan */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Struktur Pimpinan</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {pimpinan.map((staff, index) => (
                            <StaffCard key={index} {...staff} />
                        ))}
                    </div>
                </section>

                {/* Tenaga Pendidik */}
                <section>
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Tenaga Pendidik (Guru)</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {teachers.map((teacher, index) => (
                           <div key={index} className="text-center bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col items-center">
                               <img className="mx-auto h-24 w-24 rounded-full object-cover mb-3" src={teacher.imageUrl} alt={teacher.name} onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/150'; }} />
                               <h3 className="text-base font-semibold text-gray-900 leading-tight">{teacher.name}</h3>
                               <p className="mt-1 text-sm text-primary-700 font-medium">{teacher.subject}</p>
                           </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ProfilePage;
