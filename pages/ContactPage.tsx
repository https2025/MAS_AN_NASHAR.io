
import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon } from '../components/IconComponents';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim (simulasi).');
  };

  return (
    <div>
        <div className="relative h-64 bg-primary-800">
            <img src="https://picsum.photos/1200/400?image=88" alt="Kontak" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider">Hubungi Kami</h1>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Info */}
                <div className="lg:col-span-1 bg-primary-50 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <MapPinIcon className="flex-shrink-0 h-6 w-6 text-primary-600 mt-1" />
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-gray-800">Alamat</h3>
                                <p className="text-gray-600">Jl. Pendidikan No. 123, Kota Harapan, Indonesia, 12345</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <PhoneIcon className="flex-shrink-0 h-6 w-6 text-primary-600 mt-1" />
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-gray-800">Telepon</h3>
                                <p className="text-gray-600">(021) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MailIcon className="flex-shrink-0 h-6 w-6 text-primary-600 mt-1" />
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                                <p className="text-gray-600">info@mas-annashar.sch.id</p>
                                <p className="text-gray-600">ppdb@mas-annashar.sch.id (Pendaftaran)</p>
                            </div>
                        </div>
                    </div>
                     <div className="mt-8">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Jam Operasional Kantor</h3>
                        <p className="text-gray-600">Senin - Jumat: 08:00 - 15:00 WIB</p>
                        <p className="text-gray-600">Sabtu: 08:00 - 12:00 WIB</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                                <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Alamat Email</label>
                                <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subjek</label>
                            <input type="text" id="subject" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan Anda</label>
                            <textarea id="message" rows={5} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 font-semibold transition-colors">
                                Kirim Pesan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
            {/* Map */}
            <div className="mt-16">
                 <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Lokasi Kami</h2>
                 <div className="h-80 md:h-96 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                    <iframe
                        title="Lokasi MAS An-Nashar"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322533!2d106.819597314769!3d-6.194741395514781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42dabe0ab3b%3A0x96739b3624f4699!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1677651035651!5m2!1sen!2sid"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                 </div>
            </div>
        </div>
    </div>
  );
};

export default ContactPage;
