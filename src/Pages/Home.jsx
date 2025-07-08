import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";

const Home = () => {

    const [loggedInUser, setLoggedInUser] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("loggedInUserEmail");
        if (user) {
            setLoggedInUser(user);
            setIsLoggedIn(true);
        } else {
            setLoggedInUser('');
            setIsLoggedIn(false);
        }
    },)


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className=" flex flex-col items-center justify-center backdrop-blur-sm border border-gray-300 p-10 rounded-lg shadow-lg ">
                <h1 className="text-2xl p-4">
                    Welcome to Mutualy
                </h1>
                <p className='text-gray-500 mb-6'>
                    Login to Get Mutual Funds
                </p>
                {!isLoggedIn ? (
                    <div className="flex gap-5 items-center justify-center">
                        <Link to="/login"
                              className="btn bg-black/30 px-4 py-2 rounded-lg hover:shadow-blue-300 shadow-md transition duration-200 hover:bg-black/80 text-white">
                            Sign In
                        </Link>
                        <Link to="/register"
                              className="btn bg-black/30 px-4 py-2 rounded-lg hover:shadow-blue-300 shadow-md hover:bg-black/80 text-white transition duration-200">
                            Sing Up
                        </Link>
                    </div>

                ) : (
                    <div className='flex flex-col gap-5'>
                        <Link to='/dashboard' className="p-2 rounded-lg bg-blue-500/50">{loggedInUser}</Link>
                    </div>
                )

                }
            </div>
        </div>
    )
}
export default Home
