import React from "react";
import Navabar from "./Nav-bar";
import Carrousel from "./Carrousel";
import Body, { VideoPromocional } from "./BodyOne";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Carrousel />
      <Body />
      <Footer/>
    </>
  );
}
