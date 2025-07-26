
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ProgramsPage from './pages/ProgramsPage';
import NewsPage from './pages/NewsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import PendaftaranPage from './pages/PendaftaranPage';
import AlumniPage from './pages/AlumniPage';

const App: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profil" element={<ProfilePage />} />
          <Route path="/program" element={<ProgramsPage />} />
          <Route path="/berita" element={<NewsPage />} />
          <Route path="/galeri" element={<GalleryPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="/pendaftaran" element={<PendaftaranPage />} />
          <Route path="/alumni" element={<AlumniPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;