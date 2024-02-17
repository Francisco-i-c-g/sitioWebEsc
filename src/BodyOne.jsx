import React, { useState } from "react";
import img1 from "./imgBody/mujer biblioteca.webp";
import img2 from "./imgBody/imagenEducacion4.jpg";
import img3 from "./imgBody/estudiantesImg.jpg";
import img4 from "./imgBody/prapaImg.webp";

export default function Body() {
  return (
    <div className="container">
      <div className="row mb-3 mt-5">
        {imagen(img1, "imagen1")}
        {imagen(img2, "imagen2")}
      </div>
      <div className="row mb-5">
        {imagen(img3, "imagen3")}
        {imagen(img4, "imagen4")}
      </div>
    </div>
  );
}

function imagen(img, alt) {
  return (
    <div className="col-sm-6 mb-3 parentContainer">
      <img
        src={img}
        className="img-fluid"
        alt={alt}
        style={{ width: "650px", height: "450px" }}
      />
    </div>
  );
}
