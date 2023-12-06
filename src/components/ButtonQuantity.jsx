const ButtonQuantity = ({ text, func }) => {
  return (
    <>
      <button
        className="h-[32px] w-[32px] rounded-[20px]  bg-[#E8E8E8] text-center text-[10px]"
        onClick={() => func()}
      >
        {text}
      </button>
    </>
  );
};
export default ButtonQuantity;
