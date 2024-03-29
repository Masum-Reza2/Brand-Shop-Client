import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useGlobal from "../../Hooks/useGlobal";

const AddProduct = () => {
    const navigate = useNavigate();
    const { darkMode } = useGlobal();

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDesc = form.shortDesc.value;
        const rating = form.rating.value;

        // console.log(image, name, brandName, type, price, shortDesc, rating);
        // sending to database
        const product = { image, name, brandName, type, price, shortDesc, rating }
        fetch('https://brand-shop-server-a6as5zjxj-masum-rezas-projects.vercel.app/apple', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.insertedId) {
                    navigate('/Apple');
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully added a product!',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    form.reset();
                }
                else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Something went wrong!',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            });
    }

    return (
        <div className={`w-[90%] mx-auto py-5 min-h-screen md:min-h-[80vh] flex flex-col items-center justify-center ${darkMode && 'md:min-h-[90vh]'}`}>
            <h1 className="py-2 md:py-5 font-semibold">Add product for Apple.</h1>
            <form onSubmit={handleAddProduct} className="space-y-3">
                {/* image and name */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Image URL</span>
                        <input required type="text" name="image" className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Name</span>
                        <input required type="text" name="name" className="input input-bordered" />
                    </label>
                </div>
                {/* brandName and price */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Brand Name</span>
                        <input required type="text" name="brandName" className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Type</span>
                        <input required type="text" name="type" className="input input-bordered" />
                    </label>
                </div>
                {/* price and shortDesc */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Price</span>
                        <input required type="text" name="price" className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Short Description</span>
                        <input required type="text" name="shortDesc" className="input input-bordered" />
                    </label>
                </div>
                {/* rating and submit */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Rating</span>
                        <input required type="text" name="rating" className="input input-bordered" />
                    </label>
                </div>

                <div className="text-center py-3">
                    <button className="btn" type="submit">Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct