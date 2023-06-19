import { useState, useEffect } from "react";
import Link from "next/link";

import { Button, Dropdown } from "antd";
import { HiX } from "react-icons/hi";

const accountMenuItems = [
  { key: "1", label: "Login" },
  { key: "2", label: "Signup" },
];

const dropdownButtonStyle = {
  border: "none", // Remove border
  padding: "0px",
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    color: hovered ? "#CFAE30" : "",
    borderColor: "transparent",
    border: "none", // Remove border
    padding: "0px",
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClassName = isScrolled
    ? "nav-link font-bold text-yellow-500"
    : "nav-link font-bold text-white";

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed w-full ${
        isScrolled ? "bg-white shadow-full" : "bg-transparent"
      } transition duration-500 ease-in-out z-50`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <p className="text-yellow-500 font-p>ld text-2xl font-extrabold">
                KandB
              </p>
            </Link>
          </div>
          <div className="block md:hidden">
            {!menuOpen ? (
              <button className="hamburger" onClick={handleMenuOpen}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-10 h-10 rounded-full bg-yellow-500 p-2 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            ) : (
              <div onClick={handleMenuOpen}>
                <HiX className="w-10 h-10 rounded-full bg-yellow-500 p-2 text-white" />
              </div>
            )}
          </div>
          <div className={`md:flex md:items-baseline md:space-x-4 hidden`}>
            <Link href="/">
              <p
                className={`${navLinkClassName} block md:inline-block mb-2 md:mb-0`}
              >
                HOME
              </p>
            </Link>
            <Link href="/aboutus">
              <p
                className={`${navLinkClassName} block md:inline-block mb-2 md:mb-0 `}
              >
                ABOUT
              </p>
            </Link>
            <Link href="/gallery">
              <p
                className={`${
                  menuOpen ? "text-white py-2" : ""
                } ${navLinkClassName} block mb-2 transition-colors duration-300`}
              >
                GALLERY
              </p>
            </Link>
            <Dropdown
              className={`${navLinkClassName} block md:inline-block mb-2 md:mb-0 `}
              menu={{ items: accountMenuItems }}
              placement="bottomLeft"
              arrow
            >
              <Button
                style={buttonStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${navLinkClassName} text-base`}
              >
                ACCOUNT
              </Button>
            </Dropdown>

            <Link href="/contact">
              <p className={`${navLinkClassName} hidden md:block`}>CONTACT</p>
            </Link>
            <Link href="/wishlist">
              <p className={`${navLinkClassName} hidden md:block`}>WISHLIST</p>
            </Link>

            <Link href="/booking">
              <button
                className={`${navLinkClassName} btn-primary font-bold hidden md:block`}
              >
                BOOK NOW
              </button>
            </Link>
          </div>
        </div>
        {/* Mobile menu */}
        <div className="flex justify-end">
          <div
            className={`md:hidden ${
              menuOpen ? "block" : "hidden"
            } bg-black/90 p-5 w-full rounded-lg max-h-96 py-20 mx-auto transition-all duration-300 transform ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <Link href="/">
              <p
                className={`${
                  menuOpen ? "text-white py-2" : ""
                } ${navLinkClassName} block mb-2 transition-colors duration-300`}
              >
                HOME
              </p>
            </Link>
            <Link href="/aboutus">
              <p
                className={`${
                  menuOpen ? "text-white py-2" : ""
                } ${navLinkClassName} block mb-2 transition-colors duration-300`}
              >
                ABOUT
              </p>
            </Link>
            <Link href="/gallery">
              <p
                className={`${
                  menuOpen ? "text-white py-2" : ""
                } ${navLinkClassName} block mb-2 transition-colors duration-300`}
              >
                GALLERY
              </p>
            </Link>
            <Dropdown
              className={`${
                menuOpen ? "text-white transition-colors duration-300 " : ""
              } ${navLinkClassName} block mb-2 `}
              menu={{ items: accountMenuItems }}
              placement="bottomLeft"
              arrow
            >
              <Button
                style={buttonStyle}
                className={`${navLinkClassName} text-base py-2`}
              >
                ACCOUNT
              </Button>
            </Dropdown>

            <Link href="/contact">
              <p
                className={`${
                  menuOpen ? "text-white py-2" : ""
                } ${navLinkClassName} block mb-2 transition-colors duration-300`}
              >
                CONTACT
              </p>
            </Link>
            <Link href="/wishlist">
              <p className={`${navLinkClassName} hidden md:block`}>WISHLIST</p>
            </Link>
            <Link href="/booking">
              <button
                className={`${
                  menuOpen ? "text-white bg-yellow-500 py-2 px-5" : ""
                } block mb-2 transition-colors duration-300`}
              >
                BOOK NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
