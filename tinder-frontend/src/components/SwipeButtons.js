import { IconButton } from "@material-ui/core";
import React from "react";
import "../css/SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavouriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="buttons repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>

      <IconButton className="buttons left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="buttons star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="buttons right">
        <FavouriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="buttons lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
