import React from "react";
import img1 from "./img/imagenEducacion1.jpg";
import img2 from "./img/imagenEducacion2.jpg";
import img3 from "./img/imagenEducacion3.jpg";
import { Button } from "bootstrap";

export default function Carrousel() {
  const buttonStyle = {
    borderRadius: "50%",
    height: "15px",
    width: "15px",
  };

  return (
    <>
      <div
        className="carousel slide"
        id="carouselSlideOne"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            className="active"
            type="button"
            data-bs-slide-to="0"
            data-bs-target="#carouselSlideOne"
            style={buttonStyle}
          ></button>
          <button
            type="button"
            data-bs-slide-to="1"
            data-bs-target="#carouselSlideOne"
            style={buttonStyle}
          ></button>
          <button
            type="button"
            data-bs-slide-to="2"
            data-bs-target="#carouselSlideOne"
            style={buttonStyle}
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              alt="img1"
              src={img1}
              style={{ width: "100%", height: "400px" }}
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              alt="img2"
              style={{ width: "100%", height: "400px" }}
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              alt="img3"
              style={{ width: "100%", height: "400px" }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
