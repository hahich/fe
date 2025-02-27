import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
// import AxiosToastError from '../utils/AxiosToastError';
import { Link, useNavigate } from 'react-router-dom';

const FotgotPassword = () => {
    const [data, setData] = useState({
        email: "",
    });

    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const validValue = Object.values(data).every(val => val !== "");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await Axios({
                ...SummaryApi.forgot_password,
                data: data
            })

            if (res.data.error) {
                toast.error(res.data.message);
            }
            if (res.data.success) {
                toast.success(res.data.message);
                localStorage.setItem('email', data.email);
                setData({
                    email: "",
                })
                navigate("/verify-forgot-password-otp")
            }

        } catch (error) {
            // AxiosToastError(error);
            console.error(error)
        }
    }

    return (
        <section className='w-full container mx-auto px-2'>
            <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7">
                <p className='text-4xl text-center font-bold'>Forgot Password</p>

                <form action="" className='grid gap-4 py-4' onSubmit={handleSubmit}>

                    <div className="grid gap-1">
                        <label htmlFor="email">Email :</label>
                        <input
                            type="email"
                            name="email"
                            id='email'
                            autoFocus
                            className='bg-blue-50 p-2 border outline-none focus-within:border-primary-200'
                            value={data.email}
                            onChange={handleChange}
                            placeholder='Enter Your Email'
                        />
                    </div>

                    <button disabled={!validValue} className={`${validValue ? "bg-green-700 hover:bg-green-800" : "bg-gray-500"}  text-white py-2 rounded font-semibold my-3 tracking-wide`}>Send OTP</button>
                </form>

                <div className="flex justify-between items-center mx-2">
                    <p>Already have account ? <Link to={"/login"} className='font-semibold text-green-700 hover:text-green-800'>Login</Link></p>
                </div>
            </div>
        </section>
    );
};

export default FotgotPassword;