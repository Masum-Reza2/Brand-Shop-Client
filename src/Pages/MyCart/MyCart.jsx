import { useLoaderData } from "react-router-dom"
import MyCartCard from "../../Components/MycartCard/MyCartCard";

const MyCart = () => {

    const myCarts = useLoaderData();


    return (
        <div className="py-5">
            <h1 className="text-center font-semibold text-lg md:text-2xl">My Carts : {myCarts?.length}</h1>
            <div className="py-5 w-[90%] mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    myCarts?.map(singleData => <MyCartCard key={singleData?._id} singleData={singleData} />)
                }
            </div>
        </div>
    )
}

export default MyCart