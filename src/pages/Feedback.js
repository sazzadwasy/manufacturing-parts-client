import React from 'react';

const Feedback = () => {
    return (
        <div>
            <h2 className='py-10 text-5xl text-center text-cyan-900 font-bold'>Feedback</h2>
            <div class="hero h-auto bg-green-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-4xl font-bold">Give us your openion</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class="card flex-shrink-0 max-w-lg shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <input type="text" placeholder="Your name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <input type="text" placeholder="Your email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <textarea type="text" placeholder="Feedback" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-success">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;