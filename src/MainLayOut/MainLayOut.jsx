import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Spinner from "../Components/Spinner/Spinner";
import { Toaster } from "react-hot-toast";
import useGlobal from "../Hooks/useGlobal";

const MainLayOut = () => {
    const navigation = useNavigation();
    const { darkMode } = useGlobal();

    // dont foregt to use dynamic routing here

    return (
        <div className={`${darkMode && 'bg-gray-500'}`}>
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