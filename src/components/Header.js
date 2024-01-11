import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{

    // let btnName= "Login";

    const [btnNameReact, setbtnNameReact] = useState("Login"); 

    const status = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    //selector is a hook inside react. we are subscribing to the store using a selector. we need to inform what we need access to hence we add store.cart.items
    const cartItems = useSelector((store) => store.cart.items);

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2 px-5 sm:bg-yellow-200 lg:bg-green-200">
            <div className="logo-container">
               <div>
                    <Link to="/">   <img className="w-56" src={LOGO_URL} /></Link>
                </div>
            </div>
            <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">
                    Online Status:{status ? " 🟢 " : " 🔴 "}
                </li>
                <li className="px-4">
                    <Link to="/"> Home </Link>
                </li>
                <li className="px-4"> 
                    <Link to="/About">About Us</Link>
                </li>
                <li className="px-4">
                    <Link to="/Contact">Contact Us</Link>
                </li>
                <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className="px-4 font-bold text-xl">
                <Link to="/cart">Cart ({cartItems.length} items)</Link>
                </li>
                <button className="login" onClick={
                    ()=>{   btnNameReact == "Login" ? setbtnNameReact("Logout"):setbtnNameReact("Login") ;                             
                        }
                    }>{btnNameReact}</button>
                <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
            </div>
        </div>
    )
}

export default Header; 