import React from "react";
import Logo from "../images/Netflix-logo.png";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="logo">
        <img src={Logo} alt="Netflix-logo" />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign In"}
      </button>
    </div>
  );
};

export default Header;
