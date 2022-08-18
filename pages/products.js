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
                  backgroundColor: "#fff",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  width: "50%",
                  // border: "1px solid black",
                  margin: 30,
                  borderRadius: 5,
                }}
              >
                <Image
                  src={e.image}
                  alt="Images"
                  width="99%"
                  height="250%"
                  style={{ borderRadius: 20 }}
                />
                <h3
                  style={{ textAlign: "left", color: "black", paddingLeft: 5 }}
                >
                  {e.name}
                </h3>
                <p
                  style={{
                    color: "#B32525",
                    fontSize: "24px",
                    paddingLeft: "2%",
                  }}
                >
                  {e.price}
                </p>
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
