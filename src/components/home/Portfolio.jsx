import React from 'react';

const projects = [
    {
        title: "Mahalakshmi Nagar",
        category: "Perambalur, Trichy",
        image: "/mahalakshmi nagar.jpg",
    },
    {
        title: "SMV Residential Plot",
        category: "Preangiyur, Villupuram",
        image: "/SMV Nagar.png",
    },
    {
        title: "JK Industrial Land",
        category: "Navamalkapper, Villupuram",
        image: "/JK Industrial Land.jpeg",
    },
    {
        title: "Golden City",
        category: "Kariyamanikkam, Trichy",
        image: "/Golden City.png",
    }
];

const Portfolio = () => {
    return (
        <section className="py-24 bg-hero-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            SELECTED <span className="text-hero-neon">WORK</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl">
                            Check out some of our recent projects. We take pride in delivering quality across every pixel.
                        </p>
                    </div>
                    <button className="hidden md:inline-flex items-center justify-center border border-white text-white px-8 py-3 font-display font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-colors">
                        View All Projects
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative overflow-hidden cursor-pointer">
                            <div className="aspect-[4/3] w-full overflow-hidden bg-gray-800">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                                <p className="text-hero-neon text-sm font-bold uppercase tracking-wider mb-2">{project.category}</p>
                                <h3 className="text-3xl font-display font-bold text-white">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="inline-flex items-center justify-center border border-white text-white px-8 py-3 font-display font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-colors">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
