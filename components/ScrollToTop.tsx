import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-30 p-4 rounded-full bg-navy text-white shadow-2xl hover:bg-electric hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group border border-white/10 ${
                isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible'
            }`}
            aria-label="Scroll to top"
        >
            <span className="material-symbols-outlined text-xl group-hover:animate-bounce">arrow_upward</span>
        </button>
    );
};

export default ScrollToTop;