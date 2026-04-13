import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import PortfolioGrid from '../components/home/Portfolio'; // Reusing for now

const OurWork = () => {
    return (
        <div className="bg-hero-black min-h-screen">
            <PageHeader
                title={<>PROJECTS</>}
                subtitle="A showcase of the real estate projects we have marketed and sold."
            />

            <PortfolioGrid />

            {/* Additional grid for 'full' portfolio page would go here */}
        </div>
    );
};

export default OurWork;
