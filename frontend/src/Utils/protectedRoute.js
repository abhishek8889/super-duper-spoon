import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext'; // Assuming you're using an AuthContext for authentication

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authState } = useContext(AuthContext); // Access authState from the context

  return (
    <Route
      {...rest}
      render={(props) =>
        authState.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" /> // Redirect to login if not authenticated
        )
      }
    />
  );
};

export default ProtectedRoute;
