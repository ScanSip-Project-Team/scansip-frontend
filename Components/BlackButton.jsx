const BlackButton = ({ text, func }) => {
  return (
    <button className="rounded-md bg-black text-white" onClick={() => func()}>
      {text}
    </button>
  );
};
export default BlackButton;
