import React from "react";
import peplogo from "../../Assets/logo.svg";
import herosec from "../../Assets/heroSectionImg.svg"
import './hero.css'

export default function hero() {
  return (
    <div className="d-flex heroimg justify-content-center flex-column align-items-center mb-3" >
      <div className="pb-2 mt-3">
        <img src={peplogo} style={{ height: "50px", width: "auto" }} />
      </div>

      <div className="pb-4">
        your prerparation for that SDE Role <br />
        Better and easier than ever
      </div>
      <div>
      <img src={herosec} style={{ height: "400px", width: "auto" }} />
      </div>
    </div>
  );
}

