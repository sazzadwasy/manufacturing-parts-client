import React from 'react';
import portfolioImg from '../../images/portfolio.jpg'

const Myportfolio = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={portfolioImg} alt="" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold text-cyan-900">Sazzad Hossain</h1>
                    <p class="py-3 text-xl font-bold">Email : sazzad.wasy@gmail.com</p>
                    <p class="py-3 text-xl font-bold">Skills : Html,CSS,Javascript,React.js,Node.js</p>
                    <p class="py-3 text-xl font-bold">Education : HSC Student Mostofa Hakim Degree College</p>
                    <p class="py-3 text-xl font-bold">Locaion : Saraipara Pahartali,Chattogram</p>
                    <a className='text-xl block mt-4' href='https://rainbow-khapse-ca051f.netlify.app/'>Dental website</a>
                    <a className='text-xl block mt-4' href='https://delightful-conkies-093666.netlify.app/'>Bike Inventory</a>
                    <a className='text-xl block mt-4' href='https://spiffy-lolly-46b881.netlify.app/'>Car website</a>
                </div>
            </div>
        </div>
    );
};

export default Myportfolio;