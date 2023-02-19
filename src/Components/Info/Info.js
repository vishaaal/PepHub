import React from "react";

export default function Info() {
  return (
    <div className="h-50 infobg d-flex justify-content-center justify-content-around">
      <div className="p-5">
        <h1>Share Your Knowledge </h1>
        <h1>Write For PepHub</h1>
        <div className="py-4">
          Write Blogs for Us, Share your Knowledge and experience. <br />
          Help Thousands of you prepare better.
        </div>
        <div>
        <button type="button" class="btn text-white"  style={{backgroundColor:"#1E40AF"}}>Start Writing Now!</button>
        </div>
      </div>
      <div>
        <div className="pt-5 pb-3 font-weight-bold" style={{fontSize:'1.2rem'}}>
            Topics You can write On
        </div>
        <div>
            <div className="p-2 tabb border border-light my-2">
                Cognizant Digital Nurture Technical
            </div>
            <div className="p-2 tabb border border-light my-2">
                Cognizant Digital Nurture Technical
            </div>
            <div className="p-2 tabb border border-light my-2">
                Cognizant Digital Nurture Technical
            </div>
            <div className="p-2  tabb border border-light my-2">
                Cognizant Digital Nurture Technical
            </div>
        </div>
      </div>
    </div>
  );
}
