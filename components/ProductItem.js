import Link from "next/link";

export default function ProductItem({
  product,
  visibleProduct,
  setVisibleProduct,
  listName,
}) {
  const handleToggleFiles = () => {
    if (visibleProduct === product) {
      setVisibleProduct(null);
    } else {
      setVisibleProduct(product);
    }
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title text-capitalize" title={product.list}>
          {product.list}
        </h5>
        <p className="card-text" title={product.lastUpdate}>
          {product.lastUpdate}
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-between">
          <Link
            href={{
              pathname: "/EditList",
              query: { listName: product.list }, // Pasar el nombre de la lista como query param
            }}
          >
            <button className="btn btn-dark" type="button">
              Editar {}
            </button>
          </Link>
          <button
            className="btn btn-dark"
            type="button"
            onClick={handleToggleFiles}
          >
            Desplegar
          </button>
        </div>
      </div>
    </div>
  );
}
