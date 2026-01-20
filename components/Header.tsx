import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [mobileMenuOpen]);

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <header className={`fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[1200px] z-50 transition-all duration-300 rounded-3xl ${scrolled ? 'glass-header py-3' : 'bg-white/80 backdrop-blur-md border border-white/50 shadow-sm py-4'} px-4 md:px-8 flex items-center justify-between`}>
                <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
                    <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center border border-white/10 shadow-lg group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-white text-xl">grid_view</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-extrabold text-navy tracking-tight text-sm leading-none uppercase">TTS</span>
                        <span className="font-extrabold text-navy tracking-tight text-sm leading-none uppercase">Victory</span>
                    </div>
                </div>
                
                <nav className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link 
                            key={link.path}
                            to={link.path} 
                            className={`text-xs font-bold uppercase tracking-widest transition-all ${
                                isActive(link.path) 
                                ? 'text-electric underline decoration-2 underline-offset-8' 
                                : 'text-slate-500 hover:text-navy'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                
                <div className="flex items-center gap-4">
                    <Link to="/contact" className="hidden sm:flex bg-navy text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest items-center gap-2 hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-navy/20">
                        Contact Now
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>

                    <button 
                        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-navy hover:bg-electric hover:text-white transition-colors"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Backdrop */}
            <div 
                className={`fixed inset-0 bg-navy/60 backdrop-blur-sm z-[60] transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-0 right-0 bottom-0 w-[85vw] max-w-[360px] bg-white/95 backdrop-blur-xl z-[70] shadow-2xl transform transition-transform duration-300 ease-out lg:hidden border-l border-white/50 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full p-6">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-sm">grid_view</span>
                            </div>
                            <span className="font-extrabold text-navy tracking-tight text-sm uppercase">TTS Victory</span>
                        </div>
                        
                        <button 
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-rose-50 hover:text-rose-500 transition-colors"
                            aria-label="Close menu"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    <nav className="flex-1 overflow-y-auto space-y-2 py-4">
                        {NAV_LINKS.map((link) => (
                            <Link 
                                key={link.path}
                                to={link.path} 
                                className={`block px-5 py-4 rounded-2xl text-base font-bold transition-all flex items-center justify-between group ${
                                    isActive(link.path) 
                                    ? 'bg-electric/10 text-electric' 
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-navy'
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                                <span className={`material-symbols-outlined text-xl transition-transform duration-300 ${isActive(link.path) ? 'text-electric' : 'text-slate-300 group-hover:translate-x-1'}`}>
                                    chevron_right
                                </span>
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto pt-8 border-t border-slate-100 space-y-4">
                        <Link 
                            to="/contact" 
                            className="flex items-center justify-center gap-2 w-full bg-navy text-white p-4 rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-navy/20 active:scale-[0.98] transition-all"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact Now
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                        
                        <div className="grid grid-cols-2 gap-3">
                            <a href="tel:+6073338888" className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-100">
                                <span className="material-symbols-outlined mb-1">call</span>
                                <span className="text-[10px] font-bold uppercase">Call Us</span>
                            </a>
                            <a href="mailto:solutions@ttsvictory.com.my" className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 text-slate-600 hover:bg-amber-50 hover:text-amber-600 transition-colors border border-slate-100">
                                <span className="material-symbols-outlined mb-1">mail</span>
                                <span className="text-[10px] font-bold uppercase">Email Us</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;