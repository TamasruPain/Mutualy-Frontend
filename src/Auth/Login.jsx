import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import {ToastSuccess, ToastError} from "../utils.js";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = userData;

        if (!email || !password) {
            return ToastError("Please fill all the fields");
        }

        try {
            const response = await axios.post('http://localhost:8000/api/auth/signin', {
                email,
                password
            });
            const {success, message, error, jwtToken, name, userid} = response.data;

            if (success) {
                localStorage.setItem("token", jwtToken);
                localStorage.setItem("loggedInUserID", userid);
                localStorage.setItem("loggedInUserName", name);
                localStorage.setItem("loggedInUserEmail", email);
                ToastSuccess(message);
                navigate('/dashboard');
            } else if (error) {
                const errorDetail = error?.details?.[0]?.message || message || "Signup failed";
                ToastError(errorDetail);
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
            const errMsg = error.response?.data?.error?.details?.[0]?.message
                || error.response?.data?.message
                || "Something went wrong";
            ToastError(errMsg);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen p-6">
            <div
                className='flex flex-col gap-8 rounded-lg p-5 bg-gray-600/10 hover:shadow-blue-300 shadow-md transition-all duration-500'>
                <label className='text-2xl font-bold'>Login</label>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={userData.email}
                            onChange={(e) => setUserData({...userData, email: e.target.value})}
                            className="border border-gray-300 bg-white/50 rounded p-2 w-full"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type='password'
                            value={userData.password}
                            onChange={(e) => setUserData({...userData, password: e.target.value})}
                            className="border border-gray-300 bg-white/50 rounded p-2 w-full"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            type='submit'
                            className="btn bg-black/30 px-4 py-2 rounded-lg hover:shadow-green-500 shadow-md transition duration-200 hover:bg-black/80 text-white w-full">
                            Login
                        </button>
                    </div>
                </form>
                <div className='flex items-center justify-center'>
                    <p className=''>Don't have an account? <Link to={'/register'} className="text-blue-400">Sign
                        Up!!</Link></p>
                </div>
            </div>

        </div>
    )
}
export default Login
