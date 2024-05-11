import { LOGO_URL } from "../utils/constants";
import {useState} from "react";

const Header=()=>{

    let [logInBtn,setlogInBtn] = useState("Login");
        return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
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
