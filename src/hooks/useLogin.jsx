import React, { useEffect, useState } from "react"
import SummaryApi from '../common/SummaryApi'
import AxiosToastError from '../utils/AxiosToastError'
import toast from 'react-hot-toast'
import Axios from '../utils/Axios'

const useLogin = () => {
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

    return {isLogin}


}

export default useLogin