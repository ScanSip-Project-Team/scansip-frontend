const Loader = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 bg-black">
      <div className="relative flex flex-col gap-2">
        <span className="loader-scan text-5xl font-bold text-white">Scan</span>
        {/* <div className="animate-block h-2 w-28 border-t-4 border-solid border-green-500 bg-green-500"></div> */}
        <div className="animate-block h-1 w-28"></div>
        <span className="primary-color loader-sip text-5xl font-bold">Sip</span>
      </div>
    </div>
  );
};
export default Loader;
