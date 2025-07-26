
import React from 'react';

const galleryImages = [
  { id: 1, src: 'https://picsum.photos/500/400?image=1073', alt: 'Prestasi Siswa' },
  { id: 2, src: 'https://picsum.photos/500/400?image=1078', alt: 'Kegiatan Bakti Sosial' },
  { id: 3, src: 'https://picsum.photos/500/400?image=1060', alt: 'Workshop Kewirausahaan' },
  { id: 4, src: 'https://picsum.photos/500/400?image=1041', alt: 'Studi Banding' },
  { id: 5, src: 'https://picsum.photos/500/400?image=24', alt: 'Upacara Bendera' },
  { id: 6, src: 'https://picsum.photos/500/400?image=103', alt: 'Pameran Karya Siswa' },
  { id: 7, src: 'https://picsum.photos/500/400?image=2', alt: 'Perpustakaan Sekolah' },
  { id: 8, src: 'https://picsum.photos/500/400?image=12', alt: 'Laboratorium Komputer' },
  { id: 9, src: 'https://picsum.photos/500/400?image=431', alt: 'Kegiatan Olahraga' },
  { id: 10, src: 'https://picsum.photos/500/400?image=453', alt: 'Kegiatan Pramuka' },
  { id: 11, src: 'https://picsum.photos/500/400?image=659', alt: 'Seni Kaligrafi' },
  { id: 12, src: 'https://picsum.photos/500/400?image=838', alt: 'Diskusi Kelompok' },
];

const GalleryPage: React.FC = () => {
    return (
        <div>
            <div className="relative h-64 bg-primary-800">
                <img src="https://picsum.photos/1200/400?image=431" alt="Galeri" className="w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider">Galeri Sekolah</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                    Momen-momen berharga dari berbagai kegiatan, prestasi, dan kehidupan sehari-hari di lingkungan MAS An-Nashar.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map(image => (
                        <div key={image.id} className="group relative">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center rounded-lg">
                                <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
