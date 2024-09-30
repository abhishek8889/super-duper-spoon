import React  from "react";
import  {Link}  from "react-router-dom";
import { useState } from "react";
import {jwtDecode} from 'jwt-decode';
import { setCookie, getCookie, clearAllCookies } from '../../Utils/utils';

const Navbar = () => {
    const [isLogged, setIsLogged] = useState(getCookie('jwt') ? true : false);
    if(isLogged){
        const decodedToken = jwtDecode(getCookie('jwt'));
        console.log(decodedToken);
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
                                <Link className="nav-link" to="">Logout</Link>
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