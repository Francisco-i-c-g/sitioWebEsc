import React from "react";
import img1 from "./imgBody/mujer biblioteca.webp"
import img2 from "./imgBody/jovenestudiando.jpg"

export default function Body() {
  return (
    <div className="container">
      <div className="row mb-3 mt-5">
        <div className="col-sm-6 mb-3">
          <img
            src={img1}
            className="img-fluid"
            alt="..."
            style={{width:"650px", height:"450px"}}
          />
        </div>
        <div className="col-sm-6 mb-3">
          <img
            src={img2}
            className="img-fluid"
            alt="..."
            style={{width:"650px", height:"450px"}}
          />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-sm-6 mb-3">
          <img
            src={img1}
            className="img-fluid"
            alt="..."
            style={{width:"650px", height:"450px"}}
          />
        </div>
        <div className="col-sm-6 mb-3">
          <img
            src={img2}
            className="img-fluid"
            alt="..."
            style={{width:"650px", height:"450px"}}
          />
        </div>
      </div>
    </div>
  );
}
