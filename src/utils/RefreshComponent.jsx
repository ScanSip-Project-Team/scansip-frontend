import { useEffect } from "react";
export function RefreshComponent({ setCounter }) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCount) => prevCount + 1);
    }, 30000);

    return () => clearInterval(intervalId);
  }, []); // Run useEffect only once when the component mounts
}
