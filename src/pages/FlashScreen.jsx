// Import Package
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FlashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(function () {
      navigate("/home");
    }, 3000);
  }, [navigate]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 bg-black">
      <div className="relative flex flex-col gap-2">
        <span className="scan text-5xl font-bold text-white">Scan</span>
        <div className="animate-block h-1 w-28"></div>
        <span className="primary-color sip text-5xl font-bold">Sip</span>
      </div>
    </div>
  );
};

export default FlashScreen;
