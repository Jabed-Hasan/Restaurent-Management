import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar/Navbar';

const Root = () => {
    // Add smooth scrolling to the entire document
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        
        return () => {
            document.documentElement.style.scrollBehavior = '';
        };
    }, []);
    
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            
            {/* Main content area with padding top to account for fixed navbar */}
            <main className="flex-grow pt-28 md:pt-32">
                <Outlet />
            </main>
        </div>
    );
};

export default Root;