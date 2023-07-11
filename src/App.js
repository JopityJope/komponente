import "./App.css";
import React, { Component } from "react";
import { Funkcija1, Funkcija2, Klasa } from "./components";

const brojevi = [5, 10, 4, 89, 6];
const najveciBroj = function (arr) {
  return Math.max(...arr);
};
const netocno = false;

function KomponentaFunkcija() {
  return <h1>Nađi najveći broj:</h1>;
}

class KomponentaKlasa extends Component {
  render() {
    return <h2>{najveciBroj(brojevi)}</h2>;
  }
}

function App() {
  return (
    <>
      <div>
        <KomponentaFunkcija></KomponentaFunkcija>
        <KomponentaKlasa></KomponentaKlasa>
      </div>
      <div style={{ backgroundColor: "pink" }}>
        <Funkcija1></Funkcija1>
        <Funkcija2></Funkcija2>

        {netocno && <Funkcija1></Funkcija1>}
      </div>
    </>
  );
}

export default App;
