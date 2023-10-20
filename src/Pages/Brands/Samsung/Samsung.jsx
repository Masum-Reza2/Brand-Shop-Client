import { useLoaderData } from "react-router-dom"
import SamsungCard from "./SamsungCard";
import Footer from "../../../Components/Footer/Footer";
import Slider from "../../../Components/Slider/Slider";

const Samsung = () => {
    const samsungData = useLoaderData();
    // console.log(samsungData)
    return (
        <>
            <Slider url={'https://brand-shop-server-d1mjb2tsx-masum-rezas-projects.vercel.app/samSlider'} />

            <h5 className="text-center font-semibold text-lg md:text-2xl mt-10 md:mt-16">Samsung! Enhance your life.</h5>
            <div className="py-5 w-[90%] mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    samsungData?.map(singleData => <SamsungCard key={singleData?._id} singleData={singleData} />)
                }
            </div>
            <Footer />
        </>
    )
}

export default Samsung