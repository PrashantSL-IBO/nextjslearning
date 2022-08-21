import { useRouter } from "next/router";

const Sankhe = () => {
  const router = useRouter();
  const number = router.query.sankhe;
  return <div>sankhe is {number}</div>;
};

export default Sankhe;
