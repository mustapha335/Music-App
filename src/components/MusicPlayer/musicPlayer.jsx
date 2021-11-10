import React from "react";
import "./MusicPlayer.css";
import YoungThug from "../../images/Young-Thug.jpeg";
import PlayArrow from "@material-ui/icons/PlayArrowRounded";
import Pause from "@material-ui/icons/PauseRounded";
import Previous from "@material-ui/icons/SkipPreviousRounded";
import Next from "@material-ui/icons/SkipNextRounded";
const musicPlayer = () => {
  return (
    <div className="musicPlayer_container">
      <div className="player_img">
        <img className="img" src={YoungThug} alt="" />
      </div>
      <div className="player_text">
        <span className="player_text1">
          Wyclef Jean
          <br></br>
          <span className="player_text2">Young-Thug</span>
        </span>
      </div>
      <div className="player_button">
        <button className="button1">
          <Previous className="buttn2" />
        </button>
        <button className="button1">
          <PlayArrow className="buttn2" />
        </button>
        <button className="button1">
          <Next className="buttn2" />
        </button>
      </div>
      <div className="player_range">
        <input
          className="player_range1"
          type="range"
          min="1"
          max="100"
          value="40"
        />
      </div>
    </div>
  );
};

export default musicPlayer;
