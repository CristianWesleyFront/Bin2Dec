import React, { useState } from "react";

import "./App.css";

import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [result, setResult] = useState("");

  const binaryToDecimal = (bin) => {
    const numberBin = bin.split("").map(Number).reverse();

    return numberBin.reduce((ac, cu, index) => ac + cu * Math.pow(2, index));
  };

  const handleSubmit = (e, binary) => {
    e.preventDefault();

    setResult(`Decimal: ${binaryToDecimal(binary)}`);
  };

  return (
    <div className="App">
      <Card>
        <Form handleSubmit={handleSubmit} />
        <section>
          <h1> {result}</h1>
        </section>
      </Card>
    </div>
  );
}

export default App;
