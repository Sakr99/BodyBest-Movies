import React from "react";

function Icon() {
  return (
    <>
      <li className="d-flex mx-2 align-items-center bg-dark rounded">
        <a href="https://www.facebook.com/">
          <i className="fab mx-2 fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/">
          <i className="fab mx-2 fa-instagram"></i>
        </a>
        <a href="https://tiktok.com/">
          <i className="fab mx-2 fa-tiktok"></i>
        </a>
        <a href="https://x.com/">
          <i className="fab mx-2 fa-x-twitter"></i>
        </a>
      </li>
    </>
  );
}

export default Icon;
