import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Search = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSearchPage, setIsSearchPage] = useState(false);

    useEffect(() => {
        const isSearch = location.pathname === "/search";
        setIsSearchPage(isSearch);
    }, [location]);

    const redirectToSearchPage = () => {
        navigate("/search");
    };



    return (
        <div className='w-full min-w-[300px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border overflow-hidden flex items-center text-neutral-500 bg-slate-50 group-focus-within:outline-primary-200'>
            <button className="flex justify-center items-center h-full p-3 group-focus-within:text-primary-200" onClick={redirectToSearchPage}>
                <IoSearchOutline size={22} />
            </button>
            <div>
                {
                    !isSearchPage ? (
                        // not in search page
                        <div className="flex-grow" onClick={redirectToSearchPage}>
                            <TypeAnimation
                                sequence={[
                                    'Tìm kiếm "Điện Thoại"',
                                    1000,
                                    'Tìm kiếm "Máy Tính Bảng"',
                                    1000,
                                    'Tìm kiếm "Laptop"',
                                    1000,
                                    'Tìm kiếm "Linh Kiện"',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>
                    ) : (
                        // when i was search page
                        <div className="w-full h-full">
                            <input type='text' placeholder='Bạn muốn tìm cái gì?' autoFocus className='bg-transparent w-full h-full outline-none'/>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Search;