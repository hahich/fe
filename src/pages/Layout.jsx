import React, { useState } from 'react'
import { useEffect } from 'react'
import SummaryApi from '../common/SummaryApi'
import AxiosToastError from '../utils/AxiosToastError'
import toast from 'react-hot-toast'
import Axios from '../utils/Axios'

const Layout = () => {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await Axios({
                    ...SummaryApi.getMe,
                })

                if (res.data.error) {
                    toast.error(res.data.message);
                }
                if (res.data.success) {
                    toast.success(res.data.message);
                    setIsLogin(true)
                }

            } catch (error) {
                AxiosToastError(error);
            }
        }
        fetchData()
    }, [])
    return (
        <div>Layout</div>
    )
}

export default Layout