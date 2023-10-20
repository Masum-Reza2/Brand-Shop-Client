import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const MyCartCard = ({ singleData, setMyCarts, myCarts }) => {
    const { image, name, brandName, type, price, rating, _id } = singleData;


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://brand-shop-server-7zqsowcrw-masum-rezas-projects.vercel.app/singleCart/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {

                            let remaining = myCarts.filter(cart => cart._id !== id);
                            setMyCarts(remaining)

                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                        }
                        else {
                            Swal.fire(
                                'Oops!',
                                'Something went wrong!',
                                'error'
                            )
                        }
                    })


            }
            else {
                Swal.fire(
                    'Cancelled!',
                    'Your product has is safe.',
                    'success'
                )
            }
        })
    }
    return (
        <div>
            <div className="card card-compact h-full w-full border bg-base-100 shadow-xl ">
                <figure><img className='h-[50vh] end-full' src={image} alt={`image of ${name}`} /></figure>
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
                        <button onClick={() => handleDelete(_id)} className='btn w-full'>Delete from cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


MyCartCard.propTypes = {
    singleData: PropTypes.object,
    myCarts: PropTypes.array,
    setMyCarts: PropTypes.func,
}
export default MyCartCard