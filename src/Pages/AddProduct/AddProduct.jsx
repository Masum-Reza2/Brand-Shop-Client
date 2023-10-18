const AddProduct = () => {
    return (
        <div className="w-[90%] mx-auto py-5 min-h-screen md:min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="py-2 md:py-5 font-semibold">Add A Brand</h1>
            <form className="space-y-3">
                {/* image and name */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Image URL</span>
                        <input type="text" name="image" className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Name</span>
                        <input type="text" name="name" className="input input-bordered" />
                    </label>
                </div>
                {/* brandName and price */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Brand Name</span>
                        <input type="text" name="brandName" className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Type</span>
                        <input type="text" name="type" className="input input-bordered" />
                    </label>
                </div>
                {/* price and shortDesc */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Price</span>
                        <input type="text" name="price" className="input input-bordered" />
                    </label>
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Short Description</span>
                        <input type="text" name="shortDesc" className="input input-bordered" />
                    </label>
                </div>
                {/* rating and submit */}
                <div className="flex flex-col md:flex-row w-full gap-3 max-w-7xl">
                    <label className="input-group input-group-vertical w-[85vw] md:w-[45vw] ">
                        <span>Rating</span>
                        <input type="text" name="rating" className="input input-bordered" />
                    </label>
                </div>

                <div className="text-center py-3">
                    <button className="btn">Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct