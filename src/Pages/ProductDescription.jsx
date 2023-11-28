import { useState } from "react";
import Modal from "../../Components/Modal";

const ProductDescription = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(true);
  };

  return (
    <section className="flex h-screen w-screen bg-red-700 flex-col items-center">
      <div onClick={handleModal}>
        Coca cola
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} />}  
    </section>
  );
};

export default ProductDescription;
