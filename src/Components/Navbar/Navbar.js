import React from "react";
import codeLogo from "../../Assets/codeLogo.png";
import search from "../../Assets/search.png";
import translate from "../../Assets/translate.png";
import moon from "../../Assets/moon.png";

export default function Navbar() {
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-light bg-light d-inline-flex p-4 w-100" >
      <div className="d-inline-flex">
        <div className="px-2">
          <img src={codeLogo} />
        </div>
      </div>
      <div className="d-inline-flex" style={{position:"fixed", right:"0"}}>
        <div className="px-4">
          <img src={search} />
        </div>

        <div className="px-4">
          <img src={moon} />
        </div>

        <div className="px-4">
          <button type="button" class="btn btn-primary">
            Start Preparing Now
          </button>
        </div>
      </div>
    </div>
    <div className="navbar d-inline-flex p-2 w-100 justify-content-center " style={{backgroundColor:" #EFF6FF"}}>
        <div className="px-5">
          Blogs
        </div>
        <div className="px-5 justifyContentEnd">
          Interview Prep
        </div>

        <div className="px-5">
          Interview Experience
        </div>
        <div className="px-5">
          Write for Us
        </div>
        <div className="px-5">
          About Us
        </div>

    </div>
    </div>
    
  );
}
