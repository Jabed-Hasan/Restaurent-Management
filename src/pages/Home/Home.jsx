import React from 'react';

import { NavLink, useLoaderData } from 'react-router-dom';

import Footer from '../footer/Footer';
import Banner from '../Banner/Banner';
import HomeCard from './HomeCard';



const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <div className='py-10 px-10 text-center'>
                <div>
                    <hr>
                    </hr><div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                    {/* {

                        data.map(adata => <HomeCard key={adata} data={adata}></HomeCard>)
                    } */}


                </div>

                    
                    <h1 className='font-bold text-center text-5xl my-7'> Top Selling Foods </h1>
                    <hr></hr>
                    <ul><li className='btn bg-orange-400 text-white hover:text-black'><NavLink to='/All-Foods'>See All Foods</NavLink></li></ul>
                </div>
    
            </div>
            <div>
                <h1 className='text-5xl font-bold text-center my-20'>Our Spacial Offers</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 px-5 '>
                
                <img className='w-[400px] h-[530px]' src="https://i.ibb.co/RzCQ2gR/food-offer-flyer-template-design-c7f960c9f75026a96b348df1189c2a8a-screen.jpg" alt="" />
                <img className='w-[400px] h-[530px]' src="https://i.ibb.co/cN1PfNL/Screenshot-149.png" alt="" />
                <img className='w-[400px] h-[530px]' src="https://i.ibb.co/cN1PfNL/Screenshot-149.png" alt="" />
            </div>
            </div>
            <div className='mb-20 mt-20'>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/YBQpWCB/Screenshot-126.png)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5 text-2xl">"Grave your Food , Now!"</p>
                                <button className="btn btn-primary bg-orange-500">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>

                

            <Footer></Footer>
        </div>
    );
};

export default Home;  