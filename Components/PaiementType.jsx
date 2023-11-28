import check from "./../src/assets/check.svg";

const PaiementType = ({ img, selected, setSelected, name }) => {
  return (
    <div
      className="relative"
      onClick={() => {
        setSelected(name);
      }}
    >
      {selected === name && (
        <div className="absolute -left-1.5 -top-1">
          <img src={check} alt="Type de paiement choisit" />
        </div>
      )}
      <img
        src={img}
        alt={`icon de ${name}`}
        className="h-12 w-12 object-contain"
      />
    </div>
  );
};

export default PaiementType;
