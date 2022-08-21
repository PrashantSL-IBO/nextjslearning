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
                  margin: 20,
                }}
                className="max-w-sm rounded mx-auto overflow-hidden shadow-lg"
              >
                <div>
                  <Image
                    src={e.image}
                    alt="Images"
                    width="200%"
                    height="250%"
                    className="px-auto py-auto"
                  />
                </div>
                <h3 className="font-serif font-bold px-4 text-lg">{e.name}</h3>
                <p className="text-red-700 px-4 font-bold text-lg">{e.price}</p>
                <p>{e.description}</p>
                <Link href={`/products/${e.id}`}>
                  <button>View Details</button>
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
