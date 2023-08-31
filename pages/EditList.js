import Head from "next/head";

export default function EditList() {
  return (
    <div>
      <Head>
        <title>Editar Lista</title>
      </Head>

      <form className="mx-auto my-4" style={{ maxWidth: "500px" }}>
        <div class="form-group">
          <label htmlFor="price">Precio</label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Ingrese el precio"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">
            Ingrese el archivo excel
          </label>
          <input
            type="file"
            className="form-control-file"
            id="exampleFormControlFile1"
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Enviar
        </button>
      </form>
    </div>
  );
}
