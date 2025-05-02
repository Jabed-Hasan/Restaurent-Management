import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="relative">
            {/* Main Banner Image */}
            <div className="relative">
                <img 
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover" 
                    src="https://i.ibb.co/zrmqGG7/Screenshot-138.png" 
                    alt="Restika Restaurant" 
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                
                {/* Banner Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                            Exquisite Dishes for <br className="hidden md:block" />
                            Unforgettable Moments
                        </h1>
                        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
                            Experience the finest flavors crafted with passion by our award-winning chefs
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link 
                                to="/All-Foods"
                                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition duration-300 transform hover:-translate-y-1"
                            >
                                View Menu
                            </Link>
                            <Link 
                                to="/contact"
                                className="px-8 py-3 bg-white hover:bg-gray-100 text-orange-500 font-medium rounded-md transition duration-300 transform hover:-translate-y-1"
                            >
                                Make Reservation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Highlight Bar */}
            <div className="bg-white shadow-lg py-4 px-4 rounded-lg mx-4 md:mx-16 lg:mx-32 -mt-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-around">
                    <div className="flex items-center mb-4 md:mb-0">
                        <div className="text-orange-500 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
                            <p className="text-sm text-gray-600">Within 30 minutes</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center mb-4 md:mb-0">
                        <div className="text-orange-500 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">Top Quality</h3>
                            <p className="text-sm text-gray-600">Premium ingredients</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center">
                        <div className="text-orange-500 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">Special Offers</h3>
                            <p className="text-sm text-gray-600">Discounts & promos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;