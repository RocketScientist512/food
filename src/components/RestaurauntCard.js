import React from "react";
import { CDN_URL } from "../components/utils/constants";


const RestaurauntCard = (props) => {
    const { resData } = props; 
    const cloudinaryImageId = resData.data.cloudinaryImageId;

    const{name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data; 
    const styleCard={ backgroundColor: "#f0f0f0"};
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-food" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>Cost for 2 : {costForTwo/100}</h4>
            <h4>{deliveryTime} minutes </h4>
        </div>
    )
}

export default RestaurauntCard;