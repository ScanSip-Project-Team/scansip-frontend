import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
const ProductAdmin = ({ product }) => {
  const handleUpdatekBtn = () => {
    console.log("UPDATE!");
  };
  const handleDeletekBtn = () => {
    console.log("DELETE!");
  };
  return (
    <div className="flex w-80 justify-between gap-3 border-b py-2">
      <img
        className="w-20 object-cover"
        src={product.product_image.secure_url}
        alt=""
      />
      <div className="flex flex-col gap-2">
        <span>{product.product_name}</span>
        <span>{product.product_price.toFixed(2)} €</span>
      </div>
      <div className="flex flex-col gap-2">
        <Button
          func={handleUpdatekBtn}
          elementId={product._id}
          className="rounded-full bg-black px-4 py-1 text-white"
          text="Update"
        />
        <Button
          func={handleDeletekBtn}
          elementId={product._id}
          className="rounded-full bg-red-500 px-4 py-1 text-white"
          text="Delete"
        />
      </div>
    </div>
  );
};

export default ProductAdmin;
