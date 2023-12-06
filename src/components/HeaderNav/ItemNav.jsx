import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SubMenu from "./SubMenu";
const ItemNav = ({
  setDisplayAlterState,
  setDisplayState,
  displayState,
  setDisplayLogout,
  subMenuPaths,
  label,
}) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const location = useLocation();

  const getMenuPath = (pathMacth, subMenuPaths) => {
    for (let i = 0; i < subMenuPaths.length; i++) {
      if (pathMacth === subMenuPaths[i].name) {
        console.log("TRUE!!=>", subMenuPaths[i].name);
        return true;
      }
    }
    return false;
  };

  return (
    <li
      onClick={() => {
        setDisplayAlterState(false);
        setDisplayLogout(false);
      }}
      className="li-target relative cursor-pointer text-white"
    >
      <span
        onClick={() => {
          setDisplayState(!displayState);
          setIsDropDown(!isDropDown);
        }}
        className={`mr-2 ${
          getMenuPath(location.pathname, subMenuPaths) ? "primary-color" : ""
        }`}
      >
        {label}
        {!isDropDown ? (
          <FontAwesomeIcon
            className={`mx-1 cursor-pointer text-sm text-white `}
            icon="fa-solid fa-chevron-down"
          />
        ) : (
          <FontAwesomeIcon
            className={`mx-1 cursor-pointer text-sm text-white `}
            icon="fa-solid fa-chevron-up"
          />
        )}
      </span>

      {displayState && <SubMenu subMenuPaths={subMenuPaths} />}
    </li>
  );
};
export default ItemNav;
