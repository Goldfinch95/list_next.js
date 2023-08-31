import Link from "next/link";

export default function ProductItem({ product }) {
  console.log(product);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title text-capitalize" title={product.list}>
          {product.list}
        </h5>
        <p className="card-text" title={product.lastUpdate}>
          {product.lastUpdate}
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-info" type="button">
            Desplegar
          </button>
        </div>
      </div>
    </div>
  );
}