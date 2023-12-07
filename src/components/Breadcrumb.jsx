// Import Assets
import chevron from "../assets/chevron.svg";

const BreadCrumb = ({ text, func }) => {
  return (
    <>
      <div className="breadcrumb" onClick={() => func()}>
        <img src={chevron} alt="chevron noir" />
        <p className="text-xs">{text}</p>
      </div>
    </>
  );
};

export default BreadCrumb;
