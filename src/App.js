import "./App.css";
import React, { Component } from "react";

const brojevi = [5, 10, 4, 89, 6];
const najveciBroj = function (arr) {
  return Math.max(...arr);
};

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
    <div>
      <KomponentaFunkcija></KomponentaFunkcija>
      <KomponentaKlasa></KomponentaKlasa>
    </div>
  );
}

export default App;
