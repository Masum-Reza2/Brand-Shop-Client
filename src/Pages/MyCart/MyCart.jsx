import { useLoaderData } from "react-router-dom"
import MyCartCard from "../../Components/MycartCard/MyCartCard";
import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import useGlobal from "../../Hooks/useGlobal";

const MyCart = () => {
    const { darkMode } = useGlobal();

    const loadedCarts = useLoaderData();
    const [myCarts, setMyCarts] = useState(loadedCarts)


    return (
        <>
            <div className="py-5 min-h-[85vh]">
                <h1 className={`text-center font-semibold text-lg md:text-2xl ${darkMode && 'text-gray-200'}`}>My Carts : {myCarts?.length}</h1>
                <div className="py-5 w-[90%] mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        myCarts?.map(singleData => <MyCartCard key={singleData?._id} singleData={singleData} myCarts={myCarts} setMyCarts={setMyCarts} />)
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MyCart