// Lorsque je clique sur une boisson je fais une requete pour aller chercher toutes les informations de celles ci grace à son id 
// je récupère ses infos de façon asynchrone et les affichent dans la modal 

const Modal = ({setOpenModal}) => {

const handleCloseModal = () => {
 setOpenModal(false)
}

  return (
    <div className="h-max w-1/2 bg-green-400 flex absolute top-1/3">
      <div>
        <p>coca cola</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p onClick={handleCloseModal}>X</p>
        
      </div>
    </div>
  );
};

export default Modal;
