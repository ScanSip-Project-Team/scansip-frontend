import { useState } from "react";
import Modal from "../../Components/Modal";

const ProductDescription = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleModal = () => {
    setIsClicked(true);
  };

  return (
    <section className="flex h-screen w-screen flex-col justify-around bg-red-500">
      <div onClick={handleModal} className="h-3/4">
        Coca cola
      </div>

      <Modal />
    </section>
  );
};

export default ProductDescription;
