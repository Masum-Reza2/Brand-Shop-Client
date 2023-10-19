import { useLoaderData } from "react-router-dom";
import AppleCard from "./AppleCard";

const Apple = () => {
    const appleData = useLoaderData();
    return (
        <div className="py-5 w-[90%] mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                appleData?.map(singleData => <AppleCard key={singleData?._id} singleData={singleData} />)
            }
        </div>
    )
}

export default Apple