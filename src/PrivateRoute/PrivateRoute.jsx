import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";
import useGlobal from "../Hooks/useGlobal"
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useGlobal();
    const { pathname } = useLocation();

    if (loading) {
        return <Spinner />
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate state={pathname} to={'/login'}></Navigate>
    }
}

PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute