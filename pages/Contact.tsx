import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

interface FormState {
    fullName: string;
    companyName: string;
    projectDetails: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormState>({
        fullName: '',
        companyName: '',
        projectDetails: ''
    });

    const [touched, setTouched] = useState<{ [key in keyof FormState]: boolean }>({
        fullName: false,
        companyName: false,
        projectDetails: false
    });

    const [errors, setErrors] = useState<{ [key in keyof FormState]: string }>({
        fullName: '',
        companyName: '',
        projectDetails: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateField = (name: keyof FormState, value: string): string => {
        switch (name) {
            case 'fullName':
                if (!value.trim()) return 'Full name is required';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                return '';
            case 'companyName':
                if (!value.trim()) return 'Company name is required';
                return '';
            case 'projectDetails':
                if (!value.trim()) return 'Project details are required';
                if (value.trim().length < 10) return 'Please provide more detail (min. 10 chars)';
                return '';
            default:
                return '';
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        if (touched[name as keyof FormState]) {
            setErrors(prev => ({
                ...prev,
                [name]: validateField(name as keyof FormState, value)
            }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setErrors(prev => ({
            ...prev,
            [name]: validateField(name as keyof FormState, value)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const newErrors = {
            fullName: validateField('fullName', formData.fullName),
            companyName: validateField('companyName', formData.companyName),
            projectDetails: validateField('projectDetails', formData.projectDetails)
        };

        setErrors(newErrors);
        setTouched({ fullName: true, companyName: true, projectDetails: true });

        if (!Object.values(newErrors).some(err => err !== '')) {
            setIsSubmitting(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitSuccess(true);
            setIsSubmitting(false);
            setFormData({ fullName: '', companyName: '', projectDetails: '' });
            setTouched({ fullName: false, companyName: false, projectDetails: false });
            
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        }
    };

    const getInputClass = (fieldName: keyof FormState) => {
        const baseClass = "w-full rounded-2xl px-5 py-4 outline-none font-bold text-navy placeholder-slate-300 transition-all duration-300 border";
        if (touched[fieldName] && errors[fieldName]) {
            return `${baseClass} bg-rose-50 border-rose-200 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10`;
        }
        return `${baseClass} bg-slate-50 border-slate-200 focus:bg-white focus:border-electric focus:ring-4 focus:ring-electric/10`;
    };

    return (
        <main className="pt-28 pb-24">
            <section className="px-6 lg:px-12 mb-16 animate-fade-in">
                <div className="max-w-7xl mx-auto h-[450px] rounded-[3rem] overflow-hidden border border-slate-200 relative shadow-2xl group">
                    <iframe 
                        title="HQ Map"
                        allowFullScreen
                        className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-1000" 
                        loading="lazy" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.16890986751!2d103.6669911961427!3d1.5274112674984244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da12bb260f8453%3A0x600b396e9527f5a4!2sJohor%20Bahru%2C%20Johor!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
                    ></iframe>
                    <div className="absolute top-8 left-8">
                        <div className="glass-card px-6 py-4 rounded-2xl">
                            <h2 className="text-navy font-extrabold tracking-tight">Johor Bahru HQ</h2>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Operational Hub</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-7xl mx-auto">
                <div className="lg:col-span-5 space-y-6">
                    <div className="mb-10">
                        <h1 className="text-5xl font-extrabold text-navy leading-tight tracking-tight mb-4">
                            Let's build your <span className="text-electric">winning team</span>.
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Reach out to our specialist consultants for a dedicated manpower strategy tailored to your industry requirements.
                        </p>
                    </div>
                    {CONTACT_INFO.map((info, i) => (
                        <div key={i} className="glass-card p-8 rounded-3xl flex items-start gap-6 hover:translate-y-[-4px] transition-all cursor-default">
                            <div className={`w-14 h-14 bg-${info.color}-50 rounded-2xl flex items-center justify-center text-electric shrink-0 ${info.color === 'amber' ? 'bg-amber-50' : ''} ${info.color === 'slate' ? 'bg-slate-50' : ''}`}>
                                <span className="material-symbols-outlined text-3xl">{info.icon}</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-extrabold text-navy mb-1">{info.title}</h3>
                                {info.lines.map((line, j) => <p key={j} className="font-bold text-navy">{line}</p>)}
                                {info.sub && <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">{info.sub}</p>}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="lg:col-span-7">
                    <div className="bg-white p-10 lg:p-14 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-electric/5 rounded-full -mr-20 -mt-20"></div>
                        
                        {submitSuccess ? (
                            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in-up">
                                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                                </div>
                                <h3 className="text-3xl font-extrabold text-navy mb-4">Message Sent!</h3>
                                <p className="text-slate-500 max-w-md">Thank you for contacting TTS Victory. Our consultants have received your inquiry and will respond within 24 hours.</p>
                                <button 
                                    onClick={() => setSubmitSuccess(false)}
                                    className="mt-8 text-electric font-bold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form className="relative z-10 space-y-8" onSubmit={handleSubmit} noValidate>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-baseline">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                            {touched.fullName && errors.fullName && (
                                                <span className="text-xs font-bold text-rose-500 animate-fade-in">{errors.fullName}</span>
                                            )}
                                        </div>
                                        <input 
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={getInputClass('fullName')}
                                            placeholder="Johnathan Doe" 
                                            type="text"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-baseline">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Company Name</label>
                                            {touched.companyName && errors.companyName && (
                                                <span className="text-xs font-bold text-rose-500 animate-fade-in">{errors.companyName}</span>
                                            )}
                                        </div>
                                        <input 
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={getInputClass('companyName')}
                                            placeholder="Global Logistics Sdn Bhd" 
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-baseline">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Project Details</label>
                                        {touched.projectDetails && errors.projectDetails && (
                                            <span className="text-xs font-bold text-rose-500 animate-fade-in">{errors.projectDetails}</span>
                                        )}
                                    </div>
                                    <textarea 
                                        name="projectDetails"
                                        value={formData.projectDetails}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={getInputClass('projectDetails')}
                                        placeholder="Describe your requirements..." 
                                        rows={5}
                                    ></textarea>
                                </div>
                                <button 
                                    disabled={isSubmitting}
                                    className="w-full bg-navy text-white px-12 py-5 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 group active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Submit Inquiry
                                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;