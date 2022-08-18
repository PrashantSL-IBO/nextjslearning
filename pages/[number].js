import { useRouter } from "next/router";
import Navbar from "../Components/Navbar";

const number = () => {
  // let route = useRouter();
  return (
    <>
      <Navbar />
      <h2>Page is dynamic</h2>
    </>
  );
};

export default number;
