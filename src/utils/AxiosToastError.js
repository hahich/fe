import toast from "react-hot-toast"

const AxiosToastError = (error) => {
<<<<<<< HEAD
    toast.error(
        error?.response?.data?.message
    )
}
export default AxiosToastError
=======
    toast.error(error?.response?.data?.message)
    console.log(error.message)
}
export default AxiosToastError;
>>>>>>> 00e6150294aa5a607fdcc5d9616556ff2540a9f3
