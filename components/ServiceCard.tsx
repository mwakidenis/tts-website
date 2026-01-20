import React from 'react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
    service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
        <div className="bg-white border border-slate-200 rounded-3xl p-8 transition-all duration-300 hover:border-electric/30 hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05)] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] flex flex-col h-full">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-${service.color}/10 text-${service.color} ${service.color === 'emerald-600' ? 'bg-emerald-50 text-emerald-600' : ''} ${service.color === 'indigo-600' ? 'bg-indigo-50 text-indigo-600' : ''} ${service.color === 'rose-600' ? 'bg-rose-50 text-rose-600' : ''}`}>
                <span className="material-symbols-outlined">{service.icon}</span>
            </div>
            <h3 className="text-2xl font-extrabold text-navy mb-4">{service.title}</h3>
            <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                Strategic solutions designed to empower and streamline your specialized operational needs.
            </p>
            <ul className="space-y-3 pt-6 border-t border-slate-100">
                {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                        <span className="material-symbols-outlined text-lg text-electric">check_circle</span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceCard;