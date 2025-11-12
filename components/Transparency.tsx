
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProgressCircle: React.FC<{ percentage: number; isVisible: boolean }> = ({ percentage, isVisible }) => {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-52 h-52 md:w-60 md:h-60">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        <circle
          className="text-gray-200"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="100"
          cy="100"
        />
        <circle
          className="text-emerald-500"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="100"
          cy="100"
          strokeDasharray={circumference}
          strokeDashoffset={isVisible ? offset : circumference}
          transform="rotate(-90 100 100)"
          style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-montserrat text-5xl font-extrabold text-slate-800">{percentage}%</span>
      </div>
    </div>
  );
};

const TeamMember: React.FC<{ name: string; role: string; imgUrl: string; delay: number; isVisible: boolean }> = ({ name, role, imgUrl, delay, isVisible }) => {
    return (
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${delay}ms` }}>
            <img src={imgUrl} alt={name} className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-white shadow-lg" />
            <h4 className="mt-4 font-montserrat text-lg font-bold text-slate-800">{name}</h4>
            <p className="text-slate-500">{role}</p>
        </div>
    );
}

const Transparency: React.FC = () => {
    const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
    const team = [
        { name: 'Joel Flic', role: 'Presidente', img: 'https://picsum.photos/seed/joel/200' },
        { name: 'Tu Nombre', role: 'Presidente', img: 'https://picsum.photos/seed/nombre/200' },
        { name: 'Tu Nombre', role: 'Secretario de Tesorería', img: 'https://picsum.photos/seed/tesoreria/200' },
        { name: 'Maria Solano', role: 'Dir. Social', img: 'https://picsum.photos/seed/maria/200' },
    ];
    return (
        <section id="team" className="bg-gray-100 py-20 md:py-32" ref={ref}>
            <div className="container mx-auto px-6">
                <h2 className={`font-montserrat text-center text-4xl md:text-5xl font-extrabold uppercase text-slate-800 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    Transparencia y Autoridades
                </h2>
                <div className="mt-16 grid md:grid-cols-2 gap-16 items-center">
                    <div className={`flex flex-col items-center md:items-start text-center md:text-left transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                       <ProgressCircle percentage={70} isVisible={isVisible} />
                       <h3 className="mt-6 font-montserrat text-3xl font-bold text-slate-800">TU APORTE VUELVE AL CLUB</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                       {team.map((member, index) => (
                          <TeamMember key={index} {...member} imgUrl={member.img} delay={400 + index * 150} isVisible={isVisible}/>
                       ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Transparency;
