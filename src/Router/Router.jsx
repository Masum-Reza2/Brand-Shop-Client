import { createBrowserRouter } from "react-router-dom"
import MainLayOut from "../MainLayOut/MainLayOut"

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut />,
    }
])

export default Router