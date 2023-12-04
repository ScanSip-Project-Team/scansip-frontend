const ButtonQuantity = ({ text, func }) => {
  return (
    <>
      <button
        className="h-[23px]  w-[25px] rounded-[20px] bg-[#E8E8E8] text-[10px] "
        onClick={() => func()}
      >
        {text}
      </button>
    </>
  );
};
export default ButtonQuantity;
