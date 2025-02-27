import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
// import AxiosToastError from '../utils/AxiosToastError';
import { Link, useNavigate } from 'react-router-dom';

const VerifyOtp = () => {
    const [data, setData] = useState(["", "", "", "", "", ""]);
    const navigate = useNavigate();
    const validValue = data.every(val => val !== ""); // Kiểm tra xem OTP đã được nhập đầy đủ

    const handleChange = (index, value) => {
        const newData = [...data];
        // Nếu người dùng xóa ký tự
        if (value === "") {
            newData[index] = value;
            setData(newData);
            // Chuyển con trỏ về ô trước đó nếu không phải ô đầu tiên
            if (index > 0) {
                const previousInput = document.getElementById(`otp-${index - 1}`);
                if (previousInput) {
                    previousInput.focus();
                }
            }
        } else {
            newData[index] = value;
            setData(newData);
            // Nếu người dùng nhập ký tự và không phải ô cuối cùng, tự động chuyển đến ô tiếp theo
            if (index < data.length - 1) {
                const nextInput = document.getElementById(`otp-${index + 1}`);
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = localStorage.getItem('email'); // Lấy email từ localStorage (hoặc từ props, context, v.v.)
        try {
            const res = await Axios({
                ...SummaryApi.forgot_password_otp,
                data: {
                    email: email, // Gửi email
                    otp: data.join("")
                }
            });
            if (res.data.error) {
                toast.error(res.data.message);
            }
            if (res.data.success) {
                toast.success(res.data.message);
                setData(["", "", "", "", "", ""]);
                navigate("/reset-password"),{
                    state: {
                        data: res.data,
                        email:email
                    }
                }; 
            }
        } catch (error) {
            // AxiosToastError(error);
            console.error(error)
        }
    };

    return (
        <section className='w-full container mx-auto px-2'>
            <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7">
                <p className='text-4xl text-center font-bold'>Verify OTP</p>
                <form className='grid gap-4 py-4' onSubmit={handleSubmit}>
                    <div className="grid gap-1">
                        <label htmlFor="otp">Enter Your OTP :</label>
                        <div className="grid grid-cols-6 gap-2">
                            {
                                data.map((element, index) => {
                                    return (
                                        <input
                                            key={index}
                                            type="text"
                                            id={`otp-${index}`}
                                            value={element}
                                            onChange={(e) => handleChange(index, e.target.value)}
                                            autoFocus={index === 0} // Chỉ tự động lấy nét cho input đầu tiên
                                            className='bg-blue-50 p-2 border outline-none focus-within:border-primary-200 text-center'
                                            maxLength={1} // Giới hạn số ký tự nhập vào
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                    <button disabled={!validValue} className={`${validValue ? "bg-green-700 hover:bg-green-800" : "bg-gray-500"} text-white py-2 rounded font-semibold my-3 tracking-wide`}>
                        Verify OTP
                    </button>
                </form>
                <div className="flex justify-between items-center mx-2">
                    <p>Already have an account? <Link to={"/login"} className='font-semibold text-green-700 hover:text-green-800'>Login</Link></p>
                </div>
            </div>
        </section>
    );
};

export default VerifyOtp;