<<<<<<< HEAD
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../page/Home';
import SearchPage from '../page/SearchPage';
import Register from '../page/Register';
import Login from '../page/Login';
import ForgotPassword from '../page/ForgotPassword';
import OtpVerifycation from '../page/OtpVerifycation';
import ResetPassword from '../page/ResetPassword';
import UserMenuMobile from '../page/UserMenuMobile';
import Dashboard from '../layouts/Dashboard';
import Profiles from '../page/Profiles';
import MyOrders from '../page/MyOrders';
import Address from '../page/Address';
import Category from '../page/Category';
import SubCategory from '../page/SubCategory';
import UploadProducts from '../page/UploadProducts';
import ProductsAdmin from '../page/ProductsAdmin';
import AdminPermission from '../layouts/AdminPermission';
import ProductsList from '../page/ProductsList';
import ProductsDisPlay from '../page/ProductsDisPlay';

// Define the router configuration
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "search",
                element: <SearchPage />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "verifycation-otp",
                element: <OtpVerifycation />
            },
            {
                path: "reset-password",
                element: <ResetPassword />
            },
            {
                path: "user",
                element: <UserMenuMobile />
            },
            {
                path: "dashboard",
                element: <Dashboard />,
                children: [
                    {
                        path: "profiles",
                        element: <Profiles />
                    },
                    {
                        path: "my-orders",
                        element: <MyOrders />
                    },
                    {
                        path: "address",
                        element: <Address />
                    },
                    {
                        path: "category",
                        element: <AdminPermission><Category /></AdminPermission>
                    },
                    {
                        path: "sub-category",
                        element: <AdminPermission><SubCategory /></AdminPermission>
                    },
                    {
                        path: "upload-products",
                        element: <AdminPermission><UploadProducts /></AdminPermission>
                    },
                    {
                        path: "products",
                        element: <AdminPermission><ProductsAdmin /></AdminPermission>
                    }
                ]
            },
            {
                path: ":category/",
                children: [
                    {
                        path: ":subCategory",
                        element: <ProductsList />
                    }
                ]
            },
            {
                path: "products/:products",
                element: <ProductsDisPlay />
            }
        ]
    },
]);
=======
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App.jsx";
import SearchPage from "../pages/SearchPage.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import OtpVerifycation from "../pages/OtpVerifycation.jsx";
import ResetPassword from "../pages/ResetPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "search",
        element: <SearchPage />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "verify-forgot-password-otp",
        element: <OtpVerifycation />
      },
      {
        path: "reset-password",
        element: <ResetPassword />
      }
    ]
  }
])
export default router
>>>>>>> 00e6150294aa5a607fdcc5d9616556ff2540a9f3
