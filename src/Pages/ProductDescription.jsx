import { useState } from "react";

// Components
import Modal from "../../Components/Modal";

const ProductDescription = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleModal = () => {
    setIsClicked(true);
  };

  return (
    <section className="h-screen w-screen bg-red-500 flex flex-col justify-around">
      <div onClick={handleModal}>Coca cola</div>

      <Modal />
    </section>
  );
};

export default ProductDescription;
