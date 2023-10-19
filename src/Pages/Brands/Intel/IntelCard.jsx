import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const IntelCard = ({ singleData }) => {
    const { image, name, brandName, type, price, shortDesc, rating, _id } = singleData;
    return (
        <div>
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
                            <button className="btn btn-sm md:btn-md">Details</button>
                            <Link to={`/intel/${_id}`}>
                                <button className="btn btn-sm md:btn-md">Update</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

IntelCard.propTypes = {
    singleData: PropTypes.object,
}
export default IntelCard