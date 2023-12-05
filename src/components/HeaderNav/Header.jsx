//Import Packages
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
//Import Component
import Nav from "./Nav";
// Import Asset
import logo from "../../assets/logo.svg";

const Header = ({ adminToken, setAdminToken }) => {
  const navigate = useNavigate();
  // const [displayMenu, setDisplayMenu] = useState(false);
  // const [displayService, setDisplayService] = useState(false);
  const [displayLogout, setDisplayLogout] = useState(false);
  // const [isDropDown, setIsDropDown] = useState(false);
  const location = useLocation();
  console.log(location);

  const handleLogOut = () => {
    Cookies.remove("scanSipToken");
    setAdminToken("");
    navigate("/admin/signin");
  };
  return (
    <header className="mb-10 hidden items-center justify-between bg-black px-4 sm:flex">
      <div className="flex w-96 items-center">
        <img className="mr-2 w-20" src={logo} alt="logo ScanSip" />
        {adminToken && <Nav />}
        
      </div>
      {adminToken && (
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
