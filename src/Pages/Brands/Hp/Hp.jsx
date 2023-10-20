import { useLoaderData } from "react-router-dom";
import HpCard from "./HpCard";
import Footer from "../../../Components/Footer/Footer";
import Slider from "../../../Components/Slider/Slider";

const Hp = () => {

    const samsungData = useLoaderData();

    return (
        <>
            <Slider url={'https://brand-shop-server-5ewaozpqq-masum-rezas-projects.vercel.app/hpSlider'} />
            <h5 className="text-center font-semibold text-lg md:text-2xl mt-10 md:mt-16">Hp! Enhance your life.</h5>
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