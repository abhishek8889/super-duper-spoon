import React  from "react";
import Input from "../Components/Input/Input";
import { useState  } from "react";
import axios from 'axios';


const Login = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const registerUser = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/api/login', {
            email: email,
            password: password
        })
        .then(function (response) {
            console.log('success');
            console.log(response);
        })
        .catch(function (error) {
            console.log('error is there :: ');
            console.log(error);
        });
    }
    //
    function getCookie(name) {
        const cookieString = document.cookie;
        const cookies = cookieString.split('; '); // Split cookies into an array
        const cookie = cookies.find(row => row.startsWith(`${name}=`));
        return cookie ? cookie.split('=')[1] : null; // Return the cookie value or null if not found
    }
    const token = getCookie('token');
    
    console.log(token);
    
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