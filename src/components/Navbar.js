import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import { FaGithub } from "react-icons/fa";
import DarkToggle from "./DarkToggle";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (!darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    if ("theme" in localStorage) {
      if (localStorage.getItem("theme") === "dark") {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }
  }, []);

  return (
    <nav
      className="navbar bg-transparent"
      role="navigation"
      aria-label="main-navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className="relative flex shrink-0 grow-0 items-center mb-0 px-3 py-2 cursor-pointer"
            title="Logo">
            <img src={logo} alt="Kaldi" className="w-[88px]" />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}>
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul
          id="navMenu"
          className={` navbar-start text-center navbar-menu ${
            isActive && "is-active"
          }`}>
          {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
          <li className="flex shrink-0 grow-0 items-center justify-center mb-0 p-0">
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </li>
          <li className="flex shrink-0 grow-0 items-center justify-center mb-0 p-0">
            <Link className="navbar-item" to="/products">
              Products
            </Link>
          </li>
          <li className="flex shrink-0 grow-0 items-center justify-center mb-0 p-0">
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          </li>
          <li className="flex shrink-0 grow-0 items-center justify-center mb-0 p-0">
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </li>
          <li className="flex shrink-0 grow-0 items-center justify-center mb-0 p-0">
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link>
          </li>
          <li className="flex items-center ml-auto justify-center md:justify-end text-center gap-2">
            <DarkToggle
              toggle={() => setDarkMode(!darkMode)}
              isDark={darkMode}
            />
            <a
              className="navbar-item"
              href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
              target="_blank"
              rel="noopener noreferrer">
              <span className="icon">
                <FaGithub className="text-github-500 dark:text-white" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
