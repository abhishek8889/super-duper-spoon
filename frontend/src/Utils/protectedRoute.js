import React, { useContext} from 'react';
import { AuthContext } from '../Context/AuthContext'; // Assuming you're using an AuthContext for authentication
import { Navigate , useLocation } from 'react-router-dom';

const ProtectedRoute = ({children , isAdmin}) => {
    const { authState , setAuthState } = useContext(AuthContext);
    const location = useLocation();
    console.log('######### Hello from protected route ######### ');
    console.log(authState)
    console.log(children , isAdmin);
    console.log(location);
    if (!authState.isLoggedIn) {
      return <Navigate to="/login" state={{ from: location }} />;
    }
    if (isAdmin && authState.is_admin != isAdmin) {
      return <Navigate to="/unauthorized" />;
    }
  return children;
}


export default ProtectedRoute;



