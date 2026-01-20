import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { HERO_STATS, COMPETENCIES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    return (
        <main>
            <section className="min-h-[80vh] lg:min-h-screen flex items-center px-6 lg:px-12 pt-32 lg:pt-40 pb-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
                            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Premium Manpower Solutions</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-navy leading-[1.05] tracking-tight">
                            Orchestrating <span className="text-electric">Human Capital</span> at Scale.
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                            TTS VICTORY (M) SDN BHD delivers specialized workforce management and strategic outsourcing for industrial, corporate, and technical sectors.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            <button onClick={() => navigate('/contact')} className="bg-electric text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-electric/30 transition-all active:scale-95">
                                Get Consultation
                            </button>
                            <button onClick={() => navigate('/projects')} className="bg-white text-navy border border-slate-200 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all active:scale-95">
                                View Case Studies
                            </button>
                        </div>
                    </div>
                    <div className="relative hidden md:block">
                        <div className="relative z-10 space-y-4 max-w-lg mx-auto lg:max-w-none">
                            <div className="ui-stack-card bg-white p-6 rounded-3xl flex items-center gap-6 lg:translate-x-12 hover:translate-x-0 transition-transform duration-700">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-electric">
                                    <span className="material-symbols-outlined">monitoring</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy">Workforce Analytics</h4>
                                    <p className="text-sm text-slate-500">Real-time placement monitoring</p>
                                </div>
                                <div className="ml-auto text-emerald-500 font-bold">+12.5%</div>
                            </div>
                            <div className="ui-stack-card bg-navy p-6 rounded-3xl flex items-center gap-6 lg:hover:-translate-x-4 transition-transform duration-700 border-white/10">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white">
                                    <span className="material-symbols-outlined">verified_user</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-white">Compliance Shield</h4>
                                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-2">
                                        <div className="bg-electric h-full rounded-full w-[95%]"></div>
                                    </div>
                                </div>
                                <span className="text-white/50 text-xs font-bold uppercase">ISO Certified</span>
                            </div>
                            <div className="ui-stack-card bg-white p-2 rounded-3xl lg:translate-x-8 hover:translate-x-0 transition-transform duration-700">
                                <img alt="Workforce" className="w-full h-48 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPAOrcxihtkrgd6_dV-xPMBQPcuXnKBjXcWVDsdHwBfjXjBzA9DRTDHmky0Hw86-F_72QIlLg_z4C8ux8mQbX9tu12J3SRZXLTjAApUDMp1p5ifdfqw8llCT4GmHtAzKlcrIagpgWrPkCNcG2MMHdwRmOzNUAXUw8sGPImOrYMrxKOVXupvwkyD_NAUxiIQfHMxh-pY166HWK8FSNJBzBMd0tDlcY7-SaOUfcretlJecaYYwdwCQK6TS5sU0G842OnFBBtKFDib8sE"/>
                            </div>
                        </div>
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </section>
            
            <section className="px-6 lg:px-12 py-12">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                    {HERO_STATS.map((stat, i) => (
                        <div key={i} className={`${stat.isDark ? 'bg-navy border-white/10' : 'bg-white border-slate-100'} border p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group`}>
                            <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${stat.isDark ? 'text-white/40' : 'text-slate-400'}`}>{stat.label}</p>
                            <h3 className={`text-4xl font-extrabold transition-colors ${stat.isDark ? 'text-white' : 'text-navy group-hover:text-electric'}`}>{stat.value}</h3>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-6 lg:px-12 py-32 bg-white/40 border-t border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
                        <div>
                            <h2 className="text-4xl font-extrabold text-navy mb-4">Strategic Competencies</h2>
                            <p className="text-slate-500 text-lg">Comprehensive solutions for the modern industrial age.</p>
                        </div>
                        <Link to="/services" className="text-navy font-bold flex items-center gap-2 hover:gap-4 transition-all self-start md:self-auto group">
                            All Services <span className="material-symbols-outlined group-hover:text-electric transition-colors">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {COMPETENCIES.map((item, i) => (
                            <div key={i} className="flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group">
                                <div className="p-8 border-b border-slate-50">
                                    <div className={`w-14 h-14 bg-${item.color}/10 rounded-2xl flex items-center justify-center text-${item.color} mb-6 group-hover:bg-electric group-hover:text-white transition-all`}>
                                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-extrabold text-navy">{item.title}</h3>
                                </div>
                                <div className="p-8 flex-1">
                                    <p className="text-slate-500 leading-relaxed">{item.text}</p>
                                </div>
                                <div className="p-8 bg-slate-50/50 flex items-center justify-between">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{item.step}</span>
                                    <span className="material-symbols-outlined text-slate-300 group-hover:text-electric transition-colors">north_east</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-navy py-32 px-6 lg:px-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                     <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                     <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electric/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                            <span className="material-symbols-outlined text-electric text-sm">format_quote</span>
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Client Success Stories</span>
                        </div>
                        <h2 className="text-4xl font-extrabold text-white">Trusted by Industry Leaders</h2>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden">
                            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                                {TESTIMONIALS.map((item, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-4">
                                        <div className="flex flex-col items-center text-center">
                                            <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-10 italic opacity-90">
                                                "{item.quote}"
                                            </p>
                                            <div className="flex flex-col items-center">
                                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric to-blue-600 flex items-center justify-center text-white text-xl font-bold mb-4 shadow-lg shadow-electric/30">
                                                    {item.author.charAt(0)}
                                                </div>
                                                <h4 className="text-xl font-bold text-white mb-1">{item.author}</h4>
                                                <p className="text-slate-400 font-medium">{item.position}, <span className="text-electric">{item.company}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Controls */}
                        <button 
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden lg:flex w-12 h-12 rounded-full border border-white/20 items-center justify-center text-white hover:bg-white hover:text-navy transition-all"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button 
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden lg:flex w-12 h-12 rounded-full border border-white/20 items-center justify-center text-white hover:bg-white hover:text-navy transition-all"
                        >
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-3 mt-12">
                        {TESTIMONIALS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentTestimonial(i)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentTestimonial ? 'bg-electric w-8' : 'bg-white/20 hover:bg-white/40'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;