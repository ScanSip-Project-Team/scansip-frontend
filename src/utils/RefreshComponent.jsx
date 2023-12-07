import { useEffect } from "react";
export function RefreshComponent({ setCounter }) {
  console.log("RENDER  RefreshCompo");
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("TRIGGER REFRESH ");
      setCounter((prevCount) => prevCount + 1);
    }, 30000);

    return () => clearInterval(intervalId);
  }, []); // Run useEffect only once when the component mounts
}
