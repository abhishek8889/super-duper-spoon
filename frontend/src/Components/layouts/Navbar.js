import React  from "react";
import { useNavigate } from 'react-router-dom';
import  {Link}  from "react-router-dom";
import { useState , useContext , useEffect} from "react";
import {jwtDecode} from 'jwt-decode';
import {  getCookie , clearAllCookies} from '../../Utils/utils';
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const { authState , setAuthState} = useContext(AuthContext); // Access authState
    const navigate = useNavigate();

    // Run once when the component mounts or when authState changes
    useEffect(() => {
        try {
            // Assuming getCookie is a function to retrieve the JWT token from cookies
            const token = getCookie('jwt');
            
            if (authState.isLoggedIn) {
                setIsLogged(true);
                console.log('auth check fro cntexxt')
            } else if (token) {
                console.log('check from token');
                const decodedToken = jwtDecode(token);
                if (decodedToken && decodedToken.user) {
                    setIsLogged(true);
                    setIsAdmin(decodedToken.is_admin);
                    // setAuthState({ ...authState, isLoggedIn: true, is_admin: decodedToken.is_admin });
                } else {
                    setIsLogged(false);
                }
            } else {
                setIsLogged(false);
            }
        } catch (error) {
            console.error('Error decoding JWT:', error);
            setIsLogged(false);
        }
    }, [authState]); // Re-run this effect if `authState` changes

    // console.log("############ Auth State ############");
    // console.log(isLogged , isAdmin);

    const handleLogout = () => {
        if(isLogged){
            clearAllCookies();
            setIsLogged(false);
            setIsAdmin(false);
            navigate('/login');
        }
    }

    return (
        <>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    {!isLogged && (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                    )}
                    {isLogged && (
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
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
            </div>
        </>
    )
}

export default Navbar;