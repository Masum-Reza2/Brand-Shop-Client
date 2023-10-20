import { useLoaderData } from "react-router-dom";
import DellCard from "./DellCard";
import Footer from "../../../Components/Footer/Footer";
import Slider from "../../../Components/Slider/Slider";

const Dell = () => {
    const dellData = useLoaderData();
    return (
        <>
            <Slider url={'https://brand-shop-server-3bhh86akn-masum-rezas-projects.vercel.app/dellSlider'} />
            <h5 className="text-center font-semibold text-lg md:text-2xl mt-10 md:mt-16">Dell! Enhance your life.</h5>
            <div className="py-5 w-[90%] mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    dellData?.map(singleData => <DellCard key={singleData?._id} singleData={singleData} />)
                }
            </div>
            <Footer />
        </>
    )
}

export default Dell