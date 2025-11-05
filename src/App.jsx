import React from 'react';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import DailyMenu from './components/DailyMenu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fef3c7] text-slate-900">
      <Hero />
      <Highlights />
      <DailyMenu />
      <Footer />
    </div>
  );
}

export default App;
