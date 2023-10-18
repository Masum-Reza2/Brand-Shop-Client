import { createBrowserRouter } from "react-router-dom"
import MainLayOut from "../MainLayOut/MainLayOut"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home"
import AddProduct from "../Pages/AddProduct/AddProduct"
import MyCart from "../Pages/MyCart/MyCart"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import PrivateRoute from "../PrivateRoute/PrivateRoute"

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
        ]
    }
])

export default Router