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

// const addToCart = async (prodCart) => {
//   const res = await axios.post(`http://localhost:3333/cart/`, prodCart);
//   alert("Successful", "Product has been added to the cart!!");
// };

const PageNo = ({ singleData }) => {
  const route = useRouter();
  return (
    <>
      <Navbar />
      <div key={singleData.id}>
        <Image src={singleData.image} alt="Image" width="150" height="150" />
        <h3>{singleData.name}</h3>
        <p>{singleData.price}</p>
        <p>{singleData.description}</p>
        {/* <Link href={"/"}> */}
        <button
          onClick={() => addToCart(singleData)}
          className="bg-blue-400 p-2 bg-red-100 hover:bg-blue-700 hover:text-white text-black "
        >
          Add to Cart
        </button>
        {/* </Link> */}
      </div>
    </>
  );
};

export default PageNo;
