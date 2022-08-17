import Image from "next/image";
import React from "react";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <h1>About Page</h1>
      <Image src="/dummy.jpg" width="800" height="400" alt="Hi" />
    </div>
  );
};

export default About;
