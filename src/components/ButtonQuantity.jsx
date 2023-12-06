const ButtonQuantity = ({ text, func }) => {
  return (
    <div>
      <button
        className="h-[36px]  w-[36px] rounded-[20px]   bg-[#E8E8E8] text-[10px] "
        onClick={() => func()}
      >
        {text}
      </button>
    </div>
  );
};
export default ButtonQuantity;
