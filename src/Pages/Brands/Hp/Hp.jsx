import { useLoaderData } from "react-router-dom";
import HpCard from "./HpCard";
import Footer from "../../../Components/Footer/Footer";

const Hp = () => {

    const samsungData = useLoaderData();

    return (
        <>
            <div className="py-5 w-[90%] mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    samsungData?.map(singleData => <HpCard key={singleData?._id} singleData={singleData} />)
                }
            </div>
            <Footer />
        </>
    )
}

export default Hp