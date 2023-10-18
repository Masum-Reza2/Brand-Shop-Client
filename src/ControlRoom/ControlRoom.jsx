import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const GlobalContext = createContext();

const ControlRoom = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signin user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // signinWithGoogle 
    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('current user is', currentUser)
            console.log('current user is', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const globalInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleLogin,
    }
    return (
        <GlobalContext.Provider value={globalInfo}>
            {children}
        </GlobalContext.Provider>
    )
}

ControlRoom.propTypes = {
    children: PropTypes.node,
}
export default ControlRoom