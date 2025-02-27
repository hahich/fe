<<<<<<< HEAD
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import fetchUserDetails from './utils/fetchUserDetails';
import { setUserDetails } from './store/userSlice';
import { useDispatch } from 'react-redux';
import Axios from './utils/Axios';
import SummarryApi from './common/SummaryApi';
import { setAllCategory, setAllSubCategory, setLoadingCategory } from "./store/productsSlice"
import AxiosToastError from './utils/AxiosToastError';

function App() {
  const dispatch = useDispatch()

  const fetchUser = async () => {
    const userData = await fetchUserDetails()
    dispatch(setUserDetails(userData.data))
  }

  const fetchCategory = async () => {
    try {
      dispatch(setLoadingCategory(true))
      const res = await Axios({
        ...SummarryApi.getCategory,
      })
      const { data: responseData } = res;

      if (responseData.success && Array.isArray(responseData.data)) {
        dispatch(setAllCategory(responseData.data))
      }

    } catch (error) {
      AxiosToastError(error)
    } finally {
      setLoadingCategory(false)
    }
  }

  const fetchSubCategory = async () => {
    try {
      const res = await Axios({
        ...SummarryApi.getSubCategory,
      })
      const { data: responseData } = res;

      if (responseData.success && Array.isArray(responseData.data)) {
        dispatch(setAllSubCategory(responseData.data))
      }

    } catch (error) {
      AxiosToastError(error)
    }
  }

  useEffect(() => {
    fetchUser()
    fetchCategory()
    fetchSubCategory()
  }, [])


=======
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Toaster } from 'react-hot-toast';
function App() {
>>>>>>> 00e6150294aa5a607fdcc5d9616556ff2540a9f3

  return (
    <>
      <Header />
<<<<<<< HEAD
      <main className='min-h-[78vh]'>
        <Outlet />
      </main>
      <Footer />
      <Toaster />
=======
      <main className='min-h-[80vh]'>
        <Outlet />
      </main>
      <Footer />
      <Toaster/>
>>>>>>> 00e6150294aa5a607fdcc5d9616556ff2540a9f3
    </>
  )
}

<<<<<<< HEAD
export default App
=======
export default App;
>>>>>>> 00e6150294aa5a607fdcc5d9616556ff2540a9f3
