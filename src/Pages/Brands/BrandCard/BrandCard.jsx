import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const BrandCard = ({ brand }) => {
    const { name, img } = brand;
    const navigate = useNavigate();

    const handleDynamicRoute = () => {
        navigate(`/${name}`)
    }

    return (
        <div onClick={handleDynamicRoute} className="card bg-base-100 h-full w-full shadow-xl image-full cursor-pointer transition-all duration-500 hover:-translate-y-1">
            <figure><img className="h-full w-full" src={img} alt={`img of brand ${name}`} /></figure>
            <div className="card-body items-center justify-end">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    )
}

BrandCard.propTypes = {
    brand: PropTypes.object,
}
export default BrandCard