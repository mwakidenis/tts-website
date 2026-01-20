import React from 'react';
import { SERVICES_LIST } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
    return (
        <main className="pt-48 pb-32">
            <section className="max-w-7xl mx-auto px-6 mb-24 text-center animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
                    <span className="w-2 h-2 rounded-full bg-electric"></span>
                    <span className="text-[10px] font-black text-electric uppercase tracking-[0.2em]">Our Expertise</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-navy tracking-tight mb-6">Our Workforce Services</h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Strategic manpower solutions designed to streamline operations and empower industrial growth across Malaysia.
                </p>
            </section>
            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES_LIST.map((svc, i) => (
                    <div 
                        key={i} 
                        className="animate-fade-in-up opacity-0" 
                        style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
                    >
                        <ServiceCard service={svc} />
                    </div>
                ))}
            </section>
        </main>
    );
};

export default Services;