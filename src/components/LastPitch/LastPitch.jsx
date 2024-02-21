import React from "react";
import "./LastPitch.css";

function LastPitch() {
  return (
    <div className="lastpitch">
      <div className="outerdiv">
        <div className="text">
          <div>
            <p className="text1">Want to get healthy and help charities?</p>
          </div>
          <div>
            <p className="text2">Come, join our 3.5M global community!</p>
          </div>
        </div>
        <div className="playsotre" >
          <a href="#" ><img  className="googleicon" src="/images/google-play-store.png" />  </a>
          <a href="#" ><img className="appleicon" src="/images/apple-app-store.png" />  </a>
        </div>
      </div>
    </div>
  );
}

export default LastPitch;
