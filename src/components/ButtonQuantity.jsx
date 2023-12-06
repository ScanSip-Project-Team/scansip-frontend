const ButtonQuantity = ({ text, func }) => {
  return (
    <div>
      <button
        className="h-[32px] w-[32px] rounded-[20px]  bg-[#E8E8E8] text-center text-[10px]"
        onClick={() => func()}
      >
        {text}
      </button>
    </div>
  );
};
export default ButtonQuantity;
