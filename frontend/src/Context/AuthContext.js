import React, { createContext, useState } from 'react';
// Create the context
 const AuthContext = createContext();
    
// Create a provider component
function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({ isLoggedIn: false, is_admin: false });

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };