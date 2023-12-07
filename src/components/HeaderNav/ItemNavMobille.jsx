import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SubMenu from "./SubMenu";
const ItemNavMobile = ({
  displayNav,
  setDisplayNav,
  setDisplayState,
  displayState,
  subMenuPaths,
  label,
}) => {
  const location = useLocation();

  const getMenuPath = (pathMacth, subMenuPaths) => {
    for (let i = 0; i < subMenuPaths.length; i++) {
      if (pathMacth === subMenuPaths[i].name) {
        return true;
      }
    }
    return false;
  };

  return (
    <li
      className={`relative mb-5 cursor-pointer text-3xl text-white ${
        getMenuPath(location.pathname, subMenuPaths) ? "primary-color" : ""
      }`}
    >
      {label}

      <ul className=" m-6">
        {subMenuPaths.map((path) => {
          return (
            <Link
              onClick={() => {
                setDisplayNav(false);
              }}
              key={path.name}
              to={path.name}
              className={`mb-3 block ${
                location.pathname === path.name ? "primary-color" : "text-white"
              }`}
            >
              {path.label}
            </Link>
          );
        })}
      </ul>

      {displayState && <SubMenu subMenuPaths={subMenuPaths} />}
    </li>
  );
};
export default ItemNavMobile;
