import React  from "react";
import Input from "../Components/Input/Input";
import { useState  } from "react";
const Login = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    console.log(`${email}  ${password}`);

    return (
        <>
        <div className="container">
            <div className="mb-2"> 
                <form>
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