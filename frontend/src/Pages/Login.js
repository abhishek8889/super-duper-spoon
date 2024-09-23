import React  from "react";
import Input from "../Components/Input/Input";
import { useState  } from "react";
const Login = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const registerUser = async (e) => {
        e.preventDefault();
        alert('hello form is submited');
        // const response = await fetch("http://localhost:5000/api/auth/register", {
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