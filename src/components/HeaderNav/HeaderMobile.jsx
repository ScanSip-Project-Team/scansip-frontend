//Import Packages
import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
//Import Component

import NavMobile from "./NavMobile";
// Import Asset
import logo from "../../assets/logo.svg";

const HeaderMobile = ({ adminToken, setAdminToken }) => {
  const [displayNav, setDisplayNav] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayService, setDisplayService] = useState(false);
  const [displayLogout, setDisplayLogout] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();
  const userMenuRef = useRef();

  const handleLogOut = () => {
    Cookies.remove("scanSipToken");
    setAdminToken("");
    navigate("/admin/signin");
  };

  window.onclick = (event) => {
    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
      setDisplayLogout(false);
    }
  };

  return (
    <header className="relative mb-10 flex items-center justify-between bg-black px-4 sm:hidden">
      {adminToken && (
        <FontAwesomeIcon
          onClick={() => {
            setDisplayNav(!displayNav);
          }}
          className="right-0 text-3xl text-white"
          icon="fa-solid fa-bars"
        />
      )}

      <img
        onClick={() => {
          navigate("/admin/orders");
        }}
        className="mr-2 w-28"
        src={logo}
        alt=""
      />
      {adminToken && (
        <>
          {displayNav && (
            <div
              className={`${
                displayNav ? "mobile-nav" : "hide-mobile-nav"
              } fixed bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full flex-col bg-black p-10`}
            >
              <FontAwesomeIcon
                onClick={() => {
                  setDisplayNav(false);
                }}
                className=" absolute right-10  z-20 text-3xl text-white"
                icon="fa-solid fa-circle-xmark"
              />
              <NavMobile
                displayNav={displayNav}
                setDisplayNav={setDisplayNav}
              />
            </div>
          )}
          <div className="relative">
            <FontAwesomeIcon
              ref={userMenuRef}
              onClick={() => {
                setDisplayLogout(!displayLogout);
              }}
              className="text-3xl text-white"
              icon="fa-solid fa-user"
            />
            {displayLogout && (
              <div className="absolute right-0 top-10 w-40 rounded bg-white p-2 text-sm text-black shadow-sm">
                <p
                  onClick={() => {
                    handleLogOut();
                  }}
                  className=" mb-2"
                >
                  Me deconnecter
                </p>
                <Link to="/home">UI de vente</Link>
              </div>
            )}
          </div>{" "}
        </>
      )}
    </header>
  );
};

export default HeaderMobile;
