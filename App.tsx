import React from 'react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import DualAction from './components/DualAction';
import ContentHub from './components/ContentHub';
import Rationale from './components/Rationale';
import References from './components/References';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage: React.FC = () => {
  return (
    <main className="flex-grow">
      <Hero />
      <div id="dual-action">
        <DualAction />
      </div>
      <div id="campaign-assets">
        <ContentHub />
      </div>
    </main>
  );
};

const App: React.FC = () => {
  return (
    <MemoryRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen text-editorial-text bg-editorial-bg">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rationale" element={<Rationale />} />
          <Route path="/references" element={<References />} />
        </Routes>
        <Footer />
      </div>
    </MemoryRouter>
  );
};

export default App;