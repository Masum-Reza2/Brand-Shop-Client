import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SamsungUpdate = () => {
    const oldProduct = useLoaderData();
    const { image, name, brandName, type, price, shortDesc, rating, _id } = oldProduct;
    const navigate = useNavigate();

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const newImage = form.image.value;
        const newName = form.name.value;
        const newBrandName = form.brandName.value;
        const newType = form.type.value;
        const newPrice = form.price.value;
        const newShortDesc = form.shortDesc.value;
        const newRating = form.rating.value;

        const updateProduct = { newImage, newName, newBrandName, newType, newPrice, newShortDesc, newRating };

        Swal.fire({
            title: 'Are you sure?',
            text: `You are going to update ${name}!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-475r99y11-masum-rezas-projects.vercel.app/singleSamsung/${_id}`, {
                    method: 'PUT',
                    body: JSON.stringify(updateProduct),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => {
                        if (json.modifiedCount) {
                            navigate('/Samsung');
                            Swal.fire(
                                'Updated!',
                                'Your product has been updated.',
                                'success'
                            )
                        }
                        else {
                            Swal.fire(
                                'Oops!',
                                'You changed nothing!',
                                'error'
                            )
                        }
                    });

            }
            else {
                Swal.fire(
                    'Cancelled!',
                    `You cancelled the update for product ${name}`,
                    'success'
                )
            }
        })

    }

    return (
        <div className="w-[90%] mx-auto py-5 min-h-screen md:min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="py-2 md:py-5 font-semibold">Update {name}</h1>
            <form onSubmit={handleUpdate} className="space-y-3">
                {/* image and name */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Image URL</span>
                        <input required type="text" name="image" defaultValue={image} className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Name</span>
                        <input required type="text" name="name" defaultValue={name} className="input input-bordered" />
                    </label>
                </div>
                {/* brandName and price */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Brand Name</span>
                        <input required type="text" name="brandName" defaultValue={brandName} className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Type</span>
                        <input required type="text" name="type" defaultValue={type} className="input input-bordered" />
                    </label>
                </div>
                {/* price and shortDesc */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Price</span>
                        <input required type="text" name="price" defaultValue={price} className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Short Description</span>
                        <input required type="text" name="shortDesc" defaultValue={shortDesc} className="input input-bordered" />
                    </label>
                </div>
                {/* rating and submit */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Rating</span>
                        <input required type="text" name="rating" defaultValue={rating} className="input input-bordered" />
                    </label>
                </div>

                <div className="text-center py-3">
                    <button className="btn" type="submit">Update Product</button>
                </div>
            </form>
        </div>
    )
}

export default SamsungUpdate