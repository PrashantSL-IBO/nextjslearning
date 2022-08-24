import React from "react";
import Image from "next/image";
import axios from "axios";

const deleteData = async (id) => {
  const res = await axios.delete(`http://localhost:3333/cart/${id}`);
  const listdata = await res.data;
  location.reload();
};

const CartLineCard = ({ name, id, imgsrc, price }) => {
  return (
    <div className="container justify-evenly flex max-w-3xl mx-auto border-2 py-5 place-items-center">
      <div key={id} className="text-left flex-1 max-w-md pl-6">
        <Image alt="HiImage" src={imgsrc} width="110%" height="110%" />
      </div>
      <div className="max-w-lg mr-8 flex-2 align-middle justify-center">
        <p className="text-left font-bold">{name}</p>
        <button
          onClick={() => deleteData(id)}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 my-3 border border-gray-400 rounded shadow"
        >
          Remove Item
        </button>
      </div>
      <div className="w-20 flex-1">
        <p className="text-[#B32525] text-2xl">{price}</p>
      </div>
    </div>
  );
};

export default CartLineCard;
