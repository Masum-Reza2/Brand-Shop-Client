import { useLoaderData } from "react-router-dom";
import IntelCard from "./IntelCard";

const Intel = () => {
    const intelData = useLoaderData();
    return (
        <div className="py-5 w-[90%] mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                intelData?.map(singleData => <IntelCard key={singleData?._id} singleData={singleData} />)
            }
        </div>
    )
}

export default Intel