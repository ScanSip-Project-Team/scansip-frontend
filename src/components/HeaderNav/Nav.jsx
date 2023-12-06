import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ItemNav from "./ItemNav";
const Nav = ({
  navRef,
  displayMenu,
  setDisplayMenu,
  displayService,
  setDisplayService,
  setDisplayLogout,
}) => {
  // const [displayMenu, setDisplayMenu] = useState(false);
  // const [displayService, setDisplayService] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const location = useLocation();
  return (
    <ul ref={navRef} id="navigation" className="flex gap-2">
      <ItemNav
        setDisplayAlterState={setDisplayService}
        setDisplayState={setDisplayMenu}
        displayState={displayMenu}
        setDisplayLogout={setDisplayLogout}
        subMenuPaths={[
          { name: "/admin/products", label: "Mes produits" },
          { name: "/admin/new-product", label: "Créer produits" },
        ]}
        label="Ma carte"
      />
      <ItemNav
        setDisplayAlterState={setDisplayMenu}
        setDisplayState={setDisplayService}
        displayState={displayService}
        setDisplayLogout={setDisplayLogout}
        subMenuPaths={[
          { name: "/admin/orders", label: "Services en cours" },
          { name: "/admin/history", label: "Historique" },
        ]}
        label="Mon service"
      />
    </ul>
  );
};
export default Nav;
