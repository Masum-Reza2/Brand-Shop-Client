import { Link, useLoaderData } from "react-router-dom";
import AppleCard from "./AppleCard";
import Footer from "../../../Components/Footer/Footer";
import Slider from "../../../Components/Slider/Slider";

const Apple = () => {
    const appleData = useLoaderData();

    if (appleData.length > 0) {
        return <>
            <Slider url={'https://brand-shop-server-a6as5zjxj-masum-rezas-projects.vercel.app/appleSlider'} />
            <h5 className="text-center font-semibold text-lg md:text-2xl mt-10 md:mt-16">Apple! Enhance your life.</h5>
            <div className="py-5 w-[90%] mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    appleData?.map(singleData => <AppleCard key={singleData?._id} singleData={singleData} />)
                }
            </div>
            <Footer />
        </>
    }
    else {
        return <>
            <Slider url={'https://brand-shop-server-a6as5zjxj-masum-rezas-projects.vercel.app/appleSlider'} />
            <div className="min-h-[90vh] flex flex-col items-center justify-center space-y-3">
                <h1 className="font-semibold text-lg md:text-2xl">Apple is everyones desire...</h1>
                <h1 className="font-semibold text-lg md:text-2xl">Add Apple as your desire...</h1>
                <Link to={'/addProduct'}>
                    <button className="btn ">Add apple</button>
                </Link>
            </div>
            <Footer />
        </>
    }
}

export default Apple