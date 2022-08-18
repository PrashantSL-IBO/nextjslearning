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
  return {
    props: {
      singleData,
    },
  };
};

const PageNo = ({ singleData }) => {
  const route = useRouter();
  return (
    <>
      <Navbar />
      <h2>Page is dynamic {route.query.number} </h2>
      <div key={singleData.id}>
        <Image src={singleData.image} alt="Image" width="150" height="150" />
        <h3>{singleData.name}</h3>
        <p>{singleData.price}</p>
        <p>{singleData.description}</p>
        <Link href={"/cart"}>
          <button>Add to Cart</button>
        </Link>
      </div>
    </>
  );
};

export default PageNo;
