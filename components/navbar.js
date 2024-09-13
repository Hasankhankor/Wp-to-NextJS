import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState("hidden");

  const openNavigationMenu = () => {
    setIsOpen(isOpen === "hidden" ? "active" : "hidden");
  };

  return (
    <div className="bg-dark">
      <header className="max-w-7xl mx-auto py-2 px-5">
        <nav
          id="navigation"
          className="flex flex-wrap justify-between items-center md:mx-auto"
        >
          <div id="logo">
            <Link
              href="/"
              className="ease-linear transition-opacity hover:opacity-80"
            >
              <span className="text-white text-2xl font-bold">Wp to NextJS</span>
            </Link>
          </div>
          <button
            onClick={openNavigationMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700"
            aria-controls="navbar-default"
            aria-expanded={isOpen === "hidden" ? "false" : "true"}
          >
            <span className="sr-only">
              {isOpen === "hidden" ? "Menü öffnen" : "Menü schließen"}
            </span>
            <div
              className="flex flex-col justify-between w-8 h-5 rounded-lg p-0.5"
              aria-hidden="true"
            >
              <span id="bar" className="h-0.5 w-full bg-white"></span>
              <span id="bar" className="h-0.5 w-full bg-white"></span>
              <span id="bar" className="h-0.5 w-full bg-white"></span>
            </div>
          </button>
          <div
            id="navbar-default"
            className={`${isOpen} w-full md:block md:w-auto`}
          >
            <ul className="flex flex-col p-4 gap-2 font-montserrat text-white border-gray-100 md:flex-row md:space-x-5 md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <Link
                  href="/how-to-use"
                  className="ease-linear transition-opacity hover:opacity-80"
                >
                  How to use
                </Link>
              </li>

              <li>
                <a
                  className="ease-linear transition-opacity hover:opacity-80"
                  href="mailto:Hkhankor@gmail.com"
                  title="Contact Hasan"
                >
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
