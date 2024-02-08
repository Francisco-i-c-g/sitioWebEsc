import React from "react";
import img1 from "./img/imagenEducacion1.jpg";
import img2 from "./img/imagenEducacion2.jpg";
import img3 from "./img/imagenEducacion3.jpg";
import { Button } from "bootstrap";

const indicatorsButton={
  borderRadius:"50%",
  height:"14px",
  width:"14px",

};

export default function Carrousel() {
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
            style={indicatorsButton}
          ></button>
          <button
            type="button"
            data-bs-slide-to="1"
            data-bs-target="#carouselSlideOne"
            style={indicatorsButton}
          ></button>
          <button
            type="button"
            data-bs-slide-to="2"
            data-bs-target="#carouselSlideOne"
            style={indicatorsButton}
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

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselSlideOne"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselSlideOne"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </>
  );
}
