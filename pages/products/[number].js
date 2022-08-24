import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "../../Components/Navbar";
import ProdDetails from "../../Components/ProdDetails";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3333/data");
  const data = await res.json();

  // const paths = data.map((e) => {
  //   return {
  //     params: {
  //       number: e.id.toString(),
  //     },
  //   };
  // });

  return {
    paths: [
      {
        params: { number: "1" },
      },
      {
        params: { number: "2" },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.number;
  const res = await fetch(`http://localhost:3333/data/${id}`);
  const singleData = await res.json();
  if (!singleData.id) {
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

const PageNo = ({ singleData }) => {
  const route = useRouter();
  if (route.isFallback) {
    return <h1>Loading......</h1>;
  }
  return (
    <>
      <Navbar />

      <ProdDetails
        fullData={singleData}
        description={singleData.description}
        name={singleData.name}
        imgsrc={singleData.image}
        price={singleData.price}
        id={singleData.id}
      />
    </>
  );
};

export default PageNo;
