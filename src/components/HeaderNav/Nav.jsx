import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ItemNav from "./ItemNav";
const Nav = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayService, setDisplayService] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const location = useLocation();
  return (
    <ul className="flex gap-2">
      <ItemNav
        setDisplayState={setDisplayMenu}
        displayState={displayMenu}
        subMenuPaths={[
          { name: "/admin/products", label: "Mes produits" },
          { name: "/admin/new-product", label: "Créer produits" },
        ]}
        label="Ma carte"
      />
      <ItemNav
        setDisplayState={setDisplayService}
        displayState={displayService}
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
