import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [logInBtn, setlogInBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {}, [logInBtn]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/grocery">Our Grocery</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              logInBtn === "Login"
                ? setlogInBtn("Logout")
                : setlogInBtn("Login");
            }}
          >
            {logInBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
