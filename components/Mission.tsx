
import React from 'react';
import { FootballIcon, BookIcon, CommunityIcon } from './icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

const MissionPillar: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode, delay: number, isVisible: boolean }> = ({ icon, title, children, delay, isVisible }) => {
    return (
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${delay}ms` }}>
            <div className="flex items-center justify-center mx-auto w-24 h-24 mb-6 rounded-full border-4 border-emerald-500/30 text-emerald-500">
                {icon}
            </div>
            <h3 className="font-montserrat text-2xl font-bold uppercase text-slate-800">{title}</h3>
            <p className="mt-2 text-slate-600 max-w-xs mx-auto">
                {children}
            </p>
        </div>
    );
};

const Mission: React.FC = () => {
    const { ref: refMission, isVisible: isVisibleMission } = useScrollReveal<HTMLDivElement>();

    return (
        <section id="mission" className="bg-gray-100 py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div ref={refMission}>
                    <h2 className={`font-montserrat text-center text-4xl md:text-5xl font-extrabold uppercase text-slate-800 transition-opacity duration-1000 ${isVisibleMission ? 'opacity-100' : 'opacity-0'}`}>
                        NUESTRA MISIÓN: EL CORAZÓN DEL FÚTBOL TUCUMANO
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
            </div>
        </section>
    );
};

export default Mission;