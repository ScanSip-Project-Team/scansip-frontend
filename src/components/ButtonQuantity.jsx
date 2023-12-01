const ButtonQuantity = ({ text, func }) => {
  return (
    <>
      <button
        className="h-8 w-8 rounded-full bg-[#E8E8E8]"
        onClick={() => func()}
      >
        {text}
      </button>
    </>
  );
};
export default ButtonQuantity;
