import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import "./styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navabar from "./Nav-bar";
import OfertaAcademica from "./OfertaAcademica/ofertaprepa";
import SistemaNB from "./SistemaNacional/SistemaNacional";
import ServicioP from "./Servicio/ServicioPage";
import ComunidadP from "./Comunidad/ComunidadPage";

import Body, { VideoPromocional } from "./BodyOne";

import InfoPrepa from "./AcercaDeLaPreparatoria/Infoprepa";

export default function App1() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navabar />}>
            <Route index element={<App />} />
            <Route path="Infoprepa" element={<InfoPrepa />} />
            <Route path="ofertaPrepa" element={<OfertaAcademica />} />
            <Route path="SistemaNacBac" element={<SistemaNB/>}/>
            <Route path="ServicioPage" element={<ServicioP/>}/>
            <Route path="ComunidadPage" element={<ComunidadP/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App1 />);
