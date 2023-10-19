import { useLoaderData } from "react-router-dom"
import SamsungCard from "./SamsungCard";

const Samsung = () => {
    const samsungData = useLoaderData();
    // console.log(samsungData)
    return (
        <div className="py-5 w-[90%] mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                samsungData?.map(singleData => <SamsungCard key={singleData?._id} singleData={singleData} />)
            }
        </div>
    )
}

export default Samsung