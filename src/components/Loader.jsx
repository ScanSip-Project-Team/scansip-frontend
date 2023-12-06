import loaderGif from "../assets/loader.gif";
const Loader = () => {
  return (
    <div className="flex  h-96  w-screen flex-col items-center justify-center ">
      <div className="mb-3">
        <img className=" w-36  md:w-44  " src={loaderGif} alt="" />
      </div>
      <p className="primary-color text-bold text-xl">Loading ...</p>
    </div>
  );
};
export default Loader;
