import React from 'react';
import banner from "../../../assets/images/banner/banner.jpg";

const Banner = () => {
    return (
        <section>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello World</h1>
                        <p className="mb-5">Studying abroad helps you to learn new languages, appreciate other cultures, overcome challenges of living in another country and gain a greater understanding of the world. These are all things that modern businesses look for when hiring, and such traits will only become more important in the future.</p>
                        <button className="btn btn-primary">
                            <a href='#countries'>Get Started</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;