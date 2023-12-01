//PAGE FOR TESTS
/////////////////////////
/////////////////////////
import { useState, useEffect } from "react";
// import axios from "axios";
const Lab = () => {
  const [counter, setCounter] = useState(0);

  // let action;
  // const refreshPage = () => {
  //   action = setInterval(() => {
  //     setCounter((prevCount) => prevCount + 1);
  //     console.log("refresh!");
  //   }, 1000);
  // };

  // useEffect(() => {
  //   refreshPage();

  //   return () => clearInterval(action);
  // }, [counter]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 bg-black">
      <button
        className="text-white"
        onClick={() => {
          // createOrder();
        }}
      >
        Order
      </button>
      <div>
        <p className="text-5xl text-white">Test Counter : {counter}</p>
      </div>
      <div className="relative flex flex-col gap-2">
        <span className="text-5xl font-bold text-white">Scan</span>
        {/* <div className="animate-block h-2 w-28 border-t-4 border-solid border-green-500 bg-green-500"></div> */}
        <div className="animate-block h-1 w-28"></div>
        <span className="primary-color text-5xl font-bold">Sip</span>
      </div>
    </div>
  );
};
export default Lab;
