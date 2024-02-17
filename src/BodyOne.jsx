import React, { useState } from "react";
import img1 from "./imgBody/mujer biblioteca.webp";
import img2 from "./imgBody/imagenEducacion4.jpg";
import img3 from "./imgBody/estudiantesImg.jpg";
import img4 from "./imgBody/prapaImg.webp";

const originalStyle={
  width: "650px", 
  height: "450px" 

}

const CostumStyle ={
  width: "800px", 
  height: "450px",
  filter: "brightness(30%)"
  


}

export default function Body() {
  const [imagenOri, setImagenOri] = useState(imagen2(img4, "imagen4", originalStyle))
  

  function aplicarEfectos(img){
    setImagenOri(img)
  }

  return (
    <div className="container">
      <div className="row mb-3 mt-5">
        {imagen(img1, "imagen1")}
        {imagen(img2, "imagen2")}
      </div>
      <div className="row mb-5">
        {imagen(img3, "imagen3")}
        <div 
          style={{position:"relative", textAlign:"center", color:"white"}}
          className="col-sm-6 mb-3 parentContainer" 
          onMouseOver={() =>aplicarEfectos(imagen2(img4, "imagen5", CostumStyle,letrasEnImagen("CENTRO UNIVERSITARIO")))}
          onMouseOut={() =>aplicarEfectos(imagen2(img4, "imagen5", originalStyle ))}  
          >
        {imagenOri}
        </div>
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
        style={originalStyle}
      />
    </div>
  );
}

function imagen2(img, alt, styles, prop) {
  return (
    <>
      <img
        src={img}
        className="img-fluid"
        alt={alt}
        style={styles}
      />

      {prop}
      
      </>

    
  );
}

function letrasEnImagen(texto){

  return(
    <div style={{position:"absolute", top:"50%", left:"50%", transform: "translate(-50%, -50%)", fontSize:"25px"}}>{texto}</div>
  );

}


