import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Spinner from "../Components/Spinner/Spinner";
import { Toaster } from "react-hot-toast";

const MainLayOut = () => {
    const navigation = useNavigation();

    // dont foregt to use dynamic routing here

    return (
        <div>
            <Toaster />
            <Navbar />
            {
                navigation.state === "loading" ?
                    <Spinner />
                    :
                    <div className="min-h-[80vh]">
                        <Outlet />
                    </div>
            }
        </div>
    )
}

export default MainLayOut