import { useLoaderData } from "react-router-dom";
import SonyCard from "./SonyCard";

const Sony = () => {
    const sonyData = useLoaderData();
    return (
        <div className="py-5 w-[90%] mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                sonyData?.map(singleData => <SonyCard key={singleData?._id} singleData={singleData} />)
            }
        </div>
    )
}

export default Sony