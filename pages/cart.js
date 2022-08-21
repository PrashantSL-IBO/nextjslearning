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
            <div className="container justify-evenly flex max-w-2xl mx-auto border-2 py-5 place-items-center">
              <div className="text-left flex-1 max-w-md">
                <Image alt="HiImage" src={e.image} width="110%" height="110%" />
              </div>
              <div className="max-w-lg flex-1">
                <p className="px-8 text-left">{e.name}</p>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 my-3 border border-gray-400 rounded shadow">
                  Remove Item
                </button>
              </div>
              <div className="w-20 flex-1">
                <p className="text-[#B32525] text-2xl">{e.price}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default cart;
