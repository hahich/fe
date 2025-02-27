// Nhập các thư viện và thành phần cần thiết
import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import Search from './Search';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaRegUserCircle } from "react-icons/fa";
import useMobile from '../hooks/useMobile';
import { BsCart4 } from 'react-icons/bs';
import useLogin from '../hooks/useLogin';
import UserMenu from './UserMenu';

const Header = () => {
  // Kiểm tra xem người dùng có đang sử dụng thiết bị di động hay không
  const [isMobile] = useMobile();
  const location = useLocation();
  const isSearchPage = location.pathname === '/search'; // Kiểm tra nếu đang ở trang tìm kiếm
  const navigate = useNavigate();
  const { isLogin, setIsLogin, userDetails } = useLogin(); // Lấy thông tin đăng nhập của người dùng
  const [openMenu, setOpenMenu] = useState(false); // Trạng thái menu người dùng
  const accessToken = localStorage.getItem('accessToken');

  // Hàm điều hướng đến trang đăng nhập 
  const redirectToLoginPage = () => {
    navigate('/login');
  };

  // Hàm xử lý cho người dùng di động
  const handleMobileUser = () => {
    if (!userDetails?._id) {
      redirectToLoginPage(); // Điều hướng đến trang đăng nhập nếu chưa có thông tin người dùng
    }
    navigate("/")

  };

  return (
    <header className='h-24 lg:h-20 lg:shadow-md sticky top-0 flex flex-col justify-center gap-1 bg-white'>
      {
        !(isSearchPage && isMobile) && (
          <div className="container mx-auto flex items-center px-2 justify-between">
            {/* Logo */}
            <div className="h-full">
              <Link to={"/"} className="h-full flex justify-center items-center">
                <img src={logo} width={120} height={60} className='hidden lg:block' alt="Logo của trang" />
                <img src={logo} width={60} height={30} className='block lg:hidden' alt="Logo nhỏ của trang" />
              </Link>
            </div>
            {/* Tìm kiếm (chỉ hiển thị trên desktop) */}
            <div className="hidden lg:block">
              <Search />
            </div>
            {/* Đăng nhập và giỏ hàng */}
            <div>
              {/* Biểu tượng người dùng chỉ hiển thị trên phiên bản di động */}
              <button className='text-neutral-600 lg:hidden' onClick={handleMobileUser}>
                <FaRegUserCircle size={26} />
              </button>
              {/* Hiển thị trên desktop */}
              <div className="hidden lg:flex items-center gap-10">
                {userDetails?._id && accessToken ? (
                  <div className='relative'>
                    <div onClick={() => setOpenMenu(prev => !prev)} className="flex items-center select-none gap-1 cursor-pointer">
                      <p>Tài khoản</p>
                      {openMenu ? <FaAngleUp /> : <FaAngleDown />}
                      {openMenu && (
                        <div className="absolute bg-slate-50 min-w-52 border top-12 right-0 p-4 lg:shadow-lg">
                          <UserMenu isLogin={isLogin} setIsLogin={setIsLogin} />
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <button onClick={redirectToLoginPage} className='text-lg px-2'>Đăng nhập</button>
                )}
                <button className='flex items-center gap-2 px-4 py-3 rounded bg-green-700 hover:bg-green-800 text-white'>
                  {/* Biểu tượng giỏ hàng */}
                  <div className="animate-bounce">
                    <BsCart4 size={25} />
                  </div>
                  <div className="font-semibold">
                    <p>Giỏ hàng của tôi</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )
      }
      {/* Tìm kiếm (chỉ hiển thị trên di động) */}
      <div className='container mx-auto px-2 lg:hidden'>
        <Search />
      </div>
    </header>
  );
};

export default Header;