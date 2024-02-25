import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import InfoPrepa from "./AcercaDeLaPreparatoria/Infoprepa";
import React from "react";

export default function Navabar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
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
                <Link to="/" className="nav-link active">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Infoprepa">
                  Acerca de la Preparatoria
                </Link>
              </li>
              <li className="nav-item">
                <Link to="ofertaPrepa" className="nav-link">
                  Oferta Academica
                </Link>
              </li>
              <li className="nav-item">
                <Link to="SistemaNacBac" className="nav-link">
                  Sistema Nacional de Bachillerato
                </Link>
              </li>
              <li className="nav-item">
                <Link to="ServicioPage" className="nav-link">
                  Servicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="ComunidadPage" className="nav-link">
                  Comunidad
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
