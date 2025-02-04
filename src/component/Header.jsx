import React from 'react'
import logo from '../assets/logo.png';
import Search from './Search';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import useMobile from '../hooks/useMobile';
import { BsCart4 } from 'react-icons/bs';

const Header = () => {
  const [isMobile] = useMobile();
  const location = useLocation();
  const isSearchPage = location.pathname === '/search';
  const navigate = useNavigate();

  const redirectToLoginPage = () => {
    navigate('/login');
  }
  return (
    <header className='h-24 lg:h-20 lg:shadow-md sticky top-0 flex flex-col justify-center gap-1 bg-white'>
      {
        !(isSearchPage && isMobile) && (
          <div className="container mx-auto flex items-center px-2 justify-between">
            {/* logo */}
            <div className="h-full">
              <Link to={"/"} className="h-full flex justify-center items-center">
                <img src={logo} width={120} height={60} alt="logo" className='hidden lg:block' />
                <img src={logo} width={120} height={60} alt="logo" className='lg:hidden' />
              </Link>
            </div>

            {/* search */}
            <div className="hidden lg:block">
              <Search />
            </div>

            {/* login and my cart */}
            <div>
              {/* user icons display in only mobile version */}
              <button className='text-neutral-600 lg:hidden '>
                <FaRegUserCircle size={26} />
              </button>

              {/* Deskop */}
              <div className="hidden lg:flex items-center gap-10">
                <button onClick={redirectToLoginPage} className='text-lg px-2'>Login</button>
                <button className='flex items-center gap-2 px-4 py-3 rounded bg-green-700 hover:bg-green-800 text-white'>
                  {/* add to card icons */}
                  <div className="animate-bounce">
                    <BsCart4 size={25} />
                  </div>
                  <div className="font-semibold">
                    <p>My Cart</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )
      }


      <div className='container mx-auto px-2 lg:hidden'>
        <Search />
      </div>
    </header>
  )
}

export default Header;