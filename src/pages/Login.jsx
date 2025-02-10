import { useEffect, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
import { Link, useNavigate } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import AxiosToastError from '../utils/AxiosToastError';

const Login = () => {
  const { isLogin } = useLogin()

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    const firstValue = name === "email" ? value.trim().toLowerCase() : value;

    setData((prev) => ({
      ...prev,
      [name]: firstValue
    }));
  };

  const validValue = Object.values(data).every(val => val !== "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await Axios({
        ...SummaryApi.login,
        data: data
      })

      if (res.data.error) {
        toast.error(res.data.message);
      }

      if (res.data.success) {
        toast.success(res.data.message);
        localStorage.setItem('accessToken', res.data.data.accessToken);
        setData({
          email: "",
          password: "",
        })
        navigate("/")
      }

    } catch (error) {
      console.error(error)
      AxiosToastError(error);
    }
  }

  // Điều hướng về trang chính nếu người dùng đã đăng nhập
  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  return (
    <section className='w-full container mx-auto px-2'>
      <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7">
        <p className='text-4xl text-center'>Login</p>
        {!isLogin && (
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
              <Link to={"/forgot-password"} className='block ml-auto hover:text-primary-200'>Forgot password ?</Link>
            </div>

            <button disabled={!validValue} className={`${validValue ? "bg-green-700 hover:bg-green-800" : "bg-gray-500"}  text-white py-2 rounded font-semibold my-3 tracking-wide`}>Login</button>
          </form>
        )}

        <p>Don&apos;t Have Account ? <Link to={"/register"} className='font-semibold text-green-700 hover:text-green-800'>Register</Link></p>


      </div>
    </section>
  );
};

export default Login;