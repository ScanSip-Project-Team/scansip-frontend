const CustomInput = ({
  handleOnChange,
  setStateValue,
  stateValue,
  label,
  id,
  placeholder,
  type,
  classInput,
  classParentDiv,
  error,
}) => {
  return (
    <div className={`flex flex-col ${classParentDiv}`}>
      <label className="mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        onChange={(event) => {
          handleOnChange(event, setStateValue);
        }}
        className={`rounded border p-2 outline-0  ${
          error && !stateValue ? "border-red-300" : "border-green-300"
        } ${classInput}`}
        type={type}
        id={id}
        placeholder={placeholder}
        value={stateValue}
      />
    </div>
  );
};
export default CustomInput;
