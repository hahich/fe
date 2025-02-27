import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import Search from './Search'
import { FaUserCircle } from "react-icons/fa";
import useMobile from '../hooks/useMobile';
import { BsCart4 } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { GoTriangleUp } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";
import { useState } from 'react';
import UserMenu from './UserMenu';

const Header = () => {
  const [isMobile] = useMobile()
  const location = useLocation()
  const isSearchPage = location.pathname === "/search"
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const [openUserMenu, setOpenUserMenu] = useState(false)

  const redirectToLoginPage = () => {
    navigate("/login")
  }

  const handleCloseUserMenu = () => {
    setOpenUserMenu(false)
  }

  const handleMobileUser = () => {
    if (!user._id) {
      navigate("/login")
      return
    }

    navigate("/user")
  }

  return (
    <header className="h-24 lg:h-20 shadow-lg sticky top-0 flex items-center justify-center flex-col gap-1 bg-white z-40">
      {
        !(isSearchPage && isMobile) && (
          <div className="container mx-auto h-full flex justify-between items-center px-2">
            <div className="">
              <Link to={""} className="">
                {/* logo */}
                <img src={logo} width={120} height={60} alt="" className='lg:block hidden' />
                <img src={logo} width={80} height={40} alt="" className='lg:hidden' />
              </Link>
            </div>

            {/* search */}
            <div className="hidden lg:block">
              <Search />
            </div>

            {/* login and my cart */}
            <div className="">
              {/* user icon only show up in mobile version */}
              <button className="lg:hidden text-neutral-600" onClick={handleMobileUser}>
                <FaUserCircle size={25} />
              </button>

              <div className="hidden lg:flex items-center gap-10">

                {
                  user?._id ? (
                    <div className="relative">
                      <div onClick={() => setOpenUserMenu(prev => !prev)} className="flex select-none items-center gap-1 cursor-pointer">
                        <p>Account</p>
                        {
                          openUserMenu ? (
                            <GoTriangleUp size={23} />

                          ) : (
                            <GoTriangleDown size={23} />
                          )
                        }
                      </div>
                      {
                        openUserMenu && (
                          <div className="absolute right-0 top-12">
                            <div className="bg-white rounded p-4 min-w-52 lg:shadow-lg">
                              <UserMenu close={handleCloseUserMenu} />
                            </div>
                          </div>
                        )
                      }

                    </div>
                  ) : (
                    <button className='text-lg px-2' onClick={redirectToLoginPage}>Login</button>
                  )
                }


                <button className='flex items-center gap-2 bg-red-500 px-3 py-3 hover:bg-red-600 rounded text-white'>
                  <div className="animate-bounce">
                    <BsCart4 size={26} />
                  </div>
                  <div className="">
                    <p>My Cart</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )
      }

      <div className="container mx-auto px-2 lg:hidden block">
        <Search />
      </div>
    </header>
  )
}

export default Header