import React from "react";
import Link from "next/link";
import Head from "next/head";

const Navbar = () => {
  return (
    <>
      {/* <div
        style={{
          display: "flex",
          padding: 5,
          margin: "wauto",
          width: "110%",
        }}
        className="bg-[#B3BB25] px-10 space-x-5"
      >
        <p className="bg-[#B3BB25] p-5">HI</p>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="/services">Services</Link>
      </div> */}

      <div>
        <Head>
          <link
            href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
            rel="stylesheet"
          />
        </Head>
        <nav>
          <ul className="flex bg-blue-700 space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Products</li>
            <li>Gallery</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
