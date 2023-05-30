import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaVimeoV,
} from "react-icons/fa";
// import facebook from "../img/social/facebook.svg";
// import instagram from "../img/social/instagram.svg";
// import twitter from "../img/social/twitter.svg";
// import vimeo from "../img/social/vimeo.svg";

const Footer = () => {
  return (
    <footer className="footer bg-stone-800 text-white">
      <div className="content text-center">
        <img src={logo} alt="Kaldi" className="w-[14em] h-[10em] mx-auto" />
      </div>
      <div className="content text-center text-white bg-stone-800 dark:bg-woodsmoke-800">
        <div className="container bg-stone-800 dark:bg-woodsmoke-800 text-white">
          <div className="columns max-w-[100vw]">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/" className="navbar-item">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/products">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact/examples">
                      Form Examples
                    </Link>
                  </li>
                  <li>
                    <a
                      className="navbar-item"
                      href="/admin/"
                      target="_blank"
                      rel="noopener noreferrer">
                      Admin
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4">
              <section>
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/blog">
                      Latest Stories
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="gap-2 grid grid-cols-4">
              <a
                className="text-gray-700 hover:text-facebook-500 bg-white inline-flex items-center justify-center m-0 rounded-full p-2 w-8 h-8"
                href="https://facebook.com">
                <FaFacebookSquare className="w-8 h-8 outline-blue-500" />
              </a>
              <a
                className="text-gray-700 hover:text-twitter-500 bg-white inline-flex items-center justify-center m-0 rounded-full p-2 w-8 h-8"
                href="https://twitter.com">
                <FaTwitter className="w-8 h-8 outline-blue-500" />
              </a>
              <a
                className="text-gray-700 hover:text-instagram-500 bg-white inline-flex items-center justify-center m-0 rounded-full p-2 w-8 h-8"
                href="https://instagram.com">
                <FaInstagram className="w-8 h-8 outline-blue-500" />
              </a>
              <a
                className="text-gray-700 hover:text-vimeo-500 bg-white inline-flex items-center justify-center m-0 rounded-full p-2 w-8 h-8"
                href="https://vimeo.com">
                <FaVimeoV className="w-8 h-8 outline-blue-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
