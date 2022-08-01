import React from 'react';
import { CurrencyDollarIcon, UsersIcon, FlagIcon, ViewListIcon } from '@heroicons/react/solid'

const BusinessSummary = () => {
    return (
        <div className='my-8'>
            <h2 className='py-14 text-5xl text-center text-cyan-900 font-bold'>Business Summary</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div class="card md:max-w-md bg-base-100 shadow-xl">
                    <div class="card-body">

                        <p className='mx-auto'><FlagIcon className='w-24 text-orange-400'></FlagIcon></p>
                        <h2 class="text-4xl mx-auto mt-2">50+</h2>
                        <p className='text-2xl text-center text-cyan-900'>Countries</p>

                    </div>
                </div>
                <div class="card md:max-w-md bg-base-100 shadow-xl">
                    <div class="card-body">
                        <p className='mx-auto'><CurrencyDollarIcon className='w-24 text-orange-400'></CurrencyDollarIcon></p>
                        <h2 class="text-4xl mx-auto  mt-2">100 million+</h2>
                        <p className='text-2xl text-center text-cyan-900'>Import & Exports</p>

                    </div>
                </div>
                <div class="card md:max-w-md bg-base-100 shadow-xl">
                    <div class="card-body">
                        <p className='mx-auto'><UsersIcon className='w-24 text-orange-400'></UsersIcon></p>
                        <h2 class="text-4xl mx-auto  mt-2">5000+</h2>
                        <p className='text-2xl text-center text-cyan-900'>Happy Clients</p>

                    </div>
                </div>
                <div class="card md:max-w-md bg-base-100 shadow-xl">
                    <div class="card-body">
                        <p className='mx-auto'><ViewListIcon className='w-24 text-orange-400'></ViewListIcon></p>
                        <h2 class="text-4xl mx-auto  mt-2">1.2 million</h2>
                        <p className='text-2xl text-center text-cyan-900'>Visited</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummary;