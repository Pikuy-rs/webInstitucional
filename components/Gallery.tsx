
import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CloseIcon } from './icons';

interface GalleryItem {
    id: number;
    type: 'image' | 'video';
    src: string;
    alt: string;
    poster?: string;
}

const galleryItems: GalleryItem[] = [
    { id: 1, type: 'image', src: 'https://www.clarin.com/2025/05/02/1PCvwCyOr_2000x1500__1.jpg', alt: 'Niños en un partido de fútbol infantil' },
    { id: 2, type: 'image', src: 'https://www.shutterstock.com/image-photo/soccer-camp-kids-boys-practice-260nw-1325637668.jpg', alt: 'Entrenamiento de fútbol para niños' },
    { id: 3, type: 'video', src: 'https://videos.pexels.com/video-files/852413/852413-hd_1280_720_25fps.mp4', poster: 'https://images.pexels.com/videos/852413/pexels-photo-852413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'Video de niños jugando al fútbol' },
    { id: 4, type: 'image', src: 'https://advisoccer.com/wp-content/uploads/2023/10/faseddd.jpg', alt: 'Niño corriendo con la pelota en un campo de césped' },
    { id: 5, type: 'image', src: 'https://fefi.com.ar/wp-content/uploads/2014/10/principios-tecnicos-entrenamiento-futbol-infantil.png.webp', alt: 'Varios niños disputando la pelota en un entrenamiento' },
    { id: 6, type: 'image', src: 'https://superiorcads.edu.ar/imgd/planificacion-curso-webinar-futbol-infantiles-juveniles-2-146999.jpg', alt: 'Niños escuchando a su entrenador de fútbol' },
];

const Gallery: React.FC = () => {
    const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setSelectedItem(null);
            }
        };
        
        if (selectedItem) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedItem]);


    return (
        <>
            <section id="impacto" className="bg-slate-900 py-20 md:py-32" ref={ref}>
                <div className="container mx-auto px-6">
                    <h2 className={`font-montserrat text-center text-4xl md:text-5xl font-extrabold uppercase text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Nuestro Impacto en Acción
                    </h2>
                    <p className={`mt-4 text-center text-slate-400 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Cada jugada, cada aporte, se convierte en una oportunidad. Así transformamos el futuro del fútbol infantil en Tucumán.
                    </p>
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer group shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                                style={{ transitionDelay: `${100 + index * 100}ms` }}
                                onClick={() => setSelectedItem(item)}
                            >
                                <img src={item.type === 'video' ? item.poster : item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                                    <div className={`w-16 h-16 bg-emerald-500/80 rounded-full flex items-center justify-center transition-transform duration-300 ${item.type === 'image' && 'scale-0 group-hover:scale-100'}`}>
                                        {item.type === 'video' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedItem && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
                    onClick={() => setSelectedItem(null)}
                >
                    <style>{`.animate-fade-in { animation: fadeIn 0.3s ease-out; } @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
                    <button
                        className="absolute top-4 right-4 text-white hover:text-emerald-400 z-10"
                        aria-label="Cerrar"
                        onClick={() => setSelectedItem(null)}
                    >
                        <CloseIcon className="w-10 h-10" />
                    </button>
                    <div className="relative p-4 w-full max-w-4xl h-auto" onClick={(e) => e.stopPropagation()}>
                        {selectedItem.type === 'image' ? (
                             <img src={selectedItem.src} alt={selectedItem.alt} className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl" />
                        ) : (
                            <video 
                                src={selectedItem.src} 
                                poster={selectedItem.poster} 
                                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl" 
                                controls 
                                autoPlay
                                loop
                            >
                                Tu navegador no soporta el tag de video.
                            </video>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;