import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { ImHappy } from "react-icons/im"

import client1 from '../../assets/images/clients/client1-removebg-preview.png'
import client2 from '../../assets/images/clients/client2-removebg-preview.png'
import client3 from '../../assets/images/clients/client3-removebg-preview.png'
import client4 from '../../assets/images/clients/client4-removebg-preview.png'
import client5 from '../../assets/images/clients/client5-removebg-preview.png'
import client6 from '../../assets/images/clients/client6.png'
import useGlobal from "../../Hooks/useGlobal"

const HappyClients = () => {
    const { darkMode } = useGlobal();
    const clients = [
        { name: "John Smith", img: client1, comment: "Satisfied with their services and quick response time." },
        { name: "Sarah Johnson", img: client2, comment: "A reliable partner for all our business needs. Highly recommended." },
        { name: "Michael Davis", img: client3, comment: "Exceptional customer service and attention to detail." },
        { name: "Emily Wilson", img: client4, comment: "Always impressed with the quality of their products." },
        { name: "David Miller", img: client5, comment: "Professionalism and expertise shine through in every interaction." },
        { name: "Olivia Clark", img: client6, comment: "Delivers results beyond expectations. A great addition to our team." }
    ]
    return (
        <div>

            <div className={`md:ml-16 justify-center md:justify-normal mt-10 flex items-center gap-2 ${darkMode && 'text-gray-200'}`}>
                <ImHappy className='text-xl' />
                <h1 className='text-lg md:text-xl font-semibold'>Our happy customer's say...</h1>
                <BsFillArrowRightCircleFill className='text-xl' />
            </div>
            <div className={`w-[90%] mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 ${darkMode && 'text-gray-200'}`}>
                {
                    clients?.map((client, index) => <div key={index} className={`shadow-md p-5 rounded-md cursor-pointer h-full flex flex-col items-center justify-center transition-all duration-500 ${darkMode ? 'hover:bg-black bg-slate-800' : 'hover:bg-red-50'} hover:scale-105 `}>
                        <div className="flex items-center">
                            <img src={client?.img} className="w-1/4" alt="" />
                            <h5 className="font-bold">{client?.name}</h5>
                        </div>
                        <p>{client?.comment}</p>
                    </div>)
                }
            </div>
        </div >
    )
}

export default HappyClients