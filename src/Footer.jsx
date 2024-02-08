import { left } from "@popperjs/core";
import React from "react";
const withoutStyle = {
  textDecoration: "none",
  fontSize: "14px",
  color: "#8e8e8e",
};

const fontSize = {
  fontSize: "14px",
};

const fontSizeLogo = {
  fontSize: "32px",
};

const ulStyles = {
  margin: "0",
  padding: "0",
  listStyleType: "none",
};

export default function Footer() {
  return (
    <div className="container-fluid g-0 text-white">
      <div
        className="row bg-dark"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <div className="col-sm-6 col-lg-3 p-5  text-center">
          <h1 style={fontSizeLogo}>Universidad de Tlajomulco</h1>
        </div>

        <div className="col-sm-6 col-lg-3 p-5 ">
          <h1 style={fontSize}>Enlaces</h1>
          <ul style={ulStyles}>
            <li>
              <a href="#" style={withoutStyle}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#" style={withoutStyle}>
                Acerca de la Preparatoria
              </a>
            </li>
            <li>
              <a href="#" style={withoutStyle}>
                Oferta Academica
              </a>
            </li>
            <li>
              <a href="#" style={withoutStyle}>
                Sistema Nacional de Bachillerato
              </a>
            </li>
            <li>
              <a href="#" style={withoutStyle}>
                Servicio
              </a>
            </li>
            <li>
              <a href="#" style={withoutStyle}>
                Comunidad
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 p-5">
          <p style={fontSize}>
            Escuela Preparatoria de Tlajomulco Calle Porfirio Diaz # 144, C.P.
            45640, Tlajomulco de Zúñiga, Jalisco, México. Teléfono: +52 (33)
            3798 0443, 3798 1622, 3798 2649 y 1380 0958
          </p>
          <ul style={ulStyles}>
            <li>
              <a href="#" style={withoutStyle}>
                Creditos de sitio
              </a>
            </li>
            <li>
              <a href="#" style={withoutStyle}>
                Politica de privacidad y manejo de datos.
              </a>
            </li>
            <li>
              <a href="#" style={withoutStyle}>
                Aviso de privacidad integral
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 p-5">
          <ul style={ulStyles}>
            <li>
              <a href="#" style={withoutStyle}>
                Contacto: preparatoria.tlajo@gmail.com
              </a>
            </li>
          </ul>
          <h1 style={fontSize}>Siguenos en: </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-facebook"
            viewBox="0 0 16 16"
            className="me-3"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-whatsapp"
            viewBox="0 0 16 16"
            className="me-3"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-tiktok"
            viewBox="0 0 16 16"
          >
            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
          </svg>

          <p style={fontSize} className="mt-5">
            Derechos reservados ©1997 - 2024. Preparatoria de Tlajomulco. Sitio
            desarrollado por FICG{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
