import axios from "axios";

const ModalDelete = ({ setVisible, id }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/admin/delete/${id}`,
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-red-400">
      <p>Êtes vous certain de vouloir supprimer ce produit ?</p>
      <button>Non</button>
      <button onClick={handleDelete}>Oui</button>
    </div>
  );
};

export default ModalDelete;
