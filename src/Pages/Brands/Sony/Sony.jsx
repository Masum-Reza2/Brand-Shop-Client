import { useLoaderData } from "react-router-dom";
import SonyCard from "./SonyCard";
import Footer from "../../../Components/Footer/Footer";
import Slider from "../../../Components/Slider/Slider";

const Sony = () => {
    const sonyData = useLoaderData();
    return (
        <>
            <Slider url={'http://localhost:5000/sonySlider'} />
            <h5 className="text-center font-semibold text-lg md:text-2xl mt-10 md:mt-16">Sony! Enhance your life.</h5>
            <div className="py-5 w-[90%] mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    sonyData?.map(singleData => <SonyCard key={singleData?._id} singleData={singleData} />)
                }
            </div>
            <Footer />
        </>
    )
}

export default Sony