//Import Packages
import { useState } from "react";

//Import Components
import ItemNavMobile from "./ItemNavMobille";

const NavMobile = ({ displayNav, setDisplayNav }) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayService, setDisplayService] = useState(false);

  return (
    <ul className={`flex flex-col gap-6 ${displayNav ? "animate-items" : ""}`}>
      <ItemNavMobile
        setDisplayState={setDisplayMenu}
        displayState={displayMenu}
        setDisplayNav={setDisplayNav}
        displayNav={displayNav}
        subMenuPaths={[
          { name: "/admin/products", label: "Mes produits" },
          { name: "/admin/new-product", label: "Créer produits" },
        ]}
        label="Ma carte"
      />
      <ItemNavMobile
        setDisplayState={setDisplayService}
        displayState={displayService}
        setDisplayNav={setDisplayNav}
        displayNav={displayNav}
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
