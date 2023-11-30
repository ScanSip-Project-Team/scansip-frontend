//Import Packages
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Import Component

// Import Asset
import logo from "../assets/logo.svg";

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayService, setDisplayService] = useState(false);
  const [displayLogout, setDisplayLogout] = useState(false);
  const location = useLocation();
  console.log(location);

  return (
    <header className="mb-10 flex items-center justify-between bg-black px-4">
      <div className="flex w-96 items-center justify-between">
        <img className="w-20" src={logo} alt="" />
        <ul className="flex gap-12">
          <li className="relative cursor-pointer text-white">
            <span
              onClick={(event) => {
                setDisplayMenu(!displayMenu);
              }}
              className={`mr-2 ${
                location.pathname === "/admin/products" ||
                location.pathname === "/admin/new-product"
                  ? "primary-color"
                  : ""
              }`}
            >
              Ma carte
            </span>
            <FontAwesomeIcon
              className={`mx-1 cursor-pointer text-sm text-white `}
              icon="fa-solid fa-chevron-down"
            />

            {displayMenu && (
              <ul className="absolute top-7 w-32 rounded bg-white p-2 text-sm text-black shadow-sm">
                <Link
                  to="/admin/products"
                  className={`mb-3 block ${
                    location.pathname === "/admin/products"
                      ? "primary-color"
                      : ""
                  }`}
                >
                  Mes produits
                </Link>
                <Link
                  to="/admin/new-product"
                  className={`${
                    location.pathname === "/admin/new-product"
                      ? "primary-color"
                      : ""
                  }`}
                >
                  Créer produits
                </Link>
              </ul>
            )}
          </li>
          <li className="relative text-white">
            <span
              onClick={() => {
                setDisplayService(!displayService);
              }}
              className={`mr-2 ${
                location.pathname === "/admin/orders" ||
                location.pathname === "/admin/history"
                  ? "primary-color"
                  : ""
              }`}
            >
              Mon service
            </span>
            <FontAwesomeIcon
              className={`mx-1 cursor-pointer text-sm text-white `}
              icon="fa-solid fa-chevron-down"
            />
            {displayService && (
              <ul className="absolute top-7 w-40 rounded bg-white p-2 text-sm text-black shadow-sm">
                <Link
                  to="/admin/orders"
                  className={`mb-3 block ${
                    location.pathname === "/admin/orders" ? "primary-color" : ""
                  }`}
                >
                  Services en cours
                </Link>
                <Link>Historique</Link>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="relative">
        <FontAwesomeIcon
          onClick={() => {
            setDisplayLogout(!displayLogout);
          }}
          className="text-3xl text-white"
          icon="fa-solid fa-user"
        />
        {displayLogout && (
          <div className="absolute right-0 top-10 w-40 rounded bg-white p-2 text-sm text-black shadow-sm">
            <Link>Me deconnecter</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
