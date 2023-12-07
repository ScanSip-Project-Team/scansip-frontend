import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import baseApiURL from "../api";

const ModalDelete = ({
  visible,
  setVisible,
  id,
  setIsLoading,
  isProductUpdate,
  setIsProductUpdate,
}) => {
  const setFalse = () => {
    setVisible(false);
  };
  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const response = await axios.delete(`${baseApiURL}/admin/delete/${id}`);
      setFalse();
      setIsProductUpdate(!isProductUpdate);
      setIsLoading(false);
      toast.success("Le produit a été supprimé");
      // setTimeout(setFalse, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center  bg-white bg-opacity-90">
      <div className="absolute  flex   flex-col justify-between  gap-4 overflow-y-auto overflow-x-hidden  bg-slate-100 p-10  opacity-100">
        <div>
          <Toaster />
        </div>
        <p>Êtes vous certain de vouloir supprimer ce produit ?</p>
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
    </div>
  );
};

export default ModalDelete;
