import React from 'react';

import { Link, NavLink, useLoaderData } from 'react-router-dom';

import Footer from '../footer/Footer';
import Banner from '../Banner/Banner';
import HomeCard from './HomeCard';



const Home = () => {
    const data = useLoaderData();
    const topSixData = data.slice(0, 6);
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <div>
            
            <div className='py-10 px-10 text-center'>
                <div>
                <h1 className='font-bold text-center text-xl lg:text-5xl my-7'> Top Selling Foods </h1>
                    <hr></hr>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                        {
                            topSixData.map(adata => <HomeCard key={adata} data={adata}></HomeCard>)
                        }
                    </div>
                    
                    <hr></hr>
                    <ul><li className='btn bg-orange-400 text-white hover:text-black my-5'><NavLink to='/All-Foods'>See All Foods</NavLink></li></ul>
                </div>
            </div>
                <h1 className='text-xl lg:text-5xl font-bold text-center my-20'>Our Spacial Offers</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 px-5 '>
                
                <img className='w-[400px] h-[530px]' src="https://i.ibb.co/RzCQ2gR/food-offer-flyer-template-design-c7f960c9f75026a96b348df1189c2a8a-screen.jpg" alt="" />
                <img className='w-[400px] h-[530px]' src="https://i.ibb.co/cN1PfNL/Screenshot-149.png" alt="" />
                <img className='w-[400px] h-[530px]' src="https://i.ibb.co/cN1PfNL/Screenshot-149.png" alt="" />
            </div>
            </div>
            <div className='mb-20 mt-20'>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/j5LwX2w/78762405-raw-chicken-fillet-with-cooking-ingredients-on-black-slate-table-food-background-long-banne.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5 text-2xl">"Eat gelato like there’s no tomorrow! Grave your Food , Now!"</p>
                               <Link to={'All-Foods'}> <button className="btn btn-primary bg-orange-500 border-none text-white">Get Started</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                

            <Footer></Footer>
        </div>
    );
};

export default Home;  