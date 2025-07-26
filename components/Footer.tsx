
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, MailIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About School */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img className="h-12 w-12" src="https://i.ibb.co/L8yWd0j/logo-sekolah-png-4.png" alt="Logo MAS An-Nashar" />
            <h3 className="text-xl font-bold text-white">MAS An-Nashar</h3>
          </div>
          <p className="text-gray-400">
            Membentuk generasi Rabbani yang unggul dalam prestasi, berakhlak mulia, dan siap menghadapi tantangan zaman.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Tautan Cepat</h3>
          <ul className="space-y-2">
            <li><Link to="/profil" className="hover:text-accent transition-colors">Profil Sekolah</Link></li>
            <li><Link to="/program" className="hover:text-accent transition-colors">Program</Link></li>
            <li><Link to="/pendaftaran" className="hover:text-accent transition-colors">Pendaftaran Online</Link></li>
            <li><Link to="/alumni" className="hover:text-accent transition-colors">Portal Alumni</Link></li>
            <li><Link to="/berita" className="hover:text-accent transition-colors">Berita</Link></li>
            <li><Link to="/galeri" className="hover:text-accent transition-colors">Galeri</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Hubungi Kami</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start">
              <MapPinIcon className="w-5 h-5 mr-3 mt-1 text-accent" />
              <span>Jl. Pendidikan No. 123, Kota Harapan, Indonesia</span>
            </li>
            <li className="flex items-center">
              <PhoneIcon className="w-5 h-5 mr-3 text-accent" />
              <span>(021) 123-4567</span>
            </li>
            <li className="flex items-center">
              <MailIcon className="w-5 h-5 mr-3 text-accent" />
              <span>info@mas-annashar.sch.id</span>
            </li>
          </ul>
        </div>
        
        {/* Social Media */}
        <div>
           <h3 className="text-lg font-semibold text-white mb-4">Media Sosial</h3>
           <div className="flex space-x-4">
             <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
             </a>
             <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218 1.791.465 2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd"></path></svg>
             </a>
             <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
             </a>
           </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} MAS An-Nashar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;