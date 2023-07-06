//const heading = React.createElement("h1", {id: "heading" }, "Hello World from React"); 
import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurauntMenu from "./components/RestaurauntMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { children } from "react/cjs/react.production.min";

//#1-2 code provided
// const parent = React.createElement("div", {id:"parent"}, [
//     React.createElement("div",{id:"child"}, [
//          [React.createElement("h1", {},"This is a new tag in h1"), React.createElement("h2", {},"This is an h2 tag")]
//     ]),
//     React.createElement("div",{id:"child2"}, [
//         [React.createElement("h1", {},"This is an h1 tag"), React.createElement("h2", {},"This is an h2 tag")]
//     ]),
//  ]);
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


//#3 - Laying the foundation
    //React Element
    // const heading = React.createElement(
    //                "h1", 
    //                {id:"heading"}, 
    //                  "Namaste React"
    //            ); //this creates an object

    //  console.log(heading);


    //react element

//     const elem = <span>React Element</span>

//     //JSX
//     const heading = <h1 className="head" tabIndex="5">This is a JSX Heading</h1>;

//     const Title = () => (
//         <h1 className="child">
//             {elem}<br />
//             This is a new Functional Component</h1>
//     );

//         const name = "Rohan";

//    //React Component - Functional 
//    const HeadingComponent = () => (
//        <React.Fragment>
//     <div id="container"><h1>Functional Component</h1>
//         {Title()}
//         <Title />
//         <Title></Title>
//         {/**   <h2>{name}</h2> */}
//         {heading}
//     </div>
//     <div id="container-2">
//         <h1>Part 2</h1>
//     </div>
//     </React.Fragment>
//    );
// //    const anotherWay = () => {
// //        return <h2>This is also correct</h2>;
// //    };

//<div id="root"> <script> const heading = document.createElement("h1"); heading = "Hello World"; const root = document.getElementById("root"); root.appendChild(heading);</script> </div>
//<script> const heading = React.createElement("h1",{}, "Hello World"); const root = ReactDOM.createRoot(document.getElementById("root")); root.render(heading); </script>

{/**Chapter 4 */}

/*const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    )
}*/



/*const RestaurauntCard = (props) => {
    const { resData } = props; 
    const cloudinaryImageId = resData.data.cloudinaryImageId;

    const{name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data; 

    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-food" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>Cost for 2 : {costForTwo/100}</h4>
            <h4>{deliveryTime} minutes </h4>
        </div>
    )
}*/


