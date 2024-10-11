import React ,{useContext , useCallback,useState} from "react";
import Card from "../../Components/card/Card";
import { AuthContext } from "../../Context/AuthContext";
import { getCookie } from "../../Utils/utils";
import { jwtDecode } from "jwt-decode";

const Profile = () => {
    const [token , setToken] = useState(getCookie('jwt')?getCookie('jwt'):'');
    const authState  = useContext(AuthContext);
    const userData = jwtDecode(token);
    return (
        <>
        <div className="container mt-5">
            <Card data={userData}/>
        </div>
        </>
    )
}

export default Profile;