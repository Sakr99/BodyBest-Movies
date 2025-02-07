import React from "react";
import { Link } from "react-router-dom";

function Icon() {
  return (
    <>
      <div className="d-flex mx-2 align-items-center bg-dark rounded">
        <Link href="https://www.facebook.com/">
          <i className="fab mx-2 fa-facebook"></i>
        </Link>
        <Link href="https://www.instagram.com/">
          <i className="fab mx-2 fa-instagram"></i>
        </Link>
        <Link href="https://tiktok.com/">
          <i className="fab mx-2 fa-tiktok"></i>
        </Link>
        <Link href="https://x.com/">
          <i className="fab mx-2 fa-x-twitter"></i>
        </Link>
      </div>
    </>
  );
}

export default Icon;
