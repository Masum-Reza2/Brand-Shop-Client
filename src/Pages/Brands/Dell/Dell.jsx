import { useLoaderData } from "react-router-dom";
import DellCard from "./DellCard";

const Dell = () => {
    const dellData = useLoaderData();
    return (
        <div className="py-5 w-[90%] mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                dellData?.map(singleData => <DellCard key={singleData?._id} singleData={singleData} />)
            }
        </div>
    )
}

export default Dell