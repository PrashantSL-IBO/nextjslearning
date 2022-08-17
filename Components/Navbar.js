import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <br/>
      <Link href="/">Home</Link><br/>
      <Link href="/about">About</Link><br/>
      <Link href="/courses">Courses</Link><br/>
      <Link href="/services">Services</Link>
    </div>
  )
}

export default Navbar;