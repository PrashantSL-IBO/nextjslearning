import React from "react";
import Navbar from "../Components/Navbar";
import ProdCard from "../Components/ProdCard";

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
          return (
            <>
              <ProdCard
                id={e.id}
                imgsrc={e.image}
                price={e.price}
                name={e.name}
                description={e.description}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default products;
