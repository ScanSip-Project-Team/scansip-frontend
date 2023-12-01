import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

import { Link } from "react-router-dom";
import { useState } from "react";
import ModalDelete from "./ModalDelete";

const ProductAdmin = ({ product }) => {
  const [visible, setVisible] = useState(false);

  const handleUpdatekBtn = () => {
    console.log("UPDATE!");
  };
  const handleDeletekBtn = () => {
    setVisible(true);
    console.log("visible >>>", visible);
    console.log("product._id >>>>", product._id);

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
        <Link to="/admin/update-product" state={{ product: product }}>
          <Button
            func={handleUpdatekBtn}
            elementId={product._id}
            className="rounded-full bg-black px-4 py-1 text-white"
            text="Update"
          />
        </Link>
        <Button
          func={handleDeletekBtn}
          elementId={product._id}
          className="rounded-full bg-red-500 px-4 py-1 text-white"
          text="Delete"
        />
      </div>

      {visible && <ModalDelete setVisible={setVisible} id={product._id} />}
    </div>
  );
};

export default ProductAdmin;
