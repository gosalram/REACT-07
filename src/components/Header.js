import { LOGO_URL } from "../utils/constants";
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";

const Header=()=>{

    let [logInBtn,setlogInBtn] = useState("Login");

    useEffect(()=>{},[logInBtn])
        return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
        <div className="nav-items">
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About Us</Link></li>
                <li><Link to="/contact" >Contact Us</Link></li>
                <button 
                className="login-btn"
                 onClick={()=>{
                    logInBtn==="Login"
                        ? setlogInBtn("Logout")
                        : setlogInBtn("Login")
                        }}
                        >
                {logInBtn}
                </button>
            </ul>
        </div>
        </div> 
    )
}

export default Header;
