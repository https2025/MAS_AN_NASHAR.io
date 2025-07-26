
import React, { useState } from 'react';

const ProgramTab: React.FC<{ title: string; active: boolean; onClick: () => void }> = ({ title, active, onClick }) => (
    <button
        onClick={onClick}
        className={`px-3 sm:px-6 py-3 text-sm sm:text-lg font-semibold rounded-t-lg transition-colors duration-300 focus:outline-none flex-shrink-0
        ${active ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
    >
        {title}
    </button>
);

const CurriculumContent: React.FC = () => (
    <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">Kurikulum Terpadu</h3>
        <p>MAS An-Nashar menerapkan Kurikulum Merdeka yang diperkaya dengan muatan lokal keislaman. Pendekatan ini dirancang untuk menciptakan keseimbangan antara pengetahuan umum, sains, teknologi, dan pemahaman agama yang mendalam.</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>MIPA (Matematika & Ilmu Pengetahuan Alam):</strong> Fokus pada pengembangan kemampuan analitis, logis, dan problem-solving melalui mata pelajaran Fisika, Kimia, Biologi, dan Matematika.</li>
            <li><strong>IPS (Ilmu Pengetahuan Sosial):</strong> Mengasah kepekaan sosial, pemahaman sejarah, dan wawasan global melalui mata pelajaran Ekonomi, Geografi, Sosiologi, dan Sejarah.</li>
            <li><strong>Ilmu Keagamaan:</strong> Pendalaman intensif pada Al-Qur'an Hadits, Fiqih, Akidah Akhlak, dan Sejarah Kebudayaan Islam (SKI).</li>
            <li><strong>Bahasa:</strong> Penguasaan Bahasa Indonesia, Bahasa Inggris, dan Bahasa Arab sebagai alat komunikasi global dan kunci memahami literatur Islam.</li>
        </ul>
    </div>
);

const ExtracurricularContent: React.FC = () => (
    <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">Pengembangan Diri & Bakat</h3>
        <p>Kami percaya bahwa setiap siswa memiliki potensi unik. Program ekstrakurikuler kami menyediakan wadah bagi siswa untuk mengeksplorasi minat dan bakat mereka.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h4 className="font-semibold text-primary-700">Bidang Olahraga:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700">
                    <li>Futsal</li>
                    <li>Basket</li>
                    <li>Bulu Tangkis</li>
                    <li>Pencak Silat</li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-primary-700">Bidang Seni & Sains:</h4>
                <ul className="list-disc list-inside ml-4 text-gray-700">
                    <li>Pramuka</li>
                    <li>Paskibra</li>
                    <li>KIR (Kelompok Ilmiah Remaja)</li>
                    <li>Jurnalistik & Fotografi</li>
                    <li>Kaligrafi & Marawis</li>
                </ul>
            </div>
        </div>
    </div>
);

const FacilitiesContent: React.FC = () => (
    <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">Fasilitas Penunjang</h3>
        <p>Lingkungan belajar yang nyaman dan representatif adalah kunci keberhasilan proses pendidikan. MAS An-Nashar menyediakan fasilitas yang lengkap untuk mendukung kegiatan belajar mengajar.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            {['Ruang Kelas AC', 'Perpustakaan', 'Laboratorium Komputer', 'Laboratorium IPA', 'Masjid Sekolah', 'Lapangan Olahraga', 'Kantin Sehat', 'Aula Serbaguna'].map(item => (
                <div key={item} className="bg-primary-50 p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-primary-800">{item}</p>
                </div>
            ))}
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img src="https://picsum.photos/600/400?image=2" alt="Fasilitas 1" className="rounded-lg shadow-md w-full h-auto object-cover" />
            <img src="https://picsum.photos/600/400?image=12" alt="Fasilitas 2" className="rounded-lg shadow-md w-full h-auto object-cover" />
        </div>
    </div>
);

const AcademicCalendarContent: React.FC = () => (
    <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">Kalender Akademik 2024/2025</h3>
        <p>Berikut adalah jadwal kegiatan penting untuk tahun ajaran saat ini. Jadwal dapat berubah sewaktu-waktu dan akan diinformasikan lebih lanjut.</p>
        <div className="space-y-8">
            <div>
                <h4 className="text-xl font-semibold text-primary-700 mb-2 border-b-2 border-primary-200 pb-2">Semester Ganjil</h4>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between p-2 rounded hover:bg-gray-100"><span>15 - 17 Juli 2024</span> <strong>Masa Ta'aruf Siswa Madrasah (MATSAMA)</strong></li>
                    <li className="flex justify-between p-2 rounded hover:bg-gray-100"><span>17 Agustus 2024</span> <strong>Upacara Peringatan HUT RI ke-79</strong></li>
                    <li className="flex justify-between p-2 rounded hover:bg-gray-100"><span>23 - 27 September 2024</span> <strong>Penilaian Tengah Semester (PTS)</strong></li>
                    <li className="flex justify-between p-2 rounded hover:bg-gray-100"><span>2 - 13 Desember 2024</span> <strong>Penilaian Akhir Semester (PAS)</strong></li>
                    <li className="flex justify-between p-2 rounded hover:bg-gray-100"><span>23 Des 2024 - 4 Jan 2025</span> <strong>Libur Semester Ganjil</strong></li>
                </ul>
            </div>
            <div>
                <h4 className="text-xl font-semibold text-primary-700 mb-2 border-b-2 border-primary-200 pb-2">Semester Genap</h4>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between p-2 rounded hover:bg-gray-100"><span>6 Januari 2025</span> <strong>Awal Masuk Semester Genap</strong></li>
                    <li className="flex justify-between p-2 rounded hover:bg-gray-100"><span>10 - 14 Maret 2025</span> <strong>Penilaian Tengah Semester (PTS)</strong></li>
                    <li className="flex justify-between p-2 rounded hover:bg-gray-100"><span>21 April - 2 Mei 2025</span> <strong>Ujian Madrasah (UM) Kelas XII</strong></li>
                    <li className="flex justify-between p-2 rounded hover:bg-gray-100"><span>9 - 20 Juni 2025</span> <strong>Penilaian Akhir Tahun (PAT)</strong></li>
                    <li className="flex justify-between p-2 rounded hover:bg-gray-100"><span>Mulai 23 Juni 2025</span> <strong>Libur Akhir Tahun Ajaran</strong></li>
                </ul>
            </div>
        </div>
    </div>
);


const ProgramsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('kurikulum');

    return (
        <div>
            <div className="relative h-64 bg-primary-800">
                <img src="https://picsum.photos/1200/400?image=1025" alt="Kegiatan Belajar" className="w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider">Program Pendidikan</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex border-b-2 border-gray-300 overflow-x-auto">
                    <ProgramTab title="Kurikulum" active={activeTab === 'kurikulum'} onClick={() => setActiveTab('kurikulum')} />
                    <ProgramTab title="Ekstrakurikuler" active={activeTab === 'ekstrakurikuler'} onClick={() => setActiveTab('ekstrakurikuler')} />
                    <ProgramTab title="Fasilitas" active={activeTab === 'fasilitas'} onClick={() => setActiveTab('fasilitas')} />
                    <ProgramTab title="Kalender Akademik" active={activeTab === 'kalender'} onClick={() => setActiveTab('kalender')} />
                </div>

                <div className="mt-8 p-6 sm:p-8 bg-white rounded-b-lg rounded-r-lg shadow-xl">
                    {activeTab === 'kurikulum' && <CurriculumContent />}
                    {activeTab === 'ekstrakurikuler' && <ExtracurricularContent />}
                    {activeTab === 'fasilitas' && <FacilitiesContent />}
                    {activeTab === 'kalender' && <AcademicCalendarContent />}
                </div>
            </div>
        </div>
    );
};

export default ProgramsPage;
