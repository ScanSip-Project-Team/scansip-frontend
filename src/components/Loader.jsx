import loaderGif from "../assets/loader.gif";
const Loader = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center ">
      <div className="">
        <img className="w-60" src={loaderGif} alt="" />
      </div>
    </div>
  );
};
export default Loader;
