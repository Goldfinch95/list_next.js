import React from "react";

export default function Files({ products }) {
  return (
    <table className="table table-bordered  table-striped text-center">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Código</th>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Lista</th>
          <th scope="col">Última Actualización</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.code}>
            <td>{product.code}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.list}</td>
            <td>{product.lastUpdate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
