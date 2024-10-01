import React  from "react";
import Input from "../Components/Input/Input";
import axios from "axios";

import { useState  } from "react";
const Register = () => {
    // ############ Setting Variables ############

    const [name , setName] = useState("");
    const [phone , setPhone] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [profileImage , setProfileImage] = useState("");

    // ############ Handle Image Uploading ############

    const handleFileChange = (e) => {
        console.log('hello from file change');
    
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setProfileImage(img);
    }

    // ############ Register User ############

    const registerUser = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('phone', phone);
        formData.append('profileImage', profileImage.data);
        // console.log(profileImage.data);
        // return false;
        axios.post('http://localhost:8080/api/register', formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then(function (response) {
            // console.log()
            if(response.data.status === true){
                setName('');
                setEmail('');
                setPassword('');
                setPhone('');
                setProfileImage('');
            }
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
                <form id="registerForm" onSubmit={registerUser}> 
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
                    <div className="mb-3">
                        <Input
                            type="file"
                            name="profile_image"
                            label="Enter your profile image"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="img-preview mb-1">
                        {profileImage.preview && <img src={profileImage.preview} width='100' height='100' alt="test" />}
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Register;