
import React , {useState} from "react";

const Card = ({data}) => {
    const [image_url ,setImageUrl] = useState(''); 
    if(data.profile_image !== '' || data.profile_image !== undefined){
    }
    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                {/* {data.profile_image ? <img src={image_url} className="card-img-top" alt="..." />:''} */}
                
                <div className="card-body">
                    <h5 className="card-title">{data.name?data.name:''}</h5>
                    <p className="card-text">{data.email?data.email:''}</p>
                    <a href="#" className="btn btn-primary">Edit Profile</a>
                </div>
            </div>
        </>
    );
}

export default Card;