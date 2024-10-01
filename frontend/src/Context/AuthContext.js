import React, { createContext, useState } from 'react';
import {  getCookie } from '../Utils/utils';
import {jwtDecode} from 'jwt-decode';

// Create the context
 const AuthContext = createContext();

// Create a provider component

function AuthProvider({ children }) {
    const token = getCookie('jwt');
    // console.log(token );
    let isLoggedIn  = false;
    let is_admin = false;
    if(token){
        const decodedToken = jwtDecode(token);
        isLoggedIn = true;
        is_admin = decodedToken.is_admin;
    }
    const [authState, setAuthState] = useState({ isLoggedIn: isLoggedIn, is_admin: is_admin });

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };