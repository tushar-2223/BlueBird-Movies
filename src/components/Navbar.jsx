import React, { useState, useContext } from "react";
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";
import Contextpage from '../Contextpage';
import { motion } from "framer-motion";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import User from '../assets/images/User.jpg';
import { auth } from '../../firebase';
import { toast } from "react-toastify";

function Navbar() {

    const { header, user } = useContext(Contextpage);
    const [activemobile, setActivemobile] = useState(false);

    // console.log(user)
    const Navdata = [
        {
            id: 1,
            headername: "Genres",
            Name: "Genres",
            link : "/"
        },
        {
            id: 2,
            headername: "Trending Movies",
            Name: "Trending",
            link:"/trending"
        },
        {
            id: 3,
            headername: "Upcoming Movies",
            Name: "Upcoming",
            link:"/upcoming"
        },
        {
            id: 4,
            headername: "Favorite Movies",
            Name: "Favorites",
            link:"/favorite"
        }
    ]

    return (
        <>
            {/* mobilebutton */}
            <button className="z-40 text-3xl text-black fixed right-0 bottom-0 m-6 p-4 duration-150 rounded-full active:scale-90 bg-white block md:hidden" onClick={() => setActivemobile(!activemobile)}>
                {activemobile ? <HiX /> : <HiMenuAlt1 />}
            </button>

            <nav className={`${activemobile ? 'block' : 'hidden'} fixed bg-black/90 md:bg-black h-full w-full md:w-[15rem] z-30 md:block`}>
                <motion.div
                    animate={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Link to="/" className="logo flex flex-col justify-center items-center m-7 gap-2" onClick={() => setActivemobile(!activemobile)}>
                        <img src={logo} alt="logo" className="w-24" />
                        <h1 className="text-gray-400/70 font-bold text-2xl text-center">BlueBird Movies</h1>
                    </Link>
                </motion.div>


                <ul className="text-white font-semibold text-[16px] text-center px-5">
                    {Navdata.map((data) => (
                            <Link key={data.id} to={data.link}><li className={`${header == data.headername ? 'bg-blue-500/20 border-blue-600 text-white' : 'bg-gray-500/20 border-black'} p-2 my-2  hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600`} onClick={() => setActivemobile(!activemobile)}>{data.Name}</li></Link>
                    ))}

                </ul>

                {/* Loginsection */}

                <div className="absolute bottom-0 w-full p-5 md:p-2 text-white">
                    {user ? <>
                        <div className="w-full bg-gray-900 px-5 py-2 gap-4 rounded-xl flex items-center font-semibold border-2 border-blue-100/10">
                            <img src={user.photoURL == null ? User : user.photoURL} alt="user" className="h-10 rounded-full" />
                            <h1>{user.displayName}</h1>
                        </div>

                        <div className="cursor-pointer bg-red-500 flex justify-center items-center p-2 rounded-xl mt-2" onClick={() => auth.signOut(toast.error("Logout successfully"))}>
                            <h1>Logout</h1>
                        </div>
                    </>
                        :
                        <>
                            <Link to="/login" className="w-full bg-gray-900 py-2 gap-4 rounded-xl flex items-center justify-center font-semibold border-2 border-blue-100/10" onClick={() => setActivemobile(!activemobile)}>
                                <h1>Log in</h1>
                            </Link>
                        </>
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar
