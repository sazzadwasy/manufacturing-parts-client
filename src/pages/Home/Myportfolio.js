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
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Myportfolio;