import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Spinner from "../Components/Spinner/Spinner";

const MainLayOut = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Navbar />
            {
                navigation.state === "loading" ?
                    <Spinner />
                    :
                    <div className="min-h-[80vh]">
                        <Outlet />
                    </div>
            }
            footer here
        </div>
    )
}

export default MainLayOut