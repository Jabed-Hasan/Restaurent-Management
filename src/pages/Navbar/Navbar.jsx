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
                <div className="navbar-end gap-5">

                    {
                        user ?
                            <>
                                <h1 className='font-bold'>{user?.displayName}</h1>


                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn m-1 btn-ghost btn-circle avatar border-2 border-solid border-black "><button><img className="w-14 rounded-full border-orange-100" src={user?.photoURL} /></button></label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 my-2 shadow bg-base-100 rounded-box w-52">

                                        {user?.email ?
                                            <>
                                                <li><Link to='/AddFood'>Add Food Items</Link></li>
                                                <li><Link to='/myItems'>My Added Food Items</Link></li>
                                                <li><Link to='/Carts'>My Orderd Items</Link></li>
                                                <button onClick={handleSignOut} className="btn bg-orange-400 text-white hover:text-black">Sign Out</button>
                                            </> :
                                            <li className=' '> </li>}
                                    </ul>
                                </div>


                               
                            </>
                            :
                            <Link to="/login">

                                <button className="btn bg-orange-400 text-white hover:text-black">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;