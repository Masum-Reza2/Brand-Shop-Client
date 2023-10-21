import useGlobal from '../../Hooks/useGlobal';
import banner from '../../assets/images/banner.png';
import logo from '../../assets/images/mainlogo.jpg';

const Banner = () => {
    const { darkMode } = useGlobal();
    return (
        <div className="py-5 w-[90%] mx-auto h-[70vh] rounded-xl relative flex flex-col items-center justify-center">
            <img className='h-[60vh] rounded-xl md:h-[70vh] w-full absolute z-20 brightness-50 top-5' src={banner} alt="" />

            <div className={`text-justify px-5 text-white z-30 ${darkMode && 'text-gray-200'}`}>
                <div className='flex items-center justify-center gap-3'>
                    <h1 className='text-center text-3xl md:text-5xl font-bold'>B-Shop</h1>
                    <img src={logo} className='w-[50px] h-[50px] cursor-pointer rounded-full' alt="" />
                </div>
                <h5 className='md:px-24 lg:px-32 text-xs md:text-lg'>Step into the future at our tech and electronics store. Uncover the newest gadgets, devices, and accessories that elevate your digital experience. Your one-stop destination for all things tech.</h5>
            </div>
        </div>
    )
}

export default Banner