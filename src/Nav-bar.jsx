import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Universidad de Tlajomulco
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Acerca de la Preparatoria
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Oferta Academica
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sistema Nacional de Bachillerato
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Servicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Comunidad
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
