import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <AccountCircleIcon fontSize="large" className="headerIcons" />
      </IconButton>

      <IconButton>
        <img
          src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
          className="headerLogo"
          alt="tinderImage"
        />
      </IconButton>
      <IconButton>
        <ForumIcon fontSize="large" className="headerIcons" />
      </IconButton>
    </div>
  );
}

export default Header;
