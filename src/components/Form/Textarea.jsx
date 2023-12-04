const Textarea = ({
  handleOnChange,
  setStateValue,
  stateValue,
  label,
  id,
  placeholder,
  type,
  error,
}) => {
  return (
    <div className="mb-6 flex flex-col">
      <label className="mb-2" htmlFor={id}>
        {label}
      </label>
      <textarea
        onChange={(event) => {
          handleOnChange(event, setStateValue);
        }}
        rows="3"
        className={`rounded border p-2 outline-0 ${
          error && !stateValue ? "border-red-300" : " border-green-300"
        }`}
        type={type}
        id={id}
        placeholder={placeholder}
        value={stateValue}
      ></textarea>
    </div>
  );
};
export default Textarea;
