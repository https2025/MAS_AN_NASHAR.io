
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from './IconComponents';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://picsum.photos/1600/900?image=24"
          alt="Siswa-siswi MAS An-Nashar"
        />
        <div className="absolute inset-0 bg-primary-900 bg-opacity-70" aria-hidden="true"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Selamat Datang di <span className="text-accent">MAS An-Nashar</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200">
          Unggul dalam Prestasi, Luhur dalam Budi Pekerti, Berlandaskan Iman dan Taqwa.
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <Link
              to="/program"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-800 bg-white hover:bg-gray-100 sm:px-8 transition-colors"
            >
              Lihat Program
            </Link>
            <Link
              to="/pendaftaran"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-accent hover:bg-accent-dark sm:px-8 transition-colors"
            >
              Pendaftaran Siswa <ChevronRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;