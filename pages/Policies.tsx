import React from 'react';
import { POLICIES_LIST } from '../constants';

const Policies: React.FC = () => {
    return (
        <main className="pt-48 pb-20">
            <section className="px-6 lg:px-12 text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm mb-8">
                    <span className="material-symbols-outlined text-electric text-sm">verified</span>
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Governance & Ethics</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-extrabold text-navy leading-tight mb-6">Corporate Policies & <span className="text-electric">Compliance</span></h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                    At TTS VICTORY (M) SDN BHD, our commitment to operational excellence is anchored in a robust framework of integrity, safety, and accountability.
                </p>
                <button className="bg-navy text-white px-8 py-4 rounded-full font-bold text-base flex items-center gap-3 mx-auto hover:opacity-90 transition-all shadow-xl hover:-translate-y-1">
                    <span className="material-symbols-outlined">download</span>
                    Download Management Manual
                </button>
            </section>
            <section className="px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {POLICIES_LIST.map((policy, i) => (
                    <article 
                        key={i} 
                        className="bg-white p-10 rounded-3xl border border-slate-200 group hover:border-electric hover:shadow-2xl transition-all duration-300 animate-fade-in-up opacity-0"
                        style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'forwards' }}
                    >
                        <div className="flex items-start justify-between mb-8">
                            <div className={`w-16 h-16 bg-${policy.color}/10 rounded-2xl flex items-center justify-center text-${policy.color} ${policy.color === 'rose-500' ? 'bg-rose-50 text-rose-500' : ''}`}>
                                <span className="material-symbols-outlined text-3xl">{policy.icon}</span>
                            </div>
                            <span className="material-symbols-outlined text-slate-300 group-hover:text-electric transition-colors">verified_user</span>
                        </div>
                        <h2 className="text-2xl font-extrabold text-navy mb-4">{policy.title}</h2>
                        <p className="text-slate-500 leading-relaxed mb-6">{policy.text}</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                                <span className="material-symbols-outlined text-emerald-500 text-lg">check_circle</span>
                                Strict Regulatory Compliance
                            </li>
                            <li className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                                <span className="material-symbols-outlined text-emerald-500 text-lg">check_circle</span>
                                Regular Audit Protocols
                            </li>
                        </ul>
                    </article>
                ))}
            </section>
        </main>
    );
};

export default Policies;