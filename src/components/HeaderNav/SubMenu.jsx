import { Link, useLocation } from "react-router-dom";

const SubMenu = ({ subMenuPaths, setDisplayState }) => {
  const location = useLocation();

  console.log("subMenuPaths=>", subMenuPaths);
  return (
    <ul className="absolute top-7 w-32 rounded bg-white p-2 text-sm text-black shadow-sm">
      {subMenuPaths.map((path) => {
        return (
          <Link
            onClick={() => {
              setDisplayState(false);
            }}
            key={path.name}
            to={path.name}
            className={`mb-3 block ${
              location.pathname === path.name ? "primary-color" : ""
            }`}
          >
            {path.label}
          </Link>
        );
      })}
    </ul>
  );
};
export default SubMenu;
