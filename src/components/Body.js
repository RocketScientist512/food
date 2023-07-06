import React from "react";
import RestaurauntCard from "./RestaurauntCard";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import resList from "./utils/mockData";
import Shimmer from "./Shimmer";

const Body = () =>{

    const [listOfRestauraunt, setListofRestauraunt] = useState([]);//resList should be here for mock data. If we leave it empty, it is a blank slate. 
//we can also delete mockData.js and the file - import resList from "./utils/mockData"; Keeping it here for render show purpose. 

    const [filteredRestaraunt, setFilteredRestauraunt] = useState([]);

    const [searchText, setSearchText] = useState([]);
    useEffect(()=>{
        fetchData(); 
    },[]);
    
    //console.log("Body rendered");

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json); 

        setListofRestauraunt(json.data.cards[2].data.data.cards);
        setFilteredRestauraunt(json.data.cards[2].data.data.cards);
    }
    // let listOfRestaurauntJS= [
    //         {
    //         "type": "restaurant",
    //         "data": {
    //         "type": "F",
    //         "id": "444178",
    //         "name": "Magnolia Bakery",
    //         "uuid": "8cd8348a-2edd-4a13-8840-c2fc77396821",
    //         "city": "1",
    //         "area": "Indiranagar",
    //         "totalRatingsString": "5000+ ratings",
    //         "cloudinaryImageId": "6f0945b8b18d9f4241dd1cd9a70e23d7",
    //         "cuisines": [
    //         "Bakery",
    //         "Desserts",
    //         "Ice Cream"
    //         ],
    //         "tags": [],
    //         "costForTwo": 50000,
    //         "costForTwoString": "₹500 FOR TWO",
    //         "deliveryTime": 27,
    //         "minDeliveryTime": 27,
    //         "maxDeliveryTime": 27,
    //         "slaString": "27 MINS",
    //         "lastMileTravel": 6.099999904632568,
    //         "slugs": {
    //         "restaurant": "magnolia-bakery-indiranagar-indiranagar",
    //         "city": "bangalore"
    //         },
    //         "cityState": "1",
    //         "address": "J.K. Plaza, 788, 12th Main Rd, Indiranagar, Bengaluru, Karnataka 560038",
    //         "locality": "JK Plaza",
    //         "parentId": 267303,
    //         "unserviceable": false,
    //         "veg": false,
    //         "select": false,
    //         "favorite": false,
    //         "tradeCampaignHeaders": [],
    //         "ribbon": [
    //         {
    //         "type": "PROMOTED"
    //         }
    //         ],
    //         "chain": [],
    //         "feeDetails": {
    //         "fees": [
    //         {
    //         "name": "distance",
    //         "fee": 6900,
    //         "message": ""
    //         },
    //         {
    //         "name": "time",
    //         "fee": 2500,
    //         "message": ""
    //         },
    //         {
    //         "name": "special",
    //         "fee": 0,
    //         "message": ""
    //         }
    //         ],
    //         "totalFees": 9400,
    //         "message": "",
    //         "title": "Delivery Charge",
    //         "amount": "9400",
    //         "icon": ""
    //         },
    //         "availability": {
    //         "opened": true,
    //         "nextOpenMessage": "",
    //         "nextCloseMessage": ""
    //         },
    //         "longDistanceEnabled": 0,
    //         "rainMode": "NONE",
    //         "thirdPartyAddress": false,
    //         "thirdPartyVendor": "",
    //         "adTrackingID": "cid=6292837~p=1~eid=00000187-b97f-c07e-0261-406d00da0170",
    //         "badges": {
    //         "imageBased": [],
    //         "textBased": [],
    //         "textExtendedBadges": []
    //         },
    //         "lastMileTravelString": "6 kms",
    //         "hasSurge": false,
    //         "sla": {
    //         "restaurantId": "444178",
    //         "deliveryTime": 27,
    //         "minDeliveryTime": 27,
    //         "maxDeliveryTime": 27,
    //         "lastMileTravel": 6.099999904632568,
    //         "lastMileDistance": 0,
    //         "serviceability": "SERVICEABLE",
    //         "rainMode": "NONE",
    //         "longDistance": "NOT_LONG_DISTANCE",
    //         "preferentialService": false,
    //         "iconType": "EMPTY"
    //         },
    //         "promoted": true,
    //         "avgRating": "3.6",
    //         "totalRatings": 5000,
    //         "new": false
    //         },
    //         "subtype": "basic"
    //         },
    //         {
    //         "type": "restaurant",
    //         "data": {
    //         "type": "F",
    //         "id": "3241",
    //         "name": "Meghana Foods",
    //         "uuid": "93695df0-56e1-417e-b9a8-32084ebaadaf",
    //         "city": "1",
    //         "area": "Ashok Nagar",
    //         "totalRatingsString": "10000+ ratings",
    //         "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
    //         "cuisines": [
    //         "Biryani",
    //         "Andhra",
    //         "South Indian",
    //         "North Indian",
    //         "Chinese",
    //         "Seafood"
    //         ],
    //         "tags": [],
    //         "costForTwo": 50000,
    //         "costForTwoString": "₹500 FOR TWO",
    //         "deliveryTime": 24,
    //         "minDeliveryTime": 24,
    //         "maxDeliveryTime": 24,
    //         "slaString": "24 MINS",
    //         "lastMileTravel": 2.4000000953674316,
    //         "slugs": {
    //         "restaurant": "meghana-foods-central-bangalore",
    //         "city": "bangalore"
    //         },
    //         "cityState": "1",
    //         "address": "57/1, 1st Floor, Jayalaxmi Chambers, Next to Old Galaxy Theatre,Residency Road, Bangalore",
    //         "locality": "Residency Road",
    //         "parentId": 635,
    //         "unserviceable": false,
    //         "veg": false,
    //         "select": false,
    //         "favorite": false,
    //         "tradeCampaignHeaders": [],
    //         "chain": [],
    //         "feeDetails": {
    //         "fees": [
    //         {
    //         "name": "distance",
    //         "fee": 3300,
    //         "message": ""
    //         },
    //         {
    //         "name": "time",
    //         "fee": 0,
    //         "message": ""
    //         },
    //         {
    //         "name": "special",
    //         "fee": 0,
    //         "message": ""
    //         }
    //         ],
    //         "totalFees": 3300,
    //         "message": "",
    //         "title": "Delivery Charge",
    //         "amount": "3300",
    //         "icon": ""
    //         },
    //         "availability": {
    //         "opened": true,
    //         "nextOpenMessage": "",
    //         "nextCloseMessage": ""
    //         },
    //         "longDistanceEnabled": 0,
    //         "rainMode": "NONE",
    //         "thirdPartyAddress": false,
    //         "thirdPartyVendor": "",
    //         "adTrackingID": "",
    //         "badges": {
    //         "imageBased": [],
    //         "textBased": [],
    //         "textExtendedBadges": []
    //         },
    //         "lastMileTravelString": "2.4 kms",
    //         "hasSurge": false,
    //         "sla": {
    //         "restaurantId": "3241",
    //         "deliveryTime": 24,
    //         "minDeliveryTime": 24,
    //         "maxDeliveryTime": 24,
    //         "lastMileTravel": 2.4000000953674316,
    //         "lastMileDistance": 0,
    //         "serviceability": "SERVICEABLE",
    //         "rainMode": "NONE",
    //         "longDistance": "NOT_LONG_DISTANCE",
    //         "preferentialService": false,
    //         "iconType": "EMPTY"
    //         },
    //         "promoted": false,
    //         "avgRating": "4.5",
    //         "totalRatings": 10000,
    //         "new": false
    //         },
    //         "subtype": "basic"
    //         },
    //         {
    //         "type": "restaurant",
    //         "data": {
    //         "type": "F",
    //         "id": "25618",
    //         "name": "KFC",
    //         "uuid": "44d77e55-f3c2-4c42-ad9c-3d522e6453be",
    //         "city": "1",
    //         "area": "Indiranagar",
    //         "totalRatingsString": "10000+ ratings",
    //         "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
    //         "cuisines": [
    //         "Burgers",
    //         "Biryani",
    //         "American",
    //         "Snacks",
    //         "Fast Food"
    //         ],
    //         "tags": [],
    //         "costForTwo": 40000,
    //         "costForTwoString": "₹400 FOR TWO",
    //         "deliveryTime": 32,
    //         "minDeliveryTime": 32,
    //         "maxDeliveryTime": 32,
    //         "slaString": "32 MINS",
    //         "lastMileTravel": 6.199999809265137,
    //         "slugs": {
    //         "restaurant": "kfc-100-ft-road-indiranagar",
    //         "city": "bangalore"
    //         },
    //         "cityState": "1",
    //         "address": "# 1/1A, 100 ft Road, Indiranagar, Bangalore 560038",
    //         "locality": "100 ft road",
    //         "parentId": 547,
    //         "unserviceable": false,
    //         "veg": false,
    //         "select": false,
    //         "favorite": false,
    //         "tradeCampaignHeaders": [],
    //         "aggregatedDiscountInfo": {
    //         "header": "20% off",
    //         "shortDescriptionList": [
    //         {
    //         "meta": "20% off | Use SWIGGYIT",
    //         "discountType": "Percentage",
    //         "operationType": "RESTAURANT"
    //         }
    //         ],
    //         "descriptionList": [
    //         {
    //         "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
    //         "discountType": "Percentage",
    //         "operationType": "RESTAURANT"
    //         }
    //         ],
    //         "subHeader": "",
    //         "headerType": 0,
    //         "superFreedel": ""
    //         },
    //         "aggregatedDiscountInfoV2": {
    //         "header": "20% OFF",
    //         "shortDescriptionList": [
    //         {
    //         "meta": "Use SWIGGYIT",
    //         "discountType": "Percentage",
    //         "operationType": "RESTAURANT"
    //         }
    //         ],
    //         "descriptionList": [
    //         {
    //         "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
    //         "discountType": "Percentage",
    //         "operationType": "RESTAURANT"
    //         }
    //         ],
    //         "subHeader": "",
    //         "headerType": 0,
    //         "superFreedel": ""
    //         },
    //         "ribbon": [
    //         {
    //         "type": "PROMOTED"
    //         }
    //         ],
    //         "chain": [],
    //         "feeDetails": {
    //         "fees": [
    //         {
    //         "name": "distance",
    //         "fee": 6900,
    //         "message": ""
    //         },
    //         {
    //         "name": "time",
    //         "fee": 2500,
    //         "message": ""
    //         },
    //         {
    //         "name": "special",
    //         "fee": 0,
    //         "message": ""
    //         }
    //         ],
    //         "totalFees": 9400,
    //         "message": "",
    //         "title": "Delivery Charge",
    //         "amount": "9400",
    //         "icon": ""
    //         },
    //         "availability": {
    //         "opened": true,
    //         "nextOpenMessage": "",
    //         "nextCloseMessage": ""
    //         },
    //         "longDistanceEnabled": 0,
    //         "rainMode": "NONE",
    //         "thirdPartyAddress": false,
    //         "thirdPartyVendor": "",
    //         "adTrackingID": "cid=6536480~p=4~eid=00000187-b97f-c07e-0261-406e00da0479",
    //         "badges": {
    //         "imageBased": [],
    //         "textBased": [],
    //         "textExtendedBadges": []
    //         },
    //         "lastMileTravelString": "6.1 kms",
    //         "hasSurge": false,
    //         "sla": {
    //         "restaurantId": "25618",
    //         "deliveryTime": 32,
    //         "minDeliveryTime": 32,
    //         "maxDeliveryTime": 32,
    //         "lastMileTravel": 6.199999809265137,
    //         "lastMileDistance": 0,
    //         "serviceability": "SERVICEABLE",
    //         "rainMode": "NONE",
    //         "longDistance": "NOT_LONG_DISTANCE",
    //         "preferentialService": false,
    //         "iconType": "EMPTY"
    //         },
    //         "promoted": true,
    //         "avgRating": "4.1",
    //         "totalRatings": 10000,
    //         "new": false
    //         },
    //         "subtype": "basic"
    //         },
    // ];


