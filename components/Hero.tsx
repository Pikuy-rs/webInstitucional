import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('https://www.clarin.com/2025/05/02/1PCvwCyOr_2000x1500__1.jpg')" }}>
      <div className="absolute inset-0 bg-slate-900/70"></div>
      <div ref={ref} className="relative z-10 p-6">
        <h1 className={`font-montserrat font-extrabold text-5xl md:text-7xl lg:text-8xl uppercase tracking-wider transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Raíces Fuertes,
          <br/>
          Sueños Grandes
        </h1>
        <p className={`mt-4 text-lg md:text-xl max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Fomentamos el deporte, construimos el futuro.
        </p>
        <div className={`mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href="#mission" className="bg-emerald-500 text-white font-bold py-3 px-8 rounded-md hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
            CONOCÉ MÁS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;