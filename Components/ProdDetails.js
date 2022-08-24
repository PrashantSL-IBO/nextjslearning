import React from "react";
import Image from "next/image";

const addToCart = async (prodCart) => {
  await axios.post(`http://localhost:3333/cart/`, prodCart);
  alert("Product has been added to the cart!!");
};

const ProdDetails = ({ fullData, description, name, imgsrc, id, price }) => {
  return (
    <div key={id} className="flex align-middle items-center">
      <div className="flex-1 p-28 border-r-2 mr-10">
        <Image src={imgsrc} alt="Image" width="500%" height="500%" />
      </div>
      <div className="flex-1">
        <h3 className="text-3xl">{name}</h3>
        <p className="text-[#B32525] font-bold text-2xl my-6">{price}</p>
        <p className="text-lg mb-4">{description}</p>
        <button
          onClick={() => addToCart(fullData)}
          className="px-3.5 rounded-lg py-3 bg-red-700 hover:bg-blue-700 hover:text-white text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProdDetails;
