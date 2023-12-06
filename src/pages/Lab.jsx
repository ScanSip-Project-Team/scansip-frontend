//PAGE FOR TESTS
/////////////////////////
/////////////////////////
import { useEffect, useRef } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import axios from "axios";
const Lab = () => {
  const myRef = useRef();

  useEffect(() => {
    window.onclick = (event) => {
      if (
        event.target.contains(myRef.current) &&
        event.target !== myRef.current
      ) {
        console.log("YOU CLICKED OUTSIDE");
      } else {
        console.log("YOU CLICKED INSIDE");
      }
    };
  }, []);
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 bg-black">
      <div className="flex h-96 w-96 items-center justify-center bg-slate-500">
        <h1 ref={myRef} className="text-5xl font-bold text-white">
          Test
        </h1>
      </div>
    </div>
    // <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 bg-black">
    //   <div className="relative flex flex-col gap-2">
    //     <span className="scan text-5xl font-bold text-white">Scan</span>
    //     {/* <div className="animate-block h-2 w-28 border-t-4 border-solid border-green-500 bg-green-500"></div> */}
    //     <div className="animate-block h-1 w-28"></div>
    //     <span className="primary-color sip text-5xl font-bold">Sip</span>
    //   </div>
    // </div>
  );
};
export default Lab;
