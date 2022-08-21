import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex">
        <Image alt="HI" src="/dummy.jpg" width="750%" height="750" />
        <Image alt="HI" src="/dummy.jpg" width="750%" height="750" />
      </div>
    </div>
  );
}
