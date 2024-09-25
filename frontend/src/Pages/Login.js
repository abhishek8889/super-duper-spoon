import React  from "react";
import Input from "../Components/Input/Input";
import { useState  } from "react";
import axios from 'axios';

const Login = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const registerUser = async (e) => {
        e.preventDefault();
        // const response = await fetch("http://localhost:8080/api/register", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         email,
        //         password,
        //     }),
        // });
        // const data = await response.json();
        // console.log(data);

        axios.post('http://localhost:8080/api/register', {
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