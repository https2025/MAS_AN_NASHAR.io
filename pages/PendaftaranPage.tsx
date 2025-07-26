
import React from 'react';

const PendaftaranPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Formulir pendaftaran Anda telah berhasil disimulasikan. Kami akan segera menghubungi Anda.');
  };

  const inputClass = "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500";
  const labelClass = "block text-sm font-medium text-gray-700";
  const sectionTitleClass = "text-xl font-bold text-primary-700 border-b-2 border-primary-200 pb-2 mb-6";

  return (
    <div>
      <div className="relative h-64 bg-primary-800">
        <img src="https://picsum.photos/1200/400?image=1050" alt="Pendaftaran" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider">Pendaftaran Siswa Baru</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 rounded-2xl shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Formulir PPDB MAS An-Nashar</h2>
            <p className="mt-2 text-gray-600">Tahun Ajaran 2025/2026</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Data Calon Siswa */}
            <section>
              <h3 className={sectionTitleClass}>1. Data Calon Siswa</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className={labelClass}>Nama Lengkap</label>
                  <input type="text" id="fullName" required className={inputClass} placeholder="Contoh: Muhammad Al-Fatih" />
                </div>
                <div>
                  <label htmlFor="nisn" className={labelClass}>NISN</label>
                  <input type="text" id="nisn" required className={inputClass} placeholder="Nomor Induk Siswa Nasional" />
                </div>
                <div>
                  <label htmlFor="birthPlace" className={labelClass}>Tempat Lahir</label>
                  <input type="text" id="birthPlace" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="birthDate" className={labelClass}>Tanggal Lahir</label>
                  <input type="date" id="birthDate" required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Jenis Kelamin</label>
                  <div className="mt-2 flex space-x-4">
                    <label className="inline-flex items-center"><input type="radio" name="gender" value="Laki-laki" required className="form-radio text-primary-600" /> <span className="ml-2">Laki-laki</span></label>
                    <label className="inline-flex items-center"><input type="radio" name="gender" value="Perempuan" className="form-radio text-primary-600" /> <span className="ml-2">Perempuan</span></label>
                  </div>
                </div>
                <div>
                  <label htmlFor="religion" className={labelClass}>Agama</label>
                  <input type="text" id="religion" value="Islam" readOnly className={`${inputClass} bg-gray-100`} />
                </div>
                 <div>
                  <label htmlFor="prevSchool" className={labelClass}>Asal Sekolah (SMP/MTs)</label>
                  <input type="text" id="prevSchool" required className={inputClass} />
                </div>
              </div>
            </section>

            {/* Data Orang Tua / Wali */}
            <section>
              <h3 className={sectionTitleClass}>2. Data Orang Tua / Wali</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fatherName" className={labelClass}>Nama Ayah</label>
                  <input type="text" id="fatherName" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="fatherJob" className={labelClass}>Pekerjaan Ayah</label>
                  <input type="text" id="fatherJob" required className={inputClass} />
                </div>
                 <div>
                  <label htmlFor="motherName" className={labelClass}>Nama Ibu</label>
                  <input type="text" id="motherName" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="motherJob" className={labelClass}>Pekerjaan Ibu</label>
                  <input type="text" id="motherJob" required className={inputClass} />
                </div>
                 <div>
                  <label htmlFor="phone" className={labelClass}>No. Telepon / WhatsApp</label>
                  <input type="tel" id="phone" required className={inputClass} placeholder="081234567890" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className={labelClass}>Alamat Lengkap Orang Tua</label>
                  <textarea id="address" rows={3} required className={inputClass}></textarea>
                </div>
              </div>
            </section>
            
            {/* Pilihan Jurusan */}
            <section>
              <h3 className={sectionTitleClass}>3. Pilihan Jurusan</h3>
               <div>
                  <label className={labelClass}>Pilih salah satu jurusan</label>
                  <div className="mt-2 flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
                    <label className="inline-flex items-center"><input type="radio" name="major" value="MIPA" required className="form-radio text-primary-600" /> <span className="ml-2">MIPA (Matematika & Ilmu Pengetahuan Alam)</span></label>
                    <label className="inline-flex items-center"><input type="radio" name="major" value="IPS" className="form-radio text-primary-600" /> <span className="ml-2">IPS (Ilmu Pengetahuan Sosial)</span></label>
                  </div>
                </div>
            </section>

            {/* Unggah Berkas */}
            <section>
                <h3 className={sectionTitleClass}>4. Unggah Berkas (Ukuran maks. 2MB)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="fileIjazah" className={labelClass}>Scan Ijazah / SKL</label>
                        <input type="file" id="fileIjazah" required className={`${inputClass} p-2`} accept=".pdf,.jpg,.jpeg,.png"/>
                    </div>
                     <div>
                        <label htmlFor="fileKK" className={labelClass}>Scan Kartu Keluarga (KK)</label>
                        <input type="file" id="fileKK" required className={`${inputClass} p-2`} accept=".pdf,.jpg,.jpeg,.png"/>
                    </div>
                     <div>
                        <label htmlFor="fileAkta" className={labelClass}>Scan Akta Kelahiran</label>
                        <input type="file" id="fileAkta" required className={`${inputClass} p-2`} accept=".pdf,.jpg,.jpeg,.png"/>
                    </div>
                     <div>
                        <label htmlFor="fileFoto" className={labelClass}>Pas Foto 3x4</label>
                        <input type="file" id="fileFoto" required className={`${inputClass} p-2`} accept=".jpg,.jpeg,.png"/>
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">*Semua berkas bersifat wajib. Harap unggah file yang jelas dan dapat dibaca.</p>
            </section>

            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 font-semibold transition-colors">
                Kirim Formulir Pendaftaran
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PendaftaranPage;
