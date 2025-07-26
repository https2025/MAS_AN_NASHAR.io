
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from './IconComponents';

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Profil', path: '/profil' },
  { name: 'Program', path: '/program' },
  { name: 'Berita', path: '/berita' },
  { name: 'Galeri', path: '/galeri' },
  { name: 'Alumni', path: '/alumni' },
  { name: 'Kontak', path: '/kontak' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: '#f59e0b',
    fontWeight: '600',
  };

  return (
    <nav className="bg-primary-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center space-x-3">
              <img className="h-12 w-12" src="https://i.ibb.co/L8yWd0j/logo-sekolah-png-4.png" alt="Logo MAS An-Nashar" />
              <span className="text-white text-lg sm:text-xl font-bold">MAS An-Nashar</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                  className="text-gray-200 hover:bg-primary-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-primary-800 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                className="text-gray-200 hover:bg-primary-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;