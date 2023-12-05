const ButtonQuantity = ({ text, func }) => {
  return (
    <>
      <button
        className="h-[28px]  w-[28px] rounded-[20px] bg-[#E8E8E8] text-[10px] "
        onClick={() => func()}
      >
        {text}
      </button>
    </>
  );
};
export default ButtonQuantity;
