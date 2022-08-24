import Image from "next/image";
import React from "react";
import Link from "next/link";

const ProdCard = ({ imgsrc, price, name, description, id }) => {
  return (
    <div
      key={id}
      style={{
        display: "grid",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
      className="max-w-sm rounded mx-auto overflow-hidden shadow-lg"
    >
      <div className="my-5 mx-auto">
        <Image
          src={imgsrc}
          alt="Images"
          width="200%"
          height="250%"
          className="px-auto py-auto"
        />
      </div>
      <div className="px-4 space-y-1">
        <h3 className="font-serif font-bold text-lg">{name}</h3>
        <p className="text-red-700 font-bold text-lg">{price}</p>
        <p>{description}</p>
      </div>

      <Link href={`/products/${id}`}>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 my-3 border border-gray-400 rounded shadow">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProdCard;
