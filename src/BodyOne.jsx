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

//Funcion principal del body
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
      <div className="row mb-5">
        <VideoPromocional />
      </div>
    </div>
    
    
    
  );
}

//Funcion de las propiedades de las imagenes
function imagPropiedades(img, alt, styles, prop) {
  return (
    <>
      <img src={img} className="img-fluid" alt={alt} style={styles} />

      {prop}
    </>
  );
}
//Funcion que centra el texto de la imagen
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
//Funcion de las columnas del los rows. Define propiedades y establece parametros
function coluImagen(aplEfe, imaOri, nomIma, altIma, textoIma) {
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

//Funcion que renderiza la primera imagen
function Imagen1() {
  /*Aqui establece el inicio de la imagen antes del renderizar*/
  const [imagenOri, setImagenOri] = useState(
    imagPropiedades(img1, "imagen1", originalStyle)
  );

  function aplicarEfectos(img) {
    setImagenOri(img);
  }
  /*Aqui puede editar IMG1 por el nombre de la imagen, IMAGEN1 por el alt de la imagen 
  y OFERTA EDUCATIVO por el texto en la imagen*/
  return (
    <>
      {coluImagen(
        aplicarEfectos,
        imagenOri,
        img1,
        "imagen1",
        "OFERTA EDUCATIVA"
      )}
    </>
  );
}

//Funcion que renderiza la sesunda imagen
function Imagen2() {
  const [imagenOri, setImagenOri] = useState(
    imagPropiedades(img2, "imagen2", originalStyle)
  );

  function aplicarEfectos(img) {
    setImagenOri(img);
  }

  return (
    <>{coluImagen(aplicarEfectos, imagenOri, img2, "imagen2", "BIBLIOTECAS")}</>
  );
}

//Funcion que renderiza la tercera imagen
function Imagen3() {
  const [imagenOri, setImagenOri] = useState(
    imagPropiedades(img3, "imagen3", originalStyle)
  );

  function aplicarEfectos(img) {
    setImagenOri(img);
  }

  return (
    <>
      {coluImagen(
        aplicarEfectos,
        imagenOri,
        img3,
        "imagen3",
        "INTERCAMBIO DE ALUMNOS"
      )}
    </>
  );
}

//Funcion que renderiza la cuarta imagen
function Imagen4() {
  const [imagenOri, setImagenOri] = useState(
    imagPropiedades(img4, "imagen4", originalStyle)
  );

  function aplicarEfectos(img) {
    setImagenOri(img);
  }

  return (
    <>
      {coluImagen(
        aplicarEfectos,
        imagenOri,
        img4,
        "imagen4",
        "CENTRO EDUCATIVO"
      )}
    </>
  );
}

function VideoPromocional() {
  return (
    <iframe
      width="600"
      height="600"
      src="https://www.youtube.com/embed/in4UjPdKfuA?si=t6UvOH7nNJE5N3T0&vq=hd720"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
}
