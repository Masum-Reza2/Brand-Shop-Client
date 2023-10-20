import { useLoaderData } from "react-router-dom";
import IntelCard from "./IntelCard";
import Footer from "../../../Components/Footer/Footer";
import Slider from "../../../Components/Slider/Slider";

const Intel = () => {
    const intelData = useLoaderData();
    return (
        <>
            <Slider url={'https://brand-shop-server-475r99y11-masum-rezas-projects.vercel.app/intelSlider'} />
            <h5 className="text-center font-semibold text-lg md:text-2xl mt-10 md:mt-16">Intel! Enhance your life.</h5>
            <div className="py-5 w-[90%] mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    intelData?.map(singleData => <IntelCard key={singleData?._id} singleData={singleData} />)
                }
            </div>
            <Footer />
        </>
    )
}

export default Intel