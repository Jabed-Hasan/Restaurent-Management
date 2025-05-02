import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../footer/Footer';

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us - Restika Restaurant</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
                        Contact Restika
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-white text-center">
                        We'd love to hear from you. Reach out for reservations, feedback, or inquiries
                    </p>
                </div>
            </div>

            {/* Contact Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                        
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input 
                                        type="text" 
                                        id="firstName" 
                                        className="px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="Your first name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        className="px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="Your last name"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    className="px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for Contact</label>
                                <select 
                                    id="reason" 
                                    className="px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                >
                                    <option value="">Select a reason</option>
                                    <option value="reservation">Reservation</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="catering">Catering Inquiry</option>
                                    <option value="career">Career Opportunity</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea 
                                    id="message" 
                                    rows="5" 
                                    className="px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    placeholder="Let us know how we can help you..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                            
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
                                        <p className="mt-1 text-gray-600">
                                            123 Gourmet Avenue<br />
                                            Foodie District<br />
                                            New York, NY 10001
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                                        <p className="mt-1 text-gray-600">
                                            Reservations: +1 (555) 123-4567<br />
                                            Takeout: +1 (555) 987-6543<br />
                                            General: +1 (555) 345-6789
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                                        <p className="mt-1 text-gray-600">
                                            Reservations: reservations@restika.com<br />
                                            Catering: catering@restika.com<br />
                                            General: info@restika.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-900">Hours of Operation</h3>
                                        <p className="mt-1 text-gray-600">
                                            Monday - Friday: 11:00 AM - 10:00 PM<br />
                                            Saturday - Sunday: 10:00 AM - 11:00 PM<br />
                                            Holiday hours may vary
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
                            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-inner">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215284853642!2d-73.99773228459364!3d40.75899997932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25853a27e85d3%3A0x35c428f0d6db5c15!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1669654985816!5m2!1sen!2sus"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Restaurant Location"
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16 bg-white rounded-lg shadow-lg p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    
                    <div className="space-y-4">
                        <div className="border-b border-gray-200 pb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Do I need to make reservations?</h3>
                            <p className="mt-2 text-gray-600">
                                While walk-ins are welcome, we recommend making reservations, especially for dinner service and weekends. You can make reservations by phone or through our online booking system.
                            </p>
                        </div>
                        
                        <div className="border-b border-gray-200 pb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Do you accommodate dietary restrictions?</h3>
                            <p className="mt-2 text-gray-600">
                                Yes, we offer vegetarian, vegan, and gluten-free options. Please inform us of any allergies or dietary restrictions when making your reservation or placing an order.
                            </p>
                        </div>
                        
                        <div className="border-b border-gray-200 pb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Do you offer catering services?</h3>
                            <p className="mt-2 text-gray-600">
                                Yes, we provide catering for events of all sizes. Please contact our catering team at catering@restika.com or call our catering line for more information and to discuss your specific needs.
                            </p>
                        </div>
                        
                        <div className="border-b border-gray-200 pb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Is there parking available?</h3>
                            <p className="mt-2 text-gray-600">
                                We offer valet parking during dinner service, and there is a public parking garage located one block away. Street parking is also available, but can be limited during peak hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact; 