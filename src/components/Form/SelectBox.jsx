const SelectBox = ({
  handleOnChange,
  setStateValue,
  stateValue,
  label,
  id,
  error,
}) => {
  return (
    <div className="w-3/3 flex flex-1 flex-col">
      <label className="mb-2" htmlFor="category">
        Catégorie
      </label>
      <select
        onChange={(event) => {
          handleOnChange(event, setStateValue);
        }}
        className={`w-54 rounded border p-2 outline-0 ${
          error && !stateValue ? "border-red-300" : "border-green-300 "
        }`}
        name="category"
        id="category"
        value={stateValue}
      >
        <option value="">--Choisissez une catégorie--</option>

        <option value="Snacks">Snacks</option>
        <option value="Softs">Softs</option>
        <option value="Alcools">Alcools</option>
        <option value="Cocktails">Cocktails</option>
      </select>
    </div>
  );
};
export default SelectBox;
