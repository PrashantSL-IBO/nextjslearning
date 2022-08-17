import { useRouter } from "next/router";

const Number = () => {
  let router = useRouter();
  return <div>Page is {router.query.number}</div>;
};

export default Number;
