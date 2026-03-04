import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import PortfolioGrid from '../components/home/Portfolio'; // Reusing for now

const OurWork = () => {
    return (
        <div className="bg-hero-black min-h-screen">
            <PageHeader
                title={<>OUR <span className="text-hero-neon">WORK</span></>}
                subtitle="A showcase of our best real estate projects and digital transformations."
            />

            <PortfolioGrid />

            {/* Additional grid for 'full' portfolio page would go here */}
        </div>
    );
};

export default OurWork;
