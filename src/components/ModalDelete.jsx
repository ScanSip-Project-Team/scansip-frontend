import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import baseApiURL from "../api";

const ModalDelete = ({ visible, setVisible, id }) => {
  const setFalse = () => {
    setVisible(false);
  };
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${baseApiURL}/admin/delete/${id}`);

      toast.success("Le produit a été supprimé");
      setTimeout(setFalse, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" left-50 top-200 absolute right-0  h-full   w-full items-center justify-center overflow-y-auto overflow-x-hidden  bg-white pl-10 pt-8 md:inset-0">
      <div>
        <Toaster />
      </div>
      <p className="mb-6 mt-6">
        Êtes vous certain de vouloir supprimer ce produit ?
      </p>
      <div className="flex gap-14">
        <button
          className="h-10 w-20 rounded bg-black text-white"
          onClick={() => {
            setVisible(false);
          }}
        >
          Non
        </button>
        <button
          onClick={handleDelete}
          className="h-10 w-20 rounded bg-red-600 text-white"
        >
          Oui
        </button>
      </div>
    </div>
  );
};

export default ModalDelete;
