import React, { useState, useEffect, useRef } from 'react';
import { JOB_LIST, BENEFITS_LIST } from '../constants';

const getColorClasses = (color: string) => {
    switch (color) {
        case 'electric': return 'bg-electric/10 text-electric';
        case 'amber': return 'bg-amber/10 text-amber';
        case 'rose-500': return 'bg-rose-500/10 text-rose-500';
        case 'emerald-500': return 'bg-emerald-500/10 text-emerald-500';
        default: return 'bg-slate-100 text-slate-600';
    }
};

const BenefitCard: React.FC<{ benefit: typeof BENEFITS_LIST[0] }> = ({ benefit }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [hasSeen, setHasSeen] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasSeen) {
                    setHasSeen(true);
                    setIsAnimating(true);
                }
            },
            { threshold: 0.5 }
        );
        if (elementRef.current) observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, [hasSeen]);

    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => setIsAnimating(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    return (
        <div ref={elementRef} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${getColorClasses(benefit.color)} ${isAnimating ? 'animate-bounce' : 'group-hover:scale-110'}`}>
                <span className="material-symbols-outlined text-3xl">{benefit.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{benefit.text}</p>
        </div>
    );
};

const Careers: React.FC = () => {
    // Apply Button State
    const [applyingJobIndex, setApplyingJobIndex] = useState<number | null>(null);

    // General Application Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null as File | null
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    
    // Validation State
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        phone: false,
        resume: false
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        resume: ''
    });

    const validateField = (name: string, value: any) => {
        switch (name) {
            case 'name':
                if (!value || !value.trim()) return 'Full Name is required';
                if (value.trim().length < 3) return 'Name must be at least 3 characters';
                return '';
            case 'email':
                if (!value || !value.trim()) return 'Email Address is required';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
                return '';
            case 'phone':
                if (!value || !value.trim()) return 'Phone Number is required';
                if (!/^[\d\s\-\+\(\)]{8,}$/.test(value)) return 'Please enter a valid phone number';
                return '';
            case 'resume':
                if (!value) return 'Please upload your resume';
                return '';
            default:
                return '';
        }
    };

    const handleApplyClick = (index: number) => {
        setApplyingJobIndex(index);
        setTimeout(() => setApplyingJobIndex(null), 3000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        
        if (name === 'resume' && files) {
            const file = files[0];
            setFormData(prev => ({ ...prev, resume: file }));
            if (touched.resume) {
                 setErrors(prev => ({ ...prev, resume: validateField('resume', file) }));
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
            if (touched[name as keyof typeof touched]) {
                 setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
            }
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        
        const valueToCheck = name === 'resume' ? formData.resume : value;
        setErrors(prev => ({
            ...prev,
            [name]: validateField(name, valueToCheck)
        }));
    };

    const handleGeneralSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validate all fields
        const newErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            phone: validateField('phone', formData.phone),
            resume: validateField('resume', formData.resume),
        };

        setErrors(newErrors);
        setTouched({
            name: true,
            email: true,
            phone: true,
            resume: true
        });

        const hasErrors = Object.values(newErrors).some(err => err !== '');
        if (hasErrors) return;

        setFormStatus('submitting');
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        setFormStatus('success');
        // Reset form after delay
        setTimeout(() => {
            setFormStatus('idle');
            setFormData({ name: '', email: '', phone: '', resume: null });
            setTouched({ name: false, email: false, phone: false, resume: false });
            setErrors({ name: '', email: '', phone: '', resume: '' });
        }, 5000);
    };

    const getInputClass = (fieldName: keyof typeof errors) => {
        const base = "w-full bg-slate-50 border rounded-xl px-5 py-3 font-bold text-navy outline-none transition-all";
        if (touched[fieldName] && errors[fieldName]) {
            return `${base} border-rose-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10`;
        }
        return `${base} border-slate-200 focus:bg-white focus:border-electric focus:ring-4 focus:ring-electric/10`;
    };

    return (
        <main className="pt-48 pb-24">
            {/* Hero Section */}
            <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-24 animate-fade-in-up">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
                        <span className="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
                        <span className="text-[10px] font-black text-electric uppercase tracking-[0.2em]">We Are Hiring</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-navy tracking-tight mb-8">
                        Build Your Future with <br/><span className="text-electric">TTS Victory.</span>
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed mb-10">
                        Join a dynamic team dedicated to reshaping the workforce landscape. We are looking for passionate individuals ready to make an impact.
                    </p>
                    <a href="#openings" className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-full font-bold text-base hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        View Open Positions
                        <span className="material-symbols-outlined text-lg">arrow_downward</span>
                    </a>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {BENEFITS_LIST.map((benefit, i) => (
                        <BenefitCard key={i} benefit={benefit} />
                    ))}
                </div>
            </section>

            {/* Job Listings Section */}
            <section id="openings" className="bg-slate-50 py-24 px-6 lg:px-12 border-t border-slate-200">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-navy mb-12 text-center">Current Opportunities</h2>
                    
                    <div className="space-y-6 mb-24">
                        {JOB_LIST.map((job, i) => (
                            <div 
                                key={i} 
                                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-electric/50 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6 md:items-center justify-between animate-fade-in-up"
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                <div className="flex-grow">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <h3 className="text-2xl font-bold text-navy">{job.title}</h3>
                                        <span className="bg-electric/10 text-electric text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{job.type}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-medium mb-4">
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-lg">location_on</span>
                                            {job.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-lg">domain</span>
                                            {job.department}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-lg">schedule</span>
                                            {job.posted}
                                        </span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed max-w-2xl">{job.description}</p>
                                </div>
                                <div className="shrink-0">
                                    <a 
                                        href={`mailto:careers@ttsvictory.com.my?subject=Application for ${job.title}`}
                                        onClick={() => handleApplyClick(i)}
                                        className={`inline-flex items-center justify-center w-full md:w-auto px-6 py-3 border-2 font-bold rounded-xl transition-all duration-300 active:scale-95 min-w-[140px] ${
                                            applyingJobIndex === i 
                                            ? 'bg-emerald-50 border-emerald-500 text-emerald-600' 
                                            : 'bg-white border-slate-100 text-navy hover:bg-navy hover:text-white hover:border-navy'
                                        }`}
                                    >
                                        {applyingJobIndex === i ? (
                                            <>
                                                <span className="material-symbols-outlined text-lg animate-spin mr-2">refresh</span>
                                                Opening...
                                            </>
                                        ) : (
                                            'Apply Now'
                                        )}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* General Application Form */}
                    <div className="bg-white rounded-[3rem] p-10 lg:p-14 border border-slate-200 shadow-xl relative overflow-hidden animate-fade-in-up">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-electric to-blue-400"></div>
                        <div className="max-w-3xl mx-auto">
                             <div className="text-center mb-12">
                                <h3 className="text-3xl font-extrabold text-navy mb-4">General Application</h3>
                                <p className="text-slate-500">
                                    Don't see a perfect fit? Submit your profile and we will contact you when a suitable position opens up.
                                </p>
                            </div>

                            {formStatus === 'success' ? (
                                <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-12 text-center animate-scale-in">
                                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                                        <span className="material-symbols-outlined text-4xl">check_circle</span>
                                    </div>
                                    <h4 className="text-2xl font-bold text-navy mb-2">Application Received!</h4>
                                    <p className="text-slate-600">Your profile has been added to our talent pool.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleGeneralSubmit} className="space-y-6" noValidate>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-baseline">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                                {touched.name && errors.name && (
                                                    <span className="text-xs font-bold text-rose-500 animate-fade-in">{errors.name}</span>
                                                )}
                                            </div>
                                            <input 
                                                required
                                                type="text" 
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                className={getInputClass('name')}
                                                placeholder="Jane Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-baseline">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                                {touched.email && errors.email && (
                                                    <span className="text-xs font-bold text-rose-500 animate-fade-in">{errors.email}</span>
                                                )}
                                            </div>
                                            <input 
                                                required
                                                type="email" 
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                className={getInputClass('email')}
                                                placeholder="jane@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-baseline">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                                                {touched.phone && errors.phone && (
                                                    <span className="text-xs font-bold text-rose-500 animate-fade-in">{errors.phone}</span>
                                                )}
                                            </div>
                                            <input 
                                                required
                                                type="tel" 
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                className={getInputClass('phone')}
                                                placeholder="+60 12-345 6789"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-baseline">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Resume / CV</label>
                                                {touched.resume && errors.resume && (
                                                    <span className="text-xs font-bold text-rose-500 animate-fade-in">{errors.resume}</span>
                                                )}
                                            </div>
                                            <div className="relative">
                                                <input 
                                                    required
                                                    type="file" 
                                                    name="resume"
                                                    onChange={handleInputChange}
                                                    onBlur={handleBlur}
                                                    accept=".pdf,.doc,.docx"
                                                    className={`w-full bg-slate-50 border rounded-xl px-5 py-3 font-medium text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-navy file:text-white hover:file:bg-electric transition-all cursor-pointer ${
                                                        touched.resume && errors.resume 
                                                        ? 'border-rose-300' 
                                                        : 'border-slate-200'
                                                    }`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <button 
                                            disabled={formStatus === 'submitting'}
                                            type="submit"
                                            className="w-full bg-electric text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-electric/30 hover:-translate-y-1 transition-all disabled:opacity-70 disabled:transform-none flex items-center justify-center gap-2"
                                        >
                                            {formStatus === 'submitting' ? (
                                                <>
                                                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    Submit Application
                                                    <span className="material-symbols-outlined">send</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Careers;