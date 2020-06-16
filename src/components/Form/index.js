import React, { useState } from "react";

function Form(props) {
  const [binario, setBinario] = useState("");

  const { handleSubmit } = props;

  return (
    <form onSubmit={(e) => handleSubmit(e, binario)}>
      <input
        placeholder="Digite o número Binário"
        value={binario}
        onChange={(e) => setBinario(e.target.value)}
        pattern="^[01]+$" // Regex para validar se é apenas 0 e 1
        title="Somente 0 e 1" // mensagem caso esteja errado
      />

      <button className="button" type="submit">
        Converter
      </button>
    </form>
  );
}

export default Form;
