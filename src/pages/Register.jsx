import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
// import AxiosToastError from '../utils/AxiosToastError';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
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

    if (data.password !== data.confirmPassword) {
      toast.error("Password and Confirm Password does not match");
      return;
    }

    try {
      const res = await Axios({
        ...SummaryApi.register,
        data: data
      })

      if (res.data.error) {
        toast.error(res.data.message);
      }
      if (res.data.success) {
        toast.success(res.data.message);
        setData({
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
        })
        navigate("/login")
      }

    } catch (error) {
      // AxiosToastError(error);
      console.error(error)
    }
  }

  return (
    <section className='w-full container mx-auto px-2'>
      <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7">
        <p>Welcome to Kurorumi</p>

        <form action="" className='grid gap-3 mt-6'>
          <div className="grid gap-1">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              name="name"
              id='name'
              autoFocus
              className='bg-blue-50 p-2 border outline-none focus-within:border-primary-200'
              value={data.name}
              onChange={handleChange}
              placeholder='Enter Your Name'
            />
          </div>

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

          <div className="grid gap-1">
            <label htmlFor="password">Password :</label>

            <div className="bg-blue-50 p-2 border flex items-center focus-within:border-primary-200">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id='password'
                autoFocus
                className='w-full outline-none bg-blue-50'
                value={data.password}
                onChange={handleChange}
                placeholder='Enter Your Password'
              />

              <div className="cursor" onClick={() => setShowPassword(prev => !prev)}>
                {
                  showPassword ? (<FaRegEye />) : (<FaRegEyeSlash />)
                }
              </div>
            </div>
          </div>

          <div className="grid gap-1">
            <label htmlFor="confirmPassword">Confirm Password :</label>

            <div className="bg-blue-50 p-2 border flex items-center focus-within:border-primary-200">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id='confirmPassword'
                autoFocus
                className='w-full outline-none bg-blue-50'
                value={data.confirmPassword}
                onChange={handleChange}
                placeholder='Enter Your Confirm Password'
              />

              <div className="cursor" onClick={() => setShowConfirmPassword(prev => !prev)}>
                {
                  showConfirmPassword ? (<FaRegEye />) : (<FaRegEyeSlash />)
                }
              </div>
            </div>
          </div>

          <button disabled={!validValue} className={`${validValue ? "bg-green-700 hover:bg-green-800" : "bg-gray-500"}  text-white py-2 rounded font-semibold my-3 tracking-wide`} onClick={handleSubmit}>Register</button>
        </form>

        <p>Already have account ? <Link to={"/login"} className='font-semibold text-green-700 hover:text-green-800'>Login</Link></p>
      </div>
    </section>
  );
};

export default Register;