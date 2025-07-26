
import React from 'react';
import StaffCard from '../components/StaffCard';

const alumniStories = [
    { name: "Dr. Fatimah Az-Zahra, S.Ked", position: "Dokter Spesialis Anak & Peneliti", imageUrl: "https://picsum.photos/200/200?image=1027" },
    { name: "Ir. Hasan Al-Banna, M.Eng", position: "CEO & Founder Startup Edu-Tech", imageUrl: "https://picsum.photos/200/200?image=1005" },
    { name: "Aisha Nurillah, Lc., M.A.", position: "Dosen & Penulis Buku Islami", imageUrl: "https://picsum.photos/200/200?image=996" },
];

const AlumniPage: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Terima kasih! Data Anda telah kami terima (simulasi).');
    };
    
    const inputClass = "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500";
    const labelClass = "block text-sm font-medium text-gray-700";

    return (
        <div className="bg-gray-50">
            <div className="relative h-64 bg-primary-800">
                <img src="https://picsum.photos/1200/400?image=989" alt="Alumni" className="w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider">Portal Alumni</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Kisah Alumni */}
                <section className="mb-20 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Kisah Inspiratif Alumni</h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
                       Jejak langkah alumni MAS An-Nashar yang telah berkiprah dan memberikan kontribusi di berbagai bidang.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {alumniStories.map((alumnus, index) => (
                            <StaffCard key={index} {...alumnus} />
                        ))}
                    </div>
                </section>


                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Form Pendaftaran Alumni */}
                    <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Tetap Terhubung!</h2>
                        <p className="text-gray-600 mb-6">Daftarkan diri Anda untuk masuk ke dalam database alumni dan dapatkan informasi terbaru seputar sekolah dan kegiatan alumni.</p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="alumniName" className={labelClass}>Nama Lengkap</label>
                                    <input type="text" id="alumniName" required className={inputClass}/>
                                </div>
                                <div>
                                    <label htmlFor="gradYear" className={labelClass}>Tahun Lulus</label>
                                    <input type="number" id="gradYear" required className={inputClass} placeholder="Contoh: 2015" />
                                </div>
                            </div>
                             <div>
                                <label htmlFor="alumniEmail" className={labelClass}>Alamat Email Aktif</label>
                                <input type="email" id="alumniEmail" required className={inputClass}/>
                            </div>
                            <div>
                                <label htmlFor="alumniJob" className={labelClass}>Pekerjaan / Instansi Saat Ini</label>
                                <input type="text" id="alumniJob" required className={inputClass}/>
                            </div>
                            <div>
                                <label htmlFor="alumniMessage" className={labelClass}>Kesan & Pesan untuk Almamater</label>
                                <textarea id="alumniMessage" rows={4} required className={inputClass}></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-accent hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent font-semibold transition-colors">
                                    Kirim Data Alumni
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Agenda Alumni */}
                    <div className="lg:col-span-2 bg-primary-50 p-8 rounded-lg shadow-lg">
                         <h2 className="text-2xl font-bold text-gray-900 mb-6">Agenda Alumni</h2>
                         <div className="space-y-6">
                            <div className="bg-white p-4 rounded-md shadow">
                                <p className="font-semibold text-primary-700">Reuni Akbar Lintas Angkatan</p>
                                <p className="text-sm text-gray-600">Tanggal: 25 Desember 2024</p>
                                <p className="text-sm text-gray-500">Lokasi: Aula MAS An-Nashar</p>
                            </div>
                             <div className="bg-white p-4 rounded-md shadow">
                                <p className="font-semibold text-primary-700">Webinar Karir: "Sukses di Era Digital"</p>
                                <p className="text-sm text-gray-600">Tanggal: 15 Januari 2025</p>
                                <p className="text-sm text-gray-500">Lokasi: Online via Zoom</p>
                            </div>
                             <div className="bg-white p-4 rounded-md shadow">
                                <p className="font-semibold text-primary-700">Bakti Sosial Alumni Mengajar</p>
                                <p className="text-sm text-gray-600">Tanggal: 22 Februari 2025</p>
                                <p className="text-sm text-gray-500">Lokasi: Desa Binaan Sekitar Sekolah</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlumniPage;
