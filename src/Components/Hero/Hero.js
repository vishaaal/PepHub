import React from "react";
import peplogo from "../../Assets/logo.svg";
import herosec from "../../Assets/heroSectionImg.svg"

export default function hero() {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center  mt-5" >
      <div className="pb-2">
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
