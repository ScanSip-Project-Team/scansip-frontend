// Lorsque je clique sur une boisson je fais une requête pour aller chercher toutes les informations de celles-ci grâce à son ID 
// Je récupère ses infos de façon asynchrone et les affiche dans la modal 

// Import Package
import axios from "axios";
import { useEffect, useState } from "react";

const Modal = ({ setOpenModal, productID }) => {
  const [data, setData] = useState();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(`https://site--scansip-backend--jswmm7jk2mlr.code.run/product-description/${productID}`);
        setData(response.data);
      };
  
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [productID]);

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  const nutritionalValues = [];

  if (data) { 
    for (let k in data.nutritional_values) {
      nutritionalValues.push({
        type: k,
        value: data.nutritional_values[k]
      });
    } 
  }

  return (
    <div className="h-max w-1/2 bg-green-400 flex absolute top-1/3">
      {data && <div> 
        <div> 
          <p onClick={handleCloseModal}>X</p>
          <img src={data.product_image.secure_url} />
          <p>{data.product_price} €</p>
        </div>
        <p>{data.product_name}</p>
        <p>INGREDIENTS :</p>
        <p>{data.product_description}</p>
        <p>TABLEAU NUTRITIONNEL : </p> 
        {nutritionalValues.map((elem) => {
          console.log(elem);
          return (
            <div key={elem.type}>
              <span>{elem.type}</span>
              <span>{elem.value}</span>
            </div>
          );
        })}
      </div>}
    </div>
  );
};

export default Modal;
