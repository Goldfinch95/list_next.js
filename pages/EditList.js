import Head from "next/head";
import { useRouter } from "next/router";

export default function EditList() {
  const router = useRouter();
  const { listName } = router.query;
  return (
    <div>
      <Head>
        <title>Editar Lista</title>
      </Head>

      <form className="mx-auto my-4" style={{ maxWidth: "500px" }}>
        <h2>Lista de {listName}</h2>
        <div className="form-group">
          <label htmlFor="price">Código</label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Ingrese nuevo código"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Ingrese nuevo nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio</label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Ingrese nuevo precio"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Lista</label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Ingrese  nueva lista"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Ultima Actualización</label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Ingrese fecha de actualización"
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Enviar
        </button>
      </form>
    </div>
  );
}
