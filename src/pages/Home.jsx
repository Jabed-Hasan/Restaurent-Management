import React from 'react';

import { useLoaderData } from 'react-router-dom';
import Brands from './Cards/Brands';
import Footer from './footer/Footer';
import Banner from './Banner/Banner';



const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <div className='py-10 px-10'>
                <div>
                    <hr>
                    </hr>
                    <h1 className='font-bold text-center text-5xl my-7'> Top Selling Foods </h1>
                    <hr></hr>
                </div>
              

                 <button className='btn flex flex-col items-center'>See All Foods</button>
              

            </div>
            <div className='mb-20 mt-20'>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/YBQpWCB/Screenshot-126.png)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">"Discover Unmatched Savings Today! Shop Now and Save Big!"</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>

                

            <Footer></Footer>
        </div>
    );
};

export default Home;