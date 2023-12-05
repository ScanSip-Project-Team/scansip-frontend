import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ItemNav from "./ItemNav";
import ItemNavMobile from "./ItemNavMobille";
const NavMobile = ({ displayNav }) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayService, setDisplayService] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const location = useLocation();
  return (
    <ul className={`flex flex-col gap-6 ${displayNav ? "animate-items" : ""}`}>
      <ItemNavMobile
        setDisplayState={setDisplayMenu}
        displayState={displayMenu}
        subMenuPaths={[
          { name: "/admin/products", label: "Mes produits" },
          { name: "/admin/new-product", label: "Créer produits" },
        ]}
        label="Ma carte"
      />
      <ItemNavMobile
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
export default NavMobile;
