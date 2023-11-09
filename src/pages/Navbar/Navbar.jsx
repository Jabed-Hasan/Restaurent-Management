import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';




const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }


    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
                console.log(menuRef.current);
            }
        };

        document.addEventListener("mousedown", handler);


        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });




    const Navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/All-Foods'>All Food Items</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
        <li><NavLink to='/About'>About</NavLink></li>





    </>
    return (
        <div className='px-10'>
            <div className="navbar bg-base-100 items-center flex flex-col md:flex-row lg:flex-row">
                <div className="navbar-start ">
                    <img className='h-[100px] w-[280px]' src="https://i.ibb.co/kQGdtkr/Screenshot-136.png" alt="" />
                </div>
                <div className="navbar-center">
                    <ul className="menu md:menu-horizontal lg:menu-horizontal ">
                        {Navlinks}
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-5">

                    {user ? (
                        <div className='flex items-center border-2 border-solid border-orange-500 pl-1 rounded-[50px]'>
                            <h1 className='font-bold text-sm lg:text-lg'>{user?.displayName}</h1>

                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn m-1 btn-ghost btn-circle avatar border-2 border-solid border-black ">
                                    <button><img className="w-14 rounded-full border-orange-100" src={user?.photoURL} alt="User Avatar" /></button>
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 my-2 shadow bg-base-100 rounded-box sm:w-48 md:w-52 lg:w-56">

                                    {user?.email ? (
                                        <>
                                            <li><Link to='/AddFood'>Add Food Items</Link></li>
                                            <li><Link to='/myItems'>My Added Food Items</Link></li>
                                            <li><Link to='/Carts'>My Ordered Items</Link></li>
                                            <button onClick={handleSignOut} className="btn bg-orange-400 text-white hover:text-black text-sm md:text-base lg:text-sm">Sign Out</button>
                                        </>
                                    ) : (
                                        <li className=' '> </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="btn bg-orange-400 text-white hover:text-black text-sm md:text-base lg:text-sm">Login</button>
                        </Link>
                    )}

                </div>


            </div>
        </div>
    );
};

export default Navbar;