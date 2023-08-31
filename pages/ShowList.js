import Head from "next/head";
import { useState } from "react";
import ProductItem from "@/components/ProductItem";

const products = [
  {
    code: "A1",
    name: "Guantes de boxeo everlast powerlock",
    price: 96.456,
    list: "listaDeGuantesDeBox",
    lastUpdate: "31/8/23",
  },
  {
    code: "B2",
    name: "Jujutsu Kaisen 10",
    price: 2500,
    list: "listaDeMangas",
    lastUpdate: "31/8/23",
  },
  {
    code: "C3",
    name: "Bufanda Ravenclaw Harry Potter",
    price: 11490,
    list: "listaDeBufandas",
    lastUpdate: "31/8/23",
  },
  {
    code: "D4",
    name: "Humankind Deluxe Edition",
    price: 18.699,
    list: "listaDeJuegosDePc",
    lastUpdate: "31/8/23",
  },
  {
    code: "E5",
    name: "Sony PlayStation 5",
    price: 627.999,
    list: "listaDeConsolas",
    lastUpdate: "31/8/23",
  },
  {
    code: "F6",
    name: "Mouse gamer de juego Logitech G Series Hero G502 kda",
    price: 53.761,
    list: "listaMouse",
    lastUpdate: "31/8/23",
  },
];

export default function ShowList() {
  const [list, setList] = useState("");
  return (
    <div className="products">
      <Head>
        <title>Listas</title>
      </Head>
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
}
