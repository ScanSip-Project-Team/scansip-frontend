const Button = ({ func, elementId, className, text, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={() => {
        func(elementId);
      }}
      className={`m-auto ${className}`}
    >
      {text}
    </button>
  );
};
export default Button;
