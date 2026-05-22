import { createContext, useEffect, useState } from "react";
import { AuthenticatedUserData } from "../services/AuthServices";

export const AuthUser = createContext();

export const AuthUserProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);

    const [loading, setLoading] = useState(true);


    const fetchUserData = async () => {

        try {

            const data = await AuthenticatedUserData();

            setUserData(data);

        } catch (error) {

            console.log(error);

            setUserData(null);

        } finally {

            setLoading(false);
        }
    };


    useEffect(() => {

        fetchUserData();

    }, []);


    return (
        <AuthUser.Provider
            value={{
                userData,
                setUserData,
                loading,
                fetchUserData
            }}
        >
            {children}
        </AuthUser.Provider>
    );
};