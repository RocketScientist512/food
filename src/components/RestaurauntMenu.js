import React from "react"
// import {useState ,  useEffect } from "react"
import { useParams } from "react-router-dom";
import RestaurauntCategory from "./RestaurauntCategory";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurauntMenu = () =>{
    //displays the restauraunt menu on the UI & now the code is cleaner. 
    //const [resInfo, setResInfo] = useState(null); Moved to the utils section

    const {resId} = useParams(); 
    console.log(resId);

    const data = "Dummy Data"; 

    const resInfo= useRestaurantMenu(resId); //Restauraunt menu does not have to worry about execution of this hook (collecting data). It only works on the display not how to display the data. 

    //Moved to utils section
    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async() => {
    //     const data = await fetch(MENU_API+resId); 
    //     const json = await data.json();

    //     console.log(json); 
    //     setResInfo(json.data); 
    // };
    //Moved to utils section

    //working on the collapse and expand of the accordion
    const [showIndex, setshowIndex] = useState(null);

    //limited to this section only

    if(resInfo === null)  return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
                                        (c)=>
                                            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(categories);

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines. join(", ")} - {costForTwoMessage}</p>
            {/* <ul>
                {/* <li>{itemCards[0]?.card?.info?.name}</li>
                <li>{itemCards[1]?.card?.info?.name}</li>
                <li>{itemCards[2]?.card?.info?.name}</li> 
                {itemCards.map(item => ( 
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {" Rs."}
                        {item.card.info.price/100 || item.card.info.defaultPrice/100}
                    </li>
                ))}
            </ul> */}
            
            {/*Category accordion being built now  */}

            {categories.map((category, index)=>(
                <RestaurauntCategory 
                    key={category?.card?.card.title} 
                    data={category?.card?.card} 
                    showItems={index === showIndex && true}
                    setshowIndex = {() => setshowIndex(index)}
                    />
                )
            )}
            


        </div>
    )
}

export default RestaurauntMenu