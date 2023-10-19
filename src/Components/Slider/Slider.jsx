import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

const Slider = ({ url }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };


    // rounded-xl h-[70vh] w-fit mx-auto
    // h-full w-full rounded-xl

    return (
        <div className={`bg-black py-5 mb-5`}>
            <Carousel
                arrows={false}
                pauseOnHover={false}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="transform 1000ms ease-in-out"
                transitionDuration={1000}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    images?.map((img, index) => <div key={index} className='rounded-xl h-[70vh] md:h-[90vh] w-[96%] md:w-[98%] mx-auto'>
                        <img className='h-full w-full rounded-xl' src={img.image} alt="" />
                    </div>)
                }
            </Carousel>
        </div>
    )
}

Slider.propTypes = {
    url: PropTypes.string,
}
export default Slider