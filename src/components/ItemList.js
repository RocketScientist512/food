import React from "react";
import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice"
import { CDN_URL } from "../utils/constants";

const ItemList = ({items})=>{
    console.log(items);

    const dispatch=useDispatch();

    //dispatch an action
    const handleAddItem =(item) =>{
        dispatch(addItem(item)); //this will pass the value 'pizza' to action.payload. Redux will create an object and payload out of this. 

    }
    return (<div>
        
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"> 

                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span><br/>
                            <span>₹ {(item.card.info.price | item.card.info.defaultPrice)/100}</span>
                        </div>
                        <p className="text-xs m-2">{item.card.info.description}</p>
                    </div>

                    <div  className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="bg-black text-white px-7 shadow-lg my-15 rounded-lg" onClick={()=>handleAddItem(item)}>Add +</button>
                        </div>
                        <div>
                             <img src={CDN_URL + item.card.info.imageId} /> 
                        </div>
                    </div>
                </div>
            ))}

    </div>)
}

export default ItemList;