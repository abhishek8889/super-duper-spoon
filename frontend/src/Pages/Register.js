import React  from "react";
import Input from "../Components/Input/Input";
import axios from "axios";

import { useState  } from "react";
const Register = () => {
    const [name , setName] = useState("");
    const [phone , setPhone] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    if(email != 'test@gmail.com'){
        console.log("Email is not valid")
    }else{
        console.log("Email is valid")
    }

    console.log(`${name} ${email} ${password} ${phone}`)


    const registerUser = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/api/register', {
            name : name,
            email: email,
            password: password,
            phone: phone
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
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            label="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <Input
                            type="number"
                            name="phone"
                            placeholder="Enter your phone"
                            label="Enter your phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <Input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            label="Email Address"
                            email={email}
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
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Register;