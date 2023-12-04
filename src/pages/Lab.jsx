//PAGE FOR TESTS
/////////////////////////
/////////////////////////

// import toast, { Toaster } from "react-hot-toast";
// import axios from "axios";
const Lab = () => {
  const tab = [1, 3, 33, 11, 100];
  const tabObj = [
    { name: "tOm", age: 10 },
    { name: "Lu", age: 100 },
    { name: "La", age: 33 },
    { name: "Lik", age: 3 },
    { name: "Sam", age: 11 },
  ];

  const compare = (a, b) => {
    return a.age - b.age;
  };
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 bg-black">
      {tabObj.sort(compare).map((el) => {
        return (
          <p className="mb-11 text-white" key={el}>
            {el.age}
          </p>
        );
      })}
      <div className="relative flex flex-col gap-2">
        <span className="scan text-5xl font-bold text-white">Scan</span>
        {/* <div className="animate-block h-2 w-28 border-t-4 border-solid border-green-500 bg-green-500"></div> */}
        <div className="animate-block h-1 w-28"></div>
        <span className="primary-color sip text-5xl font-bold">Sip</span>
      </div>
    </div>
  );
};
export default Lab;
