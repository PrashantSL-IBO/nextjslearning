import React from "react";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import axios from "axios";

const deleteData = async (id) => {
  const res = await axios.delete(`http://localhost:3333/cart/${id}`);
  const listdata = await res.data;
  location.reload();
  console.log("listdata::::", listdata);
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3333/cart");
  const products = await res.json();
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
            <div className="container justify-evenly flex max-w-3xl mx-auto border-2 py-5 place-items-center">
              <div key={e.id} className="text-left flex-1 max-w-md pl-6">
                <Image alt="HiImage" src={e.image} width="110%" height="110%" />
              </div>
              <div className="max-w-lg flex-1">
                <p className="px-8 text-left">{e.name}</p>
                <button
                  onClick={() => deleteData(e.id)}
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 my-3 border border-gray-400 rounded shadow"
                >
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
