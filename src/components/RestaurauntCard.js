import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurauntCard = (props) => {
    const { resData } = props; 

    //writing this line for test case
    //console.log(resData);

    const {loggedInUser} = useContext(UserContext);
    const cloudinaryImageId = resData.info.cloudinaryImageId;
    

    const{name, cuisines, avgRating, costForTwo, sla} = resData?.info; 
    //const styleCard={ backgroundColor: "#f0f0f0"};
    /*style={styleCard}*/
    return(
        <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-400" >
            <img className="rounded-lg" alt="res-food" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold px-2 py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes </h4>
            <h4>User : {loggedInUser}</h4>
        </div>
    )
}


//Higher order component

//input - Restauraunt card =>> Restauraunt Card Promoted

export const withPromotedLabel= (RestaurauntCard) => {
    return (props) =>{ //we need to write props here because inside the body, where RestaurauntCardPromoted is present, the resData is carrying the restauraunt
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurauntCard {...props}/>
            </div>
        );
    }
}


export default RestaurauntCard;