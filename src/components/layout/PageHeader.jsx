import React from 'react';

const PageHeader = ({ title, subtitle }) => {
    return (
        <div className="pt-32 pb-16 bg-hero-black text-center px-4">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tight">
                {title}
            </h1>
            {subtitle && (
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default PageHeader;
