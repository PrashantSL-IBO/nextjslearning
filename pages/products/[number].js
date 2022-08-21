import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../../Components/Navbar";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3333/data");
  const data = await res.json();

  const paths = data.map((e) => {
    return {
      params: {
        number: e.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.number;
  const res = await fetch(`http://localhost:3333/data/${id}`);
  const singleData = await res.json();
  if (!singleData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      singleData,
    },
  };
};

const addToCart = async (prodCart) => {
  const res = await axios.post(`http://localhost:3333/cart/`, prodCart);
  alert("Successful", "Product has been added to the cart!!");
};

const PageNo = ({ singleData }) => {
  const route = useRouter();
  return (
    <>
      <Navbar />
      <div key={singleData.id} className="flex align-middle items-center">
        <div className="flex-1 p-28">
          <Image
            src={singleData.image}
            alt="Image"
            width="500%"
            height="500%"
          />
        </div>
        <div className="flex-1">
          <h3>{singleData.name}</h3>
          <p>{singleData.price}</p>
          <p>{singleData.description}</p>
          <button
            onClick={() => addToCart(singleData)}
            className="p-2 bg-red-700 hover:bg-blue-700 hover:text-white text-white "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default PageNo;
