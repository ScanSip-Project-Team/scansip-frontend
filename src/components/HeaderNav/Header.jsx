//Import Packages
import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
//Import Component
import Nav from "./Nav";
// Import Asset
import logo from "../../assets/logo.svg";

const Header = ({ adminToken, setAdminToken }) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayService, setDisplayService] = useState(false);
  const [displayLogout, setDisplayLogout] = useState(false);
  // const [isDropDown, setIsDropDown] = useState(false
  const userMenuRef = useRef();
  const navRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = () => {
    Cookies.remove("scanSipToken");
    setAdminToken("");
    navigate("/admin/signin");
  };

  useEffect(() => {
    window.onclick = (event) => {
      console.log("event.target", event.target);
      console.log("navRef", navRef);
      console.log("userRef", userMenuRef);
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target)
      ) {
        setDisplayLogout(false);
        setDisplayMenu(false);
        setDisplayService(false);
      }
    };
  }, []);
  return (
    <header className="mb-10 hidden items-center justify-between bg-black px-4 sm:flex">
      <div className="flex w-96 items-center">
        <img
          onClick={() => {
            navigate("/admin/orders");
          }}
          className="mr-2 w-20"
          src={logo}
          alt="logo ScanSip"
        />
        {adminToken && (
          <Nav
            displayMenu={displayMenu}
            setDisplayMenu={setDisplayMenu}
            displayService={displayService}
            setDisplayService={setDisplayService}
            setDisplayLogout={setDisplayLogout}
            navRef={navRef}
          />
        )}
      </div>
      {adminToken && (
        <div className="relative">
          <FontAwesomeIcon
            ref={userMenuRef}
            onClick={() => {
              setDisplayLogout(!displayLogout);
              setDisplayMenu(false);
              setDisplayService(false);
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
        </div>
      )}
    </header>
  );
};

export default Header;
