import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurauntCategory = ({data, showItems, setshowIndex}) =>{

    // const [showItems, setShowItems] = useState(false);

     const handleClick = () => {
    //     setShowItems(!showItems);
            setshowIndex();
     };
    //console.log(data);
    return <div>
        {/*Accordion header */}
            <div className="w-6/12 bg-gray-50 mx-auto my-4 shadow-lg p-4 m-auto"> 
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length}) </span>
                    {/* removed the line 'onClick={handleClick}' from above */}
                    <span> ⬇️ </span>
                </div>
                   { showItems && <ItemList items={data.itemCards} />  }
                    {/* state variable will be used to control if the collapse should be available or not */}
            </div>
        {/*Accordion body */}
        <div>
            
        </div>
    </div>
}

export default RestaurauntCategory;