import Head from "next/head";

export default function SaveList() {
  return (
    <div>
      <Head>
        <title>Guardar Lista</title>
      </Head>

      <form className="mx-auto my-4" style={{ maxWidth: "500px" }}>
        <div class="form-group">
          <label htmlFor="name">Nombre de la lista</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ingrese el nombre"
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
        <button type="submit" className="btn btn-info w-100">
          Enviar
        </button>
      </form>
    </div>
  );
}
