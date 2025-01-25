import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="position-relative bg-secondary text-dark bottom-0 start-50 translate-middle-x p-5 ">
        <div className="container text-center">
          <p className="mb-2">
            &copy; {currentYear} MyApp. All rights reserved.
          </p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="anything" className="text-light text-decoration-none">
                Privacy Policy
              </a>
            </li>
            <li className="list-inline-item mx-2">|</li>
            <li className="list-inline-item">
              <a href="anything" className="text-light text-decoration-none">
                Terms of Service
              </a>
            </li>
            <li className="list-inline-item mx-2">|</li>
            <li className="list-inline-item">
              <a href="anything" className="text-light text-decoration-none">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="mt-3">
            <a href="anything" className="text-light me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="anything" className="text-light me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="anything" className="text-light">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
        <li className="d-flex  align-items-center justify-content-center">
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
          <a href="https://whatsapp.com/">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic qui vitae culpa ipsa accusantium. Doloribus, ut quae veniam iste, quidem sit totam, corporis ea molestias inventore doloremque officia quam dignissimos.</p>
        </li>
      </footer>
    </>
  );
}
