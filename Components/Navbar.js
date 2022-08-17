import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <br />
      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/services">Services</Link>
      </div>
    </>
  );
};

export default Navbar;
