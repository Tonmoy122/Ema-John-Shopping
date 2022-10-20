import React, { createContext, useEffect, useState } from 'react';
import App from '../../firebase//firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'



export const AuthContext = createContext();
const auth = getAuth(App);


const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser, 'i am here')
            setUser(currentUser);
            setLoading(false);
        });

        return () => unSubscribe();
    }, [])

    const authInfo = { user, loading, createUser, signIn, logout }

    return (

        < AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};


export default UserContext; 