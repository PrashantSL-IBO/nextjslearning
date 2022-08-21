import React from "react";
import Image from "next/image";
import Navbar from "../Components/Navbar";

const fetchData = async () => {
  const res = await fetch("http://localhost:3333/cart");
  const listdata = await res.json();
  console.log("List::", list);
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3333/cart");
  const products = await res.json();
  console.log(products);
  return {
    props: {
      products,
    },
  };
};

const cart = ({ products }) => {
  return (
    <div>
      <Navbar />
      {products.map((e) => {
        return (
          <>
            <div className="container justify-around flex max-w-2xl mx-auto border-2 py-5 place-items-center">
              <div className="text-left max-w-md">
                <Image alt="HiImage" src={e.image} width="100%" height="100%" />
              </div>
              <div className="max-w-lg">
                <p className="px-8 text-left">{e.name}</p>
              </div>
              <p className="text-[#B32525] text-2xl">{e.price}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default cart;
