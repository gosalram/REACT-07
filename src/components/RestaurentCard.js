import { CDN_URL } from "../utils/constants";

const RestaurentCard=(props)=>{

    const {resData}=props;

    const{cloudinaryImageId,name,cuisines,areaName,avgRating,costForTwo}= resData?.info;
    const{lastMileTravelString,deliveryTime}= resData?.info.sla;

    return(
        <div className="res-card">
            {<img  
              className="res-img" 
              src={
                CDN_URL+cloudinaryImageId
                }
            />}
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
            <span>
              <h4>{avgRating}</h4>
              <h4>{lastMileTravelString}</h4>
              <h4>{costForTwo}</h4>
            </span>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurentCard;