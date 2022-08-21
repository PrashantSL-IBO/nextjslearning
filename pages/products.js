import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../Components/Navbar";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3333/data");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const products = ({ data }) => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", gap: "10px" }}>
        {data.map((e) => {
          const ed = e.id;
          return (
            <>
              <div
                key={e.id}
                style={{
                  display: "grid",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
                className="max-w-sm rounded mx-auto overflow-hidden shadow-lg"
              >
                <div className="my-5 mx-auto">
                  <Image
                    src={e.image}
                    alt="Images"
                    width="200%"
                    height="250%"
                    className="px-auto py-auto"
                  />
                </div>
                <div className="px-4 space-y-1">
                  <h3 className="font-serif font-bold text-lg">{e.name}</h3>
                  <p className="text-red-700 font-bold text-lg">{e.price}</p>
                  <p>{e.description}</p>
                </div>
                <Link href={`/products/${e.id}`}>
                  <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 my-3 border border-gray-400 rounded shadow">
                    View Details
                  </button>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default products;
