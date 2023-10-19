
//  using custom images
import apple from '../../assets/images/brands/mainapple.png';
import samsung from '../../assets/images/brands/samsung.png';
import sony from '../../assets/images/brands/Sony.jpg';
import intel from '../../assets/images/brands/intel.jpeg';
import hp from '../../assets/images/brands/hp.png';
import dell from '../../assets/images/brands/dell.png';
import BrandCard from './BrandCard/BrandCard';


const Brands = () => {

    const brands = [
        { name: 'Apple', img: apple },
        { name: 'Samsung', img: samsung },
        { name: 'Sony', img: sony },
        { name: 'Intel', img: intel },
        { name: 'Hp', img: hp },
        { name: 'Dell', img: dell },
    ]

    return (
        <div className="w-[90%] mx-auto md:pt-10">
            <h1 className="text-center text-xl md:text-2xl font-bold">Brands-we-offer!</h1>

            <div className="grid gap-10 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5">
                {
                    brands?.map((brand, index) => <BrandCard key={index} brand={brand} />)
                }
            </div>

        </div>
    )
}

export default Brands