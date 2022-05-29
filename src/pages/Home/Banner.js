import React from 'react';
import banner from '../../images/banner.jpg'
const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{ background: `url(${banner})`, width: '100' }}>
                <div class="hero-overlay bg-opacity-30"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Wasys Menufacturer <br /> Website</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;