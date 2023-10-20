import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";

const CardDetails = () => {
    const productDetails = useLoaderData();
    const { image, name, brandName, type, price, shortDesc, rating, _id } = productDetails;
    const myCartProduct = { image, name, brandName, type, price, shortDesc, rating };
    const handleAddToCart = () => {
        fetch(`https://brand-shop-server-3bhh86akn-masum-rezas-projects.vercel.app/cart`, {
            method: 'POST',
            body: JSON.stringify(myCartProduct),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully added to cart!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Oops got some issue!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            });
    }

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <div className="card card-compact w-[95vw] md:w-[60vw] lg:w-[50vw] my-5 border bg-base-100 shadow-xl">
                <figure><img className='max-h-[60vh] w-[95vw] md:w-[60vw] lg:w-[50vw]' src={image} alt={`image of ${name}`} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brandName}</h2>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h2>{name}</h2>
                            <h2>{type}</h2>
                        </div>
                        <div>
                            <h2><span className='underline'>Price</span> : ${price}</h2>
                            <h2>Rating : {rating}⭐</h2>
                        </div>
                    </div>

                    <div className="card-actions justify-center pt-3">
                        <p>{shortDesc}</p>
                    </div>
                    <div className="card-actions justify-center pt-3">
                        <button onClick={() => handleAddToCart(_id)} className="btn w-full btn-outline">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails