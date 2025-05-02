import { Helmet } from "react-helmet";
import Footer from "../footer/Footer";

const Blogs = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blogs - Restika Restaurant</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
                        Restika Food Blog
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-white text-center">
                        Culinary insights, cooking tips, and food stories from our kitchen
                    </p>
                </div>
            </div>
            
            {/* Blog Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                {/* Blog Post 1 */}
                <div className="mb-16">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img className="h-48 w-full object-cover md:h-full md:w-64" 
                                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    alt="Food plating" />
                            </div>
                            <div className="p-6 md:p-8">
                                <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full mb-2">
                                    Culinary Arts
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    The Art of Food Plating: Presentation Tips from Our Chefs
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Food presentation is just as important as taste when it comes to creating a memorable dining experience. At Restika, our chefs follow these key principles to create visually stunning dishes.
                                </p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-400">
                                        <h3 className="font-semibold text-gray-800">Balance and Proportion</h3>
                                        <p className="text-sm text-gray-600">The arrangement of food elements should create visual harmony.</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-400">
                                        <h3 className="font-semibold text-gray-800">Color Contrast</h3>
                                        <p className="text-sm text-gray-600">We use natural colors from fresh ingredients to create vibrant plates.</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-400">
                                        <h3 className="font-semibold text-gray-800">Texture Variation</h3>
                                        <p className="text-sm text-gray-600">Mixing crispy, smooth, and crunchy elements adds dimension to dishes.</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-400">
                                        <h3 className="font-semibold text-gray-800">Height and Layering</h3>
                                        <p className="text-sm text-gray-600">Building vertical elements creates drama on the plate.</p>
                                    </div>
                                </div>
                                
                                <p className="italic text-gray-600">
                                    The next time you dine at Restika, take a moment to appreciate the artistry behind each plate before enjoying the flavors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Blog Post 2 */}
                <div className="mb-16">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                        <div className="md:flex flex-row-reverse">
                            <div className="md:flex-shrink-0">
                                <img className="h-48 w-full object-cover md:h-full md:w-64" 
                                    src="https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    alt="Global flavors" />
                            </div>
                            <div className="p-6 md:p-8">
                                <span className="inline-block px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full mb-2">
                                    Global Cuisine
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Exploring the Global Flavors at Restika
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    At Restika, our menu celebrates the diversity of global cuisine, bringing together flavors from around the world. Here's a journey through some of the culinary traditions that inspire our dishes.
                                </p>
                                
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start">
                                        <span className="text-2xl text-orange-500 mr-3">🌊</span>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Mediterranean Magic</h3>
                                            <p className="text-sm text-gray-600">Our Mediterranean-inspired dishes feature olive oil, fresh herbs, tomatoes, and seafood.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-2xl text-orange-500 mr-3">🍜</span>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Asian Influences</h3>
                                            <p className="text-sm text-gray-600">From the spicy curries of Thailand to the umami-rich dishes of Japan.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-2xl text-orange-500 mr-3">🌮</span>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Latin American Flair</h3>
                                            <p className="text-sm text-gray-600">The vibrant cuisines of Mexico, Peru, and Brazil inspire several of our signature dishes.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <p className="italic text-gray-600">
                                    This fusion of global techniques and flavors with the finest local ingredients creates the unique dining experience that Restika is known for.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Blog Post 3 */}
                <div className="mb-16">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img className="h-48 w-full object-cover md:h-full md:w-64" 
                                    src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    alt="Seasonal ingredients" />
                            </div>
                            <div className="p-6 md:p-8">
                                <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-2">
                                    Seasonal Cooking
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Seasonal Ingredients: Why We Change Our Menu
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    At Restika, we believe in embracing the natural cycle of seasons in our menu. Here's why we're committed to seasonal cooking and how it enhances your dining experience.
                                </p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 bg-gray-50 rounded-lg flex flex-col items-center text-center">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                                            <span role="img" aria-label="leaf" className="text-xl">🍃</span>
                                        </div>
                                        <h3 className="font-semibold text-gray-800">Peak Flavor and Nutrition</h3>
                                        <p className="text-sm text-gray-600">Fruits and vegetables harvested at their peak season naturally taste better.</p>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-lg flex flex-col items-center text-center">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                                            <span role="img" aria-label="earth" className="text-xl">🌍</span>
                                        </div>
                                        <h3 className="font-semibold text-gray-800">Environmental Benefits</h3>
                                        <p className="text-sm text-gray-600">Seasonal eating reduces the carbon footprint of food transportation.</p>
                                    </div>
                                </div>
                                
                                <p className="italic text-gray-600">
                                    We invite you to join us throughout the year to experience the ever-changing tapestry of flavors that seasonal cooking provides.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Newsletter Section */}
                <div className="bg-orange-50 rounded-lg p-8 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Stay Updated with Restika's Food Journey
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Subscribe to our newsletter for the latest culinary insights, special offers, and upcoming events.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            />
                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default Blogs;