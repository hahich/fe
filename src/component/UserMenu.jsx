import { Link, useNavigate } from "react-router-dom"
import Axios from "../utils/Axios"
import AxiosToastError from '../utils/AxiosToastError'
import SummaryApi from "../common/SummaryApi"
import toast from 'react-hot-toast';
import useLogin from "../hooks/useLogin";

const UserMenu = ({setIsLogin}) => {
    const {userDetails} = useLogin()
    const navigate = useNavigate()

    const handleLogOut = async () => {
        try {
            const res = await Axios({
                ...SummaryApi.logout,
            })

            if (res.data.success) {
                localStorage.clear()
                setIsLogin(false)
                toast.success(res.data.message)
                navigate("/login")
            }

        } catch (error) {
            AxiosToastError(error)
        }
    }

    return (
        <div className="">
            <div className="">
                <p className="font-semibold">My Account</p>
                <p className="mt-1 mb-2 capitalize">{userDetails?.name}</p>
                <div className="h-[3px] rounded w-full bg-slate-200 mb-2"></div>
                <div className="grid gap-2">
                    <Link to={""} className="px-2">My Orders</Link>
                    <Link to={""} className="px-2">My Orders</Link>
                    <button onClick={handleLogOut} className="text-left text-red-500 hover:text-white hover:bg-red-500 px-2">Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default UserMenu