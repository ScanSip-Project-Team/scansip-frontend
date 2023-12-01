const Button = ({ func, elementId, className, text, disabled, type }) => {
  return (
    <button
      type={type}
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
