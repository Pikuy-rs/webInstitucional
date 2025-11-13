
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Step: React.FC<{ number: string; title: string; children: React.ReactNode; isVisible: boolean; delay: number }> = ({ number, title, children, isVisible, delay }) => {
    return (
        <div className={`flex items-start space-x-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${delay}ms` }}>
            <div className="font-montserrat font-extrabold text-7xl md:text-8xl text-amber-400/30 -mt-2 select-none">
                {number}
            </div>
            <div>
                <h3 className="font-montserrat text-3xl font-bold uppercase text-white">{title}</h3>
                <p className="mt-2 text-slate-400 max-w-md">
                    {children}
                </p>
            </div>
        </div>
    );
};


const Game: React.FC = () => {
    const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

    return (
        <section id="game" className="bg-slate-800 py-20 md:py-32" ref={ref}>
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className={`font-montserrat text-4xl md:text-5xl font-extrabold uppercase text-white leading-tight mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            ¡TU PRONÓSTICO ES SU FUTURO!
                            <br />
                            <span className="text-amber-400">JUGÁ, GANÁ Y AYUDÁ.</span>
                        </h2>
                        <div className="grid grid-cols-1 gap-8">
                           <Step number="1" title="Comprá tu entrada" isVisible={isVisible} delay={300}>
                               Adquirí tu ticket digital de forma segura y rápida a través de nuestra plataforma. Cada compra es un aporte directo al futuro de nuestros chicos.
                           </Step>
                           <Step number="2" title="Accedé a la App" isVisible={isVisible} delay={500}>
                               Con tu entrada, obtenés acceso exclusivo a nuestra aplicación. Disponible para todos los dispositivos.
                           </Step>
                           <Step number="3" title="Cargá tu jugada" isVisible={isVisible} delay={700}>
                               Dentro de la app, registrá tu jugada para el próximo sorteo. ¡Mucha suerte!
                           </Step>
                        </div>
                        <div className={`mt-10 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                          <a href="https://web-institucional-zyqe.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-500 text-white font-bold py-4 px-10 rounded-md hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                            ACCEDER A LA APP Y JUGÁ AHORA
                          </a>
                        </div>
                    </div>
                    <div className={`flex justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                        <div className="relative flex items-center -space-x-20">
                            <img 
                                src="https://i.ibb.co/yF0NdWCR/Whats-App-Image-2025-11-12-at-11-11-13.jpg"
                                alt="App screen showing match list"
                                className="relative z-0 max-w-[180px] sm:max-w-[220px] lg:max-w-xs w-full rounded-2xl shadow-2xl transform -rotate-6 transition-transform duration-500 hover:scale-105 hover:-rotate-8"
                            />
                            <img
                                src="https://i.ibb.co/pvy3Nq8c/Whats-App-Image-2025-11-12-at-11-12-17.jpg"
                                alt="App screen showing match details"
                                className="relative z-10 max-w-[180px] sm:max-w-[220px] lg:max-w-xs w-full rounded-2xl shadow-2xl transform rotate-6 transition-transform duration-500 hover:scale-105 hover:rotate-8"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Game;