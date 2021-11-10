import React from "react";
import "./ListItem.css";
import ariana from "../../images/ariana.jpeg";
import BillieElish from "../../images/Billie-Eilish.jpeg";
import ckay from "../../images/ckay.jpeg";
import JanelleMonáe from "../../images/Janelle-Monáe.jpeg";
import LadyGaga from "../../images/Lady-Gaga.jpeg";
import Nf from "../../images/Nf.jpeg";
import rihanna from "../../images/rihanna.jpeg";
import theWeeknd from "../../images/the-weeknd.jpeg";

const listItem = () => {
  return (
    <div className="listItem_container">
      <div className="listItem">
        <img className="list_img" src={ariana} alt="ariana" />
        <span className="list_text1">
          Lorem Ipsum is simply
          <br></br>
          <span className="list_text2">Lorem Ipsum is</span>
        </span>
      </div>
      <div className="listItem">
        <img className="list_img" src={BillieElish} alt="ariana" />
        <span className="list_text1">
          Lorem Ipsum is simply
          <br></br>
          <span className="list_text2">Lorem Ipsum is</span>
        </span>
      </div>
      <div className="listItem">
        <img className="list_img" src={ckay} alt="ariana" />
        <span className="list_text1">
          Lorem Ipsum is simply
          <br></br>
          <span className="list_text2">Lorem Ipsum is</span>
        </span>
      </div>
      <div className="listItem">
        <img className="list_img" src={JanelleMonáe} alt="ariana" />
        <span className="list_text1">
          Lorem Ipsum is simply
          <br></br>
          <span className="list_text2">Lorem Ipsum is</span>
        </span>
      </div>
      <div className="listItem">
        <img className="list_img" src={LadyGaga} alt="ariana" />
        <span className="list_text1">
          Lorem Ipsum is simply
          <br></br>
          <span className="list_text2">Lorem Ipsum is</span>
        </span>
      </div>
      <div className="listItem">
        <img className="list_img" src={Nf} alt="ariana" />
        <span className="list_text1">
          Lorem Ipsum is simply
          <br></br>
          <span className="list_text2">Lorem Ipsum is</span>
        </span>
      </div>
      <div className="listItem">
        <img className="list_img" src={rihanna} alt="ariana" />
        <span className="list_text1">
          Lorem Ipsum is simply
          <br></br>
          <span className="list_text2">Lorem Ipsum is</span>
        </span>
      </div>
      <div className="listItem">
        <img className="list_img" src={theWeeknd} alt="ariana" />
        <span className="list_text1">
          Lorem Ipsum is simply
          <br></br>
          <span className="list_text2">Lorem Ipsum is</span>
        </span>
      </div>
      {/* <div className="listItem">
        <img className="list_img" src={YoungThug} alt="ariana" />
        <span className="list_text1">
          Lorem Ipsum is simply
          <br></br>
          <span className="list_text2">Lorem Ipsum is</span>
        </span>
      </div> */}
      `
    </div>
  );
};

export default listItem;
