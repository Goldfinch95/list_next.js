import Head from "next/head";
import { useState } from "react";

// crear la clase
class ListItem {
  constructor(listName, productName, price) {
    this.listName = listName;
    this.productName = productName;
    this.price = price;
  }
}

export default function SaveList() {
  //defino los valores de los inputs y la lista
  const [input_listNameValue, setInput_listNameValue] = useState("");
  const [input_productNameValue, setInput_productNameValue] = useState("");
  const [input_priceValue, setInput_priceValue] = useState("");
  const [listItems, setListItems] = useState([]);
  //funciones para obtener el valor del input
  const handleListNameChange = (e) => {
    //nombre lista
    setInput_listNameValue(e.target.value);
  };

  const handleProductNameChange = (e) => {
    //producto
    setInput_productNameValue(e.target.value);
  };

  const handlePriceChange = (e) => {
    //precio
    setInput_priceValue(e.target.value);
  };
  //al enviar, recibo el valor
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre de la lista:", input_listNameValue);
    console.log("Nombre del producto:", input_productNameValue);
    console.log("Precio:", input_priceValue);
    //nueva lista
    const newItem = new ListItem(
      input_listNameValue,
      input_productNameValue,
      input_priceValue
    );
    //defino los parametros de la clase
    setListItems([...listItems, newItem]);
    //reincio los inputs
    setInput_listNameValue("");
    setInput_productNameValue("");
    setInput_priceValue("");
  };

  return (
    <div>
      <Head>
        <title>Guardar Lista</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nombre de la lista
          </label>
          <input
            type="text"
            value={input_listNameValue}
            onChange={handleListNameChange}
            className="form-control"
            placeholder="ingrese el nombre"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nombre del producto
          </label>
          <input
            type="text"
            value={input_productNameValue}
            onChange={handleProductNameChange}
            className="form-control"
            placeholder="ingrese el producto"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Precio
          </label>
          <input
            type="number"
            value={input_priceValue}
            onChange={handlePriceChange}
            placeholder="ingrese el precio"
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Enviar
        </button>
      </form>
      <div>
        <h2>Lista de elementos:</h2>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>
              List: {item.listName}, Producto: {item.productName}, Precio:{" "}
              {item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
