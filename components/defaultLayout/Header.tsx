import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    ? "nav-link font-bold text-blue-600"
    : "nav-link font-bold";

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed w-full ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } transition duration-500 ease-in-out z-50`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <p className="text-white font-p>ld text-xl">Logo</p>
            </Link>
          </div>
          <div className="block md:hidden">
            <button className="hamburger" onClick={handleMenuOpen}>
              <span className="hamburger-line">k</span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
          <div className={`md:flex md:items-baseline md:space-x-4 ${menuOpen ? "block" : "hidden"}`}>
            <Link href="/">
              <p className={`${navLinkClassName} block md:inline-block mb-2 md:mb-0`}>HOME</p>
            </Link>
            <Link href="/about">
              <p className={`${navLinkClassName} block md:inline-block mb-2 md:mb-0`}>ABOUT</p>
            </Link>
            <div className="flex flex-col md:flex-row">
              <div className="relative inline-block text-left md:mr-4">
                <select
                  className={`${navLinkClassName} border rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:border-blue-600 focus:border-blue-600 focus:outline-none focus:shadow-outline-blue active:outline-none active:shadow-outline-blue`}
                >
                  <option>ACCOUNT</option>
                  <option>Login</option>
                  <option>Signup</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
              </div>
              <div className="relative inline-block text-left">
                <select
                  className={`${navLinkClassName} border rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:border-blue-600 focus:border-blue-600 focus:outline-none focus:shadow-outline-blue active:
:outline-none active:shadow-outline-blue`}
                  >
                    <option>PAGES</option>
                    <option>Login</option>
                    <option>Signup</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                </div>
              </div>
              <Link href="/contact">
                <p className={navLinkClassName}>CONTACT</p>
              </Link>
              <button className={`${navLinkClassName} btn-primary font-bold`}>BOOK NOW</button>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Header;
