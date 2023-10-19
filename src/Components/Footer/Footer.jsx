import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaFeatherAlt } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="mt-5">
            <footer className="footer p-10 bg-black text-white justify-center md:justify-around">
                <nav>
                    <header className="footer-title underline">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>

                <nav>
                    <header className="footer-title underline">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <header className="footer-title underline">Brands</header>
                    <Link to={`/Apple`} className="link link-hover">Apple</Link>
                    <Link to={`/Samsung`} className="link link-hover">Samsung</Link>
                    <Link to={`/Sony`} className="link link-hover">Sony</Link>
                    <Link to={`/Intel`} className="link link-hover">Intel</Link>
                    <Link to={`/Hp`} className="link link-hover">Hp</Link>
                    <Link to={`/Dell`} className="link link-hover">Dell</Link>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-black text-white border-base-300 justify-center md:justify-around">
                <nav className="md:place-self-center md:justify-self-start">
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <BsFacebook className="text-blue-600 font-bold cursor-pointer transition-all duration-300 hover:scale-110 active:scale-125" />
                        <AiFillInstagram className="text-orange-600 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-125" />
                        <AiFillYoutube className="text-red-600 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-125" />
                        <BsTwitter className="text-sky-600 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-125" />
                    </div>
                </nav>
                <aside className="items-center grid-flow-col">
                    <FaFeatherAlt className='text-lg md:text-xl' />
                    <p>B-shop Ltd. <br />Providing reliable tech and electronics since 2006.</p>
                </aside>

            </footer>
        </div>
    )
}

export default Footer