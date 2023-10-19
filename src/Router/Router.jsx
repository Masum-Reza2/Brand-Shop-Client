import { createBrowserRouter } from "react-router-dom"
import MainLayOut from "../MainLayOut/MainLayOut"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home"
import AddProduct from "../Pages/AddProduct/AddProduct"
import MyCart from "../Pages/MyCart/MyCart"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import Apple from "../Pages/Brands/Apple/Apple"
import Samsung from "../Pages/Brands/Samsung/Samsung"
import Sony from "../Pages/Brands/Sony/Sony"
import Intel from "../Pages/Brands/Intel/Intel"
import Hp from "../Pages/Brands/Hp/Hp"
import Dell from "../Pages/Brands/Dell/Dell"
import SamsungUpdate from "../Pages/Brands/Samsung/SamsungUpdate"
import SonyUpdate from "../Pages/Brands/Sony/SonyUpdate"
import IntelUpdate from "../Pages/Brands/Intel/IntelUpdate"
import HpUpdate from "../Pages/Brands/Hp/HpUpdate"

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/addProduct', element: <PrivateRoute><AddProduct /></PrivateRoute> },
            { path: '/myCart', element: <PrivateRoute><MyCart /></PrivateRoute> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },

            // Brands route
            { path: '/Apple', element: <Apple /> },

            // samsung
            { path: '/Samsung', element: <Samsung />, loader: () => fetch('http://localhost:5000/samsung') },
            { path: '/samsung/:id', element: <SamsungUpdate />, loader: ({ params }) => fetch(`http://localhost:5000/singleSamsung/${params.id}`) },

            // sony
            { path: '/Sony', element: <Sony />, loader: () => fetch('http://localhost:5000/sony') },
            { path: '/sony/:id', element: <SonyUpdate />, loader: ({ params }) => fetch(`http://localhost:5000/singleSony/${params.id}`) },

            // intel
            { path: '/Intel', element: <Intel />, loader: () => fetch('http://localhost:5000/intel') },
            { path: '/intel/:id', element: <IntelUpdate />, loader: ({ params }) => fetch(`http://localhost:5000/singleIntel/${params.id}`) },

            // hp
            { path: '/Hp', element: <Hp />, loader: () => fetch('http://localhost:5000/hp') },
            { path: '/hp/:id', element: <HpUpdate />, loader: ({ params }) => fetch(`http://localhost:5000/singleHp/${params.id}`) },

            { path: '/Dell', element: <Dell /> },
        ]
    }
])

export default Router