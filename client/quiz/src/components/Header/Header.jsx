// import logo from "/react.svg";
import "./Header.css";

function Header() {
  return (
    <nav className="relative pb-20 bg-black">
      <div className="flex py-8 px-4 lg:px-8 justify-between items-center bg-transparent sticky rounded-2xl">
        <a className="text-2xl text-white font-bold" href="/">
          <img
            className="h-7"
            src="zospace-assets/logos/zospace-logo.svg"
            alt=""
            width="auto"
          />
        </a>
        <div className="lg:hidden">
          <button className="p-2 navbar-burger">
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
        </div>
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <ul className="flex items-center text-white space-x-10 text-center">
            <li>
              <span></span>
            </li>
            <li>
              <a className="text-white font-bold text-lg" href="/">
                Quizes
              </a>
            </li>
            <span>
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
            <li>
              <a className="text-white font-bold text-lg" href="/">
                About
              </a>
            </li>
            <span>
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
            <li>
              <a className="text-white font-bold text-lg" href="/">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <a
            className="inline-block px-12 py-4 text-white font-bold border border-gray-200 hover:border-white rounded-2xl"
            href="/"
          >
            Start here
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
