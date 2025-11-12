import React from 'react';
import { FootballIcon, BookIcon, CommunityIcon } from './icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

const MissionPillar: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode, delay: number, isVisible: boolean }> = ({ icon, title, children, delay, isVisible }) => {
    return (
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${delay}ms` }}>
            <div className="flex items-center justify-center mx-auto w-24 h-24 mb-6 rounded-full border-4 border-amber-400/50 text-amber-400">
                {icon}
            </div>
            <h3 className="font-montserrat text-2xl font-bold uppercase text-white">{title}</h3>
            <p className="mt-2 text-slate-400 max-w-xs mx-auto">
                {children}
            </p>
        </div>
    );
};

const Mission: React.FC = () => {
    const { ref: refMission, isVisible: isVisibleMission } = useScrollReveal<HTMLDivElement>();
    const { ref: refApp, isVisible: isVisibleApp } = useScrollReveal<HTMLDivElement>();

    return (
        <section id="mission" className="bg-slate-900 py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div ref={refMission}>
                    <h2 className={`font-montserrat text-center text-4xl md:text-5xl font-extrabold uppercase text-white transition-opacity duration-1000 ${isVisibleMission ? 'opacity-100' : 'opacity-0'}`}>
                        Nuestra Misión
                    </h2>
                    <div className="mt-16 grid md:grid-cols-3 gap-12">
                        <MissionPillar icon={<FootballIcon className="w-12 h-12" />} title="Deporte" delay={200} isVisible={isVisibleMission}>
                            Desarrollamos el semillero del oncenio minore et aetas scaevolae atomus.
                        </MissionPillar>
                        <MissionPillar icon={<BookIcon className="w-12 h-12" />} title="Educación" delay={400} isVisible={isVisibleMission}>
                            Construimos el semillero del oncenio et aetas scaevolae atomus.
                        </MissionPillar>
                        <MissionPillar icon={<CommunityIcon className="w-12 h-12" />} title="Comunidad" delay={600} isVisible={isVisibleMission}>
                           Fomentamos los valores cívicos y el compañerismo.
                        </MissionPillar>
                    </div>
                </div>

                <div id="game" ref={refApp} className="mt-24 md:mt-32 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    <div className={`lg:w-1/2 text-center lg:text-left transition-all duration-700 ${isVisibleApp ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <h2 className="font-montserrat text-4xl md:text-6xl font-extrabold uppercase text-white leading-tight">
                             1. Participá
                            <span className="block text-amber-400">Y Ganá</span>
                        </h2>
                    </div>
                    <div className={`lg:w-1/2 flex justify-center items-end gap-4 transition-all duration-700 delay-300 ${isVisibleApp ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="relative">
                           <img src="https://advisoccer.com/wp-content/uploads/2023/10/faseddd.jpg" alt="Niño corriendo con la pelota en un partido" className="rounded-3xl shadow-2xl transform -rotate-6" />
                        </div>
                        <div className="relative">
                            <img src="https://www.shutterstock.com/image-photo/soccer-camp-kids-boys-practice-260nw-1325637668.jpg" alt="Niños entrenando en un campamento de fútbol" className="rounded-3xl shadow-2xl transform rotate-3" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;