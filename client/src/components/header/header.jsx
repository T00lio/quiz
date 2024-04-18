import { useState, Fragment, useEffect } from "react";
import Logo from "../../assets/zospace-assets/images/logo.svg";
import "./header.css";
import "../../Constants/index";
import { MENU_ITEMS } from "../../Constants/index";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenu = (event) => {
      if (
        event.target.closest(".navbar-menu") ||
        event.target.closest(".navbar-burger")
      ) {
        return;
      }
      setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.addEventListener("click", closeMenu);
    }
    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  return (
    <section className="lg:px-10 bg-gray-800">
      <nav className="navbar">
        <nav>
          <a className="text-2xl text-white font-bold" href="/">
            <img className="h-7" src={Logo} alt="" width="auto" />
          </a>
        </nav>
        <nav className="lg:hidden">
          <button className="p-2 navbar-burger" onClick={toggleMenu}>
            <svg
              className="w-10 h-3"
              width={39}
              height={13}
              viewBox="0 0 39 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={39} height={2} rx={1} fill="#C4C4C4" />
              <rect x={19} y={11} width={20} height={2} rx={1} fill="#C4C4C4" />
            </svg>
          </button>
        </nav>
        <div className="navlinks">
          <ul className="flex items-center text-white space-x-2">
            {MENU_ITEMS.map((item, index) => (
              <Fragment key={`header-${index}`}>
                <li>
                  <a className="text-white font-bold text-lg" href={item.url}>
                    {item.title}
                  </a>
                </li>
                {index === MENU_ITEMS.length - 1 ? (
                  ""
                ) : (
                  <span className="separator">
                    <svg
                      width={5}
                      height={5}
                      viewBox="0 0 5 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B" />
                    </svg>
                  </span>
                )}
              </Fragment>
            ))}
          </ul>
        </div>
        <nav className="navlinks">
          <a
            className="block mr-4 py-4 px-12 text-white  text-center font-bold border border-gray-50 hover:border-gray-100 rounded-full"
            href="/signin"
          >
            Sign in
          </a>
          <a
            className="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
            href="/signup"
          >
            Sign up
          </a>
        </nav>
      </nav>
      {/* dropdown menu */}
      <div
        className={`${
          isMenuOpen ? "" : "hidden"
        } navbar-menu fixed top-0 lg:hidden left-0 bottom-0 w-5/6 max-w-sm z-50 bg-black`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
        <nav className="relative flex flex-col py-8 h-full w-full bg-gray overflow-y-auto">
          <div className="flex items-center mb-16 pr-6">
            <a className="ml-10 text-xl text-white font-bold" href="/">
              <img src={Logo} alt="" width="auto" className="px-4" />
            </a>
          </div>
          <div className="navbar-item">
            <ul>
              {MENU_ITEMS.map((item, index) => (
                <Fragment key={`header-${index}`}>
                  <li className="mb-2 px-10">
                    <a
                      className="block pl-8 py-4 text-xl text-gray-300 hover:bg-blueGray-50 hover:text-black rounded-xl"
                      href={item.url}
                    >
                      {item.title}
                    </a>
                  </li>
                </Fragment>
              ))}
            </ul>
          </div>
          <div className="mt-auto px-10">
            <nav className="py-5 flex-center">
              <a
                className="block mb-4 py-4 px-12 text-white  text-center font-bold border border-gray-50 hover:border-gray-100 rounded-full"
                href="/signin"
              >
                Sign in
              </a>
              <a
                className="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
                href="/signup"
              >
                Sign up
              </a>
            </nav>
            <footer className="navbar-footer">
              <p className="mt-10 mb-4 text-md text-center text-white bottom-0">
                <a href="https://www.tuliosalvatierra.com">
                  2024 tuliosalvatierra.com
                </a>
              </p>
            </footer>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Header;
