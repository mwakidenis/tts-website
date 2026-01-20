import React, { useState } from 'react';
import { PROJECTS_LIST } from '../constants';

const FILTERS = ['All Projects', 'Data Centres', 'Construction', 'MEP & Engineering', 'Corporate'];

const Projects: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All Projects');

    const filteredProjects = activeFilter === 'All Projects' 
        ? PROJECTS_LIST 
        : PROJECTS_LIST.filter(p => p.tag === activeFilter);

    return (
        <main className="pt-48 pb-24">
            <section className="px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="mb-16 text-center lg:text-left animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Global Track Record</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-navy leading-tight mb-6">Proven Excellence in <br/><span className="text-electric">Manpower Delivery.</span></h1>
                    <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
                        A comprehensive gallery of our major placements and project management successes across diverse industrial sectors.
                    </p>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    {FILTERS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2.5 rounded-full border text-sm font-bold transition-all cursor-pointer ${
                                activeFilter === filter 
                                ? 'bg-navy text-white border-navy shadow-lg shadow-navy/20' 
                                : 'bg-white border-slate-200 text-slate-500 hover:border-navy hover:text-navy'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((proj, i) => (
                        <div 
                            key={i} 
                            className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up opacity-0"
                            style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img 
                                    alt={proj.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                    src={proj.image}
                                />
                                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-${proj.color}/90 text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-1 backdrop-blur-md shadow-lg`}>
                                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                    {proj.status}
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-electric">{proj.tag}</span>
                                    <span className="text-slate-400 text-xs font-medium">Ref: TVM-2024-0{i+1}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-2">{proj.title}</h3>
                                <p className="text-sm font-bold text-slate-600 mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">business</span>
                                    Client: {proj.client}
                                </p>
                                <div className="pt-6 border-t border-slate-50">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Scope of Work</p>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Comprehensive deployment and management of specialized personnel for mission-critical operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Projects;