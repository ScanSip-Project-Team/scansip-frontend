// Import Package
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import Asset
import logo from "../assets/logo.svg";

const FlashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(function () {
      navigate("/home");
    }, 1500);
  }, []);

  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <img
        src={logo}
        alt="Logo carré avec une ecriture ScanSip verte sur un fond noir"
      />
    </main>
  );
};

export default FlashScreen;
