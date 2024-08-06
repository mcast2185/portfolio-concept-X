import Link from 'next/link';
import React from 'react';


const NavBar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link href="/" className="nav-link">
          Anomar
        </Link>
      </div>
      <div className="nav-links">
        <div className="nav-item">
          <Link className="nav-link" href="/">
            Home
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" href="/about">
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar