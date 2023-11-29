const Button = ({ func, elementId, className }) => {
  return (
    <button
      onClick={() => {
        func(elementId);
      }}
      className={`m-auto ${className}`}
    >
      Commande servie
    </button>
  );
};
export default Button;
