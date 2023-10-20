import Banner from "../../Components/Banner/Banner"
import Footer from "../../Components/Footer/Footer"
import OurServices from "../../Components/OurServices/OurServices"
import Brands from "../Brands/Brands"

const Home = () => {
    return (
        <div>
            <Banner />
            <Brands />
            <OurServices />
            <Footer />
        </div>
    )
}

export default Home