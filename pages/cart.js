import React from "react";
import Navbar from "../Components/Navbar";
import CartLineCard from "../Components/CartLineCard";

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
      {products.length == 0 ? (
        <div className="flex-1 justify-center align-middle">No products</div>
      ) : (
        products.map((e) => {
          return (
            <>
              <CartLineCard
                imgsrc={e.image}
                price={e.price}
                name={e.name}
                id={e.id}
              />
            </>
          );
        })
      )}
    </div>
  );
};

export default cart;
