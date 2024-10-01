import React  from "react";
import Input from "../Components/Input/Input";
import { useState , useContext  } from "react";
import axios from 'axios';
// import Cookies from 'js-cookie';
import { setCookie, clearAllCookies } from '../Utils/utils';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
    const { setAuthState } = useContext(AuthContext);
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/api/login', {
            email: email,
            password: password
        })
        .then(function (response) {
            console.log('success');
            console.log(response);
            if(response.data.token !== undefined && response.data.token !== null && response.data.status === true){
                setCookie('jwt' ,response.data.token ,1);
                setAuthState({ isLoggedIn: true, is_admin: response.data.is_admin });
                navigate('/dashboard');
            } 
        })
        .catch(function (error) {
            console.log('error is there :: ');
            console.log(error);
        });
    }
    //
    // const setTokenInCookie = (token) => {
    //     Cookies.set('jwt', token, { expires: 1, path: '/' }); 
    // };

    // clearAllCookies() ;  
    
    
    return (
        <>
        <div className="container">
            <div className="mb-2"> 
                <form onSubmit={registerUser}>
                    <div className="mb-3">
                        <Input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            label="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <Input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Loin</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Login;