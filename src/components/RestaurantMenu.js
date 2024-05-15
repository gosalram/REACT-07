import { useState,useEffect } from "react";
import { MENU_API } from "../utils/constants";
import { MENU_API_2 } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=> {
    const [resInfo,setResInfo] =useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data =await fetch(MENU_API+resId+MENU_API_2);

        const json = await data.json();
        // console.log(json);
        setResInfo(json.data);
    };
    if (resInfo=== null) return <Shimmer/>;
    
    const {name,cuisines,costForTwoMessage} =resInfo?.cards[2]?.card?.card?.info;
    const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;

    // console.log(itemCards);
        return  (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(" ,")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h3>menu</h3>  

                  {/*A tip for easy writing map function write for 1 iteration and try it
                  <li>{itemCards[0].card.info.name}</li> */}
            <ul>
                {itemCards.map((item) =>(
                <li key={item.card.info.id}> 
                {item.card.info.name} -Rs 
                {(item.card.info.price/100)  || (item.card.info.defaultPrice)/100}  </li>
                ))}
            </ul>
        </div>
    );
};
export default RestaurantMenu;