import React from "react";
import imgg from "../../Assets/lolll.png";
import book from "../../Assets/bookmark.png";

export default function blogs() {
  return (
    <div className="blogsimg m-3 d-flex justify-content-around">
      <div className="">
        <div className="d-flex mb-3">
          <div className="font-weight-bold">Latest</div>
          <div className="px-5">Top</div>
          <div>Your Internals</div>
        </div>
        <div className="d-flex mb-2">
          <div className="mr-4">
            <img src={imgg} />
          </div>
          <div>
            <div className="font-weight-bold">Lorem Ipsum</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ab
              tempore in quae quo?
            </div>
            <div className="d-flex mt-5 text-primary">
              <div className="px-2 border border-light rounded">#lorem</div>
              <div className="px-2 border border-light rounded">#lorem</div>
              <div className="px-2 border border-light rounded">#lorem</div>
            </div>
           
          </div>
          
        </div>
        <div className="d-flex">
          <div className="mr-4">
            <img src={imgg} />
          </div>
          <div>
            <div className="font-weight-bold">Lorem Ipsum</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ab
              tempore in quae quo?
            </div>
            <div className="d-flex mt-5 text-primary">
              <div className="px-2 border border-light rounded">#lorem</div>
              <div className="px-2 border border-light rounded">#lorem</div>
              <div className="px-2 border border-light rounded">#lorem</div>
            </div>
           
          </div>
          
        </div>
      </div>

      <div>
        <div>Trending</div>
        <div className="d-flex p-2 tabb border border-light my-2">
          <div className="font-weight-bold pr-5">#lorem</div>
          <div className="font-weight-light">75 latest blogs</div>
        </div>
        <div className="d-flex p-2 tabb border border-light my-2">
          <div className="font-weight-bold pr-5">#lorem</div>
          <div className="font-weight-light">75 latest blogs</div>
        </div>
        <div className="d-flex p-2 tabb border border-light my-2">
          <div className="font-weight-bold pr-5">#lorem</div>
          <div className="font-weight-light">75 latest blogs</div>
        </div>
        <div className="d-flex p-2 tabb border border-light my-2">
          <div className="font-weight-bold pr-5">#lorem</div>
          <div className="font-weight-light">75 latest blogs</div>
        </div>
        <div className="d-flex p-2 tabb border border-light my-2">
          <div className="font-weight-bold pr-5">#lorem</div>
          <div className="font-weight-light">75 latest blogs</div>
        </div>
        <div className="d-flex p-2 tabb border border-light my-2">
          <div className="font-weight-bold pr-5">#lorem</div>
          <div className="font-weight-light">75 latest blogs</div>
        </div>
      </div>
    </div>
  );
}
