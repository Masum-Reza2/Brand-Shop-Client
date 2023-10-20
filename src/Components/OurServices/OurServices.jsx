import guarntee from '../../assets/images/services/guarantee.png'
import care from '../../assets/images/services/care-removebg-preview.png'
import service from '../../assets/images/services/gmail-customers-service-removebg-preview.png'
import help from '../../assets/images/services/help-removebg-preview.png'
import repair from '../../assets/images/services/repairs-removebg-preview.png'
import warantee from '../../assets/images/services/warranty-info_2197-removebg-preview.png'

import { GrServices } from 'react-icons/gr';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'


const OurServices = () => {
    const allServices = [
        { name: 'Guarantee', img: guarntee, desc: 'likely provides assurance or warranty for products, ensuring their quality and performance.' },
        { name: 'Warantee', img: warantee, desc: 'likely extends coverage for product defects or damage during a specified period.' },
        { name: 'Care', img: care, desc: ' likely offers maintenance and support to enhance the lifespan and performance of products.' },
        { name: 'Service', img: service, desc: 'likely includes general support and assistance for customers.' },
        { name: 'Help', img: help, desc: 'likely provides guidance and information to address customer inquiries or issues.' },
        { name: 'Repair', img: repair, desc: ' likely deals with fixing or restoring products to working condition in case of damage or malfunction.' },
    ]
    return (
        <div>

            <div className='md:ml-16 justify-center md:justify-normal mt-10 flex items-center gap-2'>
                <GrServices className='text-xl' />
                <h1 className='text-lg md:text-xl font-semibold'>Services we provide 24/7.</h1>
                <BsFillArrowRightCircleFill className='text-xl' />
            </div>
            <div className='w-[90%] mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5'>
                {
                    allServices?.map((singleService, index) => <div key={index} className='h-full w-full flex flex-col shadow-md rounded-lg px-3 items-center justify-center cursor-pointer transition-all hover:bg-sky-100 duration-500 hover:scale-105'>
                        <img className='h-1/2 w-1/2' src={singleService.img} alt="" />
                        <h5 className='text-gray-500 font-semibold'>{singleService?.name}</h5>
                        <p className=''>{singleService?.desc}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default OurServices