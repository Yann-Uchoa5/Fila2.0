import React, { useState } from 'react';
import './Fila.css'; // Importando o arquivo CSS para estilização

const Fila = () => {
  const [fila, setFila] = useState([]);
  const [buscaIndice, setBuscaIndice] = useState('');
  const [resultado, setResultado] = useState('');

  const enqueue = (value) => {
    setFila((prevFila) => [...prevFila, value]);
  };

  const dequeue = () => {
    if (fila.length > 0) {
      setFila((prevFila) => {
        const updatedFila = [...prevFila];
        updatedFila.shift();
        return updatedFila;
      });
    } else {
      alert('A fila está vazia!');
    }
  };

  const handleAddClick = () => {
    const value = prompt('Digite o valor que deseja adicionar:');
    if (value !== null && value !== '') {
      enqueue(value);
    }
  };

  const handleRemoveClick = () => {
    dequeue();
  };

  const handleBuscaIndiceChange = (event) => {
    setBuscaIndice(event.target.value);
  };

  const handleBuscarClick = () => {
    const index = parseInt(buscaIndice, 10);
    if (!isNaN(index) && index >= 0 && index < fila.length) {
      setResultado(fila[index]);
    } else {
      setResultado('Índice inválido ou fora do intervalo');
    }
  };

  return (
    <div>
      <div>
        {fila.map((item, index) => (
          <div key={index} className="fila-item">{item}</div>
        ))}
      </div>
      <input
        type="text"
        value={buscaIndice}
        onChange={handleBuscaIndiceChange}
        placeholder="Índice para buscar..."
        className="input-search"
      />
      <button className="button" onClick={handleBuscarClick}>Buscar</button>
      <div>Resultado: {resultado}</div>
      <button className="button button-add" onClick={handleAddClick}>Adicionar Item</button>
      <button className="button button-remove" onClick={handleRemoveClick}>Remover Item</button>
    </div>
  );
};

export default Fila;
