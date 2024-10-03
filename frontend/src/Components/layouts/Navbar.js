import React  from "react";
import { useNavigate } from 'react-router-dom';
import  {Link}  from "react-router-dom";
import { useContext , useEffect} from "react";
import {  clearAllCookies} from '../../Utils/utils';
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
    const { authState , setAuthState } = useContext(AuthContext); // Access authState
    
    console.log('#############  Navbar ##################');
    console.log(authState);
 
    const navigate = useNavigate();
  
    const handleLogout = () => {
        if(authState.isLoggedIn){
            clearAllCookies();
            setAuthState({ ...authState, isLoggedIn: false, is_admin: false });
            navigate('/login');
        }
    }

    return (
        <>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    {!authState.isLoggedIn && (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                    )}
                    {authState.isLoggedIn && (
                        <>
                            <li className="nav-item">
                                <button className="nav-link" onClick={handleLogout}>Logout</button>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/chat-box">Chat box</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </>
    )
}

export default Navbar;