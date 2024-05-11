import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";

const Body=()=>{
    //Local state variable = Supur powerful variable
const [listOfRestaurant,setlistOfRestaurants] =useState([]);
const [filteredRestaurant,setFilteredRestaurant] =useState([]);
const [searchText,setsearchText] =useState("");
// console.log("Body Rendered");

useEffect(() =>{
    fetchData();
},[]);
    const fetchData= async ()=>{
        const data =await fetch(
            // Koramangala
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            // Nagercoil
            // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.183285699999999&lng=77.4118996&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        // console.log(json);
          setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
// Conditinal rendering in ternary operater
    return listOfRestaurant.length===0 ? (
    <Shimmer/>
    ) : (
        <div className="body">    
            <div className="filter">
                <div className="search">
                    <input 
                    type="text"
                    className="search-box"
                    placeholder="restaurant" 
                    value={searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}>
                    </input>
                    <button 
                    onClick={
                        ()=>{
                            //Filter the restaurant card and update the UI
                            const filteredSearchList = listOfRestaurant.filter((res) => 
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredRestaurant(filteredSearchList);
                            // console.log(searchText);
                        }}
                        >Search</button>
                </div>                
                <button className="filter-btn" 
                onClick={() =>{
                const filteredList=listOfRestaurant.filter(
                    (res) => res.info.avgRating >4
                );
                setFilteredRestaurant(filteredList);
                }}
                >
                Top rated Restaurants
                </button>
            
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant)=>(
                        <RestaurentCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
               {/* restaurent cards (since reusage of it create as functional component) */}
            </div>
        </div>
    )
}
export default Body;