/*const resList =[
    {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "444178",
        "name": "Magnolia Bakery",
        "uuid": "8cd8348a-2edd-4a13-8840-c2fc77396821",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "6f0945b8b18d9f4241dd1cd9a70e23d7",
        "cuisines": [
        "Bakery",
        "Desserts",
        "Ice Cream"
        ],
        "tags": [],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 6.099999904632568,
        "slugs": {
        "restaurant": "magnolia-bakery-indiranagar-indiranagar",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "J.K. Plaza, 788, 12th Main Rd, Indiranagar, Bengaluru, Karnataka 560038",
        "locality": "JK Plaza",
        "parentId": 267303,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 6900,
        "message": ""
        },
        {
        "name": "time",
        "fee": 2500,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 9400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "9400",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6292837~p=1~eid=00000187-b97f-c07e-0261-406d00da0170",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "6 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "444178",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 6.099999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.6",
        "totalRatings": 5000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "3241",
        "name": "Meghana Foods",
        "uuid": "93695df0-56e1-417e-b9a8-32084ebaadaf",
        "city": "1",
        "area": "Ashok Nagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
        "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood"
        ],
        "tags": [],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 2.4000000953674316,
        "slugs": {
        "restaurant": "meghana-foods-central-bangalore",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "57/1, 1st Floor, Jayalaxmi Chambers, Next to Old Galaxy Theatre,Residency Road, Bangalore",
        "locality": "Residency Road",
        "parentId": 635,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3300,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "2.4 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "3241",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 2.4000000953674316,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.5",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "25618",
        "name": "KFC",
        "uuid": "44d77e55-f3c2-4c42-ad9c-3d522e6453be",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
        ],
        "tags": [],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 6.199999809265137,
        "slugs": {
        "restaurant": "kfc-100-ft-road-indiranagar",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "# 1/1A, 100 ft Road, Indiranagar, Bangalore 560038",
        "locality": "100 ft road",
        "parentId": 547,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
        {
        "meta": "20% off | Use SWIGGYIT",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use SWIGGYIT",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 6900,
        "message": ""
        },
        {
        "name": "time",
        "fee": 2500,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 9400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "9400",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6536480~p=4~eid=00000187-b97f-c07e-0261-406e00da0479",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "6.1 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "25618",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 6.199999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "30531",
        "name": "Hotel Empire",
        "uuid": "b6535450-6f4c-434f-8cae-425317928346",
        "city": "1",
        "area": "Brigade Road",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "qltgnkyywuo5gmnpqzbm",
        "cuisines": [
        "North Indian",
        "Kebabs",
        "Biryani"
        ],
        "tags": [],
        "costForTwo": 45000,
        "costForTwoString": "₹450 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 2.0999999046325684,
        "slugs": {
        "restaurant": "empire-restaurant-central-bangalore-central-bangalore",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "Empire SuitesNo.35, Castle Street, Off Brigade Road,Bengaluru, Karnataka 560025",
        "locality": "",
        "parentId": 475,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "10% off",
        "shortDescriptionList": [
        {
        "meta": "10% off | Use MATCHPARTY",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "10% off | Use code MATCHPARTY",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "10% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use MATCHPARTY",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "10% off | Use code MATCHPARTY",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3300,
        "message": ""
        },
        {
        "name": "time",
        "fee": 2500,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 5800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5800",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "30531",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 2.0999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "496253",
        "name": "Kitchens of China",
        "uuid": "4bcd20ed-3285-470e-9eb2-d738aaab9850",
        "city": "1",
        "area": "Ashok Nagar",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "gqrogfv3tylywhkkiqa1",
        "cuisines": [
        "Chinese",
        "Thai",
        "Asian",
        "Pan-Asian",
        "Oriental",
        "Desserts",
        "Beverages"
        ],
        "tags": [],
        "costForTwo": 45000,
        "costForTwoString": "₹450 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 0.800000011920929,
        "slugs": {
        "restaurant": "kitchens-of-china-central-bangalore-central-bangalore",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "Gilly's Resto Bar, 2nd Floor, Vasavi Complex, 17, St Marks Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
        "locality": "St Marks Road",
        "parentId": 6956,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "Flat ₹125 off",
        "shortDescriptionList": [
        {
        "meta": "Flat ₹125 off on orders above ₹249",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
        {
        "meta": "Use MATCHDEAL125",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3300,
        "message": ""
        },
        {
        "name": "time",
        "fee": 2500,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 5800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5800",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6547317~p=7~eid=00000187-b97f-c07e-0261-406f00da070f",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "496253",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 0.800000011920929,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.8",
        "totalRatings": 100,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "121603",
        "name": "Kannur Food Point",
        "uuid": "51983905-e698-4e31-b0d7-e376eca56320",
        "city": "1",
        "area": "Tavarekere",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
        "cuisines": [
        "Kerala",
        "Chinese"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 6.699999809265137,
        "slugs": {
        "restaurant": "kannur-food-point-btm",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
        "locality": "SG Palya",
        "parentId": 20974,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off on all orders",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off on all orders",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off on all orders",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "time",
        "fee": 2500,
        "message": ""
        },
        {
        "name": "distance",
        "fee": 6900,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 9400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "9400",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 1,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "6.6 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "121603",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 6.699999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "428",
        "name": "Biryani Pot",
        "uuid": "6db20a8b-dd85-4148-b750-107169f7f826",
        "city": "1",
        "area": "Btm Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
        "cuisines": [
        "North Indian",
        "Biryani"
        ],
        "tags": [],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "slaString": "29 MINS",
        "lastMileTravel": 7.5,
        "slugs": {
        "restaurant": "biryani-pot-madiwala-junction-btm",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
        "locality": "Maruti Nagar",
        "parentId": 21798,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
        {
        "meta": "20% off | Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "20% off up to ₹50 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "20% off up to ₹50 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "time",
        "fee": 2500,
        "message": ""
        },
        {
        "name": "distance",
        "fee": 7900,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 10400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "10400",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 1,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "7.5 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "428",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 7.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "364569",
        "name": "Chai Point",
        "uuid": "ec183d1e-2caf-468e-8bac-dd58bc0bd33d",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "ry2vdvwpwwwcgwodycyt",
        "cuisines": [
        "Bakery",
        "Beverages",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "South Indian",
        "Punjabi"
        ],
        "tags": [],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "slaString": "34 MINS",
        "lastMileTravel": 5.900000095367432,
        "slugs": {
        "restaurant": "chai-point-indira-nagar-1st-stage-koramangala",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "Salarpuria house G floor, # 496, Chinmaya Mission Hospital Rd, Indira Nagar 1st Stage, Stage 1 Indiranagar, Bengaluru, Karnataka 560038",
        "locality": "1st Stage",
        "parentId": 1607,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use GUILTFREE",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹120 | Use code GUILTFREE",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use GUILTFREE",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹120 | Use code GUILTFREE",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 5900,
        "message": ""
        },
        {
        "name": "time",
        "fee": 2500,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 8400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8400",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6524330~p=25~eid=00000187-b97f-c07e-0261-407500da1975",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "5.9 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "364569",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 5.900000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.5",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "574263",
        "name": "Rahhams",
        "uuid": "9ddbdf8d-e73c-4a33-81f2-3713c4193b39",
        "city": "1",
        "area": "Frazer Town",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "edkut9gmhjqq6urnnmwv",
        "cuisines": [
        "Biryani",
        "Mughlai",
        "North Indian",
        "Kebabs",
        "Chinese",
        "Seafood",
        "Beverages"
        ],
        "tags": [],
        "costForTwo": 70000,
        "costForTwoString": "₹700 FOR TWO",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "slaString": "38 MINS",
        "lastMileTravel": 4.599999904632568,
        "slugs": {
        "restaurant": "rahhams-frazer-town-frazer-town-2",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "82, Maiganda Deva Mudaliar Rd, Pulikeshi Nagar, Bengaluru, Karnataka 560005, India",
        "locality": "Pulikeshi Nagar",
        "parentId": 2534,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "time",
        "fee": 2500,
        "message": ""
        },
        {
        "name": "distance",
        "fee": 4900,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 7400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "7400",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6545856~p=16~eid=00000187-b97f-c07e-0261-407200da1032",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "4.5 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "574263",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "lastMileTravel": 4.599999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "215852",
        "name": "Third Wave Coffee",
        "uuid": "7d89d01e-399e-415d-8bf7-823a6f54c0e4",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "0dca660dbdf2e04f9b861c4426ffd41e",
        "cuisines": [
        "Beverages",
        "Bakery",
        "Continental"
        ],
        "tags": [],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 5.599999904632568,
        "slugs": {
        "restaurant": "third-wave-coffee-roasters-indiranagar-indiranagar-2",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "no 970, 12th Main Road, HAL 2nd Stage, Doopanahalli, Indiranagar, Bengaluru, Karnataka, India",
        "locality": "HAL 2nd Stage",
        "parentId": 274773,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "30% off",
        "shortDescriptionList": [
        {
        "meta": "30% off | Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "30% off up to ₹75 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "30% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "30% off up to ₹75 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "time",
        "fee": 2500,
        "message": ""
        },
        {
        "name": "distance",
        "fee": 5900,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 8400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8400",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6558353~p=19~eid=00000187-b97f-c07e-0261-407300da1366",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "5.5 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "215852",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 5.599999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.4",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "5938",
        "name": "Burger King",
        "uuid": "15bfac38-f648-4d1f-8a91-7bbd6f9a4c1e",
        "city": "1",
        "area": "Shivaji Nagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "28fb13049b4e55297bb3f703cde63c35",
        "cuisines": [
        "Burgers",
        "American"
        ],
        "tags": [],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 2.5,
        "slugs": {
        "restaurant": "burger-king-central-bangalore",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "Unit no 111/4, and 8/2, Asha Gallary, Opposite to west side , Commercial Street, Bangalore-  5600001",
        "locality": "Tasker Town",
        "parentId": 166,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
        {
        "meta": "40% off | Use SWIGGYIT",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "40% off up to ₹80 | Use code SWIGGYIT",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use SWIGGYIT",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "40% off up to ₹80 | Use code SWIGGYIT",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3300,
        "message": ""
        },
        {
        "name": "time",
        "fee": 2500,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 5800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5800",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "5938",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 2.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "210945",
        "name": "Royal Restaurant",
        "uuid": "9b33bca4-65e6-4a26-af3e-f47c4476ed4d",
        "city": "1",
        "area": "Shivajinagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "yicweopn4lzcjlqy4jvq",
        "cuisines": [
        "Chinese",
        "North Indian",
        "Tandoor"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 2.5999999046325684,
        "slugs": {
        "restaurant": "royal-restaurant-central-bangalore-central-bangalore",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "Broadway Road Police Station, HKP Road, Sulthangunta, Shivajinagar, Bengaluru, Bangalore Urban, Karnataka, India",
        "locality": "Sulthangunta",
        "parentId": 2896,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "35% off",
        "shortDescriptionList": [
        {
        "meta": "35% off on all orders",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        },
        {
        "meta": "Free Phirni on orders above ₹490",
        "discountType": "Freebie",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "35% off on all orders",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        },
        {
        "meta": "Free Phirni on orders above ₹490",
        "discountType": "Freebie",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "35% OFF",
        "shortDescriptionList": [
        {
        "meta": "",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "35% off on all orders",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        },
        {
        "meta": "Free Phirni on orders above ₹490",
        "discountType": "Freebie",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3300,
        "message": ""
        },
        {
        "name": "time",
        "fee": 2500,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 5800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5800",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "210945",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 2.5999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "256957",
        "name": "Shanmukha Restaurant",
        "uuid": "c1972fbf-2e19-42d6-ac49-54f412f78d86",
        "city": "1",
        "area": "Jayanagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "c5howge9hbdor7uqf949",
        "cuisines": [
        "Biryani",
        "Hyderabadi",
        "Andhra",
        "North Indian",
        "South Indian",
        "Chinese",
        "Tandoor",
        "Seafood",
        "Beverages"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "slaString": "34 MINS",
        "lastMileTravel": 7.400000095367432,
        "slugs": {
        "restaurant": "shanmukha-restaurant-jayanagar-jayanagar",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "1313, Near Bangalore Central Mall, 25th Main, 9th Block, Jayanagar, Bengaluru, Karnataka 560069, India",
        "locality": "9th Block",
        "parentId": 9954,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "FLAT100 off",
        "shortDescriptionList": [
        {
        "meta": "FLAT100 off | Use FLATDEAL",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "FLAT100 off | Use FLATDEAL",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "₹100 OFF",
        "shortDescriptionList": [
        {
        "meta": "Use FLATDEAL",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "FLAT100 off | Use FLATDEAL",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 7900,
        "message": ""
        },
        {
        "name": "time",
        "fee": 2500,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 10400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "10400",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "7.4 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "256957",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 7.400000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "91103",
        "name": "Brik Oven",
        "uuid": "a031accb-4a6f-423e-9e85-41519e0414f6",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "49352a71022a5b08a8361306ba253892",
        "cuisines": [
        "Italian",
        "Pizzas",
        "Desserts",
        "Beverages"
        ],
        "tags": [],
        "costForTwo": 100000,
        "costForTwoString": "₹1000 FOR TWO",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "slaString": "34 MINS",
        "lastMileTravel": 7.199999809265137,
        "slugs": {
        "restaurant": "brik-oven-indiranagar",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "Brik Oven, 872/A, 80 Feet Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560044",
        "locality": "HAL 2nd Stage",
        "parentId": 7389,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "Flat 175 off",
        "shortDescriptionList": [
        {
        "meta": "Flat 175 off | Use FLAT175",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "Flat 175 off | Use code FLAT175",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "₹175 OFF",
        "shortDescriptionList": [
        {
        "meta": "Use FLAT175",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "Flat 175 off | Use code FLAT175",
        "discountType": "Flat",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "time",
        "fee": 2500,
        "message": ""
        },
        {
        "name": "distance",
        "fee": 7900,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 10400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "10400",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6295475~p=28~eid=00000187-b97f-c07e-0261-407600da1c38",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "7.1 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "91103",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 7.199999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 5000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "94703",
        "name": "Sri Punjabi Dhaba",
        "uuid": "244943ac-cb6b-439f-9a09-687af66615b1",
        "city": "1",
        "area": "BTM Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "i53hrycmcn2oehrojag0",
        "cuisines": [
        "North Indian",
        "Biryani",
        "Chinese",
        "Kebabs"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "slaString": "34 MINS",
        "lastMileTravel": 7.400000095367432,
        "slugs": {
        "restaurant": "sri-punjabi-dhaba-bangalore-btm",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "Opposite 11th Cross 20th Main Rd,beside sri balaji wood Old Madiwala, Cashier Layout,  1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560029",
        "locality": "Cashier Layout",
        "parentId": 21426,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
        {
        "meta": "60% off on all orders",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "60% off on all orders",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
        {
        "meta": "",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "60% off on all orders",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 7900,
        "message": ""
        },
        {
        "name": "time",
        "fee": 2500,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 10400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "10400",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 1,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "7.4 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "94703",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 7.400000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.1",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        }
];
*/

/*const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaurant) => <RestaurauntCard key={restaurant.data.id} resData={restaurant} />)
                }



                {/*Restauraunt Card*/
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
                <RestaurauntCard /> */}/*
            </div>
        </div>
    )
}*/

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet /> 
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restauraunts/:resId",
                element: <RestaurauntMenu />
            }
        ]
    },

]);

    const root = ReactDOM.createRoot(document.getElementById("root"));
    //root.render(<AppLayout />);
    root.render(<RouterProvider router={appRouter} />);
