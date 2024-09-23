import React  from "react";
import Input from "../Components/Input/Input";
const Login = () => {
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
                        />
                    </div>
                    <div className="mb-3">
                        <Input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            label="Password"
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