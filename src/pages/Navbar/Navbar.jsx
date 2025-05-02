import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close mobile menu when clicking on a link
    const closeMenu = () => {
        if (isOpen) setIsOpen(false);
    };

    // Active link style
    const activeLink = "text-orange-500 font-bold";
    const normalLink = "text-gray-700 hover:text-orange-500 transition-colors duration-300";

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <img 
                                className="h-12 w-auto sm:h-16 md:h-20" 
                                src="https://i.ibb.co/kQGdtkr/Screenshot-136.png" 
                                alt="Restika Logo" 
                            />
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-6">
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => isActive ? activeLink : normalLink}
                                onClick={closeMenu}
                            >
                                Home
                            </NavLink>
                            <NavLink 
                                to="/All-Foods" 
                                className={({ isActive }) => isActive ? activeLink : normalLink}
                                onClick={closeMenu}
                            >
                                All Food Items
                            </NavLink>
                            <NavLink 
                                to="/blogs" 
                                className={({ isActive }) => isActive ? activeLink : normalLink}
                                onClick={closeMenu}
                            >
                                Blogs
                            </NavLink>
                            <NavLink 
                                to="/contact" 
                                className={({ isActive }) => isActive ? activeLink : normalLink}
                                onClick={closeMenu}
                            >
                                Contact
                            </NavLink>
                            <NavLink 
                                to="/About" 
                                className={({ isActive }) => isActive ? activeLink : normalLink}
                                onClick={closeMenu}
                            >
                                About
                            </NavLink>
                        </div>
                    </div>

                    {/* User profile & login button */}
                    <div className="flex items-center">
                        {user ? (
                            <div className="flex items-center">
                                <div className="hidden md:flex mr-4 text-sm font-medium text-gray-700">
                                    <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full border border-orange-200">
                                        {user?.displayName}
                                    </span>
                                </div>
                                <div className="relative">
                                    <div className="group">
                                        <button className="flex items-center focus:outline-none">
                                            <img 
                                                className="h-10 w-10 rounded-full object-cover border-2 border-orange-300 p-0.5" 
                                                src={user?.photoURL || "https://i.ibb.co/FXwM8Sm/user.png"} 
                                                alt="User avatar"
                                            />
                                            <svg className="ml-1 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg overflow-hidden invisible group-hover:visible transition-all duration-300 z-40">
                                            <div className="py-1">
                                                <Link 
                                                    to="/AddFood" 
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                                                >
                                                    Add Food Items
                                                </Link>
                                                <Link 
                                                    to="/myItems" 
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                                                >
                                                    My Added Food Items
                                                </Link>
                                                <Link 
                                                    to="/Carts" 
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                                                >
                                                    My Ordered Items
                                                </Link>
                                                <div className="border-t border-gray-100 my-1"></div>
                                                <button 
                                                    onClick={handleSignOut} 
                                                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                                >
                                                    Sign Out
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link 
                                to="/login" 
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 shadow-sm transition-all duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                Login
                            </Link>
                        )}

                        {/* Mobile menu button */}
                        <div className="ml-4 flex md:hidden">
                            <button 
                                onClick={toggleMenu}
                                type="button" 
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-orange-50 focus:outline-none transition duration-300"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            <div className={`md:hidden transition-all duration-300 ease-in-out transform ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-orange-50 ' + activeLink : normalLink}`
                        }
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/All-Foods" 
                        className={({ isActive }) => 
                            `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-orange-50 ' + activeLink : normalLink}`
                        }
                        onClick={closeMenu}
                    >
                        All Food Items
                    </NavLink>
                    <NavLink 
                        to="/blogs" 
                        className={({ isActive }) => 
                            `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-orange-50 ' + activeLink : normalLink}`
                        }
                        onClick={closeMenu}
                    >
                        Blogs
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => 
                            `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-orange-50 ' + activeLink : normalLink}`
                        }
                        onClick={closeMenu}
                    >
                        Contact
                    </NavLink>
                    <NavLink 
                        to="/About" 
                        className={({ isActive }) => 
                            `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-orange-50 ' + activeLink : normalLink}`
                        }
                        onClick={closeMenu}
                    >
                        About
                    </NavLink>

                    {/* Mobile user menu items */}
                    {user && (
                        <div className="pt-4 pb-3 border-t border-gray-200">
                            <div className="flex items-center px-5">
                                <div className="flex-shrink-0">
                                    <img 
                                        className="h-10 w-10 rounded-full" 
                                        src={user?.photoURL || "https://i.ibb.co/FXwM8Sm/user.png"} 
                                        alt="User avatar" 
                                    />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-gray-800">{user?.displayName}</div>
                                    <div className="text-sm font-medium text-gray-500">{user?.email}</div>
                                </div>
                            </div>
                            <div className="mt-3 space-y-1 px-2">
                                <Link 
                                    to="/AddFood" 
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                                    onClick={closeMenu}
                                >
                                    Add Food Items
                                </Link>
                                <Link 
                                    to="/myItems" 
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                                    onClick={closeMenu}
                                >
                                    My Added Food Items
                                </Link>
                                <Link 
                                    to="/Carts" 
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                                    onClick={closeMenu}
                                >
                                    My Ordered Items
                                </Link>
                                <button 
                                    onClick={() => {
                                        handleSignOut();
                                        closeMenu();
                                    }} 
                                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;