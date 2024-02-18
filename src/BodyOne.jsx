import React, { useState } from "react";
import img1 from "./imgBody/mujer biblioteca.webp";
import img2 from "./imgBody/imagenEducacion4.jpg";
import img3 from "./imgBody/estudiantesImg.jpg";
import img4 from "./imgBody/prapaImg.webp";

const originalStyle = {
  width: "650px",
  height: "450px",
};

const CostumStyle = {
  width: "800px",
  height: "450px",
  filter: "brightness(30%)",
};

export default function Body() {
  return (
    <div className="container">
      <div className="row mb-3 mt-5">
        <Imagen1 />
        <Imagen2 />
      </div>
      <div className="row mb-5">
        <Imagen3 />
        <Imagen4 />
      </div>
    </div>
  );
}

function imagPropiedades(img, alt, styles, prop) {
  return (
    <>
      <img src={img} className="img-fluid" alt={alt} style={styles} />

      {prop}
    </>
  );
}

function LetrasEnImagen(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "25px",
      }}
    >
      {props.texto}
    </div>
  );
}
 
function coluImagen(aplEfe, imaOri, nomIma, altIma,textoIma) {
  return (
    <div
      style={{ position: "relative", textAlign: "center", color: "white" }}
      className="col-sm-6 mb-3"
      onMouseOver={() =>
        aplEfe(
          imagPropiedades(
            nomIma,
            altIma,
            CostumStyle,
            <LetrasEnImagen texto={textoIma} />
          )
        )
      }
      onMouseOut={() => aplEfe(imagPropiedades(nomIma, altIma, originalStyle))}
    >
      {imaOri}
    </div>
  );
}

function Imagen1() {
  const [imagenOri, setImagenOri] = useState(
    imagPropiedades(img1, "imagen1", originalStyle)
  );

  function aplicarEfectos(img) {
    setImagenOri(img);
  }

  return <>{coluImagen(aplicarEfectos, imagenOri, img1, "imagen1","OFERTA EDUCATIVA")}</>;
}

function Imagen2() {
  const [imagenOri, setImagenOri] = useState(
    imagPropiedades(img2, "imagen2", originalStyle)
  );

  function aplicarEfectos(img) {
    setImagenOri(img);
  }

  return <>{coluImagen(aplicarEfectos, imagenOri, img2, "imagen2","BIBLIOTECAS")}</>;
}

function Imagen3() {
  const [imagenOri, setImagenOri] = useState(
    imagPropiedades(img3, "imagen3", originalStyle)
  );

  function aplicarEfectos(img) {
    setImagenOri(img);
  }

  return <>{coluImagen(aplicarEfectos, imagenOri, img3, "imagen3","INTERCAMBIO DE ALUMNOS")}</>;
}

function Imagen4() {
  const [imagenOri, setImagenOri] = useState(
    imagPropiedades(img4, "imagen4", originalStyle)
  );

  function aplicarEfectos(img) {
    setImagenOri(img);
  }

  return <>{coluImagen(aplicarEfectos, imagenOri, img4, "imagen4","CENTRO EDUCATIVO")}</>;
}
