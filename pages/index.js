import Head from "next/head";
import { useState } from "react";
import ProductItem from "@/components/ProductItem";
import Files from "@/components/Files";

const products = [
  {
    code: "A1",
    name: "Guantes de boxeo everlast powerlock",
    price: 96.456,
    list: "Guantes de Box",
    lastUpdate: "31/8/23",
  },
  {
    code: "B2",
    name: "Jujutsu Kaisen 10",
    price: 2500,
    list: "Mangas",
    lastUpdate: "31/8/23",
  },
  {
    code: "C3",
    name: "Bufanda Ravenclaw Harry Potter",
    price: 11490,
    list: "Bufandas",
    lastUpdate: "31/8/23",
  },
  {
    code: "D4",
    name: "Humankind Deluxe Edition",
    price: 18.699,
    list: "Juegos De Pc",
    lastUpdate: "31/8/23",
  },
  {
    code: "E5",
    name: "Sony PlayStation 5",
    price: 627.999,
    list: "Consolas",
    lastUpdate: "31/8/23",
  },
  {
    code: "F6",
    name: "Mouse gamer de juego Logitech G Series Hero G502 kda",
    price: 53.761,
    list: "Mouse",
    lastUpdate: "31/8/23",
  },
];

export default function Home() {
  const [list, setList] = useState("");
  const [visibleProduct, setVisibleProduct] = useState(null);

  return (
    <div>
      <div className="products">
        <Head>
          <title>Listas</title>
        </Head>
        {products.map((product) => (
          <ProductItem
            key={product.code}
            product={product}
            visibleProduct={visibleProduct}
            setVisibleProduct={setVisibleProduct}
            listName={product.list}
          />
        ))}
      </div>
      <div>{visibleProduct && <Files products={[visibleProduct]} />}</div>
    </div>
  );
}
