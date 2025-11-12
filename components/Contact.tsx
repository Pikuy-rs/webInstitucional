
import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons';

const Contact: React.FC = () => {
    const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Mensaje enviado!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <footer id="app" className="bg-slate-900 text-white pt-20 md:pt-24" ref={ref}>
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="font-montserrat font-extrabold text-5xl md:text-6xl uppercase leading-tight">
                            Sumate al
                            <br/>
                            Cambio
                        </h2>
                    </div>
                    <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h3 className="font-montserrat font-bold text-xl mb-4">CONTACTO</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-slate-400 text-sm mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-slate-400 text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    placeholder='itmail'
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-slate-400 text-sm mb-1">Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-emerald-500 text-white font-bold py-3 px-6 rounded-md hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105">
                                ENVIAR
                            </button>
                        </form>
                         <div className="mt-8 flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors"><FacebookIcon className="w-6 h-6" /></a>
                            <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors"><InstagramIcon className="w-6 h-6" /></a>
                            <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors"><TwitterIcon className="w-6 h-6" /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
                    <p>&copy; 2024 Asociación Sueños Tucumanos | Política de Privacidad</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