//conditional rendering
    // if(listOfRestauraunt.length ==0){
    //     // return <h1>Keep Calm and Biryani On !!</h1>
    //     return <Shimmer/>
    // }


    return listOfRestauraunt.length ==0 ? <Shimmer/>: (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value);}} />
                    <button onClick={()=>{
                        //filter the restauraunt cards and update the UI
                        //need search text
                        console.log(searchText);

                        let filteredRestaraunt = listOfRestauraunt.filter(
                            (res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            
                        setFilteredRestauraunt(filteredRestaraunt);

                    }}>Search</button>
                </div>
                <button 
                className="filter-btn" 
                    onClick={()=>{
                        setListofRestauraunt();
                            const filteredList = listOfRestauraunt.filter(
                                (res) => res.data.avgRating >4 
                            );
                            setListofRestauraunt(filteredList);
                         }}
                    >
                Top Rated Restaurants</button>
                <button
                className="original-btn" 
                         onClick={()=>{
                            const OriginalList=resList;
                            setListofRestauraunt(OriginalList);
                         }}
                >
                    Original State
                </button>
            </div>
            <div className="res-container">
                {                    
                    filteredRestaraunt.map((restaurant) => <RestaurauntCard key={restaurant.data.id} resData={restaurant} />)
                }
                {/*Restauraunt Card*/}
                {/* <RestaurauntCard resData={resList[0]}/>
                <RestaurauntCard resData={resList[1]}/>
                <RestaurauntCard resData={resList[2]}/>
                <RestaurauntCard resData={resList[3]}/>
                <RestaurauntCard resData={resList[4]}/>
                <RestaurauntCard resData={resList[5]}/>
                <RestaurauntCard resData={resList[6]}/>
                <RestaurauntCard resData={resList[7]}/>
                <RestaurauntCard resData={resList[8]}/>
                <RestaurauntCard resData={resList[9]}/>
                <RestaurauntCard resData={resList[10]}/>
                <RestaurauntCard resData={resList[11]}/>
                <RestaurauntCard resData={resList[12]}/>
                <RestaurauntCard resData={resList[13]}/>
                <RestaurauntCard resData={resList[14]}/> */}
                {/* <RestaurauntCard resName="KFC" cuisine="Fast Food, Burger" rating="4.4" deliveryTime="30 Minutes"/> */}
                {/* <RestaurauntCard />
                <RestaurauntCard />
                <RestaurauntCard />
                <RestaurauntCard />
                <RestaurauntCard />
                <RestaurauntCard />
                <RestaurauntCard />
                <RestaurauntCard />
                <RestaurauntCard />
                <RestaurauntCard /> */}
            </div>
        </div>
    )
}



export default Body