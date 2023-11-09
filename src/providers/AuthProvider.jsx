import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

   

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email:userEmail};
            setUser(currentUser);
            console.log('user in the auth state changed', currentUser);
            setLoading(false);



            //if user axist then genarate a token



            if(currentUser){
                  
                   axios.post('https://b8a11-server-side-jabed-hasan-j0qbx0vxr-jabeds-projects.vercel.app/jwt',loggedUser,)
                .then(res =>{
                    console.log('token response',res.data)
                } )
            } 
            else{
                axios.post('https://b8a11-server-side-jabed-hasan-j0qbx0vxr-jabeds-projects.vercel.app/logout',loggedUser, {
                    withCredentials: true
                }) 
                .then(res =>{
                    console.log(res.data);
                })
            }
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;