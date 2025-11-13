
import React, { useState, useEffect } from 'react';
import { LogoIcon } from './icons';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-sm shadow-lg' : 'bg-slate-900'}`}>
            <div className="container mx-auto px-6 py-3">
                <nav className="flex items-center justify-between">
                    <a href="#hero" className="flex items-center">
                        <LogoIcon />
                    </a>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#mission" className="text-white hover:text-emerald-400 transition-colors duration-300 font-semibold tracking-wider">MISIÓN</a>
                        <a href="#game" className="text-white hover:text-emerald-400 transition-colors duration-300 font-semibold tracking-wider">EL JUEGO</a>
                        <a href="#team" className="text-white hover:text-emerald-400 transition-colors duration-300 font-semibold tracking-wider">EQUIPO</a>
                        <a href="#contact" className="text-white hover:text-emerald-400 transition-colors duration-300 font-semibold tracking-wider">CONTACTO</a>
                    </div>
                    <a href="https://ai.studio/apps/drive/1hO_7cHQdJtGpCdNBKQVndm5ZQ0kwn7gg" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-white font-bold py-2 px-6 rounded-md hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-md">
                        TUCUGOL
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;