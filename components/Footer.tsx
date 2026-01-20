import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="px-6 lg:px-12 py-12 border-t border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-sm font-medium text-slate-400 text-center md:text-left">
                    © 2024 TTS VICTORY (M) SDN BHD. Licensed under CIDB G5.
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {['Privacy Policy', 'Anti-Bribery Policy', 'Terms of Service'].map((text) => (
                        <a 
                            key={text}
                            className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-navy transition-colors" 
                            href="#"
                            onClick={(e) => e.preventDefault()}
                        >
                            {text}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;