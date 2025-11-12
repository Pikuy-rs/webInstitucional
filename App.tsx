
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Transparency from './components/Transparency';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 text-slate-800">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Transparency />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
};

export default App;
