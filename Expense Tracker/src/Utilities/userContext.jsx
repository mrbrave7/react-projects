/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

// Create the context
export const UserContext = createContext();
export const useUser = () => {
    return useContext(UserContext)
}
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ isAuthenticated: false, user: null });

    const loginUser = (userData) => {
        setUser({
            isAuthenticated: true,
            user: userData,
        });
    };

    const logoutUser = () => {
        setUser({
            user: null,
            isAuthenticated: false,
        });
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};
