import React from 'react';

const About: React.FC = () => {
    return (
        <main className="pt-48 pb-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-electric"></span>
                            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Established 2015</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-navy leading-[1.1] tracking-tight">
                            Our Story: Building <span className="text-electric">Excellence</span> in Johor.
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Founded in the heart of Johor Bahru, TTS VICTORY (M) SDN BHD began with a singular vision: to bridge the gap between industrial potential and human talent. Today, we stand as a premier manpower solution partner, managing thousands of professionals across Malaysia's most critical sectors.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Our journey is defined by a relentless pursuit of operational integrity and the belief that the right placement can transform an entire organization.
                        </p>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-electric/20 to-amber/10 blur-2xl rounded-[3rem] opacity-50 group-hover:opacity-70 transition-opacity"></div>
                        <img alt="HQ" className="relative rounded-[2.5rem] w-full aspect-[4/3] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPAOrcxihtkrgd6_dV-xPMBQPcuXnKBjXcWVDsdHwBfjXjBzA9DRTDHmky0Hw86-F_72QIlLg_z4C8ux8mQbX9tu12J3SRZXLTjAApUDMp1p5ifdfqw8llCT4GmHtAzKlcrIagpgWrPkCNcG2MMHdwRmOzNUAXUw8sGPImOrYMrxKOVXupvwkyD_NAUxiIQfHMxh-pY166HWK8FSNJBzBMd0tDlcY7-SaOUfcretlJecaYYwdwCQK6TS5sU0G842OnFBBtKFDib8sE"/>
                        <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl border border-white/40">
                            <p className="text-xs font-bold text-navy/40 uppercase tracking-widest mb-1">Headquarters</p>
                            <p className="text-navy font-extrabold">Johor Bahru Central Business District</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-32">
                <div className="glass-card p-12 rounded-[3rem] relative overflow-hidden group border border-slate-200 bg-white/50 hover:bg-white transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-electric/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                    <div className="w-16 h-16 bg-electric/10 rounded-2xl flex items-center justify-center text-electric mb-8 group-hover:rotate-12 transition-transform">
                        <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-navy mb-6">Our Mission</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        To empower enterprises by delivering seamless, high-quality manpower management and strategic outsourcing solutions that drive productivity, safety, and sustainable growth.
                    </p>
                </div>
                <div className="glass-card p-12 rounded-[3rem] relative overflow-hidden group border border-slate-200 bg-white/50 hover:bg-white transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                    <div className="w-16 h-16 bg-amber/10 rounded-2xl flex items-center justify-center text-amber mb-8 group-hover:rotate-12 transition-transform">
                        <span className="material-symbols-outlined text-3xl">visibility</span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-navy mb-6">Our Vision</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        To be the foremost orchestrator of human capital in Southeast Asia, recognized for setting the gold standard in industrial compliance and workforce innovation.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default About;