import React from 'react';
import factoryImg from '../../images/factory.jpg'

const Factory = () => {
    return (
        <div className='my-8'>
            <h1 class="text-5xl font-bold text-cyan-900 text-center mt-16">Our Factory</h1>
            <div class="hero mt-8">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={factoryImg} alt='' class="lg:max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-3xl font-bold mb-8">We make each and every parts<br /> with well experianced engineear</h1>
                        <p class="py-1">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi,Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-success bg-cyan-600 mt-5 text-white">Explore more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Factory;