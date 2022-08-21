import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="xl:flex border-2 bg-red-700 justify-between max-w-screen-2xl">
        <div className="max-w-5 flex max-h-4 px-6">
          <Image
            src="/IBO-white.svg"
            alt="Logo Image"
            height="100%"
            width="100%"
          />
        </div>
        <div className="flex space-x-10 items-center px-16 text-white py-4">
          <Link className="cursor-pointer" href="/">
            Home
          </Link>
          <Link className="cursor-pointer" href="/about">
            About
          </Link>
          <Link className="cursor-pointer" href="/products">
            Products
          </Link>
          <Link className="cursor-pointer" href="/services">
            Services
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
